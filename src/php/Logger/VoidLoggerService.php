<?php

declare(strict_types=1);

namespace Xcicx\Logger;

use Psr\Log\NullLogger as PsrNullLogger;
use Xcicx\Logger\LoggerInterface;

class VoidLoggerService extends PsrNullLogger implements LoggerInterface{}
