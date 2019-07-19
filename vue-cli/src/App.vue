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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
