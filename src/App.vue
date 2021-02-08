<!--
 * @Author: your name
 * @Date: 2021-01-19 16:12:13
 * @LastEditTime: 2021-02-04 19:35:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\App.vue
-->
<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <div id="app">
   <!-- <el-container class="cont" style="height: 100vh;background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);">
     
     <main>
       <h1>广告营销系统</h1>
       <div class="info">
         <el-input v-model="userName" class="info-input" type="text" placeholder="用户名" maxlength="16" minlength="5"></el-input>
         <el-input v-model="userPassword" class="info-input" type="password" placeholder="密码" maxlength="16" minlength="5"></el-input>
         <section class="radio">
           <el-radio v-model="radio" label="1">渠道主</el-radio>
           <el-radio v-model="radio" label="2">广告主</el-radio>
         </section>
         <el-button type="primary" round='true' class="login-bt" @click="userLogin">登录</el-button>
       </div>
     </main>
   </el-container> -->
   <router-view></router-view>
   
  </div>
</template>

<style scoped>

  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main {
    width: 500px;
    height: 350px;
    background-color: #fff;
    border-radius: 20px;
  }
  main h1{
    text-align: center;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .info-input{
    margin-bottom: 40px;
    width: 300px;
    height: 20px; 
    font-size: 18px;
  }
  .radio {
    flex-direction: row;
    margin-bottom: 30px;
    
  }
  .login-bt {
    width: 340px;
    height: 60px;
    font-size: 20px;
  }
</style>

<script>

export default {
  data() {
    return {
      userName: "admin",
      userPassword: "admin",
      radio: '1',
    }
  },
  methods: {
    userLogin() {
      if(this.userName == 'admin'){
        this.$router.push("/home")
      }
    }
  },
}
</script>
