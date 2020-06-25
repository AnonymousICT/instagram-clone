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
                    localStorage.setItem('jwt', response.data.token)
                    this.$router.push('/');
                    } else {
                        console.log("Error: ", response.data.msg)
                    }
                }
            ).catch(err=>console.log(err))
        }
    }
}
</script>

<style lang="scss" scoped>
.login-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;

    header{
        padding: 15px 25px;
        text-align: center;
        h3{
            color: #000;
            font-size: 28px;
            text-align: center;
            font-weight: 900;
            margin: 0px;
        }
        span{
            font-weight: 300;
        }
        h4{
            color:#888;
            font-size: 24px;
            font-weight: 300;
            margin: 0;
            padding: 0;
        }
    }


    footer {
        width: calc(100% - 50px);
        height: 20px;
        background-color: #eee;
        box-shadow: 0px -1px 3px rgba(0 ,0 ,0,0.2);
        padding: 15px 25px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            color:#888;
            font-size: 16px;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        .link {
            color: #4c68d7;
            font-weight: 700;
            text-decoration: none;
        }
    }
}

</style>