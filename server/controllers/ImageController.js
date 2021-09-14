const axios = require('axios')

// npm i axios in order to use this :)
// @ts-ignore
const imgApi = axios.create({
  baseURL: 'https://pixabay.com/api/?key=23389876-225a6455cb3da7bc2119f17e5',
  timeout: 10000
})

export class ImageController {
  async getImages(query = '') {
    return await imgApi.get('&q=' + query + '&image_type=photo&safesearch=true')
  }
}
