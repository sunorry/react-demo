import { observable, computed, action, runInAction } from 'mobx'

const CFG_PAGE = {
    current: 0,
    total: 0
}

class Count {
    @observable showType = 'INIT' // 显示的 ‘INIT’ 'RESULT'
    @observable suggestList = []  // 搜索建议
    @observable searchKey = '' // input 值
    @observable suggestFectched = false // 用于展示无搜索结果
    @observable resultBar = [] // 分类
    @observable resultCurrent = '' // 当前选中的分类
    // 推荐, 不分页
    @observable resultRecommend = []
    // 医院
    @observable resultHos = {
        list: [],
        pager: Object.assign({}, CFG_PAGE),
        fetched: false
    }
    // 科室
    @observable resultDepts = {
        list: [],
        pager: Object.assign({}, CFG_PAGE),
        fetched: false
    }

    @computed get showHistory() {
        return this.suggestList.length && this.searchKey.length
    }

    @computed get showNoSuggest() {
        return this.suggestFectched && !this.suggestList.length && this.searchKey.length
    }

    // 同步输入框内容 | 点击建议或者历史同步内容
    @action
    syncSearchKey(searchKey) {
        this.searchKey = searchKey
    }

    @action
    setShowType(type = 'INIT') {
        this.showType = type
    }

    // 点击 ResultBar
    @action
    setResultCurrent(key) {
        if(this.resultCurrent !== key) {
            this.resultCurrent = key
            this.fetchResultList(key)
        }
    }

    @action
    fetchSuggest(searchKey) {
        if(!this.searchKey) return
        setTimeout(() => {
            runInAction(() => {
                this.suggestList = Math.random() > 0.5 ? ['神经病理性疼痛专病·门诊', '疼痛门诊(西区)', '疼痛与睡眠专病门诊', '疼痛科专家门诊', '功能神外疼痛专病门诊', '头痛与神经性疼痛', '疼痛科专病门诊', '麻醉疼痛科', '骨质疏松与疼痛专病门诊', '慢性疼痛疾病知名专家团队'] : []
                console.log(this.suggestList.length)
                this.suggestFectched = true
            })
        })
    }

    // 请求结果可选 tab
    @action
    fetchResultBar() {
        setTimeout(() => {
            runInAction(() => {
                this.resultBar = [{
                    text: '推荐',
                    key: 'recommend'
                }, {
                    text: '医院',
                    key: 'hos'
                }, {
                    text: '科室',
                    key: 'depts'
                }]
                this.resultCurrent = this.resultBar[0]['key']
                this.fetchResultList()
            })
        }, 200)
    }

    // 请求tab对应列表
    @action
    fetchResultList(type) {
        // TODO: 1. 添加缓存逻辑，如果某个 searchKey 已经请求过，直接显示
        // TODO: 2. 添加分页逻辑判断，如果已经是最后一页直接 return，推荐模块不分页
        // getFetchParams
        setTimeout(() => {
            runInAction(() => {
                switch (type) {
                    case 'hos':
                        this.resultHos.list = [{ code: 1, text: '天坛医院' }, { code: 2, text: '朝阳医院' }, { code: 3, text: '世纪坛' }, { code: 4, text: '儿童医院'} ]
                        this.resultHos.pager.current = 1
                        this.resultHos.pager.total = 3
                        this.resultHos.fetched = true
                        return
                    case 'depts':
                        this.resultDepts.list = [{ code: 1, text: '儿科' }, { code: 2, text: '眼科' }, { code: 3, text: '世纪口腔科室坛' }, { code: 4, text: '皮肤科' }]
                        this.resultDepts.pager.current = 1
                        this.resultDepts.total = 2
                        this.resultDepts.fetched = true
                        return
                    default:
                        this.resultRecommend = [9, 10, 11, 12]
                }
            }, 1000)
        })
    }
}

export default new Count()