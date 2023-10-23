import {axiosService} from './axios.service';
import {urls} from '../configs'

const postService = {
    getPosts: (userID) => axiosService.get(`${urls.posts}/?userId=${userID}`),
};

export {
    postService,
};
