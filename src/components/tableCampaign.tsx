import { ReactNode } from "react";
import moment from "moment";
import styles from "../styling/table.module.scss";
import Link from "next/link";

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

  const SwithState = (itemName: string) => {
    switch (itemName) {
      case "Magic Keyboard winter 2022":
        return "Magic Keyboard";
      case "iPad Pro june 2022":
        return "iPad Pro";
      case "Big Mac Week 32 - 33":
        return "Big Mac";
      case "Disney Plus - ALWAYS ON":
        return "Disney";
      case "Windows 11 launch":
        return "Windows 11";
      default:
        return "Need rename";
    }
  };

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
              console.log(item.name);
              return (
                <tr key={item.id}>
                  <td>
                    <Link href={"/campaigns"}>{SwithState(item.name)}</Link>
                  </td>
                  <td>{CheckType(item.type)}</td>
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
