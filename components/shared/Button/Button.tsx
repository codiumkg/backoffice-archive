import cn from "classnames";
import styles from "./Button.module.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { ReactNode } from "react";

interface Props {
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  height?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  icon?: JSX.Element;
}

export default function Button({
  text,
  type = "button",
  disabled = false,
  height = "46px",
  isLoading,
  icon,
  onClick,
}: Props) {
  const handleClick = () => {
    if (isLoading) return;

    onClick?.();
  };

  return (
    <button
      className={cn(styles.primary, disabled ? styles.disabled : "")}
      style={{ minHeight: height }}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {!isLoading ? (
        <>
          {icon && <div className={styles.icon}>{icon}</div>}
          <div>{text}</div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </button>
  );
}
