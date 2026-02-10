import { View } from "react-native";
import React, {
    createContext,
    PropsWithChildren,
    useCallback,
    useState,
} from "react";
import { themes } from "@/constants/theme";
import { useColorScheme } from "nativewind";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(
    {} as ThemeContextType
);

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({
                                                                      children,
                                                                  }) => {
    const { setColorScheme } = useColorScheme();
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
        if (theme === "light") {
            setTheme("dark");
            setColorScheme("dark");
        } else {
            setTheme("light");
            setColorScheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <View style={themes[theme]} className="flex-1">
                {children}
            </View>
        </ThemeContext.Provider>
    );
};