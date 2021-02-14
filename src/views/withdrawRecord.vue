<!--
 * @Author: your name
 * @Date: 2021-01-19 16:12:13
 * @LastEditTime: 2021-02-14 17:32:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\views\About.vue
-->
<template>
  <div>
    <h1>这里是提现记录</h1>
    <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyyMMdd">
    </el-date-picker>
    <el-button type="primary" style="margin-left:10px">查询</el-button>
   </div>
    <el-table :data="recordData" border >
      <el-table-column prop="orderId"></el-table-column>
      <el-table-column prop="Time"></el-table-column>
      <el-table-column prop="Amount"></el-table-column>
      <el-table-column prop="accountName"></el-table-column>
      <el-table-column prop="accountNumber"></el-table-column>
      <el-table-column prop="invoiceState"></el-table-column>
      <el-table-column prop="orderState"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeValue:"",
      
    }
  },
  methods: {
    
  },
  created() {
    this.recordData = Mock.mock({
    'Data|7':[{
        'Date|-1': 20210208,
        'orderId|10000000000-19999999999':100,
        'Time|500-800': 50,
        'Amount|100-999999':100,
        'invoiceState|String': 50,
        'infoShow|10000-99999':100,
        'infoClick|500-800': 50,
        'openGain|500-800': 50,
        'videoGain|500-800': 50,
        'infoGain|500-800': 50,
        'Income': '',
    }]
})
  },
}
</script>