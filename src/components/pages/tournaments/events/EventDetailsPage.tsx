import React from "react";
import { FieldErrors, RegisterOptions, useForm } from "react-hook-form";
import { View } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Nav from "@/components/base/navigation/Nav";
import TournamentBreadcrumb from "@/components/base/tournaments/TournamentBreadcrumb";
import DateTimeInput from "@/components/forms/DateTimeInput";
import Form from "@/components/forms/Form";
import Input from "@/components/forms/Input";
import tw from "@/lib/tailwind";

const EventDetailsPage = () => {
  const errors: FieldErrors<FormData> = {};

  const validation: RegisterOptions[] = [];

  const { handleSubmit, register, setValue } = useForm<FormData>({ errors });

  const onSubmit = (data: FormData) => {
    //router.navigate("/tournament/create");
  };

  // Game - Dropdown

  return (
    <Background style={tw`p-0 justify-start`} collapsedNav>
      <Nav title="Event Details" showBack />
      <TournamentBreadcrumb />
      <View style={tw`p-6 w-full`}>
        <Form<FormData> {...{ register, setValue, validation, errors }}>
          <Input
            name="description"
            label="Event description"
            placeholder="Text or markup"
            numberOfLines={8}
            textAlignVertical="top"
            multiline
          />
          <Input name="name" label="Event Name" placeholder="Melee Singles" />
          <DateTimeInput
            name="startDate"
            label="Event Start Date"
            placeholder="mm/dd/yyyy hh:mm"
          />
          <Input
            name="address"
            label="Venue Address"
            placeholder="10501 FGCU Blvd, Fort Myers"
          />
          <Input name="price" label="Price" placeholder="$0.00" />
          <Input name="playersCap" label="Players Cap" placeholder="0" />
          <Button
            style={tw`w-full`}
            title="Save Changes"
            onPress={handleSubmit(onSubmit)}
          />
        </Form>
      </View>
    </Background>
  );
};

export default EventDetailsPage;
