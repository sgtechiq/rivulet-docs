import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Seeders() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Database Seeders
      </Typography>
      
      <Typography variant="body1" paragraph>
        Seeders allow you to populate your database with test or initial data. They are particularly useful during development and testing.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Seeder Commands
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Primary Seeder Commands
        </Typography>
        <CodeBlock 
          bashCode="# Create a new seeder class\nphp luna create:seeder SeederName\n\n# Run all database seeders\nphp luna database:seed\n\n# Run specific seeder only\nphp luna database:seed --class=SeederName"
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating Seeders
      </Typography>
      
      <Typography variant="body1" paragraph>
        Generate a new seeder class with boilerplate code:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:seeder User"
        textCode="Creates: database/Seeders/UserSeeder.php"
      />
      
      <Typography variant="body1" paragraph>
        The generated file will contain:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nnamespace Database\\Seeders;\n\nuse App\\Models\\User;\nuse Rivulet\\Database\\Migrations\\SeedOperation;\n\nclass UserSeeder extends SeedOperation\n{\n    public function run()\n    {\n        // Seeding logic here\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Running Seeders
      </Typography>
      
      <Typography variant="body1" paragraph>
        Execute all seeders:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna database:seed"
      />
      
      <Typography variant="body1" paragraph>
        Run a specific seeder:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna database:seed --class=UserSeeder"
      />
      
      <Typography variant="body1" paragraph>
        Combine with migrations:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna database:migrate --seed"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Example Usage
      </Typography>
      
      <Typography variant="body1" paragraph>
        1. First create the seeder:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:seeder AdminUser"
      />
      
      <Typography variant="body1" paragraph>
        2. Then edit the seeder file:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nnamespace Database\\Seeders;\n\nuse App\\Models\\User;\nuse Rivulet\\Database\\Migrations\\SeedOperation;\n\nclass AdminUserSeeder extends SeedOperation\n{\n    public function run()\n    {\n        User::create([\n            'name' => 'Admin',\n            'email' => 'admin@example.com',\n            'password' => PassEncrypt('secret'),\n            'is_admin' => true\n        ]);\n    }\n}`}
      />
      
      <Typography variant="body1" paragraph>
        3. Finally run the seeder:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna database:seed --class=AdminUserSeeder"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Use seeders for development/test data only</Typography></li>
        <li><Typography variant="body1">Never include sensitive credentials in seeders</Typography></li>
        <li><Typography variant="body1">Consider using environment checks in seeders</Typography></li>
        <li><Typography variant="body1">Document your seeders in project documentation</Typography></li>
      </Box>
    </Box>
  );
}