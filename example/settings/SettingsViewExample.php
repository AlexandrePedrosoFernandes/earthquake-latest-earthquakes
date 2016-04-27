<?php
if (!isset($TEMPLATE)) {
  $TITLE = 'Settings View';

  $NAVIGATION = true;

  $HEAD = '
    <link rel="stylesheet" href="/css/index.css"/>
  ';

  $FOOT = '
    <script src="/js/bundle.js"></script>
    <script src="SettingsViewExample.js"></script>
  ';

  include 'template.inc.php';
}
?>

<div id="settings-view-example">
  <p class="alert info">This is the SettingsView</p>
</div>
