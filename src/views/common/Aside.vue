<!--
 * @Author: your name
 * @Date: 2021-01-31 17:30:31
 * @LastEditTime: 2021-02-05 20:48:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\components\common\Aside.vue
-->
<template>
  <!--collapse 是否水平折叠收起菜单-->

  <el-menu :default-openeds="[]" :default-active="$route.path">
    <el-menu-item index="/" @click="clickMenu('/')">
      <template slot="title"><i class="el-icon-menu"></i>数据报表</template>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-message"></i>媒体管理</template>
      <el-menu-item-group>
        <el-menu-item index="/addMedia" @click="clickMenu('addMedia')">添加媒体</el-menu-item>
        <el-menu-item index="/mediaItems" @click="clickMenu('mediaItems')">媒体列表</el-menu-item>
        <el-menu-item index="/Dock" @click="clickMenu('Dock')">技术对接</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>财务管理</template>
      <el-menu-item-group>
        <el-menu-item index="/financialInfo" @click="clickMenu('financialInfo')">财务信息</el-menu-item>
        <el-menu-item index="/withdrawRecord" @click="clickMenu('withdrawRecord')">提现记录</el-menu-item>
        <el-menu-item index="/applyWithdraw" @click="clickMenu('applyWithdraw')">申请提现</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title"><i class="el-icon-setting"></i>账户管理</template>
      <el-menu-item-group>
        <el-menu-item index="4-1">账户信息</el-menu-item>
        <el-menu-item index="4-2">修改密码</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style scoped>
.el-menu {
  /* width: 300px; */
  height: 100vh;
}
.mainMenu span {
  font-size: 20px;
  color: #333;
}
template {
  font-size: 20px;
}
</style>

<script>
export default {
  //计算属性
  computed: {
    //没有子菜单
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    //有子菜单 (这样设置会有一个问题 就是有子菜单的 永远会在没有子菜单的下面）
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      // 这里的数据就是从vuex取得
      console.log(this.$store.state);
      return this.$store.state.isCollapse;
    },
  },
  data() {
    return {
      menu: [
        {
          path: "/user",
          name: "user",
          label: "数据总览",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    //跳转路由 根据名称跳转
    clickMenu(item) {
      this.$router.push(item);
    },
  },
};
</script>