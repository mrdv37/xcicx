<?php

declare(strict_types=1);

namespace Xcicx\Plugin;

use Xcicx\Hook\HookInterface;
use Xcicx\Config\ConfigInterface;
use Xcicx\Plugin\PluginInterface;
use Xcicx\Validator\ValidatorInterface;

class PluginService implements PluginInterface {

	public function __construct(
		private ConfigInterface $config,
		private HookInterface $hook,
		private ValidatorInterface $validator
	) {}

	public function hook(): void {
		$this->hook->addAction( $this->activate(...), [],
			'activate_'.\plugin_basename( $this->getFilePath() ), 'plugin_activate', 10, 1
		);
		$this->hook->addAction( $this->deactivate(...), [],
			'deactivate_'.\plugin_basename( $this->getFilePath() ), 'plugin_deactivate', 10, 1
		);
	}

	public function getPath(): string {
		$dir = \dirname( __DIR__, 3 );
		if ( ! \file_exists( $dir ) ) {
			throw new \Exception( \__( 'Directory does not exist.', 'xcicx' ) );
		} else {
			return $dir;
		}
	}

	public function getFileName(): string {
		return \plugin_basename( $this->getFilePath() );
	}

	public function getFilePath(): string {
		$filepath = $this->getPath() . '/' . $this->config->getPluginFile();
		if ( ! \file_exists( $filepath ) ) {
			throw new \Exception( \__( 'Filepath does not exist.', 'xcicx' ) );
		} else {
			return $filepath;
		}
	}

	public function getBuildPath(): string {
		return $this->getPath() . '/'. $this->config->getPluginBuildDir();
	}

	public function isInDevelopment(): bool {
		return $this->config->isPluginInDevelopment();
	}

	public function getVersion(): string {
		if ( $this->isInDevelopment() ) {
			$version = '0.0.'.\time();
		} else {
			$version = $this->getMetadata()[ 'Version' ];
		}
		if ( ! $this->validator->version()->validate( $version ) ) {
			throw new \Exception( \__( 'Invalid version string.', 'xcicx' ) );
		} else {
			return $version;
		}
	}

	public function getUrl(): string {
		return \plugins_url( '', $this->getFilePath() );
	}

	private function getMetadata(): array {
		if ( ! function_exists( '\get_plugin_data' ) ){
			require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
		}
		return \get_plugin_data( $this->getFilePath() );
	}

	private function activate( bool $networkDeactivating): void {}

	private function deactivate( bool $networkWide): void {}

}
