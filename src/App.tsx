import { RouterProvider } from "react-router-dom";
import router from "@/routers/app.router";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./components/themes/theme-provider";

export default function App() {
    return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster
							position="bottom-right" 
							richColors 
							closeButton 
							expand
						/>
      </ThemeProvider>
    )
}