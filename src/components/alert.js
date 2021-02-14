/*
 * @Author: your name
 * @Date: 2021-02-07 14:20:30
 * @LastEditTime: 2021-02-08 16:11:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\components\alert.js
 */

(function (window, undefined) {
    window.alert = function (title, content, cancelBtn, confirmBtn, cancelBtnCallback, confirmBtnCallback) {
        console.log(this);
        this.cancelBtnCallback = cancelBtnCallback;
        this.confirmBtnCallback = confirmBtnCallback;
        //灰色遮罩层和弹出层
        var html1 = "<div id='alert-gray' class='fade' style='display: ;' onclick='alert.closeDialog(this);'>" +
            "<div id='pop' class='succ-pop' style='display: block;' onclick='event.stopPropagation()'>"
        //标题，内容及两个可监听按钮
        var html2 = "<div id='' class='pop-title'>" + title + "</div><div id='' class='pop-content'>" + content +
            "</div><div id='' class='pop-button'>" +
            "<button type='button' class='button' onclick='alert.bindButton(this);' style='background-color: gray;'>" + cancelBtn + "</button>" +
            "<button type='button' onclick='alert.bindButton(this);' class='button' style='background-color: cornflowerblue;'>" + confirmBtn + "</button></div></div></div>";
        var alertBox = document.createElement("div");
        alertBox.innerHTML = html1 + html2;
        document.body.appendChild(alertBox);
    }

    window.alert.__proto__ = {

        closeDialog: function () {
            let ele = document.querySelector('#alert-gray');
            ele.parentNode.removeChild(ele)
        },

        bindButton: function (that) {
            if (that.style.backgroundColor == "gray") {
                console.log("您点击了取消按钮");
                this.closeDialog();
                cancelBtnCallback();
            } else {
                console.log("您点击了确定按钮");
                document.querySelector('#alert-gray').style.display = "none";
                this.closeDialog();
                confirmBtnCallback();
            }

        }
    };

})(window);

