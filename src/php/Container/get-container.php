<?php

declare(strict_types=1);

namespace Xcicx\Container;

use Xcicx\Container\ContainerInterface;

use function Xcicx\Functional\newInstance;

if ( ! function_exists( 'getContainer' ) ) {
	function getContainer( ContainerInterface|string $objectOrClass = null ): ContainerInterface {
		static $container;
		if ( ! \is_null( $objectOrClass ) ) {
			if ( \is_a( $objectOrClass, ContainerInterface::class ) ) {
				$container = $objectOrClass;
			} else {
				$container = newInstance( $objectOrClass );
			}
		}
		return $container;
	}
}
