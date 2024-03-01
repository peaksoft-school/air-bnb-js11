import React from 'react'
import Feedback from '../UI/Feedback'
import InnerApplication from './HouseImageSlider'

const HouseInner = () => {
   const feed = [
      {
         id: 1,
         name: 'Aizat Jelden',
         feedback:
            ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quod! Provident molestias ducimus amet aliquid adipisci possimus, facilis reiciendis dolorem velit quisquam, itaque aperiam similique excepturi quia blanditiis qui expedita voluptate autem labore doloremque dignissimos quos deserunt consectetur voluptates. Placeat quisquam, fugit possimus quae maiores laboriosam distinctio voluptas eligendi molestias error voluptatum amet, corporis pariatur praesentium numquam a deleniti vel laudantium commodi tempore nisi. Quam ipsa nemo facilis non dolor reprehenderit, blanditiis perferendis corrupti asperiores, optio dignissimos itaque aliquid, ea eaque repudiandae. Corrupti ab doloribus facere repellendus odit ipsum minima nesciunt dolorem id dolore eveniet a quod quibusdam harum, corporis blanditiis doloremque voluptate quidem enim sapiente facilis vel in. Numquam magnam dolorem asperiores, delectus ea mollitia beatae ipsa unde error molestiae, temporibus voluptas! Nobis accusamus odit itaque rem omnis quisquam distinctio eum tenetur natus, rerum in, doloribus voluptate iste vitae vero delectus ea autem, aperiam ad earum. Vero deserunt quisquam quaerat laudantium accusantium dicta ad dolorem eos. Eaque recusandae nobis porro repellendus praesentium tempora ratione tempore quaerat at hic ad mollitia eos incidunt itaque non natus voluptate, molestias sapiente iure quisquam quasi similique. Eaque aliquam iure cupiditate impedit incidunt pariatur deserunt nostrum fugit natus nobis ipsam vitae veniam corporis at ea commodi, ab, facere quod placeat iste? A sunt id nobis, suscipit explicabo aperiam cumque quisquam deleniti quo distinctio nisi maiores sequi consequuntur amet ea similique in, velit est voluptates veritatis? Ducimus maiores veniam quaerat laudantium sint corrupti, voluptas officiis ipsum neque nam autem illo accusamus enim repellat qui at eveniet cupiditate dicta placeat quia sed ad ratione blanditiis aspernatur. Tenetur expedita mollitia sit corporis vel, architecto ipsa consectetur illo, ex ut doloribus quod suscipit recusandae et officiis totam, explicabo vero commodi dolorum numquam natus! Blanditiis magni, quod corrupti ipsam deleniti veritatis natus doloribus. Sapiente exercitationem sint cupiditate sequi nam!',
         rating: 4,
         images: [],
         likes: 190,
         dislikes: 22,
         userImage: '',
         postedAt: '24.03.2023',
      },
   ]

   return (
      <div>
         <InnerApplication />
         {feed.map((item) => (
            <Feedback {...item} key={1} />
         ))}
      </div>
   )
}

export default HouseInner
