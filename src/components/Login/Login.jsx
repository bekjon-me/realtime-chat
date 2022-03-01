import { Button, Container, Grid, Box } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../..";
import firebase from "firebase/compat/app";

const Login = () => {
  const {auth} = useContext(Context);


  const Login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
  }

  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          style={{ width: 400, background: "lightgray", borderRadius: "7px" }}
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box p={5}>
            <Button
              onClick={Login}
              variant={"outlined"}>Sign
              in
              with
              Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
