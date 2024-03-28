import React from "react";
import { useForm, FieldErrors, RegisterOptions } from "react-hook-form";
import { Pressable, View } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Text from "@/components/base/Text";
import Nav from "@/components/base/navigation/Nav";
import DateTimeInput from "@/components/forms/DateTimeInput";
import Form from "@/components/forms/Form";
import Input from "@/components/forms/Input";
import tw from "@/lib/tailwind";
import Trash from "@assets/icons/Trash";

type FormData = {
  tournamentName: string;
  url: string;
  address: string;
};

const TournamentSettingsPage = () => {
  const errors: FieldErrors<FormData> = {};

  const validation: RegisterOptions[] = [];

  const { handleSubmit, register, setValue } = useForm<FormData>({ errors });

  const onSubmit = (data: FormData) => {
    //router.navigate("/tournament/create");
  };

  return (
    <Background>
      <Nav title="Settings" showBack renderLeft={<Trash color="#777777" />} />

      <View style={tw`w-full h-full`}>
        <Form<FormData> {...{ register, setValue, validation, errors }}>
          <Input
            name="tournamentName"
            label="Tournament Name"
            placeholder="e.g. Your rad tournament"
            required
          />
          <Input
            name="url"
            label="URL"
            placeholder="parry.gg/placeholder"
            required
          />
          <DateTimeInput
            name="startDate"
            label="State Date"
            placeholder="mm/dd/yyyy hh:mm"
          />
          <DateTimeInput
            name="endDate"
            label="End Date"
            placeholder="mm/dd/yyyy hh:mm"
          />
          <Input
            name="address"
            label="Venue Address"
            placeholder="10501 FGCU Blvd, Fort Myers"
          />
          <Button
            size="lg"
            style={tw`w-full`}
            title="Save Changes"
            onPress={handleSubmit(onSubmit)}
          />
        </Form>
        <Pressable style={tw`mt-2`}>
          <Text color="red" style={tw`text-center`}>
            Delete Tournament
          </Text>
        </Pressable>
      </View>
    </Background>
  );
};

export default TournamentSettingsPage;
