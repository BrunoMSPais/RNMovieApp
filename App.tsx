import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from './styles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
