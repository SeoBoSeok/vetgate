<?php
/**
 * ekko functions file
 *
 * @package ekko
 * by KeyDesign
 */

require_once( get_template_directory() . '/core/init.php');

 // -------------------------------------
 // Edit below this line
 // -------------------------------------
 // 


function my_login_logo_url_title() {
     return 'What you want instead of Powered by Wordpress'; 
} 
add_filter( 'login_headertitle', 'my_login_logo_url_title' );

// 워드프레스 기본 로그인 페이지 커스터마이징
function my_login_logo() { ?>
     <script>
     
     </script>
     <style type="text/css">
     body.login div#login h1 a {
          width: 100%;
          background: url('http://dev.securitycamp.net/wp-content/uploads/2020/11/logo_on.png') center center no-repeat;
          margin-bottom: 10px;
     }
     .login #backtoblog a, .login #nav a {
     text-decoration: none;
     color: #ffffff;
     }
     #loginform p {
          display: none;
     }
     #loginform .user-pass-wrap {
          display: none;
     }
     #login #nsl-custom-login-form-main .nsl-container-login-layout-below {
          padding-top: 0;
     }
     .login #nav {
          display: none;
     }
     </style>
     <?php }
     add_action( 'login_enqueue_scripts', 'my_login_logo' );