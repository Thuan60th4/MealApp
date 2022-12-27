import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoryScreen from "./screens/CategoryScreen";
import DetailScreen from "./screens/DetailScreen";
import MealOverview from "./screens/MealOverview";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoriteProvider from "./store/context/favoritesContex";
import { Provider } from "react-redux";
import store from "./store/redux/store";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  //xoa file reanimate 1 o trong src/index.ts cuar react-native-reanimate trong nodemodul
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "white",
        drawerStyle: { backgroundColor: "#ccc" },
        drawerActiveBackgroundColor: "red",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        name="categories"
        component={CategoryScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
        name="favorites"
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      {/* <FavoriteProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "red" },
              headerTintColor: "white",
              // contentStyle: { backgroundColor : 'black'}
            }}
          >
            <Stack.Screen
              options={{ title: "All Categories", headerShown: false }}
              name="Drawer"
              component={DrawerNavigator}
            />
            <Stack.Screen
              // options={{ title: "All Meals" }}
              //-Cách 1 sử dụng trực tiếp trong screen cách 2 là sử dụng setOption trong component MealOverview
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
              name="MealOverviewScreen"
              component={MealOverview}
            />
            <Stack.Screen name="DetailMeal" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteProvider> */}
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "black",
  },
});
