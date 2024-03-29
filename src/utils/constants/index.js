import LivingRoom from '../../assets/images/living-room.png'
import BedRoom from '../../assets/images/bed-room.png'
import Kitchen from '../../assets/images/kitchen.jpeg'
import Holl from '../../assets/images/holl.jpeg'
import ChildRoom from '../../assets/images/child-room.jpeg'
import BathRoom from '../../assets/images/bath-room.jpg'
import HellweyRoom from '../../assets/images/hellwey-room.jpg'
import mansion from '../../assets/images/orend-hose.jpg'
import mansio2 from '../../assets/images/popular-house.jpg'

const ROOMS = [
   { img: BedRoom, name: 'bed room' },
   { img: LivingRoom, name: 'living room' },
   { img: Kitchen, name: 'kitchen' },
   { img: Holl, name: 'holl' },
   { img: ChildRoom, name: 'child room' },
   { img: BathRoom, name: 'bath room' },
   { img: HellweyRoom, name: 'hellwey room' },
]

const data = [
   {
      images: [mansion, mansion, mansion],
      price: 40,
      rating: 2,
      title: 'lorem ipsum chto-to tam',
      location: '12 Morris Ave, Toronto, ON, CA',
      guests: 3,
      isLike: true,
      blocked: true,
      newCard: false,
      id: 1,
   },
   {
      images: [mansio2],
      price: 234,
      rating: 5,
      title: 'lorem ipsum chto-to tam',
      location: '12 a Ave, Toronto, ON, CA',
      guests: 1,
      isLike: false,
      blocked: false,
      newCard: true,
      id: 2,
   },
]

export { ROOMS, data }
