"use client";

import Button from "@/components/shared/Button/Button";
import CustomInput from "@/components/shared/CustomInput/CustomInput";
import RelationInput from "@/components/shared/RelationInput/RelationInput";
import Resource from "@/components/shared/Resource/Resource";
import { IGroupCreate } from "@/interfaces/group";
import { useSubjects } from "@/queries/subjects";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
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
  // const { id } = useParams();

  const [search, setSearch] = useState("");

  const {
    data: subjects,
    isFetching,
    refetch,
  } = useSubjects({
    params: { search },
  });

  const [activeValue, setActiveValue] = useState<{
    label?: string;
    value?: string;
  }>({
    label: subjects?.[0].title,
    value: subjects?.[0].id.toString(),
  });

  const subjectOptions = useMemo(
    () =>
      subjects?.map((subject) => ({
        label: subject.title,
        value: subject.id.toString(),
      })) || [],
    [subjects]
  );

  const groupForm = useForm<GroupForm>({
    defaultValues: initialValues,
    resolver: yupResolver<GroupForm>(groupValidationSchema),
    mode: "onBlur",
  });

  const { isDirty, isValid } = groupForm.formState;

  const onSubmit: SubmitHandler<GroupForm> = (data: IGroupCreate) => {};

  useEffect(() => {
    setActiveValue({
      label: subjects?.[0].title,
      value: subjects?.[0].id.toString(),
    });
  }, [subjects]);

  const valueToSet = useMemo(
    () => subjects?.find((subject) => subject.id === +activeValue)?.title || "",
    [subjects, activeValue]
  );

  return (
    <Resource title="Группа">
      <form onSubmit={groupForm.handleSubmit(onSubmit)}>
        <CustomInput
          name="title"
          label="Название"
          placeholder="Введите название..."
        />
        <RelationInput
          name="subject"
          options={subjectOptions}
          activeValue={activeValue}
          setActiveValue={(value) => setActiveValue(value)}
          label="Предмет"
          placeholder="Выберите предмет..."
          isLoading={isFetching}
          onSearch={(value) => {
            setSearch(value);
            refetch();
          }}
        />

        <Button type="submit" text="Создать" disabled={!isValid || !isDirty} />
      </form>
    </Resource>
  );
}

export default GroupDetails;
