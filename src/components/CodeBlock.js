"use client";

import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export default function CodeBlock({ bashCode, phpCode, htmlCode }) {
  return (
    <Box sx={{ my: 2 }}>
      {bashCode && (
        <Paper elevation={1} sx={{ mb: 2 }}>
          <Box sx={{ p: 1, bgcolor: '#212121', color: 'white' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Bash</Typography>
          </Box>
          <Box sx={{
            p: 2,
            bgcolor: '#282c34',
            color: '#abb2bf',
            fontFamily: 'monospace',
            borderRadius: 1,
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {bashCode}
            </pre>
          </Box>
        </Paper>
      )}

      {phpCode && (
        <Paper elevation={1} sx={{ mb: 2 }}>
          <Box sx={{ p: 1, bgcolor: '#212121', color: 'white' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>PHP</Typography>
          </Box>
          <Box sx={{
            p: 2,
            bgcolor: '#282c34',
            color: '#abb2bf',
            fontFamily: 'monospace',
            borderRadius: 1,
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {phpCode}
            </pre>
          </Box>
        </Paper>
      )}

      {htmlCode && (
        <Paper elevation={1} sx={{ mb: 2 }}>
          <Box sx={{ p: 1, bgcolor: '#212121', color: 'white' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>HTML</Typography>
          </Box>
          <Box sx={{
            p: 2,
            bgcolor: '#282c34',
            color: '#abb2bf',
            fontFamily: 'monospace',
            borderRadius: 1,
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {htmlCode}
            </pre>
          </Box>
        </Paper>
      )}
    </Box>
  );
}