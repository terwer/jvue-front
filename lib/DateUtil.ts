/**
 * DateUtil.js
 *
 *@author Terwer
 *@version 1.0
 *2019/2/28 9:47
 **/
import {calendar} from "./Calendar";

// @ts-ignore
const lunar: any = calendar.solar2lunar();

/**
 * 获取当前年
 */
const getNowYear = () => {
    return lunar.lYear;
}

/**
 * 根据日期获取星期几
 * @returns {string} 星期
 */
const getWeekByDay = function () {
    const day = new Date();
    const today = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
    ]; // 创建星期数组
    // console.log(today[day.getDay()]);
    return today[day.getDay()]; // 返一个星期中的某一天，其中0为星期日
};

/**
 * 获取星期
 * @returns {string}
 */
const getClientTime = function () {
    // 获取客户端时间
    const now = new Date();
    let currDatetime = "";
    // currDatetime += now.getFullYear() + "年";
    // currDatetime +=
    //   now.getMonth() + 1 > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    // currDatetime += "月";
    // currDatetime += now.getDate() > 9 ? now.getDate() : "0" + now.getDate();
    // currDatetime += "日 ";
    currDatetime += now.getHours() > 9 ? now.getHours() : "0" + now.getHours();
    currDatetime += ":";
    currDatetime +=
        now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes();
    currDatetime += ":";
    currDatetime +=
        now.getSeconds() > 9 ? now.getSeconds() : "0" + now.getSeconds();
    return currDatetime;
};

const getPopTime = function () {
    const popTime =
        "阳历：" +
        lunar.cYear +
        "年" +
        lunar.cMonth +
        "月" +
        lunar.cDay +
        "日（" +
        lunar.astro +
        "）";
    return popTime;
};

const getTradTime = function () {
    let tradTime =
        "农历：" + lunar.lYear.toString() + "年" + lunar.IMonthCn.toString() + lunar.IDayCn.toString();
    tradTime = tradTime + "【" + calendar.toGanZhiYear(lunar.cYear) + "年 " + lunar.Animal.toString() + "】"
    return tradTime;
};

const getShengXiao = function () {
    const shengxiao =
        lunar.gzYear +
        "年" +
        lunar.gzMonth +
        "月" +
        lunar.gzDay +
        "日（" +
        lunar.Animal +
        "年）";
    return shengxiao;
};

/**
 * 获取倒计时
 * @param y 年
 * @param m 月
 * @param d 日
 */
const getCountDown = (y?: number, m?: number, d?: number) => {
    var today = new Date();

    var BigDay = new Date("September 10, 2011");
    var msPerDay = 24 * 60 * 60 * 1000;
    var timeLeft = (today.getTime() - BigDay.getTime());
    var e_daysLeft = timeLeft / msPerDay;
    var daysLeft = Math.floor(e_daysLeft);
    var yearsLeft = 0;
    if (daysLeft > 365) {
        yearsLeft = Math.floor(daysLeft / 365);
        e_daysLeft = e_daysLeft % 365;
        daysLeft = daysLeft % 365;
    }

    var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    var hrsLeft = Math.floor(e_hrsLeft);
    var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
    return yearsLeft + " 年 " + daysLeft + " 天 " + hrsLeft + " 小时 " + minsLeft + " 分钟";
}

export {getNowYear, getClientTime, getPopTime, getTradTime, getShengXiao, getWeekByDay, getCountDown};