import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <form className="flex flex-col max-w-80 items-center rounded-lg p-10 bg-[#181C3A] text-white gap-2">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="bg-blue-950"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="bg-blue-950"
        />
        <button
          formAction={login}
          className="bg-blue-950 px-10 py-2 rounded-md"
        >
          Log in
        </button>
        <button
          formAction={signup}
          className="bg-blue-950 px-10 py-2 rounded-md"
        >
          Sign up
        </button>
      </form>
    </main>
  );
}
