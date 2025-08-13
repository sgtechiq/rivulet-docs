import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Validation() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Validation
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Database Configuration
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <CodeBlock 
        bashCode="# Configure your database in .env file\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=rivulet\nDB_USERNAME=root\nDB_PASSWORD="
        phpCode="<?php\n// Database configuration\nreturn [\n    'default' => env('DB_CONNECTION', 'mysql'),\n    'connections' => [\n        'mysql' => [\n            'driver' => 'mysql',\n            'host' => env('DB_HOST', '127.0.0.1'),\n            'port' => env('DB_PORT', '3306'),\n            'database' => env('DB_DATABASE', 'rivulet'),\n            'username' => env('DB_USERNAME', 'root'),\n            'password' => env('DB_PASSWORD', ''),\n        ],\n    ],\n];"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        ORM (Object-Relational Mapping)
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <CodeBlock 
        bashCode="# Create a new model\nphp luna make:model User"
        phpCode="<?php\nnamespace App\\Models;\n\nuse Rivulet\\ORM\\Model;\n\nclass User extends Model\n{\n    protected $table = 'users';\n    \n    protected $fillable = [\n        'name', 'email', 'password',\n    ];\n}"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        CRUD Operations
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <CodeBlock 
        bashCode="# No specific bash command for CRUD operations"
        phpCode="<?php\n// Create\n$user = new User();\n$user->name = 'John Doe';\n$user->email = 'john@example.com';\n$user->password = bcrypt('password');\n$user->save();\n\n// Read\n$users = User::all();\n$user = User::find(1);\n\n// Update\n$user = User::find(1);\n$user->name = 'Jane Doe';\n$user->save();\n\n// Delete\n$user = User::find(1);\n$user->delete();"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Relationships
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
  <CodeBlock 
        bashCode="# Create a new model\nphp luna make:model User"
        phpCode="<?php\nnamespace App\\Models;\n\nuse Rivulet\\ORM\\Model;\n\nclass User extends Model\n{\n    protected $table = 'users';\n    \n    protected $fillable = [\n        'name', 'email', 'password',\n    ];\n}"
        htmlCode="<!-- Database commands example -->\n<div class='database-commands'>\n    <h2>Database Commands</h2>\n    <p>Database commands manage migrations and seeders.</p>\n</div>"
      />
    </Box>
  );
}