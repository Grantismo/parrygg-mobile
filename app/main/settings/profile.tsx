import React from "react";
import { FieldErrors, Form, RegisterOptions, useForm } from "react-hook-form";
import { Button, View } from "react-native";

import Background from "@/components/base/Background";
import Nav from "@/components/base/navigation/Nav";
import Input from "@/components/forms/Input";
import tw from "@/lib/tailwind";

const ProfileSettingsPage = () => {
  const errors: FieldErrors<FormData> = {};

  const validation: RegisterOptions[] = [];

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
