import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        404
      </h1>
      <p className="text-lg text-gray-600 mb-8">Page Not Found</p>
      <div
        onClick={() => navigate(-1)}
        className="px-6 py-4 bg-gradient-to-tr from-gray-900 to-gray-800 text-white rounded cursor-pointer"
      >
        Go Back
      </div>
    </motion.div>
  );
}
