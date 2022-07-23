import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import DraftsIcon from '@mui/icons-material/Drafts';

function Category(props) {
  return (
    // <div className="category">
    //   <div className="category__icon">{props.icon}</div>
    //   <div className="category__text">{props.title}</div>
    // </div>

    <ListItemButton style={{ padding: ' 5px 25px' }}>
      <ListItemIcon style={{ minWidth: 46 }}>{props.icon}</ListItemIcon>
      <ListItemText primary={props.title} style={{ fontSize: 14 }} />
    </ListItemButton>
  );
}

export default Category;
