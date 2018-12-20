<template>
  <div>
    <Table border :columns="columns" class="table" :data="showData">
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">立即接单</Button>
      </template>
    </Table>
    <Page :total="dataCount" :page-size="pageSize" show-elevator  @on-change="changepage"></Page>
  </div>
</template>

<script>
import api from "./../../../axios/api.js";
export default {
  data() {
    return {
      //所有数据
      newsListShow: [],
      // 初始化信息总条数
      dataCount: 0,
      // 每页显示多少条
      pageSize: 10,
      //显示数据
      showData: [],
      columns: [
        {
          title: "创建日期",
          key: "createDate",
          sortable: true
        },
        {
          title: "合同编号",
          key: "number"
        },
        {
          title: "签约企业",
          key: "signedQiYe"
        },
        {
          title: "合同类型",
          key: "contractType"
        },
        {
          title: "合同状态",
          key: "status"
        },
        {
          title: "交易金额",
          key: "amountsMoney"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ]
    };
  },
  created() {
    this.setNewsApi();
  },
  methods: {
    setNewsApi() {
      api.JH_news("/signed", "type=top&key=123456").then(res => {
        // console.log(res.myTicketsData);
        this.newsListShow = res.myTicketsData;
        this.dataCount = res.myTicketsData.length;
        // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
        if (res.myTicketsData.length < this.pageSize) {
          this.showData = this.newsListShow;
        } else {
          this.showData = this.newsListShow.slice(0, this.pageSize);
        }
      });
    },
    changepage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.showData = this.newsListShow.slice(_start, _end);
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.newsListShow[index].name}<br>Age：${
          this.newsListShow[index].age
        }<br>Address：${this.newsListShow[index].address}`
      });
    }
  }
};
</script>

<style scoped>
.table {
  margin-top: 15px;
}
.ivu-table-cell {
  text-align: center;
}
</style>
