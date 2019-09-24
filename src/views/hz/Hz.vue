<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="home" @on-select="select" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            Home
          </template>
          <MenuItem name="home">home</MenuItem>
          <MenuItem name="list">list</MenuItem>
          <MenuItem name="detail">detail</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <!-- 右侧列表 通过路由动态加载 s -->
    <div>
      <router-view/>
    </div>
    <!-- 右侧列表 e -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      dd: ''
    };
  },
  methods: {
    select (name) {
      console.log('/' + name);
      this.$router.push('/hz/' + name);
    }
  }
};
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
</style>
