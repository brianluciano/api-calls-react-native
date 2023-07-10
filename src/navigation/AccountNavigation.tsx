import { createStackNavigator } from "@react-navigation/stack"
import UserAccount from "../screens/Account"

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountScreen" component={ UserAccount } />
    </Stack.Navigator>
  )
}