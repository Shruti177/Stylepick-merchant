// // pages/authentication/ForgotPassword.js

// import React, { useState } from 'react';
// // import axios from 'axios';

// const AuthForgotpassword = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     phoneNumber: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSendOTP = async () => {
//     try {
//       const response = await axios.post('/api/forgotpassword', {
//         email: formData.email,
//         phoneNumber: formData.phoneNumber
//       });
//       if (response.data.redirectURL) {
//         setMessage(response.data.message);
//         // You can add logic to redirect the user to a verification page
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage('Failed to send OTP. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <p>{message}</p>
//       <input type="text" name="email" placeholder="Email" onChange={handleInputChange} />
//       <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleInputChange} />
//       <button onClick={handleSendOTP}>Send OTP</button>
//     </div>
//   );
// };

// export default AuthForgotpassword;

import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import axios from 'axios';
import { Link } from 'react-router-dom'; 
const AuthForgetpassword = () => {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Extract query parameters from the URL (email and phoneNumber)
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email') || '';
  const phoneNumber = searchParams.get('phoneNumber') || '';

  return (
    <>
      <Formik
        initialValues={{
          user_otp: '',
          newPassword: '',
          retypedPassword: '',
        }}
        validationSchema={Yup.object().shape({
          user_otp: Yup.string().length(6, 'OTP must be 6 characters').required('OTP is required'),
          newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('New Password is required'),
          retypedPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Retype Password is required'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(true);

            // Make a POST request to verify OTP and reset the password
            const response = await axios.post('/api/verify-otp', {
              email: email,
              phoneNumber: phoneNumber,
              ...values,
            });

            if (response.data.message) {
              // Password reset successful, redirect to login or a different page
              console.log('Password reset successful');
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h3">Verify OTP</Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="otp">Enter OTP</InputLabel>
                  <OutlinedInput
                    id="otp"
                    type="text"
                    value={values.user_otp}
                    name="user_otp"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(touched.user_otp && errors.user_otp)}
                  />
                  {touched.user_otp && errors.user_otp && (
                    <FormHelperText error id="standard-weight-helper-text-otp">
                      {errors.user_otp}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="newPassword">New Password</InputLabel>
                  <OutlinedInput
                    id="newPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={values.newPassword}
                    name="newPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    endAdornment={
                      <InputAdornment position="end">
                        <Button
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </Button>
                      </InputAdornment>
                    }
                  />
                  {touched.newPassword && errors.newPassword && (
                    <FormHelperText error id="standard-weight-helper-text-newPassword">
                      {errors.newPassword}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="retypedPassword">Retype Password</InputLabel>
                  <OutlinedInput
                    id="retypedPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={values.retypedPassword}
                    name="retypedPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(touched.retypedPassword && errors.retypedPassword)}
                    endAdornment={
                      <InputAdornment position="end">
                        <Button
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </Button>
                      </InputAdornment>
                    }
                  />
                  {touched.retypedPassword && errors.retypedPassword && (
                    <FormHelperText error id="standard-weight-helper-text-retypedPassword">
                      {errors.retypedPassword}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
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
                  Verify and Reset Password
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link variant="h6" component={RouterLink} to="/login" color="primary" >Back to Login</Link>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthForgetpassword;
