import React from 'react';

const Menucards = ({menuItems}) => {
    console.log(menuItems);
  return (
    <>
      <div className=' row'>
            {
                menuItems.map( (elem) => {
                    const {id, imgUrl, category, name, description, price} = elem;
                    return(
                        <div className='col-md-4 mb-4' key={id}>
            <div className=' card'>
            
                <div className=' card-body'>
                    <div className='num-circle mb-2 shadow-sm'>{id}</div>
                    <div className=' mb-2'>{category}</div>
                    <h5 className=' mb-2'>{name}</h5>
                    <p className="card-text">{description}</p>
                    <img src={imgUrl} className="card-img-top img-fluid" />
                    <div className=' d-flex justify-content-between align-items-center'>
                        <div className=' fw-bold mt-2'>{price}</div>
                        <div><a href="#" className="btn btn-primary mt-4">Order Now</a></div>
                    </div>
                    
                </div>
            </div>
        </div>
                    )

                })
            }
        
        
        </div>
    </>
  );
}

export default Menucards;
