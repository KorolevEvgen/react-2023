import {axiosService} from './axios.service';

import {urls} from '../configs';

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),

};

export {
    carService,
};


// метод get використовують для отримання чогось
// метод post використовують для створення чогось
// метод post використовують для оновлення або зміни чогось
// метод delete використовують для видалення
