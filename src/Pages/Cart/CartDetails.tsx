import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { SectionTitle } from '../../components/SectionTitle'
import { StyledCartDetails } from './styled'

export const CartDetails = () => {
  return (
    <div>
      <SectionTitle main="cart" secondary="details" />
      <StyledCartDetails>
        <Input
          bgColor="secondary"
          label="Name"
          labelColor="textInverse"
          placeholder="First Name"
          placeholderColor="text"
        />
        <Input
          bgColor="secondary"
          label="Surname"
          labelColor="textInverse"
          placeholder="Last Name"
          placeholderColor="text"
        />

        <Input bgColor="secondary" label="Card number" labelColor="textInverse" />
        <Input
          bgColor="secondary"
          label="Data"
          labelColor="textInverse"
          placeholder="MM"
          placeholderColor="text"
        />
        <Input
          bgColor="secondary"
          label="Data"
          labelColor="textInverse"
          placeholder="YYYY"
          placeholderColor="text"
        />
        <Input
          bgColor="secondary"
          label="Code"
          labelColor="textInverse"
          placeholder="XXX"
          placeholderColor="text"
        />

        <Button bgColor="text" color="textInverse">
          check out
        </Button>
      </StyledCartDetails>
    </div>
  )
}
