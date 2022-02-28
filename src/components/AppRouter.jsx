import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';


const AppRouter = () => {
    const user = false;
    return user ? (
        <Routes>
           {privateRoutes.map(({path, element, id}) => (
             <Route path={path} element={element} key={id} />
           ))}
           <Route 
              path='*' 
              element={<Navigate to="chat" />}
           /> 
        </Routes>
    ) : (
        <Routes>
           {publicRoutes.map(({path, element, id}) => (
             <Route path={path} element={element} key={id} />
           ))}
           <Route 
              path='*' 
              element={<Navigate to="login" />}
           /> 
        </Routes>
    )
};

export default AppRouter;