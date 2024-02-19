<?php

declare(strict_types=1);

namespace Xcicx\Plugin;

use Xcicx\Config\ConfigInterface;
use Xcicx\Container\AbstractProvider;
use Xcicx\Hook\HookInterface;
use Xcicx\Plugin\PluginInterface;
use Xcicx\Plugin\PluginService;
use Xcicx\Validator\ValidatorInterface;

class PluginProvider extends AbstractProvider {

	public function provides( string $id ): bool {
		return in_array( $id, [
			PluginInterface::class
		] );
	}

	public function register(): void {
		$this->getContainer()
			->addShared( PluginInterface::class, PluginService::class )
			->addArgument( ConfigInterface::class )
			->addArgument( HookInterface::class )
			->addArgument( ValidatorInterface::class );
		$this->getContainer()
			->get( PluginInterface::class )
			->hook();
	}

}
