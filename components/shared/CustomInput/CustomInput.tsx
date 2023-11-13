import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import styles from "./CustomInput.module.scss";
import { UseFormRegister } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
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
  ...rest
}: Props) {
  return (
    <div className={styles.container}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input {...rest} value={value} placeholder={placeholder} type={type} />
    </div>
  );
}
