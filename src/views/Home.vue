<!--
 * @Author: your name
 * @Date: 2021-01-19 16:12:13
 * @LastEditTime: 2021-02-06 14:15:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\views\Home.vue
-->
<template>
  <div class="home" style="">
    <!-- 收益概况 -->
    <section>
      <h3>收益概况</h3>
      <blockInfo :msg="msg"> </blockInfo>
      <h3>一周数据概况</h3>
      <p style="line-height: 5px; color: gray">
        今日的数据会在第二天生成。
      </p>

      <el-table :data="tableData.Data" style="width: 100%">
        <el-table-column align="center" prop="Date" label="日期" >
        </el-table-column>
        <el-table-column align="center" prop="openShow" label="开屏展示量"> </el-table-column>
        <el-table-column align="center" prop="openClick" label="开屏点击量"> </el-table-column>
        <el-table-column align="center" prop="videoShow" label="激励视频展示量"> </el-table-column>
        <el-table-column align="center" prop="videoClick" label="激励视频点击量"> </el-table-column>
        <el-table-column align="center" prop="infoShow" label="信息流展示量"> </el-table-column>
        <el-table-column align="center" prop="infoClick" label="信息流点击量"> </el-table-column>
        <el-table-column align="center" prop="openGain" label="开屏收益(元)"> </el-table-column>
        <el-table-column align="center" prop="videoGain" label="激励视频收益(元)"> </el-table-column>
        <el-table-column align="center" prop="infoGain" label="信息流收益(元)"> </el-table-column>
        <el-table-column align="center" prop="Income" label="总收益(元)"> </el-table-column>
      </el-table>
    </section>
  </div>
</template>
 
<style scoped>
section {
  width: 100%;
}
.el-table {
  font-size: 18px; 
  
}

</style>

<script>
const Mock = require('mockjs');
// @ is an alias to /src
import blockInfo from "@/components/blockInfo.vue";
import {getDateRange} from "@/components/getData.js";
export default {
  name: "Home",
  components: {
    blockInfo,
  },
  data() {
    return {
      tableData1 : [
        {
          openShow:1
        },{
          openShow:1
        },{
          openShow:1
        },
      ],
      msg: [
        {
          title: "今日收入(元)",
          content: "128.88",
          textcolor: "black",
        },
        {
          title: "昨日收入(元)",
          content: "288.88",
          textcolor: "black",
        },
        {
          title: "本月收入(元)",
          content: "1923.88",
          textcolor: "black",
        },
        {
          title: "累计收入(元)",
          content: "888888.88",
          textcolor: "red",
        },
      ],
      
    };
  },
  created() {
    console.log(this.tableData1);
    this.tableData = Mock.mock({
    'Data|7':[{
        'Date|-1': 20210208,
        'openShow|10000-99999':100,
        'openClick|500-800': 50,
        'videoShow|10000-99999':100,
        'videoClick|500-800': 50,
        'infoShow|10000-99999':100,
        'infoClick|500-800': 50,
        'openGain|500-800': 50,
        'videoGain|500-800': 50,
        'infoGain|500-800': 50,
        'Income': '',
    }]
})
var date = new Date();
var list = getDateRange(date,6,true)
this.tableData.Data.map((cur,index,arr)=>{
  cur.Date = getDateRange(date,index+1,true)
  cur.Income = cur.infoGain + cur.openGain + cur.videoGain
})
    console.log(this.tableData);
  },
};
</script>
