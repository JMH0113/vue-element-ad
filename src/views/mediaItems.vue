<!--
 * @Author: your name
 * @Date: 2021-01-19 16:12:13
 * @LastEditTime: 2021-02-14 11:58:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\views\About.vue
-->
<template>
  <div>
    <h1>这里是渠道列表</h1>
    <el-table :data="mediaData" style="width: 100%">
      <el-table-column
        align="center"
        prop="Name"
        label="媒体名称"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="Id"
        label="媒体Id"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="packName"
        label="媒体包名"
      ></el-table-column>
      <el-table-column align="center" prop="Url" label="媒体地址">
        <template slot-scope="scope">
          <el-button @click="openUrl(scope.row.Url)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="Platform"
        label="媒体平台"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="Key"
        label="媒体Key"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="Income"
        label="媒体总收入"
      ></el-table-column>
      <el-table-column align="center" prop="State" label="媒体状态">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.State === '正常' ? 'success' : 'warning'"
            close-transition
            >{{ scope.row.State }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column align="center" prop="packName" label="媒体配置">
        <template slot-scope="scope">
          <el-button @click="openDeploy(scope.row.packName)">配置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Deploy :info="deployInfo" v-if="isShowDeploy" class="deploy" v-on:close="closeDeploy()"></Deploy>
  </div>
</template>

<style scoped>
.deploy {
  
  position: absolute;
  left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
</style>

<script>
import Deploy from "../components/Deploy.vue";
export default {
  components: { Deploy },
  data() {
    return {
      mediaData: [
        {
          Name: "抖音",
          Id: "1001",
          packName: "com.douyin.app",
          Url: "https://jobs.bytedance.com/campus",
          Platform: "Android/ios",
          Key: "1f38f607ff68f7be35561a7389662ef1",
          Income: "888888.88",
          State: "正常",
        },
        {
          Name: "腾讯新闻",
          Id: "10001",
          packName: "com.tencent.news",
          Url: "https://join.qq.com/post.html",
          Platform: "Web",
          Key: "fca42b1b99f33262d4e158a68ca34fba",
          Income: "888888.88",
          State: "审核中",
        },
      ],
      deployInfo: {
        adList: ["开屏广告", "激励视频广告"],
        appName: "抖音",
        Platform: "Web",
        cbUrl: "http://www.baidu.com",
      },
      isShowDeploy: false,
    };
  },
  computed: {
    
  },
  methods: {
    closeDeploy(){
      this.isShowDeploy = false;
      console.log(this.isShowDeploy);
    },
    openUrl(url) {
      window.open(url);
    },
    openDeploy(packName) {
      // 正常这里是需要通过ajax请求获取配置数据的，但是没做接口，就简单手动写一下数据吧哈哈
      if (packName === "com.douyin.app") {
        this.deployInfo.adList = ["开屏广告", "激励视频广告", "信息流广告"];
        this.deployInfo.cbUrl = "https://www.baidu.com/callback.php";
        this.Platform = "Android/ios";
        this.appName = "抖音";
      } else {
        this.deployInfo.adList = ["开屏广告", "信息流广告"];
        this.deployInfo.cbUrl = "https://www.baidu.com/callback.php";
        this.Platform = "Web";
        this.deployInfo.appName = "腾讯新闻";
      }
      this.isShowDeploy = true;
    },
  },
};
</script>
