import { observable, computed, action, runInAction } from 'mobx'
import { suggest, barList, hosList, deptsList, getCommendList, CFG_PAGE } from './mockData.js'
import { getFirstLetterUpper } from '../tools/utils'

class Count {
    // cacheKey = '' // 请求 list 的 searchKey，当 searchKey 改变的时候，会 reset list，重新请求，可以说很有种的状态位了，暂时先不用
    @observable showType = 'INIT' // 显示的 ‘INIT’ 'RESULT'
    @observable suggestList = []  // 搜索建议
    @observable searchKey = '' // input 值
    @observable suggestFectched = false // 用于展示无搜索结果
    @observable resultBar = [] // 分类
    @observable resultCurrent = '' // 当前选中的分类
    // FIXME: result_xxx 也应该动态添加和删除，这是最好的方法，目前没有这么稿，因为每个 resultBar 对应的模块都需手动加（HTML CSS）
    // 推荐, 不分页
    @observable resultRecommend = {
        list: [],
        fetched: false
    }
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
                this.suggestList = Math.random() > 0.5 ? suggest : []
                this.suggestFectched = true
            })
        })
    }

    // 请求结果可选 tab
    @action
    fetchResultBar() {
        setTimeout(() => {
            runInAction(() => {
                this.resultBar = barList
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
        const { needFetch } =  this.getFetchParams(key, type)
        if(!needFetch) return
        setTimeout(() => {
            runInAction(() => {
                var list,
                    total;
                switch (key) {
                    case 'hos':
                        list = hosList
                        total = 3
                        break;
                    case 'depts':
                        list = deptsList
                        total = 2
                        break;
                    default:
                        list = getCommendList()
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
        const usedKey = getFirstLetterUpper(key)
        switch (key) {
            case 'recommend':
                break;
            default:
                this['result' + usedKey]['pager']['current'] = 1
                this['result' + usedKey]['pager']['total'] = data['total']
        }
        this['result' + usedKey]['fetched'] = true
        this['result' + usedKey]['list'] = data['list']
    }

    // 判断是翻页
    // type : init/more 业务中传的是加载更多还是第一次加载
    getFetchParams(key, type = 'init') {
        const usedKey = getFirstLetterUpper(key)
        const data = {
            needFetch: true,
            current: 1
        }
        const { fetched, pager} = this['result' + usedKey]

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

    @action
    resetList() {
        this.resultBar = []
        this.resultCurrent = ''
        this.resultRecommend.list = []
        this.resultRecommend.fetched = false
        this.resultHos.list = []
        this.resultHos.pager = Object.assign({}, CFG_PAGE)
        this.resultHos.fetched = false
        this.resultDepts.list = []
        this.resultDepts.pager = Object.assign({}, CFG_PAGE)
        this.resultDepts.fetched = false
    }
}

export default new Count()