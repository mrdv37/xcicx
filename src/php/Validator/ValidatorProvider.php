<?php

declare(strict_types=1);

namespace Xcicx\Validator;

use Xcicx\Container\AbstractProvider;
use Xcicx\Validator\ValidatorInterface;
use Xcicx\Validator\RespectValidatorService;

class ValidatorProvider extends AbstractProvider {

	public function provides( string $id ): bool {
		return in_array( $id, [
			ValidatorInterface::class
		] );
	}

	public function register(): void {
		$this->getContainer()->addShared( ValidatorInterface::class, RespectValidatorService::class );
	}

}
