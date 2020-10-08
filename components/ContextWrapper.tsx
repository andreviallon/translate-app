import { ThemeStateProvider } from "../context/theme/ThemeState";

export default function ContextWrapper({ children }) {
    return (
        <ThemeStateProvider>
            {children}    
        </ThemeStateProvider>
    )
}
