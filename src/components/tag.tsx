import Link from "next/link";
import styles from "../styling/tag.module.scss";

interface TagsProps {
  clientData: Client[];
}

const Tags = ({ clientData }: TagsProps) => {
  return (
    <>
      {clientData.map((item) => (
        <div className={styles.tag} key={item.id}>
          <Link href={"/clients/"}>{item.name}</Link>
        </div>
      ))}
    </>
  );
};

export default Tags;
