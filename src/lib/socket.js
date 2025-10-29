import { io } from "socket.io-client";

export default io(`ws://${process.env.REACT_APP_API_URL}`);
