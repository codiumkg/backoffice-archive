import Select from "react-select";

import styles from "./CustomSelect.module.scss";

interface Props {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
}

function CustomSelect({ options, label, name }: Props) {
  return (
    <div className={styles.container}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <Select options={options} />
    </div>
  );
}

export default CustomSelect;
