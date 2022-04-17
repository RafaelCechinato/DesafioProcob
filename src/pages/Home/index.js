import React, { useState } from 'react';
import api from '../../config/api'
import { Card } from '../../components/Card';
//require('dotenv').config();
import {connect} from 'react-redux';
var crypto = require('crypto');


function Home( {favorites, dispatch}) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCharacters = async (name) => {
        setLoading(true);
        let value = "2d9884e4f654cd91b57924b68cd81b70bf2975f0c17a1edd92d57e5f4dd79e107a9c876d6"
        var hash = crypto.createHash('md5').update(value).digest('hex');
        const response = await api.get(`/v1/public/characters?ts=2&limit=100&apikey=${'17a1edd92d57e5f4dd79e107a9c876d6'}&hash=${hash}&nameStartsWith=${name}`);
        setCharacters(response.data.data.results);
        setLoading(false);
    };

    function addFavorite (item) {
        console.log("favorites",favorites);
        return {
            type: "ADD_Favorite",
            item
        };
    }

    return (
        <>
            <div className="d-flex justify-content-start align-items-center  w-100 flex-column mt-5 overflow-x-none">
                <span>Essa é a Home</span>
                <a href={'/meus-favoritos'} className='w-100'>Visualizar meus favoritos</a>
                <input type="text" onChange={({ target }) => getCharacters(target.value)} placeholder="Digite o nome do personagem" />
                <div className='row justify-content-center '>
                    {characters.map((item, index) => (
                        <Card
                            key={index}
                            img={item.thumbnail.path + "." + item.thumbnail.extension}
                            title={item.name}
                            SeeMoreButtonOnClick = {`/ver-mais/${item.id}`}
                            onClickFavorites={() => dispatch(addFavorite(item))}
                            isFavorite={favorites.findIndex( element => element.id === item.id) !== -1}
                            //onClickRemoveFavorites ={}
                        />
                    ))}
                    {(loading === true) ?
                        <span>Carregando ....</span>
                        :
                        ""
                    }
                </div>
            </div>
        </>
    );
}

export default connect(state => ({ favorites: state }))(Home);