import { Stack } from 'expo-router';
import { Theme } from '@/components/themes/provider'
import "@/global.css";
import "tailwindcss/base";
import "tailwindcss/components";
import "tailwindcss/utilities";

export default function RootLayout() {
    return (
        <Theme>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </Theme>
    );
}
