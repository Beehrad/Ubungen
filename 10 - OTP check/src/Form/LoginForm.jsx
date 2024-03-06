import React from "react";

export default function LoginForm({ mobile, setMobile, setStep }) {
  const setHandler = () => {
    const sendMobile = async () => {
      console.log(mobile);
      try {
        const res = await fetch("https://api.verbo.ir/auth/send-otp", {
          method: "POST",
          body: JSON.stringify({ mobile }),
          headers: {
            // "Content-Type": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const data = await res.json();
        console.log(data);
        if (data.status === 200) {
          setStep(2);
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendMobile();
  };

  return (
    <div className="flex items-center border-stone-900 border-2 rounded-xl w-fit m-auto p-10 mt-10">
      Mobile
      <input
        onChange={(e) => setMobile(e.target.value)}
        type="text"
        className="p-4 rounded-lg m-2 border-cyan-500 border-2 h-16"
      />
      <div>
        <button
          onClick={setHandler}
          className="text-slate-800 bg-slate-200 rounded-xl w-full p-4"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}
