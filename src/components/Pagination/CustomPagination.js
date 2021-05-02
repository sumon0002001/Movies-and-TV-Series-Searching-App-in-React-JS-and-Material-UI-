import Pagination from '@material-ui/lab/Pagination';


const CustomPagination = ({setPage, numberOfPages = 10}) => {

  const handlePagechange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  }
  return (
      <div>
         <Pagination 
         count = {numberOfPages}
         onChange = {(e) => handlePagechange(e.target.textContent)} 
         />
      </div>
  )
}

export default CustomPagination;
