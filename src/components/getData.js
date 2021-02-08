/*
 * @Author: your name
 * @Date: 2021-02-05 14:46:16
 * @LastEditTime: 2021-02-05 18:46:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\components\getDataRange.js
 */

    /**
       * 
       * @param dateNow :Date类
       * @param intervalDays ：间隔天数
       * @param bolPastTime  ：Boolean,判断在参数date之前，还是之后，
       */
      function getDateRange(dateNow,intervalDays,bolPastTime){
        let oneDayTime = 24 * 60 * 60 * 1000;
        let list = "";
        let lastDay;
 
        if(bolPastTime == true){
            lastDay = new Date(dateNow.getTime() - intervalDays * oneDayTime);
            // list.push(formateDate(lastDay));
            // list.push(formateDate(dateNow));
            list = formateDate(lastDay)
        }else{
            lastDay = new Date(dateNow.getTime() + intervalDays * oneDayTime);
            // list.push(formateDate(dateNow));
            // list.push(formateDate(lastDay));
            list = formateDate(lastDay)
        }
        return list;
    }
    function formateDate(time){
        let year = time.getFullYear()
        let month = time.getMonth() + 1
        let day = time.getDate()
 
        if (month < 10) {
          month = '0' + month
        }
 
        if (day < 10) {
          day = '0' + day
        }
 
        return year + '' + month + '' + day + ''
 
    }
    export {getDateRange};
