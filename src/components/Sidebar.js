"use client";

import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Typography,Box } from '@mui/material';
import Link from 'next/link';

const sidebarWidth = 240;

const menuItems = [
  { text: 'Getting Started', href: '/' },
  { text: 'Installation', href: '/installation' },
  { text: 'Database Connection', href: '/database' },
  { text: 'Creating Models', href: '/models' },
  { text: 'Creating Controllers', href: '/controllers' },
  { text: 'Creating Migrations', href: '/migrations' },
  { text: 'Creating Seeders', href: '/seeders' },
  { text: 'Creating Services', href: '/services' },
  { text: 'Creating Events', href: '/events' },
  { text: 'Creating Jobs', href: '/jobs' },
  { text: 'Creating Listeners', href: '/listeners' },
  { text: 'Creating Middleware', href: '/middleware' },
  { text: 'Creating Helpers', href: '/helpers' },
  { text: 'Routing', href: '/routing' },
  { text: 'Authentication', href: '/authentication' },
  { text: 'Filesystem Operations', href: '/filesystem' },
  { text: 'Creating Templates', href: '/templates' },
  { text: 'Sending Mail', href: '/mail' },
  { text: 'Notifications', href: '/notifications' },
  { text: 'Logging', href: '/logging' },
  { text: 'Caching', href: '/caching' },
  { text: 'Debugging', href: '/debugging' },
  { text: 'Validation', href: '/validation' },
  { text: 'Validation Rules', href: '/validation-rules' },
  { text: 'Job Queues', href: '/queues' },
  { text: 'Testing', href: '/testing' },
  { text: 'Luna CLI', href: '/luna-cli' },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: sidebarWidth, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          Documentation
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}