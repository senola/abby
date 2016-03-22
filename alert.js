(function(){
    alert('喂喂喂，这么晚还跑出去疯，哼...');
    alert('有这么好玩么，切！');
    alert('哼...');
    alert('哼哼...');
    alert('哼哼哼...');
    alert('哼哼哼哼...');
    alert('哼哼哼哼哼...');
    alert('老是在外边喝酒~说了也不听，出事了咋办！');
    alert('大胖子！');
    alert('还说放心，能放心才怪！手机还没电，丢了哪里找都不知道~');
    alert('不能喝酒，不能喝酒~想喝找我喝，我可以陪喝的……');
    alert('哼，出去不要玩的太High,别玩的回家的路都不认得了');
    alert(timeChange());
    alert('看，都几点了！！');
    alert('哼哼，我会担心的，我真的会担心的...');
})();
function timeChange() {
	var d = new Date();
    return getFullTime(d.getFullYear()) + "年" + (getFullTime(d.getMonth() + 1)) + "月" + getFullTime(d.getDate()) + "日 " + getFullTime(d.getHours()) + ":" + getFullTime(d.getMinutes()) + ":" + getFullTime(d.getSeconds());
}
function getFullTime(time) {
   if( typeof(time) == "undefined") {
      return;
   }else if(time < 10) {
      return "0" + time;  
   }else {
      return time;
   }
}
