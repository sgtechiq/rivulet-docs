import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Migrations() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Database Migrations
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet's migration system provides version control for your database schema, allowing you to modify and share database structures across your team.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Migration Commands
      </Typography>
      
      <Typography variant="body1" paragraph>
        The following commands are available for managing migrations:
      </Typography>
      
      <CodeBlock 
        bashCode="# Create a new resource migration\nphp luna create:resource User\n\n# Run pending migrations\nphp luna database:migrate\n\n# Rollback the last batch of migrations\nphp luna database:rollback\n\n# Run database seeders\nphp luna database:seed"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating Migrations
      </Typography>
      
      <Typography variant="body1" paragraph>
        Generate a new migration file for a resource:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:resource Post"
        textCode="Creates: database/Migrations/2025_08_14_000000_create_posts_table.php"
      />
      
      <Typography variant="body1" paragraph>
        The generated migration includes both up() and down() methods:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nuse Rivulet\\Database\\Migrations\\Migration;\n\nclass CreatePostsTable extends Migration\n{\n    public function up()\n    {\n        \$this->executeSchema(function (\$builder) {\n            \$builder->createTable('posts', function (\$add) {\n                \$add('id', 'INT', ['auto_increment' => true, 'primary_key' => true]);\n                \$add('title', 'VARCHAR(255)');\n                \$add('content', 'TEXT');\n                \$add('created_at', 'TIMESTAMP', ['default' => 'CURRENT_TIMESTAMP']);\n                \$add('updated_at', 'TIMESTAMP', ['default' => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP']);\n            });\n        });\n    }\n\n    public function down()\n    {\n        \$this->executeSchema(function (\$builder) {\n            \$builder->dropTable('posts');\n        });\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Migration Structure
      </Typography>
      
      <Typography variant="body1" paragraph>
        A migration class must implement two methods:
      </Typography>
      
      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1"><strong>up()</strong> - Defines the changes to apply to the database</Typography></li>
        <li><Typography variant="body1"><strong>down()</strong> - Defines how to reverse those changes</Typography></li>
      </Box>
      
      <Typography variant="h6" component="h3" gutterBottom>
        Available Schema Operations
      </Typography>
      
      <CodeBlock 
        phpCode={`// Create table\n\$builder->createTable('table_name', function(\$add) {\n    \$add('column_name', 'TYPE', [options]);\n});\n\n// Drop table\n\$builder->dropTable('table_name');\n\n// Alter table\n\$builder->alterTable('table_name', function(\$action, \$column, \$type, \$options) {\n    // Actions: 'add', 'drop', 'modify', 'rename'\n});`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Column Types & Options
      </Typography>
      
      <Typography variant="body1" paragraph>
        Supported column types and common options:
      </Typography>
      
      <CodeBlock 
        textCode="Column Types:\n- INT, BIGINT\n- VARCHAR(length), TEXT\n- BOOLEAN, TINYINT\n- TIMESTAMP, DATETIME\n- FLOAT, DOUBLE\n- JSON\n\nCommon Options:\n- 'primary_key' => true\n- 'auto_increment' => true\n- 'nullable' => true/false\n- 'default' => value\n- 'after' => column_name"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Example Migration
      </Typography>
      
      <Typography variant="body1" paragraph>
        Here's a complete users table migration:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nuse Rivulet\\Database\\Migrations\\Migration;\n\nclass CreateUsersTable extends Migration\n{\n    public function up()\n    {\n        \$this->executeSchema(function (\$builder) {\n            \$builder->createTable('users', function (\$add) {\n                \$add('id', 'INT', ['auto_increment' => true, 'primary_key' => true]);\n                \$add('name', 'VARCHAR(255)', ['nullable' => false]);\n                \$add('email', 'VARCHAR(255)', ['nullable' => false]);\n                \$add('password', 'VARCHAR(255)', ['nullable' => false]);\n                \$add('is_admin', 'BOOLEAN', ['default' => false]);\n                \$add('created_at', 'TIMESTAMP', ['default' => 'CURRENT_TIMESTAMP']);\n                \$add('updated_at', 'TIMESTAMP', ['default' => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP']);\n                \$add('deleted_at', 'TIMESTAMP', ['nullable' => true]);\n            });\n            \n            // Add index\n            \$builder->alterTable('users', function(\$action, \$column) {\n                \$action('add', 'email', 'INDEX');\n            });\n        });\n    }\n\n    public function down()\n    {\n        \$this->executeSchema(function (\$builder) {\n            \$builder->dropTable('users');\n        });\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Running Migrations
      </Typography>
      
      <Typography variant="body1" paragraph>
        Apply all pending migrations:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna database:migrate"
        textCode="This will run all migrations that haven't been executed yet"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Rolling Back Migrations
      </Typography>
      
      <Typography variant="body1" paragraph>
        Revert the last batch of migrations:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna database:rollback"
        textCode="This will undo the most recent migration batch"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Each migration should focus on a single schema change</Typography></li>
        <li><Typography variant="body1">Always implement the down() method for rollbacks</Typography></li>
        <li><Typography variant="body1">Test migrations in a development environment first</Typography></li>
        <li><Typography variant="body1">Never modify migrations that have been committed to version control</Typography></li>
      </Box>
    </Box>
  );
}