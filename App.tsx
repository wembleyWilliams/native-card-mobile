import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import BusinessCard from "./components/business-card/BusinessCard";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {DefaultTheme} from "@react-navigation/native";
import {useFonts} from 'expo-font';
import create = StyleSheet.create;
import { Provider as PaperProvider } from "react-native-paper";
import {COLORS} from "./constants/theme";


export default function App() {
  return (
      <PaperProvider>
        <View style={styles.container}>
          <BusinessCard/>
        </View>
      </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
