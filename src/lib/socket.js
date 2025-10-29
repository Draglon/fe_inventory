import { io } from "socket.io-client";

// const WS_URL = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:4004"

export default io("ws://be-inventory-1afa746d2cec.herokuapp.com");
