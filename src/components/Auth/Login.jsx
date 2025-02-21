import { useState } from "react";

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Email:", email, "Password:", password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white px-4">
      <div className="border-2 rounded-3xl border-emerald-600 p-10 sm:p-16 md:p-20 w-full max-w-md">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input
            className="border-2 px-5 py-3 text-lg sm:text-xl mt-5 outline-none placeholder:text-gray-400 border-emerald-600 rounded-full w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border-2 px-5 py-3 text-lg sm:text-xl mt-5 outline-none placeholder:text-gray-400 border-emerald-600 rounded-full w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-emerald-600 px-5 py-3 text-lg sm:text-xl mt-5 rounded-full cursor-pointer w-full"
          >
            <p className="text-white">Login</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
