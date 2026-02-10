import {Text, View, ScrollView, Pressable} from "react-native";
import { Link } from 'expo-router';
import { useState } from "react";
import { colorScheme, useColorScheme } from "nativewind";
import { StatusBar } from 'expo-status-bar';
import {useTheme} from "@/components/themes/context";

export default function Index() {
    const { theme, handleThemeSwitch, systemEnabled } = useTheme();
    return (
        <View className={`flex-1 bg-primary justify-center items-center`}>
          <Text className="text-6xl text-tertiary text-center">
              Welcome to My App!
          </Text>
            <Link href="/about">
                <Text>
                    Go to About screen
                </Text>
            </Link>
            <Pressable
                onPress={() => handleThemeSwitch("light")}
            >
                <Text className="text-foreground">
                    Make it light
                </Text>
            </Pressable>
            <Pressable
                onPress={() => handleThemeSwitch("dark")}
            >
                <Text className="text-foreground">
                    Make it dark
                </Text>
            </Pressable>
        </View>
  );
}

