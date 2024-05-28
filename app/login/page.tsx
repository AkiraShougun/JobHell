import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-slate-400">
      <form className="flex flex-col max-w-80 items-center border p-10">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </main>
  );
}
