/*
 * @Date: 2019-09-25 08:31:48
 * @LastEditors: Cloud
 * @LastEditTime: 2019-09-27 15:58:08
 */
(function() {
    function Select() {
        this.listes = document.getElementsByTagName('li');
        this.that = new Control();
        console.log(this.that);
    }
    Select.prototype.chooseOne = function() {
        // 提供选择元素的操作
        this.listes[0].addEventListener('click',
            this.that.interval.bind(this.that,1)
        ,false);
        // 提供显示元素的操作
        // alert(window.array);
    }
    Select.prototype.chooseTwo = function() {
        this.listes[1].addEventListener('click',
            this.that.interval.bind(this.that,2)
        ,false);
    }
    Select.prototype.chooseFive = function() {
        this.listes[2].addEventListener('click',
            this.that.interval.bind(this.that,5)
        ,false);
    }
    Select.prototype.chooseReset = function() {
        this.listes[3].addEventListener('click',
            function() {
                // this指的的当前点击按钮
                var that = new Control();
                console.log(that);
                debugger;
                that.clear(5);
                that.remove();
            }
        ,false);
    }


    window.Select = Select;
    var button = new Select();
    button.chooseOne();
    button.chooseTwo();
    button.chooseFive();
    button.chooseReset();
}());
// 外部测试
// var s = new Select();

