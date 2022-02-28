import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';


export default function Navbar() {
  return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Realtime-Chat
                </Typography>
                    <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
  );
}