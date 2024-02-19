<?php

declare(strict_types=1);

namespace Xcicx\Debug;

use Xcicx\Container\AbstractProvider;
use Xcicx\Config\ConfigInterface;
use Xcicx\Debug\DebugInterface;
use Xcicx\Debug\DebugService;
use Xcicx\Hook\HookInterface;

class DebugProvider extends AbstractProvider {

	public function provides( string $id ): bool {
		return in_array( $id, [
			DebugInterface::class
		] );
	}

	public function register(): void {
		$this->getContainer()->addShared( DebugInterface::class, DebugService::class )
			->addArgument( ConfigInterface::class )
			->addArgument( HookInterface::class );
		$this->getContainer()->get( DebugInterface::class )->hook();
	}

}
