import cn from "classnames";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ text, disabled = false, onClick }: Props) {
  return (
    <button
      className={cn(styles.primary, disabled ? styles.disabled : "")}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
