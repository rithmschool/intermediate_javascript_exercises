"use strict";

/////Ajax requests////
function getData(name, type, fn, id){
  var headers = name === 'favorites' ? {"Authorization": auth_key} : {};
  $.ajax({
    method: "GET",
    headers: headers,
    url: urls[name + type[0].toUpperCase() + type.slice(1)] + (!!id? id +'.json' : '')
  })
  .then(stories => fn(stories))
  .fail(error => fn(error))
}

function postData(name, type, fn, arg, password){     //arg === id or email
  var data = '';
  var header = '';

  if(type === 'login' || type === 'signup'){
    data = JSON.stringify({
      email: arg,
      password: password
    })
  }

  if(type === 'add'){
    data = JSON.stringify(arg);
    header = auth_key
  }

  $.ajax({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": header
    },
    url: urls[name + type[0].toUpperCase() + type.slice(1)],
    data: data
  })
  .then(stories => fn(stories))
  .fail(error => fn(error))
}

function deleteData(name, type, fn, id){
  $.ajax({
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": auth_key
    },
    url: urls[name + type[0].toUpperCase() + type.slice(1)] + id + '.json'

  })
  .then(stories => fn(200))
  .fail(error => fn(error))
}
































