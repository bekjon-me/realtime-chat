import { LOGIN_ROUTE , CHAT_ROUTE} from "./utils/consts";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import uuid from "react-uuid";

export const publicRoutes = [
    {
        id: uuid(),
        path: LOGIN_ROUTE,
        element: <Login />
    }
]

export const privateRoutes = [
    {
        id: uuid(),
        path: CHAT_ROUTE,
        element: <Chat />
    }
]