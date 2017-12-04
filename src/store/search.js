import { observable, computed, action, runInAction } from 'mobx'

const CFG_PAGE = {
    pageSize: 10,
    current: 1,
    total: 0
}

class Count {
    @observable showType = 'INIT' // 显示的 ‘INIT’ 'RESULT'
    @observable suggestList = []  // 搜索建议
    @observable searchKey = '' // input 值
    @observable suggestFectched = false // 用于展示无搜索结果
    @observable resultBar = [] // 分类
    @observable resultCurrent = '' // 当前选中的分类
    // FIXME: result_xxx 也应该动态添加和删除，这是最好的方法，目前没有这么稿，因为每个 resultBar 对应的模块都需手动加（HTML CSS）
    // 推荐, 不分页
    @observable result_recommend = {
        list: [],
        fetched: false
    }
    // 医院
    @observable result_hos = {
        list: [],
        pager: Object.assign({}, CFG_PAGE),
        fetched: false
    }
    // 科室
    @observable result_depts = {
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
    // FIXME: 之所以点击判断放在这里
    // 1. 组件不做判断
    // 2. 上面成立的情况下，下面的请求写在这里就有点恶心了。。。。
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
                this.fetchResultList(this.resultCurrent)
            })
        }, 200)
    }

    // 请求tab对应列表
    @action
    fetchResultList(key, type) {
        // TODO: 1. 添加缓存逻辑，如果某个 searchKey 已经请求过，直接显示
        //  2. 添加分页逻辑判断，如果已经是最后一页直接 return，推荐模块不分页
        // getFetchParams
        const { needFetch, current } =  this.getFetchParams(key, type)
        if(!needFetch) return
        setTimeout(() => {
            runInAction(() => {
                var list,
                    total;
                switch (key) {
                    case 'hos':
                        list = [{ code: 1, text: '天坛医院' }, { code: 2, text: '朝阳医院' }, { code: 3, text: '世纪坛' }, { code: 4, text: '儿童医院'} ]
                        total = 3
                        break;
                    case 'depts':
                        list = [{ code: 1, text: '儿科' }, { code: 2, text: '眼科' }, { code: 3, text: '世纪口腔科室坛' }, { code: 4, text: '皮肤科' }]
                        total = 2
                        break;
                    default:
                        list = [9, 10, 11, 12]
                }
                this.setListData(key, {
                    list,
                    total
                })
            }, 1000)
        })
    }

    @action
    setListData(key = 'recommend', data) {
        switch (key) {
            case 'recommend':
                break;
            default:
                this['result_' + key]['pager']['current'] = 1
                this['result_' + key]['pager']['total'] = data['total']
        }
        this['result_' + key]['fetched'] = true
        this['result_' + key]['list'] = data['list']
    }

    // 判断是翻页
    // type : init/more 业务中传的是加载更多还是第一次加载
    getFetchParams(key, type = 'init') {
        const data = {
            needFetch: true,
            current: 1
        }
        const { fetched, pager} = this['result_' + key]

        if(type === 'init') {
            if(fetched) {
                data.needFetch = false
            }
        } else {
            if (pager) {
                if (pager.pageSize * pager.current < pager.total) {
                    data.current = pager.current + 1
                } else {
                    data.needFetch = false
                }
            }
        }

        return data
    }
}

export default new Count()