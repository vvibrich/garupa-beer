import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    safeAreaContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    scroll: {
        backgroundColor: '#222'
    },
    beerImageContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignSelf: 'center',
        width: 420,
        height: 400,
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    beerImage: {
        flex: 1,
        resizeMode: 'contain',
        marginTop: 10,
        width: null,
        height: null,
        paddingTop: 10
    },
    productNameContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        margin: 10
    },
    productNameText: {
        color: '#FFB900',
        textDecorationLine: 'underline'
    },
    productTaglineContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        margin: 10,
        padding: 10
    },
    productTaglineText: {
        color: '#FFF'
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        borderRadius:5,
        margin: 10,
        padding: 10
    },
    subtitleText: {
        textDecorationLine: 'underline',
        color: '#FFB900'
    },
    productDescriptionContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        borderRadius:5,
        margin: 10,
        padding: 10
    },
    productDescripionText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '500'
    },
    productVolumeAndFirstBrewedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:5,
        margin: 10,
        padding: 8
    },
    productVolumeIcon: {
        top: 2,
        marginRight: 5
    },
    productVolumeText: {
        color: '#222',
        backgroundColor: '#FBCF03',
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: '500',
        marginRight: 20
    },
    productFirstBrewdIcon: {
        top: 3,
        marginRight: 5
    },
    productFirstBrewedText: {
        color: '#222',
        backgroundColor: '#FBCF03',
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: '500',
        marginRight: 20
    },
    contributedByContainer: {
        flexDirection: 'row',
        borderRadius:5,
        margin: 10,
        padding: 8
    },
    contributedByText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '500',
        marginRight: 20
    }
});