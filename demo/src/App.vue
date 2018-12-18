<template>
  <div id="app">
    <template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="md-volume-up" size="20" />
                            消息
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="md-person" size="20" />
                            账户设置
                            <Dropdown>
        
            <Icon type="ios-arrow-down" size="20"></Icon>
        
        <DropdownMenu slot="list">
            <DropdownItem>企业信息</DropdownItem>
            <DropdownItem>账号管理</DropdownItem>
        </DropdownMenu>
    </Dropdown>
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-redo" size="20" />
                            退出
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                <router-link to="/MyTickets">我的票据</router-link>
                            </template>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                我的待办
                            </template>
                            <MenuItem name="2-1"><router-link to="/discount">贴现接单</router-link></MenuItem>
                            <MenuItem name="2-2"><router-link to="/signed">合同签订</router-link></MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                账户设置
                            </template>
                            <MenuItem name="3-1">企业信息</MenuItem>
                            <MenuItem name="3-2">账户管理</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                       <keep-alive>
                     <router-view></router-view>
                      </keep-alive>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
