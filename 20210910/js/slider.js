function SLIDER($sliderContainerNode,imgsPath,options = {button:false,pointer:false,firstImgIndex:0}){

    /*初始化信息*/
    this.isCreateButton = options.button
    this.isCreatePointer = options.pointer
    this.index = options.firstImgIndex
    this.$sliderContainerNode = $sliderContainerNode
    this.imgsPath = imgsPath


    Object.defineProperty(this,'item',{
        get(){
            return this.index
        },
        set(value){
            this.computeCurrentPositon(value)
            this.changePointerStyle(value)
            // return value
        }
    })
    SLIDER.prototype.init = function(){
        this.createSliderNodeByImgsPath()
        this.computeWidth()
        if(this.isCreateButton){
            this.createButton()
        }
        if(this.isCreatePointer){
            this.createPointer()
            this.bindPointerListener()
        }
    }

    /*根据图片路径数组创建轮播图内容*/
    SLIDER.prototype.createSliderNodeByImgsPath = function(){
        let fragment = document.createDocumentFragment()
        let ulNode = document.createElement('ul')
        for(let i in imgsPath){
            let liNode = document.createElement('li')
            liNode.innerHTML = `<a><img src='${imgsPath[i]}' alt='轮播图' title=' '></a>`
            ulNode.appendChild(liNode)
        }
        fragment.appendChild(ulNode)
        this.$sliderContainerNode.appendChild(fragment)
    }
    /*计算并调整每一项的大小*/
    SLIDER.prototype.computeWidth = function(){
        let n = this.imgsPath.length
        let width = this.$sliderContainerNode.clientWidth
        let ulNode = $sliderContainerNode.querySelector('ul')
        ulNode.style.width = width * n + 'px'
        Array.from(ulNode.querySelectorAll('li')).forEach( (item) =>{
            item.style.width = 100 / n + '%'
        } )
        this.item = this.index
    }

    /*创建左右侧按钮*/
    SLIDER.prototype.createButton = function(){
        let _this = this
        let fragment = document.createDocumentFragment()
        let length = this.imgsPath.length
        let leftDiv = document.createElement('div')
        leftDiv.setAttribute('class','left_btn')
        leftDiv.innerText = '<<'
        let rightDiv = document.createElement('div')
        rightDiv.setAttribute('class','right_btn')
        rightDiv.innerText = '>>'
        fragment.appendChild(leftDiv)
        fragment.appendChild(rightDiv)
        /*左右按钮点击事件*/
        leftDiv.onclick = function(){
            // console.log(_this.item)
            // _this.item = ( --_this.item + length ) % length
            _this.index = (--_this.index + length) % length
            _this.item = _this.index
        }

        rightDiv.onclick = function(){
            // console.log(_this.item)
            // _this.item = ( --_this.item + length ) % length
            _this.index = ++_this.index % length
            _this.item = _this.index
        }

        this.$sliderContainerNode.appendChild(fragment)
    }

    /*根据当前位置信息调整需要显示的图片*/
    SLIDER.prototype.computeCurrentPositon = function(value){
        // console.log(value)
        let ulNode = $sliderContainerNode.querySelector('ul')
        // console.log(ulNode.clientWidth)
        ulNode.style.transform = `translateX(-${value * ulNode.clientWidth / imgsPath.length}px)`
    }

    /*根据当前位置信息调整导航样式*/
    SLIDER.prototype.changePointerStyle = function(value){
        Array.from($sliderContainerNode.querySelectorAll('.pointers .pointer')).forEach(((item,index) => {
            item.classList.remove('on')
            if(index == value){
                item.classList.add('on')
            }
        }))
    }
    /*创建底部导航*/
    SLIDER.prototype.createPointer = function(){
        let length = this.imgsPath.length
        let fragment = document.createDocumentFragment()
        let divNode = document.createElement('div')
        divNode.setAttribute('class','pointers')
        for(let i = 0 ; i < length ; i++){
            let pointerNode = document.createElement('div')
            pointerNode.setAttribute('class','pointer')
            pointerNode.setAttribute('value',`${i}`)
            if(i === this.index){
                pointerNode.classList.add('on')
            }
            divNode.appendChild(pointerNode)
        }
        fragment.appendChild(divNode)
        this.$sliderContainerNode.appendChild(fragment)
    }

    /*底部导航事件监听*/
    SLIDER.prototype.bindPointerListener = function(){
        let _this = this
        let pointers = this.$sliderContainerNode.querySelector('.pointers')
        pointers.onclick = function(e){
            let value = e.target.attributes.value.nodeValue
            _this.index = Number(value)
            _this.item = _this.index
        }
    }
}