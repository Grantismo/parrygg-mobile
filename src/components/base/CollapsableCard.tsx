import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Pressable, ViewProps } from "react-native";

import Card from "@/components/base/Card";

interface Props extends ViewProps {
  header: (open: boolean) => JSX.Element;
  color?: Color;
}

type Color = "primary" | "accent";

const CollapsableCard = forwardRef(
  ({ color = "primary", header, children, ...props }: Props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(
      ref,
      () => {
        return {
          setOpen: (open: boolean) => {
            setIsOpen(open);
          },
        };
      },
      [],
    );

    return (
      <Card {...props}>
        <Pressable onPress={() => setIsOpen(!isOpen)}>
          {header(isOpen)}
        </Pressable>
        {isOpen && children}
      </Card>
    );
  },
);

export default CollapsableCard;
