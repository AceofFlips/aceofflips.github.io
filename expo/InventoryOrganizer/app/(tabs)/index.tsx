import {Text, View, ScrollView, Pressable} from "react-native";
import { Link } from 'expo-router';
import {useTheme} from "@/components/themes/context";
import clsx from "clsx";
import {ThemedTable} from "@/components/ThemedTable";
import {Theme} from "@/components/themes/provider";
import {useContext, useState} from "react";

export default function Index() {
    const { theme, handleThemeSwitch, systemEnabled } = useTheme();

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    function updateSidebarOpen(isOpen: boolean) {
        setSidebarOpen(isOpen);
    }

    return (
        <ScrollView className="flex h-screen overflow-hidden">
            <View className="fixed left-0 top-0 z-9999 flex h-screen flex-col overflow-y-hidden bg-primary duration-300 ease-linear lg:static lg:translate-x-0 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }">
                <View className="flex items-center justify-between gap-2 px-6 lg:py-6.5 py-5.5">
                    <Pressable
                        onPress={() => updateSidebarOpen(!sidebarOpen)}
                        className="block lg:hidden bg-secondary">
                        <Text>Toggle the Sidebar</Text>
                    </Pressable>
                </View>
            </View>

            <View className="bg-background relative z-9999 flex h-screen overflow-x-hidden overflow-y-auto items-center mx-auto p-4 pb-20 md:p-6 md:pb-6">
                <View className="flex sm:flex-row flex-col items-center">
                    <Text className="text-foreground"> ~ Test 1 ~ </Text>
                    <Text className="text-foreground"> ~ Test 2 ~ </Text>
                    <Text className="text-foreground"> ~ Test 3 ~ </Text>
                </View>
              <Text className="text-5xl sm:text-6xl text-foreground text-center">
                  Welcome to My App!
              </Text>
                <Pressable>
                    <Link href="/about">
                        <Text className="text-foreground">
                            Go to About screen
                        </Text>
                    </Link>
                </Pressable>
                <View className="flex sm:flex-row flex-col items-center">
                    <Pressable
                        onPress={() => handleThemeSwitch("system")}
                        className={clsx(
                            "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent",
                            systemEnabled && "bg-primary"
                        )}
                    >
                        <Text className="text-foreground">
                            Default
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => handleThemeSwitch("light")}
                        className={clsx(
                            "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent",
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
                            "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent",
                            theme === "dark" && !systemEnabled && "bg-primary"
                        )}
                    >
                        <Text className="text-foreground">
                            Dark
                        </Text>
                    </Pressable>
                </View>

                <ThemedTable/>
            </View>
        </ScrollView>
  );
}

