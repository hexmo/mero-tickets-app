import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Router from './Router';


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Router />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2d2c2b',
    accent: '#e44c34',
  },
};

// colors
// #2d2c2b black
// #e49314 yellow
// #e44c34 red