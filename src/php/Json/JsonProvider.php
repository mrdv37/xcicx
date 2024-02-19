<?php

declare(strict_types=1);

namespace Xcicx\Json;

use Xcicx\Container\AbstractProvider;
use Xcicx\Json\JsonInterface;
use Xcicx\Json\JsonService;

class JsonProvider extends AbstractProvider {

	public function provides( string $id ): bool {
		return in_array( $id, [
			JsonInterface::class
		] );
	}

	public function register(): void {
		$this->getContainer()->add( JsonInterface::class, JsonService::class );
	}

}
