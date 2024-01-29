import mansion from '../../assets/images/hotel-mansion-img-2.jpg'
import mansio2 from '../../assets/images/hotel-mansion-img-3.jpg'

export const data = [
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
   },
]

export const RATINGS = [
   { label: 5, progress: 30 },
   { label: 4, progress: 12 },
   { label: 3, progress: 44 },
   { label: 2, progress: 2 },
   { label: 1, progress: 53 },
]
