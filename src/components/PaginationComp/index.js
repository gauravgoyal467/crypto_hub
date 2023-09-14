import React from 'react'
import Pagination from '@mui/material/Pagination';
import './style.css'

const PaginationComp = ({page,handlePageChange}) => {
 
  const style={
    color:"var(--white)",
    '& .Mui-selected ':{
      backgroundColor:"var(--blue) !important",
      color:"var(--white)!important",
      borderColor:"var(--blue) !important"
    },
    '& .MuiPaginationItem-ellipsis':{   
      border:"0px solid var(--grey) !important"
    },
    '& .MuiPaginationItem-text':{
      color:"var(--white)",
      border:"1px solid var(--grey) "
    }
  }
 
  return (
    <div className='pagination'>
      <Pagination 
        count={10} 
        page={page} 
        onChange={(event,value)=>handlePageChange(event,value)} 
        sx={style}/>
    </div>
  );
}

export default PaginationComp;