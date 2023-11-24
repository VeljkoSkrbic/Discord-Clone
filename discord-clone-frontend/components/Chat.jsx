'use client';
import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { useUser } from '@auth0/nextjs-auth0/client';
import ChatMessage from './Message';

// const socket = io('http://localhost:5000');

function Chat() {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const messagesEndRef = React.createRef();

  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    scrollToBottom()

    return () => {
      socket.disconnect(); // Disconnect the socket on component unmount
    };
  }, [messages]);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const sendMessage = (message) => {
    const socket = io('http://localhost:5000');
    const userData = {
      name: user.name,
      picture: user.picture,
    };
    socket.emit('send_message', { message, user: userData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (message.trim() !== '') {
      sendMessage(message);
      e.target.message.value = ''; // Clear the input field
    }
  };

  return (
  <div id='chat' className='relative flex flex-col h-screen'>
    <div id='messages' className='flex-1 overflow-auto'>
      <ul>
        {messages.map((msg, index) => (
          <ChatMessage key={index} user={msg.user} message={msg.message} />
          ))}
          <div ref={messagesEndRef} />
      </ul>
    </div>
    <form id='form' onSubmit={handleSubmit} className='flex-none'>
      <div id='input' className='flex'>
        <input
          name='message'
          autoComplete='off'
          placeholder='Send a message'
          className='w-[100%] m-3 rounded-md h-auto p-1 bg-chat text-white bottom-0 focus:outline-none'
        />
      </div>
    </form>
  </div>
  );
}
export default Chat;
