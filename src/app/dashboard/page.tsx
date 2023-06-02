"use client";

import Sidebar from "@/components/sidebar";
import Tags from "@/components/tag";
import { FC, useEffect, useState } from "react";
import styles from "../../styling/dashboard.module.scss";
import Table from "@/components/tableCampaign";
import List from "@/components/list";

/* async function getData() {
  const res = await fetch("http://localhost:3000/api/campaign", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
} */

export default function Dashboard() {
  /* const [data, setData] = useState<DashboardProps>({
    clients: [],
    campaigns: [],
    users: [],
  }); */

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetching data from campaigns
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Simulate a slow API response
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Fetch users
        const resUsers = await fetch("http://localhost:4000/users");
        const usersData = await resUsers.json();
        setUsers(usersData);

        // Fetch clients
        const resClients = await fetch("http://localhost:4000/clients");
        const clientsData = await resClients.json();
        setClients(clientsData);

        // Fetch campaigns
        const resCampaigns = await fetch("http://localhost:4000/campaigns");
        const campaignsData = await resCampaigns.json();
        setCampaigns(campaignsData);
      } catch (e) {
        console.log(`Error: ${e}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.dashboard}>
      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.flex}>
          <div className={styles.left}>
            <div className={styles.clients_container}>
              <h2>Clients</h2>
              <div className={styles.tags_container}>
                <Tags clientData={clients}></Tags>
              </div>
            </div>
            <div className={styles.campaigns_container}>
              <h2>Campaigns</h2>
              <div className={styles.table}>
                <Table data={campaigns} />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.users_container}>
              <h2>Users</h2>
              <List clientData={users}></List>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
