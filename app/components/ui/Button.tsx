import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'glass' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-[transform,background-color,box-shadow,border-color,filter] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-highlight text-highlight-fg shadow-glow hover:-translate-y-0.5 hover:brightness-[1.08]',
  glass:
    'border border-white/25 bg-white/10 text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/20',
  outline: 'border border-border bg-card text-fg hover:border-primary hover:text-primary',
  ghost: 'text-fg-muted hover:bg-card hover:text-fg',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function buttonClass(variant: Variant = 'primary', size: Size = 'md', className = '') {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className = '', type = 'button', ...props },
  ref,
) {
  return <button ref={ref} type={type} className={buttonClass(variant, size, className)} {...props} />
})

export default Button

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  size?: Size
}

export function ButtonLink({ variant = 'primary', size = 'md', className = '', ...props }: ButtonLinkProps) {
  return <a className={buttonClass(variant, size, className)} {...props} />
}
