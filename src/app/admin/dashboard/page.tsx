"use client";

import { useClienteStore } from "@/context/cliente";
import { useEffect, useState, useRef } from "react";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div >
      <Sidebar />
    </div>
  );
}
