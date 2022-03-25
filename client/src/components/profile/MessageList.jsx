import React, { useEffect, useState } from "react";
import { request } from "../../request";
import MessageCard from "../historic/MessageCard";

export default function MessageList(props) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const username = props.username;
  useEffect(() => {
    const getMessages = async () => {
      // Get all messages
      setIsLoading(true);
      const res = await request.get(`/messages/author/${username}`);
      setMessages(res.messages);
      props.loadedMessages(res.messages);
      setIsLoading(false);
    };
    getMessages();
  }, []);

  if (isLoading)
    return (
      <div className="loading">Chargement de l'historique messages...</div>
    );

  return (
    <div className="messages-list">
      {messages.reverse().map((message, index) => {
        return <MessageCard msg={message} key={index} />;
      })}
    </div>
  );
}
