import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import DetailScreen from "./screens/DetailScreen";
import MealOverview from "./screens/MealOverview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "red" },
            headerTintColor: "white",
            // contentStyle: { backgroundColor : 'black'}
          }}
        >
          <Stack.Screen
            options={{ title: "All Categories" }}
            name="CategoryMealScreen"
            component={CategoryScreen}
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
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "black",
  },
});
