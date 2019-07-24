<template>
    <div id="profilePage">
    
        <div class="header">
            <div class="arrowBack" @click="backPage()"><i class="fas fa-arrow-left"></i></div>
            <h3>Profile</h3>
        </div>
    
        <div class="container">
            <div class="profileData">
                <div><i class="far fa-user"></i> <span>{{userObj.userName}}</span></div>
                <div><i class="far fa-envelope"></i> <span>{{userObj.userEmail}}</span></div>
            </div>
    
            <div class="wrapBtn">
                <div class="btn blueBtn" @click="editBtn()">Edit</div>
            </div>
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

<style>
    .header {
        align-items: flex-start;
    }
    
    .profileData {
        color: #b5b5b5;
        text-align: left;
        padding-top: 3em;
    }
    
    .profileData div {
        line-height: 5em;
    }
    
    .profileData span {
        color: #1e1e1e;
    }
</style>

