import { StyleSheet } from "react-native";

const DashboardStyle = StyleSheet.create({
    optionGroup: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    activeButton: {
        borderBottomColor: '#0275d8',
        borderBottomWidth: 2,
    },
    inactiveButton: {
        borderBottomColor: '#999',
        borderBottomWidth: 1,
    },
    activeButtonText: {
        color: '#0275d8',
        fontFamily: 'SemiBold'
    },
    inactiveButtonText: {
        color: '#999',
        fontFamily: 'Medium'
    },
    userBadge: {
        backgroundColor: '#999',
        width: 200,
        height: 100,
        marginTop: 5
    },
    userBadgeImage: {

    },
    post: {
        borderBottomWidth: 1,
        borderBottomColor: '#dfe4ea',
        // display: 'none',
        borderRadius: 4,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 10,
        paddingBottom: 10
    },
      postHeader: { padding: 6, flexDirection: 'row', alignItems: 'center', },
      postContentImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
      interactionBar: {
        backgroundColor: '#fafafa',
        height: 40,
        marginHorizontal: 20,
        marginTop: -20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    interactionText: {
        fontFamily: 'Regular',
        color: '#000',
        marginLeft: 4,
    },
    interactionButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
    },
})

export default DashboardStyle