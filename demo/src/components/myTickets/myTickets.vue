<template>
    <div>
        <h1 class="item-title">我的票据</h1>
            <Tabs value="name1">
        <TabPane label="全部" name="name1">
            <!-- 模拟数据 -->
            全部
        </TabPane>
        <TabPane label="代收款" name="name2">
            <!-- 模拟数据 -->
            代收款
        </TabPane>
        <TabPane label="已完成" name="name3">
            <!-- 模拟数据 -->
            已完成
        </TabPane>
            </Tabs>
            <div class="search">
                    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
                    </Row>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.search{
    width: 40%;
}
</style>
