import { io } from "socket.io-client";

export default io(process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:4004");
