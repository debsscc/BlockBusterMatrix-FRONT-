import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Botão para alternar a sidebar */}
            <button
                onClick={toggleSidebar}
                aria-controls="default-sidebar"
                aria-expanded={isSidebarOpen}
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                id="default-sidebar"
                className={`fixed left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {/* Dashboard */}
                        <li>
                        <Link href={"/admin/dashboard"} legacyBehavior>
                            <a
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </Link>
                        </li>
                        {/* Manage Items */}
                        <li>
                            <Link href={"/admin/manage"} legacyBehavior>
                                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 45.811 45.811"
                                >
                                    <g>
                                    <path d="M24.446,0.573C24.079,0.203,23.502,0,22.925,0c-0.516,0-1.153,0.203-1.52,0.572l-11.4,11.481c-0.56,0.563-0.725,1.408-0.417,2.139c0.306,0.731,1.022,1.207,1.815,1.206l3.72-0.03l-0.054,16.288c0.006,1.613,1.316,2.919,2.93,2.919h9.855c1.611,0,2.922-1.306,2.928-2.919l-0.053-16.284l3.719,0.027c0.793,0.002,1.512-0.474,1.815-1.206c0.308-0.73,0.144-1.577-0.417-2.139L24.446,0.573z" />
                                    <path d="M42.442,19.371c-1.623,0-2.947,1.315-2.947,2.938v16.392c0,0.678-0.522,1.217-1.203,1.217H7.47c-0.68,0-1.239-0.539-1.239-1.217V22.308c0-1.622-1.282-2.938-2.905-2.938c-1.622,0-2.905,1.315-2.905,2.938V38.7c0,3.918,3.131,7.11,7.05,7.11h30.821c3.92,0,7.098-3.192,7.098-7.11V22.308C45.389,20.686,44.063,19.371,42.442,19.371z" />
                                    </g>
                                </svg>
                                <span className="ms-3">Manage</span>
                                </a>
                            </Link>
                            </li>
                        {/* Update Items */}
                        <li>
                            <Link href={"#"} legacyBehavior>
                                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 45.811 45.811"
                                >
                                    <g>
                                    <path d="M24.446,0.573C24.079,0.203,23.502,0,22.925,0c-0.516,0-1.153,0.203-1.52,0.572l-11.4,11.481c-0.56,0.563-0.725,1.408-0.417,2.139c0.306,0.731,1.022,1.207,1.815,1.206l3.72-0.03l-0.054,16.288c0.006,1.613,1.316,2.919,2.93,2.919h9.855c1.611,0,2.922-1.306,2.928-2.919l-0.053-16.284l3.719,0.027c0.793,0.002,1.512-0.474,1.815-1.206c0.308-0.73,0.144-1.577-0.417-2.139L24.446,0.573z" />
                                    <path d="M42.442,19.371c-1.623,0-2.947,1.315-2.947,2.938v16.392c0,0.678-0.522,1.217-1.203,1.217H7.47c-0.68,0-1.239-0.539-1.239-1.217V22.308c0-1.622-1.282-2.938-2.905-2.938c-1.622,0-2.905,1.315-2.905,2.938V38.7c0,3.918,3.131,7.11,7.05,7.11h30.821c3.92,0,7.098-3.192,7.098-7.11V22.308C45.389,20.686,44.063,19.371,42.442,19.371z" />
                                    </g>
                                </svg>
                                <span className="ms-3">Delete</span>
                                </a>
                            </Link>
                            </li>


                    </ul>
                </div>
            </aside>
        </>
    );
}
