// import axios from 'axios';
// import { store } from './store/store';
// import router from '../router/index';


// function errorHandler(errorCallback, error) {
//     if (errorCallback && error.response.status != 400) {
//         errorCallback(error);
//         return;
//     }
// }

// export default {
//     get: function (url, successCallback, errorCallback) {
//         instance.get(appSettings.apiUrl + url, { responseType: 'arraybuffer' })
//             .then(function (response) {
//                 spinner.stop();
//                 if (successCallback) {
//                     try {
//                         successCallback(response);
//                     } catch (error) {
//                         console.error(error)
//                     }
//                 }
//             }).catch(function (error) {
//                 spinner.stop();
//                 try {
//                     errorHandler(errorCallback, error);
//                 } catch (error) {
//                     console.error(error)
//                 }
//             })
//     },
// }