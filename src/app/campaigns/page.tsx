"use client";

import Table from "@/components/tableCampaign";
import Tags from "@/components/tag";
import { FC, useEffect, useState } from "react";
import styles from "../../styling/campaings.module.scss";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [query, setQuery] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  // Fetching data from campaigns
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch clients
        const resClients = await fetch("http://localhost:4000/campaigns");
        const clientsData = await resClients.json();
        setCampaigns(clientsData);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.campaign}>
      <div className={styles.intro}>
        <h1>All campaign</h1>
        <p>
          Search functionality and date picker. Test calender with for example:
          startDate: 2030-01-05 - endDate: 2032-02-11
        </p>
      </div>
      <div className={styles.search_container}>
        <label className={styles.searchformfld}>
          <input
            placeholder="Søk etter campaign "
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.datepicker_container}>
        <label className={styles.searchformfld}>
          <input
            placeholder="Pick start date (YYYY-MM-DD)"
            type="text"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>

        {startDate ? (
          <>
            <label className={styles.searchformfld}>
              <input
                placeholder="Pick end date "
                type="text"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
          </>
        ) : (
          ""
        )}
      </div>
      <div className={styles.table_container}>
        <Table
          query={query}
          startDate={startDate}
          endDate={endDate}
          data={campaigns}
        ></Table>
      </div>
    </main>
  );
};

export default Campaigns;
