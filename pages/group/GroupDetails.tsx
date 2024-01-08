"use client";

import Button from "@/components/shared/Button/Button";
import CustomInput from "@/components/shared/CustomInput/CustomInput";
import CustomSelect from "@/components/shared/CustomSelect/CustomSelect";
import Resource from "@/components/shared/Resource/Resource";
import { IGroupCreate } from "@/interfaces/group";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";

export const groupValidationSchema = Yup.object({
  title: Yup.string()
    .min(3, "Название должно быть не менее 3 символов")
    .max(32, "Название должно быть не более 32 символов")
    .required("Это поле обязательное"),
  subject: Yup.number().nullable().required(),
});

const initialValues = {
  title: "",
  subject: 0,
};

interface GroupForm {
  title: string;
  subject: number;
}

function GroupDetails() {
  const { id } = useParams();

  const groupForm = useForm<GroupForm>({
    defaultValues: initialValues,
    resolver: yupResolver<GroupForm>(groupValidationSchema),
    mode: "onBlur",
  });

  const { isDirty, isValid } = groupForm.formState;

  const onSubmit: SubmitHandler<GroupForm> = (data: IGroupCreate) => {};

  return (
    <Resource title="Группа">
      <form onSubmit={groupForm.handleSubmit(onSubmit)}>
        <CustomInput name="title" label="Название" />
        <CustomSelect name="subject" options={[]} label="Предмет" />

        <Button type="submit" text="Создать" disabled={!isValid || !isDirty} />
      </form>
    </Resource>
  );
}

export default GroupDetails;
