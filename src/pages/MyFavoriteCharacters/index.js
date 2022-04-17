import React from 'react';
import { useSelector } from 'react-redux';

function MyFavoriteCharacters() {
    const favorites = useSelector(state => state);
    console.log("favorites",favorites)
    return (
        <>
            <div className="d-flex justify-content-start w-100 p-3">
                <a href={'/'} className='w-100'>Voltar</a>
            </div>
            <span>Meus Favoritos:</span>
            {favorites.map((item) => (
                <li>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={item.path + "." + item.thumbnail.extension} className='w-100 img-fluid' alt="" />
                        </div>
                        <div className='col-10'>
                            <span className='d-block'>Nome: {item.name}</span>
                        </div>
                    </div>
                </li>
            ))}

        </>
    );
}

export default MyFavoriteCharacters;