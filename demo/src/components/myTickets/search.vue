<template>
  <div class="search">
    <Row>
      <Col span="6">
        <select class="select">
          <option value="volvo">票据号</option>
          <option value="saab">创建时间</option>
          <option value="opel">状态</option>
          <option value="audi">出票日期</option>
        </select>
      </Col>
      <Col span="14"> <Input v-model="value" placeholder="Enter something..."  /></Col>
      <Col span="3" offset="1"><Button type="info">搜索</Button></Col>
    </Row>
  </div>
</template>
<script>
export default {
    data () {
        return {
            value:''
        }
    }
};
</script>

<style scoped>
.select{
    height: 31px;
    /*清除select的边框样式 */
    border: none;
    /*清除select聚焦时候的边框颜色*/
    outline: none;
}

</style>
