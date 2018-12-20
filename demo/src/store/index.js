import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    // vuex严格模式
    strict : true,
    // 状态json
    state : {
        count : 1,
        loading:true,
    },
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    actions:{
            // commit('UpdataCount',arg)
            async UpdateCount({commit},arg){
                // store.state.count = 10;
        
                commit('isLoading');
                let data =  await (
                    (await fetch('https://cnodejs.org/api/v1/user/yanlele?accesstoken=')).json()
                )
                commit('success',data)
                commit('UpdateCount',arg)
            }
          },
        
    // Mutation 必须是同步函数
  mutations:{
    UpdateCount (state,arg) {
        console.log(arg)
        state.count = arg;
    },
    isLoading(state){
        state.loading = false;
    },
    success(state,arg){
        state.loading = false;
    }
  }
})
