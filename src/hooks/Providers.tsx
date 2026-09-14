import { AuthProvider } from "./CustomHooks/AuthContext.tsx";
import { DataProvider } from "./CustomHooks/DataContext.tsx";

export default function Providers({ children })
    {
        return(
            <AuthProvider>
                <DataProvider>
                    {children}
                </DataProvider>
            </AuthProvider>
        )
}