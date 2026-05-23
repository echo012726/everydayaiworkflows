"use client";
import { useEffect } from "react";
export default function Redirect() {
  useEffect(() => { window.location.replace("/blog"); }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#0f0f23", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p>Redirecting to blog...</p>
    </div>
  );
}
