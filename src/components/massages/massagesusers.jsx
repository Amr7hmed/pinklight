import React from 'react';

function MassagesUsers(props) {
  const {Imguser , Title} = props;
  return (
    <div className='massages__users'>
      <ul>
        <li className='active'> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
        <li> <img src={Imguser} alt="Imguser" /><span>{Title}</span></li>
      </ul>
    </div>
  )
}

export default MassagesUsers