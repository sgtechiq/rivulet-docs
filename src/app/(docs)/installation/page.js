import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Installation() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Rivulet Framework Installation
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet is a modern PHP framework specifically designed for building high-performance APIs. With its minimalist architecture and focus on developer experience, Rivulet offers:
      </Typography>
      
      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1">Lightweight core with minimal overhead</Typography></li>
        <li><Typography variant="body1">PHP 8.3+ optimized performance</Typography></li>
        <li><Typography variant="body1">Built-in security features</Typography></li>
        <li><Typography variant="body1">Flexible deployment options</Typography></li>
        <li><Typography variant="body1">Expressive database layer</Typography></li>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        System Requirements
      </Typography>
      
      <Typography variant="body1" paragraph>
        Before installation, ensure your environment meets these requirements:
      </Typography>
      
      <CodeBlock 
        textCode="- PHP 8.3 or higher\n- Composer 2.0+\n- MySQL 5.7+/MariaDB 10.3+ or other supported database\n- Web server (Apache/Nginx) or PHP built-in server\n- 2GB RAM (minimum)\n- 100MB disk space"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Installation Steps
      </Typography>
      
      <Typography variant="body1" paragraph>
        1. Create a new project using Composer:
      </Typography>
      
      <CodeBlock 
        bashCode="composer create-project rivulet/rivulet your-api-project"
      />
      
      <Typography variant="caption" display="block" gutterBottom>
        This will install the latest stable version with all dependencies
      </Typography>
      
      <Typography variant="body1" paragraph>
        2. Navigate to your project directory:
      </Typography>
      
      <CodeBlock 
        bashCode="cd your-api-project"
      />
      
      <Typography variant="body1" paragraph>
        3. Set up environment configuration:
      </Typography>
      
      <CodeBlock 
        bashCode="cp .env.example .env"
      />
      
      <Typography variant="caption" display="block" gutterBottom>
        Edit the .env file to configure your database, mail, and other services
      </Typography>
      
      <Typography variant="body1" paragraph>
        4. Generate application encryption key:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna key:generate"
      />
      
      <Typography variant="body1" paragraph>
        5. Set up your database:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna database:migrate\nphp luna database:seed"
      />
      
      <Typography variant="caption" display="block" gutterBottom>
        This creates all necessary tables and populates sample data
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Running the Application
      </Typography>
      
      <Typography variant="body1" paragraph>
        Start the development server with optional parameters:
      </Typography>
      
      <CodeBlock 
        bashCode="# Default port (8080)\nphp luna run\n\n# Custom host and port\nphp luna run localhost:8000"
      />
      
      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        You should now be able to access your API at:
      </Typography>
      
      <CodeBlock 
        textCode="http://localhost:8080/api/status"
      />
      
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 3 }}>
        Production Deployment
      </Typography>
      
      <Typography variant="body1" paragraph>
        For production environments, we recommend:
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Using a proper web server (Nginx/Apache)</Typography></li>
        <li><Typography variant="body1">Setting <code>APP_ENV=production</code> in .env</Typography></li>
        <li><Typography variant="body1">Configuring proper permissions</Typography></li>
        <li><Typography variant="body1">Implementing HTTPS</Typography></li>
      </Box>
      
      <CodeBlock 
        bashCode="# Optimize for production\nphp luna optimize\n\n# Clear cache\nphp luna cache:clear"
      />
    </Box>
  );
}