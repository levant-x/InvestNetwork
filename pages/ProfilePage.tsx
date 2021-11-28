import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { stylesCommon } from "../styles";


export default function ProfilePage() {
    return (
        <ScrollView contentContainerStyle={[stylesCommon.page, stylesCommon.vertical]}>
            <View style={styles.profileHeader}>
                <Text>Profile</Text>
                <SvgUri width={20} height={20} source={require('../img/icon-settings.svg')} />
            </View>    
            <Text>Pretty Boy</Text>    
            <View style={stylesCommon.horizontal}>
                <ProfileSummary topLabel='Подписчики: 3' btmLabel='Подписки: 3' />
            </View>    
        </ScrollView>
    )
}

function ProfileSummary(props: {
    topLabel: string,
    btmLabel: string,
}) {
    return (
        <View style={[styles.profileSummary, stylesCommon.vertical]}>
            <Text>{props.topLabel}</Text>
            <Text>{props.btmLabel}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    profileSummary: {

    }
})