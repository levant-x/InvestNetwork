import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { BG_COLOR_PRIM, BG_COLOR_SEC } from "../consts";
import { stylesCommon } from "../styles";


export default function ProfilePage() {
    return (
        <View style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.header}>Profile</Text>
                <Image source={require('../img/settings.png')} style={styles.settings} />
            </View>   
            <View style={styles.avatar}>
                <Image source={require('../img/avatar-pholder.png')} style={styles.avatarImg} />
                <Text style={styles.header}>Pretty Boy</Text>
            </View> 
            <View style={styles.summary}>
                <ProfileSummary topLabel='Подписчики: 3' btmLabel='Подписки: 3' />
                <ProfileSummary topLabel='Мой портфель' btmLabel='+150' />
            </View>    
            <View style={styles.postsHeader}>
                <Text style={[styles.header, {textAlign: 'center'}]}>Мои публикации</Text>
                <View style={styles.inputBlock}>
                    <Image source={require('../img/edit.png')} style={styles.inputIcon} />
                    <TextInput placeholder={'Новая публикация'} style={styles.input} />
                </View>
            </View>    
        </View>
    )
}

function ProfileSummary(props: {
    topLabel: string,
    btmLabel: string,
}) {
    return (
        <View style={styles.summaryItem}>
            <Text>{props.topLabel}</Text>
            <Text>{props.btmLabel}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        alignItems: 'stretch',
        marginHorizontal: 15,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontSize: 25,
        fontWeight: 'bold',
    },

    settings: {
        width: 50,
        height: 50,
    },

    avatar: {
        flexDirection: 'column',
        alignItems: 'center', 
        marginTop: 15,
    },

    avatarImg: {
        width: 170,
        height: 170
    },

    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },

    summaryItem: {
        backgroundColor: BG_COLOR_SEC,
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 25,
        width: '48%',
    },

    postsHeader: {
        marginTop: 15,   
    },

    inputBlock: {
        flexDirection: 'row',
        backgroundColor: BG_COLOR_PRIM,
        borderRadius: 10,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    inputIcon: {
        width: 25,
        height: 25,
    },

    input: {
        fontSize: 15,
        backgroundColor: BG_COLOR_SEC,
        position: 'absolute',
        borderRadius: 5,
        right: 15,
        top: 10,
        bottom: 10,
        left: 60
    },
})