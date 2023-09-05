// import library ที่จำเป็น
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, Entypo, Octicons } from '@expo/vector-icons';

// import screen ที่เกี่ยวข้อง
import SpringAnimation from "../Animations/Spring";
import ParallelAnimation from "../Animations/Parallel";
import SequenceAnimation from "../Animations/Sequence";


// สร้าง navigator ตามโจทย์กำหนด
const MealsFavTabNavigator = createBottomTabNavigator();
const MainNavigator = createDrawerNavigator();

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// อาจกำหนด Navigator เพิ่มได้


function MealsFavTabNavigation() {
  return (
    <MealsFavTabNavigator.Navigator
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarStyle: { backgroundColor: "white" },
        tabBarLabelStyle: { fontSize: 15 },
        headerShown: false,
      }} >
      <MealsFavTabNavigator.Screen
        name="Spring"
        component={SpringAnimation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="grooveshark" size={size} color={color} />
          }
        }}
      />
      <MealsFavTabNavigator.Screen
        name="Sequence"
        component={SequenceAnimation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="menu" size={size} color={color} />
          }
        }}
      />
      <MealsFavTabNavigator.Screen
        name="Parallel"
        component={ParallelAnimation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Octicons name="git-merge" size={size} color={color} />
          }
        }}
      />
    </MealsFavTabNavigator.Navigator>
  );
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}>
        <MainNavigator.Screen
          name="Meals"
          component={MealsFavTabNavigation}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
