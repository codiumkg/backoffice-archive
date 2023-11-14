import cn from "classnames";

import styles from "./LoadingSpinner.module.scss";

interface Props {
  size?: "s" | "m" | "l" | "xl";
}

export default function LoadingSpinner({ size = "s" }: Props) {
  return <div className={cn(styles.spinner, styles[`size-${size}`])}></div>;
}
