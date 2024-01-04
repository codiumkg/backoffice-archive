import { IResource } from "@/interfaces/resource";
import styles from "./Resource.module.scss";

interface Props {
  resource: IResource;
}

export default function Resource({ resource }: Props) {
  return <div className={styles.wrapper}></div>;
}
