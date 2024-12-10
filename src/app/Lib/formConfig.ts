// lib/formConfig.js
const formConfig = {
  candidateForm: {
    fields: {
      candidateName: {
        label: 'Candidate Name',
        type: 'text',
        placeholder: 'Enter candidate name',
        validation: { required: false },
        errorMessage: { required: 'Candidate name is required' },
      },
      verifyCandidateName: {
        label: 'Verify Candidate Name',
        type: 'text',
        placeholder: 'Verify candidate name',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      gender: {
        label: 'Gender',
        type: 'select',
        options: [
          { value: '', label: 'Select Gender' },
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Gender is required' },
      },
      verifyGender: {
        label: 'Verify Gender',
        type: 'select',
        options: [
          { value: '', label: 'Select Gender' },
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      dob: {
        label: 'Date of Birth',
        type: 'date',
        validation: { required: true },
        errorMessage: { required: 'Date of birth is required' },
      },
      verifyDob: {
        label: 'Verify Date of Birth',
        type: 'date',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      fatherName: {
        label: 'Father Name',
        type: 'text',
        placeholder: 'Enter father name',
        validation: { required: true },
        errorMessage: { required: 'Father name is required' },
      },
      verifyFatherName: {
        label: 'Verify Father Name',
        type: 'text',
        placeholder: 'Verify father name',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      motherName: {
        label: 'Mother Name',
        type: 'text',
        placeholder: 'Enter mother name',
        validation: { required: true },
        errorMessage: { required: 'Mother name is required' },
      },
      verifyMotherName: {
        label: 'Verify Mother Name',
        type: 'text',
        placeholder: 'Verify mother name',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      minorityStatus: {
        label: 'Minority Status',
        type: 'select',
        options: [
          { value: '', label: 'Select Status' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Minority status is required' },
      },
      minorityOption: {
        label: 'Minority Option',
        type: 'select',
        options: [
          { value: '', label: 'Select Option' },
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Minority option is required' },
        dependsOn: 'minorityStatus',
        dependsValue: 'yes',
      },
    },
  },
};

export default formConfig;
