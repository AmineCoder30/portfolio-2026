import type { ButtonHTMLAttributes, ReactNode } from "react";

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
  primary: "bg-primary text-bg-main shadow hover:bg-primary/90",
  secondary: "bg-secondary text-bg-main shadow-sm hover:bg-secondary/80",
  outline:
    "border border-border bg-transparent shadow-sm hover:bg-bg-surface text-text-main",
  ghost: "hover:bg-bg-surface/10 text-text-main hover:text-primary",
  gradient: "bg-primary text-bg-main shadow hover:bg-primary/90", // Mapped to primary for flat look
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 rounded-md px-3 text-xs",
  md: "h-9 px-4 py-2",
  lg: "h-10 rounded-md px-8",
  xl: "h-12 rounded-md px-10 text-lg",
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
  // Modern minimal button styles (Shadcn-like)
  const baseStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

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
            className="animate-spin h-4 w-4"
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
