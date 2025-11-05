import React, {
  forwardRef,
  ButtonHTMLAttributes,
  ReactNode,
  MouseEvent,
} from "react";

type Variant = "primary" | "grey";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // 👈 explicitly typed
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-secondary focus:ring-1 focus:ring-black",
  grey: "bg-grey-2 hover:bg-grey-1 text-black focus:ring-1 focus:ring-primary",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-lg",
  lg: "px-6 py-4 text-sm rounded-xl",
};

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none";

/**
 * Generic Button component for Next.js + Tailwind.
 * - Accepts children (text, icons, images, etc.)
 * - Supports size and variant props
 * - Forwards ref
 * - Detects clicks via onClick
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      onClick, // 👈 extracted
      ...rest
    },
    ref
  ) => {
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

    return (
      <button
        ref={ref}
        className={classes}
        onClick={onClick} // 👈 ensure it fires
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
