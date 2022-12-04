require("dotenv").config();
const axios = require('axios');

const {INSTAGRAM_APP_ID, INSTAGRAM_APP_SECRET, REDIRECT_URI} = process.env;

exports.authorize = async (req, res, next) => {
    console.log(INSTAGRAM_APP_ID, INSTAGRAM_APP_SECRET, REDIRECT_URI);
    try{
        console.log('if block');
        const response = await axios.get(getAuthUrl());
        console.log(response);
    } catch(err){
        console.log('error block');
        console.log(err);
    }
}

const getAuthUrl = () => {
    console.log(INSTAGRAM_APP_ID, INSTAGRAM_APP_SECRET, REDIRECT_URI);
    let url = new URL("https://api.instagram.com/oauth/authorize");
    url.searchParams.set('client_id', INSTAGRAM_APP_ID);
    url.searchParams.append('redirect_uri', REDIRECT_URI);
    url.searchParams.append('scope', 'user_profile,user_media');
    url.searchParams.append('response_type', 'code');
    return url;
}