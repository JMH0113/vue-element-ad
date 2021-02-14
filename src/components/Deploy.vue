<!--
 * @Author: your name
 * @Date: 2021-02-09 09:36:44
 * @LastEditTime: 2021-02-14 11:53:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\components\Deploy.vue
-->
<template>
  <section>
    <header style="height: 40px;display:flex">{{ info.appName }} 配置
      <i class="el-icon-close" style="line-height:40px;margin-left: auto" @click="closeDeploy()"></i>
    </header>
    <main style="height: 100%; ">
      <el-form ref="form" :model="info" label-width="auto">
        <el-form-item label="产品平台" prop="Platform">
          <span>{{ info.Platform }}</span>
        </el-form-item>
        <el-form-item label="广告类型" prop="adList">
          <el-checkbox-group v-model="info.adList">
            <el-checkbox label="开屏广告"></el-checkbox>
            <el-checkbox label="激励视频广告"></el-checkbox>
            <el-checkbox label="信息流广告"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="服务器回调地址" prop="cbUrl">
          <el-input v-model="info.cbUrl"></el-input>
        </el-form-item>
      </el-form>
      <div class="ad-position">
        <!-- 广告位配置 -->
        <div style="display: flex;">
          <h3>广告位配置</h3>
          <el-button type="primary" style="margin-left:auto;height:40px;margin-top:11px">新增广告位</el-button>
        </div>
        <el-table :data="adPosData" border style="width: 100%">
          <el-table-column prop="Id" label="广告位ID" ></el-table-column>
          <el-table-column prop="Name" label="广告位名称" ></el-table-column>
          <el-table-column prop="Type" label="广告位类型" ></el-table-column>
          <el-table-column prop="State" label="广告位状态" style="color:red"></el-table-column>
        </el-table>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "Deploy",
  data() {
    return {
      form: {},
      adPosData: [
        {
          Id:1421234564,
          Name:"首页-信息流",
          Type:"信息流",
          State:"运行中"
        },{
          Id:1421234565,
          Name:"个人中心-信息流",
          Type:"信息流",
          State:"审核中"
        },{
          Id:1421234566,
          Name:"抽奖-激励视频",
          Type:"激励视频",
          State:"运行中"
        },
      ]
    };
  },
  props: {
    info: Object,
  },

  components: {},

  methods: {
    closeDeploy(){
      console.log(11);
      this.$emit('close')
    }
  },
};
</script>

<style scoped>
.ad-position {
  margin-top: 40px;
  
}
/deep/ .el-form-item{
  /* border-bottom: 1px solid lightgray; */
}
section {
  
  background-color: #fff;
  opacity: 1;
  top: 200px;
  width: 700px;
  height: auto;
  position: fixed;
  border: 1px solid lightgray;
  z-index: 10;
}
header {
  background-color: black;
  color: white;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
  padding:0px 20px 0px 20px;
}
main {
  padding: 20px;
}
</style>