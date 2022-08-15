import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, SHADOWS, assets } from "../constants";

export const NFTTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  );
};
export const ImageCmp = ({imgUrl,index}) => {
  return (
    <View>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 48,
            height: 48,
          marginLeft:index===0?0:-SIZES.font
        }}
      />
    </View>
  );
};
export const People = () => {
  const personsArray = [
    assets.person01,
    assets.person02,
    assets.person03,
    assets.person04,
  ];
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
          {personsArray.map((imgUrl, index) => (
      
          <ImageCmp
              imgUrl={imgUrl}
              index={index}
              key={`People-${index}`}
          />
    ) )}
    </View>
  );
};
export const EndDate = () => {
  return (
    <View>
      <Text>EndDate</Text>
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
