import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function Controllers() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Creating Controllers and Using CRUD
      </Typography>
      
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Creating a Controller
      </Typography>
      
      <Typography variant="body1" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <CodeBlock 
        bashCode="# Create a new controller\nphp luna make:controller UserController"
        phpCode="<?php\nnamespace App\\Controllers;\n\nuse App\\Models\\User;\nuse Rivulet\\Http\\Controller;\n\nclass UserController extends Controller\n{\n    public function index()\n    {\n        $users = User::all();\n        return response()->json($users);\n    }\n    \n    public function show($id)\n    {\n        $user = User::find($id);\n        return response()->json($user);\n    }\n}"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        CRUD Operations in Controllers
      </Typography>
      
      <Typography variant="body1" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <CodeBlock 
        bashCode="# No specific bash command for CRUD operations"
        phpCode="<?php\nnamespace App\\Controllers;\n\nuse App\\Models\\User;\nuse Rivulet\\Http\\Controller;\nuse Rivulet\\Http\\Request;\n\nclass UserController extends Controller\n{\n    // GET /users\n    public function index()\n    {\n        $users = User::all();\n        return response()->json($users);\n    }\n    \n    // POST /users\n    public function store(Request $request)\n    {\n        $user = User::create($request->all());\n        return response()->json($user, 201);\n    }\n    \n    // GET /users/{id}\n    public function show($id)\n    {\n        $user = User::find($id);\n        return response()->json($user);\n    }\n    \n    // PUT /users/{id}\n    public function update(Request $request, $id)\n    {\n        $user = User::find($id);\n        $user->update($request->all());\n        return response()->json($user);\n    }\n    \n    // DELETE /users/{id}\n    public function destroy($id)\n    {\n        $user = User::find($id);\n        $user->delete();\n        return response()->json(null, 204);\n    }\n}"
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Resource Controllers
      </Typography>
      
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </Typography>
      
      <CodeBlock 
        bashCode="# Create a resource controller\nphp luna make:controller UserController --resource"
        phpCode="<?php\nnamespace App\\Controllers;\n\nuse App\\Models\\User;\nuse Rivulet\\Http\\Controller;\nuse Rivulet\\Http\\Request;\n\nclass UserController extends Controller\n{\n    /**\n     * Display a listing of the resource.\n     */\n    public function index()\n    {\n        $users = User::all();\n        return response()->json($users);\n    }\n    \n    /**\n     * Store a newly created resource in storage.\n     */\n    public function store(Request $request)\n    {\n        $user = User::create($request->all());\n        return response()->json($user, 201);\n    }\n    \n    /**\n     * Display the specified resource.\n     */\n    public function show($id)\n    {\n        $user = User::find($id);\n        return response()->json($user);\n    }\n    \n    /**\n     * Update the specified resource in storage.\n     */\n    public function update(Request $request, $id)\n    {\n        $user = User::find($id);\n        $user->update($request->all());\n        return response()->json($user);\n    }\n    \n    /**\n     * Remove the specified resource from storage.\n     */\n    public function destroy($id)\n    {\n        $user = User::find($id);\n        $user->delete();\n        return response()->json(null, 204);\n    }\n}"
      />
    </Box>
  );
}