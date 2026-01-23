import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Assuming this exists, based on standard shadcn/ui

export const typographyVariants = cva(
    "text-xl",
    {
        variants: {
            variant: {
                h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
                h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
                h4: "scroll-m-20 text-xl font-semibold tracking-tight",
                p: "leading-7 [&:not(:first-child)]:mt-6",
                // Add other variants as needed
            },
        },
        defaultVariants: {
            variant: "p",
        },
    }
);

export interface TypographyProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> { }


export function typo({ variant, className }: TypographyProps) {
    return cn(typographyVariants({ variant }), className)
}
