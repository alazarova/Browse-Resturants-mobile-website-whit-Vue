<template>
    <div id="profilePage">
        <div class="arrowBack" @click="backPage()"><i class="fas fa-arrow-left"></i></div>
        <h3>Profile</h3>
        <div>{{userObj.userName}}</div>
        <div>{{userObj.userEmail}}</div>
    
    <div class="wrapBtn">
        <button class="btn blueBtn" @click="editBtn()">Edit</button>
        </div>
    
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
