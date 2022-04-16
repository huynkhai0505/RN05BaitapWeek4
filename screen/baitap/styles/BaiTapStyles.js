import { StyleSheet, Platform } from 'react-native'

//AppBar

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#E9EBEE'
    },
    //AppBar
    container_header: {
        backgroundColor: '#FFF',
        height: Platform.OS == 'ios' ? 100 : 56,
        paddingTop: Platform.OS == 'ios' ? 64 : 0,
        paddingLeft: 20,
        paddingRight: 20,
    },

    header: {
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    header_text: {
        fontSize: 16, 
        fontWeight: '500'
    },
    container_avatar: {
        backgroundColor: '#FFF',
        height: 90,
        marginTop: 1
    },
    container_avatar__image: {
        height: 56,
        width: 56,
        borderRadius: 28
    },
    container_avatar__sub: {
        alignItems: 'center',
        margin: 10
    },
    container_feed: {
        flex: 1,
        backgroundColor: "#FFF",
        marginTop: 1,
    },
    container_border: {
        borderBottomWidth: 1, 
        borderBottomColor: '#CCC'
    },
    container_feed__topView: {
        flexDirection: 'row',
        margin: 10,
    },
    container_feed__topView__title: {
        marginLeft: 10,
    },
    container_feed__topView__name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        paddingRight: 20,
    },
    text_color: {
        color: '#A8A8A8'
    },  
    container_feed__topView__icon:{
        marginLeft: 60,
    },
    container_feed__midView: {
        marginLeft: 10,
        marginRight: 10  
    },
    container_feed__bottomView: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    container_react: {
        height: 25,
        width: 25,
    },
    margin_Left_5: {
        marginLeft: 5
    },
    margin_Left_10: {
        marginLeft: 10
    }
})