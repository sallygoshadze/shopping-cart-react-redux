import React from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const Item = ({ img, title, price, amount }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
        <button>remove</button>
      </div>
      <div>
        <button>
          <BsChevronUp />
        </button>
        <p>{amount}</p>
        <button>
          <BsChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Item;
