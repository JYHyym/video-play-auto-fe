<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px">
      <el-scrollbar>
        <!-- <el-menu 
          class="el-menu-vertical-demo"
          :router="true"
          default-active="/list/ongoing/gk">
          <el-menu-item index="/list/ongoing/gk">
            <el-icon><icon-menu /></el-icon>
            <span>账户列表</span>
          </el-menu-item>
        </el-menu> -->
        <el-menu 
          class="el-menu-vertical-demo"
          :router="true"
          default-active="/list/ongoing/gk"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Edit /></el-icon>
              <span>进行中</span>
            </template>
              <el-menu-item index="/list/ongoing/gk">国开</el-menu-item>
              <el-menu-item index="/list/ongoing/qs">青书</el-menu-item>
              <el-menu-item index="/list/ongoing/wc">文采</el-menu-item>
              <el-menu-item index="/list/ongoing/cx">超星</el-menu-item>
          </el-sub-menu>
          
          <el-sub-menu index="2">
            <template #title>
              <el-icon><CircleCheck /></el-icon>
              <span>已完成</span>
            </template>
              <el-menu-item index="/list/done/gk">国开</el-menu-item>
              <el-menu-item index="/list/done/qs">青书</el-menu-item>
              <el-menu-item index="/list/done/wc">文采</el-menu-item>
              <el-menu-item index="/list/done/cx">超星</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><Delete /></el-icon>
              <span>已删除</span>
            </template>
              <el-menu-item index="/list/deleted/gk">国开</el-menu-item>
              <el-menu-item index="/list/deleted/qs">青书</el-menu-item>
              <el-menu-item index="/list/deleted/wc">文采</el-menu-item>
              <el-menu-item index="/list/deleted/cx">超星</el-menu-item>
          </el-sub-menu>
          <!-- <el-menu-item index="/list/ongoing/gk">
            <el-icon><icon-menu /></el-icon>
            <span>进行中</span>
          </el-menu-item> -->
        
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px; color: white;"
              ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>admin，欢迎登录 ~(#^.^#)~</span>
        </div>
      </el-header>

      <el-main style="padding: 10px; background-color: var(--el-bg-color-page);">
        <el-scrollbar height="calc(100vh - 80px)">
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: #007eff;
  color: white;
  font-weight: 600;
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: white;
}
.el-menu-vertical-demo .el-menu {
  border-right: solid 1px var(--el-menu-border-color);
}
.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
