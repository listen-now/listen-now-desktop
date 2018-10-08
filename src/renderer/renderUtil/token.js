import axios from 'axios';
import NodeRsa from 'node-rsa';
import { Base64 } from 'js-base64';
const pubkey =
`-----BEGIN RSA PUBLIC KEY-----
MIGJAoGBAOYm662xOVjdOzJi05ubiXnomDQcx4eZeskrAYpmAKmOGQdTfFdHHMAS
ZvJeLVcRPrS7ShtwIqvX0rmKiDTAX1yEMtytaClxQOt75e5rthmRowHKffFo2LLX
aGjozUxmvWLpZ6+T9NnHfPdgO3sKiqiWJ02uBnDjcJ4l+4j1/3VLAgMBAAE=
-----END RSA PUBLIC KEY-----`;
export default {
  getToken() {
    return new Promise((resolve, reject) => {
      axios.get('http://www.zlclclc.cn/get_token')
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
  getExistToken(signValid, token, userId = undefined) {
    return new Promise((resolve) => {
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.open('POST', 'http://www.zlclclc.cn/exist_token', true);
      xmlHttp.setRequestHeader('Content-type', 'text/plain');
      if (userId === undefined) {
        xmlHttp.send(`{"sign_valid":${signValid},"token":"${token}"}`);
      } else {
        xmlHttp.send(`{"sign_valid":${signValid},"token":"${token}","user_id":"${userId}"}`);
      }
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          resolve(xmlHttp.responseText);
        }
      };
    });
  },
  verify(val, sag) {
    val = val.substring(2, val.length - 4);
    sag = sag.substring(2, sag.length - 1);
    const key = new NodeRsa(pubkey);
    return key.verify(val, new Buffer(Base64.decode(sag)), 'utf8', 'buffer');
  },
};
