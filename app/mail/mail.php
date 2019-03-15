<?php
include 'MailChimp.php';

use \DrewM\MailChimp\MailChimp;

$api_key = '1d3e851785186da0c48a7c00299eae75-us11';
$list_id = 'd5a543b667';

$MailChimp = new MailChimp($api_key);

if($_POST) {
		if(isset($_POST['check'])){

		}else{
			$_POST['check'] = "off";
		}
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
		$check = $_POST['check'];

    $result = $MailChimp->post("lists/$list_id/members", [
                    'email_address' => $email,
										'merge_fields' => ['FNAME'=>$fname, 'LNAME'=>$lname, 'SUB'=> $check],
										'status'        => 'subscribed',
								]);


    if ($MailChimp->success()) {
        echo 'suc';

    } else {
				// echo $MailChimp->getLastError();
				$subscriber_hash = $MailChimp->subscriberHash($email);
				$result = $MailChimp->put("lists/$list_id/members/$subscriber_hash", [
							'merge_fields' => ['FNAME'=>$fname],
							'status'        => 'subscribed',
					]);
    }
}
?>