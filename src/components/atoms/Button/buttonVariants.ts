import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed active:scale-95 border-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md active:bg-blue-800 shadow-sm dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700",
        destructive: "bg-red-600 text-white hover:bg-red-700 hover:shadow-md active:bg-red-800 shadow-sm dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700",
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-500",
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:active:bg-gray-700",
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 active:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 bg-transparent",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-sm active:bg-gray-300 shadow-sm dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:active:bg-gray-600",
        success: "bg-green-600 text-white hover:bg-green-700 hover:shadow-md active:bg-green-800 shadow-sm dark:bg-green-500 dark:hover:bg-green-600 dark:active:bg-green-700",
        warning: "bg-yellow-600 text-white hover:bg-yellow-700 hover:shadow-md active:bg-yellow-800 shadow-sm dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:active:bg-yellow-700",
        info: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md active:bg-blue-800 shadow-sm dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700",
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
) 