import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    headerTitle: {
        fontFamily: 'SemiBold',
        fontSize: 15,
        color: '#555'
    },
    headerUsername: {
        fontFamily: 'Bold',
        fontSize: 22,
        color: '#292b2c'
    },
    headerUserType: {
        fontFamily: 'Regular',
        fontSize: 12,
        color: '#666'
    },
    badge: {
        position: 'absolute', 
        top: -8, 
        left: 15, 
        backgroundColor: '#d9534f', 
        color: '#fff',
        fontFamily: 'SemiBold',
        fontSize: 10,
        width: 25,
        paddingHorizontal: 5, 
        paddingVertical: 4,
        borderRadius: 5
    },
    profilePic: {
        width: 50,
        height: 50,
        backgroundColor: '#eee',
        borderRadius: 10
    },
    searchBar: {
        width: '82%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10, 
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'Regular'
    },
    searchBTN: {
        width: '15%',
        height: 40,
        backgroundColor: '#292b2c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    title: {
        fontFamily:'SemiBold',
        fontSize: 17,
        color: '#000',
        paddingTop: 10
    },
    description: {
        color: '#444',
        fontFamily:'Regular',
        fontSize: 11,
        textAlign:'justify'
    },
    modal: {
        // position: 'absolute', 
        width: '100%',
        flex: 1,
        borderRadius: 10, 
        marginTop: 50, 
        padding: 20,
        paddingTop: 50, 
        backgroundColor: '#fff', 
        alignSelf: 'center', 
        zIndex: 3,
    },
    closeBtn: {
        padding: 7,
        backgroundColor: 'red',
        position: 'absolute',
        right: 10,
        top: 0
    },
    modalTitle: {
        padding: 7,
        position: 'absolute',
        left: 10,
        top: 3
    },
    scrollView: {
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 0,
        zIndex: 1
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#fafbff',
        elevation: 5,
        marginRight: 10
    },
    users: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginRight: 10
    },
    announcement: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: '#eee',
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginTop: 5
    },
    bgColor: {
        position: 'absolute',
    },
    headerButton: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 10,
        backgroundColor: '#fafbff'
    }

})

export default HomeStyle