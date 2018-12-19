<template>
  <div>
    <Table border :columns="columns" class="table" :data="showData">
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
        <Button type="error" size="small" @click="remove(index)">确认收款</Button>
      </template>
    </Table>
    <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage"></Page>
  </div>
</template>

<script>
import api from "./../../axios/api.js";
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
          title: "票据号",
          key: "number"
        },
        {
          title: "状态",
          //   这里1代表已完成，0代表未收款
          key: "status"
        },
        {
          title: "出票日期",
          key: "outdate"
        },
        {
          title: "出票人",
          key: "maker"
        },
        {
          title: "票据到期日",
          key: "expireDate"
        },
        {
          title: "剩余天数",
          key: "remainDate"
        },
        {
          title: "票据金额",
          key: "ticketsMoney"
        },
        {
          title: "持有占比",
          key: "hold"
        },
        {
          title: "待收金额",
          key: "dueIn"
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
      api.JH_news("/myTickets", "type=top&key=123456").then(res => {
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
    },
    remove(index) {
      this.newsListShow.splice(index, 1);
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
