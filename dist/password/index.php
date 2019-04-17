<?php
function randomPassword($length) {
    $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789!%$#()&^";
    $pass = array(); //remember to declare $pass as an array
    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
    for ($i = 0; $i < $length; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return implode($pass); //turn the array into a string
}

$password = randomPassword(8);
if (isset($_GET['length'])) {
  $password = randomPassword($_GET['length']);
}
?>
<pre>
<?php echo $password; ?>
</pre>
<hr />
<ul>
  <li><a href="?length=12">12 character password</a></li>
  <li><a href="?length=16">16 character password</a></li>
  <li><a href="?length=24">24 character password</a></li>
  <li><a href="?length=32">32 character password</a></li>
</ul>
