import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Database() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Rivulet Database Configuration
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet API supports multiple database connections with configuration through environment variables and PHP configuration files.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Environment Configuration
      </Typography>
      
      <Typography variant="body1" paragraph>
        Configure your primary database connection in the <strong>.env</strong> file:
      </Typography>
      
      <CodeBlock 
        bashCode="# Primary Database Connection\nDB_CONNECTION=default\nDB_DRIVER=mysql\nDB_HOST=localhost\nDB_PORT=3306\nDB_DATABASE=rivulet\nDB_USERNAME=root\nDB_PASSWORD="
      />
      
      <Typography variant="body1" paragraph>
        For additional connections, prefix the variables with your connection name:
      </Typography>
      
      <CodeBlock 
        bashCode="# Secondary Database Connection\nSECONDARY_DB_CONNECTION=secondary\nSECONDARY_DB_DRIVER=mysql\nSECONDARY_DB_HOST=localhost\nSECONDARY_DB_PORT=3306\nSECONDARY_DB_DATABASE=rivulet_secondary\nSECONDARY_DB_USERNAME=root\nSECONDARY_DB_PASSWORD="
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Database Configuration File
      </Typography>
      
      <Typography variant="body1" paragraph>
        The <strong>config/database.php</strong> file defines all available connections and their parameters. 
        Below is a comprehensive configuration example supporting multiple database drivers:
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\n\nreturn [\n    'default' => env('DB_CONNECTION', 'mysql'),\n    \n    'connections' => [\n        // MySQL/MariaDB Configuration\n        'mysql' => [\n            'driver' => 'mysql',\n            'host' => env('DB_HOST', '127.0.0.1'),\n            'port' => env('DB_PORT', '3306'),\n            'database' => env('DB_DATABASE', 'rivulet'),\n            'username' => env('DB_USERNAME', 'root'),\n            'password' => env('DB_PASSWORD', ''),\n            'charset' => 'utf8mb4',\n            'collation' => 'utf8mb4_unicode_ci',\n            'prefix' => '',\n            'strict' => true,\n            'engine' => null,\n        ],\n        \n        // PostgreSQL Configuration\n        'pgsql' => [\n            'driver' => 'pgsql',\n            'host' => env('DB_HOST', '127.0.0.1'),\n            'port' => env('DB_PORT', '5432'),\n            'database' => env('DB_DATABASE', 'forge'),\n            'username' => env('DB_USERNAME', 'forge'),\n            'password' => env('DB_PASSWORD', ''),\n            'charset' => 'utf8',\n            'prefix' => '',\n            'schema' => 'public',\n            'sslmode' => 'prefer',\n        ],\n        \n        // SQLite Configuration\n        'sqlite' => [\n            'driver' => 'sqlite',\n            'database' => env('DB_DATABASE', database_path('database.sqlite')),\n            'prefix' => '',\n        ],\n        \n        // SQL Server Configuration\n        'sqlsrv' => [\n            'driver' => 'sqlsrv',\n            'host' => env('DB_HOST', 'localhost'),\n            'port' => env('DB_PORT', '1433'),\n            'database' => env('DB_DATABASE', 'forge'),\n            'username' => env('DB_USERNAME', 'forge'),\n            'password' => env('DB_PASSWORD', ''),\n            'charset' => 'utf8',\n            'prefix' => '',\n        ],\n    ],\n    \n    'migrations' => 'migrations',\n];"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Connection Management
      </Typography>
      
      <Typography variant="body1" paragraph>
        The <strong>default</strong> connection will be used automatically by models. To use alternate connections:
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\n// In your model\nprotected $connection = 'secondary';\n\n// Or dynamically at runtime\nDB::connection('secondary')->table('users')->get();"
      />
      
      <Typography variant="body1" paragraph>
        Key configuration considerations:
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Always keep sensitive credentials in your .env file</Typography></li>
        <li><Typography variant="body1">Use different connections for read/write operations if needed</Typography></li>
        <li><Typography variant="body1">SQLite requires write permissions to the database file</Typography></li>
        <li><Typography variant="body1">Test connections after configuration changes</Typography></li>
      </Box>
    </Box>
  );
}