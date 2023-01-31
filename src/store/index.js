import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        navTitle: '首页', // 导航title
    },
    mutations:{
        navfn(state,nav){
            
        }
    },
    actions:{

    },
    getters:{

    }
})

/*
    同步操作
    this.$store.commit('方法名',值)【存储】

    this.$store.state.方法名【取值】

    异步操作
    this.$store.dispatch('方法名',值)【存储】

    this.$store.getters.方法名【取值】

*/