import { createStackNavigator } from '@react-navigation/stack'
import CategoryScreen from '../../screens/account/CategoryScreen';
import CategoryListDataScreen from '../../screens/account/CategoryListDataScreen';
import HooglePageDetail from '../../screens/account/HooglePageDetail';

const Stack = createStackNavigator();

function CategoryNavigation() {
  return (
    <Stack.Navigator initialRouteName="Category" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="CategoryList" component={CategoryListDataScreen} initialParams={{categoryList:{}}} />
      <Stack.Screen name="CategoryListData" component={HooglePageDetail} initialParams={{categoryListData:{}}} />
    </Stack.Navigator>
  )
}


export default CategoryNavigation