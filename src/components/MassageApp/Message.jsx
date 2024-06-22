import React from 'react';

function Message({ text, sender }) {
 
console.log(sender, "this is sender")
  return (
    <div className={`flex px-8 mb-2 ${sender === "sender" ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-2 rounded-lg max-w-[80%] text-black ${sender  === "sender"? 'bg-slate-300 shadow-md' : 'bg-slate-100 shadow-md'}`}>
        <p className="m-0">{text}</p>
      </div>
    </div>
  );
}

export default Message;
