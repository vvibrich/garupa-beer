import { StyleSheet  } from 'react-native';
export const style = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15
    },
    view: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    image: {
        width: 100,
        height: 400
    },
    productContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10
    },
    productNameContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingRight: 300
    },
    productNameText: {
        color: '#FFB900'
    },
    productTagline: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingRight: 300
    },
    badgeFirstBrewed: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingRight: 200,
        marginTop: 20
    },
    containerTap: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingRight: 200,
        marginTop: 20
    },
    tapText: {
        width: 190,
        height: 35,
        backgroundColor: "#FFB900",
        textAlign: 'center',
        paddingTop: 7,
        fontWeight: '700',
        color: '#FFF',
        borderRadius: 4
    },
})