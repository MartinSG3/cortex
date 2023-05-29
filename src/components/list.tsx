import Link from "next/link";
import styles from "../styling/list.module.scss";
import Image from "next/image";

interface ListProps {
  clientData: User[];
}

const List = ({ clientData }: ListProps) => {
  return (
    <div className={styles.list}>
      <ul>
        {clientData.map((item, index) => (
          <li key={index}>
            <div className={styles.content}>
              <div className={styles.image}>
                <img
                  src={`/${item.imageUrl}.jpg`}
                  alt={`Image from ${item.name}`}
                  height={"100%"}
                  width={"100%"}
                />
              </div>
              <div className={styles.text}>
                <Link href={`/users/${item.id}`}>{item.name}</Link>
                <h4>{item.email}</h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
