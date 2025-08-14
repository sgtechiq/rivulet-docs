import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Services() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Service Classes
      </Typography>
      
      <Typography variant="body1" paragraph>
        Services in Rivulet encapsulate business logic and complex operations, keeping controllers lean and focused on HTTP handling.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Service Commands
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Service Creation Command
        </Typography>
        <CodeBlock 
          bashCode="# Create a new service class\nphp luna create:service ServiceName\n\n# Namespaced service\nphp luna create:service Admin/UserService"
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating Services
      </Typography>
      
      <Typography variant="body1" paragraph>
        Generate a new service class:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:service ArticleService"
        textCode="Creates: app/Services/ArticleService.php"
      />
      
      <Typography variant="body1" paragraph>
        The generated service includes both static and instance method patterns:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nnamespace App\\Services;\n\nuse Rivulet\\Rivulet;\n\nclass ArticleService {\n    // Static method example\n    public static function getRecentArticles() {\n        // Business logic here\n    }\n\n    // Instance method example\n    protected \$app;\n\n    public function __construct(Rivulet \$app) {\n        \$this->app = \$app;\n    }\n\n    public function processArticle(\$data) {\n        // Business logic here\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Service Patterns
      </Typography>
      
      <Typography variant="h6" component="h3" gutterBottom>
        1. Static Method Pattern
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\nnamespace App\\Services;\n\nclass PaymentService {\n    public static function calculateTotal(\$items) {\n        \$total = 0;\n        foreach (\$items as \$item) {\n            \$total += \$item['price'] * \$item['quantity'];\n        }\n        return \$total;\n    }\n}`}
      />
      
      <Typography variant="body1" paragraph>
        Usage in controllers:
      </Typography>
      
      <CodeBlock 
        phpCode={`\$total = PaymentService::calculateTotal(\$cartItems);`}
      />
      
      <Typography variant="h6" component="h3" gutterBottom>
        2. Instance Method Pattern
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\nnamespace App\\Services;\n\nuse Rivulet\\Rivulet;\n\nclass ReportService {\n    protected \$app;\n    protected \$db;\n\n    public function __construct(Rivulet \$app) {\n        \$this->app = \$app;\n        \$this->db = \$app->make('database');\n    }\n\n    public function generateSalesReport(\$period) {\n        // Complex report generation\n    }\n}`}
      />
      
      <Typography variant="body1" paragraph>
        Usage in controllers:
      </Typography>
      
      <CodeBlock 
        phpCode={`\$report = app()->make(ReportService::class)->generateSalesReport('2023-Q1');`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Example Service
      </Typography>
      
      <Typography variant="body1" paragraph>
        Here's a complete ArticleService implementation:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\Authors;\n\nclass ArticleService {\n    public static function getAuthorName(\$authorId) {\n        \$author = Authors::find(\$authorId);\n        return \$author ? \$author->name : 'Unknown';\n    }\n\n    public static function formatPublishDate(\$date) {\n        return date('F j, Y', strtotime(\$date));\n    }\n\n    public static function getRelatedArticles(\$articleId, \$limit = 3) {\n        // Complex logic to find related articles\n        return Article::where('category_id', \$article->category_id)\n            ->where('id', '!=', \$articleId)\n            ->limit(\$limit)\n            ->get();\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Using Services
      </Typography>
      
      <Typography variant="body1" paragraph>
        Services can be used throughout your application:
      </Typography>
      
      <Typography variant="h6" component="h3" gutterBottom>
        In Controllers
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\n\nnamespace App\\Controllers;\n\nuse App\\Services\\ArticleService;\n\nclass ArticleController extends Controller {\n    public function show(\$id) {\n        \$article = Article::find(\$id);\n        return [\n            'article' => \$article,\n            'author' => ArticleService::getAuthorName(\$article->author_id),\n            'related' => ArticleService::getRelatedArticles(\$id)\n        ];\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Use services for complex business logic</Typography></li>
        <li><Typography variant="body1">Keep services focused on single responsibilities</Typography></li>
        <li><Typography variant="body1">Prefer static methods for simple operations</Typography></li>
        <li><Typography variant="body1">Use dependency injection for complex services</Typography></li>
        <li><Typography variant="body1">Name services after their business purpose (PaymentService, ReportService)</Typography></li>
      </Box>
    </Box>
  );
}