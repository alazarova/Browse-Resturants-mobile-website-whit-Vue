import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '../store/types';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
     openLoginPage: false,
     openRegisterPage: false,
     openBrowseRestaurants: false,
     openProfilePage: false,
       
    },
    mutations: {
        [types.SET_OPEN_LOGIN_PAGE]: (state, status) => {
            state.openLoginPage = status;
        },
        [types.SET_OPEN_REGISTER_PAGE]: (state, status) => {
            state.openRegisterPage = status;
        },
        [types.SET_BROWSE_RESTAURANTS]: (state, status) => {
            state.openBrowseRestaurants = status;
        },
        [types.SET_OPEN_PROFILE_PAGE]: (state, status) => {
            state.openProfilePage = status;
        },
        
    
    },
    actions: {
        [types.ACTION_SET_OPEN_LOGIN_PAGE]: ({
            commit
        }, value) => {
            commit(types.SET_OPEN_LOGIN_PAGE, value);
        },
        [types.ACTION_SET_OPEN_REGISTER_PAGE]: ({
            commit
        }, value) => {
            commit(types.SET_OPEN_REGISTER_PAGE, value);
        },
        [types.ACTION_SET_BROWSE_RESTAURANTS]: ({
            commit
        }, value) => {
            commit(types.SET_BROWSE_RESTAURANTS, value);
        },
        [types.ACTION_SET_OPEN_PROFILE_PAGE]: ({
            commit
        }, value) => {
            commit(types.SET_OPEN_PROFILE_PAGE, value);
        }
    
    }    
});