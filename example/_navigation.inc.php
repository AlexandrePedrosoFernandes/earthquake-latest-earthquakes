<?php
  echo navGroup('Core',
    navItem('/core/GenericCollectionViewExample.php', 'GenericCollectionView')
  );

  echo navGroup('Help',
    navItem('/help/HelpViewExample.php', 'HelpView')
  );

  echo navGroup('List',
    navItem('/list/DefaultListFormatExample.php', 'DefaultListFormat') .
    navItem('/list/DyfiListFormatExample.php', 'DyfiListFormat') .
    navItem('/list/ListViewExample.php', 'ListView') .
    navItem('/list/PagerListFormatExample.php', 'PagerListFormat') .
    navItem('/list/ShakeMapListFormatExample.php', 'ShakeMapListFormat')
  );

  echo navGroup('Summary',
    navItem('/summary/EventSummaryFormatExample.php', 'EventSummaryFormat')
  );
?>
