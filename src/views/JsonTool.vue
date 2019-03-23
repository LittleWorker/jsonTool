<template>
  <div class="json-tool">
    <j-header></j-header>
    <div class="json-tool-body">
      <div class="left-side">
        <textarea name="jsonInput"
                  id="jsonInput"
                  placeholder="在此输入JSON字符串"
                  v-model="inputString"></textarea>
      </div>
      <div class="right-side">
        <json-object v-show="isJson"
                     :jsonData="inputJson"></json-object>
        <div class="error-input"
             v-show="!isJson">
          {{errorInfo}}
        </div>
      </div>
    </div>
    <div class="json-tool-footer">
      <a class="my-github"
         href="https://github.com/LittleWorker"
         target="_blank">https://github.com/LittleWorker</a>
    </div>
  </div>
</template>

<script>
import JsonObject from '@/components/jsonObject.vue'
import JHeader from '@/components/jHeader.vue'

export default {
  name: 'JsonTool',
  components: {
    JsonObject,
    JHeader
  },
  data() {
    return {
      inputString: '',
      inputJson: {},
      isJson: false,
      errorInfo: ''
    }
  },
  watch: {
    inputString(newVal) {
      try {
        this.inputJson = JSON.parse(newVal)
        this.isJson = true
      } catch (error) {
        this.isJson = false
        this.errorInfo = error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.json-tool {
  height: 100%;
  display: flex;
  flex-direction: column;
  &-body {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    border-bottom: solid 1px #eee;
    .left-side {
      flex: 1;
      border-right: 1px solid #e5ebee;
      padding: 12px;
      textarea {
        width: 100%;
        height: 100%;
        overflow: auto;
        resize: none;
        border: none;
      }
      textarea:focus {
        outline: none;
      }
    }
    .right-side {
      flex: 1;
      padding: 12px;
      overflow: auto;
      .error-input {
        font-size: 12px;
        color: #f1592a;
        font-weight: bold;
      }
    }
  }
  &-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 56px;
    width: 100%;
    font-size: 12px;
    a {
      display: flex;
      align-items: center;
      vertical-align: middle;
      color: #1baae4;
      cursor: pointer;
    }
    a::before {
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 4px;
      background-image: url('../assets/img/github.svg');
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>
