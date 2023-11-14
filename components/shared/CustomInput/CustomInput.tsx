import {
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import styles from "./CustomInput.module.scss";
import Typography from "../Typography/Typography";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
}

const CustomInput: FC<Props> = forwardRef<HTMLInputElement, Props>(
  function Input(
    { value, name, placeholder, label, type, errorMessage, onChange, onBlur },
    ref?
  ) {
    return (
      <div>
        <div className={styles.container}>
          {!!label && <label htmlFor={name}>{label}</label>}
          <input
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
            type={type}
          />
        </div>

        <div className={styles.error}>
          <Typography variant="body3" color="var(--danger-color)">
            {errorMessage}
          </Typography>
        </div>
      </div>
    );
  }
);

export default CustomInput;
