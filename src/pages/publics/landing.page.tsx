import { authClient } from "@/lib/auth-client.lib";
import { motion } from "motion/react";
import { Car, LogOut } from "lucide-react";
import { ModeToggle } from "@/components/themes/mode-toggle";

export default function LandingPage() {
    const { data: session } = authClient.useSession();

    const signIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: import.meta.env.VITE_BASE_URL + "/dashboard",
        });
    };

    const signOut = async () => {
        await authClient.signOut();
    };

    return (
        <div className="relative flex h-dvh w-full flex-col items-center justify-between overflow-hidden bg-white p-6 dark:bg-black">
            {/* Theme Toggle */}
            <div className="absolute top-4 right-4 z-50">
                <ModeToggle />
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-[20%] -left-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
                <div className="absolute top-[40%] -right-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
            </div>

            {/* Main Content */}
            <div className="z-10 flex flex-1 flex-col items-center justify-center gap-8">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 1.5,
                    }}
                    className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl shadow-blue-500/30"
                >
                    <Car className="h-16 w-16 text-white" />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Driver Saku
                    </h1>
                    <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                        Your pocket driver companion.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Action */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="z-10 w-full max-w-sm pb-8"
            >
                {session ? (
                    <button
                        onClick={signOut}
                        className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-4 px-6 text-lg font-semibold text-white transition-transform active:scale-95 hover:bg-red-600"
                    >
                        <LogOut className="h-6 w-6" />
                        Sign Out
                    </button>
                ) : (
                    <button
                        onClick={signIn}
                        className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gray-900 py-4 px-6 text-lg font-semibold text-white transition-transform active:scale-95 dark:bg-white dark:text-black"
                    >
                        <svg className="h-6 w-6" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Continue with Google
                    </button>
                )}
                <p className="mt-6 text-center text-xs text-gray-400">
                    By continuing, you agree to our Terms & Privacy Policy
                </p>
            </motion.div>
        </div>
    );
}