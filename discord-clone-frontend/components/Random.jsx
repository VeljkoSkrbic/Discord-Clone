// 'use client';
// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import { useUser } from '@auth0/nextjs-auth0/client';
// import style from '../styles/Chat.module.css';


// const socket = io('http://localhost:5000');

// function ChatComponent () {

// const { user } = useUser();

// const [message, setMessages] = useState("");
// const [recieve_message, setRecieveMessage] = useState("");
// const [name, setName] = useState("");
// const [picture, setPicture] = useState("");


// useEffect(() => {
//   socket.on('receive_message', (data) => {
//     setRecieveMessage(data.message);
//     setName(data.user.name);
//     setPicture(data.user.picture);
//     console.log(data.user);
//   });
// }, [socket]);

// const sendMessage = () => {

//     const userData ={
//       name: user.name,
//       picture: user.picture
//     }
//     socket.emit('send_message', { message, user: userData });
//     setMessages("");
//     console.log(message);
// };

//   return (
//     <div className={style['Chat']}>
//     <h1 className='text-green-500'>DA ZNAM DA RADI</h1>
//     <div>
//       <table>
//         <tbody>
//         <tr>
//           <td>
//           <img className={style['message']} src={picture}></img>
//           </td>
//           <td>{name}</td>
//         </tr>
//         </tbody>
//       </table>
//     </div>
//     <ul id="messages" className="list-none m-0 p-0">
//       <li>{recieve_message}</li>
//     </ul>
//     <form id="form" action="" className="bg-opacity-15 fixed bottom-0 left-0 right-0 flex h-12 backdrop-blur-md">

//       <input
//         onChange={(e) => setMessages(e.target.value)}
//         id="input"
//         autoComplete="off"
//         className="border-none p-2 flex-grow rounded-full m-3 focus:outline-none"
//       />
//       <button onClick={sendMessage} className="bg-gray-700 border-none p-2 m-3 rounded-md focus:outline-none text-white">
//         Send
//       </button>
//     </form>
//   </div>
//   );
// }
// export default ChatComponent;