var tenant1 = {
	"_id": ObjectId('54ee2150b7a669fc22b7f6b9'),
	"code": "TN1",
	"name": "Client 1",
	"description": "This is a test tenant client",
	"oauth": {
		"secret": "My secret phrase",
		"redirectURI": "http://domain.com",
		"grants": ["password", "refresh_token"]
	},
	"applications": [
		{
			"product": "PROD1",
			"package": "PROD1_PCK1",
			"appId": ObjectId('54ee2cee203674ba271d57a6'),
			"description": "Tenant 1 takes package 1",
			"_TTL": 172800,
			"keys": [
				{
					"key": "19c03e42c750467c3f8481fbe26f2fef",
					"extKeys": [
						{
							"expDate": newDate().getTime() + 86400000,
							"extKey": "4232477ed993d167ec13ccf8836c29c400fef7eb3d175b1f2192b82ebef6fb2d129cdd25fe23c04f856157184e11f7f57b65759191908cb5c664df136c7ad16a56a5917fdeabfc97c92a1f199e457e31f2450a810769ff1b29269bcb3f01e3d2",
							"device": null,
							"geo": null
						}
					],
					"config": {
						"urac": {
							"hashIterations": 1024,
							"seedLength": 32,
							"link": {},
							"tokenExpiryTTL": 2 * 24 * 3600 * 1000
						},
						"example03": {
							"tenantName": "Client One"
						}
					}
				}
			]
		},
		{
			"product": "PROD1",
			"package": "PROD1_PCK1",
			"appId": ObjectId('54ee376de950de122a6eb7b2'),
			"description": "This application will override the default ACL of the package to get example03",
			"_TTL": 172800,
			"acl": {
				"urac": {},
				"example03": {}
			},
			"keys": [
				{
					"key": "41eb3256ce660a891205d0a0eca19421",
					"extKeys": [
						{
							"expDate": 1451512800000,
							"extKey": "4232477ed993d167ec13ccf8836c29c4550e88551c880d36fd42223ef81e0a6e1f668d42edc70d3d98fa8d28757e951bd7a04cf43829b5c2f38ed8c9ee87f03b79e564dd6aeaf8c37e90c92e6a69dccbd52b5a7812cad139bfbeaab69b023322",
							"device": null,
							"geo": null
						}
					],
					"config": {
						"urac": {
							"hashIterations": 1024,
							"seedLength": 32,
							"link": {},
							"tokenExpiryTTL": 2 * 24 * 3600 * 1000
						},
						"example03": {
							"tenantName": "Client One"
						}
					}
				}
			]
		}
	]
};