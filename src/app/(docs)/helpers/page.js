import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Helpers() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Helpers System
      </Typography>

      <Typography variant="body1" paragraph>
        Rivulet provides a rich set of helper functions that are globally available throughout your application. These helpers simplify common tasks and provide convenient shortcuts to framework functionality.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Built-in Helpers
      </Typography>

      <Typography variant="body1" paragraph>
        The framework comes with these essential helpers pre-loaded:
      </Typography>

      <Typography variant="h6" component="h3" gutterBottom>
        Application Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// Get application instance\napp();\n\n// Get environment variable\nenv('APP_ENV', 'production');\n\n// Get configuration value\nconfig('database.default');`}
      />

      <Typography variant="h6" component="h3" gutterBottom>
        Routing Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// Define route\nroute('GET', '/path', 'Controller@method');\n\n// Group routes with prefix\nprefix('api', function() {\n    route('GET', '/users', 'UserController@index');\n});\n\n// Apply middleware\ngroup('middleware=auth', function() {\n    route('GET', '/profile', 'ProfileController@show');\n});`}
      />

      <Typography variant="h6" component="h3" gutterBottom>
        Response Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// Success response\njsonSuccess(['data' => \$results]);\n\n// Error response\njsonError('Invalid input', 422);`}
      />

      <Typography variant="h6" component="h3" gutterBottom>
        Security Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// Password hashing\n\$hash = PassEncrypt('password123');\n\n// Password verification\nif (PassVerify('password123', \$hash)) {\n    // Valid password\n}`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Creating Custom Helpers
      </Typography>

      <Typography variant="body1" paragraph>
        You can create your own helper files in the <code>app/Helpers</code> directory. These files are auto-loaded and their functions become globally available.
      </Typography>

      <Typography variant="h6" component="h3" gutterBottom>
        Example Helper File
      </Typography>
      <CodeBlock 
        bashCode="# Create new helper file\ntouch app/Helpers/slug.php"
        phpCode={`<?php\n\n// app/Helpers/slug.php\nfunction article_slug(\$title)\n{\n    return str_replace(' ', '-', strtolower(\$title));\n}`}
      />

      <Typography variant="h6" component="h3" gutterBottom>
        Using Custom Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// In controller\npublic function addArticle()\n{\n    \$data = \$this->request->input();\n    \$data['slug'] = article_slug(\$data['title']);\n    // ...\n}`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Helper Categories
      </Typography>

      <Typography variant="h6" component="h3" gutterBottom>
        Logging Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// Log message\nLogMessage('User logged in', 'info');`}
      />

      <Typography variant="h6" component="h3" gutterBottom>
        Cache Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// Get cached value\n\$value = GetCache('key');\n\n// Store in cache\nPutCache('key', \$value, 3600);`}
      />

      <Typography variant="h6" component="h3" gutterBottom>
        Validation Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// Validate data\nvalidate(\$input, [\n    'email' => 'required|email',\n    'password' => 'required|min:8'\n]);`}
      />

      <Typography variant="h6" component="h3" gutterBottom>
        Session Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// Set session\nSetSession('user_id', 123);\n\n// Get session\n\$userId = GetSession('user_id');\n\n// Flash session\nFlashSession('message', 'Success!');`}
      />

      <Typography variant="h6" component="h3" gutterBottom>
        Date Helpers
      </Typography>
      <CodeBlock 
        phpCode={`// Carbon instance\n\$tomorrow = carbon('tomorrow');`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>

      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Group related helpers in logical files</Typography></li>
        <li><Typography variant="body1">Prefix helper names to avoid collisions</Typography></li>
        <li><Typography variant="body1">Keep helpers focused on single tasks</Typography></li>
        <li><Typography variant="body1">Document helper functions with PHPDoc</Typography></li>
        <li><Typography variant="body1">Test helpers thoroughly</Typography></li>
      </Box>
    </Box>
  );
}