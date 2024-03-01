import React from "react"
import { useForm, FieldErrors, RegisterOptions } from "react-hook-form"
import View from "../components/base/View"
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"
import Button from "../components/base/Button"
import Title from "../components/base/Title"
import tw from 'twrnc';
import { ViewProps } from "react-native"

type FormData = {
    country: string
    state: string
    city: string
}
  
const AccountStep2 = (props: ViewProps) => {
    const errors: FieldErrors<FormData> = {}

    const validation: RegisterOptions[] = [];

    const { handleSubmit, register, setValue } = useForm<FormData>({errors})
  
    const onSubmit = (data: FormData) => {
      console.log(JSON.stringify(data))
    }
  
    return (<View {...props}>
        <Title style={tw`text-[#FFC93F]`}>Set up <Title style={tw`text-white`}>Location</Title></Title>
        <Form<FormData> {...{ register, setValue, validation, errors }}>
            <Input name="country" label="Country" placeholder="United States" required={true}  />
            <Input name="state" label="State" placeholder="Delaware" required={true}  />
            <Input name="city" label="City" placeholder="Wilmington" required={true} />
            <Button title="Next: Set up Location" onPress={handleSubmit(onSubmit)} />
          </Form>
      </View>
    )
  }

  export default AccountStep2;