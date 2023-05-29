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

  // Fetching data from campaigns
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resUsers = await fetch("http://localhost:4000/users");
        const usersData = await resUsers.json();
        setUsers(usersData);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    };

    fetchData();
  }, []);

  // Post request to api
  const handleSubmit = async () => {
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
      <div className={styles.flex}>
        <div>
          <div className={styles.intro}>
            <h1>All users</h1>
            <p>Create user, or target user ID by clicking on username</p>
          </div>
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
                type="password"
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
        </div>
        <div className={styles.list_container}>
          <List clientData={users}></List>
        </div>
      </div>
    </main>
  );
};

export default Users;
