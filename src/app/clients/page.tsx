"use client";

import Tags from "@/components/tag";
import { FC, useEffect, useState } from "react";
import styles from "../../styling/client.module.scss";

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch clients
        const resClients = await fetch("http://localhost:4000/clients");
        const clientsData = await resClients.json();
        setClients(clientsData);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const post = { name };

    fetch("http://localhost:4000/clients", {
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
    <main className={styles.clients}>
      <div className={styles.tags_container}>
        <Tags clientData={clients}></Tags>
      </div>
    </main>
  );
};

export default Clients;
