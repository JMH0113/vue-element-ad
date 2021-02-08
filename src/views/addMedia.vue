<!--
 * @Author: your name
 * @Date: 2021-01-19 16:12:13
 * @LastEditTime: 2021-02-07 14:46:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\views\About.vue
-->
<template>
  <div style="border: 1px solid WhiteSmoke; padding: 10px">
    <h1>信息填写</h1>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item
        label="产品名称*"
        prop="name"
        :rules="[
          { required: true, message: '请输入产品名称', trigger: 'blur' },
          { whitespace: true, message: '不要只输入空格...', trigger: 'blur' },
          {
            min: 2,
            max: 20,
            message: '长度在 2 到 20 个字符',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="form.name"
          placeholder="请输入您的产品名称"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="产品类型*"
        prop="media"
        :rules="[
          { required: true, message: '请选择产品类型', trigger: 'change' },
        ]"
      >
        <el-select v-model="form.media">
          <el-option label="APP" value="App"></el-option>
          <el-option label="网页" value="Web"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="产品图标*"
        prop="imageUrl"
        :rules="[
          { required: true, message: '请选择产品图标', trigger: 'change' },
        ]"
      >
        <el-upload :on-change="fileChange" action="null" >
          <el-button size="medium" type="primary">上传</el-button><br />
        </el-upload>
        <img
          v-if="imgShow"
          style="width: 80px; height: 80px"
          :src="form.imageUrl"
          alt=""
        />
      </el-form-item>
      <el-form-item
        label="媒体类型*"
        prop="mediaType"
        :rules="[
          { required: true, message: '请选择媒体类型', trigger: 'change' },
        ]"
      >
        <el-select v-model="form.mediaType">
          <el-option
            v-for="(item, index) in mediaList"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- app和网页的判断，app展示包名和下载地址表单，网页展示网页地址 -->
      <section v-if="form.media == 'App'">
        <el-form-item
          label="产品包名*"
          prop="packName"
          :rules="[
            {
              required: appCheck,
              message: '请输入产品的应用包名',
              trigger: 'blur',
            },
          ]"
        >
          <el-input v-model="form.packName"></el-input>
        </el-form-item>
        <el-form-item
          label="下载地址*"
          prop="appDownUrl"
          :rules="[
            {
              required: appCheck,
              message: '请输入产品应用商店的下载地址',
              trigger: 'blur',
            },
          ]"
        >
          <el-input v-model="form.appDownUrl"></el-input>
        </el-form-item>
      </section>
      <section v-if="form.media == 'Web'">
        <el-form-item
          label="产品地址*"
          prop="webUrl"
          :rules="[
            {
              required: webCheck,
              message: '请输入产品的官方链接',
              trigger: 'blur',
            },
          ]"
        >
          <el-input v-model="form.webUrl"></el-input>
        </el-form-item>
      </section>
      <el-form-item
        label="产品简介*"
        prop="introduction"
        :rules="[
          { required: true, message: '请输入产品简介', trigger: 'change' },
          {
            min: 50,
            max: 200,
            message: '产品简介请控制在50-200字内',
            trigger: 'change',
          },
        ]"
      >
        <el-input
          type="textarea"
          :rows="3"
          v-model="form.introduction"
        ></el-input>
      </el-form-item>
      <el-button
        type="primary"
        style="margin-left: 6em"
        @click="submitForm('form')"
        >确定</el-button
      >
    </el-form>
  </div>
</template>

<style scoped>
.el-form-item {
  width: 30vw;
}
/deep/ .el-form-item__label {
  font-size: 17px;
}
</style>

<script>
export default {
  data() {
    return {
      form: {},
      imageUrl: "",
      imgShow: false,
      dialogVisible: false,
      // appCheck: false,
      // webCheck: false,
      mediaList: [
        "网络游戏",
        "网赚省钱",
        "金融理财",
        "电子商城",
        "新闻资讯",
        "实用工具",
        "休闲娱乐",
        "其他应用",
      ],
    };
  },
  computed: {
    appCheck: function(){
      return this.form.media == 'App' ? true : false
    },
     
    webCheck: function(){
      return this.form.media == 'Web' ? true : false
    }
  },
  created() {
    console.log(alert);
    alert.showDialog(111,2222,3333,4444)
  },
  methods: {
    fileChange(file) {
      this.form.imageUrl = URL.createObjectURL(file.raw);//用户选择图片后添加到form对象中
      this.imgShow = true;//展示img标签
    },
    submitForm(formName) { //提交表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>