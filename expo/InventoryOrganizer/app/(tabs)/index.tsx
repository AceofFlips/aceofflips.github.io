import {Text, View, ScrollView, Pressable} from "react-native";
import { Link } from 'expo-router';
import {useTheme} from "@/components/themes/context";
import clsx from "clsx";

export default function Index() {
    const { theme, handleThemeSwitch, systemEnabled } = useTheme();
    return (
        <View className="flex-1 bg-background justify-center items-center">
            <View className="flex md:flex-row flex-col items-center">
                <Text className="text-foreground"> ~ Test 1 ~ </Text>
                <Text className="text-foreground"> ~ Test 2 ~ </Text>
                <Text className="text-foreground"> ~ Test 3 ~ </Text>
            </View>
          <Text className="text-5xl md:text-6xl text-foreground text-center">
              Welcome to My App!
          </Text>
            <Link href="/about">
                <Text className="text-foreground">
                    Go to About screen
                </Text>
            </Link>

            <Pressable
                onPress={() => handleThemeSwitch("system")}
                className={clsx(
                    "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent focus:bg-accent",
                    systemEnabled && "bg-primary"
                )}
            >
                <Text className="text-foreground">System Default</Text>
            </Pressable>
            <Pressable
                onPress={() => handleThemeSwitch("light")}
                className={clsx(
                    "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent focus:bg-accent",
                    theme === "light" && !systemEnabled && "bg-primary"
                )}
            >
                <Text className="text-foreground">
                    Light
                </Text>
            </Pressable>
            <Pressable
                onPress={() => handleThemeSwitch("dark")}
                className={clsx(
                    "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent focus:bg-accent",
                    theme === "dark" && !systemEnabled && "bg-primary"
                )}
            >
                <Text className="text-foreground">
                    Dark
                </Text>
            </Pressable>
        </View>
  );
}

