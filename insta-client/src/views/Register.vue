<template>
  <div class="register-page">
        <header>
            <h3>INSTA<span>CLONE</span></h3>
            <h4>Register an Account </h4>
        </header>

        <main class="form-group">
            <input type="text" v-model="firstName" placeholder="First name" />
            <input type="text" v-model="lastName" placeholder="Last name" />
            <input type="text" v-model="email" placeholder="Email"/>
            <input type="password" v-model="password" placeholder="Password" />
            <button class="login-btn" @click="registerAccount">Create Account</button>
        </main>
        <footer>
            <p>Already Registered? <router-link class="link" to='/login'>Log in</router-link></p>
        </footer>
  </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            firstName: "",
            lastName:"",
            email: "",
            password: "",
        }
    },
    methods: {
        registerAccount() {
            let api_url = this.$store.state.api_url
            if(this.firstName=='' || 
                this.lastName =='' || 
                this.email == '' || 
                this.password == '') return alert('Please fill in all fields')


            this.$http.post(api_url + 'user/register', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            }).then(response => {
                if (response.data.auth) {
                    localStorage.setItem('jwt', response.data.token)
                    this.$router.push('/');
                    } else {
                        console.error(response.error);
                    }
                }
            ).catch((error) => alert(error.response.data.msg))
        }
    }
}
</script>
