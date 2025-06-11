import SkipSelection from "@/features/skip-selection/SkipSelection.tsx";
import {ThemeProvider} from "@/components/theme/theme-provider.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <SkipSelection/>
        </ThemeProvider>
    )
}

export default App