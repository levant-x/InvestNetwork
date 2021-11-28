import { StyleSheet } from "react-native";

const backgroundColor = 'blue';

export const stylesCommon = StyleSheet.create({
    vertical: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },

    horizontal: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff', // fff
    },

    page: {
        justifyContent: 'flex-start',
    },

    navbar: {
        backgroundColor,
        height: 80,
    }
});
