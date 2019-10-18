/*
 * @Date: 2019-09-25 13:59:28
 * @LastEditors: Cloud
 * @LastEditTime: 2019-09-27 15:59:57
 */
(function (){
    /**
     * @description: 在5秒内选择出菜品元素
     * @param {type} 需要选择的个数num
     * @return: 选中的菜品索引，输出的数列
     */
    function Control(num) {
        // this竟然是window
        console.log(this);
        // TODO:如何获取这个数列啊，难过,因为改变了环境，即同一个环境，但是传过来的环境还是和原来的无法匹配
        this.selectors = [];
        this.newSelectors = [];
        this.count = 0;
        
        // this.svgList = document.getElementsByTagName('svg');
        this.svgList = document.getElementsByClassName('dishes')[0].children;
        this.menuList = document.getElementById('show');
        // 如何完成同时选择两项的元素
        this.interval = function(num) {
                var now = +new Date();
                var timerId = setInterval(function() {
                    // 清除所有的选中效果
                    this.remove();
                    debugger;
                    // 清除菜品栏的物品
                    this.clear(num);
                    // 选中num个随机元素
                    for(var i=0;i<num;i++) {
                        var randoms = Math.floor(Math.random()*20)+1;//1-20的范围
                        this.svgList[randoms].style.backgroundColor = this.getColor();
                        this.selectors.push(randoms);
                    }
                    
                    var current = +new Date();
                    if((current - now)>1000) {
                        clearInterval(timerId);
                        this.newSelectors = this.selectors.slice(-num);
                        window.array = [];
                        array = this.newSelectors;
                        // 此处显示svg
                        this.showSvg(window.array,num);
                    }
                
                }.bind(this),50);               

        };
    }

    Control.prototype.remove = function() {
        debugger;
        for(var j=0;j<20;j++) {
            this.svgList[j].style.backgroundColor = '';
        }
    }
    Control.prototype.getColor = function() {
        var random = Math.floor(Math.random()*25+1);
        var color = `rgb(${random*2},${random*14},${random*12})`;
        return color;
    }
    
    /**
     * @description: 获取control传递而来的slectors数组，按照其特性输出
     * @param {type} 
     * @return: 
     */
    Control.prototype.showSvg = function(array,num) {
        for(var i=0;i<num;i++) {
            var index = array[i];
            var svg_prime = this.svgList[index].cloneNode(true);
            this.menuList.appendChild(svg_prime);
            this.menuList.children[i].style.backgroundColor = '';
        }
    }
    Control.prototype.clear = function(num) {
        while(this.menuList.children.length !==0) {
            this.menuList.children[0].remove();
        }
    }

    window.Control = Control;

}());

