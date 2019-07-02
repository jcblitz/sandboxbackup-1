

/*
 * GET //programs
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getPrograms = function(req, res){
    res.status(200);
    
    // set response body and send
    res.json([{
    	"id": 232,
    	"legacySystemDetails": [{
    		"originatingSystem": "olm",
    		"id": "15598",
    		"name": "OE_VENDOR"
    	}, {
    		"originatingSystem": "ats",
    		"id": "KNOI-BRAN",
    		"name": "KNOI-BRAN"
    	}, {
    		"originatingSystem": "a2b",
    		"id": "1000065",
    		"name": "OE_VENDOR/200"
    	}],
    	"name": "VEND",
    	"status": "Active",
    	"programLegalEntity": "sample-legal-entityname",
    	"effectiveDate": "2018-03-01",
    	"expirationDate": "2019-03-01",
    	"ouId": "DLL",
    	"sbuId": "Healthcare",
    	"assetProgramId": "3232321",
    	"assetConditions": [{
    		"name": "new",
    		"eligible": true
    	}, {
    		"name": "used",
    		"eligible": true
    	}, {
    		"name": "reconditioned",
    		"eligible": true
    	}, {
    		"name": "remanufactured",
    		"eligible": false
    	}, {
    		"name": "unknown",
    		"eligible": true
    	}, {
    		"name": "discontinued",
    		"eligible": true
    	}, {
    		"name": "other",
    		"eligible": false
    	}],
    	"reportingEntity": {
    		"id": 65655,
    		"name": "IFRS-US-DLL Financial Services, Inc."
    	},
    	"invoicingTemplate": {
    		"id": "dsa-d4343-34343cfd",
    		"name": "Invoice With Asset Detail and Account Statement"
    	},
    	"validity": [{
    		"id": "dsda-323-sda",
    		"name": "Approval",
    		"days": 180
    	}],
    	"paymentFrequency": [{
    		"name": "annual",
    		"eligible": true
    	}, {
    		"name": "semi-annual",
    		"eligible": true
    	}, {
    		"name": "quarterly",
    		"eligible": true
    	}, {
    		"name": "monthly",
    		"eligible": false
    	}, {
    		"name": "seasonal",
    		"eligible": true
    	}, {
    		"name": "miscellaneous",
    		"eligible": true
    	}],
    	"minimumTerm": 6,
    	"maximumTerm": 72,
    	"purchaseOptions": [{
    		"name": "fmv",
    		"eligible": true
    	}, {
    		"name": "$1out",
    		"eligible": true
    	}, {
    		"name": "fppo",
    		"eligible": true
    	}],
    	"contractTermination": {
    		"renewPeriodsToBeBilled": 2,
    		"servicePeriodsToBeBilled": 12,
    		"annualDiscountRateFactor": 3,
    		"rolloverIncentivePercentage": 10,
    		"lateAssetReturnBilling": {
    			"id": 1,
    			"name": "Recurring Billing"
    		}
    	},
    	"interimRent": {
    		"passThroughPercentageForRentPercent": 2.22,
    		"passthroughPercentageForInterimService": 5.60
    	},
    	"latePolicies": [{
    			"id": 2,
    			"olmId": "12121",
    			"type": "charge",
    			"name": "LC Rate 5% Grace 4 Days Min $4"
    		},
    		{
    			"id": 0,
    			"olmId": "12121",
    			"type": "interest",
    			"name": "LI Fixed Rate 18% Grace 34 Days"
    		}
    	],
    	"noticeRequiredToPreventRenewal": 23,
    	"fees": [{
    		"id": 1003,
    		"minimumAmount": 0.00,
    		"maximumAmount": 10000000.00
    	}],
    	"classification": [{
    		"type": "class1",
    		"name": " Retail"
    	}, {
    		"type": "class3",
    		"name": "Portfolio"
    	}],
    	"salesTax": {
    		"passThroughEligible": true,
    		"taxPaidToVendor": true,
    		"responsibleForBilling": {
    			"siteId": "0000001221-0187",
    			"vendorId": "108982"
    		},
    		"responsibleForCollecting": {
    			"siteId": "0000001221-0199",
    			"vendorId": "108982"
    		},
    		"responsibleForRemitting": {
    			"siteId": "0000001221-0133",
    			"vendorId": "108982"
    		}
    	},
    	"propertyTax": {
    		"includedInRate": true,
    		"bundled": true,
    		"invoiceConsolidated": false,
    		"overridable": true,
    		"adminFeeRate": 2.22,
    		"adminFeeMin": 0.9,
    		"adminFeeMax": 1.2
    	},
    	"privateLabel": [{
    		"id": 23232,
    		"name": "mylabel",
    		"olmId": "2332",
    		"url": "www.dll.com"
    	}],
    	"service": {
    		"effectiveDate": "2018-01-01",
    		"expirationDate": "2019-01-01"
    	},
    	"products": {
    		"loans": true,
    		"conditionalSale": true,
    		"financeAgreement": true,
    		"twinPlant": true,
    		"installmentPaymentAgreement": true,
    		"saleAndLeaseback": true,
    		"service": true,
    		"trueRental": true,
    		"usage": true
    	},
    	"faxFunding": true,
    	"rental": true,
    	"evergreenEligible": true,
    	"cta": true,
    	"progressPayment": true,
    	"forcedPlacedInsurance": true,
    	"autoCashApplication": false,
    	"telephoneVerification": true,
    	"syndicationEligble": true,
    	"eSignature": true,
    	"uccDetails": {
    		"responsibleForFiling": "Lessor",
    		"uccs": [{
    			"purchaseOptionId": "3213131",
    			"minimumAmount": 45.22,
    			"maximumAmount": 100.55,
    			"timingOfFiling": "After the fact"
    		}]
    	}
    }]);
};

/*
 * GET //programs/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: integer) - path parameter - id
 */
exports.getPrograms2 = function(req, res){
    var singleResponse = {
        "id": 232,
        "legacySystemDetails": [{
            "originatingSystem": "olm",
            "id": "15598",
            "name": "OE_VENDOR"
        }, {
            "originatingSystem": "ats",
            "id": "VEND",
            "name": "VEND"
        }, {
            "originatingSystem": "a2b",
            "id": "100304",
            "name": "OE_VENDOR"
        }],
        "name": "VEND",
        "status": "Active",
        "programLegalEntity": "sample-legal-entityname",
        "effectiveDate": "2018-03-01",
        "expirationDate": "2019-03-01",
        "ouId": "DLL",
        "sbuId": "Office Equipment",
        "assetProgramId": "50",
        "assetConditions": [{
            "name": "new",
            "eligible": true
        }, {
            "name": "used",
            "eligible": true
        }, {
            "name": "reconditioned",
            "eligible": true
        }, {
            "name": "remanufactured",
            "eligible": false
        }, {
            "name": "unknown",
            "eligible": true
        }, {
            "name": "discontinued",
            "eligible": true
        }, {
            "name": "other",
            "eligible": false
        }],
        "reportingEntity": {
            "id": 65655,
            "name": "IFRS-US-DLL Financial Services, Inc."
        },
        "invoicingTemplate": {
            "id": "dsa-d4343-34343cfd",
            "name": "Invoice With Asset Detail and Account Statement"
        },
        "validity": [{
            "id": "dsda-323-sda",
            "name": "Approval",
            "days": 180
        }],
        "paymentFrequency": [{
            "name": "annual",
            "eligible": true
        }, {
            "name": "semi-annual",
            "eligible": true
        }, {
            "name": "quarterly",
            "eligible": true
        }, {
            "name": "monthly",
            "eligible": false
        }, {
            "name": "seasonal",
            "eligible": false
        }, {
            "name": "miscellaneous",
            "eligible": false
        }],
        "minimumTerm": 6,
        "maximumTerm": 72,
        "purchaseOptions": [{
            "name": "fmv",
            "eligible": true
        }, {
            "name": "$1out",
            "eligible": true
        }, {
            "name": "fppo",
            "eligible": true
        }],
        "contractTermination": {
            "renewPeriodsToBeBilled": 2,
            "servicePeriodsToBeBilled": 12,
            "annualDiscountRateFactor": 3,
            "rolloverIncentivePercentage": 10,
            "lateAssetReturnBilling": {
                "id": 1,
                "name": "Recurring Billing"
            }
        },
        "interimRent": {
            "passThroughPercentageForRentPercent": 30,
            "passthroughPercentageForInterimService": 40
        },
        "latePolicies": [{
            "id": 2,
            "olmId": "176632293038316931909983953587531997872",
            "type": "charge",
            "name": "LC Rate 5% Grace 4 Days Min $4"
        }, {
            "id": 0,
            "olmId": "176632293038511568966941908884659692208",
            "type": "interest",
            "name": "LI Fixed Rate 18% Grace 34 Days"
        }],
        "noticeRequiredToPreventRenewal": 23,
        "fees": [{
            "id": 1003,
            "minimumAmount": 0.00,
            "maximumAmount": 10000000.00
        }],
        "classification": [{
            "type": "class1",
            "name": " RETAIL"
        }, {
            "type": "class3",
            "name": "NON_PORTFOLIO"
        }, {
            "type": "class2",
            "name": "DIRECT"
        }],
        "salesTax": {
            "passThroughEligible": true,
            "taxPaidToVendor": true,
            "responsibleForBilling": {
                "siteId": "0000001221-0187",
                "vendorId": "108982"
            },
            "responsibleForCollecting": {
                "siteId": "0000001221-0199",
                "vendorId": "108982"
            },
            "responsibleForRemitting": {
                "siteId": "0000001221-0133",
                "vendorId": "108982"
            }
        },
        "propertyTax": {
            "includedInRate": true,
            "bundled": true,
            "invoiceConsolidated": false,
            "overridable": true,
            "adminFeeRate": 10,
            "adminFeeMin": 6,
            "adminFeeMax": 125
        },
        "privateLabel": [{
            "id": 23232,
            "name": "DE LAGE LANDEN",
            "olmId": "100300",
            "url": "www.lesseedirect.com"
        }],
        "service": {
            "effectiveDate": "2018-01-01",
            "expirationDate": "2019-01-01"
        },
        "products": {
            "loans": true,
            "conditionalSale": true,
            "financeAgreement": true,
            "twinPlant": true,
            "installmentPaymentAgreement": true,
            "saleAndLeaseback": true,
            "service": true,
            "trueRental": true,
            "usage": true
        },
        "faxFunding": true,
        "rental": true,
        "evergreenEligible": true,
        "cta": true,
        "progressPayment": true,
        "forcedPlacedInsurance": true,
        "autoCashApplication": false,
        "telephoneVerification": true,
        "syndicationEligble": true,
        "eSignature": true,
        "uccDetails": {
            "responsibleForFiling": "Lessor",
            "uccs": [{
                "purchaseOptionId": "fmv",
                "minimumAmount": 100000,
                "maximumAmount": 499999.99,
                "timingOfFiling": "After the fact"
            },
            {
                "purchaseOptionId": "fmv",
                "minimumAmount": 500000,
                "maximumAmount": 1000000,
                "timingOfFiling": "Timely"
            },
            {
                "purchaseOptionId": "$1out",
                "minimumAmount": 20000,
                "maximumAmount": 99999.99,
                "timingOfFiling": "After the fact"
            },
            {
                "purchaseOptionId": "$1out",
                "minimumAmount": 100000,
                "maximumAmount": 1000000,
                "timingOfFiling": "Timely"
            }
            ]
        }
    };
    
    req.check('id', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);
    
    // set response body and send
    res.json(singleResponse);
};