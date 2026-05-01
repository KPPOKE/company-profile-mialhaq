import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-soft hover:bg-deep",
        secondary: "bg-soft text-deep hover:bg-emerald-100",
        outline: "border border-emerald-200 bg-white text-deep hover:bg-soft",
        ghost: "text-deep hover:bg-soft",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: ReactNode;
};

type ButtonProps = ButtonVariantProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAnchorProps = ButtonVariantProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export function Button(props: ButtonProps | ButtonAnchorProps) {
  const { className, variant, size, children } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, className: _className, variant: _variant, size: _size, children: _children, ...anchorProps } = props;
    const safeAnchorProps = anchorProps as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal =
      href.startsWith("#") ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a className={classes} href={href} {...safeAnchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href} {...safeAnchorProps}>
        {children}
      </Link>
    );
  }

  const { className: _className, variant: _variant, size: _size, children: _children, href: _href, ...buttonProps } = props;
  const safeButtonProps = buttonProps as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...safeButtonProps}>
      {children}
    </button>
  );
}

export { buttonVariants };
