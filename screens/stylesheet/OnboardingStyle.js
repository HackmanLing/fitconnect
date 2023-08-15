import { StyleSheet } from "react-native";

const OnboardingStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.4,
        justifyContent: 'center'
    },
    title: {
        fontFamily:'Bold',
        fontSize: 20,
        marginBottom: 10,
        color: '#000',
        textAlign: 'center'
    },
    description: {
        color: '#444',
        textAlign: 'center',
        paddingHorizontal: 64,
        fontFamily:'Regular',
        textAlign: "justify",
        fontSize: 13,
    },
    dots: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#292b2c',
        marginHorizontal: 8
    },
    nextBTN: {
        width: '80%',
        height: 50,
        backgroundColor: '#292b2c',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 10,
    },
    btnText: {
        color: '#eee',
        fontFamily: 'Bold'
    },
    iconContainer: {
        backgroundColor: '#292b2c',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    inputView: {
        marginTop: 5,
        height: 50,
        paddingTop: 3,
        backgroundColor: '#f1f3f6',
    },
    successScreen: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    successScreenCircle:{
        height: 200,
        width: 200,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 100,
        backgroundColor: '#333',
        borderColor: '#eee'
    },
    successScreenCircleInner: {
        height: 190,
        width: 190,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 100,
        borderColor: '#fff'
    }
})


export default OnboardingStyle