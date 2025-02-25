<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpdb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'mysql-8.2' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@r-)B8Ck>ja=l*g@3c&hKNn+b{HK`dutoefP%3)=vfj<yPY<.osI?M;S >D[?6ys' );
define( 'SECURE_AUTH_KEY',  'vZY1iiH&G>[oloJa8 itu5i<qw*yohC$9U(Ai5xCy=5t(R?-;aXA(J4uCPVi^0:L' );
define( 'LOGGED_IN_KEY',    'RI-V5.p_bF[h1,PYw$=t~*TVA(sHNxvz16g3=`i1aDG7G@MQQWiLCUPhPRdD0@I$' );
define( 'NONCE_KEY',        ' `T{^!e5<3m-w4sP^Q{A@_1mK!=}?JbT/fF0@W+Ci})rXM$c[j||0@hWx>S@kZGy' );
define( 'AUTH_SALT',        'vKY!pEuM1+:J`+3R|Z$^T[!e^g@Za4RFdu~:I,{d^Ttu8E3(%YjSa(0~xhrEflo|' );
define( 'SECURE_AUTH_SALT', 'x82 `~3R;KI6twNvCi-0.*zg@8pyp2*q{@G0$E(pcmBqJoKyC4SS|BX5/I/VG8Cy' );
define( 'LOGGED_IN_SALT',   'd,(w!N1*-eUdTRB1,Dh<~OzUY(Z1r89%=hvC`mg~<zXjj25*Tf(5#kEhAtN(yh/M' );
define( 'NONCE_SALT',       'LE4gh#k0)`gG+9#e$Gm3><,RUk~6Qy<80*Z2BWjuowi<U~cdU,Glfics||z8e5y]' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
