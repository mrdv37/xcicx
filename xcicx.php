<?php

/**
 * Plugin Name:       xcicx
 * Description:       Compound Interest Calculator
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      8.1.0
 * Author:            XX
 * License:           Copyright (C)
 * License URI:       /LICENSE.md
 * Text Domain:       xcicx
 * Domain Path:       /languages
 */

declare(strict_types=1);

namespace Xcicx;

use Xcicx\CompoundInterestCalculatorBlock\{CompoundInterestCalculatorBlockInterface, CompoundInterestCalculatorBlockProvider};
use Xcicx\Config\ConfigProvider;
use Xcicx\Container\AbstractProvider;
use Xcicx\Container\{ContainerAwareInterface, ContainerService};
use Xcicx\Debug\{DebugInterface,DebugProvider};
use Xcicx\Hook\HookProvider;
use Xcicx\Json\JsonProvider;
use Xcicx\Logger\LoggerProvider;
use Xcicx\Plugin\{PluginInterface,PluginProvider};
use Xcicx\Validator\ValidatorProvider;

use function Xcicx\Container\getContainer;
use function Xcicx\Functional\newInstance;

defined( 'WPINC' ) || exit( 'Usage outside WordPress is not possible.' );

// Start Autoloader (PSR-4)
require_once 'vendor/autoload.php';

// Create Service Container (PSR-11) and setup Service Locator function
getContainer( newInstance( ContainerService::class ) );

// Setup Service Locator method
getContainer()->inflector( ContainerAwareInterface::class )->invokeMethod( 'setContainer', [ getContainer() ] );

// Create Service Providers
foreach( [
	CompoundInterestCalculatorBlockProvider::class,
	ConfigProvider::class,
	DebugProvider::class,
	HookProvider::class,
	JsonProvider::class,
	LoggerProvider::class,
	PluginProvider::class,
	ValidatorProvider::class
] as $provider ) {
	getContainer()->addServiceProvider( newInstance( $provider ) );
}

// Start Services (load ordered)
foreach( [
	DebugInterface::class,
	PluginInterface::class,
	CompoundInterestCalculatorBlockInterface::class
] as $interface ) {
	getContainer()->get( $interface );
}
