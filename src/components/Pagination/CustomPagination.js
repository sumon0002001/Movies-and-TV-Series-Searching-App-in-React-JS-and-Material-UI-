import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Palette } from '@material-ui/icons';
import Pagination from '@material-ui/lab/Pagination';


const darkTheme = createMuiTheme ({
  Palette: {
    type: 'dark'
  },
})


const CustomPagination = ({setPage, numberOfPages = 10}) => {

  const handlePagechange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  }
  return (
      <div
         style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }} 
      >
        <ThemeProvider theme={darkTheme} >
        <Pagination 
         count = {numberOfPages}
         onChange = {(e) => handlePagechange(e.target.textContent)} 
         color="primary"
         hideNextButton
         hidePrevButton
         />

        </ThemeProvider>
         
      </div>
  )
}

export default CustomPagination;
