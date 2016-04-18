<?
	session_start();
	if (isset($_GET['action']) && $_GET['action']=='send-form'){
		foreach ($_GET as $key => $val) {
			${$key} = $val;
		}
		
		//$to  = "sera.serduk@gmail.com" ;	

		if(isset($email) and $email!=''){
			$from  = $email ;		
		}else{
			$from='Заказ с сайта '.$_SESSION['sitename'];
		}		
		
							
		if($form_name!=''){
			$subject = $form_name." (".$_SESSION['sitename'].") \r\n"; 	
		}else{
			$subject=$from;
		}
		
		
		if($action_type=='form-message'){
		
			$emessage = "
			<html>
				Телефон:".$phone."<br/><br/>
			</html>";
		}					
			$headers  = "Content-type: text/html; charset=utf-8 \r\n";
			$headers .= "From: ".$from."\r\n";
								
			mail($to, $subject, $emessage, $headers);
			
			echo 'sended';
	}
?>