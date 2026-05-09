import type { CSSProperties } from 'react'

const Arrow = ({ side }: { side: 'left' | 'right' }) => (
  <svg
    className={`flow-arrow-${side}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

interface FlowBtnProps {
  href?: string
  children: React.ReactNode
  className?: string
  style?: CSSProperties
  type?: 'button' | 'submit'
}

export default function FlowBtn({
  href,
  children,
  className = '',
  style,
  type = 'button',
}: FlowBtnProps) {
  const inner = (
    <>
      <Arrow side="left" />
      <span className="flow-text">{children}</span>
      <span className="flow-circle" />
      <Arrow side="right" />
    </>
  )

  const cls = `flow-btn${className ? ` ${className}` : ''}`

  if (href) return <a href={href} className={cls} style={style}>{inner}</a>
  return <button type={type} className={cls} style={style}>{inner}</button>
}
