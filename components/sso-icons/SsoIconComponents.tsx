'use client'
import React from "react"
interface InteractiveLinkProps {
    href: string
    className?: string
    children: React.ReactNode
    onClickHandler: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  }
  
const SsoIconComponents: React.FC<InteractiveLinkProps>= ({ href, className, children, onClickHandler }: InteractiveLinkProps) => {
    return (
        <a href={href} onClick={onClickHandler} className={className}>
          {children}
        </a>
      )
}
export default SsoIconComponents;