<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    if($_POST['fnum'] <> ""){
      if($_POST['fname'] == "")         $errors[] = "Укажите, пожалуйста, Ваше имя.     <br/>";
      if($_POST['fphone'] == "")        $errors[] = "Укажите, пожалуйста, Ваш телефон.     <br/>";
      if($_POST['fcheck'] == "false")   $errors[] = "Примите, пожалуйста, наши условия политики конфиденциальности.     <br/>";
      if($_POST['fnum'] == 2){
        if($_POST['fsalary'] == "")       $errors[] = "Укажите, пожалуйста, зарплату штатного специалиста.     <br/>";
        if($_POST['ftax'] == "")          $errors[] = "Укажите, пожалуйста, Ваши налоги и взносы (ФОТ).     <br/>";
        if($_POST['fdevices'] == "")      $errors[] = "Укажите, пожалуйста, количество устройств на обслуживании.     <br/>";
        if($_POST['foutsourcing'] == "")  $errors[] = "Укажите, пожалуйста, стоимость аутсорсинга.     <br/>";
      }
      // если форма без ошибок
      if(empty($errors)){
          // собираем данные из формы
          $message  = "Заполнена форма №".$_POST['fnum']."<br/><br/>";
          $message  .= "Имя клиента: ".$_POST['fname']."<br/>";
          $message .= "Телефон клиента: ".$_POST['fphone']."<br/>";
          if($_POST['fnum'] == 2){
            $message  .= "Зарплата штатного специалиста: ".$_POST['fsalary']."<br/>";
            $message  .= "Налоги и взносы (ФОТ): ".$_POST['ftax']."<br/>";
            $message  .= "Количество устройств на обслуживании: ".$_POST['fdevices']."<br/>";
            $message  .= "Стоимость аутсорсинга: ".$_POST['foutsourcing']."<br/>";
          }
          send_mail($message); // отправим письмо
          // выведем сообщение об успехе
          $msg_box = "<p style='color: green; font-family: 'Roboto'; font-weight: 200;letter-spacing: 0.01rem;'>Ваша заявка принята.     <br/></p>";
      }else{
          // если были ошибки, то выводим их
          $msg_box = "";
          foreach($errors as $one_error){
              $msg_box .= "<p style='color: red; font-family: 'Roboto'; font-weight: 200;letter-spacing: 0.01rem;'>$one_error</p>";
          }
      }
      // делаем ответ на клиентскую часть в формате JSON
      echo json_encode(array(
          'result' => $msg_box
      ));
    }
// функция отправки письма
function send_mail($message){
  // почта, на которую придет письмо
  $mail_to = "sales@users.support";
  // тема письма
  $subject = "Заявка с формы сайта";
  // заголовок письма
  $headers= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
  $headers .= "From: noreply <noreply@users.support>\r\n"; // от кого письмо
  // отправляем письмо
  mail($mail_to, $subject, $message, $headers);
}

?>
