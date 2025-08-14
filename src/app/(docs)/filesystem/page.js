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
        Rivulet&apos;s filesystem provides a unified interface for file operations across local and cloud storage, with built-in security and convenience methods.
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
        phpCode={`<?php\n\nreturn [\n    'default' => env('FILESYSTEM_DISK', 'local'),\n    \n    'disks' => [\n        'local' => [\n            'driver' => 'local',\n            'root' => dirname(__DIR__) . '/storage/uploads',\n            'url' => env('APP_URL') . '/storage',\n            'visibility' => 'public'\n        ]\n   ]\n];`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Basic Operations
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          File Uploads
        </Typography>
        <CodeBlock 
          phpCode={`// Instance method (in controller)\$path = \$this->filesystem->upload(\$_FILES['document'], 'documents', 'contract.pdf');\n// Returns: documents/contract.pdf\n\n// Global helper\n\$path = UploadFile(\$_FILES['document'], 'documents', 'contract.pdf');`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom>
          File Downloads
        </Typography>
        <CodeBlock 
          phpCode={`// Instance method (in controller)\return \$this->filesystem->download('documents/contract.pdf');\n\n// Global helper\nreturn DownloadFile('documents/contract.pdf');`}
        />

        <Typography variant="h5" component="h3" gutterBottom>
          Create File
        </Typography>
        <CodeBlock 
          phpCode={`// Instance method (in controller)\$path = \$this->filesystem->createFile('documents/note.txt', 'Content here');\n// Returns: documents/note.txt\n\n// Global helper\n\$path = CreateFile('documents/note.txt', 'Content here');`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Directory Management
      </Typography>
      
      <CodeBlock 
        phpCode={`// Create directory\n// Instance\n\$this->filesystem->createDirectory('user_uploads/123');\n// Global\nCreateDirectory('user_uploads/123');\n\n// Delete directory (recursive)\n// Instance\n\$this->filesystem->delete('temp_files');\n// Global\nDeleteDirectory('temp_files');\n\n// Copy directory\n// Instance\n\$this->filesystem->copy('templates', 'archives/templates_backup');\n// Global\nCopyDirectory('templates', 'archives/templates_backup');`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        File Operations
      </Typography>
      
      <CodeBlock 
        phpCode={`// Move file\n// Instance\n\$this->filesystem->move('uploads/temp.jpg', 'images/profile.jpg');\n// Global\nMoveFile('uploads/temp.jpg', 'images/profile.jpg');\n\n// Rename file\n// Instance\n\$this->filesystem->rename('documents/report.txt', 'annual_report.txt');\n// Global\nRenameFile('documents/report.txt', 'annual_report.txt');\n\n// Delete file\n// Instance\n\$this->filesystem->delete('old_data.csv');\n// Global\nDeleteFile('old_data.csv');`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Archive Handling
      </Typography>
      
      <CodeBlock 
        phpCode={`// Create ZIP archive\n// Instance\n\$zipName = \$this->filesystem->zip('exports', 'backups/export_2023.zip');\n// Global\n\$zipName = CompressDirectory('exports', 'backups/export_2023.zip');\n\n// Extract ZIP\n// Instance\n\$this->filesystem->unzip('backups/export_2023.zip', 'restored_data');\n// Global\nExtractFile('backups/export_2023.zip', 'restored_data');`}
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
        phpCode={`<?php\n\n// In your controller\npublic function uploadDocument(Request \$request)\n{\n    try {\n        // Store uploaded file\n        // Instance method\n        \$path = \$this->filesystem->upload(\n            \$request->files['document'], \n            'user_docs/' . \$request->user->id,\n            'contract_' . time() . '.pdf'\n        );\n        // Global helper\n        // \$path = UploadFile(\$request->files['document'], 'user_docs/' . \$request->user->id, 'contract_' . time() . '.pdf');\n        \n        // Create backup archive\n        // Instance\n        \$this->filesystem->zip(\n            'user_docs/' . \$request->user->id,\n            'backups/user_' . \$request->user->id . '.zip'\n        );\n        // Global\n        // CompressDirectory('user_docs/' . \$request->user->id, 'backups/user_' . \$request->user->id . '.zip');\n        \n        return ['status' => 'success', 'path' => \$path];\n    } catch (Exception \$e) {\n        return Response::error(\$e->getMessage(), 500);\n    }\n}`}
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