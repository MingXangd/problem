import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navTitle: '首页', // 导航title
        // state 刷新页面会变成初始值
        // 1 插件 vuex-persistedstate  
        // https://blog.csdn.net/xm1037782843/article/details/128071142

        /*
        2、利用浏览器的本地存储
        实现原理就是在浏览器执行刷新操作的时候，利用storage对vuex中的数据进行中转暂存；

        // 在页面根组件的created内进行数据中转、暂存处理；
            created(){
                // 监听浏览器刷新事件，浏览器执行刷新时，刷新之前将vuex中的数据做暂存处理；
                window.addEventListener('beforeunload',()=>{
                localStorage.setItem('store',JSON.stringify(this.$store.state));
                })
                // 刷新完成后会再次执行created等生命周期，所以这里判断如果本地存储内有对应数据则直接对vuex进行赋值处理
                if(localStorage.getItem('store')){
                // 注意：单纯的使用JSON.parse(JSON.stringify(...))会报错，所以此处使用replaceState进行赋值
                this.$store.replaceState(Object.assign({},JSON.parse(localStorage.getItem('store'))));
                // 这里赋值之后及时清除本地存储内的数据，以免暴露某些敏感数据
                localStorage.removeItem('store');
                };
            },
        */
    },
    mutations: {
        navfn(state, nav) {
            state.navTitle = nav
            //this.$store.commit('navfn',aaa) 
        }
    },
    actions: {
        asycnnav(content, navnum) {
            content.commit('navfn', navnum)
            //this.$store.dispatch('asycnnav',aaa)
        }
    },
    getters: {

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