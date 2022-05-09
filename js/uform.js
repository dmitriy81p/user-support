$(document).ready(function(){
    // Форма 1
    $('#f1_form').submit(function(){
        var fname1   = $('#f1_name').val();
        var fphone1  = $('#f1_phone').val();
        var fcheck1  = $('#check').prop('checked');
        SendForm (fname1, fphone1, fcheck1, 0, 0, 0, 0, 1, 'LEADFORM1', 'leadform1');
        return false;
    });
    // Форма 2
    $('#f2_form').submit(function(){
        var fname2   = $('#f2_name').val();
        var fphone2  = $('#f2_phone').val();
        var fcheck2  = $('#check2').prop('checked');
        var fsalary2  = $('#f2_salary').val();
        var ftax2  = $('#f2_tax').val();
        var fdevices2  = $('#f2_devices').val();
        var foutsourcing2  = $('#f2_outsourcing').val();
        SendForm (fname2, fphone2, fcheck2, fsalary2, ftax2, fdevices2, foutsourcing2, 2, 'CALC', 'calc');
        return false;
    });
    // Форма 3
    $('#f3_form').submit(function(){
        var fname3   = $('#f3_name').val();
        var fphone3  = $('#f3_phone').val();
        var fcheck3  = $('#check4').prop('checked');
        SendForm (fname3, fphone3, fcheck3, 0, 0, 0, 0, 3, 'LEADFORM2', 'leadform2');
        return false;
    });
    // Форма 4
    $('#f4_form').submit(function(){
        var fname4   = $('#f4_name').val();
        var fphone4  = $('#f4_phone').val();
        var fcheck4  = $('#check6').prop('checked');
        SendForm (fname4, fphone4, fcheck4, 0, 0, 0, 0, 4, 'LEADFORM3', 'leadform3');
        return false;
    });
});

function SendForm(fname, fphone, fcheck, fsalary, ftax, fdevices, foutsourcing, fnum, yandex, google){
   $.ajax({
       url: "uformact.php", // куда отправляем
       type: "post", // метод передачи
       dataType: "json", // тип передачи данных
       data: { // что отправляем
           "fname":         fname,
           "fphone":        fphone,
           "fcheck":        fcheck,
           "fsalary":       fsalary,
           "ftax":          ftax,
           "fdevices":      fdevices,
           "foutsourcing":  foutsourcing,
           "fnum":          fnum
       },
       // после получения ответа сервера
       success: function(data){
           if (data.isSuccess) {
               yaCounter50211490.reachGoal('MAGOAL');
               yaCounter50211490.reachGoal(yandex);
               dataLayer.push({'event': 'event-to-ga', 'eventCategory' : 'goal', 'eventAction' : 'maGoal'});
               dataLayer.push({'event': 'event-to-ga', 'eventCategory' : 'goal', 'eventAction' : google});
           }
           $.fancybox(data.result);
       },
       error: function (jqXHR, text, error) {
         // Вывод сообщения об ошибке отправки
         $.fancybox("<p style='color: red;'>Возникла ошибка! Попробуйте позже!<p></br>"+error);
       }
   });
 }
