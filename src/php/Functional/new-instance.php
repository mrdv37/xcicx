<?php

declare(strict_types=1);

namespace Xcicx\Functional;

if ( ! function_exists( 'newInstance' ) ) {
	function newInstance( string $class, mixed ...$args ): object {
		return new $class( ...$args );
	}
}
