<?php

declare(strict_types=1);

namespace Xcicx\Config;

use Xcicx\Config\ConfigInterface;
use Xcicx\Json\JsonInterface;

class ConfigService implements ConfigInterface {

	public function __construct(
		private JsonInterface $configJson
	) {}

	public function isDebugErrorReporting(): bool {
		return $this->get( [ 'isDebugErrorReporting' ] );
	}

	public function isPluginInDevelopment(): bool {
		return $this->get( [ 'pluginIsInDevelopment' ] );
	}

	public function isLoggerLogging(): bool {
		return $this->get( [ 'isLoggerLogging' ] );
	}

	public function getPluginFile(): string {
		return $this->get( [ 'pluginFile' ] );
	}

	public function getPluginBuildDir(): string {
		return $this->get( [ 'pluginBuildDir' ] );
	}

	private function get( ...$args ): mixed {
		return $this->configJson->get( ...$args );
	}

}
