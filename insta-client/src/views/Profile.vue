<template>
  <main class="view profile">
    <section class="profile-head">
      <img class="profile-image" src="https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png" >
      <div class="profile-container">
        <h2 class="profile-user-name">{{ display_name }}</h2>
        <ul class="profile-stats">
          <li class="profile-stat">
            <span>0</span> 
            <p>posts</p>
          </li>
          <li class="profile-stat">
            <span>0</span> 
            <p>followers</p>
          </li>
          <li class="profile-stat">
            <span>0</span> 
            <p>following</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="posts">
      <div class="post" v-for="post in posts" :key="post._id">

        <img :src="post.image" :alt="post.desc" class="post-image" />

      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      display_name: '',
      posts: []
    }
  },
  methods: {
    getProfile () {
      
      this.$http.post(this.$store.state.api_url + 'user/getprofile', {
        auth_token: localStorage.getItem('jwt')
      }).then(({ data }) => {        
        this.display_name = data.details.display_name;
        this.posts = data.details.posts;
      })
    }
  },
  beforeMount () {
    this.getProfile();
  }
}
</script>
