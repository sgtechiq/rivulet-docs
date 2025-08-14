import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Events() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Events & Listeners
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet's event system provides a simple observer implementation, allowing you to subscribe and listen for events in your application.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Core Commands
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Event System Commands
        </Typography>
        <CodeBlock 
          bashCode="# Create a new event\nphp luna create:event ArticleUpdated\n\n# Create a new listener\nphp luna create:listener SendArticleUpdateNotification\n\n# Register events in config/events.php"
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Event System Overview
      </Typography>
      
      <Typography variant="body1" paragraph>
        The event system consists of three main components:
      </Typography>
      
      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1"><strong>Events</strong> - Simple objects that represent something that happened</Typography></li>
        <li><Typography variant="body1"><strong>Listeners</strong> - Classes that perform actions in response to events</Typography></li>
        <li><Typography variant="body1"><strong>Dispatcher</strong> - Manages the event-listener relationships</Typography></li>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating Events
      </Typography>
      
      <Typography variant="body1" paragraph>
        Generate a new event class:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:event ArticleDeleted"
        textCode="Creates: app/Events/ArticleDeleted.php"
      />
      
      <Typography variant="body1" paragraph>
        Example event class:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nnamespace App\\Events;\n\nuse Rivulet\\Events\\Event;\n\nclass ArticleDeleted extends Event\n{\n    /**\n     * Create new event instance\n     */\n    public function __construct(public \$articleId)\n    {\n        parent::__construct(['id' => \$articleId]);\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating Listeners
      </Typography>
      
      <Typography variant="body1" paragraph>
        Generate a new listener class:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:listener SendDeleteNotification"
        textCode="Creates: app/Listeners/SendDeleteNotification.php"
      />
      
      <Typography variant="body1" paragraph>
        Example listener class:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nnamespace App\\Listeners;\n\nuse App\\Events\\ArticleDeleted;\nuse Rivulet\\Events\\Listener;\n\nclass SendDeleteNotification extends Listener\n{\n    public function handle(ArticleDeleted \$event): void\n    {\n        \$articleId = \$event->getData()['id'];\n        // Send notification logic here\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Registering Events
      </Typography>
      
      <Typography variant="body1" paragraph>
        Register event-listener relationships in <code>config/events.php</code>:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nreturn [\n    'App\\Events\\ArticleDeleted' => [\n        'App\\Listeners\\SendDeleteNotification',\n        'App\\Listeners\\LogArticleDeletion',\n        'App\\Listeners\\UpdateSearchIndex'\n    ],\n    \n    'App\\Events\\UserRegistered' => [\n        'App\\Listeners\\SendWelcomeEmail',\n        'App\\Listeners\\CreateUserProfile'\n    ]\n];`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Dispatching Events
      </Typography>
      
      <Typography variant="body1" paragraph>
        Trigger events from anywhere in your application:
      </Typography>
      
      <CodeBlock 
        phpCode={`// With constructor data\n\$event = new App\\Events\\ArticleDeleted(\$articleId);\nTriggerEvent(\$event);\n\n// Or with array data\nTriggerEvent('ArticleDeleted', ['id' => \$articleId]);`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Complete Example
      </Typography>
      
      <Typography variant="body1" paragraph>
        1. First create the event and listener:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:event OrderShipped\nphp luna create:listener SendShipmentNotification"
      />
      
      <Typography variant="body1" paragraph>
        2. Configure the relationship in <code>config/events.php</code>:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nreturn [\n    'App\\Events\\OrderShipped' => [\n        'App\\Listeners\\SendShipmentNotification'\n    ]\n];`}
      />
      
      <Typography variant="body1" paragraph>
        3. Dispatch the event when an order ships:
      </Typography>
      
      <CodeBlock 
        phpCode={`// In your OrderController\npublic function ship(\$orderId)\n{\n    // Ship the order...\n    \n    // Dispatch event\n    TriggerEvent('OrderShipped', [\n        'order_id' => \$orderId,\n        'customer_id' => \$customerId\n    ]);\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Use events for side effects, not core business logic</Typography></li>
        <li><Typography variant="body1">Keep listeners small and focused</Typography></li>
        <li><Typography variant="body1">Document expected event payloads</Typography></li>
        <li><Typography variant="body1">Consider queueing long-running listeners</Typography></li>
        <li><Typography variant="body1">Name events in past tense (e.g. OrderShipped, UserRegistered)</Typography></li>
      </Box>
    </Box>
  );
}