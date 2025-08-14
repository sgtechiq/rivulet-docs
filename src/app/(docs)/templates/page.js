import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function TemplateEngine() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Template Engine
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet&apos;s lightweight template engine handles basic variable replacement and array iteration with a simple syntax.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Core Command
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Template Creation
        </Typography>
        <CodeBlock 
          bashCode="# Create new template\nphp luna create:template welcome\n\n# Create nested directory template\nphp luna create:template emails/verification"
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Configuration
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nreturn [\n    'paths' => [\n        dirname(__DIR__) . '/resources/views', // Primary views directory\n    ],\n    \n    'extension' => '.html', // Default file extension\n    \n    'compiled' => dirname(__DIR__) . '/storage/cache/views', // Compiled templates\n];`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Supported Syntax
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Variable Replacement
        </Typography>
        <CodeBlock 
          htmlCode={`<!-- Simple variable -->\n<title>{{$app_name}}</title>\n\n<!-- With optional spaces -->\n<p>Version: {{ $version }}</p>`}
        />
        <Typography variant="body2" color="text.secondary">
          Note: Only direct variable access is supported. No filters or formatting.
        </Typography>
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Array Iteration
        </Typography>
        <CodeBlock 
          htmlCode={`<!-- Loop through array -->\n{{map $links}}\n  <a href="{{$links.url}}">{{$links.text}}</a>\n{{end map}}`}
        />
        <Typography variant="body2" color="text.secondary">
          Note: Only one-level deep iteration is supported.
        </Typography>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Built-in Templates
      </Typography>
      
      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1"><code>404.html</code> - Not Found error page</Typography></li>
        <li><Typography variant="body1"><code>unauthorized.html</code> - 403 Forbidden page</Typography></li>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Rendering Views
      </Typography>
      
      <CodeBlock 
        phpCode={`// From a controller\nreturn \$this->view('welcome', [\n    'app_name' => 'Rivulet',\n    'version' => '1.0',\n    'links' => [\n        ['url' => '/docs', 'text' => 'Documentation'],\n        ['url' => '/contact', 'text' => 'Contact']\n    ]\n]);\n\n// With nested directory structure\nreturn \$this->view('emails.verification', \$data);`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Keep business logic out of templates</Typography></li>
        <li><Typography variant="body1">Pre-compute complex data in controllers</Typography></li>
        <li><Typography variant="body1">Use clear variable names (<code>$user_name</code> vs <code>$un</code>)</Typography></li>
        <li><Typography variant="body1">Document expected variables in template comments</Typography></li>
      </Box>
    </Box>
  );
}