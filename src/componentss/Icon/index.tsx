import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faInstagram,
  faGooglePlus,
  faFacebook,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import {
  faAppleWhole,
  faArrowLeft,
  faArrowRight,
  faAward,
  faBagShopping,
  faBowlFood,
  faBurger,
  faCake,
  faCarrot,
  faFish,
  faGift,
  faHeart,
  faIceCream,
  faLocationDot,
  faMagnifyingGlass,
  faMartiniGlassCitrus,
  faMinus,
  faPhone,
  faPizzaSlice,
  faPlus,
  faSeedling,
  faStar,
  faTruck,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme, ThemeColor } from '../../style/theme'

export type IconName = keyof typeof iconsMap

type Props = {
  name: IconName
  size?: SizeProp
  color?: ThemeColor
  bgColor?: ThemeColor
  className?: string
}

const iconsMap = {
  bagShopping: faBagShopping,
  arrowRight: faArrowRight,
  arrowLeft: faArrowLeft,
  star: faStar,
  phone: faPhone,
  burger: faBurger,
  pizza: faPizzaSlice,
  beverages: faMartiniGlassCitrus,
  iceCream: faIceCream,
  vegetables: faCarrot,
  fruit: faAppleWhole,
  dessert: faCake,
  sushi: faFish,
  soups: faBowlFood,
  salad: faSeedling,
  personal: faUser,
  map: faLocationDot,
  delivery: faTruck,
  award: faAward,
  bonuses: faGift,
  heart: faHeart,
  search: faMagnifyingGlass,
  plus: faPlus,
  minus: faMinus,
  twitter: faTwitter,
  instagram: faInstagram,
  googlePlus: faGooglePlus,
  facebook: faFacebook,
  linkedin: faLinkedinIn
}

export function Icon({ size, name, className, color = 'background' }: Props) {
  return (
    <FontAwesomeIcon
      className={className}
      icon={iconsMap[name]}
      color={theme.colors[color]}
      size={size}
    />
  )
}
