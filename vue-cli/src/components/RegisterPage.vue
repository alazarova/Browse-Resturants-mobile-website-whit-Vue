<template>
    <div id="registerForm">
        <div class="arrowBack" @click="backPage()"><i class="fas fa-arrow-left"></i></div>
        <h3>{{ label }}</h3>
        <form>          
            <div>
                <div><i class="far fa-user"></i> <input v-model="name" v-validate="'decimal:3'" type="text" placeholder="Name" name="decimal_field"></div>
                <p v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>
            <div>
    
                <div><i class="far fa-envelope"></i> <input v-model="email" v-validate="'required|email'" type="text" placeholder="Email" name="email"></div>
                <p class="error" v-if="errors.has('email')">{{ errors.first('email') }}</p>
            </div>
            <div>
                <div><i class="fas fa-lock"></i> <input v-model="password" v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" placeholder="Password" ref="password"></div>
                <p v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</p>
            </div>
            <div>
                <div><i class="fas fa-lock"></i><input v-model="passwordConfirm" v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}" placeholder="Confirm Password"
                        data-vv-as="password"></div>
                <p v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</p>
            </div>
            <div class="wrapBtn">
            <div class="btn redBtn" @click.prevent="validateBeforeSubmit">Register</div>
            </div>
        </form>
    
    </div>
</template>

<script>
    import {
        mapActions,
        mapState
    } from "vuex";
    import {
        ACTION_SET_OPEN_REGISTER_PAGE,
        ACTION_SET_OPEN_LOGIN_PAGE,
    
    } from "../store/types.js";
    export default {
        props: {
            userObj: Object
        },
        data() {
            return {
             
                name: this.userIsEmpty ? "" : this.userObj.userName,
                email:this.userIsEmpty ? "" : this.userObj.userEmail,
                password: this.userIsEmpty ? "" : this.userObj.userPassword,
                passwordConfirm: this.userIsEmpty ? "" : this.userObj.userPassword
            }
        },
        computed: {
            ...mapState({
                openLoginPage: state => state.openLoginPage,
                openRegisterPage: state => state.openRegisterPage,
    
            }),
            userIsEmpty() {
                if(Object.keys(this.userObj).length === 0){
                    return true;
                }return false;
            },
            label(){
            return this.userIsEmpty ? "Register" : "Edit profile";
            }
        },
        methods: {
            ...mapActions({
                setopenRegisterPage: ACTION_SET_OPEN_REGISTER_PAGE,
                setopenLoginPage: ACTION_SET_OPEN_LOGIN_PAGE,
    
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
                return this.setopenRegisterPage(false);
            },
            submitForm() {
                let user = {
                    userName: this.name,
                    userEmail: this.email,
                    userPassword: this.password
                };
                console.log(user);
                let userArr = localStorage.getItem("users");
                let users;
                if (userArr === null) {
                     users = [];
                }else{
                     users = JSON.parse(userArr);
                
                }
                users[0]= user;
                //    users.push(user);
                    localStorage.setItem("users", JSON.stringify(users));
                
                this.setopenLoginPage(true);
                this.setopenRegisterPage(false);
    
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
    
    h1 {
        text-align: center
    }
    
    img {
        text-align: center
    }
    
    .submitted {
        color: #4fc08d;
    }
</style>
