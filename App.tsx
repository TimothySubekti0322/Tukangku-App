import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./pages/splashScreen/splashScreen";
import GettingStarted1 from "./pages/gettingStarted/gettingStarted1";

export type RootStackNavigatorParamsList = {
  SplashScreen: undefined;
  GettingStarted1: undefined;
};

// export type RootNavigationProp =
//   NativeStackScreenProps<RootStackNavigatorParamsList>;

export default function App() {
  const Stack = createStackNavigator<RootStackNavigatorParamsList>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="GettingStarted1" component={GettingStarted1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
