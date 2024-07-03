// import { useEffect, useRef, useState } from "react";
// import { HashLink } from "react-router-hash-link";
// import "./chatbot.css";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const messagesEndRef = useRef(null);
//   const fakeMessages = [
//     "Hi there, I'm Jesse and you?",
//     "Nice to meet you",
//     "How are you?",
//     "Not too bad, thanks",
//     "What do you do?",
//     "That's awesome",
//     "Codepen is a nice place to stay",
//     "I think you're a nice person",
//     "Why do you think that?",
//     "Can you explain?",
//     "Anyway I've gotta go now",
//     "It was a pleasure chat with you",
//     "Time to make a new codepen",
//     "Bye",
//     ":)",
//   ];
//   let i = 0;

//   useEffect(() => {
//     setTimeout(fakeMessage, 100);
//   }, []);

//   const setDate = () => {
//     const d = new Date();
//     const hours = d.getHours();
//     const minutes = d.getMinutes();
//     return `${hours}:${minutes}`;
//   };

//   const insertMessage = () => {
//     if (inputValue.trim() === "") return;

//     const newMessage = {
//       text: inputValue,
//       timestamp: setDate(),
//       personal: true,
//     };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setInputValue("");
//     fakeMessage();
//     setTimeout(fakeMessage, 1000 + Math.random() * 2000);
//   };

//   const fakeMessage = () => {
//     if (inputValue !== "") return;

//     const loadingMessage = {
//       text: "...",
//       loading: true,
//     };
//     setMessages((prevMessages) => [...prevMessages, loadingMessage]);

//     setTimeout(() => {
//       setMessages((prevMessages) => prevMessages.slice(0, -1));
//       const newMessage = {
//         text: fakeMessages[i],
//         timestamp: setDate(),
//       };
//       i++;
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     }, 1000 + Math.random() * 2000);
//   };

//   return (
//     <>
//       <HashLink to="#chatbot">
//         <div className="rounded-full fixed w-[5%] bottom-5 right-5 bg-white animate-bounce cursor-pointer">
//           <img src="./chatbot.png" alt="" className="" />
//         </div>
//       </HashLink>
//       <div
//         id="chatbot"
//         style={{
//           backgroundImage:
//             "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
//           backgroundPosition: "center",
//         }}
//         className=" flex flex-col z-0 px-8 pb-8 lg:px-24"
//       >
//         <div className=" font-heading text-heading heading text-center">
//           AI Chatbot
//         </div>
//         <div className=" heading text-center mb-8">
//           Personalized conversations through smart AI technology
//         </div>
//         <div className=" mt-6 items-center sm:flex-row sm:flex-wrap lg:px-32">
//           <section className="flex flex-col items-center w-full bg-white m-auto rounded-xl shadow-xl">
//             <div className="border-b border-gray-400 m-auto">
//               <img
//                 className="mx-auto -mt-12 object-cover w-[25%] aspect-square rounded-full border-white border-2 shadow-xl"
//                 src="./chatbot-profile.jpeg"
//                 alt="Sohail"
//               />
//               <p className="text-center font-bold my-2">Sohail</p>
//             </div>
//             <div className="my-4 px-4 w-full chat">
//               <div className="messages">
//                 {messages.map((message, index) => (
//                   <div
//                     key={index}
//                     className={`message ${
//                       message.personal ? "message-personal" : ""
//                     } ${message.loading ? "loading" : ""}`}
//                   >
//                     {!message.personal && (
//                       <figure className="avatar">
//                         <img
//                           src="http://askavenue.com/img/17.jpg"
//                           alt="avatar"
//                         />
//                       </figure>
//                     )}
//                     {message.text}
//                     {message.timestamp && (
//                       <div className="timestamp">{message.timestamp}</div>
//                     )}
//                   </div>
//                 ))}
//                 <div ref={messagesEndRef} />
//               </div>
//               <div className="message-box">
//                 <textarea
//                   className="message-input"
//                   placeholder="Type message..."
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       e.preventDefault();
//                       insertMessage();
//                     }
//                   }}
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="message-submit"
//                   onClick={insertMessage}
//                 >
//                   SEND
//                 </button>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chatbot;
