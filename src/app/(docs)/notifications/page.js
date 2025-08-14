import React from "react";
import { Typography, Box } from "@mui/material";
import CodeBlock from "@/components/CodeBlock";

export default function Notifications() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Notifications
      </Typography>

      <Typography variant="body1" paragraph>
        Rivulet's notification system provides a simple global{" "}
        <code>Notify()</code> function for sending notifications through
        multiple channels.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Global Function
      </Typography>

      <CodeBlock
        phpCode={`Notify(
    string|array \$to,          // Recipient(s) in channel-specific format
    string \$channel,           // Channel name (firebase, pusher, etc.)
    string \$title = '',        // Notification title
    string \$body = '',         // Notification content  
    array \$data = []           // Additional payload data
): bool`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Configuration
      </Typography>

      <Typography variant="body1" paragraph>
        Configure notification services in <code>config/services.php</code>:
      </Typography>

      <CodeBlock
        phpCode={`<?php

return [
    'firebase' => [
        'api_key' => env('NOTIFICATION_FIREBASE_API_KEY'),
    ],
    'pusher' => [
        'app_id' => env('NOTIFICATION_PUSHER_APP_ID'),
        'app_key' => env('NOTIFICATION_PUSHER_APP_KEY'),
        'app_secret' => env('NOTIFICATION_PUSHER_APP_SECRET'),
        'cluster' => env('NOTIFICATION_PUSHER_CLUSTER'),
    ],
    'slack' => [
        'webhook' => env('NOTIFICATION_SLACK_WEBHOOK'),
    ],
    'whatsapp' => [
        'api_key' => env('NOTIFICATION_WHATSAPP_API_KEY'),
    ],
    'sms' => [
        'provider' => env('NOTIFICATION_SMS_PROVIDER', 'twilio'),
        'account_sid' => env('NOTIFICATION_SMS_ACCOUNT_SID'),
        'auth_token' => env('NOTIFICATION_SMS_AUTH_TOKEN'),
        'from' => env('NOTIFICATION_SMS_FROM'),
    ],
];`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Environment Variables
      </Typography>

      <CodeBlock
        bashCode={`# .env Example
NOTIFICATION_FIREBASE_API_KEY=your_firebase_key
NOTIFICATION_PUSHER_APP_ID=your_app_id
NOTIFICATION_PUSHER_APP_KEY=your_app_key
NOTIFICATION_PUSHER_APP_SECRET=your_app_secret
NOTIFICATION_PUSHER_CLUSTER=mt1
NOTIFICATION_SLACK_WEBHOOK=https://hooks.slack.com/services/...
NOTIFICATION_WHATSAPP_API_KEY=your_whatsapp_key
NOTIFICATION_SMS_ACCOUNT_SID=your_account_sid
NOTIFICATION_SMS_AUTH_TOKEN=your_auth_token
NOTIFICATION_SMS_FROM=+15551234567`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Supported Channels
      </Typography>

      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li>
          <Typography variant="body1">
            <strong>Firebase</strong> - Mobile push notifications
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Pusher</strong> - Real-time web notifications
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Slack</strong> - Team messaging platform
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>WhatsApp</strong> - Business messaging
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>SMS</strong> - Text message notifications
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Mail</strong> - Email notifications
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Basic Usage
      </Typography>

      <Typography variant="h5" component="h3" gutterBottom>
        Mobile Push Notification
      </Typography>
      <CodeBlock
        phpCode={`Notify(
    'device_token_123', 
    'firebase',
    'New Message', 
    'You have 3 unread messages'
);`}
      />

      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        Slack Alert
      </Typography>
      <CodeBlock
        phpCode={`Notify(
    '#alerts',
    'slack',
    'Server Warning', 
    'High memory usage detected'
);`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Advanced Usage
      </Typography>

      <Typography variant="h5" component="h3" gutterBottom>
        With Data Payload
      </Typography>
      <CodeBlock
        phpCode={`Notify(
    'user-123',
    'pusher',
    'New Comment',
    'John commented on your post',
    [
        'post_id' => 456,
        'deep_link' => '/posts/456/comments'
    ]
);`}
      />

      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        Multiple Recipients
      </Typography>
      <CodeBlock
        phpCode={`Notify(
    ['+15551234567', '+15559876543'],
    'sms',
    'Appointment Reminder',
    'Your dental appointment is tomorrow at 2PM'
);`}
      />

      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        WhatsApp Business Message
      </Typography>
      <CodeBlock
        phpCode={`Notify(
    '+15551234567',
    'whatsapp',
    '', // Optional title
    'Your package has shipped. Tracking #: ABC123'
);`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Channel Reference
      </Typography>

      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li>
          <Typography variant="body1">
            <code>'firebase'</code>: Mobile push notifications (requires device
            token)
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>'pusher'</code>: Real-time web notifications (channel name)
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>'slack'</code>: Slack messages (channel or user ID)
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>'whatsapp'</code>: WhatsApp Business messages (E.164 phone
            number)
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>'sms'</code>: Text messages (phone number)
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <code>'mail'</code>: Email notifications
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Error Handling
      </Typography>

      <CodeBlock
        phpCode={`try {
    Notify('device_123', 'firebase', 'Alert', 'Something happened');
} catch (\Exception \$e) {
    // Handle notification failure
    Log::error('Notification failed: ' . \$e->getMessage());
}`}
      />

      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>

      <Box component="ul" sx={{ pl: 4 }}>
        <li>
          <Typography variant="body1">
            Use channel-specific formatting for recipients
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Keep titles under 60 characters for mobile
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Include deep links in data payload
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Always wrap in try-catch for critical notifications
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Queue bulk notifications for better performance
          </Typography>
        </li>
      </Box>
    </Box>
  );
}
