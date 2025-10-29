import { io } from "socket.io-client";

export default io(`ws://${process.env.NEXT_PUBLIC_API_URL}`);
