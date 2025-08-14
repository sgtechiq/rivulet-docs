import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function AuthMiddleware() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Authentication & Middleware
      </Typography>

      <Typography variant="body1" paragraph>
        Rivulet provides a complete JWT-based authentication system with middleware protection for API routes.
      </Typography>

      <Typography variant="body1" paragraph sx={{ color: 'success.main', fontWeight: 'bold' }}>
        Note: The authentication middleware (&apos;auth&apos;) is built-in and ready to use.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Built-in Auth Middleware
      </Typography>

      <Typography variant="body1" paragraph>
        Rivulet comes with a pre-configured authentication middleware that handles:
      </Typography>

      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1">JWT token verification</Typography></li>
        <li><Typography variant="body1">Authorization header parsing</Typography></li>
        <li><Typography variant="body1">User attachment to requests</Typography></li>
        <li><Typography variant="body1">Token expiration checks</Typography></li>
      </Box>

      <Typography variant="body1" paragraph>
        Use it directly in your routes:
      </Typography>

      <CodeBlock 
        phpCode={`// Protected route using built-in auth middleware\nroute('GET', '/profile', ['middleware' => 'auth'], function() {\n    return ['data' => 'Protected content'];\n});`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Core Commands
      </Typography>

      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Middleware Commands
        </Typography>
        <CodeBlock 
          bashCode="# Create new middleware\nphp luna create:middleware Admin\n\n# Create auth middleware\nphp luna create:middleware Auth"
        />
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Creating Middleware
      </Typography>

      <Typography variant="body1" paragraph>
        Generate a new middleware class:
      </Typography>

      <CodeBlock 
        bashCode="php luna create:middleware Admin"
        textCode="Creates: app/Middleware/AdminMiddleware.php"
      />

      <Typography variant="body1" paragraph>
        Example middleware structure:
      </Typography>

      <CodeBlock 
        phpCode={`<?php\n\nnamespace App\\Middleware;\n\nuse Rivulet\\Middleware\\Middleware;\nuse Rivulet\\Http\\Request;\nuse Closure;\n\nclass AdminMiddleware implements Middleware {\n    public function handle(Request \$request, Closure \$next) {\n        if (!\$request->user || !\$request->user->is_admin) {\n            return Response::json(['error' => 'Admin access required'], 403);\n        }\n        \n        return \$next(\$request);\n    }\n}`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Route Protection Methods
      </Typography>

      <Typography variant="h6" component="h3" gutterBottom>
        1. Direct Middleware Application
      </Typography>

      <CodeBlock 
        phpCode={`middleware('auth', function () {\n    route('POST', '/login', function () {\n        // Login logic\n    });\n    \n    route('POST', '/logout', function () {\n        // Logout logic\n    });\n    \n    route('GET', '/profile', function () {\n        // Return user profile\n    });\n});`}
      />

      <Typography variant="h6" component="h3" gutterBottom>
        2. Group Middleware with Prefix
      </Typography>

      <CodeBlock 
        phpCode={`group('prefix=admin', 'middleware=auth', function () {\n    route('GET', '/dashboard', function () {\n        return ['message' => 'Admin Dashboard'];\n    });\n    \n    route('POST', '/settings', function () {\n        return ['message' => 'Settings updated'];\n    });\n});`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Authentication Flow
      </Typography>

      <Box component="ol" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1">Client sends credentials to login endpoint</Typography></li>
        <li><Typography variant="body1">Server validates credentials and returns JWT token</Typography></li>
        <li><Typography variant="body1">Client includes token in Authorization header</Typography></li>
        <li><Typography variant="body1">AuthMiddleware verifies token and attaches user</Typography></li>
        <li><Typography variant="body1">Protected routes access user via <code>$request-user</code></Typography></li>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Token Management
      </Typography>

      <CodeBlock 
        phpCode={`// Generate token after login\n\$token = Authentication::generateToken(\$user->id);\n\n// Verify token in middleware\n\$user = Authentication::verifyToken(\$token);\n\n// Revoke token on logout\n\$user->update(['authtoken' => null]);`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Configuration
      </Typography>

      <CodeBlock 
        phpCode={`// config/auth.php\nreturn [\n    'token_expiry' => 3600, // 1 hour\n    'guards' => [\n        'api' => [\n            'driver' => 'token',\n            'hash' => false\n        ]\n    ],\n    'user_model' => 'App\\\\Models\\\\User',\n    'store_token' => true\n];`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>

      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Use middleware groups for related routes</Typography></li>
        <li><Typography variant="body1">Keep token expiration times reasonable</Typography></li>
        <li><Typography variant="body1">Always use HTTPS in production</Typography></li>
        <li><Typography variant="body1">Implement rate limiting on auth endpoints</Typography></li>
        <li><Typography variant="body1">Log authentication attempts</Typography></li>
      </Box>
    </Box>
  );
}