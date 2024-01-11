import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image src="/public/person.jpg" alt="Aaron portrait" />
        </div>
      </div>
    </section>
  );
}
