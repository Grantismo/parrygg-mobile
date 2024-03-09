import { router } from "expo-router";
import React from "react";
import { useForm, FieldErrors, RegisterOptions } from "react-hook-form";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Title from "@/components/base/Title";
import Form from "@/components/forms/Form";
import Input from "@/components/forms/Input";

type FormData = {
  tag: string;
  firstName: string;
  lastName: string;
  bio: string;
  pronouns: string;
};

const Step1 = () => {
  const errors: FieldErrors<FormData> = {};

  const validation: RegisterOptions[] = [];

  const { handleSubmit, register, setValue } = useForm<FormData>({ errors });

  const onSubmit = (data: FormData) => {
    router.navigate("/register/step2");
  };

  return (
    <Background>
      <Title color="accent">
        Set up <Title>Your Account</Title>
      </Title>
      <Form<FormData> {...{ register, setValue, validation, errors }}>
        <Input name="tag" label="Tag" placeholder="e.g. blorppppp" required />
        <Input
          name="firstName"
          label="First name"
          placeholder="John"
          required
        />
        <Input name="lastName" label="Last name" placeholder="Doe" required />
        <Input name="bio" label="Bio" placeholder="e.g. I love smash" />
        <Input name="pronouns" label="Pronouns" placeholder="e.g. they/them" />
        <Button
          title="Next: Set up Location"
          onPress={handleSubmit(onSubmit)}
        />
      </Form>
    </Background>
  );
};

export default Step1;
