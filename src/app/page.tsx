"use client";

import Image from "next/image";
import styles from "../styling/login.module.scss";
import ApiClient from "../lib/api-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [redirect, setRedirect] = useState<Boolean>(false);
  const { push } = useRouter();

  console.log(users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users
        const resUsers = await fetch("http://localhost:4000/users");
        const usersData = await resUsers.json();
        setUsers(usersData);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (redirect === true) {
      push("/dashboard");
    }
  }, [redirect]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    // Find the user with matching email and password
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("Login successful");
      setEmail("");
      setPassword("");
      setErrorMessage("");
      setRedirect(!redirect);
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <main className={styles.login}>
      <form onSubmit={handleLogin} className={styles.container_login}>
        <h1>Login</h1>
        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Brukernavn</span>
        </label>

        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Passord</span>
        </label>

        <div className={styles.button_container}>
          <button type="submit">Login</button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </main>
  );
};

export default Login;
