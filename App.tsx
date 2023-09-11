import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from './styles';
import Home from './screens/home';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
};
