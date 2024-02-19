<?php

declare(strict_types=1);

namespace Xcicx\CompoundInterestCalculatorBlock;

use Xcicx\CompoundInterestCalculatorBlock\CompoundInterestCalculatorBlockInterface;
use Xcicx\CompoundInterestCalculatorBlock\CompoundInterestCalculatorBlockService;
use Xcicx\Container\AbstractProvider;
use Xcicx\Hook\HookInterface;
use Xcicx\Plugin\PluginInterface;

class CompoundInterestCalculatorBlockProvider extends AbstractProvider {

	public function provides( string $id ): bool {
		return in_array( $id, [
			CompoundInterestCalculatorBlockInterface::class
		] );
	}

	public function register(): void {
		$this->getContainer()->addShared( CompoundInterestCalculatorBlockInterface::class, CompoundInterestCalculatorBlockService::class )
			->addArgument( HookInterface::class )
			->addArgument( PluginInterface::class );
		$this->getContainer()->get( CompoundInterestCalculatorBlockInterface::class )->hook();
	}

}
