import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Models() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Rivulet ORM Model System
      </Typography>
      
      <Typography variant="body1" paragraph>
        The Rivulet ORM provides a powerful ActiveRecord implementation for working with your database. Each database table has a corresponding Model which is used to interact with that table.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating Models
      </Typography>
      
      <Typography variant="body1" paragraph>
        Create new models using the Luna command line tool. This will generate a new model file in your models directory.
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:model User"
        textCode="This creates a new User model at app/Models/User.php"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Model Structure
      </Typography>
      
      <Typography variant="body1" paragraph>
        Models extend the base Rivulet\Model class and define their table structure and relationships. Here's a basic model example:
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nnamespace App\\Models;\n\nuse Rivulet\\Model;\n\nclass User extends Model\n{\n    protected $table = 'users';\n    \n    protected $fillable = [\n        'name', 'email', 'password'\n    ];\n    \n    protected $hidden = [\n        'password'\n    ];\n}"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        CRUD Operations
      </Typography>
      
      <Typography variant="body1" paragraph>
        The model provides simple methods for creating, reading, updating, and deleting records:
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\n// Create\n$user = User::create(['name' => 'John', 'email' => 'john@example.com']);\n\n// Read\n$user = User::find(1);\n$users = User::where('active', 1)->get();\n\n// Update\n$user = User::find(1);\n$user->name = 'Updated Name';\n$user->save();\n\n// Delete\n$user->delete(); // Soft delete\n$user->delete(false); // Permanent delete"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Query Building
      </Typography>
      
      <Typography variant="body1" paragraph>
        The model provides a fluent query builder interface for complex queries:
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\n// Basic query\n$users = User::where('age', '>', 18)\n            ->orderBy('name', 'DESC')\n            ->limit(10)\n            ->get();\n\n// Joins\n$orders = Order::join('customers', 'orders.customer_id', '=', 'customers.id')\n              ->select('orders.*', 'customers.name')\n              ->get();\n\n// Aggregates\n$count = User::where('active', 1)->count();"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Relationships
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet supports four types of database relationships:
      </Typography>
      
      <Typography variant="h6" component="h3" gutterBottom>
        1. One-to-One (HasOne)
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nclass User extends Model\n{\n    public function profile()\n    {\n        return $this->hasOne(Profile::class);\n    }\n}\n\n// Usage:\n$profile = User::find(1)->profile;"
      />
      
      <Typography variant="h6" component="h3" gutterBottom>
        2. One-to-Many (HasMany)
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nclass Post extends Model\n{\n    public function comments()\n    {\n        return $this->hasMany(Comment::class);\n    }\n}\n\n// Usage:\n$comments = Post::find(1)->comments;"
      />
      
      <Typography variant="h6" component="h3" gutterBottom>
        3. Belongs-To (Inverse Relationship)
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nclass Comment extends Model\n{\n    public function post()\n    {\n        return $this->belongsTo(Post::class);\n    }\n}\n\n// Usage:\n$post = Comment::find(1)->post;"
      />
      
      <Typography variant="h6" component="h3" gutterBottom>
        4. Many-to-Many (BelongsToMany)
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nclass User extends Model\n{\n    public function roles()\n    {\n        return $this->belongsToMany(Role::class);\n    }\n}\n\n// Usage:\n$roles = User::find(1)->roles;"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Advanced Features
      </Typography>
      
      <Typography variant="body1" paragraph>
        The model system includes several advanced features for complex applications:
      </Typography>
      
      <Typography variant="h6" component="h3" gutterBottom>
        Mass Assignment Protection
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nprotected $fillable = ['name', 'email']; // Only these can be mass assigned\nprotected $guarded = ['is_admin', 'password']; // These cannot be mass assigned"
      />
      
      <Typography variant="h6" component="h3" gutterBottom>
        Query Scopes
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nclass User extends Model\n{\n    public function scopeActive($query)\n    {\n        return $query->where('active', 1);\n    }\n}\n\n// Usage:\n$activeUsers = User::active()->get();"
      />
      
      <Typography variant="h6" component="h3" gutterBottom>
        Model Events
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nclass User extends Model\n{\n    protected static function boot()\n    {\n        parent::boot();\n        \n        static::creating(function ($user) {\n            $user->api_token = Str::random(60);\n        });\n    }\n}"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <ul>
          <li>Always define $fillable or $guarded properties</li>
          <li>Use relationships to keep your code clean and expressive</li>
          <li>Consider using query scopes for frequently used queries</li>
          <li>Hide sensitive fields using $hidden property</li>
          <li>Use model events for business logic that should execute when models change</li>
        </ul>
      </Box>
    </Box>
  );
}