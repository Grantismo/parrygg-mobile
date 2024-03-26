import React, { useRef, useState } from "react";
import { FieldErrors, RegisterOptions, useForm } from "react-hook-form";
import { GestureResponderEvent, TouchableOpacity, View } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
  ShadowDecorator,
} from "react-native-draggable-flatlist";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import CollapsableCard from "@/components/base/CollapsableCard";
import Text from "@/components/base/Text";
import Nav from "@/components/base/navigation/Nav";
import Form from "@/components/forms/Form";
import Input from "@/components/forms/Input";
import tw from "@/lib/tailwind";
import DownArrow from "@assets/icons/DownArrow";
import DragHandle from "@assets/icons/DragHandle";
import Plus from "@assets/icons/Plus";
import RightArrow from "@assets/icons/RightArrow";

interface Props {
  title: string;
  dragProps: {
    drag: (event: GestureResponderEvent) => void;
    disabled: boolean;
  };
}

type PageContentSectionData = {
  tag: string;
  firstName: string;
  lastName: string;
  bio: string;
  pronouns: string;
};

const PageContentSectionForm = ({
  title,
  dragProps: { drag, disabled },
}: Props) => {
  const errors: FieldErrors<PageContentSectionData> = {};

  const validation: RegisterOptions[] = [];

  const { handleSubmit, register, setValue } = useForm<FormData>({ errors });
  const ref = useRef<{ setOpen: (open: boolean) => void }>(null);

  const onSubmit = (data: FormData) => {
    ref.current?.setOpen(false);
  };

  return (
    <CollapsableCard
      ref={ref}
      style={tw`w-full px-5 pt-3.5 pb-4.5 rounded-lg`}
      header={(open) => {
        return (
          <View style={tw`w-full flex flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center justify-center`}>
              <TouchableOpacity
                hitSlop={10}
                onPressIn={drag}
                disabled={disabled}
              >
                <DragHandle style={tw`mr-2`} color="white" />
              </TouchableOpacity>
              <Text>{title}</Text>
            </View>
            {!open && <RightArrow color="#FFC93F" />}
            {open && <DownArrow color="white" />}
          </View>
        );
      }}
    >
      <View style={tw`pt-6`}>
        <Form<FormData> {...{ register, setValue, validation, errors }}>
          <Input
            value={title}
            name="sectionTitle"
            label="Section Title"
            placeholder="Section Title"
            required
          />
          <Input
            name="sectionContent"
            label="Section Content"
            placeholder="Text or markup"
            numberOfLines={8}
            textAlignVertical="top"
            multiline
            required
          />
          <View style={tw`flex-row`}>
            <Button
              size="sm"
              color="red"
              title="Delete"
              style={tw`flex-1 mr-2`}
              pressableStyle={tw`py-2`}
            />
            <Button
              size="sm"
              title="Save"
              style={tw`flex-1`}
              pressableStyle={tw`py-2`}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </Form>
      </View>
    </CollapsableCard>
  );
};

const TournamentPageContentPage = () => {
  const [sections, setSections] = useState([
    "First Section",
    "Why attend Genesis",
  ]);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<string>) => {
    return (
      <ShadowDecorator>
        <PageContentSectionForm
          title={item}
          dragProps={{ drag, disabled: isActive }}
        />
      </ShadowDecorator>
    );
  };

  return (
    <Background>
      <Nav title="Page Content" showBack />
      <View style={tw`w-full h-full`}>
        <DraggableFlatList
          data={sections}
          onDragEnd={({ data }) => setSections(data)}
          keyExtractor={(s) => s}
          renderItem={renderItem}
        />
        <Button style={tw`w-full`}>
          <Plus color="#1B1B1B" style={tw`mr-2`} />
          <Text color="black">Add Section</Text>
        </Button>
      </View>
    </Background>
  );
};

export default TournamentPageContentPage;
