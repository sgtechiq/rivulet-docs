import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function ConsoleCLI() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Console & Luna CLI
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet's powerful command-line interface (Luna CLI) provides comprehensive tools for application development, 
        maintenance, and deployment. Execute commands using <code>php luna [command]</code>.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Code Generation Commands
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Individual Component Creation
        </Typography>
        <CodeBlock 
          bashCode={`# Create individual components\nphp luna create:model User\nphp luna create:controller UserController\nphp luna create:service UserService\nphp luna create:template welcome\nphp luna create:event UserRegistered\nphp luna create:rule UniqueEmail\nphp luna create:resource users\nphp luna create:seeder UserSeeder\nphp luna create:listener EmailNotifier\nphp luna create:job ProcessPayment\nphp luna create:middleware AuthMiddleware\n\n# Create with nested namespaces\nphp luna create:model Auth/User\nphp luna create:controller API/UserController`}
        />
      </Box>

      <Box sx={{ mb: 3, p: 2, bgcolor: '#e8f5e8', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Bulk Creation with Flags
        </Typography>
        <CodeBlock 
          bashCode={`# Create multiple components at once\nphp luna create -mcs User\n# Creates: UserModel + UserController + UserService\n\n# All available flags:\nphp luna create -mcsteri User\n# Creates: Model + Controller + Service + Template + Event + Resource + Listener + Job`}
        />
        
        <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
          Flag Reference:
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <li><Typography variant="body2"><code>-m</code> → Model (app/Models/)</Typography></li>
          <li><Typography variant="body2"><code>-c</code> → Controller (app/Controllers/)</Typography></li>
          <li><Typography variant="body2"><code>-s</code> → Service (app/Services/)</Typography></li>
          <li><Typography variant="body2"><code>-t</code> → Template (resources/views/)</Typography></li>
          <li><Typography variant="body2"><code>-e</code> → Event (app/Events/)</Typography></li>
          <li><Typography variant="body2"><code>-r</code> → Resource/Migration (database/Migrations/)</Typography></li>
          <li><Typography variant="body2"><code>-d</code> → Seeder (database/Seeders/)</Typography></li>
          <li><Typography variant="body2"><code>-l</code> → Listener (app/Listeners/)</Typography></li>
          <li><Typography variant="body2"><code>-j</code> → Job (app/Jobs/)</Typography></li>
        </Box>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Generated Code Examples
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Model Template
        </Typography>
        <CodeBlock 
          phpCode={`<?php\n\nnamespace App\\Models;\n\nuse Rivulet\\Model;\n\nclass User extends Model\n{\n    protected $table = '';\n    protected $fillable = [];\n    protected $hidden = [];\n    protected $casts = [];\n    protected $primaryKey = 'id';\n    public $timestamps = true;\n}`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Controller Template (CRUD Methods)
        </Typography>
        <CodeBlock 
          phpCode={`<?php\n\nnamespace App\\Controllers;\n\nuse Rivulet\\Controller;\n\nclass UserController extends Controller\n{\n    public function list() { /* List all resources */ }\n    public function show($id) { /* Show single resource */ }\n    public function store() { /* Store new resource */ }\n    public function edit($id) { /* Update existing resource */ }\n    public function delete($id) { /* Soft delete resource */ }\n    public function destroy($id) { /* Hard delete resource */ }\n}`}
        />

        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Service Template
        </Typography>
        <CodeBlock 
          phpCode={`<?php\n\nnamespace App\\Services;\n\nuse Rivulet\\Rivulet;\n\nclass UserService {\n    // Static methods for direct calls\n    public static function method($param) {\n        return $param;\n    }\n\n    // Instance methods if needed\n    protected $app;\n\n    public function __construct(Rivulet $app) {\n        $this->app = $app;\n    }\n}`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Database Commands
      </Typography>
      
      <CodeBlock 
        bashCode={`# Run pending migrations\nphp luna database:migrate\n\n# Rollback last migration batch\nphp luna database:rollback\n\n# Seed database with test data\nphp luna database:seed`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Cache Management
      </Typography>
      
      <CodeBlock 
        bashCode={`# Clear all application cache\nphp luna cache:clear\n\n# Cache configuration files\nphp luna config:cache\n\n# Clear cached configuration\nphp luna config:clear\n\n# Cache application routes\nphp luna routes:cache\n\n# Clear cached routes\nphp luna routes:clear`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Development Commands
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Local Development Server
        </Typography>
        <CodeBlock 
          bashCode={`# Start development server (default: localhost:8080)\nphp luna run\n\n# Start on custom host/port\nphp luna run localhost:3000\nphp luna run 192.168.1.100:8000`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Interactive Development Console
        </Typography>
        <CodeBlock 
          bashCode={`# Start PsySH interactive shell\nphp luna poke\n\n# Allows you to interact with your app:\n# >>> $user = App\\Models\\User::find(1)\n# >>> $user->name\n# >>> App\\Services\\UserService::method('test')`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Route Inspection
        </Typography>
        <CodeBlock 
          bashCode={`# List all registered routes\nphp luna routes:list\n\n# Output example:\n# GET /users -> UserController@list\n# POST /users -> UserController@store\n# GET /users/{id} -> UserController@show`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Queue & Background Processing
      </Typography>
      
      <CodeBlock 
        bashCode={`# Process jobs from default queue\nphp luna queue:work\n\n# Process specific queue with job limit\nphp luna queue:work emails 10\n\n# Run scheduled jobs\nphp luna schedule:run`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Testing & Quality Assurance
      </Typography>
      
      <CodeBlock 
        bashCode={`# Run all PHPUnit tests\nphp luna test:run\n\n# Run specific test file\nphp luna test:run tests/UserTest.php`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Application Maintenance
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Security & Setup
        </Typography>
        <CodeBlock 
          bashCode={`# Generate application encryption key\nphp luna key:generate\n# Updates .env file: APP_KEY=generated_key\n\n# Create storage symlink for file uploads\nphp luna storage:link\n# Links: storage/uploads -> public/storage`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Log Management
        </Typography>
        <CodeBlock 
          bashCode={`# Clear all application logs\nphp luna logs:clear\n# Removes all .log files from storage/logs/`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Performance Optimization
        </Typography>
        <CodeBlock 
          bashCode={`# Run complete optimization\nphp luna optimize\n# Combines: cache:clear + logs:clear + routes:clear`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Command Usage Patterns
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#fff3cd', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Development Workflow
        </Typography>
        <CodeBlock 
          bashCode={`# 1. Create application components\nphp luna create -mcsr User\n\n# 2. Run migrations\nphp luna database:migrate\n\n# 3. Seed with test data\nphp luna database:seed\n\n# 4. Start development server\nphp luna run\n\n# 5. Test your application\nphp luna test:run`}
        />
      </Box>

      <Box sx={{ mb: 3, p: 2, bgcolor: '#d4edda', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Production Deployment
        </Typography>
        <CodeBlock 
          bashCode={`# 1. Generate secure application key\nphp luna key:generate\n\n# 2. Cache configurations for performance\nphp luna config:cache\nphp luna routes:cache\n\n# 3. Run migrations\nphp luna database:migrate\n\n# 4. Create storage symlink\nphp luna storage:link\n\n# 5. Clear development caches\nphp luna cache:clear`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Generated File Structures
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Resource Migration Example
        </Typography>
        <CodeBlock 
          phpCode={`<?php\n\nuse Rivulet\\Database\\Migrations\\Migration;\n\nclass CreateUsersTable extends Migration\n{\n    public function up()\n    {\n        $this->executeSchema(function ($builder) {\n            $builder->createTable('users', function ($add) {\n                $add->column('id', 'INT', [\n                    'auto_increment' => true,\n                    'primary_key' => true\n                ]);\n                $add->column('created_at', 'TIMESTAMP', [\n                    'default' => 'CURRENT_TIMESTAMP'\n                ]);\n                // Add your columns here:\n                // $add->column('name', 'VARCHAR', ['length' => 255]);\n            });\n        });\n    }\n\n    public function down()\n    {\n        $this->executeSchema(function ($builder) {\n            $builder->dropTable('users');\n        });\n    }\n}`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Job Class Example
        </Typography>
        <CodeBlock 
          phpCode={`<?php\n\nnamespace App\\Jobs;\n\nuse Rivulet\\Queue\\Job;\n\nclass ProcessPayment extends Job {\n    public function handle() {\n        // Job logic here\n        // Will be processed by queue:work command\n    }\n}`}
        />

        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Middleware Example
        </Typography>
        <CodeBlock 
          phpCode={`<?php\n\nnamespace App\\Middleware;\n\nuse Rivulet\\Middleware\\Middleware;\nuse Rivulet\\Http\\Request;\nuse Closure;\n\nclass AuthMiddleware implements Middleware {\n    public function handle(Request $request, Closure $next) {\n        // Authentication logic here\n        return $next($request);\n    }\n}`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Advanced Usage
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Namespaced Components
        </Typography>
        <CodeBlock 
          bashCode={`# Create components in subdirectories\nphp luna create:model Auth/User\n# Creates: app/Models/Auth/User.php\n# Namespace: App\\Models\\Auth\n\nphp luna create:controller API/V1/UserController\n# Creates: app/Controllers/API/V1/UserController.php\n# Namespace: App\\Controllers\\API\\V1`}
        />
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
          Queue Processing
        </Typography>
        <CodeBlock 
          bashCode={`# Process default queue indefinitely\nphp luna queue:work\n\n# Process specific queue with limits\nphp luna queue:work emails 50\n# Processes max 50 jobs from 'emails' queue\n\n# Run scheduled jobs (add to cron)\n* * * * * cd /path/to/app && php luna schedule:run >> /dev/null 2>&1`}
        />
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Command Reference
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Cache Commands
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <li><Typography variant="body1"><code>cache:clear</code> - Flush all cached items from cache storage</Typography></li>
          <li><Typography variant="body1"><code>config:cache</code> - Compile and cache configuration files for faster loading</Typography></li>
          <li><Typography variant="body1"><code>config:clear</code> - Remove compiled configuration cache</Typography></li>
          <li><Typography variant="body1"><code>routes:cache</code> - Cache all application routes for performance</Typography></li>
          <li><Typography variant="body1"><code>routes:clear</code> - Clear cached routes file</Typography></li>
        </Box>
        
        <Typography variant="h5" component="h3" gutterBottom>
          Database Commands
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <li><Typography variant="body1"><code>database:migrate</code> - Execute all pending migrations</Typography></li>
          <li><Typography variant="body1"><code>database:rollback</code> - Revert the most recent migration batch</Typography></li>
          <li><Typography variant="body1"><code>database:seed</code> - Run all database seeders</Typography></li>
        </Box>
        
        <Typography variant="h5" component="h3" gutterBottom>
          Utility Commands
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <li><Typography variant="body1"><code>run [host:port]</code> - Start PHP development server</Typography></li>
          <li><Typography variant="body1"><code>poke</code> - Launch interactive PsySH shell</Typography></li>
          <li><Typography variant="body1"><code>routes:list</code> - Display all registered routes</Typography></li>
          <li><Typography variant="body1"><code>test:run [file]</code> - Execute PHPUnit tests</Typography></li>
          <li><Typography variant="body1"><code>key:generate</code> - Generate secure application key</Typography></li>
          <li><Typography variant="body1"><code>storage:link</code> - Create symbolic link for file uploads</Typography></li>
          <li><Typography variant="body1"><code>logs:clear</code> - Remove all log files</Typography></li>
          <li><Typography variant="body1"><code>optimize</code> - Run complete optimization (clears cache, logs, routes)</Typography></li>
        </Box>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4, mb: 3 }}>
        <li><Typography variant="body1">Use bulk creation (<code>create -flags</code>) for rapid scaffolding</Typography></li>
        <li><Typography variant="body1">Run <code>optimize</code> before production deployments</Typography></li>
        <li><Typography variant="body1">Use <code>poke</code> for debugging and testing model relationships</Typography></li>
        <li><Typography variant="body1">Set up <code>schedule:run</code> in cron for automated job processing</Typography></li>
        <li><Typography variant="body1">Use namespaced components for larger applications</Typography></li>
        <li><Typography variant="body1">Always run <code>database:migrate</code> after creating resources</Typography></li>
        <li><Typography variant="body1">Use <code>storage:link</code> once per environment setup</Typography></li>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Error Handling
      </Typography>
      
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f8d7da', borderRadius: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Common Issues
        </Typography>
        <CodeBlock 
          bashCode={`# Command not found\n# Solution: Check spelling, use php luna without arguments for help\n\n# Permission denied\n# Solution: Ensure luna file is executable\nchmod +x luna\n\n# Missing arguments\n# Most create commands require a name:\nphp luna create:model  # ❌ Error: Model name is required\nphp luna create:model User  # ✅ Correct`}
        />
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Console Architecture
      </Typography>
      
      <Typography variant="body1" paragraph>
        The Luna CLI system is built around a simple but powerful architecture where each command is a separate class 
        with an <code>execute()</code> method. Commands are registered in the main Console class and automatically 
        instantiated with the application instance for dependency injection.
      </Typography>

      <CodeBlock 
        phpCode={`// Adding custom commands to Console.php\nprotected $commands = [\n    'my:command' => MyCustomCommand::class,\n    // ... other commands\n];\n\n// Custom command structure\nclass MyCustomCommand {\n    protected $app;\n    \n    public function __construct(Rivulet $app) {\n        $this->app = $app;\n    }\n    \n    public function execute(array $args = []) {\n        // Command logic here\n        echo "Custom command executed\\n";\n    }\n}`}
      />
    </Box>
  );
}