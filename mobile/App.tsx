import { ScrollView, StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

// Components
import { Home } from './src/pages/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor='transparent' 
        translucent />
        <ScrollView style={{marginBottom: 20}}>
          { loaded ? <Home /> : <Loading />}
        </ScrollView>
    </Background>
  );
}