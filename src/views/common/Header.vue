<!--
 * @Author: your name
 * @Date: 2021-01-31 17:31:04
 * @LastEditTime: 2021-02-05 20:49:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\components\common\Header.vue
-->
<template>
    
    <div style="font-size: 12px;background-color: snow;width:100%;height:60px">
        <p style="text-align: center;font-size:25px;float:left;
        background-color:snow;margin: 0;line-height:60px;width:300px">广告管理系统</p>
        
        <div style="float:right;">
            <span style="text-align: right">{{$store.state.userName}}</span>
        <el-button type="text" style="font-size:20px;margin-right:20px">退出</el-button>
        </div>
    </div>
      <!-- <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
     
    
</template>

<style scoped>
    span {
        line-height: 60px;
        
        font-size: 20px;
        margin-right: 20px;
    }
</style>



<script>
    export default {
        data() {
            return {
                userImg: require('../../assets/logo.png'),
                
            }
        },
        methods: {
            
            //退出登陆
            logOut() {
                location.reload()
            }
        }
    }
</script>