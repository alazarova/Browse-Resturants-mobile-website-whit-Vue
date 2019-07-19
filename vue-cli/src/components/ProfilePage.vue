<template>
    <div id="profilePage">
        <div @click="backPage()"><i class="fas fa-arrow-left"></i></div>
        <h1>Profile</h1>
        <div>{{userObj.userName}}</div>
        <div>{{userObj.userEmail}}</div>
    
        <button @click="editBtn()">Edit</button>
    
    </div>
</template>

<script>
    import {
        mapActions,
        mapState
    } from "vuex";
    import {
        ACTION_SET_OPEN_REGISTER_PAGE,
        ACTION_SET_BROWSE_RESTAURANTS,
        ACTION_SET_OPEN_PROFILE_PAGE
    } from "../store/types.js";
    
    export default {
        props: {
            userObj: Object
        },
        data() {
            return {
          
            }
        },
        computed: {
            ...mapState({
                openRegisterPage: state => state.openRegisterPage,
                openBrowseRestaurants: state => state.openBrowseRestaurants,
                openProfilePage: state => state.openProfilePage,
    
    
    
    
    
            })
        },
        methods: {
            ...mapActions({
                setopenRegisterPage: ACTION_SET_OPEN_REGISTER_PAGE,
                setopenBrowseRestaurants: ACTION_SET_BROWSE_RESTAURANTS,
                setopenProfilePage: ACTION_SET_OPEN_PROFILE_PAGE
    
            }),
    
            backPage() {
                this.setopenBrowseRestaurants(true);
                this.setopenProfilePage(false);
            },
    
            editBtn() {
                this.setopenRegisterPage(true);
                this.setopenProfilePage(false);
    
            }
        }
    }
</script>
