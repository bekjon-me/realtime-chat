import React, { useContext } from 'react';
import './Navbar.scss'
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { Navigate, NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';
import { Context } from "../..";
import { useAuthState } from "react-firebase-hooks/auth"


export default function Navbar() {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth);
    return (
        <AppBar position="static" style={{ background: "linear-gradient(-45deg, #39249a, #e14e42)" }}>
            <Toolbar variant='dense'>
                <h3>RealTime Chat</h3>
                <Grid container justifyContent={"flex-end"}>

                </Grid>
                {user ? (
                    <Button
                      onClick={() => auth.signOut()}
                      variant='outlined'>
                          QUIT
                    </Button>
                ) : (
                    <NavLink to={LOGIN_ROUTE}>
                        <Button variant='outlined'>LOGIN</Button>
                    </NavLink>
                )}
            </Toolbar>
        </AppBar>
    );
}