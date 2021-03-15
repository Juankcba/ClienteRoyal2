const fetch = require("node-fetch");
const SERVER = process.env.ERP_HOST || 'http://qaerpdv.preupdv.cl';
const SERVER_PORT = process.env.ERP_HOST_PORT ||  8090;

exports.get = (args = defaultArgs) => createMethod({...args},'GET')

exports.post = (args = defaultArgs) => createMethod({...args},'POST')

exports.delete = (args = defaultArgs) => createMethod({...args},'DELETE')

exports.put = (args = defaultArgs) => createMethod({...args},'PUT')

async function createMethod({path,body,headers},method){
    let strBody = JSON.stringify(body);
    const response = await fetch(`${SERVER}:${SERVER_PORT}${path}`,{
        method,
        headers : {
            'Content-Type' : 'application/json',
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Host": `${SERVER.replace('http://','').replace('https://','')}:${SERVER_PORT}`,
            "Content-Length": "746",
            "Connection": "keep-alive",
            ...headers
        },
        body : strBody
    });
    return [await response.json(),response];
}

const defaultArgs = {
    path : '',
    headers : {},
    body : {}
}