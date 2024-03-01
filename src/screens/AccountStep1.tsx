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
    tag: string
    firstName: string
    lastName: string
    bio: string
    pronouns: string
}
  
const Register = (props: ViewProps) => {
    const errors: FieldErrors<FormData> = {}

    const validation: RegisterOptions[] = [];

    const { handleSubmit, register, setValue } = useForm<FormData>({errors})
  
    const onSubmit = (data: FormData) => {
      console.log(JSON.stringify(data))
    }
  
    return (<View {...props}>
        <Title style={tw`text-[#FFC93F]`}>Set up <Title style={tw`text-white`}>Your Account</Title></Title>
        <Form<FormData> {...{ register, setValue, validation, errors }}>
            <Input name="tag" label="Tag" placeholder="e.g. blorppppp" required={true}  />
            <Input name="firstName" label="First name" placeholder="John" required={true}  />
            <Input name="lastName" label="Last name" placeholder="Doe" required={true} />
            <Input name="bio" label="Bio" placeholder="e.g. I love smash"/>
            <Input name="pronouns" label="Pronouns" placeholder="e.g. they/them"/>
            <Button title="Next: Set up Location" onPress={handleSubmit(onSubmit)} />
          </Form>
      </View>
    )
  }

  export default Register;