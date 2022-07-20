import React from 'react'

function Empty(props) {
    const {Image,Title ,Description}=props;
  return (
    <section className='empty-contener'>
        <h5>{Title} </h5>
        <img src={Image} alt="" />
        <p>{Description}</p>
    </section>
  )
}

export default Empty;