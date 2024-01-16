import React, { useState } from "react";
import { links } from "@/lib/data";

export default function ActiveSectionContextProvider() {
  const [activeSection, setActiveSection] = useState<">("Home");

  return <div>ActiveSectionContextProvider</div>;
}
