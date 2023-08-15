<script lang="ts" setup>
import { ref } from 'vue'
import students  from '@/data/accounts.js'
// import login from '@/testFunctions/login.js'
import apis from '@/apis/index.ts'
const tableData = ref(students)

tableData.value.forEach((element: any, index:number) => {
  element.index = index + 1
})

const handleClick = async (index: number, row: any) => {
  // runSelenium()
  // login(row.link, row.account, row.psw)
  try {
    const res = await apis.linkInfo.postLogin({query: {
      link: row.link,
      account: row.account,
      psw: row.psw
    }})
    console.log(res)
  } catch (error) {
    
  }
  
}
</script>

<template>
  <el-table :data="tableData" stripe height="calc(100vh - 80px)" style="width: 100%">
    <el-table-column prop="index" label="序号" width="80" />
    <el-table-column prop="account" label="账号"  />
    <el-table-column prop="psw" label="密码" />
    <el-table-column prop="link" label="url" />
    <el-table-column prop="school" label="学校" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button  size="small" @click="handleClick(scope.$index, scope.row)">操作</el-button>
        <!-- <el-button link type="primary" size="small">Edit</el-button> -->
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
</style>
