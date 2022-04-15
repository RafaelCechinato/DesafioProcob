import React, { useEffect, useState } from 'react';
import api from '../../config/api'
//require('dotenv').config();
var crypto = require('crypto');

function Home() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        //console.log("teste", process.env.API_BASE_URL)
        let value = "2" + "d9884e4f654cd91b57924b68cd81b70bf2975f0c" + "17a1edd92d57e5f4dd79e107a9c876d6"
        var hash = crypto.createHash('md5').update(value).digest('hex');
        const response = await api.get(`/v1/public/characters?ts=1&apikey=${'17a1edd92d57e5f4dd79e107a9c876d6'}&hash=${hash}`);
        console.log("response",response);
        //setCharacters(response.data.data);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center h-100">
                <span>Essa é a Home</span>
            </div>
        </>
    );
}

export default Home;