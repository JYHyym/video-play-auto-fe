<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { useRouter } from 'vue-router';
const router = useRouter()

const linkTo = (link: string) => {
  console.log(link)
  router.push({path: link})
}
</script>

<template>
  <el-row class="container">
    <el-col :span="14" align="center" class="left-container">
        <img alt="login" class="logo" src="@/assets/svg/login.svg" width="600" height="300" />

        <div class="wrapper">
          <HelloWorld msg="自动化教学视频播放系统" />
        </div>
    </el-col>
    <el-col :span="10">
      <nav>
        <a @click="linkTo('/list/ongoing/gk')" style="color: white; cursor: pointer;">登录</a>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </el-col>

  </el-row>
</template>

<style scoped>
.container {
  /* max-width: 1280px; */
  max-height: 100vh;
  height: 100vh;
  background: var(--el-color-primary); 
  /* padding: 4em; */
}

.left-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 2em; */
  line-height: 2;
  /* background: var(--el-color-primary); */
}

.logo {
  display: block;
  margin: 0 auto;
}

nav {
  width: 100%;
  font-size: 1em;
  text-align: left;
  margin-top: 8rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* .container  {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */
  .container {
    /* max-width: 1280px; */
    max-height: 100vh;
    height: 100vh;
    /* padding: 4em; */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .container  .wrapper {
    margin-top: 1em;
    /* display: flex;
    place-items: flex-start;
    flex-wrap: wrap; */
  }

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 8rem;
  } */
}
</style>
