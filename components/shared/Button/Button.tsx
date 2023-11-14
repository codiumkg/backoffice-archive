import cn from "classnames";
import styles from "./Button.module.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface Props {
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  text,
  type = "button",
  disabled = false,
  isLoading,
  onClick,
}: Props) {
  const handleClick = () => {
    if (isLoading) return;

    onClick?.();
  };

  return (
    <button
      className={cn(styles.primary, disabled ? styles.disabled : "")}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {!isLoading ? text : <LoadingSpinner />}
    </button>
  );
}
