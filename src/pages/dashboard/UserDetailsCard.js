import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import { CancelOutlined as CancelIcon, CalendarTodayOutlined as CalendarIcon } from '@mui/icons-material';

const UserDetailsCard = () => {
  return (
    <Card>
      {/* Card Header */}
      <Grid container justifyContent="space-between" alignItems="center" padding={2}>
        <Grid item>
          <Typography variant="h6">Basic Details</Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <CancelIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* Card Content */}
      <CardContent>
        <Grid container spacing={2}>
          {/* Username */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Username:</strong> Owner
            </Typography>
          </Grid>

          {/* Image */}
          <Grid item xs={12}>
            {/* Add your image here */}
            <img src="your-image-url" alt="User" />
          </Grid>

          {/* Location */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Location:</strong> Delhi
            </Typography>
          </Grid>

          {/* Pricing Plan */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Pricing Plan:</strong> Yearly
            </Typography>
          </Grid>

          {/* Pricing Start Date */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Pricing Start Date:</strong> 2023-10-01
              <IconButton>
                <CalendarIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Grid>

          {/* Pricing Valid Till */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Pricing Valid Till:</strong> 2024-09-30
              <IconButton>
                <CalendarIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserDetailsCard;
