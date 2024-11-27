import { View, Text } from "react-native";
import Constants from 'expo-constants'
import { Button } from "@/components/Button";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  return (
    <View className="bg-slate-500" style={{ marginTop: statusBarHeight + 8 }}>
      <Text className="text-white font-bold">Ola Dev</Text>
      <Button>Entrar</Button>
    </View>
  )
}
