import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Filesystem() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Filesystem Operations
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet's filesystem provides a unified interface for file operations across local and cloud storage, with built-in security and convenience methods.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Core Command
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Filesystem Command
        </Typography>
        <CodeBlock 
          bashCode="# Create public storage link\nphp luna storage:link"
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Configuration
      </Typography>
      
      <Typography variant="body1" paragraph>
        Configure storage disks in <code>config/filesystems.php</code>:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nreturn [\n    'default' => env('FILESYSTEM_DISK', 'local'),\n    \n    'disks' => [\n        'local' => [\n            'driver' => 'local',\n            'root' => dirname(__DIR__) . '/storage/uploads',\n            'url' => env('APP_URL') . '/storage',\n            'visibility' => 'public'\n        ],\n        \n        // Example S3 configuration\n        's3' => [\n            'driver' => 's3',\n            'key' => env('AWS_ACCESS_KEY_ID'),\n            'secret' => env('AWS_SECRET_ACCESS_KEY'),\n            'region' => env('AWS_DEFAULT_REGION'),\n            'bucket' => env('AWS_BUCKET'),\n            'url' => env('AWS_URL')\n        ]\n    ]\n];`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Basic Operations
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          File Uploads
        </Typography>
        <CodeBlock 
          phpCode={`// Handle file upload\n\$path = \$filesystem->upload(\$_FILES['document'], 'documents', 'contract.pdf');\n// Returns: documents/contract.pdf`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom>
          File Downloads
        </Typography>
        <CodeBlock 
          phpCode={`// Download file\nreturn \$filesystem->download('documents/contract.pdf');`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Directory Management
      </Typography>
      
      <CodeBlock 
        phpCode={`// Create directory\n\$filesystem->createDirectory('user_uploads/123');\n\n// Delete directory (recursive)\n\$filesystem->delete('temp_files');\n\n// Copy directory\n\$filesystem->copy('templates', 'archives/templates_backup');`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        File Operations
      </Typography>
      
      <CodeBlock 
        phpCode={`// Move file\n\$filesystem->move('uploads/temp.jpg', 'images/profile.jpg');\n\n// Rename file\n\$filesystem->rename('documents/report.txt', 'annual_report.txt');\n\n// Delete file\n\$filesystem->delete('old_data.csv');`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Archive Handling
      </Typography>
      
      <CodeBlock 
        phpCode={`// Create ZIP archive\n\$zipName = \$filesystem->zip('exports', 'backups/export_2023.zip');\n\n// Extract ZIP\n\$filesystem->unzip('backups/export_2023.zip', 'restored_data');`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Security Considerations
      </Typography>
      
      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1">All paths are automatically resolved relative to the configured root directory</Typography></li>
        <li><Typography variant="body1">File uploads are validated using <code>is_uploaded_file()</code></Typography></li>
        <li><Typography variant="body1">Directory traversal attempts are blocked</Typography></li>
        <li><Typography variant="body1">Uploaded files receive 0644 permissions by default</Typography></li>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Complete Example
      </Typography>
      
      <Typography variant="body1" paragraph>
        Handling a file upload with processing:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\n// In your controller\npublic function uploadDocument(Request \$request)\n{\n    try {\n        // Store uploaded file\n        \$path = \$this->filesystem->upload(\n            \$request->files['document'], \n            'user_docs/' . \$request->user->id,\n            'contract_' . time() . '.pdf'\n        );\n        \n        // Create backup archive\n        \$this->filesystem->zip(\n            'user_docs/' . \$request->user->id,\n            'backups/user_' . \$request->user->id . '.zip'\n        );\n        \n        return ['status' => 'success', 'path' => \$path];\n    } catch (Exception \$e) {\n        return Response::error(\$e->getMessage(), 500);\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Use <code>storage:link</code> for public file access</Typography></li>
        <li><Typography variant="body1">Store sensitive files outside web root</Typography></li>
        <li><Typography variant="body1">Validate file types and sizes before processing</Typography></li>
        <li><Typography variant="body1">Use unique filenames for uploads</Typography></li>
        <li><Typography variant="body1">Regularly clean up temporary files</Typography></li>
        <li><Typography variant="body1">Consider cloud storage for scalability</Typography></li>
      </Box>
    </Box>
  );
}