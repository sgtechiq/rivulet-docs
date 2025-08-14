import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Routing() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Routing System
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet&apos;s routing system provides a clean, intuitive way to define web routes with support for RESTful patterns, middleware, and route caching.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Route Configuration
      </Typography>
      
      <Typography variant="body1" paragraph>
        The <code>config/routes.php</code> configuration file defines how URI prefixes map to route definition files in your Rivulet application.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Configuration Overview
      </Typography>
      
      <Typography variant="body1" paragraph>
        The configuration file (<code>config/routes.php</code>) serves as the central registry for:
      </Typography>
      
      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1">URI prefix to route file mappings</Typography></li>
        <li><Typography variant="body1">Route loading order</Typography></li>
        <li><Typography variant="body1">Application entry points</Typography></li>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Basic Structure
      </Typography>
      
      <Typography variant="body1" paragraph>
        The configuration returns an array with a <code>handlers</code> key that maps URI prefixes to route files:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nreturn [\n    'handlers' => [\n        // Default route handler (for root path '/')\n        ''    => 'web.php',\n        \n        // API route handler (for paths beginning with '/api')\n        'api' => 'api.php',\n        \n        // Admin panel routes\n        'admin' => 'admin.php'\n    ],\n];`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Key Concepts
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          URI Prefix Matching
        </Typography>
        <Typography variant="body1" paragraph>
          Routes are matched in the order they are defined. The empty string prefix (<code>&apos;&apos;</code>) handles the root path.
        </Typography>
        
        <Typography variant="h5" component="h3" gutterBottom>
          Route File Loading
        </Typography>
        <Typography variant="body1" paragraph>
          Each route file should be placed in the <code>routes/</code> directory and will be automatically loaded when its prefix matches.
        </Typography>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Core Commands
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Routing System Commands
        </Typography>
        <CodeBlock 
          bashCode="# List all registered routes\nphp luna routes:list\n\n# Cache routes for better performance\nphp luna routes:cache\n\n# Clear route cache\nphp luna routes:clear"
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Routing System Overview
      </Typography>
      
      <Typography variant="body1" paragraph>
        The routing system consists of three main components:
      </Typography>
      
      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1"><strong>Route Definitions</strong> - Declared in route files under <code>/routes</code> directory</Typography></li>
        <li><Typography variant="body1"><strong>Router</strong> - Matches incoming requests to registered routes</Typography></li>
        <li><Typography variant="body1"><strong>Route Caching</strong> - Improves performance by caching compiled routes</Typography></li>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Basic Routing
      </Typography>
      
      <Typography variant="body1" paragraph>
        Define routes in your route files (e.g. <code>routes/api.php</code>):
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\n// Basic GET route with closure\nroute('GET', '/welcome', function () {\n    return ['message' => 'Welcome to our API'];\n});\n\n// Route to controller method\nroute('POST', '/users', UserController::class, 'store');`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Route Parameters
      </Typography>
      
      <Typography variant="body1" paragraph>
        Capture URI segments as parameters:
      </Typography>
      
      <CodeBlock 
        phpCode={`// Required parameter\nroute('GET', '/users/{id}', UserController::class, 'show');\n\n// Optional parameter (needs custom handling)\nroute('GET', '/posts/{id?}', PostController::class, 'show');`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Route Groups
      </Typography>
      
      <Typography variant="body1" paragraph>
        Group routes with common attributes:
      </Typography>
      
      <CodeBlock 
        phpCode={`// Prefix group\nprefix('admin', function () {\n    route('GET', '/dashboard', AdminController::class, 'dashboard');\n    route('GET', '/users', AdminController::class, 'users');\n});\n\n// Middleware group\nmiddleware('auth', function () {\n    route('GET', '/profile', UserController::class, 'profile');\n    route('PUT', '/settings', UserController::class, 'updateSettings');\n});\n\n// Combined group\ngroup('prefix=api, middleware=auth:api', function () {\n    route('GET', '/data', DataController::class, 'index');\n});`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        CRUD Resource Routes
      </Typography>
      
      <Typography variant="body1" paragraph>
        Quickly generate CRUD routes for a resource:
      </Typography>
      
      <CodeBlock 
        phpCode={`// Manual CRUD routes\nroute('GET', '/articles', ArticleController::class, 'index');\nroute('POST', '/articles', ArticleController::class, 'store');\nroute('GET', '/articles/{id}', ArticleController::class, 'show');\nroute('PUT', '/articles/{id}', ArticleController::class, 'update');\nroute('DELETE', '/articles/{id}', ArticleController::class, 'destroy');\n\n// Using endpoint helper\nendpoint('articles', ArticleController::class);`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Route Caching
      </Typography>
      
      <Typography variant="body1" paragraph>
        Cache routes for better performance in production:
      </Typography>
      
      <CodeBlock 
        bashCode="# Cache routes\nphp luna routes:cache\n\n# Clear route cache\nphp luna routes:clear\n\n# List routes (shows cached routes if available)\nphp luna routes:list"
      />
      
      <Typography variant="body1" paragraph>
        Route caching is automatically triggered when running <code>routes:cache</code> or when routes are loaded in production mode.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        File Serving
      </Typography>
      
      <Typography variant="body1" paragraph>
        Serve files directly through routes:
      </Typography>
      
      <CodeBlock 
        phpCode={`// Serve single file\nroute('GET', '/download/terms', function () {\n    return Response::file('docs/terms.pdf');\n});\n\n// Dynamic file serving\nroute('GET', '/download/{file}', function (Request \$request, \$file) {\n    return Response::file("docs/\$file");\n});`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Complete Example
      </Typography>
      
      <Typography variant="body1" paragraph>
        A complete API route file example:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nuse App\\Controllers\\ArticleController;\nuse App\\Controllers\\UserController;\n\n// Public routes\nroute('GET', '/', function () {\n    return ['status' => 'API is running'];\n});\n\n// User routes\nprefix('users', function () {\n    route('POST', '/', UserController::class, 'store');\n    route('GET', '/verify/{token}', UserController::class, 'verify');\n    \n    // Authenticated routes\n    middleware('auth', function () {\n        route('GET', '/profile', UserController::class, 'profile');\n        route('PUT', '/profile', UserController::class, 'update');\n    });\n});\n\n// Article resource\nendpoint('articles', ArticleController::class);`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Group related routes together using prefixes</Typography></li>
        <li><Typography variant="body1">Apply middleware at the group level when possible</Typography></li>
        <li><Typography variant="body1">Use RESTful conventions for resource routes</Typography></li>
        <li><Typography variant="body1">Cache routes in production environment</Typography></li>
        <li><Typography variant="body1">Document complex route parameters</Typography></li>
        <li><Typography variant="body1">Keep route files organized by domain/feature</Typography></li>
      </Box>
    </Box>
  );
}