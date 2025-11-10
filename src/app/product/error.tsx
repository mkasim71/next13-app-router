"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="mb-4 text-2xl font-bold text-red-600">
        Something went wrong!
      </h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}
