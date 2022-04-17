import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from '../../components/Card';
import { useSelector } from 'react-redux';

function MyFavoriteCharacters() {
    const favorites = useSelector(state => state);
    return (
        <div className='overflow-x-none'>
            <div className="d-flex justify-content-start w-100 p-4">
                <Link to={'/'} className='w-100'>Voltar</Link>
            </div>
            <span className='p-4'>Meus Favoritos:</span>
            <div className='p-4 row'>
                {favorites.map((item) => (
                    <Card 
                        show={false}
                        img={item.thumbnail.path + "." + item.thumbnail.extension}
                        title={item.name}
                    />
                ))}
                {(favorites.length === 0)?
                    <span>Não foi adicionado nenhum favorito</span>
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default MyFavoriteCharacters;