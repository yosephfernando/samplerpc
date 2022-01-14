import { RequestManager, HTTPTransport, Client } from "@open-rpc/client-js";

const transport = new HTTPTransport("http://localhost:4000");
const client = new Client(new RequestManager([transport]));
const result = await client.request({method: "testmethod", params: {"firstname":"Test", "lastname":"Fernando"}});
console.log("results >>>>", result)