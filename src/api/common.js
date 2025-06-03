import { request } from '@/utils/request.js'

export default {

  /**
   * 获取配置
   * @returns
   */
  getConfigs(params = {}) {
    return request({
      url: 'official/configs',
      method: 'get',
      params
    })
  },

  /**
   * articals
   * @returns
   */
  getArticals(params = {}) {
    return request({
      url: 'official/articals',
      method: 'get',
      params
    })
  },
  
  getArtical(params = {}) {
    return request({
      url: 'official/artical',
      method: 'get',
      params
    })
  },
}
