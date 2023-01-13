import { Button } from '../Button'
import { Image } from '../Image'
import { Input } from '../Input'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { StyledNewsletter } from './styled'

type Props = {
  onChange?: (value: string) => void
  value?: string
  onClick?: () => void
}

export const Newsletter = ({ onChange, value, onClick }: Props) => {
  return (
    <StyledNewsletter>
      <Image
        width={100}
        height={100}
        src="https://static.vecteezy.com/ti/vettori-gratis/p3/2196367-illustrazione-design-di-master-chef-logo-menu-design-per-caffe-e-ristorante-free-vector-eps-10-vettoriale.jpg"
      />
      <div className="text">
        <Text upperCase color="textInverse" variant="p" size="lg">
          subscribe
        </Text>
        <Text upperCase bold color="secondaryDark" variant="p" size="xl">
          to news
        </Text>
      </div>
      <div className="input-container">
        <Input
          bgColor="textInverse"
          placeholder="enter your email"
          value={value}
          onChange={onChange}
        />
        <Button bgColor="secondaryDark" onClick={onClick} color="textInverse">
          subscribe
        </Button>
      </div>
    </StyledNewsletter>
  )
}
