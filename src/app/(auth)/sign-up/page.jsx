"use client";

import Link from "next/link";

export default function SignUpPage() {
  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = "/sign-in";
  }

  return (
    <div className="max-w-sm mx-auto mt-20 space-y-6">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-black text-white p-2 rounded">
          Create Account
        </button>
      </form>

      <p className="text-sm text-center">
        Already have an account?{" "}
        <Link href="/sign-in" className="underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
