import React from "react"
import Background from "../../src/components/base/Background"
import Button from "../../src/components/base/Button"
import Title from "../../src/components/base/Title"
import Text from "../../src/components/base/Text"


import tw from 'twrnc';
import { View, ViewProps } from "react-native"
// import Pin from "../../assets/imgs/icons/Pin"
// import Calendar from "../../assets/imgs/icons/Calendar"
// import FileUpload from "../../assets/imgs/icons/FileUpload"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"

type FormData = {
    tag: string
    firstName: string
    lastName: string
    bio: string
    pronouns: string
}

const Step3 = () => {

    const onSubmit = (event: any) => {
        router.navigate('/register/step1')
    }

    const Sep = () => <View style={tw`border-b border-[#262626]`} />

    // TODO: skip/back buttons

    return (<Background>
        <Title style={tw`text-[#FFC93F]`}>Profile <Title style={tw`text-white`}>Pictures</Title></Title>
        <View style={tw`px-6 mb-14 w-full`}>
            <View style={tw`p-5 rounded-xl border border-[#3E3E3E] bg-[#151515]`}>
                <View style={tw`h-32 rounded-xl border border-dashed border-[#FFC93F] flex items-center justify-center`}>
                    {/* <FileUpload /> */}
                </View>
                <View style={tw`w-full flex flex-row`}>
                    <View style={tw`h-20 w-20 rounded-[2.5rem] border-2 border-[#39D83F] ml-3 -mt-4 flex flex-row`}>
                        <LinearGradient style={tw`w-full h-full rounded-[2.5rem] flex items-center justify-center`} colors={["#2B2B2B", "#414141"]}>
                            {/* <FileUpload /> */}
                        </LinearGradient>
                    </View>
                    <View style={tw`ml-3 mt-3`}>
                        <Text style={tw`text-white`}>blorppppp</Text>
                        <Text style={tw`text-[#777]`}>John D. (he/him)</Text>
                    </View>
                </View>
                {/* <View style={tw`flex flex-row items-center`}><Calendar /><Text style={tw`ml-2.5 text-[#777] py-[0.69rem]`}>Dec 18th, 2023</Text></View> */}
                <Sep />
                {/* <View style={tw`flex flex-row items-center`}><Pin /><Text style={tw`ml-2.5 text-[#777] py-[0.69rem]`}>Lakewood, CO, United States</Text></View> */}
                <Sep />
                <Title style={tw`text-base text-white mt-[0.69rem] mb-0.5`}>Bio</Title>
                <Text style={tw` text-[#777]`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.</Text>
            </View>
        </View>
        <Button title="Finish Editing" onPress={onSubmit} />
    </Background>
    )
}

export default Step3;