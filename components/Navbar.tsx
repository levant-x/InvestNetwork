import React from "react";
import { Image, View } from "react-native";
import Svg, { Rect } from "react-native-svg";
import SvgUri from "react-native-svg-uri";
import { stylesCommon } from "../styles";

const size = {
    width: 80,
    height: 80,
}

export default function Narbar() {
    return (
        <View style={[stylesCommon.navbar, stylesCommon.horizontal]}>
            <SvgUri {...size} source={require('../img/icon-nav-profile.svg')} />
        </View>
    )
}