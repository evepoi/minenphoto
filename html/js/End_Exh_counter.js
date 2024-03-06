//타이머 전시 예정 
function counter(){
    //var dday = new Date("Apr 7,2018,09:00:00").getTime(); //디데이
            var dday = new Date("2024-02-29 00:00:00").getTime(); //디데이
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
                    $('#End_Exh').hide();
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
                    $('#End_Exh').html('전시중');
                }
            }, 1000);
        }
        counter();