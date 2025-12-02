import { RouterProvider } from "react-router-dom";
import router from "@/routers/app.router";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { queryClient } from "@/lib/tanstack-query.lib";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
            <Toaster
                  position="bottom-right" 
                  richColors 
                  closeButton 
                  expand
                />
          </ThemeProvider>
        </QueryClientProvider>
    )
}