"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const FieldGroup = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
));
FieldGroup.displayName = "FieldGroup";

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
    ({ className, orientation = "vertical", ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex",
                orientation === "horizontal" ? "flex-row items-center gap-2" : "flex-col gap-2",
                className
            )}
            {...props}
        />
    )
);
Field.displayName = "Field";

const FieldLabel = React.forwardRef<
    HTMLLabelElement,
    React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
    <label
        ref={ref}
        className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white text-black",
            className
        )}
        {...props}
    />
));
FieldLabel.displayName = "FieldLabel";

export { Field, FieldGroup, FieldLabel };
