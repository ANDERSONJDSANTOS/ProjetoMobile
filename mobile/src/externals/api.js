import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

class Api {
  base = 'http://10.0.2.2:8000';

  async login(email, password) {
    const url = `${this.base}/users/login`;
    const data = { email:email, password:password };

    const config = { withCredentials:true };
    const res = await axios.post(url, data, config);
    
    return res;
  }


  async signUp(email, name, password) {
    const url = `${this.base}/users`;
    const data = { email:email, name:name, password:password };

    const config = { withCredentials:true };
    const res = await axios.post(url, data, config);
    
    return res;
  }


  async getCategories() {
    const token = await AsyncStorage.getItem('token');
    const url = `${this.base}/tags`;

    const config = { withCredentials:true, headers:{ 'Authorization':token } };
    const res = await axios.get(url, config);

    return res;
  }


  async createCategory(name, color, icon) {
    const token = await AsyncStorage.getItem('token');
    const url = `${this.base}/tags`;
    
    const data = { name:name, icon:icon, background:color };
    const config = { withCredentials:true, headers:{ 'Authorization':token } };

    const res = await axios.post(url, data, config);
    return res;
  }


  async deletePassword(id) {
    const token = await AsyncStorage.getItem('token');
    const url = `${this.base}/passwords/${id}`;
    
    const config = { withCredentials:true, headers:{ 'Authorization':token } };
    const res = await axios.delete(url, config);

    return res;
  }


  async getPasswords() {
    const token = await AsyncStorage.getItem('token');
    const tagId = await AsyncStorage.getItem('tagId');

    const url = `${this.base}/passwords/all/${tagId}`;
    const config = { 
      withCredentials:true, 
      headers:{ 'Authorization':token }
    };

    const res = await axios.get(url, config);
    return res;
  }


  async createPassword(urlData, name, password) {
    const token = await AsyncStorage.getItem('token');
    const url = `${this.base}/passwords`;
    
    const tagId = await AsyncStorage.getItem('tagId');
    const data = { url:urlData, name:name, password:password, tagId:tagId };

    const config = { withCredentials:true, headers:{ 'Authorization':token } };
    const res = await axios.post(url, data, config);
    
    return res;
  }


  async deleteTag(id) {
    const token = await AsyncStorage.getItem('token');

    const url = `${this.base}/tags/${id}`;
    const config = { withCredentials:true, headers:{ 'Authorization':token } };

    const res = await axios.delete(url, config);
    return res;
  }
}

export default Api;