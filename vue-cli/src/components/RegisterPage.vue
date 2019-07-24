<template>
    <div id="registerForm">
    
        <div class="header">
            <div class="arrowBack" @click="backPage()"><i class="fas fa-arrow-left"></i></div>
            <h3>{{ label }}</h3>
        </div>
    
        <div class="container">
            <div class="inputWrap">
    
                <div class="input">
                    <i class="far fa-user"></i>
                    <input v-model="name" v-validate="'required|alpha'" name="name" type="text" placeholder="Name">
                </div>
                <p class="help is-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
    
                <div class="input">
                    <i class="far fa-envelope"></i>
                    <input v-model="email" v-validate="'required|email'" name="email" type="text" placeholder="Email">
                </div>
                <p class="error" v-show="errors.has('email')">{{ errors.first('email') }}</p>
    
                <div class="input">
                    <i class="fas fa-lock"></i>
                    <input v-model="password" v-validate="'required'" name="password" type="password" placeholder="Password" ref="password">
                </div>
                <p class="help is-danger" v-show="errors.has('password')">{{ errors.first('password') }}</p>
    
                <div class="input"><i class="fas fa-lock">
                            </i><input v-model="passwordConfirm" v-validate="'required|confirmed:password'" name="password_confirmation" type="password" placeholder="Confirm Password" data-vv-as="password" v-on:keyup.enter="validateBeforeSubmit">
                </div>
                <p class="help is-danger" v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</p>
    
            </div>
    
            <div class="wrapBtn">
                <div class="btn redBtn" @click.prevent="validateBeforeSubmit">{{changeBtn}}</div>
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
        ACTION_SET_OPEN_LOGIN_PAGE,
        ACTION_SET_OPEN_PROFILE_PAGE
    
    } from "../store/types.js";
    export default {
        props: {
            userObj: Object
        },
        data() {
            return {
                name: this.userIsEmpty ? "" : this.userObj.userName,
                email: this.userIsEmpty ? "" : this.userObj.userEmail,
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
                if (Object.keys(this.userObj).length === 0) {
                    return true;
                }
                return false;
            },
            label() {
                return this.userIsEmpty ? "Register" : "Edit profile";
            },
            changeBtn() {
                return this.userIsEmpty ? "Register" : "Done";
            }
        },
        methods: {
            ...mapActions({
                setopenRegisterPage: ACTION_SET_OPEN_REGISTER_PAGE,
                setopenLoginPage: ACTION_SET_OPEN_LOGIN_PAGE,
                setopenProfilePage: ACTION_SET_OPEN_PROFILE_PAGE
    
            }),
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
    
                    if (result) {
                        return this.submitForm();
                    }
    
                });
            },
            backPage() {
                if (this.userIsEmpty) {
                    return this.setopenRegisterPage(false);
                }
                return this.setopenProfilePage(true);
            },
            submitForm() {
                let user = {
                    userName: this.name,
                    userEmail: this.email,
                    userPassword: this.password
                };
                let userArr = localStorage.getItem("users");
                let users;
                if (userArr === null) {
                    users = [];
                } else {
                    users = JSON.parse(userArr);
                }
    
                if (this.userIsEmpty) {
                    users.push(user);
                    localStorage.setItem("users", JSON.stringify(users))
                    this.setopenLoginPage(true);
                    this.setopenRegisterPage(false);
                } else {
                    let index = -1;
                    for (var i = 0; i < users.length; i++) {
                        if (users[i]['userName'] === this.userObj['userName'] && users[i]['userEmail'] === this.userObj['userEmail'] && users[i]['userPassword'] === this.userObj['userPassword']) {
                            index = i;
                            break;
                        }
                    }
                    users[index] = user;
                    localStorage.setItem("users", JSON.stringify(users));
                    this.$emit('edit-user', user);
    
                    this.setopenProfilePage(true);
                    this.setopenRegisterPage(false);
                }
            }
        }
    }
</script>

<style>
    .inputWrap {
        height: 60%;
        padding-top: 2em;
    }
</style>
