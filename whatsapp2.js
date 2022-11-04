

var  arr=[
    { name:"Shivam",para:"skjDNc",img:"https://images.unsplash.com/photo-1633187841127-8b3e776b6a41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    { name:"John",para:"kdsjzngfc",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"},
    { name:"ujjwal",para:"skjDNc",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"},
    { name:"Peter",para:"skjDNc",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"},
    { name:"Rock",para:"skjDNc",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"},
    { name:"Sam",para:"skjDNc",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"},
    { name:"Reynolds",para:"skjDNc",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"},
    { name:"Samuels",para:"skjDNc",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"},
    { name:"irfan",para:"I love you",img:"https://uploads-ssl.webflow.com/61defec4a021d8fe954c11bd/61defec4a021d81e4b4c1217_hero-2.jpg"},
];


var clutter="";

 arr.forEach(function(elem){
    clutter += `<div id="contact">
    <div id="profimg">
    <img src="${elem.img}" alt="">

    </div>
    <div id="dets">
        <h3>${elem.name}</h3>
        <p>${elem.para}</p>
    </div>
  </div>`
 })

    document.querySelector("#contact-card").innerHTML= clutter;