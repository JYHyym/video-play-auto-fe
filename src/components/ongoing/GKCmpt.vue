<script lang="ts" setup>
import { ref } from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

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

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}
</script>

<template>
  <div class="clearfix">
    
    <div style="display: flex;">
          <el-button type="primary" plain>下载模板</el-button>
 
          <el-upload
            ref="upload"
            class="upload-demo"
            style="margin-left: 10px"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :limit="1"
            :on-exceed="handleExceed"
            :auto-upload="false"
          >
            <template #trigger>
              <el-button type="primary">选择.xlsx文件</el-button>
            </template>

            <el-button class="ml-3" style="margin-left: 10px" type="success" @click="submitUpload">
              上传文件
            </el-button>

            <template #tip>
              <div class="el-upload__tip text-red">
                限制上传1份文件，新文件将覆盖旧文件
              </div>
            </template>
          </el-upload>
      
    </div>
    

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
  </div>
</template>

<style scoped>
</style>
