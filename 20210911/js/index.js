var inputNode = document.getElementById('input')
var btnNode = document.getElementById('btn')
var msgListUlNode = document.querySelector('.msgList ul')
var noticeNode = document.querySelector('.notice')
btnNode.onclick = function(){
    addNewMsg(inputNode.value)
}

function addNewMsg(value){
    if(value === ''){
        notice('内容不能为空')
        return
    }
    let liNode = document.createElement('li')
    liNode.innerText = value
    msgListUlNode.appendChild(liNode)
    inputNode.value=''
}

function notice(value){
    
    noticeNode.classList.add('show')
    noticeNode.innerText = value
    setTimeout(()=>{
        noticeNode.classList.remove('show')
        noticeNode.innerText = ''
    },3000)
}