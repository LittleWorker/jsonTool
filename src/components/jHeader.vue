<template>
  <div class="j-header">
    <div class="j-header-title">
      JSON
      <span class="black-title">&nbsp;Helper</span>
    </div>
    <div class="j-header-tools">

    </div>
  </div>
</template>

<script>
export default {
  name: 'JHeader'
}
</script>

<style lang="scss" scoped>
.j-header {
  width: 100%;
  height: 48px;
  border-bottom: solid 1px #e5ebee;
  &-title {
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    margin-left: 24px;
    font-size: 20px;
    color: #0fd59d;
    vertical-align: middle;
    cursor: pointer;
    .black-title {
      color: #4a5560;
    }
  }
}
</style>
