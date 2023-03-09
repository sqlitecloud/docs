import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function TerminalIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
        />
      </defs>
      <LightMode>
        <circle cx={20} cy={20} r={12} fill={`url(#${id}-gradient)`} />
        <path d="M 3.999023 17.000977 L 9.999023 11.000977 L 3.999023 5.000977 " transform="matrix(1.333333,0,0,1.333333,0,0)"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        </path>
        <path d="M 12 18.999023 L 20.000977 18.999023 " transform="matrix(1.333333,0,0,1.333333,0,0)"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </LightMode>
      <DarkMode>
        <rect width="32" height="32" rx="16" fill={`url(#${id}-gradient-dark)`} />
        <path d="M7 22.0008L14.0004 15.0004L7 8"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16.335 24.332H25.67"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </DarkMode>
    </>
  )
}
