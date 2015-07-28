<?php
$file = $_GET['file'];
$ip = $_SERVER['REMOTE_ADDR'];
$ipurl = $_GET['ip'];
$lang = $_GET['lang'];
echo $file;
echo "\n";
echo $ipurl;
?>
<html>
<form action="log.php" method="GET" id="form">
<input type="text" name="file" value="<?php echo $file; ?>">
<input type="text" name="ip" value="<?php echo $ip; ?>">
<input type="text" name="lang" value="<?php echo $lang; ?>">
</form>
<script>
var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
                        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

var x = qs["ip"];
if (qs['ip'] == 'none') {
document.getElementById("form").submit();
}
</script>

</html>
