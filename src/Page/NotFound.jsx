// src/components/NotFound.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound({ message = "NotFlounf page" }) {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6">
      <div
      
        className="max-w-3xl w-full text-center rounded-2xl bg-white darkA:bg-[#0b1220] shadow-2xl p-8 md:p-12"
      >
        <div className="text-center mb-6">
          <h1
          
            className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            404
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            {message}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Back"
          >
            <FaArrowLeft /> Back
          </button>

          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            aria-label="Go home"
          >
            <FaHome /> Home
          </Link>
        </div>

     
      </div>
    </section>
  );
}
