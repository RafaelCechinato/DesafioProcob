import React from 'react';
import { Link } from 'react-router-dom';

export function Card(props) {

    return (

        <div key={props.Key} className={`card d-flex col-lg-2 p-3 m-2 border-radius-10`}>
            <div className="">
                <img src={props.img} style={{ maxHeight: "168px" }} className='w-100 img-fluid' alt="" />
            </div>
            <div className="my-2">
                <span>{props.title}</span>
            </div>
            <div className='d-flex justify-content-center align-items-end h-100 my-2'>
                {(props.isFavorite === true) ?
                    <button onClick={props.onClickRemoveFavorites} className='border-0'>Remover personagem como favorito</button>
                    :
                    <button onClick={props.onClickFavorites} className='border-0'>Favoritar personagem</button>
                }
            </div>
            <div className='d-flex text-align-center align-items-end  mt-3'>
                <Link to={props.SeeMoreButtonOnClick} className='w-100'>Ver mais</Link>
            </div>
        </div>
    );
}

