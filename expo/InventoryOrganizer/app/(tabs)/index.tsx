import {Text, View, ScrollView, Pressable} from "react-native";
import { Link } from 'expo-router';
import { useState } from "react";
import {useColorScheme} from "nativewind";
import { StatusBar } from 'expo-status-bar';
import {ThemeProvider} from "@/components/ThemeProviders";

export default function Index() {
    const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <ThemeProvider>
            <ScrollView className="flex-1 bg-[--colors-bg-primary]">
              <Text className="text-6xl text-center">
                  Welcome to My App!
              </Text>
                <Link href="/about">
                    <Text>
                        Go to About screen
                    </Text>
                </Link>
                <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
                <Pressable
                    onPress={toggleColorScheme}
                >
                    <Text className={'text-[--text-primary]'} style={{ fontSize: 16, fontWeight: 'bold' }}>
                        {currentTheme === 'dark' ? 'dark' : 'light'}
                    </Text>
                </Pressable>
            </ScrollView>
        </ThemeProvider>
  );
}

