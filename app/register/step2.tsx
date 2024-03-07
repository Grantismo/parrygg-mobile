import { router } from "expo-router";
import React from "react";
import { useForm, FieldErrors, RegisterOptions } from "react-hook-form";
import tw from "twrnc";

import Background from "../../src/components/base/Background";
import Button from "../../src/components/base/Button";
import Title from "../../src/components/base/Title";
import Form from "../../src/components/forms/Form";
import CityInput from "../../src/components/forms/location/CityInput";
import CountryInput from "../../src/components/forms/location/CountryInput";
import StateInput from "../../src/components/forms/location/StateInput";

type FormData = {
  country: string;
  state: string;
  city: string;
};

const Step2 = () => {
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
      <Title style={tw`text-[#FFC93F]`}>
        Set up <Title style={tw`text-white`}>Location</Title>
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
          title="Next: Set Profile Images"
          onPress={handleSubmit(onSubmit)}
        />
      </Form>
    </Background>
  );
};

export default Step2;
