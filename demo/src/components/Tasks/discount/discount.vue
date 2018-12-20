<template>
<div class="box">
    <h1 class="item-title" @click="setMd5">{{title}}{{pw}}</h1>
    <Button type="info" class="history" @click="history">{{title}}</Button>
    <Table></Table>
</div>
</template>

<script>
import Table from "@/components/Tasks/discount/table";
import crypto from 'crypto'
export default {
    data (){
        return {
            title:'贴现页面',
            pw:''
        }
    },
    components:{
        Table
    },
    methods:{
        history(){
            if(this.title=='贴现页面'){
                this.title='接单历史'
            }else{
                this.title='贴现页面'
            }
        },
        //加密测试
        setMd5(){
            let md5 = crypto.createHash("md5")
            let a =  md5.update('this.pw')
            md5.update(a+'token')
            let fin = md5.digest('hex')
            console.log(a)
            console.log(fin)
        }
    }
}
</script>

<style scoped>
.box{
    position: relative;
}
.history{
    position: absolute;
    right: 40px;
    top: 27px;
}
</style>
