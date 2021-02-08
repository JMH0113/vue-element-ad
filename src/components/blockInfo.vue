<!--
 * @Author: your name
 * @Date: 2021-02-04 11:04:52
 * @LastEditTime: 2021-02-05 09:43:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\components\blockInfo.vue
-->
<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in msg" :key="index">
                <section>
                    <div class="title">{{item.title}}</div>
                    <div class="" :style="{color:item.textcolor}">{{item.content}}</div>
                </section>
                
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    section {
        box-shadow: 1px 0px 5px Gainsboro;
        height: 120px;
        background-color: white;
        border: 1px solid silver;
        border-radius: 8px;
    }
    .el-col div:nth-of-type(1) {
        display: block;
        text-align: center;
        font-size: 18px;
        color: lightslategray;
        margin:20px 0px 15px 0px;
    }
    
    .el-col div:nth-of-type(2) {
        text-align: center;
        font-size: 28px;
        
    }
</style>

<script>
export default {
    data() {
        return {
            msgg: [
                {
                    title: "标题1",
                    content: "内容1",
                    textcolor:"black",
                },
                {
                    title: "标题1",
                    content: "内容1",
                    textcolor:"black",
                },
                {
                    title: "标题1",
                    content: "内容1",
                    textcolor:"red",
                },
                {
                    title: "标题1",
                    content: "内容1",
                    textcolor:"green",
                }
            ]
        }
    },
    props:['msg']
}
</script>