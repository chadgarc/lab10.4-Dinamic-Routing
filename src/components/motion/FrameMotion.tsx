import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router";
import type { ReactNode } from "react";

export function FrameMotion({children}: {children: ReactNode}) {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: -1, scale: 1 }}
            transition={{ duration: 0.4 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
