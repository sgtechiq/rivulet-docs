import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Rivulet API Micro Framework
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          A lightweight, fast, and powerful PHP micro-framework for building RESTful APIs
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" component={Link} href="/installation" sx={{ mr: 2 }}>
            Get Started
          </Button>
          <Button variant="outlined" color="primary" href="https://github.com/sgtechiq/rivulet" target="_blank">
            View on GitHub
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Lightweight
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rivulet is designed to be minimal and fast, with a small footprint and low resource usage.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} href="/installation">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Easy to Use
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Simple and intuitive API that makes it easy to build powerful applications quickly.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} href="/controllers">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Extensible
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Built with extensibility in mind, allowing you to add only the features you need.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} href="/middleware">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ my: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Documentation
        </Typography>
        <Typography variant="body1" paragraph textAlign="center">
          Explore our comprehensive documentation to learn how to use Rivulet to build powerful APIs.
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {[
            { title: 'Installation', href: '/installation', description: 'Learn how to install and set up Rivulet' },
            { title: 'Database Connection', href: '/database', description: 'Connect to databases and perform operations' },
            { title: 'Models', href: '/models', description: 'Define models for your data' },
            { title: 'Controllers', href: '/controllers', description: 'Build controllers to handle requests' },
            { title: 'Migrations', href: '/migrations', description: 'Manage database schema changes' },
            { title: 'Seeders', href: '/seeders', description: 'Populate your database with test data' },
            { title: 'Services', href: '/services', description: 'Organize your business logic' },
            { title: 'Events & Listeners', href: '/events', description: 'Implement event-driven architecture' },
            { title: 'Job Queue & Scheduling', href: '/jobs', description: 'Manage job queues and scheduled tasks' },
            { title: 'Middleware & Authentication', href: '/middleware', description: 'Filter HTTP requests and implement authentication' },
            { title: 'Helpers', href: '/helpers', description: 'Create reusable helper functions' },
            { title: 'Routing', href: '/routing', description: 'Define routes for your application' },
            { title: 'Filesystem Operations', href: '/filesystem', description: 'Work with files and directories' },
            { title: 'Templates', href: '/templates', description: 'Build dynamic templates' },
            { title: 'Sending Mail', href: '/mail', description: 'Send emails from your application' },
            { title: 'Notifications', href: '/notifications', description: 'Send notifications to users' },
            { title: 'Logging', href: '/logging', description: 'Log application events' },
            { title: 'Caching', href: '/caching', description: 'Improve performance with caching' },
            { title: 'Validation and Rules', href: '/validation-rules', description: 'Explore all validation rules' },
            { title: 'Session And Cookies', href: '/session-cookies', description: 'Manage sessions and cookies' },
            { title: 'Luna CLI', href: '/luna-cli', description: 'Use the command-line interface' },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} href={item.href}>Read More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}