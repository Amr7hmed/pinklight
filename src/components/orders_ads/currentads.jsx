import axios from 'axios';
import React from 'react';
import { Api } from '../../api';
import Carditem from './Card';

function Currentads(props) {
  const {Products}=props;
  
 
  return (<div>
{Products.map(item =>
    <Carditem Image={item.images[0]} 
    Title={item.title}
      Price={item.price}
      Color={item.colors}
      Size={item.sizes}
      key={item.id}
      Status={item.ads_status}
      Id={item.id}
      />
      )}
      </div>
  )
}

export default Currentads;