<template>
  <div>
    <br>
    <div class="">
        Frist name:
        <input type="text" v-model="counter" value="">
    </div>
    <br>
    <br>
    <div>
      Last name:
      <input type="text" name="" value="counter">
    </div>
    <br>
     <button v-on:click="greet(1)">Greet</button>
      <hr>
      {{counter}}
  </div>
</template>
<script>
  //import mysql from"@/server/mysql.js"
  var http= require('http');
  export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
  greet: function (event) {
  // `this` 在方法里指当前 Vue 实例
  // `event` 是原生 DOM 事件
/*
  var opt = {
     host:'localhost',
     port:'7070',
     method:'POST',
     path:"/",
     headers:{
      /*  "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":"X-Requested-With",
        "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",
        "X-Powered-By":' 3.2.1'
        "Content-Type": 'application/json;charset=utf-8',
        "Content-Disposition": data.length
         }
}
    var body = '';
    var req = http.request(opt, function(res) {
        alert ("Got response: " + res.statusCode);
        res.on('data',function(d){
            body += d;
        }).on('end', function(){
            alert(res.headers)
            alert(body)
        });
    }).on('error', function(e) {
        alert("Got error: " + e.message);
    })
    */

    var xhr =  new XMLHttpRequest();
         xhr.open("post", "http://localhost:7070", true);
         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");//缺少这句，后台无法获取参数
         xhr.onreadystatechange = function() {
             console.log(xhr.responseText);
             if (xhr.readyState == 4 && xhr.status == 200) {
                 console.log(xhr.responseText);
             }
         };
         var content = "appid=11111&sign=222222222";
         xhr.send(content);
  if (event) {
      alert (event);



  }
}
}
}
</script>
