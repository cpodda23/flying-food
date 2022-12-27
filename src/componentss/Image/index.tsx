import { ObjectFit, StyledImage } from './styled'

type Props = {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  fit?: ObjectFit
}
export const Image = (props: Props) => {
  return <StyledImage {...props} />
}
