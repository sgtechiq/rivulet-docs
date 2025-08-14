import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function SessionCookieSystem() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Session & Cookie Management
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet provides secure session and cookie handling with global helper functions.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Configuration
      </Typography>
      
      <Typography variant="h5" component="h3" gutterBottom>
        Session Configuration (config/session.php)
      </Typography>
      <CodeBlock 
        phpCode={`<?php

return [
    'driver'    => 'file', // file, db, redis
    'lifetime'  => 120,    // minutes (2 hours)
    'path'      => '/tmp', // storage path for file driver
    'secure'    => env('APP_ENV') === 'production', // HTTPS-only
    'http_only' => true    // Prevent JavaScript access
];`}
      />
      
      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        Cookie Configuration (config/cookies.php)
      </Typography>
      <CodeBlock 
        phpCode={`<?php

return [
    'prefix'   => env('APP_NAME', 'rivulet') . '_',
    'expiry'   => 0,       // seconds (0 = session cookie)
    'path'     => '/',     // accessible paths
    'domain'   => null,    // accessible domains
    'secure'   => env('APP_ENV') === 'production',
    'httponly' => true,    // Prevent JavaScript access
    'samesite' => 'lax'    // CSRF protection
];`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Session Helpers
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Basic Usage
        </Typography>
        <CodeBlock 
          phpCode={`// Set session value
SetSession('user_id', 123);

// Get session value
\$userId = GetSession('user_id');

// Remove session value
ForgetSession('user_id');`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Flash Data (One-Time Use)
        </Typography>
        <CodeBlock 
          phpCode={`// Set flash data (available until next request)
FlashSession('message', 'Profile updated!');

// Get and remove flash data
\$message = GetFlashSession('message');`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Cookie Helpers
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Basic Usage
        </Typography>
        <CodeBlock 
          phpCode={`// Set cookie (default expiry from config)
SetCookie('preferences', 'dark_mode');

// Set cookie with custom expiry (1 day)
SetCookie('remember_token', 'abc123', 86400);

// Get cookie value
\$prefs = GetCookie('preferences');

// Delete cookie
ForgetCookie('preferences');`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Secure Cookie Example
        </Typography>
        <CodeBlock 
          phpCode={`SetCookie(
    'auth_token',
    \$token,
    3600,     // 1 hour expiry
    '/',      // path
    '.example.com', // domain
    true,     // secure (HTTPS only)
    true,     // httpOnly
    'strict'  // sameSite
);`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Security Features
      </Typography>
      
      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1"><strong>HttpOnly</strong>: Prevents JavaScript access to cookies</Typography></li>
        <li><Typography variant="body1"><strong>Secure Flag</strong>: Cookies only sent over HTTPS in production</Typography></li>
        <li><Typography variant="body1"><strong>SameSite</strong>: CSRF protection (Lax/Strict)</Typography></li>
        <li><Typography variant="body1"><strong>Session Regeneration</strong>: Built-in protection against session fixation</Typography></li>
        <li><Typography variant="body1"><strong>Prefixing</strong>: Prevents cookie name collisions</Typography></li>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Use sessions for sensitive data, cookies for preferences</Typography></li>
        <li><Typography variant="body1">Always set appropriate expiry times</Typography></li>
        <li><Typography variant="body1">Regenerate session ID after login</Typography></li>
        <li><Typography variant="body1">Use flash messages for one-time notifications</Typography></li>
        <li><Typography variant="body1">Validate cookie data before use</Typography></li>
        <li><Typography variant="body1">Consider SameSite 'strict' for sensitive actions</Typography></li>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Example Workflow
      </Typography>
      
      <CodeBlock 
        phpCode={`// User login
function login(\$user) {
    SetSession('user_id', \$user->id);
    SetCookie('remember_token', \$user->remember_token, 86400 * 30); // 30 days
    app()->make('session')->regenerate(); // Prevent session fixation
    FlashSession('message', 'Welcome back!');
}

// User logout
function logout() {
    ForgetSession('user_id');
    ForgetCookie('remember_token');
    app()->make('session')->destroy();
}`}
      />
    </Box>
  );
}