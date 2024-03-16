import React, { useState } from "react";
import { Pressable, ViewProps } from "react-native";

import Card from "@/components/base/Card";

interface Props extends ViewProps {
  header: (open: boolean) => JSX.Element;
  color?: Color;
  open?: boolean;
}

type Color = "primary" | "accent";

const CollapsableCard = ({
  color = "primary",
  header,
  children,
  open = false,
  ...props
}: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Card {...props}>
      <Pressable onPress={() => setIsOpen(!isOpen)}>{header(isOpen)}</Pressable>
      {isOpen && children}
    </Card>
  );
};

export default CollapsableCard;
