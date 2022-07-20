/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CardProudect from '../home/cardproudect.jsx';

import ReactPaginate from "react-paginate";

function AllProudect(props) {
  const { products , setpageCount ,perpage} = props;

   const handlePageClick = (data) => {
     let number = 1 + data.selected;
    setpageCount(number)
  };

  return (
    <section className='allproudect'>


      <div className="row">
        {products.map(item =>
          <div className="col-6 col-lg-4" key={item.id}>
            <CardProudect Image={item.image} Title={item.title} Price={item.price} Id={item.id} ClassCard={"proudects__card"} />
          </div>
        )}

      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={perpage/4}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </section>
  )
}

export default AllProudect;
