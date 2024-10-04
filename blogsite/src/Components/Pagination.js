import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';


const Pagination = () => {
  const{page,handlepagechange,totalpage} =useContext(AppContext);
  return (
    <div>
      <div>
      { page>1 && 
        (<button onClick={()=> handlepagechange(page-1)}>  
          Previous
        </button>)
      }
      {
        page<totalpage &&
        (<button onClick={()=> handlepagechange(page+1)}>
          Next
        </button>)

      }
      <p>
     page {page} of {totalpage}
      </p>
    </div>
    </div>
  )
}

export default Pagination
