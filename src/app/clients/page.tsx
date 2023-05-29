"use client";

import Tags from "@/components/tag";
import { FC, useEffect, useState } from "react";
import styles from "../../styling/client.module.scss";

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);

  // Fetching data from campaigns
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

  return (
    <main className={styles.clients}>
      <div className={styles.intro}>
        <h1>All clietns</h1>
        <p>List over all users</p>
      </div>
      <div className={styles.tags_container}>
        <Tags clientData={clients}></Tags>
      </div>
    </main>
  );
};

export default Clients;
