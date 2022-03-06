import { createClient } from 'redis';
import {setData} from './redisUtils.js'
import {getTopPings} from './redisUtils.js'
import express, { json, urlencoded } from 'express';
import bodyParser from 'body-parser';
const app = express();

import Redis from 'ioredis'
const port = process.env.PORT || 3001;

import pkg from 'ping';

// const bodyParser = require('body-parser');

let redis = null;
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api', async function(req, res) {

    const client = await initDbRedis()
    
    const url = req.headers.url
    const packets = req.headers.packets
    const pingData = await doPing(url, packets)

    await setData(client, url)
    const urlData = await getTopPings(client)
  
    res.send({
        pingData: pingData,
        urlData: urlData,
    });    

    });

   

async function doPing (url, packets) {
    const data = await pkg.promise.probe(url, {timeout: 10, extra: ["-c", packets],});
    return data
  }

async function initDbRedis() {
  const client = createClient();
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
  return client

}

app.listen(port);
console.log('Server started at http://localhost:' + port);