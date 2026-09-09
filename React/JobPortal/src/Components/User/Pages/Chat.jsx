import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5002");

function Chat() {

    const [mySocketId, setMySocketId] = useState("");
    const [receiverId, setReceiverId] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        socket.on("connect", () => {

            console.log("Connected:", socket.id);

            setMySocketId(socket.id);

        });

        socket.on("private-message", (data) => {

            console.log("Message received:", data);

            setMessages((prev) => [
                ...prev,
                {
                    sender: data.senderId,
                    message: data.message
                }
            ]);

        });

        return () => {
            socket.off("connect");
            socket.off("private-message");
        };

    }, []);

    const sendMessage = (e) => {

        e.preventDefault();

        if (!message.trim() || !receiverId) {
            return;
        }

        socket.emit("private-message", {
            receiverId: receiverId,
            message: message
        });

        // Optional: show your own sent message
        setMessages((prev) => [
            ...prev,
            {
                sender: "Me",
                message: message
            }
        ]);

        setMessage("");
    };

    return (
        <div className="container">

            <h2>Private Chat</h2>
            
            <br />
          

            <h3>
                My Socket ID: {mySocketId}
            </h3>
          
             <br />
            <input
                type="text"
                placeholder="B's Socket ID"
                value={receiverId}
                onChange={(e) => setReceiverId(e.target.value)}
            />

            <br />
            <br />

            <form onSubmit={sendMessage}>

                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit">
                    Send
                </button>

            </form>
             <br />
            <h3>Messages</h3>
             <br />
            <ul>

                {messages.map((msg, index) => (
                    <li key={index}>
                        <b>{msg.sender}:</b> {msg.message}
                    </li>
                ))}

            </ul>
                 <br />    
        </div>
    );
}

export default Chat;



// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";


// const socket = io("http://localhost:5002");

// function Chat() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
  
//     socket.on("message", (msg) => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         msg
//       ]);
//     });

//     // Cleanup when component is removed
//     return () => {
//       socket.off("message");
//     };
//   }, []);

//   const sendMessage = (e) => {
//     e.preventDefault();

//     if (!message.trim()) {
//       return;
//     }

 
//     socket.emit("message", message.trim());

//     setMessage("");
//   };

//   return (
//     <div className="m-5">
//       <h2 className="m-3">Socket.IO Chat</h2>

//       <form onSubmit={sendMessage}>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Enter message"
//         />

//         <button type="submit" className="mx-3 btn btn-success">
//           Send
//         </button>
//       </form>

//       <ul>
//         {messages.map((msg, index) => (
//           <li key={index}>
//             {msg}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Chat;


