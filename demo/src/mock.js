//引入mockjs
const Mock = require('mockjs')
//获取mock.random对象
const Random = Mock.Random
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

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/myTickets', 'post', productNewsData);