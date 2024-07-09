// lib/formConfig.js
const formConfig = {
  candidateForm: {
    fields: {
      candidateName: {
        label: 'Candidate Name',
        type: 'text',
        placeholder: 'Enter candidate name',
        validation: { required: true },
        errorMessage: { required: 'Candidate name is required' },
        regex:/^(?!.*\b(\w)\1{1,}\b)(?!.*\s{2,})[A-Z]+(?:\s[A-Z]+)*$/
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
  candidateEducation: {
    fields: {
      Class10thBoardExaminationRollNo: {
        label: 'Class 10th Board Examination Roll No',
        type: 'text',
        placeholder: 'Class 10th Board Examination Roll No*',
        validation: { required: true },
        errorMessage: { required: 'Candidate name is required' },
        regex:/^(?!.*\b(\w)\1{1,}\b)(?!.*\s{2,})[A-Z]+(?:\s[A-Z]+)*$/
      },
      PassingYearoftheClass10th: {
        label: 'Passing Year of the Class 10th*',
        type: 'text',
        placeholder: 'Passing Year of the Class 10th*',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
      Class10thBoardName: {
        label: 'Class 10th Board Name*',
        type: 'select',
        options: [
          { value: '', label: 'Select Class 10th Board Name*' },
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ],
        validation: { required: true },
        errorMessage: { required: 'Gender is required' },
      },
     
     
      
      EnterBoardName: {
        label: 'Enter Board Name',
        type: 'text',
        placeholder: 'Enter Board Name ',
        validation: { required: true },
        errorMessage: { required: 'Verification is required' },
      },
     
     
     
    
    },
  },
  candidateContactDetails:{
    fields: {
      emailAddress: {
        label: 'E-Mail Address',
        type: 'email',
        placeholder: 'Please enter e-mail address',
        validation: { required: true },
        errorMessage: { required: 'E-Mail is required' },
        regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      },
      mobileNumber: {
        label: 'Mobile Number*',
        type: 'number',
        placeholder: 'Please enter mobile number',
        validation: { required: true },
        errorMessage: { required: 'Mobile number is required' },
        regex:/^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
      },
      altEmailAddress: {
        label: 'Alternate E-mail Address',
        type: 'email',
        placeholder: 'Please enter e-mail address',
        validation: { required: false },
        // errorMessage: { required: 'E-Mail is required' },
        regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      },
     
      altMobileNumber: {
        label: 'Mobile Number',
        type: 'number',
        placeholder: 'Please enter alternate mobile number',
        validation: { required: false },
        errorMessage: { required: 'Alternate mobile number is required' },
        regex:/^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
      },

      capcha: {
        label: 'Captcha',
        type: 'text',
        placeholder: 'Enter the letter as they are shown in the image above.',
        validation: { required: false },
        errorMessage: { required: 'Captcha is required' },
        // regex:/^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
      },
     
    },
  }
};

export default formConfig;
