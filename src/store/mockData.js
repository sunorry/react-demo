export const CFG_PAGE = {
  pageSize: 10,
  current: 1,
  total: 0
}

export const suggest = ['神经病理性疼痛专病·门诊', '疼痛门诊(西区)', '疼痛与睡眠专病门诊', '疼痛科专家门诊', '功能神外疼痛专病门诊', '头痛与神经性疼痛', '疼痛科专病门诊', '麻醉疼痛科', '骨质疏松与疼痛专病门诊', '慢性疼痛疾病知名专家团队']

export const barList = [{
  text: '推荐',
  key: 'recommend'
}, {
  text: '医院',
  key: 'hos'
}, {
  text: '科室',
  key: 'depts'
}]

export const historyList = ['头痛门诊', 'DO MORE', 'Casey Neistat']

export const hosList = [{ code: 1, text: '天坛医院' }, { code: 2, text: '朝阳医院' }, { code: 3, text: '世纪坛' }, { code: 4, text: '儿童医院'} ]

export const deptsList = [{ code: 1, text: '儿科' }, { code: 2, text: '眼科' }, { code: 3, text: '世纪口腔科室坛' }, { code: 4, text: '皮肤科' }]

export function getCommendList () {
  return [{ code: 1, text: 9 }, { code: 10, text: 10 }, { code: 11, text: 11 }, { code: 12, text: Math.random() }]
}
