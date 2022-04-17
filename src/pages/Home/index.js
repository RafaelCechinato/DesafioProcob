import React, { useState } from 'react';
import api from '../../config/api'
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
//require('dotenv').config();
import { connect } from 'react-redux';
var crypto = require('crypto');


function Home({ favorites, dispatch }) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCharacters = async (name) => {
        setLoading(true);
        let apikey = '17a1edd92d57e5f4dd79e107a9c876d6';
        let value = "2d9884e4f654cd91b57924b68cd81b70bf2975f0c17a1edd92d57e5f4dd79e107a9c876d6"
        var hash = crypto.createHash('md5').update(value).digest('hex');

        let url = '/v1/public/characters?ts=2&limit=100&apikey=' + apikey + '&hash=' + hash;
        if (name !== '') {
            url = url + '&nameStartsWith=' + name
        }
        const response = await api.get(url);
        setCharacters(response.data.data.results);
        setLoading(false);
    };


    function addFavorite(item) {
        return {
            type: "ADD_Favorite",
            item
        };
    }

    function removeFavorite(item) {
        return {
            type: "REMOVE_Favorite",
            item
        };
    }

    return (
        <>
            <div className="d-flex justify-content-start w-100 p-4">
                <Link to={'/meus-favoritos'} className='w-100'>Visualizar meus favoritos</Link>
            </div>
            <div className="d-flex justify-content-start align-items-center  w-100 flex-column overflow-x-none">
                <span>Olá, essa é a home</span>
                <input type="text" style={{ width: "30%" }} onChange={({ target }) => getCharacters(target.value)} placeholder="Digite o nome do personagem" />
                <div className='row justify-content-center '>
                    {characters.map((item,index) => (
                        <Card
                            show={true}
                            Key={index}
                            img={item.thumbnail.path + "." + item.thumbnail.extension}
                            title={item.name}
                            SeeMoreButtonOnClick={`/ver-mais/${item.id}`}
                            onClickFavorites={() => dispatch(addFavorite(item))}
                            isFavorite={favorites.findIndex(element => element.id === item.id) !== -1}
                            onClickRemoveFavorites={() => dispatch(removeFavorite(item))}
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