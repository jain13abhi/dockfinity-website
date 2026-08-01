import { cn } from "@/lib/utils";

interface SealProps {
    label: string;
    sub?: string;
    className?: string;
}

/**
 * The registry seal — a certification mark, not a badge pill.
 * Perimeter text runs on a circular path around a fixed center mark.
 */
export function Seal({ label, sub, className }: SealProps) {
    const pathId = `seal-path-${label.replace(/\W/g, "")}`;

    return (
        <div className={cn("relative w-28 h-28 shrink-0 text-brand", className)}>
            <svg viewBox="0 0 120 120" className="w-full h-full">
                <defs>
                    <path id={pathId} d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
                </defs>
                <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="1.25" />
                <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <text fontSize="8.4" fontFamily="var(--font-mono), monospace" letterSpacing="2.5" fill="currentColor">
                    <textPath href={`#${pathId}`} startOffset="0%">
                        {label.toUpperCase()} &#8226; CERTIFIED &#8226; {label.toUpperCase()} &#8226; CERTIFIED &#8226;
                    </textPath>
                </text>
                <text x="60" y="63" textAnchor="middle" fontSize="15" fontFamily="var(--font-display)" fontWeight="600" fill="currentColor">
                    {sub ?? "✓"}
                </text>
            </svg>
        </div>
    );
}
