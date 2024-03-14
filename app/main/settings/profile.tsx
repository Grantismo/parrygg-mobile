import React from "react";
import { FieldErrors, RegisterOptions, useForm } from "react-hook-form";
import { View } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Nav from "@/components/base/navigation/Nav";
import Form from "@/components/forms/Form";
import Input from "@/components/forms/Input";
import tw from "@/lib/tailwind";

type FormData = {
  tag: string;
  firstName: string;
  lastName: string;
  bio: string;
  pronouns: string;
};

const ProfileSettingsPage = () => {
  const validation: RegisterOptions[] = [];
  const errors: FieldErrors<FormData> = {};

  const { handleSubmit, register, setValue } = useForm<FormData>({ errors });

  const onSubmit = (data: FormData) => {};

  return (
    <Background>
      <Nav title="Profile Settings" showBack />
      <View style={tw`grow w-full pb-2`}>
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
          <Input
            name="pronouns"
            label="Pronouns"
            placeholder="e.g. they/them"
          />
          <Button title="Update Profile" onPress={handleSubmit(onSubmit)} />
        </Form>
      </View>
    </Background>
  );
};

export default ProfileSettingsPage;
