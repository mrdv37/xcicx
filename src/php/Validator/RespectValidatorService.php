<?php

declare(strict_types=1);

namespace Xcicx\Validator;

use Respect\Validation\Validator as RespectValidator;
use Xcicx\Validator\ValidatorInterface;

class RespectValidatorService implements ValidatorInterface {

	public function __construct() {}

	public function __call( string $name, mixed $args ) {
		return RespectValidator::$name( ...$args );
	}

}
