"use strict"

//Ajax requests

function getData(name, type, fn, id){
  var headers = name === 'favorites' ? {"Authorization": auth_key} : {};
  $.ajax({
    method: "GET",
    headers: headers,
    url: urls[name + type[0].toUpperCase() + type.slice(1)] + (!!id? id +'.json' : '')
  })
  .then(stories => fn(stories))
  .fail(error => console.log(error))
}

function postData(name, type, fn, arg, password){     //arg === id or email
  if(type === 'login' || type === 'signup'){
    var data = JSON.stringify({
      email: arg,
      password: password
    })
  }

  $.ajax({
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    url: urls[name + type[0].toUpperCase() + type.slice(1)] + (type === 'delete'? arg + '.json' : ''),
    data: data || ''
  })
  .then(stories => fn(stories))
  .fail(error => fn(error))
}

































