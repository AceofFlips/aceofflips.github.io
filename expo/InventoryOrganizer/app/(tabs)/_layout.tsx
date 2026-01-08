import { Tabs } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerStyle: {
                    backgroundColor:Colors[colorScheme ?? 'light'].background,
                },
                headerShadowVisible: false,
                headerTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarStyle: {
                    backgroundColor:Colors[colorScheme ?? 'light'].background,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name={focused?"home-sharp":"home-outline"}
                            color = {color}
                            size={24}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name = {focused?"information-circle":"information-circle-outline"}
                            color = {color}
                            size = {24}
                        />
                    )
                }}
            />
        </Tabs>
    );
}
