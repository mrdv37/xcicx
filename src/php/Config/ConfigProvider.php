<?php

declare(strict_types=1);

namespace Xcicx\Config;

use Xcicx\Config\ConfigInterface;
use Xcicx\Config\ConfigService;
use Xcicx\Container\AbstractProvider;
use Xcicx\Json\JsonInterface;

use function Xcicx\Functional\requireFile;

class ConfigProvider extends AbstractProvider {

	public function provides( string $id ): bool {
		return in_array( $id, [
			ConfigInterface::class
		] );
	}

	public function register(): void {
		$this->getContainer()->extend( JsonInterface::class )
			->addArgument( requireFile( \dirname( __DIR__, 3 ).'/config.php' ) );
		$this->getContainer()->addShared( ConfigInterface::class, ConfigService::class )
			->addArgument( JsonInterface::class );
	}

}
