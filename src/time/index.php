<?php
// config
date_default_timezone_set('America/Toronto');
$stringTime = date('F d Y H:i:s');
$epochTime = time();

if (isset($_POST['string-time'])) {
    $stringTime = $_POST['string-time'];
    $epochTime = strtotime($stringTime);
}

if (isset($_POST['epoch-time'])) {
    $epochTime = $_POST['epoch-time'];
    $stringTime = date('F d Y H:i:s', $epochTime);
}

?>
<form method="post">
    <label>Enter string to convert to epoch
        <input type="text" name="string-time" value="<?php echo $stringTime; ?>" placeholder="April 04 2019 00:00:00" />
    </label>
    <input type="submit" name="string-time-submit" value="Convert" />
</form>

<form method="post">
    <label>Enter epoch to convert to string
        <input type="text" name="epoch-time" value="<?php echo $epochTime; ?>" placeholder="1554350400" />
    </label>
    <input type="submit" name="epoch-time-submit" value="Convert" />
</form>

<a href="/utils/time/">Clear</a>
