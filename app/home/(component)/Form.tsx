"use client";
import InputField from "@/components/Fields/InputField";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  name: String;
  email: String;
  description: String;
}

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        register={register}
        errors={errors}
        type="text"
        key_name="name"
        label="Name"
      />
      <InputField
        register={register}
        errors={errors}
        type="email"
        key_name="email"
        label="Email Id"
      />
      <InputField
        register={register}
        errors={errors}
        type="textarea"
        key_name="description"
        label="Description"
      />

      <button
        className="w-100 border-2 border-green-500 border-solid text-green-500 p-2 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;
