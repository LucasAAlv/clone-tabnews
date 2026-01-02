import { Client } from 'pg'


async function querySearch( query ){
  const client = new Client({
    host:  process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database : process.env.POSTGRES_DB,
    user : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PASSWORD
  });
  await client.connect()
  
  const res = await client.query(query)
  
  await client.end();

  return res;
  
}


export default {
  query: querySearch,
}