import * as io from 'socket.io-client'
import axios from './axios';
let socket;


export function getSocket(){
    console.log("socket console");
    if(socket){
        return socket
    }
    socket = io.connect();
    socket.on('connect', function(){
        axios.get(`/connected/${socket.id}`)
    })
    return socket
}
