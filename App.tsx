import { registerRootComponent } from "expo";

import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { rootReducer } from "./reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { DrawerContent } from "./components/DrawerContent";

import { DashboardScreen } from "./screens/DashboardScreen";
import { TotalApplicationsScreen } from "./screens/TotalApplicationsScreen";
import { JobSearchOptionsScreen } from "./screens/JobSearchOptionsScreen";
import { SiteCredentialsScreen } from "./screens/SiteCredentialsScreen";
import { SubscriptionScreen } from "./screens/SubscriptionScreen";

{
  /*
   *const store = createStore(
   *  rootReducer,
   *);
   */
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    //<Provider store={store}>
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator initialRouteName="Root" drawerContent={DrawerContent}>
          <Drawer.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Total Applications"
            component={TotalApplicationsScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Job Search Options"
            component={JobSearchOptionsScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Site Credentials"
            component={SiteCredentialsScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Subscription"
            component={SubscriptionScreen}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
    //</Provider>
  );
}

registerRootComponent(App);
