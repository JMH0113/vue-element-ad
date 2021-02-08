/*
 * @Author: your name
 * @Date: 2021-02-07 14:20:30
 * @LastEditTime: 2021-02-07 14:48:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\components\alert.js
 */

(function (window, undefined) {
    function alertComponent() {

    }

    alertComponent.prototype = {
        showDialog: function(title, content, bt1, bt2) {
            //灰色遮罩层和弹出层
            var html1 = "<div id='gray' class='fade' style='display: ;' onclick='alert.closeDialog(this);'>" +
                "<div id='pop' class='succ-pop' style='display: block;' onclick='event.stopPropagation()'>"
            //标题，内容及两个可监听按钮
            var html2 = "<div id='' class='pop-title'>" + title + "</div><div id='' class='pop-content'>" + content +
                "</div><div id='' class='pop-button'>" +
                "<button type='button' class='button' onclick='alert.bindButton(this);' style='background-color: gray;'>" + bt1 + "</button>" +
                "<button type='button' onclick='alert.bindButton(this);' class='button' style='background-color: cornflowerblue;'>" + bt2 + "</button></div></div></div>";
                var alertBox = document.createElement("div");
                alertBox.innerHTML = html1 + html2;
                document.body.appendChild(alertBox);
        },
    
        closeDialog: function (that) {
            console.log(that);
            that.style.display = "none";
        },

    bindButton: function (that) {
        if (that.style.backgroundColor == "gray") {

            console.log("您点击了取消按钮");
        } else {
            console.log("您点击了确定按钮");
        }

    }
};
window.alert = new alertComponent();
}) (window);

