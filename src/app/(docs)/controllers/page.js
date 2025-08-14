import React from "react";
import { Typography, Box } from "@mui/material";
import CodeBlock from "@/components/CodeBlock";

export default function Controllers() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Controllers
      </Typography>
      
      <Typography variant="body1" paragraph>
        Controllers in Rivulet handle HTTP requests and contain the application logic. They serve as intermediaries between models and views, processing input and returning responses.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating Controllers
      </Typography>
      
      <Typography variant="body1" paragraph>
        Generate a new controller using the Luna command line tool:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:controller User"
        textCode="Creates: app/Controllers/UserController.php"
      />
      
      <Typography variant="body1" paragraph>
        For namespaced controllers:
      </Typography>
      
      <CodeBlock 
        bashCode="php luna create:controller Admin/User"
        textCode="Creates: app/Controllers/Admin/UserController.php"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Base Controller Features
      </Typography>
      
      <Typography variant="body1" paragraph>
        All controllers extend the base Controller class which provides these services:
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nnamespace Rivulet;\n\nclass Controller\n{\n    protected $request;      // HTTP Request\n    protected $response;     // HTTP Response\n    protected $filesystem;   // File system access\n    protected $view;         // Template rendering\n    protected $mail;         // Email services\n    protected $notification; // Notification system\n    protected $http;         // HTTP client\n    protected $session;      // Session management\n    protected $cookie;       // Cookie handling\n}"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Controller Methods
      </Typography>
      
      <Typography variant="body1" paragraph>
        A standard CRUD controller includes these methods:
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\nclass UserController extends Controller\n{\n    // List all users\n    public function list() {}\n    \n    // Show single user\n    public function show(\$id) {}\n    \n    // Create new user\n    public function store() {}\n    \n    // Update user\n    public function edit(\$id) {}\n    \n    // Soft delete user\n    public function delete(\$id) {}\n    \n    // Permanent delete\n    public function destroy(\$id) {}\n}"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Example Controller Implementation
      </Typography>
      
      <Typography variant="body1" paragraph>
        Here&apos;s a complete UserController example:
      </Typography>
      
      <CodeBlock 
        phpCode={`<?php\nnamespace App\\Controllers;\n\nuse App\\Models\\User;\nuse Rivulet\\Controller;\n\nclass UserController extends Controller\n{\n    public function list()\n    {\n        return User::all();\n    }\n\n    public function show(\$id)\n    {\n        \$this->validate(['id' => \$id], ['id' => 'required|integer']);\n        \$user = User::find(\$id);\n        return \$user ?: \$this->jsonError('Not found', 404);\n    }\n\n    public function store()\n    {\n        \$data = \$this->request->input();\n        \$this->validate(\$data, [\n            'name' => 'required|string',\n            'email' => 'required|email|unique:users',\n            'password' => 'required|min:8'\n        ]);\n        \n        \$data['password'] = bcrypt(\$data['password']);\n        return User::create(\$data);\n    }\n\n    public function edit(\$id)\n    {\n        \$user = User::findOrFail(\$id);\n        \$data = Request();  // Using global Request() for input\n        \n        \$this->validate(\$data, [\n            'name' => 'sometimes|string',\n            'email' => 'sometimes|email|unique:users,email,'.\$id,\n            'password' => 'sometimes|min:8'\n        ]);\n        \n        if (isset(\$data['password'])) {\n            \$data['password'] = bcrypt(\$data['password']);\n        }\n        \n        \$user->update(\$data);\n        return \$user;\n    }\n\n    public function delete(\$id)\n    {\n        User::findOrFail(\$id)->delete();\n        return \$this->jsonSuccess('User archived');\n    }\n\n    public function destroy(\$id)\n    {\n        User::findOrFail(\$id)->forceDelete();\n        return \$this->jsonSuccess('User permanently deleted');\n    }\n}`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Using Global Request Helpers
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet provides global helpers for request data:
      </Typography>
      
      <CodeBlock 
        phpCode="// Get full input\n\$data = Request();\n\n// Get specific input key\n\$value = Request('key', 'default');\n\n// Get query parameter\n\$page = RequestQuery('page', 1);\n\n// Get header\n\$auth = RequestHeader('Authorization');"
      />
      
      <Typography variant="body1" paragraph>
        These can be used alongside or instead of \$this-&lt;request in controllers.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Common Controller Patterns
      </Typography>
      
      <Typography variant="h6" component="h3" gutterBottom>
        JSON Responses
      </Typography>
      
      <CodeBlock 
        phpCode="<?php\n// Success response\nreturn \$this->json(['data' => \$results]);\n\n// Error response\nreturn \$this->json(['error' => 'Not found'], 404);"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Keep controllers focused on HTTP logic</Typography></li>
        <li><Typography variant="body1">Move business logic to service classes</Typography></li>
        <li><Typography variant="body1">Use dependency injection for services</Typography></li>
        <li><Typography variant="body1">Follow RESTful conventions for resource controllers</Typography></li>
      </Box>
    </Box>
  );
}