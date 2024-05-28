import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex justify-center content-center border">
      <form className="flex justify-center flex-col">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          className="text-black"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="text-black"
          id="password"
          name="password"
          type="password"
          required
        />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  );
}
