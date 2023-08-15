import { StyleSheet } from "react-native";

const SettingStyle = StyleSheet.create({
    coverImage: { height: 300, width: '100%' },
    profileContainer: {
        // height: 1000,
        backgroundColor: '#fff',
        marginTop: -100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    profileImageView: { alignItems: 'center', marginTop: -50 },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#fff',
    },
    nameAndBioView: { alignItems: 'center', marginTop: 10 },
    userFullName: { fontFamily: 'SemiBold', fontSize: 23 },
    userBio: {
        fontFamily: 'Regular',
        fontSize: 15,
        color: '#333',
        marginTop: 4,
    },
    countsView: { flexDirection: 'row', marginTop: 20 },
    countView: { flex: 1, alignItems: 'center' },
    countNum: { fontFamily: 'SemiBold', fontSize: 17 },
    countText: { fontFamily: 'Regular', fontSize: 13, color: '#333' },
    interactButtonsView: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    interactButton: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#eb3b5a',
        margin: 5,
        borderRadius: 4,
      },
      interactButtonText: {
        fontFamily: 'SemiBold',
        color: '#fff',
        fontSize: 15,
        paddingVertical: 6,
      },
      profileContentButtonsView: {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderTopColor: '#f1f3f6',
      },
      showContentButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#000',
      },
      showContentButtonText: {
        fontFamily: 'Regular',
        fontSize: 15,
    },
})

export default SettingStyle