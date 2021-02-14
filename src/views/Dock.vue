<!--
 * @Author: your name
 * @Date: 2021-01-19 16:12:13
 * @LastEditTime: 2021-02-14 15:14:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\views\About.vue
-->
<template>
  <div>
    <h1>这里是技术对接</h1>
    <el-table :data="dockData" style="width:100%">
      <el-table-column align="center" prop="Name" label="文档名"></el-table-column>
      <el-table-column align="center" prop="Version" label="版本号"></el-table-column>
      <el-table-column align="center" prop="Time" label="更新时间"></el-table-column>
      <el-table-column align="center" prop="Time" label="下载渠道">
        <el-button>点此下载</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dockData : [
        {
          Name: "Android正式sdk",
          Version: "1.9.9",
          Time: "2021-02-08",
        },{
          Name: "Android稳定版sdk",
          Version: "1.9.0",
          Time: "2021-02-02",
        },{
          Name: "IOS正式版sdk",
          Version: "2.0.4",
          Time: "2021-02-05",
        },{
          Name: "IOS稳定版sdk",
          Version: "2.0.3",
          Time: "2021-02-08",
        },{
          Name: "WEB正式对接文档",
          Version: "2.0.0",
          Time: "2021-02-08",
        },
      ]
    }
  },
}
</script>
