export type ServiceVisualKind =
  | 'seo'
  | 'social'
  | 'ads'
  | 'email'
  | 'conversion'
  | 'application'
  | 'commerce'
  | 'frontend'
  | 'backend'
  | 'support'

interface ServiceVisualProps {
  kind: ServiceVisualKind
  label: string
}

const panel = 'fill-card stroke-border stroke-[2]'
const line = 'fill-none stroke-primary stroke-[6] stroke-linecap-round stroke-linejoin-round'

function MarketingVisual({ kind }: Pick<ServiceVisualProps, 'kind'>) {
  if (kind === 'seo') {
    return (
      <>
        <rect x="70" y="67" width="315" height="215" rx="20" className={panel} />
        <path d="M70 108h315" className="stroke-border stroke-[2]" />
        <rect x="98" y="133" width="212" height="37" rx="11" className="fill-surface" />
        <circle cx="125" cy="151" r="9" className="fill-none stroke-primary stroke-[5]" />
        <path d="m132 158 10 10" className={line} />
        <path
          d="M158 149h105M98 194h147M98 219h113M98 244h75"
          className="stroke-fg/20 stroke-[8] stroke-linecap-round"
        />
        <path
          d="M423 260V145m0 115h158m-135-25 34-42 30 18 45-70"
          className="fill-none stroke-primary stroke-[8] stroke-linecap-round stroke-linejoin-round"
        />
        <path d="m539 141h16v16" className={line} />
      </>
    )
  }
  if (kind === 'social') {
    return (
      <>
        <rect x="246" y="43" width="148" height="273" rx="25" className={panel} />
        <rect x="262" y="75" width="116" height="108" rx="14" className="fill-primary/15" />
        <circle cx="320" cy="119" r="30" className="fill-secondary/70" />
        <path d="M282 179c11-27 65-27 76 0" className="fill-primary/50" />
        <path d="M271 210h98m-98 20h74" className="stroke-fg/20 stroke-[8] stroke-linecap-round" />
        <path
          d="M275 272h31m18 0h20m18 0h11"
          className="stroke-primary stroke-[5] stroke-linecap-round"
        />
        <rect x="81" y="98" width="126" height="75" rx="16" className={panel} />
        <path
          d="M108 132h66m-66 18h46"
          className="stroke-primary/60 stroke-[8] stroke-linecap-round"
        />
        <rect x="435" y="188" width="124" height="75" rx="16" className={panel} />
        <path d="m470 226 12 11 27-29" className={line} />
        <path
          d="M208 135h38m149 94h40"
          className="stroke-primary/40 stroke-[4] stroke-dasharray-[8_8]"
        />
      </>
    )
  }
  if (kind === 'ads') {
    return (
      <>
        <rect x="70" y="68" width="320" height="223" rx="20" className={panel} />
        <rect x="97" y="96" width="124" height="22" rx="7" className="fill-primary/20" />
        <path
          d="M112 257v-70m95 70v-107m95 107v-141"
          className="stroke-primary/45 stroke-[36] stroke-linecap-round"
        />
        <circle
          cx="490"
          cy="177"
          r="84"
          className="fill-highlight/10 stroke-highlight/30 stroke-[8]"
        />
        <circle cx="490" cy="177" r="51" className="fill-none stroke-primary/60 stroke-[9]" />
        <circle cx="490" cy="177" r="17" className="fill-primary" />
        <path
          d="m538 118-27 43m27-43-8 25-20-16 28-9Z"
          className="fill-highlight stroke-highlight stroke-[2] stroke-linejoin-round"
        />
      </>
    )
  }
  if (kind === 'email') {
    return (
      <>
        <circle cx="106" cy="178" r="35" className="fill-primary/15 stroke-primary/50 stroke-[3]" />
        <circle cx="106" cy="178" r="11" className="fill-primary" />
        <path d="M142 178h87" className="stroke-primary/45 stroke-[4] stroke-dasharray-[8_8]" />
        <rect x="229" y="89" width="232" height="173" rx="21" className={panel} />
        <path
          d="m251 124 94 71 94-71M251 238l70-70m117 70-70-70"
          className="fill-none stroke-primary stroke-[5] stroke-linejoin-round"
        />
        <path d="M461 178h37" className="stroke-primary/45 stroke-[4] stroke-dasharray-[8_8]" />
        <circle
          cx="542"
          cy="216"
          r="32"
          className="fill-secondary/45 stroke-primary/35 stroke-[3]"
        />
        <path d="M542 197v20l14 8" className={line} />
      </>
    )
  }
  return (
    <>
      <path
        d="M86 84h276l-45 56H131L86 84Zm45 56h186l-44 55H175l-44-55Zm44 55h98l-30 58h-38l-30-58Z"
        className="fill-primary/15 stroke-primary/45 stroke-[3] stroke-linejoin-round"
      />
      <circle cx="224" cy="278" r="19" className="fill-primary" />
      <rect x="408" y="85" width="160" height="185" rx="20" className={panel} />
      <path
        d="M438 231v-39m35 39v-74m35 74V121"
        className="stroke-primary/55 stroke-[20] stroke-linecap-round"
      />
      <path
        d="m437 166 35-30 34 14 35-52"
        className="fill-none stroke-highlight stroke-[6] stroke-linecap-round stroke-linejoin-round"
      />
    </>
  )
}

function DevelopmentVisual({ kind }: Pick<ServiceVisualProps, 'kind'>) {
  if (kind === 'application') {
    return (
      <>
        <rect x="70" y="56" width="500" height="250" rx="21" className={panel} />
        <path d="M70 98h500" className="stroke-border stroke-[2]" />
        <rect x="95" y="120" width="104" height="163" rx="12" className="fill-surface" />
        <path
          d="M118 151h59m-59 28h43m-43 28h55"
          className="stroke-primary/45 stroke-[8] stroke-linecap-round"
        />
        <rect x="220" y="120" width="322" height="71" rx="13" className="fill-primary/10" />
        <rect x="220" y="210" width="145" height="73" rx="13" className="fill-secondary/30" />
        <rect x="385" y="210" width="157" height="73" rx="13" className="fill-primary/10" />
        <path d="M407 256h16l13-23 16 32 18-42 15 33h25" className={line} />
      </>
    )
  }
  if (kind === 'commerce') {
    return (
      <>
        <rect x="70" y="68" width="322" height="223" rx="20" className={panel} />
        <path d="M70 109h322" className="stroke-border stroke-[2]" />
        <rect x="96" y="136" width="81" height="123" rx="12" className="fill-primary/10" />
        <rect x="192" y="136" width="81" height="123" rx="12" className="fill-secondary/25" />
        <rect x="288" y="136" width="80" height="123" rx="12" className="fill-primary/10" />
        <circle cx="232" cy="176" r="30" className="fill-highlight/30" />
        <path d="M306 163h43v46h-43z" className="fill-primary/40" />
        <rect x="431" y="121" width="128" height="129" rx="21" className={panel} />
        <path d="M454 156h17l10 49h50l10-34h-64" className={line} />
        <circle cx="491" cy="225" r="7" className="fill-primary" />
        <circle cx="529" cy="225" r="7" className="fill-primary" />
      </>
    )
  }
  if (kind === 'frontend') {
    return (
      <>
        <rect x="70" y="84" width="335" height="192" rx="18" className={panel} />
        <path d="M70 118h335" className="stroke-border stroke-[2]" />
        <rect x="94" y="142" width="104" height="109" rx="10" className="fill-primary/15" />
        <path
          d="M214 153h141m-141 35h110m-110 25h83"
          className="stroke-fg/20 stroke-[9] stroke-linecap-round"
        />
        <rect x="446" y="59" width="124" height="245" rx="22" className={panel} />
        <rect x="461" y="89" width="94" height="68" rx="12" className="fill-secondary/45" />
        <path d="M461 181h94m-94 23h66" className="stroke-fg/20 stroke-[8] stroke-linecap-round" />
        <rect x="461" y="224" width="94" height="42" rx="10" className="fill-primary/15" />
      </>
    )
  }
  if (kind === 'backend') {
    return (
      <>
        <path
          d="M150 194c-46 0-48-59-10-66 11-51 93-41 94 9 38-13 63 41 30 62H150Z"
          className="fill-primary/15 stroke-primary/45 stroke-[4]"
        />
        <path
          d="M175 170h64M288 161h74"
          className="stroke-primary stroke-[7] stroke-linecap-round stroke-dasharray-[8_8]"
        />
        <rect x="361" y="92" width="156" height="161" rx="20" className={panel} />
        <ellipse
          cx="439"
          cy="126"
          rx="47"
          ry="17"
          className="fill-secondary/55 stroke-primary/45 stroke-[3]"
        />
        <path
          d="M392 126v80c0 23 94 23 94 0v-80m-94 41c0 23 94 23 94 0"
          className="fill-none stroke-primary/45 stroke-[3]"
        />
        <path d="M438 253v42" className="stroke-primary/45 stroke-[4] stroke-dasharray-[8_8]" />
        <rect
          x="365"
          y="294"
          width="149"
          height="27"
          rx="13"
          className="fill-highlight/25 stroke-highlight/45 stroke-[2]"
        />
      </>
    )
  }
  return (
    <>
      <circle cx="290" cy="180" r="107" className="fill-primary/10 stroke-primary/35 stroke-[5]" />
      <path
        d="M290 94a86 86 0 1 1-68 34"
        className="fill-none stroke-primary stroke-[12] stroke-linecap-round"
      />
      <path d="m195 126 5-33 29 17" className="fill-primary" />
      <path
        d="m250 178 27 27 57-65"
        className="fill-none stroke-primary stroke-[13] stroke-linecap-round stroke-linejoin-round"
      />
      <rect x="446" y="92" width="105" height="69" rx="16" className={panel} />
      <path
        d="M472 125h53m-53 17h35"
        className="stroke-primary/50 stroke-[7] stroke-linecap-round"
      />
      <rect x="82" y="216" width="121" height="73" rx="16" className={panel} />
    </>
  )
}

export default function ServiceVisual({ kind, label }: ServiceVisualProps) {
  const Visual = ['seo', 'social', 'ads', 'email', 'conversion'].includes(kind)
    ? MarketingVisual
    : DevelopmentVisual

  return (
    <div className="group relative aspect-video overflow-hidden rounded-5xl border border-border bg-gradient-to-br from-surface to-card p-3 shadow-soft sm:p-5">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />
      <svg
        role="img"
        aria-label={label}
        viewBox="0 0 640 360"
        className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
      >
        <Visual kind={kind} />
      </svg>
    </div>
  )
}
