"use client";
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

// Helper function to convert escape sequences to actual characters
const unescapeCode = (code) => {
  if (!code) return '';
  return code
    .replace(/\\n/g, '\n')   // Convert \n to actual newlines
    .replace(/\\t/g, '\t')   // Convert \t to actual tabs
    .replace(/\\"/g, '"')    // Convert \" to actual quotes
    .replace(/\\\\/g, '\\'); // Convert \\ to actual backslash
};

export default function CodeBlock({ bashCode, phpCode, htmlCode, textCode }) {
  return (
    <Box sx={{ my: 2 }}>
      {bashCode && (
        <Paper elevation={1} sx={{ mb: 2, overflow: 'hidden' }}>
          <Box sx={{ 
            p: 1, 
            bgcolor: '#212121', 
            color: 'white',
            borderRadius: '4px 4px 0 0'
          }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Bash</Typography>
          </Box>
          <Box sx={{
            p: 2,
            bgcolor: '#282c34',
            color: '#abb2bf',
            fontFamily: 'monospace',
            borderRadius: '0 0 4px 4px',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {unescapeCode(bashCode)}
            </pre>
          </Box>
        </Paper>
      )}
      
      {phpCode && (
        <Paper elevation={1} sx={{ mb: 2, overflow: 'hidden' }}>
          <Box sx={{ 
            p: 1, 
            bgcolor: '#212121', 
            color: 'white',
            borderRadius: '4px 4px 0 0'
          }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>PHP</Typography>
          </Box>
          <Box sx={{
            p: 2,
            bgcolor: '#282c34',
            color: '#abb2bf',
            fontFamily: 'monospace',
            borderRadius: '0 0 4px 4px',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {unescapeCode(phpCode)}
            </pre>
          </Box>
        </Paper>
      )}
      
      {htmlCode && (
        <Paper elevation={1} sx={{ mb: 2, overflow: 'hidden' }}>
          <Box sx={{ 
            p: 1, 
            bgcolor: '#212121', 
            color: 'white',
            borderRadius: '4px 4px 0 0'
          }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>HTML</Typography>
          </Box>
          <Box sx={{
            p: 2,
            bgcolor: '#282c34',
            color: '#abb2bf',
            fontFamily: 'monospace',
            borderRadius: '0 0 4px 4px',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {unescapeCode(htmlCode)}
            </pre>
          </Box>
        </Paper>
      )}
      
      {textCode && (
        <Paper elevation={1} sx={{ mb: 2, overflow: 'hidden' }}>
          <Box sx={{
            p: 2,
            bgcolor: '#282c34',
            color: '#abb2bf',
            fontFamily: 'monospace',
            borderRadius: '4px',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {unescapeCode(textCode)}
            </pre>
          </Box>
        </Paper>
      )}
    </Box>
  );
}