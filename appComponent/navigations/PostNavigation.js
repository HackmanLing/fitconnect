import { createStackNavigator } from '@react-navigation/stack'
import PostScreen from '../../screens/vendor/PostScreen';
import PostPreviewScreen from '../../screens/vendor/PostPreviewScreen';

const Stack = createStackNavigator();

function PostNavigation() {
  return (
    <Stack.Navigator initialRouteName="Post" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Preview" component={PostPreviewScreen} initialParams={{post:{}}} />
    </Stack.Navigator>
  )
}


export default PostNavigation