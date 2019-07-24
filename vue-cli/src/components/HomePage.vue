<template>
    <div id="homePage">
        <div class="container">
            <h1>Cityguide</h1>
            <p> Explore the best places of the world's most vibrant cities!</p>
            <div class="wrapBtn">
                <div class="btn whiteBtn" @click="clickLoginBtn()">Login</div>
                <div class="btn blueBtn" @click="clickRegisterBtn()">Register</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapActions
    } from "vuex";
    import {
        ACTION_SET_OPEN_LOGIN_PAGE,
        ACTION_SET_OPEN_REGISTER_PAGE
    } from "../store/types.js";
    export default {
        methods: {
            ...mapActions({
                setopenLoginPage: ACTION_SET_OPEN_LOGIN_PAGE,
                setopenRegisterPage: ACTION_SET_OPEN_REGISTER_PAGE
            }),
            clickLoginBtn() {
                return this.setopenLoginPage(true);
            },
            clickRegisterBtn() {
                return this.setopenRegisterPage(true);
            }
        }
    }
</script>

<style scoped>
    #homePage {
        background: #2196f3;
    }
    
    #homePage .container {
        height: 100%;
        justify-content: flex-end;
    }
    
    #homePage p {
        margin: 6em 0;
    }
</style>
