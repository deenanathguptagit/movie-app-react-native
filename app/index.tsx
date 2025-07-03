import {Text, View} from "react-native";
import "./globals.css"
import {Link} from "expo-router";
export default function Index() {
  return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl text-blue-500 font-bold ">
          Welcome to Nativewind!
        </Text>
          <Link href="/onboarding">Go to onboarding</Link>
          <Link href="/movie/avengers">Avengers Movie</Link>
      </View>
  );
}
