import { ReactNode } from 'react'
import { ThemeColor } from '../../style/theme'
import { StyledPaper } from './styled'

type Props = {
  children: ReactNode
  rounded?: boolean
  shadow?: boolean
  bgColor?: ThemeColor
  className?: string
}

export const Paper = ({
  children,
  shadow,
  className,
  rounded = true,
  bgColor = 'background'
}: Props) => {
  return (
    <StyledPaper
      className={className}
      rounded={rounded}
      shadow={shadow}
      bgColor={bgColor}
    >
      {children}
    </StyledPaper>
  )
}
