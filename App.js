import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DetailsStack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="GO TO HOME2"
        onPress={() => navigation.navigate("Home2")}
      />
      <Button title="DRAWER" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button title="GO TO HOME" onPress={() => navigation.navigate("Home")} />
      <Button title="DRAWER" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Home2Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="GO TO HOME" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="GO TO DETAILS2"
        onPress={() => navigation.navigate("Details2")}
      />
      <Button title="ALERT" onPress={() => alert("Hello World Alert...")} />
    </View>
  );
}

function Details2Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="GO TO DETAILS"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerRight: () => (
          <Icon
            raised
            style={{marginRight: 50}}
            name="md-menu"
            type="ionicon"
            color="#2296F3"
            onPress={() => navigation.toggleDrawer()}
          />
        )
      }}
    ></HomeStack.Screen>
    <HomeStack.Screen name="Home2" component={Home2Screen}></HomeStack.Screen>
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
    ></ProfileStack.Screen>
  </ProfileStack.Navigator>
);

const DetailsStackScreen = () => (
  <DetailsStack.Navigator>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
    ></DetailsStack.Screen>
    <DetailsStack.Screen
      name="Details2"
      component={Details2Screen}
    ></DetailsStack.Screen>
  </DetailsStack.Navigator>
);

const TabScreen = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{ title: "Home" }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{ title: "Details" }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabScreen}></Drawer.Screen>
        <Drawer.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{ title: "Profile" }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
