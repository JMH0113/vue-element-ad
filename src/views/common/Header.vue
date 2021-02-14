<!--
 * @Author: your name
 * @Date: 2021-01-31 17:31:04
 * @LastEditTime: 2021-02-14 16:15:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\components\common\Header.vue
-->
<template>
    
    <div style="font-size: 12px;background-color: white;width:100%;height:60px;border-bottom: 1px solid lightgray">
        <div style="text-align: center;font-size:25px;float:left;height:60px;
        background-color:white;line-height:60px;width:300px;border-bottom:1px solid lightgray;">广告管理系统</div>
        
        <div style="float:right;">
            <span style="text-align: right">{{$store.state.userName}}</span>
        <el-button type="text" style="font-size:20px;margin-right:20px">退出</el-button>
        </div>
    </div>
    
     
    
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