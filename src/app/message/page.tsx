"use client";

import * as Ably from "ably";
import ChatBox from "./chat-box.jsx";

export default function Chat() {
  const client = new Ably.Realtime({
    key: "UjEJjA.0WSIHw:0UZlM408hHtMfRxiqcY43DhV1aKWQafaBW9ibxQibQg",
  });
  return <ChatBox />;
}
