import { router } from "expo-router";
import React from "react";
import { useForm, FieldErrors, RegisterOptions } from "react-hook-form";
import tw from "twrnc";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Title from "@/components/base/Title";
import Form from "@/components/forms/Form";
import CityInput from "@/components/forms/location/CityInput";
import CountryInput from "@/components/forms/location/CountryInput";
import StateInput from "@/components/forms/location/StateInput";

type FormData = {
  country: string;
  state: string;
  city: string;
};

const RegistrationStep2Page = () => {
  const errors: FieldErrors<FormData> = {};

  const validation: RegisterOptions[] = [];

  const { handleSubmit, register, setValue, watch, control } =
    useForm<FormData>({ errors });

  const country = watch("country");
  const state = watch("state");

  // TODO: if country or state changes, clear the child fields

  const onSubmit = () => {
    router.navigate("/register/step3");
  };

  const onCountryChange = () => {
    setValue("state", "");
    setValue("city", "");
  };

  const onStateChange = () => {
    setValue("city", "");
  };

  // TODO: Handle Submit not working onPress

  return (
    <Background>
      <Title color="accent">
        Set up <Title>Location</Title>
      </Title>
      <Form<FormData> {...{ register, setValue, validation, errors }}>
        <CountryInput
          name="country"
          label="Country"
          required
          onChange={onCountryChange}
          control={control}
        />
        <StateInput
          key={country}
          name="state"
          label="State"
          countryIso={country}
          onChange={onStateChange}
          control={control}
        />
        <CityInput
          key={state}
          name="city"
          label="City"
          countryIso={country}
          stateIso={state}
          control={control}
        />
        <Button
          style={tw`w-full`}
          title="Next: Set Profile Images"
          onPress={handleSubmit(onSubmit)}
        />
      </Form>
    </Background>
  );
};

export default RegistrationStep2Page;
