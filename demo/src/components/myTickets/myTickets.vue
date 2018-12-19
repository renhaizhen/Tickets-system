<template>
  <div>
    <h1 class="item-title">我的票据</h1>
    <Tabs value="name1">
      <TabPane label="全部" name="name1">
        <!-- 模拟数据 -->
        <Search></Search>
        <Table></Table>
      </TabPane>
      <TabPane label="代收款" name="name2">
        <!-- 模拟数据 -->
        <Search></Search>
        <Table></Table>
      </TabPane>
      <TabPane label="已完成" name="name3">
        <!-- 模拟数据 -->
        <Search></Search>
        <Table></Table>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import Search from "@/components/myTickets/search";
import Table from "@/components/myTickets/table";
export default {
  data() {
    return {
    };
  },
  components: {
    Search,
    Table
  },
  methods: {
  }
};
</script>

<style scoped>
.search {
  width: 40%;
}
</style>
