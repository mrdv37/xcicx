<?php

declare(strict_types=1);

namespace Xcicx\Functional;

if ( ! function_exists( 'requireFile' ) ) {
	function requireFile( string $filename ): mixed {
		return require $filename;
	}
}
