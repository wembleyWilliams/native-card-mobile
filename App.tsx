import {StyleSheet, View} from 'react-native';
import BusinessCard from "./components/business-card/BusinessCard";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {Provider as PaperProvider} from "react-native-paper";
import {Provider as ReduxProvider} from "react-redux"
import {store} from "./redux/store";


import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";

// Add all brand icons to the library
library.add(fab);


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
        // backgroundColor:","
        maxWidth: 428,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
