import React from 'react';

function CategorySmall(props) {
  return (
    <div className="category-small">
      <div className="category-small__icon">{props.icon}</div>
      <div className="category-small__text">{props.title}</div>
    </div>
  );
}

export default CategorySmall;
