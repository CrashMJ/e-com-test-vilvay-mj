import { cn } from "@/common/libs/utils";
import { ReactNode } from "react";

// Max width wrapper for website left and right margin
const MaxWidthWrapper = ({className, children}: {
    className: string, 
    children: ReactNode
}) => {
    return <div className={cn("h-full mx-auto max-w-screen-xl", className)}>{children}</div>
}

export default MaxWidthWrapper;