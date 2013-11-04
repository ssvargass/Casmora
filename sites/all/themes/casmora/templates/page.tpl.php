<?php
// Theme to path
global $theme_path;
// Complete path to Drupal installation and theme
$path = $base_path . $theme_path;

/* Regions:
* - $page['help']: Items for the header help.
* - $page['navigation']: Items for the header navigation.
* - $page['content']: Items for the header content.
* - $page['superior']: Items for the header superior.
* - $page['inferior']: Items for the header inferior.
* - $page['right']: Items for the header right.
* - $page['left']: Items for the header left.
*
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
  <div class="header-tot">   
    <div class="preheader-cont">        
      <div class="preheader">     
        <div class="preheader-de">   
          <!--LOGO-->
          <?php if ($logo): ?>
            <div class="logo">
              <a href="<?php print $base_path ?>" title="<?php print t('Home') ?>">
                <img src="<?php print $logo ?>" alt="<?php print t('Home') ?>" />
              </a>
            </div>
          <?php endif ?>
          <?php print render($page['header']); ?> 
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
    </div> 
  </div>
    <?php if ($messages): ?><div class="title" id="page-title"><?php print $messages; ?></div><?php endif; ?>
  <div id="cs-slider">
    <!--RHELP-->
    <?php print render($page['slider']); ?> 
  </div>

</div>   
<div class="home-cont">
  <div class="home"> 
    <div class="home-de"></div>
    <div class="clear"></div>
    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
    <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
    <?php print render($page['content']); ?>

  </div>
</div>

<!--FOOTER-->
<div class="footer-borde"></div>
<div class="footer-cont">
  <!--RINFERIOR-->
  <?php print render($page['inferior']); ?>
  <div class="footer">
    <div class="footer-top">
      <div class="fili"><img src="<?php print $path; ?>/images/fili.png" /></div>
      <?php print render($page['footer']); ?>
      <div class="footer-logo"><img src="<?php print $path; ?>/images/logo-footer.png" /></div>
      <div class="clear"></div>  
  </div>
  <div class="postfooter-cont">
    <div class="postfooter">
      <div class="footer-linea"></div>
      <?php print render($page['postfooter']); ?>
    </div>
  </div>
</div>