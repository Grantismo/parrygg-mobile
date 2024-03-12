import React from "react";
import { View } from "react-native";
import tw from "twrnc";

import SearchBox from "@/components/base/SearchBox";
import Text from "@/components/base/Text";
import SF6 from "@assets/icons/SF6";
import SSBU from "@assets/icons/SSBU";

const PlayerTournamentSearchBox = () => {
  const data = [
    {
      game: { name: "Smash Bros Ultimate", icon: <SSBU /> },
      name: "Genesis X",
    },
    {
      game: { name: "Street Fighter 6", icon: <SF6 /> },
      name: "Frosty Faustings XVI 2024",
    },
  ];
  return (
    <SearchBox
      name="search"
      placeholder="Search"
      data={data}
      dataKey="name"
      renderItem={({ item }, queryString) => {
        const name = item.name.toLowerCase();
        const matches = [
          ...name.matchAll(new RegExp(queryString.toLowerCase(), "g")),
        ];
        const matchIndicies = matches.map((m) => [
          m.index,
          m.index + queryString.length,
        ]);
        const parts: { text: string; match: boolean }[] = [];
        const addPart = (p: string, match: boolean) => {
          if (!p) {
            return;
          }
          parts.push({ text: p, match });
        };

        let start = 0;
        if (!matchIndicies.length) {
          addPart(item.name, false);
        } else {
          matchIndicies.forEach((m) => {
            addPart(item.name.slice(start, m[0]), false);
            addPart(item.name.slice(m[0], m[1]), true);
            start = m[1];
          });
          addPart(item.name.slice(start, item.name.length), false);
        }

        return (
          <View style={tw`flex-row mb-2`}>
            <View style={tw`p-2`}>{item.game.icon}</View>
            <View>
              <View style={tw`flex-row`}>
                <Text color="secondary" style={tw`my-2`}>
                  {item.game.name}
                </Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-[6px] mx-2`}>{"\u2B24"}</Text>
                {parts.map(({ text, match }) => (
                  <Text color={match ? "accent" : "primary"}>{text}</Text>
                ))}
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default PlayerTournamentSearchBox;
