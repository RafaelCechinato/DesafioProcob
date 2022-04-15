import React from 'react';


export function Card(props) {

    return (
        <>
            <div key={props.key} className={`card d-flex col-lg-2 p-3 m-2 border-radius-10`}>
                <div className="">
                    <img src={props.img} className='w-100 img-fluid' alt="" />
                </div>
                <div className="mt-2">
                    <span>{props.title}</span>
                </div>
                <div className='d-flex text-align-center align-items-end h-100'>
                    <a href={props.SeeMoreButtonOnClick} className='w-100'>Ver mais</a>
                </div>
            </div>
        </>
    );
}

