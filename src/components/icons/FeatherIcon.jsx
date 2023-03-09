import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function FeatherIcon({ id, color }) {
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
        <path d="M 20.241211 12.240234 C 22.584961 9.896484 22.584961 6.09375 20.241211 3.75 C 17.894531 1.40625 14.094727 1.40625 11.750977 3.75 L 5.000977 10.5 L 5.000977 18.999023 L 13.5 18.999023 Z M 20.241211 12.240234 " transform="matrix(1.333333,0,0,1.333333,0,0)"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        </path>
        <path d="M 15.999023 8.000977 L 2.000977 21.999023 " transform="matrix(1.333333,0,0,1.333333,0,0)"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        </path>
        <path d="M 17.499023 15 L 9 15 " transform="matrix(1.333333,0,0,1.333333,0,0)"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        </path>
      </LightMode>
      <DarkMode>
        <rect width="32" height="32" rx="16" fill={`url(#${id}-gradient-dark)`} />
        <path d="M25.1548 15.7567C27.616 13.2966 27.616 9.30513 25.1548 6.84505C22.6906 4.38498 18.7005 4.38498 16.2394 6.84505L9.15137 13.9301V22.8509H18.076L25.1548 15.7567Z"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20.6991 11.3071L6 25.9999"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M22.2743 18.6533H13.3496"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </DarkMode>
    </>
  )
}
