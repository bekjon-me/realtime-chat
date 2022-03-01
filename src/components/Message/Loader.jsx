import React from 'react';
import "./Loader.scss"
import { Button, Container, Grid, Box } from "@material-ui/core";


const Loader = () => {
    return (
        <Container>
            <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
                style={{ height: window.innerHeight - 50 }}
            >
                <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <div className="lds-hourglass"></div> 
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;