<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Добро пожаловать на главную страницу!</p>
    <RouterLink to="/about">
      На другую страницу
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.5;
  }
}
</style>
