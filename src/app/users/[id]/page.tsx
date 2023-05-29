"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styling/users.module.scss";
import Link from "next/link";

const UserPage = () => {
  const params = useParams();
  const id = parseInt(params.id);

  const [redirect, setRedirect] = useState<Boolean>(false);
  const [clients, setClients] = useState<User>();
  const { push } = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [imageUrl, setImagUrl] = useState<string>("");

  // Fetching data from campaigns, dynamic routes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resClients = await fetch(`http://localhost:4000/users/${id}`);
        const clientsData = await resClients.json();
        setClients(clientsData);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    };

    fetchData();
  }, []);

  // Redirect after delete
  useEffect(() => {
    if (redirect === true) {
      push("/users");
    }
  }, [redirect]);

  // Put request based on id
  const handleSubmit = async () => {
    const user = {
      name: name === "" ? clients?.name : name,
      email: email === "" ? clients?.email : email,
      password: password === "" ? clients?.password : password,
      imageUrl: imageUrl,
    };

    try {
      const response = await fetch(`http://localhost:4000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const updatedUser: User = await response.json();
      console.log("User updated:", updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Delete user based on id
  const handleDelete = () => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Post deleted successfully");
          setRedirect(!redirect);
        } else {
          console.error("Failed to delete post");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <main className={styles.users_id}>
      <div className={styles.intro}>
        <h1>
          User: {clients?.name} ({id})
        </h1>
        <p>Update user, or delete user</p>
        <Link href={"/users"}>Return to all user</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Name: {clients?.name}</span>
        </label>
        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email: {clients?.email}</span>
        </label>
        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password: {clients?.password}</span>
        </label>
        <label className={styles.searchformfld}>
          <input
            placeholder=" "
            type="text"
            value={imageUrl}
            onChange={(e) => setImagUrl(e.target.value)}
          />
          <span>ImageUrl (pb_1)</span>
        </label>
        <br />
        <div className={styles.button_container}>
          <button type="submit">Update User</button>
        </div>
      </form>
      <div className={styles.button_container_delete}>
        <button onClick={handleDelete}>Delete User</button>
      </div>
    </main>
  );
};

export default UserPage;
