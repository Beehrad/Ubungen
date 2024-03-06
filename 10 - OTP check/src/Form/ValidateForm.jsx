import React, { useState } from "react";

export default function ValidateForm({ mobile, setMobile }) {
  const [code, setCode] = useState();
  const setHandler = () => {
    const sendMobile = async () => {
      try {
        const res = await fetch("https://api.verbo.ir/auth/check-otp", {
          method: "POST",
          body: JSON.stringify({mobile , code}),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    sendMobile();
  };
  return (
    <div className="flex items-center border-stone-900 border-2 rounded-xl w-[420px] m-auto p-10 mt-10 gap-6">
      <div className="flex flex-col">
        <b>{mobile}</b>
        OTP code
        <input
        value={code}
          onChange={(e) => setCode(e.target.value)}
          type="text"
          className="rounded-lg m-2 border-cyan-500 border-2 h-16 p-4"
        />
      </div>
      <div>
        <button
          onClick={setHandler}
          className="text-slate-800 bg-slate-200 rounded-xl w-full p-4"
        >
          Check OTP
        </button>
      </div>
    </div>
  );
}
