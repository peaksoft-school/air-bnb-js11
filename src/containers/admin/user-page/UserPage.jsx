import React, { useEffect, useState } from 'react'

const UserPage = () => {
   const [state, setState] = useState(0)

   useEffect(() => {
      setState((prev) => prev + 1)
   }, [])
   console.log(state)

   return <div>UserPage</div>
}

export default UserPage
