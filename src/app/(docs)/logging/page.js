import React from "react";
import { Typography, Box } from "@mui/material";
import CodeBlock from "@/components/CodeBlock";

export default function LoggingSystem() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Logging
      </Typography>

      <Typography variant="body1" paragraph>
        Rivulet provides a robust file-based logging system with rotation,
        multiple log levels, and a simple API.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Configuration
      </Typography>

      <Typography variant="body1" paragraph>
        Configure logging in <code>config/logging.php</code>:
      </Typography>

      <CodeBlock
        phpCode={`<?php

return [
    'default' => env('LOG_CHANNEL', 'file'),
    'channels' => [
        'file' => [
            'driver' => 'file',
            'path' => dirname(__DIR__) . '/storage/logs/app.log',
            'level' => env('LOG_LEVEL', 'debug'),
        ],
    ],
];`}
      />

      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        Environment Variables
      </Typography>
      <CodeBlock
        bashCode={`LOG_CHANNEL=file  # Currently only 'file' is supported
LOG_LEVEL=debug  # debug, info, notice, warning, error, critical, alert, emergency`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Basic Usage
      </Typography>

      <Typography variant="body1" paragraph>
        Use the <code>LogMessage()</code> global helper function:
      </Typography>

      <CodeBlock
        phpCode={`// Simple info log
LogMessage('User logged in', 'info');

// With context data
LogMessage('Payment processed', 'info', [
    'user_id' => 123,
    'amount' => 99.99
]);

// Error logging
try {
    // Some operation...
} catch (\Exception \$e) {
    LogMessage('Operation failed: ' . \$e->getMessage(), 'error');
}`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Log Levels
      </Typography>

      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li>
          <Typography variant="body1">
            <code>debug</code>: Detailed debug information
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>info</code>: Interesting events
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>notice</code>: Normal but significant events
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>warning</code>: Exceptional occurrences that aren't errors
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>error</code>: Runtime errors
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>critical</code>: Critical conditions
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>alert</code>: Immediate action needed
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>emergency</code>: System is unusable
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Log Rotation
      </Typography>

      <Typography variant="body1" paragraph>
        Logs are automatically rotated with daily files. Example log files:
      </Typography>

      <CodeBlock
        bashCode={`storage/logs/app.log-2023-06-15.log
storage/logs/app.log-2023-06-16.log`}
      />

      <Typography variant="body1" paragraph>
        Configure rotation period in <code>config/logging.php</code>:
      </Typography>

      <CodeBlock
        phpCode={`<?php

return [
    'default' => env('LOG_CHANNEL', 'file'),
    'period' => env('LOG_ROTATION', 'daily'), // daily, weekly, or monthly
    'channels' => [
        'file' => [
            'driver' => 'file',
            'path' => dirname(__DIR__) . '/storage/logs/app.log',
            'level' => env('LOG_LEVEL', 'debug'),
        ],
    ],
];`}
      />

      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        Supported rotation periods:
      </Typography>

      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li>
          <Typography variant="body1">
            <code>daily</code> - Creates new log files each day (default)
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>weekly</code> - Creates new log files each week (Monday)
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>monthly</code> - Creates new log files each month
          </Typography>
        </li>
      </Box>

      <Typography variant="body1" paragraph>
        Example log file names:
      </Typography>

      <CodeBlock
        bashCode={`# Daily (default)
storage/logs/app.log-2023-06-15.log

# Weekly
storage/logs/app.log-2023-W24.log  # Week 24 of 2023

# Monthly
storage/logs/app.log-2023-06.log`}
      />

      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        Set rotation period in your <code>.env</code> file:
      </Typography>

      <CodeBlock bashCode={`LOG_ROTATION=weekly`} />

      <Typography variant="h4" component="h2" gutterBottom>
        Clearing Logs
      </Typography>

      <Typography variant="body1" paragraph>
        Use the console command to clear all log files:
      </Typography>

      <CodeBlock bashCode={`php luna logs:clear`} />

      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        This will remove all <code>.log</code> files from the{" "}
        <code>storage/logs</code> directory.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>

      <Box component="ul" sx={{ pl: 4 }}>
        <li>
          <Typography variant="body1">
            Use appropriate log levels for different situations
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Include relevant context in log messages
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Avoid logging sensitive information
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Regularly monitor and archive old logs
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Use <code>warning</code> level for recoverable issues
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Reserve <code>emergency</code> for system-wide failures
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Example From ArticlesController
      </Typography>

      <CodeBlock
        phpCode={`// In ArticlesController::addArticle()
LogMessage('Article added: ' . \$article->getAttribute('id'), 'info');

// In ArticlesController::deleteArticle()
LogMessage('Article deleted: ' . \$id, 'warning');`}
      />
    </Box>
  );
}
