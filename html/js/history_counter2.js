//타이머 전시 예정 
function counter(){
    //var dday = new Date("Apr 7,2018,09:00:00").getTime(); //디데이
            var dday = new Date("2023-12-01 00:00:00").getTime(); //디데이
            setInterval(function(){
                var now = new Date(); //현재 날짜 가져오기
                var distance = dday - now;
                var d = Math.floor(distance / (1000 * 60 * 60 * 24));
                var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var s = Math.floor((distance % (1000 * 60)) / 1000);
                var view = '';
                if(s < 10){
                    s = '0'+s;
                }
                if (distance<0) {
                    $('#count_history2').html('2023.12.01. ~ 2024.02.28. ｜ 영선갤러리 소장전'); //기록내용
                } else {
                    if (d>0) {
                        view = view+d +'일 ';
                    }
                    if (h>0) {
                        view = view+h+':';
                    }
                    if (m>0) {
                        view = view+m+':';
                    }
                    $('#count_history2').html(view+s+'후 전시 ｜ 영선갤러리 소장전'); //기록내용
                }
            }, 1000);
        }
        counter();