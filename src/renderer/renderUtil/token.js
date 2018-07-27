import axios from 'axios';
import CryptoJS from 'crypto-js';
import NodeRsa from 'node-rsa';
const jsencrypt = require("jsencrypt");
import { Base64 } from 'js-base64';
const pubkey =
`-----BEGIN RSA PUBLIC KEY-----
MIGJAoGBAOYm662xOVjdOzJi05ubiXnomDQcx4eZeskrAYpmAKmOGQdTfFdHHMAS
ZvJeLVcRPrS7ShtwIqvX0rmKiDTAX1yEMtytaClxQOt75e5rthmRowHKffFo2LLX
aGjozUxmvWLpZ6+T9NnHfPdgO3sKiqiWJ02uBnDjcJ4l+4j1/3VLAgMBAAE=
-----END RSA PUBLIC KEY-----`;
export default {
    getToken () {
        return new Promise((resolve, reject) => {
            axios.get("https://www.zlclclc.cn/get_token")
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    },
    getExistToken (sign_valid, token, user_id = undefined) {
        return new Promise((resolve, reject) => {
            if (user_id === undefined) {
                axios.post("http://zlclclc.cn/exist_token", {
                    sign_valid,
                    token
                }).then(res => resolve(res))
                  .catch(err => reject(err));
            }else {
                axios.post("http://zlclclc.cn/exist_token", {
                    sign_valid,
                    token,
                    user_id
                }).then(res => resolve(res))
                    .catch(err => reject(err));
            }
        })
    },
    verify(val, sag) {
        // let verifyer = new jsencrypt.JSEncrypt();
        // verifyer.setPublicKey(pubkey);
        console.log(val);
        console.log(sag);
        const key = new NodeRsa(pubkey);
        return key.verify(val, new Buffer(Base64.decode(sag)), 'utf8', 'buffer');
    }
}