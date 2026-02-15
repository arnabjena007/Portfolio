"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    size?: "sm" | "default";
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ className, size = "default", ...props }, ref) => {
        return (
            <label className="relative inline-flex cursor-pointer items-center">
                <input
                    type="checkbox"
                    className="peer sr-only"
                    ref={ref}
                    {...props}
                />
                <div
                    className={cn(
                        "peer rounded-full bg-gray-200 after:absolute after:rounded-full after:bg-white after:transition-all peer-checked:bg-blue-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800",
                        size === "sm" ? "h-5 w-9 after:top-[2px] after:start-[2px] after:h-4 after:w-4 peer-checked:after:translate-x-full" : "h-6 w-11 after:top-[2px] after:start-[2px] after:h-5 after:w-5 peer-checked:after:translate-x-full",
                        className
                    )}
                ></div>
            </label>
        );
    }
);
Switch.displayName = "Switch";

export { Switch };
