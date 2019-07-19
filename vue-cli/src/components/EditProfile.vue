<template>
    <div id="registerForm">
        <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
    
            <h1>Edit Profile</h1>
            <div>
               <div><i class="far fa-user"></i> <input v-model="name" v-validate="'decimal:3'" type="text" placeholder="Name" name="decimal_field"></div>
                <p v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>
             <div>
       
        <div><i class="far fa-envelope"></i> <input v-model="email" v-validate="'required|email'" type="text" placeholder="Email" name="email"></div>
        <p class="error" v-if="errors.has('email')">{{ errors.first('email') }}</p>
      </div>
            <div>
               <div><i class="fas fa-lock"></i> <input v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" placeholder="Password" ref="password"></div>
                <p v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</p>
            </div>
            <div>
                <div><i class="fas fa-lock"></i><input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}" placeholder="Confirm Password" data-vv-as="password"></div>
                <p v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</p>
            </div>
            <button type="submit">Done</button>
        </form>
        <div v-else>
            <h1 class="submitted">Form submitted successfully!</h1>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                name: '',
                url: '',
                secret: '',
                formSubmitted: false
            }
        },
        methods: {
            validateBeforeSubmit(e) {
                this.$validator.validateAll();
    
                if (!this.errors.any()) {
                    this.submitForm()
                }
            },
            submitForm() {
                this.formSubmitted = true
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
