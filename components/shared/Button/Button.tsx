import cn from "classnames";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  text,
  type = "button",
  disabled = false,
  onClick,
}: Props) {
  return (
    <button
      className={cn(styles.primary, disabled ? styles.disabled : "")}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
