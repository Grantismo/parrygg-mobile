import React from "react"
import { useForm, FieldErrors, RegisterOptions } from "react-hook-form"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import View from "../components/base/View"
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"
import { Button } from 'react-native';

type FormData = {
    tag: string
    firstName: string
    lastName: string
    pronouns: string
}
  
const Register = () => {
    const errors: FieldErrors<FormData> = {}

    const validation: RegisterOptions[] = [];

    const { handleSubmit, register, setValue } = useForm<FormData>({errors})
  
    const onSubmit = (data: FormData) => {
      console.log(JSON.stringify(data))
    }
  
    return (<View>
        <Form<FormData> {...{ register, setValue, validation, errors }}>
            <Input name="tag" label="Tag" placeholder="e.g. blorp" required={true}  />
            <Input name="firstName" label="First name" placeholder="John" />
            <Input name="lastName" label="Last name" placeholder="Doe"/>
            <Input name="pronouns" label="Pronouns" placeholder="e.g. they/them"/>
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          </Form>
      </View>
    )
  }

  export default Register;