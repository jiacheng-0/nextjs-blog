import Layout from "../components/layout";
import { useState, useContext } from "react";
import "tailwindcss/tailwind.css";

export default function Login() {
  const [toDo, setTodo] = useState("");

  return (
    <Layout>
      <h1>Log In</h1>
      <form className="flex">
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
          id="email"
          type="email"
          aria-label="email address"
          placeholder="Enter your email address"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </Layout>
  );
}
