const express=require('express'),
dbOperation=require('./dbOperation');

dbOperation.getClients().then(res=>{
    console.log(res);
})
