<template>
    <div class="login-page">
        <header>
            <h3>INSTA<span>CLONE</span></h3>
            <h4>Login </h4>
        </header>
        <main class="form-group">
            <input type="text" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password"/>
            <button class="login-btn" @click="login">Log in</button>
        </main>
        <footer>
            <p>Don't have an account? <router-link class="link" to='/register'>Sign up here</router-link></p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login () {
            let api_url = this.$store.state.api_url

            if(this.email == '' || this.password == '') return alert('Please fill in all fields')
            this.$http.post(api_url + 'user/login', {
                email: this.email,
                password: this.password
            }).then(response => {
                if (response.data.auth) {
                    this.$store.commit('login', response.data.token)
                    } else {
                        console.log("Error: ", response.data.msg)
                    }
                }
            ).catch(error => alert(error.response.data.msg))
        }
    }
}
</script>
