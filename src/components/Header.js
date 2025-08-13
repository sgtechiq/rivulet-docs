"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <Image
            src="https://via.placeholder.com/40x40?text=Rivulet"
            alt="Rivulet Logo"
            width={40}
            height={40}
          />
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rivulet API Micro Framework
        </Typography>
        <Button color="inherit">Documentation</Button>
        <Button color="inherit">GitHub</Button>
      </Toolbar>
    </AppBar>
  );
}