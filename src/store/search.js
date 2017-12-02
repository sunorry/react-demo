import { observable, computed, action, runInAction } from 'mobx'

class Count {
    @observable showType = 'INIT' // 显示的 ‘INIT’ 'RESULT'
    @observable suggestList = []  // 搜索建议
    @observable searchKey = '' // input 值
    @observable suggestFectched = false // 用于展示无搜索结果

    @computed get showHistory() {
        return this.suggestList.length && this.searchKey.length
    }

    @computed get showNoSuggest() {
        return this.suggestFectched && !this.suggestList.length && this.searchKey.length
    }

    @action
    setSearchKey(key) {
        this.searchKey = key
    }

    @action
    setShowType(type = 'INIT') {
        this.showType = type
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

    @action
    syncSearchKey(searchKey) {
        this.searchKey = searchKey
    }
}

export default new Count()