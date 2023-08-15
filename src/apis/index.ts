
import API  from '@/plugins/axios'

export default {
  linkInfo: {
    postLogin(params: {query: {
      link: string,
      account: string,
      psw: string
    }}){
      return API({
        method: 'post',
        url: '/login',
        data: params.query
      })
    },
    // 获取qpm图表数据
    getDNSQPM (params: {query: {
      page?: number,
      page_size?: number,
      timestamp?: string,
      datetime__lte?: string,
      datetime__gte?: string,
      datetime_start?: string,
      datetime_end?: string
    }}) {
      return API({
        method: 'get',
        url: 'v1/dns/qpm',
        params: params.query
      })
    },
  }
}