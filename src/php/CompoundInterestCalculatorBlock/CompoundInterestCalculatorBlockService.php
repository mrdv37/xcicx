<?php

declare(strict_types=1);

namespace Xcicx\CompoundInterestCalculatorBlock;

use Xcicx\Filter\FilterInterface;
use Xcicx\Hook\HookInterface;
use Xcicx\Plugin\PluginInterface;

class CompoundInterestCalculatorBlockService implements CompoundInterestCalculatorBlockInterface {

	public function __construct(
		private HookInterface $hook,
		private PluginInterface $plugin
	) {}

	public function hook(): void {
		$this->hook->addAction( $this->register(...), [],
			'init', 'compound_interest_calculator_register_block_type', 10, 0
		);
	}

	public function render( array $attributes, string $content, \WP_Block $block ): string {
		return '<div '.\wp_kses_data( \get_block_wrapper_attributes( [
			'class' => 'xcicx-css-scope',
			'data-wp-block-attributes' => \json_encode( $block->attributes )
		] ) ).'></div>';
	}

	private function register(): \WP_Block_Type|false {
		return \register_block_type(
			$this->plugin->getBuildPath().'/php/CompoundInterestCalculatorBlock/block',
			[
				'render_callback' => $this->render(...),
				'attributes' => [
					'xcicxTitle' => [
						'type' => 'string',
						'default' => \__( 'Compound Interest Calculator', 'xcicx' )
					],
					'xcicxVersementInitialLabel' => [
						'type' => 'string',
						'default' => \__( 'Versement initial', 'xcicx' )
					],
					'xcicxVersementInitialInitialValue' => [
						'type' => 'number',
						'default' => 1000
					],
					'xcicxVersementInitialMin' => [
						'type' => 'number',
						'default' => 0
					],
					'xcicxVersementInitialMax' => [
						'type' => 'number',
						'default' => 100000
					],
					'xcicxVersementInitialStep' => [
						'type' => 'number',
						'default' => 100
					],
					'xcicxVersementInitialColor' => [
						'type' => 'string',
						'default' => '#ec695d'
					],
					'xcicxVersementsReguliersLabel' => [
						'type' => 'string',
						'default' => \__( 'Versements réguliers', 'xcicx' )
					],
					'xcicxVersementsReguliersInitialValue' => [
						'type' => 'number',
						'default' => 50
					],
					'xcicxVersementsReguliersMin' => [
						'type' => 'number',
						'default' => 0
					],
					'xcicxVersementsReguliersMax' => [
						'type' => 'number',
						'default' => 100000
					],
					'xcicxVersementsReguliersStep' => [
						'type' => 'number',
						'default' => 50
					],
					'xcicxRendementPrevisionnelLabel' => [
						'type' => 'string',
						'default' => \__( 'Rendement prévisionnel', 'xcicx' )
					],
					'xcicxRendementPrevisionnelInitialValue' => [
						'type' => 'number',
						'default' => 4
					],
					'xcicxRendementPrevisionnelMin' => [
						'type' => 'number',
						'default' => 0
					],
					'xcicxRendementPrevisionnelMax' => [
						'type' => 'number',
						'default' => 100
					],
					'xcicxRendementPrevisionnelStep' => [
						'type' => 'number',
						'default' => 1
					],
					'xcicxDureeLabel' => [
						'type' => 'string',
						'default' => \__( 'Durée', 'xcicx' )
					],
					'xcicxDureeInitialValue' => [
						'type' => 'number',
						'default' => 30
					],
					'xcicxDureeMin' => [
						'type' => 'number',
						'default' => 1
					],
					'xcicxDureeMax' => [
						'type' => 'number',
						'default' => 100
					],
					'xcicxDureeStep' => [
						'type' => 'number',
						'default' => 1
					],
					'xcicxTotalVersementsLabel' => [
						'type' => 'string',
						'default' => \__( 'Total des versements', 'xcicx' )
					],
					'xcicxTotalVersementsColor' => [
						'type' => 'string',
						'default' => '#163359'
					],
					'xcicxTotalInteretsLabel' => [
						'type' => 'string',
						'default' => \__( 'Total des intérêts composés potentiels', 'xcicx' )
					],
					'xcicxTotalInteretsColor' => [
						'type' => 'string',
						'default' => '#78cabb'
					],
					'xcicxTotalMontantLabel' => [
						'type' => 'string',
						'default' => \__( 'Votre nouveau capital potentiel', 'xcicx' )
					],
					'xcicxAnneeLabel' => [
						'type' => 'string',
						'default' => \__( 'Année', 'xcicx' )
					],
					'xcicxInteretsLabel' => [
						'type' => 'string',
						'default' => \__( 'Intérêts', 'xcicx' )
					],
					'xcicxMontantAvantInteretsLabel' => [
						'type' => 'string',
						'default' => \__( 'Montant avant intérets', 'xcicx' )
					],
					'xcicxMontantApresInteretsLabel' => [
						'type' => 'string',
						'default' => \__( 'Montant après intérêts', 'xcicx' )
					],
					'xcicxAnsLabel' => [
						'type' => 'string',
						'default' => \__( 'ans', 'xcicx' )
					]
				]
			]
		);
	}

}
