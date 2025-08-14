import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function QueueSystem() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Queue & Scheduling System
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet provides a robust queue system for background job processing and task scheduling, helping you offload time-consuming tasks from your main application flow.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Core Commands
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Queue & Scheduling Commands
        </Typography>
        <CodeBlock 
          bashCode="# Create a new job class\nphp luna create:job ProcessPodcast\n\n# Start queue worker\nphp luna queue:work\n\n# Process scheduled jobs\nphp luna schedule:run"
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Queue Configuration
      </Typography>
      
      <Typography variant="body1" paragraph>
        Configure queue connections in <code>config/queue.php</code>:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nreturn [\n    'default' => env('QUEUE_CONNECTION', 'database'),\n    \n    'connections' => [\n        'database' => [\n            'driver' => 'database',\n            'table' => 'jobs',\n            'queue' => 'default',\n            'retry_after' => 90,\n            'max_retries' => 3,\n            'failed_table' => 'failed_jobs'\n        ],\n        \n        'redis' => [\n            'driver' => 'redis',\n            'connection' => 'default',\n            'queue' => 'default',\n            'retry_after' => 90\n        ]\n    ]\n];`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating Jobs
      </Typography>
      
      <Typography variant="body1" paragraph>
        Generate a new job class:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:job SendWelcomeEmail"
        textCode="Creates: app/Jobs/SendWelcomeEmail.php"
      />
      
      <Typography variant="body1" paragraph>
        Example job class:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nnamespace App\\Jobs;\n\nuse Rivulet\\Queue\\Job;\n\nclass SendWelcomeEmail extends Job\n{\n    public function handle()\n    {\n        \$userId = \$this->data['user_id'];\n        \$user = User::find(\$userId);\n        \n        // Send email logic\n        Mail::to(\$user->email)\n            ->subject('Welcome to our platform')\n            ->send(new WelcomeEmail(\$user));\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Dispatching Jobs
      </Typography>
      
      <Typography variant="body1" paragraph>
        Dispatch jobs from anywhere in your application:
      </Typography>
      
      <CodeBlock 
        phpCode={`// Simple dispatch\napp('queue')->push(SendWelcomeEmail::class, ['user_id' => \$user->id]);\n\n// With specific queue\napp('queue')->push(\n    SendWelcomeEmail::class, \n    ['user_id' => \$user->id],\n    'emails'\n);`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Running Queue Workers
      </Typography>
      
      <Typography variant="body1" paragraph>
        Process jobs from the queue:
      </Typography>
      
      <CodeBlock 
        bashCode="# Process jobs indefinitely\nphp luna queue:work\n\n# Process specific queue\nphp luna queue:work emails\n\n# Process limited number of jobs\nphp luna queue:work default 10"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Task Scheduling
      </Typography>
      
      <Typography variant="body1" paragraph>
        Configure scheduled jobs in <code>config/schedule.php</code>:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nreturn [\n    'dailyReport' => [\n        'job' => 'App\\Jobs\\GenerateDailyReport',\n        'data' => ['type' => 'summary']\n    ],\n    \n    'hourlyCleanup' => [\n        'job' => 'App\\Jobs\\CleanupTempFiles'\n    ]\n];`}
      />
      
      <Typography variant="body1" paragraph>
        Run scheduled jobs (typically via cron):
      </Typography>
      
      <CodeBlock 
        bashCode="# Run scheduled jobs\nphp luna schedule:run\n\n# Cron entry for minute-by-minute scheduling\n* * * * * cd /path-to-project && php luna schedule:run >> /dev/null 2>&1"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Complete Example
      </Typography>
      
      <Typography variant="body1" paragraph>
        1. Create a job for newsletter sending:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:job SendNewsletter"
      />
      
      <Typography variant="body1" paragraph>
        2. Implement the job:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nnamespace App\\Jobs;\n\nuse Rivulet\\Queue\\Job;\n\nclass SendNewsletter extends Job\n{\n    public function handle()\n    {\n        \$subscribers = Subscriber::where('active', true)->get();\n        \n        foreach (\$subscribers as \$subscriber) {\n            Mail::to(\$subscriber->email)\n                ->send(new Newsletter(\$subscriber));\n        }\n    }\n}`}
      />
      
      <Typography variant="body1" paragraph>
        3. Schedule it to run weekly:
      </Typography>
      
      <CodeBlock 
        phpCode={`// In config/schedule.php\nreturn [\n    'weeklyNewsletter' => [\n        'job' => 'App\\Jobs\\SendNewsletter'\n    ]\n];`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Use queues for time-consuming tasks (emails, reports, etc.)</Typography></li>
        <li><Typography variant="body1">Keep jobs small and focused</Typography></li>
        <li><Typography variant="body1">Implement proper error handling in jobs</Typography></li>
        <li><Typography variant="body1">Use separate queues for different job types</Typography></li>
        <li><Typography variant="body1">Monitor failed jobs</Typography></li>
        <li><Typography variant="body1">Use supervisor to keep queue workers running</Typography></li>
      </Box>
    </Box>
  );
}