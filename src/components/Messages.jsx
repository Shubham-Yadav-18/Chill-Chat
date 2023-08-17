import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (docSnapshot) => {
        if (docSnapshot.exists()) {
          const chatData = docSnapshot.data();
          setMessages(chatData.messages);
        }
      });
  
      return () => {
        unSub();
      };
    }
  }, [data.chatId]);
  
  

  return (
    <div className="messages">
      {Array.isArray(messages) &&
        messages.map((m, index) => (
          <Message key={index} message={m} />
        ))}
    </div>
  );
  
};

export default Messages;
