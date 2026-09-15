import { AuthProvider } from "./CustomHooks/AuthContext.tsx";
import { DataProvider } from "./CustomHooks/DataContext.tsx";
import type { ProviderProps } from '../types/index.ts'

export default function Providers({ children }: ProviderProps)
    {
        return(
            <AuthProvider>
                <DataProvider>
                    {children}
                </DataProvider>
            </AuthProvider>
        )
}
