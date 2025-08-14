import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function ValidationSystem() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Validation System
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet provides a robust validation system with built-in rules and support for custom rules.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Basic Usage in Controllers
      </Typography>
      
      <CodeBlock 
        phpCode={`// From UsersController::store()
\$data = \$this->request->input();
\$this->validate(\$data, [
    'name' => 'required|string',
    'email' => 'required|email',
    'username' => 'required|string',
    'password' => 'required|string'
]);`}
      />
      
      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        The <code>validate()</code> method throws an exception with JSON-formatted errors if validation fails.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Available Validation Rules
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Required Fields
        </Typography>
        <CodeBlock phpCode={`'field' => 'required'`} />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          String Validation
        </Typography>
        <CodeBlock phpCode={`'field' => 'string'`} />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Email Validation
        </Typography>
        <CodeBlock phpCode={`'field' => 'email'`} />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Numeric Validation
        </Typography>
        <CodeBlock phpCode={`'field' => 'integer'`} />
        <CodeBlock phpCode={`'field' => 'numeric'`} />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Length Validation
        </Typography>
        <CodeBlock phpCode={`'field' => 'min:5'`} />
        <CodeBlock phpCode={`'field' => 'max:255'`} />
        <CodeBlock phpCode={`'field' => 'between:3,20'`} />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          File Validation
        </Typography>
        <CodeBlock phpCode={`'file' => 'file:jpg,png,pdf'`} />
        <CodeBlock phpCode={`'file' => 'filesize:2048'`} /> {/* 2KB max */}
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Date Validation
        </Typography>
        <CodeBlock phpCode={`'date' => 'date'`} /> {/* Default Y-m-d */}
        <CodeBlock phpCode={`'date' => 'date:Y-m-d H:i:s'`} />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Other Rules
        </Typography>
        <CodeBlock phpCode={`'ip' => 'ip'`} />
        <CodeBlock phpCode={`'url' => 'url'`} />
        <CodeBlock phpCode={`'alpha' => 'alpha'`} /> {/* Letters only */}
        <CodeBlock phpCode={`'alphanum' => 'alphanum'`} /> {/* Letters & numbers */}
        <CodeBlock phpCode={`'array' => 'array'`} />
        <CodeBlock phpCode={`'bool' => 'bool'`} />
        <CodeBlock phpCode={`'regex' => 'regex:/^[a-z]+$/i'`} />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating Custom Rules
      </Typography>
      
      <Typography variant="body1" paragraph>
        Generate a new rule using the console command:
      </Typography>
      
      <CodeBlock 
        bashCode={`php luna make:rule UniqueUsername`}
      />
      
      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        This creates a template in <code>app/Rules/UniqueUsername.php</code>:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php

namespace App\\Rules;

use Rivulet\\Validation\\Rule;

class UniqueUsername implements Rule
{
    public function passes(string \$field, \$value): bool
    {
        // Check if username is unique
        return !User::where('username', \$value)->exists();
    }

    public function message(string \$field): string
    {
        return "The {\$field} is already taken";
    }
}`}
      />
      
      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        Use your custom rule:
      </Typography>
      
      <CodeBlock 
        phpCode={`'username' => 'required|string|unique_username'`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Namespaced Rules
      </Typography>
      
      <Typography variant="body1" paragraph>
        Create rules in subdirectories for better organization:
      </Typography>
      
      <CodeBlock 
        bashCode={`php luna make:rule Auth/StrongPassword`}
      />
      
      <CodeBlock 
        phpCode={`<?php

namespace App\\Rules\\Auth;

use Rivulet\\Validation\\Rule;

class StrongPassword implements Rule
{
    public function passes(string \$field, \$value): bool
    {
        return strlen(\$value) >= 8 
            && preg_match('/[A-Z]/', \$value)
            && preg_match('/[0-9]/', \$value);
    }

    public function message(string \$field): string
    {
        return "The {\$field} must be at least 8 characters with 1 number and 1 uppercase letter";
    }
}`}
      />
      
      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        Use namespaced rules:
      </Typography>
      
      <CodeBlock 
        phpCode={`'password' => 'required|auth.strong_password'`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Error Handling
      </Typography>
      
      <CodeBlock 
        phpCode={`try {
    \$this->validate(\$data, \$rules);
} catch (\\Exception \$e) {
    \$errors = json_decode(\$e->getMessage(), true);
    // Handle validation errors
}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Validate early - validate requests at the controller level</Typography></li>
        <li><Typography variant="body1">Use specific validation rules</Typography></li>
        <li><Typography variant="body1">Create custom rules for complex validation logic</Typography></li>
        <li><Typography variant="body1">Organize rules in namespaces for large applications</Typography></li>
        <li><Typography variant="body1">Provide clear, user-friendly error messages</Typography></li>
      </Box>
    </Box>
  );
}