"use client";

import { useClienteStore } from "@/context/cliente";
import { useEffect, useState, useRef, use } from "react";
import Sidebar from "@/components/Sidebar";
import Principal from "@/components/layoutAdmin";
import { Layout } from "lucide-react";

export default function DashboardPrincipal() {

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex h-screen">
      {/* Sidebar*/}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Layout */}
      <div className="flex-1 p-4 bg-gray-100">
        <Principal />
      </div>
    </div>
  );
}