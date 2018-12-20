//引入mockjs
const Mock = require('mockjs')
//获取mock.random对象
const Random = Mock.Random
//这里模拟我的票据的数据
//mock一组数据
const productNewsData = function(){
    let myTicketsData = []
    for (let i = 0; i < 40; i++) {
        let newDataObject = {
            createDate: Random.date(),
            number: Random.natural(100000, 999999),
            status: Random.boolean(),
            outdate: Random.date(),
            maker: Random.cword(1, 3)+'核心企业',
            expireDate: Random.date(),
            remainDate: Random.natural(0, 365),
            ticketsMoney: Random.natural(500000, 2000000),
            hold: Random.natural(1, 100)+'%',
            dueIn: Random.natural(10000, 2000000)
        }
        myTicketsData.push(newDataObject)
    }
 
    return {
        myTicketsData: myTicketsData
    }
}

//这里模拟我的待办贴现接单数据
const discountNewsData = function(){
    let myTicketsData = []
    for (let i = 0; i < 40; i++) {
        let newDataObject = {
            createDate: Random.date(),
            require: Random.cword(1, 3)+'企业',
            number: Random.natural(100000, 999999),
            maker: Random.cword(1, 3)+'企业',
            expireDate: Random.date(),  
            ticketsMoney: Random.natural(500000, 2000000),
            discount: Random.natural(1, 100)+'%',
            discountMoney: Random.natural(10000, 2000000),
            status:Random.boolean()
        }
        myTicketsData.push(newDataObject)
    }
 
    return {
        myTicketsData: myTicketsData
    }
}
//这里模拟我的待办合同签订页面
const signedNewsData = function(){
    let myTicketsData = []
    for (let i = 0; i < 40; i++) {
        let newDataObject = {
            createDate: Random.date(),
            number: Random.natural(100000, 999999),
            signedQiYe: Random.cword(1, 3)+'企业',
            contractType: '贴现',  
            status: Random.boolean(),
            amountsMoney: Random.natural(10000, 2000000),
        }
        myTicketsData.push(newDataObject)
    }
 
    return {
        myTicketsData: myTicketsData
    }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/myTickets', 'post', productNewsData);
Mock.mock('/discount', 'post', discountNewsData);
Mock.mock('/signed', 'post', signedNewsData);

