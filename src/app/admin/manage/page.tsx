"use client";

import { useEffect, useState, useRef, use } from "react";
import Sidebar from "@/components/Sidebar";
import Manager from "@/components/layoutManage";

export default function ManagePrincipal() {

    const [currentIndex, setCurrentIndex] = useState(0);
  
    return (
      <div className="flex h-screen">
        {/* Sidebar*/}
        <div className="w-64">
          <Sidebar />
        </div>
  
        {/* Layout */}
        <div className="flex-1 p-4 bg-gray-100">
         <Manager/>
        </div>
      </div>
    );
  }