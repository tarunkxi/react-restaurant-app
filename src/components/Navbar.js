import React from 'react';

const Navbar = ({filterMenuItmes, menuLists}) => {
  return (
    <>
      <div className='row'>
            <div className=' col-md-6 mx-auto mb-4 d-flex justify-content-around'>
                <div className=' bg-light shadow-sm'>
                    {
                        menuLists.map( (currElem) => {
                            return(
                                <button type='button' className=' btn btn-light btn-lg btn-text' onClick={() => filterMenuItmes(currElem) }>{currElem}</button>
                            )
                        })
                    }
                    {/* <button type='button' className=' btn btn-light btn-lg' onClick={() => filterMenuItmes('breakfast') }>Breakfast</button>
                    <button type='button' className=' btn btn-light btn-lg' onClick={() => filterMenuItmes('lunch') }>Lunch</button>
                    <button type='button' className=' btn btn-light btn-lg' onClick={() => filterMenuItmes('evening') }>Evening</button>
                    <button type='button' className=' btn btn-light btn-lg' onClick={() => filterMenuItmes('dinner') }>Dinner</button> */}
                    {/* <button type='button' className=' btn btn-light btn-lg' onClick={() => setMenuItmes(Menu) }>All</button> */}
                </div>
            </div>
        </div>
    </>
  );
}

export default Navbar;
