<template>
  <div id="app">
    <home-page v-if="!openLoginPage && !openRegisterPage && !openBrowseRestaurants && !openProfilePage"></home-page>
    <login-page v-if="showLogin" @user-data="userData"></login-page>
    <register-page v-if="showRegister" :userObj="userObj"></register-page>
    <browse-restaurants v-if="openBrowseRestaurants"></browse-restaurants>
    <profile-page v-if="openProfilePage" :userObj="userObj"></profile-page>
  </div>
</template>

<script>
  import homePage from "./components/HomePage"
  import loginPage from "./components/LoginPage";
  import registerPage from "./components/RegisterPage";
  import browseRestaurants from "./components/BrowserRestaurants";
  import profilePage from "./components/ProfilePage";

  import {mapState} from "vuex";

  export default {
    name: 'app',
    data() {
      return {
           userObj: {}

      }
      
    },
     computed: {
      ...mapState({
        openLoginPage: state => state.openLoginPage,
        openRegisterPage: state => state.openRegisterPage,
        openBrowseRestaurants: state => state.openBrowseRestaurants,
        openProfilePage: state => state.openProfilePage,
      }),
      showLogin(){
        if(this.openLoginPage && !this.openBrowseRestaurants && !this.openProfilePage){
          return true;
        }return false;
      },
      showRegister(){
        if(this.openRegisterPage && !this.openBrowseRestaurants && !this.openProfilePage && !this.openLoginPage){
     
          return true
        }
    
        return false;
      }
    },
    methods:{
      userData(user){
        this.userObj= user;
        console.log(this.userObj.userEmail);
      }
    },
    components: {
      loginPage,
      registerPage,
      homePage,
      browseRestaurants,
      profilePage
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: #fff;
    width: 25em;
    height: 40em;
    box-shadow: 0 0 1em grey;
    margin: 1em auto;
    display: flex;
    flex-flow: column wrap;
    background: #2196f3;
        position: relative;

  }
  h1{
    font-family: 'Pacifico', cursive;
        font-size: 4em;
  }
  h2{
    color: #2196f3;
  }
  .btn{
    border-radius: 0.2em;
    width: 70%;
    padding: 0.8em 0;
    margin: 0.5em;   
    cursor: pointer;
  }
  .wrapBtn{
   display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .whiteBtn{
    color: #2196f3;
    background-color: #fff;
    border: 0.5px solid #2196f3;

  }
  .blueBtn{
    color: #fff;
    background-color: #2196f3; 
    border:0.5px solid #fff;
  }
  .redBtn{
    color: #fff;
    background-color: #f44336; 
  }
  form{
    background: #fff;
  }
  .arrowBack{
    position: absolute;
    left: 2em;
    top: 2em;
    cursor: pointer;
  }
 

  
</style>
