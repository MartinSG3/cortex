"use client";

import List from "@/components/list";
import { FC, useEffect, useState } from "react";
import styles from "../../styling/users.module.scss";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImagUrl] = useState("man");

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const post = { name, email, password, imageUrl };

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <main className={styles.users}>
      <h1>All users</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Name</span>
        </label>
        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>
        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>
        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="text"
            value={imageUrl}
            onChange={(e) => setImagUrl(e.target.value)}
          />
          <span>ImageUrl (Don't change)</span>
        </label>
        <br />
        <div className={styles.button_container}>
          <button type="submit">Upload</button>
        </div>
      </form>
      <div className={styles.list_container}>
        <List clientData={users}></List>
      </div>
    </main>
  );
};

export default Users;
