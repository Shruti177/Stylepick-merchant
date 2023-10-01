// import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import AuthForgotpassword from './auth-forms/AuthForgetpassword'; // Import AuthForgotPassword
// // import axios from 'axios';

// const Forgotpassword = () => {
//   const [step, setStep] = useState(1); // 1 for initial step, 2 for OTP verification step
//   const [message, setMessage] = useState('');

// //   const handleVerifyOTP = async (otpData) => {
// //     try {
// //       const response = await axios.post('/api/verify-otp', {
// //         email: formData.email,
// //         phoneNumber: formData.phoneNumber,
// //         ...otpData,
// //       });
// //       if (response.data.message) {
// //         setMessage(response.data.message);
// //         // You can redirect to a different page after successful password reset
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       setMessage('Error verifying OTP. Please try again later.');
// //     }
// //   };

//   return (
//     <div>
//       {step === 1 && (
//         <AuthForgotpassword setMessage={setMessage} setStep={setStep} />
//       )}

//       {step === 2 && (
//         <div>
//           <h2>Verify OTP</h2>
//           <p>{message}</p>
//           {/* Render OTP verification form */}
//           {/* ... (rest of your OTP verification form) */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Forgotpassword;
import React, { useState } from 'react';
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import axios from 'axios';
import AuthForgetpassword from './auth-forms/AuthForgetpassword'; // Import the AuthForgetPassword component
import AuthWrapper from './AuthWrapper';

const Forgetpassword = () => {
  const [step, setStep] = useState(1); // 1 for initial step, 2 for OTP verification step

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <>
    <AuthWrapper>
      {step === 1 && (
        // Render the initial step (enter email) when step is 1
        <Formik
          initialValues={{
            email: '',
            phoneNumber: '', // Add a phone number field
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Must be a valid email')
              .max(255)
              .required('Email is required'),
            phoneNumber: Yup.string().max(15).required('Phone Number is required'), // Add phone number validation
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              setStatus({ success: false });
              setSubmitting(true);

              // Make a POST request to initiate the password reset process
              const response = await axios.post('/api/forgetpassword', {
                email: values.email,
                phoneNumber: values.phoneNumber, // Pass the phone number to the server
              });

              if (response.data.redirectURL) {
                // Password reset initiated, move to OTP verification step
                handleStepChange(2);
              }
            } catch (error) {
              setStatus({ success: false });
              setErrors({ submit: error.response.data.error });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email"
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    placeholder="example.email@gmail.com"
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error>{errors.email}</FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNumber}
                    placeholder="Enter your phone number"
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <FormHelperText error>{errors.phoneNumber}</FormHelperText>
                  )}
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>

      )}

      {step === 2 && (
        // Render the OTP verification step when step is 2
        <AuthForgetpassword handleStepChange={handleStepChange} />
      )}
      </AuthWrapper>
    </>
  );
};

export default Forgetpassword;
