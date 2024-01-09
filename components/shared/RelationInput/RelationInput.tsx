import CustomSelect from "../CustomSelect/CustomSelect";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
}

function RelationInput({ name, options, label, placeholder }: Props) {
  return (
    <div>
      <CustomSelect
        name={name}
        options={options}
        label={label}
        placeholder={placeholder}
        withSearch
      />
    </div>
  );
}

export default RelationInput;
