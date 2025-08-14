import React from "react";
import { Typography, Box } from "@mui/material";
import CodeBlock from "@/components/CodeBlock";

export default function MailSystem() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Sending Mail
      </Typography>

      <Typography variant="body1" paragraph>
        Rivulet&apos;s mail system provides a unified API for sending emails through
        multiple drivers with support for templates and attachments.
      </Typography>

      <Typography variant="body1" paragraph>
        Rivulet provides a global <code>SendEmail()</code> helper function for sending emails with a simple, consistent API
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Configuration
      </Typography>

      <Typography variant="body1" paragraph>
        Configure mail settings in <code>config/mail.php</code>:
      </Typography>

      <CodeBlock
        phpCode={`<?php\n\nreturn [\n    'default' => env('MAIL_MAILER', 'smtp'),\n    \n    'mailers' => [\n        'smtp' => [\n            'transport' => 'smtp',\n            'host' => env('MAIL_HOST'),\n            'port' => env('MAIL_PORT', 587),\n            'username' => env('MAIL_USERNAME'),\n            'password' => env('MAIL_PASSWORD'),\n            'encryption' => env('MAIL_ENCRYPTION', 'tls'),\n            'from' => [\n                'address' => env('MAIL_FROM_ADDRESS'),\n                'name' => env('MAIL_FROM_NAME'),\n            ],\n        ],\n        // Additional mailers...\n    ],\n];`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Supported Drivers
      </Typography>

      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li>
          <Typography variant="body1">
            <strong>SMTP</strong> - Traditional mail servers
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Mailgun</strong> - Transactional email service
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>SendGrid</strong> - Cloud-based email delivery
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Sendmail</strong> - Local sendmail binary
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>mail()</strong> - PHP&apos;s built-in mail function
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Environment Variables
      </Typography>

      <CodeBlock
        bashCode={`# .env Example\nMAIL_MAILER=smtp\nMAIL_HOST=mail.example.com\nMAIL_PORT=587\nMAIL_USERNAME=user@example.com\nMAIL_PASSWORD=yourpassword\nMAIL_ENCRYPTION=tls\nMAIL_FROM_ADDRESS=noreply@example.com\nMAIL_FROM_NAME="Example App"`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Function Signature
      </Typography>

      <CodeBlock
        phpCode={`SendEmail(
    $to,
    string $subject,
    string $type = 'text',
    string $content,
    array $data = [],
    $cc = null,
    $bcc = null,
    array $attachments = []
): bool`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Basic Usage
      </Typography>

      <Typography variant="h5" component="h3" gutterBottom>
        Simple Text Email
      </Typography>
      <CodeBlock
        phpCode={`SendEmail(
    'user@example.com',
    'Welcome Message',
    'text',
    'Hello and welcome to our service!'
);`}
      />

      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        HTML Email
      </Typography>
      <CodeBlock
        phpCode={`SendEmail(
    'user@example.com',
    'HTML Newsletter',
    'html',
    '<h1>Latest Updates</h1><p>Check out our new features!</p>'
);`}
      />

      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        Template-Based Email
      </Typography>
      <CodeBlock
        phpCode={`SendEmail(
    'user@example.com',
    'Your Order Confirmation',
    'template',
    'emails.order_confirmation',
    ['order' => $order]
);`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Advanced Usage
      </Typography>

      <Typography variant="h5" component="h3" gutterBottom>
        With CC and BCC
      </Typography>
      <CodeBlock
        phpCode={`SendEmail(
    'user@example.com',
    'Project Update',
    'html',
    '<p>Project status report attached</p>',
    [],
    'manager@example.com', // CC
    'archive@example.com'  // BCC
);`}
      />

      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        With Attachments
      </Typography>
      <CodeBlock
        phpCode={`// Single attachment
SendEmail(
    'client@example.com',
    'Your Documents',
    'text',
    'Please find attached files',
    [],
    null,
    null,
    ['/path/to/document.pdf']
);

// Multiple attachments with custom names
SendEmail(
    'client@example.com',
    'Your Documents',
    'text',
    'Please find attached files',
    [],
    null,
    null,
    [
        ['file' => '/path/to/document.pdf', 'name' => 'contract.pdf'],
        ['file' => '/path/to/image.jpg', 'name' => 'photo.jpg']
    ]
);`}
      />

      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        Complete Example
      </Typography>
      <CodeBlock
        phpCode={`SendEmail(
    ['user1@example.com', 'user2@example.com'],
    'Team Meeting Minutes',
    'template',
    'emails.meeting_minutes',
    [
        'date' => '2023-06-15',
        'topics' => ['Budget', 'Timeline', 'HR']
    ],
    'team@example.com',
    'records@example.com',
    ['/path/to/minutes.pdf']
);`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Return Value
      </Typography>

      <Typography variant="body1" paragraph>
        The function returns <code>true</code> if the email was successfully
        sent, and <code>false</code> on failure.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>

      <Box component="ul" sx={{ pl: 4 }}>
        <li>
          <Typography variant="body1">
            Use templates for consistent email formatting
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Queue long-running email operations
          </Typography>
        </li>
        <li>
          <Typography variant="body1">Validate recipient addresses</Typography>
        </li>
        <li>
          <Typography variant="body1">
            Keep attachments under size limits
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Use environment variables for credentials
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Test emails in development with mail traps
          </Typography>
        </li>
      </Box>
    </Box>
  );
}
