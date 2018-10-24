<?php
include 'FbBot.php';

error_log('Entro aqui',3, "error_log");
$access_token = "EAAJ0gIC8ZC8ABAKeMBgWxmo2gXQ4KawcUUkOwNbwQFUZA9f2MDXHHhvLzseesB7sTZB24RycNLp4A7Qq0bOX7A3U4ZBx7dyNjEZBm8TPAXBdJ3VONZBe29tZBZCstOB1K9JhEPhbcCgwLfkdhsUrMsYHKfzG0HWZBmoll8ZBqmqQ2QOwZDZD";
$verify_token = "icibot2018";
$hub_verify_token = null;

if(isset($_REQUEST['hub_challenge'])) {
    $challenge = $_REQUEST['hub_challenge'];
    $hub_verify_token = $_REQUEST['hub_verify_token'];
}

if ($hub_verify_token === $verify_token) {
    echo $challenge;
}

$bot = new FbBot();
$bot->setHubVerifyToken($verify_token);
$bot->setaccessToken($access_token);
$input = json_decode(file_get_contents('php://input'), true);
$message = $bot->readMessage($input);
error_log(print_r($message,true),3, "error_log");
$botmessage = $bot->sendMessage($message);

