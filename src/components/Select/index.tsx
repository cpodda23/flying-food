import { StyledSelect } from './styled'

type Props = {
  items: { name: string; id: string }[]
}

export const Select = ({ items }: Props) => {
  return (
    <StyledSelect>
      {items.map((item) => (
        <option value={item.id}>{item.name}</option>
      ))}
    </StyledSelect>
  )
}
