import React from 'react';
import { Typography, Box } from '@mui/material';
import CodeBlock from '@/components/CodeBlock';

export default function CachingSystem() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Caching System
      </Typography>
      
      <Typography variant="body1" paragraph>
        Rivulet provides a simple file-based caching system with automatic expiration and helper functions.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Configuration
      </Typography>
      
      <Typography variant="body1" paragraph>
        The cache is configured in your application&apos;s service container. Default path:
      </Typography>
      
      <CodeBlock 
        bashCode={`storage/cache/`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Global Helpers
      </Typography>
      
      <Typography variant="h5" component="h3" gutterBottom>
        Storing Items
      </Typography>
      <CodeBlock 
        phpCode={`// Store for 1 hour (default)
PutCache('user_123', \$userData);

// Store with custom TTL (in seconds)
PutCache('popular_posts', \$posts, 86400); // 24 hours`}
      />
      
      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        Retrieving Items
      </Typography>
      <CodeBlock 
        phpCode={`// Get cached value or return null
\$data = GetCache('user_123');

// Get with default value
\$data = GetCache('non_existent_key', ['default' => 'value']);`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Console Command
      </Typography>
      
      <Typography variant="body1" paragraph>
        Clear all cached items:
      </Typography>
      
      <CodeBlock 
        bashCode={`php luna cache:clear`}
      />
      
      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        This removes all cache files from the storage directory.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Examples
      </Typography>
      
      <Typography variant="h5" component="h3" gutterBottom>
        Database Query Caching
      </Typography>
      <CodeBlock 
        phpCode={`\$posts = GetCache('latest_posts');
        
if (!\$posts) {
    \$posts = Post::latest()->limit(10)->get();
    PutCache('latest_posts', \$posts, 3600); // Cache for 1 hour
}`}
      />
      
      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
        View Fragment Caching
      </Typography>
      <CodeBlock 
        phpCode={`\$html = GetCache('sidebar_html');

if (!\$html) {
    \$html = view('partials.sidebar', \$data)->render();
    PutCache('sidebar_html', \$html, 1800); // Cache for 30 minutes
}

echo \$html;`}
      />
      
      <Typography variant="h4" component="h2" gutterBottom>
        Best Practices
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Use descriptive cache keys (e.g., &apos;user_123_profile&apos;)</Typography></li>
        <li><Typography variant="body1">Set appropriate TTL based on data volatility</Typography></li>
        <li><Typography variant="body1">Clear cache after data updates</Typography></li>
        <li><Typography variant="body1">Avoid caching sensitive information</Typography></li>
        <li><Typography variant="body1">Consider cache size for large datasets</Typography></li>
        <li><Typography variant="body1">Implement cache fallbacks for critical data</Typography></li>
      </Box>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Technical Details
      </Typography>
      
      <Box component="ul" sx={{ pl: 4 }}>
        <li><Typography variant="body1">Cache files stored with <code>.cache</code> extension</Typography></li>
        <li><Typography variant="body1">Keys are MD5-hashed for filename safety</Typography></li>
        <li><Typography variant="body1">Automatic expiration check on retrieval</Typography></li>
        <li><Typography variant="body1">Thread-safe file operations</Typography></li>
      </Box>
    </Box>
  );
}