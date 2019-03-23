<template>
  <div class="json-object"
       v-if="isArrayObj(jsonData) === 'object'">
    <div class="json-title">
      <span v-if="jsonTitle"
            class="json-title-text">{{jsonTitle | addQuotation}}</span>
      <span v-if="jsonTitle">:</span>
      <span v-show="!isExpand"
            class="icon icon-expand"
            @click="changeExpand('expand')"></span>
      <span v-show="isExpand"
            class="icon icon-shrink"
            @click="changeExpand('shrink')"></span>
      <span class="left-brace"
            v-show="isExpand">{</span>
      <span v-show="!isExpand">Object{...}</span>
    </div>
    <div v-show="isExpand">
      <div v-for="(jsonItem,jsonIndex) in jsonData"
           :key="jsonIndex"
           class="json-body">
        <json-object v-if="isArrayObj(jsonItem)"
                     :jsonData="jsonItem"
                     :jsonTitle="jsonIndex"
                     :isLast="isLastOfObj(jsonItem,jsonData)"
                     class="son-item"></json-object>
        <div v-else
             class="normal-item">
          <span class="json-title-text">{{jsonIndex| addQuotation}}</span>
          :
          <span :class="getTypeOf(jsonItem)">{{jsonItem | addQuotation}}</span>
          <span class="comma"
                v-show="!isLastOfObj(jsonItem,jsonData)">,</span>
        </div>
      </div>
      <span class="right-brace">}</span>
      <span class="comma"
            v-show="!isLast">,</span>
    </div>

  </div>
  <div v-else>
    <div class="json-title">
      <span v-if="jsonTitle">{{jsonTitle | addQuotation}}:</span>
      <span v-show="!isExpand"
            class="icon icon-expand"
            @click="changeExpand('expand')"></span>
      <span v-show="isExpand"
            class="icon icon-shrink"
            @click="changeExpand('shrink')"></span>
      <span class="left-brace"
            v-show="isExpand">[</span>
      <span v-show="!isExpand">Arrary[{{jsonData.length}}]</span>
    </div>
    <div v-show="isExpand">
      <div v-for="(jsonItem,jsonIndex) in jsonData"
           :key="jsonIndex"
           class="json-body">
        <json-object v-if="isArrayObj(jsonItem)"
                     :jsonData="jsonItem"
                     :jsonTitle="jsonIndex"
                     :isLast="isLastOfObj(jsonItem,jsonData)"
                     class="son-item"></json-object>
        <div v-else
             class="normal-item">
          <span :class="getTypeOf(jsonItem)"> {{jsonItem | addQuotation}}</span>
          <span class="comma"
                v-show="!isLastOfObj(jsonItem,jsonData)">,</span>
        </div>
      </div>
      <span class="right-brace">]</span>
      <span class="comma"
            v-show="!isLast">,</span>
    </div>
  </div>
</template>

<script>
import { getTypeOf } from '@/utils/jsonUtil.js'

export default {
  name: 'jsonObject',
  props: {
    jsonTitle: {
      type: String,
      default: ''
    },
    jsonData: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    },
    isLast: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isExpand: true
    }
  },
  filters: {
    addQuotation: data => {
      if (getTypeOf(data) === 'string') {
        return `"${data}"`
      } else {
        return data
      }
    }
  },
  components: {},
  methods: {
    isArrayObj(data) {
      let dataType = getTypeOf(data)
      if (dataType === 'array') {
        return 'array'
      } else if (dataType === 'object') {
        return 'object'
      } else {
        return ''
      }
    },
    // 为了能在template中使用，必须注册为本组件的方法
    getTypeOf(data) {
      return getTypeOf(data)
    },
    // 是否是obj的最后一个属性
    isLastOfObj(item, objData) {
      var objKeys = Object.keys(objData)
      return item === objData[objKeys[objKeys.length - 1]]
    },
    // 展开或者收缩
    changeExpand(type) {
      if (type === 'expand') {
        this.isExpand = true
      } else {
        this.isExpand = false
      }
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.json-object {
  .json-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    &-text {
      color: #92278f;
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
    }
    .icon-expand {
      background-image: url('../assets/img/expand.svg');
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .icon-expand:hover {
      background-image: url('../assets/img/expand-active.svg');
    }
    .icon-shrink {
      background-image: url('../assets/img/shrink.svg');
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .icon-shrink:hover {
      background-image: url('../assets/img/shrink-active.svg');
    }
  }
  .json-body {
    padding-left: 24px;
    .normal-item {
      .number {
        color: #25aae2;
      }
      .string {
        color: #3ab54a;
      }
    }
  }
}
// .son-item {
//   padding-left: 12px;
// }
</style>

