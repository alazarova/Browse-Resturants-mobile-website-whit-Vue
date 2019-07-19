<template>
    <div id="homePage">
        <h1>CITYGUIDE</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <button @click="clickLoginBtn()" type="submit">Login</button>
        <button @click="clickRegisterBtn()" type="submit">Register</button>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import {
    ACTION_SET_OPEN_LOGIN_PAGE,
    ACTION_SET_OPEN_REGISTER_PAGE
  } from "../store/types.js";
    export default {
        data() {
            return {
    
            }
        },
        methods: {
            ...mapActions({
                setopenLoginPage: ACTION_SET_OPEN_LOGIN_PAGE,
                setopenRegisterPage: ACTION_SET_OPEN_REGISTER_PAGE

            }),
            clickLoginBtn(){
                // console.log("this login");
                return this.setopenLoginPage(true);
            },
             clickRegisterBtn(){
                 return this.setopenRegisterPage(true);
            }
        }
    
    }
</script>

<style>
    
</style>
