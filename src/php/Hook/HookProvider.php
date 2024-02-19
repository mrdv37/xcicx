<?php

declare(strict_types=1);

namespace Xcicx\Hook;

use Xcicx\Container\AbstractProvider;
use Xcicx\Hook\HookInterface;
use Xcicx\Hook\HookService;
use Xcicx\Logger\LoggerInterface;

class HookProvider extends AbstractProvider {

	public function provides( string $id ): bool {
		return in_array( $id, [
			HookInterface::class
		] );
	}

	public function register(): void {
		$this->getContainer()->addShared( HookInterface::class, HookService::class )
			->addArgument( LoggerInterface::class );
	}

}
