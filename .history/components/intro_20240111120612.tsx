import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="/aaron.png"
            alt="Aaron portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1"
          />

          <span className="absolute bottom-0 right-0 text-4x1">👋</span>
        </div>
      </div>
    </section>
  );
}
