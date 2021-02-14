<!--
 * @Author: your name
 * @Date: 2021-01-31 17:29:24
 * @LastEditTime: 2021-02-14 15:23:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\components\Main.vue
-->
<template>
    <el-container >
        <el-header style="padding: 0 ">
            <common-header></common-header>
        </el-header>
        <el-container>

        <el-aside :span="12" width="300px">
            <!--左侧栏控件-->
            <common-aside></common-aside>
        </el-aside>
            
            <el-main>
                    
   <!--左侧栏 和 header部分对于整个后台部分都是不变的，唯一变的就是上面3的部分，这里就通过router-view来展示所需控件-->
                <router-view/>
                
            </el-main>
        </el-container>
    </el-container>
</template>
<style scoped>
body {
    margin: 0;
}
.el-header, .el-footer {
    
    color: #333;
    /* text-align: center; */
    line-height: 60px;
  }


</style>

<script>
    import commonAside from './Aside'
    import commonHeader from "./Header";
    
    export default {
        components: {
            commonAside,
            commonHeader,
            
        }
    }
</script>