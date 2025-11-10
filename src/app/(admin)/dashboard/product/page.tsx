"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=Mkasim12345",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidation failed");
    } else {
      const info = await res.json();
      if (info.revalidate) {
        setStatus("Revalidation successful");
        console.log(info);
      }
    }
  };

  return (
    <div className="py-20">
      <h1>{status}</h1>
      <button
        className="p-3 mt-6 bg-slate-800 text-sky-400"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
