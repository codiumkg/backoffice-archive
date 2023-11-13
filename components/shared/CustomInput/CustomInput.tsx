import { HTMLInputTypeAttribute } from "react";
import styles from "./CustomInput.module.scss";

interface Props {
  name?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
}

export default function CustomInput({
  value,
  name,
  placeholder,
  label,
  type,
}: Props) {
  return (
    <div className={styles.container}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} value={value} placeholder={placeholder} type={type} />
    </div>
  );
}
