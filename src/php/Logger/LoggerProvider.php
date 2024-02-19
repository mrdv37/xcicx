<?php

declare(strict_types=1);

namespace Xcicx\Logger;

use Monolog\Handler\BrowserConsoleHandler as MonologBrowserConsoleHandler;
use Monolog\Handler\StreamHandler as MonologStreamHandler;
use Xcicx\Config\ConfigInterface;
use Xcicx\Container\AbstractProvider;
use Xcicx\Logger\LoggerInterface;
use Xcicx\Logger\MonologLoggerService;
use Xcicx\Logger\VoidLoggerService;

use function Xcicx\Functional\newInstance;

class LoggerProvider extends AbstractProvider {

	public function provides( string $id ): bool {
		return in_array( $id, [
			LoggerInterface::class
		] );
	}

	public function register(): void {
		if ( $this->getContainer()->get( ConfigInterface::class )->isLoggerLogging() ) {
			if ( \wp_doing_ajax() ) {
				$this->getContainer()->addShared( LoggerInterface::class, MonologLoggerService::class )
					->addArgument( 'xcicx_ajax_log' )
					->addArgument( [ newInstance(
						MonologStreamHandler::class,
						\dirname( __DIR__, 3 ).'/.ajax.log'
					) ] );
			} else {
				$this->getContainer()->addShared( LoggerInterface::class, MonologLoggerService::class )
					->addArgument( 'xcicx_console_log' )
					->addArgument( [ newInstance( MonologBrowserConsoleHandler::class ) ] );
			}
		} else {
			$this->getContainer()->addShared( LoggerInterface::class, VoidLoggerService::class );
		}
	}

}
