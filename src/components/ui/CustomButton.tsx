import type {ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gradient";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border-3 border-black group-hover:bg-primary/90",
  secondary:
    "bg-secondary text-white border-3 border-black group-hover:bg-secondary/90",
  outline:
    "bg-transparent border-3 border-black text-black hover:bg-black/5",
  ghost: 
    "bg-transparent text-text-main border-3 border-transparent hover:border-black hover:bg-black/5",
  gradient:
    "bg-[image:var(--gradient-primary)] text-white border-3 border-black hover:brightness-110",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
  xl: "px-12 py-5 text-xl",
};

export const CustomButton = ({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = "left",
  className = "",
  disabled,
  ...props
}: CustomButtonProps) => {
  // Ultra-Cartoon styles:
  // - border-3 (using arbitrary value or theme)
  // - border-black
  // - Hard shadow that is ALWAYS there, moves on hover, disappears on click
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 font-black uppercase tracking-wider rounded-full transition-all duration-150 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none -translate-y-0 shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000000] disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-4 focus:ring-black/20";

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && <span>{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </>
      )}
    </button>
  );
};
