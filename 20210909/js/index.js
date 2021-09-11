var datas = [
    {title:'首页',isHot:0,url:'1',meauList:['首页1','首页2']},
    {title:'全部宝贝',isHot:1,url:'2',meauList:['全部宝贝1','全部宝贝2','全部宝贝3','全部宝贝4']},
    {title:'沙发',isHot:0,url:'3',meauList:['沙发1','沙发2']},
    {title:'椅子',isHot:0,url:'4',meauList:['椅子','椅子']},
    {title:'柜子',isHot:1,url:'5',meauList:['柜子','柜子']},
    {title:'茶几',isHot:0,url:'6',meauList:['茶几1','茶几2','茶几3']},
    {title:'展厅',isHot:0,url:'7'},
    {title:'收藏我们',isHot:0,url:'8'},
    {title:'搜索',isHot:0,url:'9'},
]
    
/*动态添加菜单内容*/
var ulNode = document.querySelector('header ul')
var ulFragment = document.createDocumentFragment()
for(var i in datas){
    var liNode = document.createElement('li')
    // liNode.innerHTML = `<a href='${datas[i].url}''>${datas[i].title}</a>`
    liNode.innerHTML = datas[i].title

    /*添加各个菜单的列表*/
    if(datas[i].meauList && datas[i].meauList.length){
        var divNode = document.createElement('div')
        divNode.setAttribute('class','meau')
        for(var j = 0 ; j < datas[i].meauList.length ; j++){
            var sapnNode = document.createElement('span')
            sapnNode.innerText=datas[i].meauList[j]
            divNode.appendChild(sapnNode)
        }
        liNode.appendChild(divNode)
    }

    /*hot标签*/
    if(datas[i].isHot){
        var hotNode = document.createElement('span')
        hotNode.setAttribute('class','hot')
        hotNode.innerText = 'hot'
        liNode.appendChild(hotNode)
    }


    ulFragment.appendChild(liNode)
}
ulNode.appendChild(ulFragment)

/*绑定事件监听*/
ulNode.onmouseover = e => {
    var meauNode = e.target.querySelector('.meau')
    if(meauNode){
        meauNode.style.visibility = 'visible'
    }
}
ulNode.onmouseout = e =>{
    var meauNode = e.target.querySelector('.meau')
    if(meauNode){
            meauNode.style.visibility = 'hidden'
    }
}

