import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loginform: {
        marginTop: 10,
    },
    inputView: {
        height: 50,
        borderRadius: 7,
        backgroundColor: '#f1f3f6',
        marginTop: 10,
        display: 'flex',
        paddingLeft: 5,
        flexDirection: 'row',
    },
    input: {
        height: 50,
        flex: 1,
        fontSize: 16,
        color: '#333',
        paddingLeft: 10,
        fontFamily:'Regular'
    },
    inputIcon: {
        paddingHorizontal: 8,
        position: 'absolute',
        right: 10,
        marginTop: 18,
    }
})

export default LoginStyle