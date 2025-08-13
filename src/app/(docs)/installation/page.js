import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Installation() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Installation
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Requirements
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Installing Rivulet
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <CodeBlock 
        bashCode="composer require rivulet/framework"
        phpCode="<?php\nrequire 'vendor/autoload.php';\n\n$app = new Rivulet\\Application();"
        htmlCode="<!DOCTYPE html>\n<html>\n<head>\n    <title>Rivulet Framework</title>\n</head>\n<body>\n    <h1>Hello, Rivulet!</h1>\n</body>\n</html>"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Configuration
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <CodeBlock 
        bashCode="cp .env.example .env"
        phpCode="<?php\nreturn [\n    'app_name' => 'Rivulet App',\n    'debug' => true,\n];"      />
    </Box>
  );
}