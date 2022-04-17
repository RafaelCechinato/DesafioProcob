import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function MyFavoriteCharacters() {
    const favorites = useSelector(state => state);
    return (
        <>
            <div className="d-flex justify-content-start w-100 p-4">
                <Link to={'/'} className='w-100'>Voltar</Link>
            </div>
            <span className='p-4'>Meus Favoritos:</span>
            <div className='p-4'>
                {favorites.map((item) => (
                    <div className='row mt-2'>
                        <div className='col-2'>
                            <img src={item.thumbnail.path + "." + item.thumbnail.extension} className='w-100 img-fluid' alt="" />
                        </div>
                        <div className='col-6'>
                            <span className=''>Nome: {item.name}</span>
                        </div>
                    </div>
                ))}
                {(favorites.length === 0)?
                    <span>Não foi adicionado nenhum favorito</span>
                    :
                    <></>
                }
            </div>
        </>
    );
}

export default MyFavoriteCharacters;