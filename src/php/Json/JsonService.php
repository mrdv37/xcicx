<?php

declare(strict_types=1);

namespace Xcicx\Json;

use Xcicx\Json\JsonInterface;

class JsonService implements JsonInterface {

	private array $json;

	public function __construct(
		string $json
	) {
		$this->json = \json_decode( $json, true );
	}
	
	public function get( array $keys = null ): mixed {
		if ( $keys ) {
			$value = $this->json;
			for( $i = 0; $i < count( $keys ); $i++ ) {
				$value = $value[ $keys[ $i ] ];
			}
			return $value;
		} else {
			return $this->json;
		}
	}

}
