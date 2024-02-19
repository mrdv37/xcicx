<?php

declare(strict_types=1);

namespace Xcicx\Debug;

use Xcicx\Config\ConfigInterface;
use Xcicx\Debug\DebugInterface;
use Xcicx\Hook\HookInterface;

class DebugService implements DebugInterface {

	public function __construct(
		private ConfigInterface $config,
		private HookInterface $hook,
	) {}


	public function hook(): void {
		if ( $this->config->isDebugErrorReporting() ) {
			$this->hook->addAction( $this->errorReporting(...), [],
				'wp_loaded', 'debug_error_reporting', 10, 0
			);
		}
		$this->hook->addAction( $this->muteJqueryMigrateLogs(...), [],
			'wp_enqueue_scripts', 'plugin_mute_jquery_migrate_logs', 10, 0
		);
	}

	private function errorReporting(): void {
		if ( \is_super_admin() ) {
			\error_reporting( E_ALL & ~E_DEPRECATED );
			\ini_set( 'xdebug.var_display_max_depth', 10 );
			\ini_set( 'xdebug.var_display_max_children', 999 );
			\ini_set( 'xdebug.var_display_max_data', 999 );
		}
	}

	private function muteJqueryMigrateLogs(): bool {
		return wp_add_inline_script( 'jquery-migrate', 'if ( typeof jQuery == \'function\' ) { jQuery.migrateMute = true; }', 'before' );
	}

}
