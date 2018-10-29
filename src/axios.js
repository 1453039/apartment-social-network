import axios from 'axios';

var instance = axios.create({
    xsrfCookieName : 't',
    xsrfHeaderName : 'csrf-token'
})

export default instance;
