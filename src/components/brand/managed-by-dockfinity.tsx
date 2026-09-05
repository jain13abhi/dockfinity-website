import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ManagedByDockfinityProps {
  /**
   * Theme mode for the credit line:
   * - 'auto': Uses system/class theme (navy on light, white on dark)
   * - 'dark': Forces white logo and light text (for dark backgrounds)
   * - 'light': Forces navy logo and dark text (for light backgrounds)
   */
  theme?: "auto" | "dark" | "light";
  /**
   * Visual style variant:
   * - 'standard': Inline link with icon and text
   * - 'badge': Pill badge with border
   * - 'minimal': Subtle text with small icon
   */
  variant?: "standard" | "badge" | "minimal";
  /**
   * Destination link (defaults to https://dockfinity.com)
   */
  href?: string;
  /**
   * Link target attribute
   */
  target?: string;
  /**
   * Link rel attribute
   */
  rel?: string;
  /**
   * Additional custom CSS classes
   */
  className?: string;
  /**
   * Whether to include the Dockfinity logo mark
   */
  showLogo?: boolean;
}

export function ManagedByDockfinity({
  theme = "auto",
  variant = "standard",
  href = "https://dockfinity.com",
  target = "_blank",
  rel = "noopener noreferrer",
  className,
  showLogo = true,
}: ManagedByDockfinityProps) {
  const isDark = theme === "dark";
  const isLight = theme === "light";

  const content = (
    <>
      {showLogo && (
        <span className="inline-flex items-center shrink-0">
          {isDark ? (
            <Image
              src="/logo-mark-white.svg"
              alt="Dockfinity"
              width={20}
              height={12}
              className="h-3.5 w-auto"
            />
          ) : isLight ? (
            <Image
              src="/logo-mark-navy.svg"
              alt="Dockfinity"
              width={20}
              height={12}
              className="h-3.5 w-auto"
            />
          ) : (
            <>
              <Image
                src="/logo-mark-navy.svg"
                alt="Dockfinity"
                width={20}
                height={12}
                className="h-3.5 w-auto dark:hidden"
              />
              <Image
                src="/logo-mark-white.svg"
                alt="Dockfinity"
                width={20}
                height={12}
                className="h-3.5 w-auto hidden dark:block"
              />
            </>
          )}
        </span>
      )}
      <span className="font-sans font-medium tracking-tight">
        Managed by <span className="font-semibold">Dockfinity</span>
      </span>
    </>
  );

  const baseStyles = "inline-flex items-center gap-2 text-xs transition-colors duration-200 group";

  const variantStyles = {
    standard: isDark
      ? "text-slate-300 hover:text-white"
      : isLight
      ? "text-slate-700 hover:text-slate-900"
      : "text-muted-foreground hover:text-foreground",
    badge: isDark
      ? "px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-200 hover:border-slate-500 hover:text-white shadow-sm"
      : isLight
      ? "px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm"
      : "px-3 py-1.5 rounded-full bg-secondary/80 border border-border text-foreground hover:bg-secondary shadow-sm",
    minimal: isDark
      ? "text-slate-400 hover:text-slate-200 text-[11px]"
      : isLight
      ? "text-slate-500 hover:text-slate-700 text-[11px]"
      : "text-muted-foreground hover:text-foreground text-[11px]",
  };

  if (!href) {
    return (
      <div className={cn(baseStyles, variantStyles[variant], className)}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(baseStyles, variantStyles[variant], className)}
      title="Managed by Dockfinity Private Limited"
    >
      {content}
    </a>
  );
}
