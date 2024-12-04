"use client";

import { useEffect, useState, useRef, use } from "react";
import Sidebar from "@/components/Sidebar";
import PrincipalAdmin from "@/components/layoutAdmin";

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
        {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center">Blockbuster Admin Dashboard</h1>
        <p className="text-center text-lg mt-2">Insights and Analytics!</p>
      </header>
        <PrincipalAdmin/>
      </div>
    </div>
  );
}