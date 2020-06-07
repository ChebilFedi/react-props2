import React from 'react';


function Image (props){
    return (
        <div className='image'>
            <img src={props.img}/>

        </div>
    )
}
export default Image;