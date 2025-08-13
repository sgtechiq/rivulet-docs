"use client";

import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Sidebar from './Sidebar';

export default function DocumentationLayout({ children }) {
  return (
    <html>
      <head>
        <title>Rivulet API Micro Framework Documentation</title>
      </head>
      <body>
        <Box sx={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
          <Sidebar />
          <Container component="main" sx={{ flexGrow: 1, p: 3, mt: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </body>
    </html>
  );
}