import React from "react"
import { useForm, FieldErrors, RegisterOptions } from "react-hook-form"
import View from "../components/base/View"
import Form from "../components/forms/Form"
import Button from "../components/base/Button"
import Title from "../components/base/Title"
import tw from 'twrnc';
import { ViewProps } from "react-native"
import { LocationClient } from "../libs/location"
import CountryInput from "../components/forms/location/CountryInput"
import StateInput from "../components/forms/location/StateInput"
import CityInput from "../components/forms/location/CityInput"

type FormData = {
    country: string
    state: string
    city: string
}

type CountryData = {
  id: string
  name: string
  iso2: string
}

const LOCATION_CLIENT = new LocationClient();
  
const AccountStep2 = (props: ViewProps) => {

    const errors: FieldErrors<FormData> = {}

    const validation: RegisterOptions[] = [];

    const { handleSubmit, register, setValue, watch, control} = useForm<FormData>({errors})

    const country = watch('country')
    const state = watch('state')
    
    // TODO: if country or state changes, clear the child fields

    const onSubmit = (data: FormData) => {
      console.log(JSON.stringify(data))
    }

    const onCountryChange = () => {
      setValue("state", "")
      setValue("city", "")
    }

    const onStateChange = () => {
      setValue("city", "")
    }
  
    return (<View {...props}>
        <Title style={tw`text-[#FFC93F]`}>Set up <Title style={tw`text-white`}>Location</Title></Title>
        <Form<FormData> {...{ register, setValue, validation, errors }}>
            <CountryInput name="country" label="Country" required={true} onChange={onCountryChange} control={control} />
            <StateInput key={country} name="state" label="State" countryIso={country} onChange={onStateChange} control={control} />
            <CityInput key={state} name="city" label="City" countryIso={country} stateIso={state} control={control} />
            <Button title="Next: Set up Location" onPress={handleSubmit(onSubmit)} />
          </Form>
      </View>
    )
  }

  export default AccountStep2;