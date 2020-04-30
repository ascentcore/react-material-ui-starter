import axios from 'axios';

export const login = payload => axios.post('/login', payload);
export const logout = () => axios.post('/logout');
export const getUser = user_id => axios.get('/users', { params: { user_id } });
