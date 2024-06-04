"use server";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Main() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (!data.user) {
    return (
      <main className="flex items-center justify-center h-screen text-center">
        <div>
          <h1 className="text-5xl font-bold text-sky-300">
            Welcome to JobHell
          </h1>
          <p className="text-white mt-2">A website to track your jobs.</p>
          <p className="text-white mt-2">Login to get started</p>
          <Link href="/login" className="bg-sky-400 rounded-lg px-10">
            Login
          </Link>
        </div>
      </main>
    );
  } else if (data.user) {
    return (
      <main className="flex items-center justify-center h-screen text-center">
        <div>
          <h1 className="text-5xl font-bold text-sky-300">
            Welcome to JobHell
          </h1>
          <p className="text-white mt-2">A website to track your jobs.</p>
          <p className="text-white mt-2">
            You are logged in! Get started from there
          </p>
          <Link href="/jobs" className="bg-sky-400 rounded-lg px-10">
            Dashboard
          </Link>
        </div>
      </main>
    );
  } else {
    redirect("/error");
  }
}
