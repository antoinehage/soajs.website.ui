'use strict';

module.exports = {
	"serviceName": "example03",
	"errors": {},
	"schema": {
		"commonFields": {
			"firstName": {
				"source": ['query.firstName'],
				"required": true,
				"default": "John",
				"validation": {
					"type": "string"
				}
			},
			"lastName": {
				"source": ['query.lastName'],
				"required": true,
				"validation": {
					"type": "string"
				}
			}
		},
		"/testGet": {
			"_apiInfo":{
				"l": "Test Get"
			},
			"commonFields": ["firstName", "lastName"]
		},
		"/buildName": {
			"_apiInfo":{
				"l": "Build Name"
			},
			"commonFields": ["firstName", "lastName"]
		}
	}
};