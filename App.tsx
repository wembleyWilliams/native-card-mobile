import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import BusinessCard from "./components/business-card/BusinessCard";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {DefaultTheme} from "@react-navigation/native";
import {useFonts} from 'expo-font';
import create = StyleSheet.create;
import {Provider as PaperProvider} from "react-native-paper";
import {Provider as ReduxProvider} from "react-redux"
import {COLORS} from "./constants/theme";
import {store} from "./redux/store";


import {
    BrowserRouter as Router,
    Routes,
    Route, useParams,
} from "react-router-dom";

export default function App() {
    return (

        <PaperProvider>
            <ReduxProvider store={store}>
                <Router>
                    <Routes>
                        <Route
                            path={':cardId'}
                            element={
                                <View style={styles.container}>
                                    <BusinessCard />
                                </View>
                            }
                        />
                    </Routes>

                </Router>
            </ReduxProvider>
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
