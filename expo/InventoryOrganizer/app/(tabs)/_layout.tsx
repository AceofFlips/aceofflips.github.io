import { Tabs } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyledTabs } from "@/components/tabs";

export default function TabLayout() {
    return (
        <StyledTabs
            tabBarClassName="bg-background pt-3"
            screenOptions={{
                headerShown:false,
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
        </StyledTabs>
    );
}
