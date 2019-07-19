<template>
  <div id="loginForm">
    <div @click="backPage()"><i class="fas fa-arrow-left"></i></div>
    <form>
  
      <h1>Welcome back!</h1>
      <div>
        <div><i class="far fa-envelope"></i><input v-model="email" v-validate="'required|email'" type="text" placeholder="Email" name="email"></div>
        <p class="error" v-if="errors.has('email')">{{ errors.first('email') }}</p>
      </div>
      <div>
        <div><i class="fas fa-lock"></i> <input v-model="password" type="password" placeholder="Password" name="password"></div>
        <p v-if="errors.has('password')">{{ errors.first('password') }}</p>
      </div>
  
  
      <button @click.prevent="validateBeforeSubmit">Login</button>
      <button disabled="true">Facebook</button>
  
    </form>
  
  </div>
</template>

<script>
  // import Vue from 'vue'
  // import VeeValidate from 'vee-validate';
  
  // Vue.use(VeeValidate);
  
  // VeeValidate.Validator.extend('passphrase', {
  //     getMessage: field => 'Sorry dude, wrong pass phrase.',
  //     validate: value => value.toUpperCase() == 'Demogorgon'.toUpperCase()
  // });
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
            // eslint-disable-next-line
            alert('Form Submitted!');
            return this.submitForm();
          }
  
          alert('Correct them errors!');
        });
      },
      backPage() {
        return this.setopenLoginPage(false);
      },
  
      submitForm() {
        let userArr = localStorage.getItem("users");
        let users;
        if (userArr === null) {
          alert("Nqma takava registraciq")
        } else {
          users = JSON.parse(userArr);
          const user = users.find(el => {
            return el.userEmail === this.email && el.userPassword === this.password;
          })
        
          if (user === undefined) {
            alert("Nqma takava registraciq");
            return;
          }
            console.log(user);
          this.$emit('user-data', user);
          this.setopenLoginPage(false);
          return this.setopenBrowseRestaurants(true);
        }
      }
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  
  .container {
    width: 500px;
  }
  
  .error {
    color: #a94442;
  }
  
  h1 {
    text-align: center
  }
  
  img {
    text-align: center
  }
  
  .submitted {
    color: #4fc08d;
  }
  
  input {
    outline: 0;
    border-width: 0 0 0.1em;
    border-color: #dcd9d9
  }
  
  input:focus {
    border-color: #b5b5b5
  }
  
  .fa-envelope {
    color: black;
    font-size: 0.5em;
  }
  
  .fa-envelope:before {
    content: "\f0e0";
  }
</style>
