import Typography from "../Typography/Typography";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";

import styles from "./CustomSelect.module.scss";
import CustomInput from "../CustomInput/CustomInput";
import Dropdown from "../Dropdown/Dropdown";

interface Props {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
  errorMessage?: string;
  withSearch?: boolean;
  placeholder?: string;
}

function CustomSelect({
  options,
  label,
  name,
  errorMessage,
  withSearch = false,
  placeholder,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    if (withSearch) {
      setIsMenuOpen(true);
    }
  };

  return (
    <div>
      <div className={styles.container} onClick={handleClick}>
        {!!label && <label htmlFor={name}>{label}</label>}

        {withSearch ? (
          <CustomInput name={name} placeholder={placeholder} />
        ) : (
          <select></select>
        )}
      </div>
      <div className={styles.error}>
        <Typography variant="body3" color="var(--danger-color)">
          {errorMessage}
        </Typography>
      </div>

      {isMenuOpen && withSearch && (
        <Dropdown
          items={[{ label: "test", value: "test" }]}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default CustomSelect;
