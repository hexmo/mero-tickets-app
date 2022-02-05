import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { StyleSheet, View, StatusBar } from 'react-native';
import Router from './Router';


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor="#e44c34" />
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
// #e44c34 red