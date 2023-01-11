import { Size } from '../../style/theme'
import { Image } from '../Image'
import { StyledProductThumb, StyledTag } from './styled'

type Props = {
  src: string
  alt: string
  size: Size
  isNew?: boolean
}

export const ProductThumb = ({ src, alt, size = 'md' }: Props) => {
  return (
    <StyledProductThumb size={size}>
      <StyledTag title="NEW" bgColor="secondary" rounded size="sm" />
      <Image src={src} alt={alt} />
    </StyledProductThumb>
  )
}
