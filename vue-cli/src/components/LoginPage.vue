<template>
  <div id="loginForm">
  
    <div class="header">
      <div class="arrowBack" @click="backPage()"><i class="fas fa-arrow-left"></i></div>
      <h1>Cityguide</h1>
    </div>
  
    <div class="container">
      <h2>Welcome back!</h2>
      <div class="inputWrap">
  
        <div class="input">
          <i class="far fa-envelope"></i>
          <input v-model="email" v-validate="'required|email'" name="email" type="text" placeholder="Your email adress">
        </div>
        <p class="error" v-if="errors.has('email')">{{ errors.first('email') }}</p>
  
        <div class="input">
          <i class="fas fa-lock"></i>
          <input v-model="password" v-validate="'required'" name="password" type="password" placeholder="Your password" v-on:keyup.enter="validateBeforeSubmit">
        </div>
        <p class="help is-danger" v-show="errors.has('password')">{{ errors.first('password') }}</p>
      </div>
      <div class="errorToastr" v-show="toastr">Invalid registration!</div>
  
      <div class="wrapBtn">
        <div class="btn whiteBtn" @click.prevent="validateBeforeSubmit">Login</div>
        <div class="btn blueBtn" disabled="true">Facebook</div>
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
    ACTION_SET_OPEN_LOGIN_PAGE,
    ACTION_SET_BROWSE_RESTAURANTS
  } from "../store/types.js";
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        toastr: false
      }
    },
    computed: {
      ...mapState({
        openLoginPage: state => state.openLoginPage,
        openBrowseRestaurants: state => state.openBrowseRestaurants,
      })
    },
    methods: {
      ...mapActions({
        setopenLoginPage: ACTION_SET_OPEN_LOGIN_PAGE,
        setopenBrowseRestaurants: ACTION_SET_BROWSE_RESTAURANTS,
      }),
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
  
          if (result) {
            return this.submitForm();
          }
  
        });
      },
      backPage() {
        return this.setopenLoginPage(false);
      },
  
      submitForm() {
        let userArr = localStorage.getItem("users");
        let users;
        if (userArr === null) {
          return this.toastr = true;
        } else {
          users = JSON.parse(userArr);
          const user = users.find(el => {
            return el.userEmail === this.email && el.userPassword === this.password;
          })
  
          if (user === undefined) {
            return this.toastr = true;
          }
          this.$emit('user-data', user);
          this.setopenLoginPage(false);
          this.setopenBrowseRestaurants(true);
        }
      }
  
    }
  }
</script>

<style scoped>
  #loginForm .header {
    align-items: center;
    height: 30%;
  }
  
  #loginForm .container {
    height: 70%;
  }
  
  #loginForm .inputWrap {
    height: 30%;
  }
  
  .errorToastr {
    background-color: #a94442;
    line-height: 2em;
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
  
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
