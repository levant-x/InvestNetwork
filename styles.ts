import { StyleSheet } from "react-native";


export const stylesCommon = StyleSheet.create({
    vertical: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },

    horizontal: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },

    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#fff', // fff
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },

    page: {
        justifyContent: 'flex-start',
    },
});
