<?php
ob_start();
?>
<div style="background-color: #00FA9A; font-size: 130%;">

<?php
$calc = $_POST['1'] + $_POST['2'] + $_POST['3'] + $_POST['4'] + $_POST['5'] + $_POST['6'] + $_POST['7'] + $_POST['8'] + $_POST['9'] + $_POST['10'] + $_POST['11'];
echo $calc;
//setcookie("newcookie", $calc, time() + (86400 * 30), "/"); // 86400 = 1 day
?> points</div>
<br>
<!--
<a href='index.php'>Return</a>
<!--
<?php
//if(count($_COOKIE) > 0) {
//	header( 'Location: index.php' ) ;
//} else {
//    echo "Cookies are disabled.";
//}
?>
-->
