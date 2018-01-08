// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


// Note: token address for kovan and main can be found here: https://github.com/brandoncurtis/cryptoassets/wiki/radarrelay

export const environment = {
	production: false,
	WEB3_ENV: `kovan`,
	WEB3_NODE: `https://kovan.infura.io/VJ850OA0otGKfcTaEI33`,
	WEB3_METAMASK: `http://localhost:8545`,
	feeRecipient: '0xcdBe25d67cd8ff96AD4260fE402605A570bC4F69',
  network: {
		name: 'kovan',
    networkId: 42,
    contracts: {
      'Exchange': '0x90fe2af704b34e0224bf2299c838e04d4dcf1364',
      'TokenTransferProxy': '0x087Eed4Bc1ee3DE49BeFbd66C662B434B15d49d4',
      'ZRXToken': '0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570',
			'EtherToken': '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
			'GNTToken': '0xef7fff64389b814a946f3e92105513705ca6b990',
      'MultiSigWalletWithTimeLockExceptRemoveAuthorizedAddress':
        '0x9301A2B0dCA791Ba27B1A074Aba3Bf47bcd80Cb9',
      'TokenRegistry': '0xf18e504561f4347bea557f3d4558f559dddbae7f'
    }
  },
  currencies: [
    '1ST',
    'ADT',
    'ANT',
    'BAT',
    'BNT',
    'BQX',
    'CVC',
    'DGD',
    'DNT',
    'EDG',
    'EOS',
    'FUN',
    'GNO',
    'GNT',
    'ICN',
    'KNC',
    'LUN',
    'MCO',
    'MKR',
    'MLN',
    'MTL',
    'NMR',
    'OMG',
    'PAY',
    'QTUM',
    'REP',
    'RLC',
    'ROL',
    'SAN',
    'SNGLS',
    'SNT',
    'STORJ',
    'TAAS',
    'TKN',
    'TRST',
    'WETH',
    'WINGS',
    'ZRX'
  ]
};
