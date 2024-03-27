import React from 'react'

const SearchNotFound = ({ searchText }) => {
   return (
      <div>
         <h3>Results for &quot;{searchText}&quot;</h3>
         <p>
            It appears that no listings have yet been created for{' '}
            <span>&quot;{searchText}&quot;</span>.
         </p>
         <p>
            Be the first person to create a <span>listing in this area</span>!
         </p>
      </div>
   )
}

export default SearchNotFound
