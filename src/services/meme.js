import { post, get } from './request';

export const postMeme = meme => post('http://localhost:7891/api/memes', meme);
export const getAllMemes = () => get('http://localhost:7891/api/memes');
