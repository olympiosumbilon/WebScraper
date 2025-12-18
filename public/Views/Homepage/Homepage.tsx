import { useEffect, useState } from "react";
import laptopImg from "../../../src/assets/img/laptop.png";

type Countdown = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
};

export default function Hero() {
  const [time, setTime] = useState<Countdown>({
    days: 3,
    hours: 22,
    mins: 14,
    secs: 24,
  });

  // simple countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, mins, secs } = prev;

        if (secs > 0) secs--;
        else {
          secs = 59;
          if (mins > 0) mins--;
          else {
            mins = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl text-center">
        {/* Headline */}
        <h1 className="text-white font-extrabold tracking-wide text-3xl sm:text-4xl md:text-[54px]">
          <div className="leading-tight">
            HOW TO <span className="text-amber-400 italic">CONVERT</span> YOU{" "}
            <span className="text-amber-400">SALES</span>
          </div>

          <div className="mt-3 leading-tight">FROM X TO Y USING THIS EMAIL</div>

          <div className="mt-2 leading-tight">SECRET METHOD</div>
        </h1>

        {/* Countdown */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <div className="text-white text-3xl sm:text-4xl font-medium tracking-widest">
            {pad(time.days)} : {pad(time.hours)} : {pad(time.mins)} :{" "}
            {pad(time.secs)}
          </div>

          <div className="text-slate-400 text-xs sm:text-sm tracking-wider flex gap-10">
            <span>Days</span>
            <span>Hours</span>
            <span>Mins</span>
            <span>Secs</span>
          </div>
        </div>

        {/* Form */}
        <div className="mt-12 flex flex-col gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full h-12 px-4 text-sm rounded-sm outline-none border border-slate-300 focus:border-amber-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 text-sm rounded-sm outline-none border border-slate-300 focus:border-amber-400"
          />

          <button
            className="mt-4 w-40 h-12 px-8 self-center  bg-cyan-600 hover:bg-cyan-500 transition text-white font-semibold tracking-wide"
          >
            SUBSCRIBE
          </button>
        </div>

        {/* Page1 */}

        <div className="relative min-h-[420px] bg-slate-950 overflow-hidden flex items-center px-10">
          {/* TEXT CONTENT */}
          <div className="relative z-10 max-w-xl text-white">
            <h2 className="text-[44px] text-left font-bold leading-tight">
              Unlock the Secret of <br />
              Effective{" "}
              <span className="text-amber-400 italic">Email Marketing</span>
            </h2>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Join now and discover how to connect with your audience,
              solve their pain points, and build lasting customer
              relationships.
            </p>
          </div>

          {/* BACKGROUND IMAGE */}
          <img
            src={laptopImg}
            alt="Laptop"
            className="
              absolute right-0 top-1/2 
              -translate-y-1/2
              w-[420px]
              opacity-90
              z-0
              drop-shadow-[0_40px_40px_rgba(0,0,0,0.6)]
            "
          />
        </div>

      </div>
    </div>
  );
}