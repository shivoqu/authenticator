'use client'
import { useState } from "react";

export default function Loading() {

    const [dots, setDots] = useState(1);

    setInterval(() => {
        if (dots < 3) {
            setDots(dots + 1);
        } else {
            setDots(1);
        }
    }, 500);


    return (
    <div className="h-screen w-screen flex align-center justify-center ">
      <p className="font-bold text-4xl text-white w-8 flex-1">Loading{".".repeat(dots)}</p>
    </div>
  );
}
