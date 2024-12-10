// components/DynamicForm.js
"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Label } from "@mui/icons-material";

const DynamicForm = ({ config }: any) => {
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any, fieldName: any) => {
    const { value } = e.target;
    setFormData({ ...formData, [fieldName]: value });
  };

  const validate = () => {
    let valid = true;
    const newErrors: any = {};

    Object.keys(config.fields).forEach((fieldName) => {
      const field = config.fields[fieldName];
      const value = formData[fieldName] || "";

      if (field.validation.required && !value) {
        valid = false;
        newErrors[fieldName] = field.errorMessage.required;
      } else if (
        field.validation.minLength &&
        value.length < field.validation.minLength
      ) {
        valid = false;
        newErrors[fieldName] = field.errorMessage.minLength;
      } else if (
        field.validation.pattern &&
        !field.validation.pattern.test(value)
      ) {
        valid = false;
        newErrors[fieldName] = field.errorMessage.pattern;
      }
      
      if (fieldName.startsWith("verify")) {
        const originalFieldName =
          fieldName.replace("verify", "").charAt(0).toLowerCase() +
          fieldName.replace("verify", "").slice(1);
        if (formData[originalFieldName] !== value) {
          valid = false;
          newErrors[fieldName] = `Verification does not match ${
            config.fields[originalFieldName]?.label || originalFieldName
          }`;
        }
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Perform form submission (e.g., API call)
    }
  };

  const isFieldDisabled = (fieldName: any) => {
    const field = config.fields[fieldName];
    if (field.dependsOn) {
      return formData[field.dependsOn] !== field.dependsValue;
    }
    return false;
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        {Object.keys(config.fields).map((fieldName, index) => {
          const field = config.fields[fieldName];
          const disabled = isFieldDisabled(fieldName);

          return (
            <Grid item xs={12} sm={6} key={index}>
              <label style={{ fontSize: "14px" }}>
                {field.label}
                {field.validation.required ? (
                  <span style={{ color: "red" }}>*</span>
                ) : null}
              </label>
              {field.type === "select" ? (
                <TextField
                  size="small"
                  select
                  //   label={field.label}
                  value={formData[fieldName] || ""}
                  onChange={(e) => handleChange(e, fieldName)}
                  disabled={disabled}
                  fullWidth
                  variant="outlined"
                  error={!!errors[fieldName]}
                  helperText={errors[fieldName] || field.note}
                >
                  {field.options.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                <TextField
                  size="small"
                  type={field.type}
                  //   label={field.label}
                  //   placeholder={field.placeholder}
                  value={formData[fieldName] || ""}
                  onChange={(e) => handleChange(e, fieldName)}
                  disabled={disabled}
                  fullWidth
                  variant="outlined"
                  error={!!errors[fieldName]}
                  helperText={errors[fieldName] || field.note}
                />
              )}
            </Grid>
          );
        })}
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "16px" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default DynamicForm;
