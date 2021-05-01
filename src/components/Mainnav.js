import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
      position: "fixed",
      bottom: 0,
      backgroundColor: '#2d3132',
      zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();


  useEffect(() => {
    if (value === 0)
    history.push('/')
  }, [value]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      
      <BottomNavigationAction
         style={{color:"white"}}
         label="Trending" 
         icon={<TrendingUpIcon />} 
      />
      <BottomNavigationAction 
        style={{color:"white"}}
        label="Movies" 
        icon={<LocalMoviesIcon />} 
      />
      <BottomNavigationAction 
        style={{color:"white"}}
        label="Tv Series" 
        icon={<TvIcon />} 
      />
      <BottomNavigationAction 
        style={{color:"white"}}
        label="Search" 
        icon={<SearchIcon />} 
      />
    </BottomNavigation>
  );
}
