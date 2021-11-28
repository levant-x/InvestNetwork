import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { BG_COLOR_PRIM } from "../consts";


export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <Image style={styles.navicon} source={require('../img/page-profile.png')} />
            <Image style={styles.navicon} source={require('../img/page-tools.png')} />
            <Image style={styles.navicon} source={require('../img/page-news.png')} />
            <Image style={styles.navicon} source={require('../img/page-tutorial.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: BG_COLOR_PRIM,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    navicon: {
        width: 50,
        height: 50,
        padding: 10,
    }
});