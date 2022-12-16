import fetch from "node-fetch";
import {appendItem, updateItem, token, api} from "./api.js";
import pkg from 'bluebird';

const {Promise} = pkg;

const GetFrontTranslations = () => {
    return fetch(`${api}/language/get-list?_dc=1657271932678&start=0&filter=%5B%7B%22property%22%3A%22category%22%2C%22value%22%3A%22doc%22%7D%2C%7B%22property%22%3A%22onlyUnused%22%2C%22value%22%3Afalse%7D%2C%7B%22property%22%3A%22onlyEmpty%22%2C%22value%22%3Anull%7D%5D`, {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Credentials": "true",
            "Content-Type": 'application/json;',
            Authorization: `Bearer ${token}`,
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then(res => res.json())
        .then(res => res.data)
        .catch(console.log)
}

const transformFrontTranslations = async () => {
    const translations = await GetFrontTranslations();
    const result = [];
    translations.forEach((item) => {
        result.push({
            de_translation: item.de_trans,
            en_translation: item.en_trans,
            es_translation: item.es_trans,
            it_translation: item.it_trans,
            ru_translation: item.msg,
            alias: item.msg,
        })
    })
    return result;
}

const saveFront = (translates, tag) => {
    Promise.map(translates, async (item) => {
        const res = await appendItem(item.alias)
        return updateItem(res.id, item.ru_translation, item.en_translation, item.de_translation, item.es_translation, item.it_translation, tag).then();
    },{concurrency:5})
        .then(() => {
            console.log("DONE")
        })
}

transformFrontTranslations()
    .then(res => {
        saveFront(res, [4,5]);
    })
    .catch(console.log)