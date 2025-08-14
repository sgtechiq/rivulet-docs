"use client";

import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Typography,Box } from '@mui/material';
import Link from 'next/link';

const sidebarWidth = 240;

const menuItems = [
  { text: 'Getting Started', href: '/' },
  { text: 'Installation', href: '/installation' },
  { text: 'Database Connection', href: '/database' },
  { text: 'Models', href: '/models' },
  { text: 'Controllers', href: '/controllers' },
  { text: 'Migrations', href: '/migrations' },
  { text: 'Seeders', href: '/seeders' },
  { text: 'Services', href: '/services' },
  { text: 'Events & Listeners', href: '/events' },
  { text: 'Job Queue & Scheduling', href: '/jobs' },
  { text: 'Middleware & Authentication', href: '/middleware' },
  { text: 'Helpers', href: '/helpers' },
  { text: 'Routing', href: '/routing' },
  { text: 'Filesystem Operations', href: '/filesystem' },
  { text: 'Templates', href: '/templates' },
  { text: 'Sending Mail', href: '/mail' },
  { text: 'Notifications', href: '/notifications' },
  { text: 'Logging', href: '/logging' },
  { text: 'Caching', href: '/caching' },
  { text: 'Validation and Rules', href: '/validation-rules' },
  { text: 'Session And Cookies', href: '/session-cookies' },
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
            <ListItemButton component={Link} href={item.href} sx={{my:0.3,mx:1,p:0}}>
              <ListItemText primary={item.text}  sx={{my:0.3,mx:1,p:0}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}