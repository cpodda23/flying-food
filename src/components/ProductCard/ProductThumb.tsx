import { Size } from '../../style/theme'
import { Image } from '../Image'
import { StyledProductThumb, StyledTag } from './styled'

type Props = {
  src: string
  alt: string
  size: Size
  isNew: boolean
}

export const ProductThumb = ({ src, alt, size = 'md', isNew }: Props) => {
  return (
    <StyledProductThumb size={size}>
      {isNew ? <StyledTag title="NEW" bgColor="secondary" size="sm" /> : null}
      <Image src={src} alt={alt} />
    </StyledProductThumb>
  )
}
