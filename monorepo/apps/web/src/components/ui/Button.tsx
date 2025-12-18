import React, {
  forwardRef,
  ButtonHTMLAttributes,
  ReactNode,
  MouseEvent,
} from "react";

type Variant = "primary" | "grey" | "modifier" | "save";
type Size = "sm" | "md" | "lg" | "full";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-secondary focus:ring-1 focus:ring-black",
  grey: "bg-grey-1 hover:bg-grey-2 text-black border border-grey-2 focus:ring-1 focus:ring-primary",
  modifier: "bg-transparent border border-blue-secondary hover:bg-blue-secondary",
  save: "bg-blue-secondary border border-blue-secondary hover:bg-blue-primary text-white focus:ring-1 focus:ring-black",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-lg",
  lg: "px-5 py-3 text-sm rounded-xl",
  full: "h-auto px-[18px] rounded-lg",
};

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none group/button h-fit";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      onClick,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;