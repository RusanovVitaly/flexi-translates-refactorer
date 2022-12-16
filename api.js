import fetch from "node-fetch";


export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ1c2Fub3ZAZmxleGlsaWduZXIucnUiLCJpZCI6MjU1NCwibmFtZSI6ItCS0LjRgtCw0LvQuNC5Iiwic3VybmFtZSI6ItCg0YPRgdCw0L3QvtCyIiwicGF0cm9ueW1pYyI6IiIsInJvbGUiOiJhZG1pbiIsIm9mZmljZSI6MSwiYXV0aF9pZCI6MzY5OTE0LCJsYW5nIjoiaXQiLCJhcHBzIjpbXSwiZXhwIjoxNjU5MzcxMzE4fQ.0DG52m0Hqske7uLFWiVzErzq5qEQRWGG7unow__9a_U'

const isProd = true;
export const api = isProd?'https://api-erp.flexiligner.com':'http://api-erp.flexisoft.net';

export const appendItem = async (alias) => {
    return fetch(`${api}/translation/append-item?_dc=1656940811037`,{
        method:'POST',
        body:JSON.stringify({alias}),
        headers:{
            "Access-Control-Allow-Credentials":"true",
            "Content-Type":'application/json;',
            Authorization:`Bearer ${token}`,
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then(res=>res.json())
        .then(res=>{
            return res.data
        })
}
export const updateItem = async (id,ru_translation,en_translation,de_translation,es_translation,it_translation,tags) => {
    return fetch(`${api}/translation/update-item?_dc=1656940811037`,{
        method:'UPDATE',
        body:JSON.stringify({
            id:id,
            ru_translation:ru_translation,
            en_translation,
            de_translation,
            es_translation,
            it_translation,
            tags
        }),
        headers:{
            "Access-Control-Allow-Credentials":"true",
            "Content-Type":'application/json;',
            Authorization:`Bearer ${token}`,
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then(res=>res.json())
        .then(res=>{
            return res.data
        });
}