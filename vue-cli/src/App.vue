<template>
  <div id="app">
    <home-page v-if="!openLoginPage && !openRegisterPage && !openBrowseRestaurants && !openProfilePage"></home-page>
    <login-page v-if="showLogin" @user-data="userData"></login-page>
    <register-page v-if="showRegister" :userObj="userObj" @edit-user="userEdit"></register-page>
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
  
  import {
    mapState
  } from "vuex";
  
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
  
      showLogin() {
        if (this.openLoginPage && !this.openBrowseRestaurants && !this.openProfilePage) {
          return true;
        }
        return false;
      },
  
      showRegister() {
        if (this.openRegisterPage && !this.openBrowseRestaurants && !this.openProfilePage && !this.openLoginPage) {
  
          return true
        }
  
        return false;
      }
    },
  
    methods: {
      userData(user) {
        this.userObj = user;
      },
  
      userEdit(user) {
        this.userObj = user;
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
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 540px;
    max-height: 780px;
    margin: 0 auto;
    box-shadow: 0 10px 40px rgba(0, 0, 0, .7);
  }
  
  #app>div {
    width: 100%;
    position: relative;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    height: 75%;
  }
  
  .header {
    background: #2196f3;
    display: flex;
    justify-content: center;
    align-items: self-start;
    height: 25%;
  }
  
  h1 {
    font-family: 'Pacifico', cursive;
    font-size: 4.7em;
    font-weight: normal;
  }
  
  h2 {
    color: #2196f3;
    font-weight: normal;
    font-size: 2em;
    padding-top: 1em;
  }
  
  h3 {
    line-height: 4.6em;
  }
  
  .arrowBack {
    position: absolute;
    left: 2em;
    top: 2.1em;
    cursor: pointer;
  }
  
  input {
    outline: 0;
    border-width: 0;
  }
  
  .inputWrap {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  
  .input {
    border-bottom: 1px solid #b5b5b5;
    text-align: left;
    line-height: 2em;
    line-height: 2.5em;
    color: #b5b5b5;
  }
  
  .far,
  .fas {
    margin-right: 0.6em;
  }
  
  .error,
  .is-danger {
    color: #a94442;
    text-align: left;
  }
  
  .btn {
    border-radius: 0.2em;
    width: 100%;
    padding: 1em 0;
    margin: 0.5em 0;
    cursor: pointer;
    transform: scale(1);
  }
  
  .wrapBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2em;
  }
  
  .whiteBtn {
    color: #2196f3;
    background-color: #fff;
    border: 0.5px solid #2196f3;
  }
  
  .whiteBtn:hover {
    background-color: #ddecf9;
        transform: scale(0.95);

  }
  
  .blueBtn {
    color: #fff;
    background-color: #2196f3;
    border: 0.5px solid #fff;
  }
  
  .blueBtn:hover {
    background-color: #0079d8;
            transform: scale(0.95);

  }
  
  .redBtn {
    color: #fff;
    background-color: #f44336;
  }
  
  .redBtn:hover {
    background-color: #f51403;
            transform: scale(0.95);

  }
</style>
