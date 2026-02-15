import { cn } from '@/lib/utils'

interface EnsoIconProps {
  className?: string
  size?: number
}

/**
 * Enso circle + serif "e" icon.
 * Inline SVG that uses `currentColor` so it inherits theme colors
 * from its parent, just like a regular icon component.
 *
 * Variable-pressure brushstroke circle with centered EB Garamond "e".
 */
export function EnsoIcon({ className, size = 20 }: EnsoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block shrink-0', className)}
      role="img"
      aria-hidden="true"
    >
      {/* Core stroke */}
      <path
        d="M 20 5.5 C 25 7, 28 10.5, 28.5 16 C 29 21.5, 27 26.5, 23 28.5 C 19 30.5, 13.5 30.5, 9.5 28.2 C 5.5 26, 3 22, 3 17 C 3 12, 5.5 8, 9.8 6.2 C 13 4.7, 16 4.7, 17.5 5.2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Heavy pressure — left downstroke */}
      <path
        d="M 9.5 28.2 C 5.5 26, 3 22, 3 17 C 3 12, 5.5 8, 9.8 6.2"
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Bottom arc */}
      <path
        d="M 23 28.5 C 19 30.5, 13.5 30.5, 9.5 28.2"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Right upstroke */}
      <path
        d="M 28 10.5 C 28.5 14, 29 18.5, 28.5 21.5 C 28 24.5, 26 27, 23 28.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Serif e */}
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'EB Garamond', 'Georgia', serif"
        fontSize="16"
        fontWeight="500"
      >
        e
      </text>
    </svg>
  )
}
