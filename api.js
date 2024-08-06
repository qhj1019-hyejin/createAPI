const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log('서버 시작 : loclhost:3001');
});

//console.log(uuidAPIKey.create());
/* {
    apiKey: 'YKWD8HR-YHT4XGN-JH7JQP0-6T6P32P',
    uuid: 'f4f8d447-f474-4ec2-944f-2bd8368d618a'
} */
const key = {
    apiKey: 'YKWD8HR-YHT4XGN-JH7JQP0-6T6P32P',
    uuid: 'f4f8d447-f474-4ec2-944f-2bd8368d618a'
}

// 콜론이 있는 경우 어떤 값이든 들어올 수 있다.
app.get('/api/users/:apikey/:type', async (req, res) => { 
    let {apikey,type} = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) ||!uuidAPIKey.check(apikey, key.uuid)){
        res.send('api key가 맞지 않습니다.');
    }else{
        if(type == 'kimpo'){
            let data = [
                {name : '류제홍', city: 'kimpo'},
                {name : '킹왕짱', city: 'kimpo'},
            ];
            res.send(data);
        }else if(type == 'jeju'){
            let data = [
                {name : '철수', city: 'jeju'},
                {name : '영희', city: 'jeju'},
            ];
            res.send(data);
        }else {
            res.send('없는 타입 입니다.');
        }
    }
});

app.get('/api/sales/:apikey/:type', async (req, res) => { 
    let {apikey,type} = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) ||!uuidAPIKey.check(apikey, key.uuid)){
        res.send('api key가 맞지 않습니다.');
    }else{
        if(type == 'fruit'){
            let data = [
                {product : '수박', price: '30000'},
                {product : '복숭아', price: '15000'},
            ];
            res.send(data);
        }else if(type == 'dessert'){
            let data = [
                {product : '케이크', price: '20000'},
                {product : '빙수', price: '10000'},
            ];
            res.send(data);
        }else {
            res.send('없는 타입 입니다.');
        }
    }
    
});