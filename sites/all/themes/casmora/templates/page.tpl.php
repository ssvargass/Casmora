<?php
/*
* General utility variables:
* - $base_path: The base URL path of the Drupal installation. At the very
*   least, this will always default to /.
* - $directory: The directory the template is located in, e.g. modules/system
*   or themes/bartik.
* - $is_front: TRUE if the current page is the front page.
* - $logged_in: TRUE if the user is registered and signed in.
* - $is_admin: TRUE if the user has permission to access administration pages.
*
* Page content (in order of occurrence in the default page.tpl.php):
* - $title: The page title, for use in the actual HTML content.
* - $messages: HTML for status and error messages. Should be displayed
*   prominently.
* - $tabs (array): Tabs linking to any sub-pages beneath the current page
*   (e.g., the view and edit tabs when displaying a node).
*/

?>

<!--CONTENEDOR-->
<div class="contenedor">
  <div class="region_header">   
    <?php if ($logo): ?>
      <div class="logo">
        <a href="<?php print $base_path ?>" title="<?php print t('Home') ?>">
          <img src="<?php print $logo ?>" alt="<?php print t('Home') ?>" />
        </a>
      </div>
    <?php endif ?>
    <?php print render($page['header']); ?> 
  </div>
  
  <div class="region_content">
    <?php if ($messages): ?><div class="title" id="page-title"><?php print $messages; ?></div><?php endif; ?>
    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
    <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
    <?php print render($page['content']); ?>
  </div>

  <!--FOOTER-->
  <div class="region_footer">
    <?php print render($page['footer']); ?>
  </div>
</div>   
