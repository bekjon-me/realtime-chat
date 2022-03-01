import React, { useContext, useState } from 'react';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from 'firebase/compat/app';
import { Grid, Container, TextField, Button, Avatar } from '@material-ui/core';
import Loader from '../Message/Loader';
import uuid from 'react-uuid';

const Chat = () => {
    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth);
    const [value, setValue] = useState("");
    const [messages, loading] = useCollectionData(
        firestore.collection("messages").orderBy("createdAt")
    );
    const sendMessage = async () => {
        firestore.collection("messages").add({
            id: uuid(),
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue("")
    }
    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50, marginTop: 5 }}
                justifyContent={"center"}
            >
                <div
                    style={{
                        width: "80%",
                        height: "60vh",
                        border: "1px solid gray",
                        overflowX: "auto",
                        background: "linear-gradient(45deg, #22030a, #e14c22)"
                    }}
                >
                    {messages.map(message => (
                        <div
                          key={message.id}
                          style={{
                              margin: 10,
                              backgroundColor: user.uid === message.iud ? "rgba(255, 255, 255, 0.7)" : "rgba(228, 83, 167, 0.549)",
                              marginLeft: user.uid === message.uid ? "auto" : "10px",
                              width: "40%",
                              padding: 5,
                              borderRadius: "10px"
                          }}
                        >
                            <Grid
                              container
                              style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                              }}
                            >
                                <Avatar src={message.photoURL} />
                                <div style={{
                                    marginTop: "5px"
                                }}>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    ))}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{ width: "80%" }}
                >
                    <TextField
                        placeholder={"Message"}
                        fullWidth
                        variant={"outlined"}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        style={{
                            background: "lightgray"
                        }}
                    />
                    <Button
                        variant={"outlined"}
                        style={{ background: "green", marginTop: 2 }}
                        onClick={sendMessage}
                    >Send Message</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;