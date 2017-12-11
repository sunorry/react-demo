// 数据配置

export const HISTORY_LIST = [{
  key: 'a1',
  text: '口腔医院'
},
  {
    key: 'a2',
    text: '安贞医院'
  }]

export const SUGGEST_LIST = ['swx', 'sunorry', 'tingker']

export const BAR_List = [{
  text: '推荐',
  key: 'recommend'
}, {
  text: '医院',
  key: 'hos'
}, {
  text: '科室',
  key: 'depts'
}]

export const HOS_LIST = [{ key: 1, text: '天坛医院' }, { key: 2, text: '朝阳医院' }, { key: 3, text: '世纪坛' }, { key: 4, text: '儿童医院'} ]

export const DETPS_List = [{ key: 1, text: '儿科' }, { key: 2, text: '眼科' }, { key: 3, text: '世纪口腔科室坛' }, { key: 4, text: '皮肤科' }]

export function getRecommendList () {
  return [{ key: 1, text: 9 }, { key: 10, text: 10 }, { key: 11, text: 11 }, { key: 12, text: Math.random() }]
}
