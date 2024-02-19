<?php

declare(strict_types=1);

namespace Xcicx\Logger;

use Monolog\Logger as MonologLogger;
use Xcicx\Logger\LoggerInterface;

class MonologLoggerService extends MonologLogger implements LoggerInterface {

	function addRecord( ...$args ): bool {
		return parent::addRecord( ...\array_replace( $args, [
			1 => $args[1].' | '.\debug_backtrace( DEBUG_BACKTRACE_IGNORE_ARGS, 4 )[3][ 'class' ]
		] ) );
	}

}
