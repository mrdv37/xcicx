<?php

/**
 * @todo
 *	This service is a quick prototype of an idea and is still buggy.
 *	Magic methods, static functions and Service Locator are required here due to limitations in WP.
 *
 * Decorates WordPress Hooks API with ID parameter (namespaced),
 * eases usage of lambda/Closure callbacks with additional parameters and
 * by doing that it also does not require hooked Class methods to be public.
 *
 *	$this->hook->addAction( $this->someMethod(...), [ $optionalMethodArguments ],
 *		'some_wp_hook_id', 'some_unique_string_as_your_id', 10, 3
 *	);
 *
 */

declare(strict_types=1);

namespace Xcicx\Hook;

use Xcicx\Hook\HookInterface;
use Xcicx\Logger\LoggerInterface;

use function Xcicx\Container\getContainer;

class HookService implements HookInterface {

	private $callbacksStore = [];

	public function __construct(
		private LoggerInterface $logger
	) {}

	public function addAction( callable $callback, array $callbackArgs, ...$args ): bool {
		$this->logger->info( sprintf(
			\__( 'add_action | %s | %s', 'xcicx' ),
			$args[0], $args[1]
		) );
		$this->callbacksStoreAdd( $args[1],
			fn( ...$hookArgs ) => $callback( ...$callbackArgs, ...$hookArgs )
		);
		return \add_action( ...\array_replace( $args, [
			1 => $this->staticMethodArray( $args[1] )
		] ) );
	}

	public function addFilter( callable $callback, array $callbackArgs, ...$args ): bool {
		$this->logger->info( sprintf(
			\__( 'add_filter | %s | %s', 'xcicx' ),
			$args[0], $args[1]
		) );
		$this->callbacksStoreAdd( $args[1],
			fn( ...$hookArgs ) => $callback( ...$callbackArgs, ...$hookArgs )
		);
		return \add_filter( ...\array_replace( $args, [
			1 => $this->staticMethodArray( $args[1] )
		] ) );
	}

	public function removeAction( ...$args ): bool {
		$this->logger->info( sprintf(
			\__( 'remove_action | %s | %s', 'xcicx' ),
			$args[0], $args[1]
		) );
		$this->callbacksStoreRemove( $args[1] );
		return \remove_action( ...\array_replace( $args, [
			1 => $this->staticMethodString( $args[1] )
		] ) );
	}

	public function removeFilter( ...$args ): bool {
		$this->logger->info( sprintf(
			\__( 'remove_filter | %s | %s', 'xcicx' ),
			$args[0], $args[1]
		) );
		$this->callbacksStoreRemove( $args[1] );
		return \remove_filter( ...\array_replace( $args, [
			1 => $this->staticMethodString( $args[1] )
		] ) );
	}

	public static function __callStatic( string $name, mixed $args ): void {
		getContainer()->get( HookInterface::class )->callbacksStoreGet( $name )( ...$args );
	}

	private function callbacksStoreGet( string $id ): callable {
		$this->logger->info( sprintf(
			\__( 'do_action/apply_filters | %s', 'xcicx' ),
			$id
		) );
		return $this->callbacksStore[ $id ];
	}

	private function callbacksStoreAdd( string $id, callable $callback ): void {
		if ( isset( $this->callbacksStore[ $id ] ) ) {
			$this->logger->warning( sprintf( \__( 'Action/filter "%s" has been added more than once.' , 'xcicx' ), $id ) );
		}
		$this->callbacksStore[ $id ] = $callback;
	}

	private function callbacksStoreRemove( string $id ): void {
		unset( $this->callbacksStore[ $id ] );
	}

	private function staticMethodArray( string $id ): array {
		return [ $this::class, $id ];
	}

	private function staticMethodString( string $id ): string {
		return $this::class.'::'.$id;
	}

}
