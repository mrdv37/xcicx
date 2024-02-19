<?php

declare(strict_types=1);

namespace Xcicx\Functional;

if ( ! function_exists( 'requireFileOnce' ) ) {
	function requireFileOnce( string $filename ): mixed {
		return require_once $filename;
	}
}
