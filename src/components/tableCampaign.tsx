import { ReactNode } from "react";
import moment from "moment";
import styles from "../styling/table.module.scss";
import Link from "next/link";
import { CampaignType } from "@/lib/enum";

interface TableProps {
  data: Campaign[];
  query?: string;
  startDate?: string;
  endDate?: string;
}

const Table = ({ data, query, startDate, endDate }: TableProps) => {
  const filterQuery = query ? query.toLowerCase() : "";

  const CheckType = (item: any) => {
    return item.toLowerCase().replace("_", "  ");
  };

  const SwitchState = (type: CampaignType): string => {
    switch (type) {
      case CampaignType.SEARCH_ENGINE:
        return CheckType(CampaignType.SEARCH_ENGINE);
      case CampaignType.SOCIAL_MEDIA:
        return CheckType(CampaignType.SOCIAL_MEDIA);
      case CampaignType.TV:
        return "TV";
      case CampaignType.DISPLAY:
        return CheckType(CampaignType.DISPLAY);
    }
  };

  const value = SwitchState(CampaignType.DISPLAY);
  console.log(value);

  return (
    <div className={styles.table} style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Name</th>
            <th style={{ textAlign: "left" }}>Type</th>
            <th style={{ textAlign: "left" }}>Budget</th>
            <th style={{ textAlign: "left" }}>Start date</th>
            <th style={{ textAlign: "left" }}>End date</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              /* console.log(item.startDate); */
              const itemStartDate = moment(item.startDate, "YYYY-MM-DD");
              const itemEndDate = moment(item.endDate, "YYYY-MM-DD");
              const selectedStartDate = startDate
                ? moment(startDate, "YYYY-MM-DD")
                : null;
              const selectedEndDate = startDate
                ? moment(endDate, "YYYY-MM-DD")
                : null;

              return (
                (filterQuery === "" ||
                  item.name.toLowerCase().includes(filterQuery)) &&
                (!selectedStartDate ||
                  !selectedEndDate ||
                  itemStartDate.isSameOrBefore(selectedEndDate)) &&
                (!selectedStartDate ||
                  !selectedEndDate ||
                  itemEndDate.isSameOrAfter(selectedStartDate))
              );
            })
            .map((item) => {
              console.log(item.type);
              const campaignType = SwitchState(item.type);

              return (
                <tr key={item.id}>
                  <td>
                    <Link href={"/campaigns"}>{item.name}</Link>
                  </td>
                  <td>{campaignType}</td>
                  <td>{item.budget}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
