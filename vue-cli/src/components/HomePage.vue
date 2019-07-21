<template>
    <div id="homePage">
        <h1>Cityguide</h1>
        <p> Explore the best places of the world's 
most vibrant cities!</p>
<div class="wrapBtn">
        <div class="btn whiteBtn" @click="clickLoginBtn()" type="submit">Login</div>
        <div class="btn blueBtn" @click="clickRegisterBtn()" type="submit">Register</div>
        </div>
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
