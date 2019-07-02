
/*
 * Api Documentation
 *
 * Update to force push
 */


var programs = require("./routes/programs.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define('/programs', 'GET', programs.getPrograms);
Sandbox.define('/programs/{id}', 'GET', programs.getPrograms2);

Sandbox.define('/api/v1/programs','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "meta": {
            "itemCount": 10
        },
        "data": [{
            "id": 1200,
            "legacySystemDetails": [{
                "originatingSystem": "ATS",
                "id": 1222,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }, {
                "originatingSystem": "OLM",
                "id": 1221,
                "name": "OE_VENDOR",
                "programId": "15598"
            }],
            "name": "OE_VENDOR15",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2016-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1540,
                "name": "New",
                "eligible": true
            }, {
                "id": 1541,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1542,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1543,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1544,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1545,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1546,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1140,
                "name": "Line of Credit",
                "days": 120
            }, {
                "id": 1141,
                "name": "Approval",
                "days": 90
            }],
            "paymentFrequencies": [{
                "id": 1320,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1321,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1322,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1323,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1324,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1325,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1200,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1201,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1202,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1141,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }, {
                "id": 1140,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }],
            "fees": [{
                "id": 1402,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }, {
                "id": 1401,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }, {
                "id": 1400,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }],
            "classifications": [{
                "id": 1260,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1261,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1262,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1261,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1702,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1703,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1260,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1700,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1701,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1400,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1401,
                "name": "Sale And Leaseback",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": [{
                    "id": 1180,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 200000,
                    "maximumAmount": 499999.99,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1181,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 500000,
                    "maximumAmount": 10000000,
                    "timingOfFiling": "Timely"
                }]
            },
            "documents": [{
                "id": 1361,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1360,
                "docCatalogId": "1530401111",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }]
        }, {
            "id": 1138,
            "legacySystemDetails": [{
                "originatingSystem": "OLM",
                "id": 1114,
                "name": "OE_VENDOR",
                "programId": "15598"
            }, {
                "originatingSystem": "ATS",
                "id": 1115,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }, {
                "originatingSystem": "A2B",
                "id": 1113,
                "name": "OE_VENDOR",
                "programId": "100304"
            }],
            "name": "OE_VENDOR1",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2016-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1398,
                "name": "New",
                "eligible": true
            }, {
                "id": 1399,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1400,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1401,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1402,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1403,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1404,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1081,
                "name": "Approval",
                "days": 90
            }, {
                "id": 1080,
                "name": "Line of Credit",
                "days": 120
            }],
            "paymentFrequencies": [{
                "id": 1199,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1200,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1201,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1202,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1203,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1204,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1121,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1122,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1123,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1091,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }, {
                "id": 1092,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }],
            "fees": [{
                "id": 1299,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }, {
                "id": 1300,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }, {
                "id": 1301,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }],
            "classifications": [{
                "id": 1178,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1179,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1180,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1185,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }, {
                "id": 1186,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1263,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1264,
                "name": "Sale And Leaseback",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": []
            },
            "documents": [{
                "id": 1196,
                "docCatalogId": "1530401119",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1197,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }]
        }, {
            "id": 1140,
            "legacySystemDetails": [{
                "originatingSystem": "OLM",
                "id": 1117,
                "name": "OE_VENDOR",
                "programId": "15598"
            }, {
                "originatingSystem": "A2B",
                "id": 1116,
                "name": "OE_VENDOR",
                "programId": "100304"
            }, {
                "originatingSystem": "ATS",
                "id": 1118,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }],
            "name": "OE_VENDOR2",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2016-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1405,
                "name": "New",
                "eligible": true
            }, {
                "id": 1406,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1407,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1408,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1409,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1410,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1411,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1083,
                "name": "Approval",
                "days": 90
            }, {
                "id": 1082,
                "name": "Line of Credit",
                "days": 120
            }],
            "paymentFrequencies": [{
                "id": 1205,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1206,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1207,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1208,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1209,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1210,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1124,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1125,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1126,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1094,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }, {
                "id": 1093,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }],
            "fees": [{
                "id": 1304,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }, {
                "id": 1303,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }, {
                "id": 1302,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }],
            "classifications": [{
                "id": 1181,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1182,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1183,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1188,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }, {
                "id": 1187,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1265,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1266,
                "name": "Sale And Leaseback",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": []
            },
            "documents": [{
                "id": 1199,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1198,
                "docCatalogId": "1530401119",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }]
        }, {
            "id": 1142,
            "legacySystemDetails": [{
                "originatingSystem": "A2B",
                "id": 1119,
                "name": "OE_VENDOR",
                "programId": "100304"
            }, {
                "originatingSystem": "ATS",
                "id": 1121,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }, {
                "originatingSystem": "OLM",
                "id": 1120,
                "name": "OE_VENDOR",
                "programId": "15598"
            }],
            "name": "OE_VENDOR4",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2016-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1412,
                "name": "New",
                "eligible": true
            }, {
                "id": 1413,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1414,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1415,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1416,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1417,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1418,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1085,
                "name": "Approval",
                "days": 90
            }, {
                "id": 1084,
                "name": "Line of Credit",
                "days": 120
            }],
            "paymentFrequencies": [{
                "id": 1211,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1212,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1213,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1214,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1215,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1216,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1127,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1128,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1129,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1095,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }, {
                "id": 1096,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }],
            "fees": [{
                "id": 1306,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }, {
                "id": 1305,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }, {
                "id": 1307,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }],
            "classifications": [{
                "id": 1184,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1185,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1186,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1189,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }, {
                "id": 1190,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1267,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1268,
                "name": "Sale And Leaseback",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": []
            },
            "documents": [{
                "id": 1201,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1200,
                "docCatalogId": "1530401119",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }]
        }, {
            "id": 1000,
            "legacySystemDetails": [{
                "originatingSystem": "ATS",
                "id": 1000,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }, {
                "originatingSystem": "A2B",
                "id": 1001,
                "name": "OE_VENDOR",
                "programId": "100304"
            }, {
                "originatingSystem": "OLM",
                "id": 1002,
                "name": "OE_VENDOR",
                "programId": "15598"
            }],
            "name": "OE_VENDOR",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2006-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1000,
                "name": "New",
                "eligible": true
            }, {
                "id": 1006,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1002,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1004,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1003,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1005,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1001,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1001,
                "name": "Line of Credit",
                "days": 120
            }, {
                "id": 1000,
                "name": "Approval",
                "days": 90
            }],
            "paymentFrequencies": [{
                "id": 1003,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1005,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1002,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1004,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1001,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1000,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1001,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1002,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1000,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1000,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }, {
                "id": 1001,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }],
            "fees": [{
                "id": 1001,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }, {
                "id": 1034,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }, {
                "id": 1028,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }, {
                "id": 1032,
                "feeId": 1020,
                "minAmount": null,
                "maxAmount": null
            }, {
                "id": 1000,
                "feeId": 1002,
                "minAmount": 0,
                "maxAmount": 100
            }, {
                "id": 1026,
                "feeId": 1000,
                "minAmount": 0,
                "maxAmount": 10000000
            }, {
                "id": 1030,
                "feeId": 1004,
                "minAmount": 0,
                "maxAmount": 15
            }, {
                "id": 1036,
                "feeId": 1022,
                "minAmount": null,
                "maxAmount": null
            }],
            "classifications": [{
                "id": 1002,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1000,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1001,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1002,
                "olmId": "4386045",
                "name": "COECO OFFICE SYSTEMS, INC",
                "description": "COECO OFFICE SYSTEMS, INC",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1325,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1326,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1005,
                "olmId": "95254",
                "name": "DE LAGE LANDEN PUBLIC FINANCE",
                "description": "DE LAGE LANDEN PUBLIC FINANCE",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1331,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1332,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1142,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1528,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1529,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1001,
                "olmId": "8233041",
                "name": "KBA DOCUSYS INC",
                "description": "KBA DOCUSYS INC",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1323,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1324,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1146,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1536,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1537,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1145,
                "olmId": "95379",
                "name": "RICOH LEASING",
                "description": "DE LAGE LANDEN",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1534,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1535,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1144,
                "olmId": "38288261",
                "name": "DOCUMENT TECHNOLOGIES LEA",
                "description": "DOCUMENT TECHNOLOGIES LEA",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1532,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1533,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1000,
                "olmId": "32466",
                "name": "KK OFFICE LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1321,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1322,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1147,
                "olmId": "95369",
                "name": "MINOLTA FINANCIAL SVCS.",
                "description": "MINOLTA FINANCIAL SVCS.",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1538,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1539,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1004,
                "olmId": "95252",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES, INC.",
                "description": "DE LAGE LANDEN",
                "logoName": "USADLL.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1329,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1330,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1143,
                "olmId": "95381",
                "name": "RISO CAPITAL",
                "description": "RISO CAPITAL",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1530,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1531,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1003,
                "olmId": "95245",
                "name": "COECO FINANCIAL SERVICES",
                "description": "COECO FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1327,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1328,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1002,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1005,
                "name": "Sale And Leaseback",
                "eligible": true
            }, {
                "id": 1003,
                "name": "Twin Plant",
                "eligible": true
            }, {
                "id": 1007,
                "name": "Rental Fleet",
                "eligible": true
            }, {
                "id": 1001,
                "name": "Conditional Sale",
                "eligible": true
            }, {
                "id": 1000,
                "name": "Loans",
                "eligible": true
            }, {
                "id": 1006,
                "name": "Service",
                "eligible": true
            }, {
                "id": 1004,
                "name": "Installment Payment Agreement",
                "eligible": true
            }, {
                "id": 1008,
                "name": "Usage",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": [{
                    "id": 1000,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 100000,
                    "maximumAmount": 499999.99,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1001,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 500000,
                    "maximumAmount": 10000000,
                    "timingOfFiling": "Timely"
                }, {
                    "id": 1002,
                    "purchaseOptionId": "$1BO",
                    "minimumAmount": 20000,
                    "maximumAmount": 99999.99,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1003,
                    "purchaseOptionId": "$1BO",
                    "minimumAmount": 100000,
                    "maximumAmount": 10000000,
                    "timingOfFiling": "Timely"
                }, {
                    "id": 1004,
                    "purchaseOptionId": "FPPO",
                    "minimumAmount": 20000,
                    "maximumAmount": 99999.99,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1005,
                    "purchaseOptionId": "FPPO",
                    "minimumAmount": 100000,
                    "maximumAmount": 10000000,
                    "timingOfFiling": "Timely"
                }]
            },
            "documents": [{
                "id": 1032,
                "docCatalogId": "1530401119",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1024,
                "docCatalogId": "1530400644",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1022,
                "docCatalogId": "1530400458",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1026,
                "docCatalogId": "1530400834",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1000,
                "docCatalogId": "1530399974",
                "required": true,
                "ancillary": false,
                "autoGenerate": true
            }, {
                "id": 1028,
                "docCatalogId": "1530400934",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1020,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1030,
                "docCatalogId": "1530401035",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }]
        }, {
            "id": 1001,
            "legacySystemDetails": [{
                "originatingSystem": "A2B",
                "id": 1004,
                "name": "OE_VENDOR NO EARLY TERMINATION FEE",
                "programId": "100305"
            }, {
                "originatingSystem": "ATS",
                "id": 1003,
                "name": "OE_VENDOR NO EARLY TERMINATION FEE",
                "programId": "OE_VENDOR NO EARLY TERMINATION FEE"
            }, {
                "originatingSystem": "OLM",
                "id": 1005,
                "name": "OE_VENDOR NO EARLY TERMINATION FEE",
                "programId": "15600"
            }],
            "name": "OE_VENDOR NO EARLY TERMINATION FEE",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2008-01-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1007,
                "name": "New",
                "eligible": true
            }, {
                "id": 1013,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1009,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1011,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1010,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1012,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1008,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1003,
                "name": "Line of Credit",
                "days": 180
            }, {
                "id": 1002,
                "name": "Approval",
                "days": 90
            }],
            "paymentFrequencies": [{
                "id": 1009,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1011,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1008,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1010,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1007,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1006,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 63,
            "purchaseOptions": [{
                "id": 1004,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1005,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1003,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1003,
                "olmId": "176632293038122294853025998290404303536",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }, {
                "id": 1002,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }],
            "fees": [{
                "id": 1037,
                "feeId": 1022,
                "minAmount": null,
                "maxAmount": null
            }, {
                "id": 1035,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }, {
                "id": 1031,
                "feeId": 1004,
                "minAmount": 0,
                "maxAmount": 15
            }, {
                "id": 1002,
                "feeId": 1002,
                "minAmount": 0,
                "maxAmount": 100
            }, {
                "id": 1027,
                "feeId": 1000,
                "minAmount": 0,
                "maxAmount": 10000000
            }, {
                "id": 1029,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }, {
                "id": 1033,
                "feeId": 1020,
                "minAmount": null,
                "maxAmount": null
            }, {
                "id": 1003,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }],
            "classifications": [{
                "id": 1005,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1003,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1004,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1016,
                "olmId": "32346",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "COORDINATED LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1353,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1354,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1014,
                "olmId": "95345",
                "name": "Centric Leasing",
                "description": "CENTRIC LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1349,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1350,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1034,
                "olmId": "95387",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES, INC.",
                "description": "TGI OFFICE AUTOMATION LEA A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": "blank.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1389,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1390,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1036,
                "olmId": "95388",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "UBEC LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1393,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1394,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1140,
                "olmId": "32392",
                "name": "DEC COPIERS LEASING",
                "description": "DEC COPIERS LEASING",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1524,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1525,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1007,
                "olmId": "32281",
                "name": "AMERICAN BUSINESS EQUIPMENT LEASING, A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "ABE LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": "USAABEL.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1335,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1336,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1008,
                "olmId": "3047056",
                "name": "ABS FINANCIAL",
                "description": "ABS FINANCIAL",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1337,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1338,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1026,
                "olmId": "95259",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES, INC.",
                "description": "FIRST CHOICE BUS.MACHINES",
                "logoName": "blank.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1373,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1374,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1023,
                "olmId": "95258",
                "name": "DOCUTEAM",
                "description": "DOCUTEAM",
                "logoName": "blank.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1367,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1368,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1017,
                "olmId": "32377",
                "name": "COPYTRONICS INFO. SYSTEMS",
                "description": "COPYTRONICS INFO. SYSTEMS",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1355,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1356,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1028,
                "olmId": "32472",
                "name": "LESLIE DIGITAL IMAGING",
                "description": "LESLIE DIGITAL IMAGING",
                "logoName": "blank.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1377,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1378,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1020,
                "olmId": "95356",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "DOCUMATION LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": "blank.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1361,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1362,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1037,
                "olmId": "95336",
                "name": "VIRGINIA BUSINESS SYSTEMS",
                "description": "VIRGINIA BUSINESS SYSTEMS",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1395,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1396,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1141,
                "olmId": "3779120",
                "name": "DEC OFFICE LEASING",
                "description": "DEC OFFICE LEASING",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1526,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1527,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1010,
                "olmId": "95231",
                "name": "BLUE TECHNOLOGIES INC",
                "description": "BLUE TECHNOLOGIES INC",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1341,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1342,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1032,
                "olmId": "95303",
                "name": "PACIFIC OFFICE AUTOMATION",
                "description": "PACIFIC OFFICE AUTOMATION",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1385,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1386,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1012,
                "olmId": "32341",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES, INC.",
                "description": "CALTRONICS BUSINESS SYS",
                "logoName": "blank.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1345,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1346,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1038,
                "olmId": "32623",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "WESTCOASTTERMINALSLEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1397,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1398,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1018,
                "olmId": "95350",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "COPYWORLD LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1357,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1358,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1006,
                "olmId": "32277",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "A&A OFFICE LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1333,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1334,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1031,
                "olmId": "32530",
                "name": "OFFICIA IMAGING INC",
                "description": "OFFICIA IMAGING INC",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1383,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1384,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1039,
                "olmId": "32632",
                "name": "ZENO FUNDING GROUP",
                "description": "ZENO FUNDING GROUP",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1399,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1400,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1011,
                "olmId": "32340",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "CALIFORNIA COPY LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1343,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1344,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1035,
                "olmId": "32586",
                "name": "TGI OFFICE AUTOMATION LLC",
                "description": "TGI OFFICE AUTOMATION LLC",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1391,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1392,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1019,
                "olmId": "95252",
                "name": "De Lage Landen Financial Services, Inc.",
                "description": "DE LAGE LANDEN",
                "logoName": "USADLL.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1359,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1360,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1024,
                "olmId": "32416",
                "name": "EDWARDS BUSINESS SYSTEMS",
                "description": "EDWARDS BUSINESS SYSTEMS",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1369,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1370,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1030,
                "olmId": "95369",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES, INC.",
                "description": "MINOLTA FINANCIAL SVCS. A DIVISION OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": "blank.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1381,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1382,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1029,
                "olmId": "32477",
                "name": "LOFFLER BUSINESS SYS.INC.",
                "description": "LOFFLER BUSINESS SYS.INC.",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1379,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1380,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1021,
                "olmId": "95257",
                "name": "DOCUMATION, INC.",
                "description": "DOCUMATION, INC.",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1363,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1364,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1148,
                "olmId": "12708208",
                "name": "STRATIX LEASING.",
                "description": "STRATIX LEASING",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1540,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1541,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1027,
                "olmId": "32471",
                "name": "LASER RESOURCES INC LCC",
                "description": "LASER RESOURCES INC LCC",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1375,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1376,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1009,
                "olmId": "32304",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "ALTERNATIVE LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1339,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1340,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1022,
                "olmId": "32401",
                "name": "DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "DOCUNET LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1365,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1366,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1025,
                "olmId": "32424",
                "name": "Enoch Equipment Leasing",
                "description": "ENOCH EQUIPMENT LEASING A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": "USAENOCH.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1371,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1372,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1033,
                "olmId": "32539",
                "name": "PREFERRED BUSINESS SYSTEMS LEASING, A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "description": "PREFERRED BUSINESS SYSTEM A PROGRAM OF DE LAGE LANDEN FINANCIAL SERVICES",
                "logoName": "USAPBSL.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1387,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1388,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1013,
                "olmId": "95241",
                "name": "C.C.T. FINANCIAL",
                "description": "CCT FINANCIAL",
                "logoName": "USACCT.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1347,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1348,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1015,
                "olmId": "95243",
                "name": "Cisco Systems Capital Corporation",
                "description": "CISCO SYSTEMS CAPITAL CRP",
                "logoName": "USACISCO.bmp",
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1351,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1352,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }],
            "service": {
                "effectiveDate": "2008-01-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": true,
            "products": [{
                "id": 1011,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1014,
                "name": "Sale And Leaseback",
                "eligible": true
            }, {
                "id": 1012,
                "name": "Twin Plant",
                "eligible": true
            }, {
                "id": 1010,
                "name": "Conditional Sale",
                "eligible": true
            }, {
                "id": 1009,
                "name": "Loans",
                "eligible": true
            }, {
                "id": 1015,
                "name": "Service",
                "eligible": true
            }, {
                "id": 1016,
                "name": "Rental Fleet",
                "eligible": false
            }, {
                "id": 1013,
                "name": "Installment Payment Agreement",
                "eligible": true
            }, {
                "id": 1017,
                "name": "Usage",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": true,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": [{
                    "id": 1006,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 250000,
                    "maximumAmount": 500000,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1007,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 500001,
                    "maximumAmount": 10000000,
                    "timingOfFiling": "Timely"
                }, {
                    "id": 1008,
                    "purchaseOptionId": "$1BO",
                    "minimumAmount": 20000,
                    "maximumAmount": 9999999,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1009,
                    "purchaseOptionId": "$1BO",
                    "minimumAmount": 100000,
                    "maximumAmount": 10000000,
                    "timingOfFiling": "Timely"
                }, {
                    "id": 1010,
                    "purchaseOptionId": "FPPO",
                    "minimumAmount": 20000,
                    "maximumAmount": 99999.99,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1011,
                    "purchaseOptionId": "FPPO",
                    "minimumAmount": 100000,
                    "maximumAmount": 10000000,
                    "timingOfFiling": "Timely"
                }]
            },
            "documents": [{
                "id": 1033,
                "docCatalogId": "1530401119",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1025,
                "docCatalogId": "1530400644",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1031,
                "docCatalogId": "1530401035",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1021,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1001,
                "docCatalogId": "1530399974",
                "required": true,
                "ancillary": false,
                "autoGenerate": true
            }, {
                "id": 1027,
                "docCatalogId": "1530400834",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1023,
                "docCatalogId": "1530400458",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1029,
                "docCatalogId": "1530400934",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }]
        }, {
            "id": 1161,
            "legacySystemDetails": [{
                "originatingSystem": "OLM",
                "id": 1141,
                "name": "OE_VENDOR",
                "programId": "15598"
            }, {
                "originatingSystem": "A2B",
                "id": 1140,
                "name": "OE_VENDOR",
                "programId": "100304"
            }, {
                "originatingSystem": "ATS",
                "id": 1142,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }],
            "name": "OE_VENDOR5",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2016-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1420,
                "name": "New",
                "eligible": true
            }, {
                "id": 1421,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1422,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1423,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1424,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1425,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1426,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1101,
                "name": "Approval",
                "days": 90
            }, {
                "id": 1100,
                "name": "Line of Credit",
                "days": 120
            }],
            "paymentFrequencies": [{
                "id": 1220,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1221,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1222,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1223,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1224,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1225,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1140,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1141,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1142,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1100,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }, {
                "id": 1101,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }],
            "fees": [{
                "id": 1322,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }, {
                "id": 1321,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }, {
                "id": 1320,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }],
            "classifications": [{
                "id": 1200,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1201,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1202,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1200,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }, {
                "id": 1201,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1280,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1281,
                "name": "Sale And Leaseback",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": []
            },
            "documents": [{
                "id": 1221,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1220,
                "docCatalogId": "1530401119",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }]
        }, {
            "id": 1162,
            "legacySystemDetails": [{
                "originatingSystem": "OLM",
                "id": 1144,
                "name": "OE_VENDOR",
                "programId": "15598"
            }, {
                "originatingSystem": "ATS",
                "id": 1145,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }, {
                "originatingSystem": "A2B",
                "id": 1143,
                "name": "OE_VENDOR",
                "programId": "100304"
            }],
            "name": "OE_VENDOR7",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2016-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1427,
                "name": "New",
                "eligible": true
            }, {
                "id": 1428,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1429,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1430,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1431,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1432,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1433,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1102,
                "name": "Line of Credit",
                "days": 120
            }, {
                "id": 1103,
                "name": "Approval",
                "days": 90
            }],
            "paymentFrequencies": [{
                "id": 1226,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1227,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1228,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1229,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1230,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1231,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1143,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1144,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1145,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1103,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }, {
                "id": 1102,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }],
            "fees": [{
                "id": 1323,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }, {
                "id": 1324,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }, {
                "id": 1325,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }],
            "classifications": [{
                "id": 1203,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1204,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1205,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1203,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }, {
                "id": 1202,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1282,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1283,
                "name": "Sale And Leaseback",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": []
            },
            "documents": [{
                "id": 1223,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1222,
                "docCatalogId": "1530401111",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }]
        }, {
            "id": 1163,
            "legacySystemDetails": [{
                "originatingSystem": "ATS",
                "id": 1148,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }, {
                "originatingSystem": "OLM",
                "id": 1147,
                "name": "OE_VENDOR",
                "programId": "15598"
            }, {
                "originatingSystem": "A2B",
                "id": 1146,
                "name": "OE_VENDOR",
                "programId": "100304"
            }],
            "name": "OE_VENDOR8",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2016-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1434,
                "name": "New",
                "eligible": true
            }, {
                "id": 1435,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1436,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1437,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1438,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1439,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1440,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1104,
                "name": "Line of Credit",
                "days": 120
            }, {
                "id": 1105,
                "name": "Approval",
                "days": 90
            }],
            "paymentFrequencies": [{
                "id": 1232,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1233,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1234,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1235,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1236,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1237,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1146,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1147,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1148,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1105,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }, {
                "id": 1104,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }],
            "fees": [{
                "id": 1328,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }, {
                "id": 1327,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }, {
                "id": 1326,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }],
            "classifications": [{
                "id": 1206,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1207,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1208,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1205,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }, {
                "id": 1204,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": []
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1284,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1285,
                "name": "Sale And Leaseback",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": [{
                    "id": 1120,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 200000,
                    "maximumAmount": 499999.99,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1121,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 500000,
                    "maximumAmount": 10000000,
                    "timingOfFiling": "Timely"
                }]
            },
            "documents": [{
                "id": 1225,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }, {
                "id": 1224,
                "docCatalogId": "1530401111",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }]
        }, {
            "id": 1164,
            "legacySystemDetails": [{
                "originatingSystem": "A2B",
                "id": 1149,
                "name": "OE_VENDOR",
                "programId": "100304"
            }, {
                "originatingSystem": "OLM",
                "id": 1150,
                "name": "OE_VENDOR",
                "programId": "15598"
            }, {
                "originatingSystem": "ATS",
                "id": 1151,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }],
            "name": "OE_VENDOR99",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2016-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1441,
                "name": "New",
                "eligible": true
            }, {
                "id": 1520,
                "name": "Ahmedtest",
                "eligible": true
            }, {
                "id": 1442,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1443,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1444,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1445,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1446,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1447,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1106,
                "name": "Line of Credit",
                "days": 120
            }, {
                "id": 1107,
                "name": "Approval",
                "days": 90
            }],
            "paymentFrequencies": [{
                "id": 1238,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1239,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1240,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1241,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1242,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1243,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1149,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1150,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1151,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3,
                "rolloverIncentivePercentage": 10,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0
            },
            "latePolicies": [{
                "id": 1106,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }, {
                "id": 1107,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }],
            "fees": [{
                "id": 1331,
                "feeId": 1001,
                "minAmount": 0,
                "maxAmount": 2000
            }, {
                "id": 1330,
                "feeId": 1003,
                "minAmount": 0,
                "maxAmount": 25
            }, {
                "id": 1329,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }],
            "classifications": [{
                "id": 1209,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1210,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1211,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10,
                "adminFeeMin": 6,
                "adminFeeMax": 125
            },
            "privateLabels": [{
                "id": 1207,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1602,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1603,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1206,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1600,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1601,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1286,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1287,
                "name": "Sale And Leaseback",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": [{
                    "id": 1122,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 200000,
                    "maximumAmount": 499999.99,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1123,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 500000,
                    "maximumAmount": 10000000,
                    "timingOfFiling": "Timely"
                }]
            },
            "documents": [{
                "id": 1226,
                "docCatalogId": "1530401111",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1227,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }]
        }]
    });
})

Sandbox.define('/api/v1/programs/1200','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "meta": {
            "itemCount": 1
        },
        "data": {
            "id": 1200,
            "legacySystemDetails": [{
                "originatingSystem": "ATS",
                "id": 1222,
                "name": "OE_VENDOR",
                "programId": "OE_VENDOR"
            }, {
                "originatingSystem": "OLM",
                "id": 1221,
                "name": "OE_VENDOR",
                "programId": "15598"
            }],
            "name": "OE_VENDOR15",
            "status": "Active",
            "programLegalEntity": null,
            "effectiveDate": "2016-09-01",
            "expirationDate": null,
            "ouId": "DLL",
            "sbuId": "2",
            "hbeCode": "BEQUS",
            "residualPolicyId": 1001,
            "assetProgramId": "3550",
            "defaultApplicationIndicator": "FLOW",
            "assetConditions": [{
                "id": 1540,
                "name": "New",
                "eligible": true
            }, {
                "id": 1541,
                "name": "Other",
                "eligible": true
            }, {
                "id": 1542,
                "name": "Reconditioned",
                "eligible": true
            }, {
                "id": 1543,
                "name": "Unknown",
                "eligible": true
            }, {
                "id": 1544,
                "name": "Remanufactured",
                "eligible": true
            }, {
                "id": 1545,
                "name": "Discontinued",
                "eligible": true
            }, {
                "id": 1546,
                "name": "Used",
                "eligible": true
            }],
            "reportingEntity": {
                "olmId": "00101",
                "name": "IFRS-US-DLL Financial Services, Inc."
            },
            "invoicingTemplate": {
                "olmId": "INV_ASST_ACCT",
                "name": "Invoice With Asset Details and Account Statement"
            },
            "validities": [{
                "id": 1140,
                "name": "Line of Credit",
                "days": 120
            }, {
                "id": 1141,
                "name": "Approval",
                "days": 90
            }],
            "paymentFrequencies": [{
                "id": 1320,
                "name": "Monthly",
                "eligible": true
            }, {
                "id": 1321,
                "name": "Miscellaneous",
                "eligible": true
            }, {
                "id": 1322,
                "name": "Quarterly",
                "eligible": true
            }, {
                "id": 1323,
                "name": "Seasonal",
                "eligible": true
            }, {
                "id": 1324,
                "name": "Semi-Annual",
                "eligible": true
            }, {
                "id": 1325,
                "name": "Annual",
                "eligible": true
            }],
            "minimumTerm": 6,
            "maximumTerm": 72,
            "purchaseOptions": [{
                "id": 1200,
                "name": "$1BO",
                "eligible": true
            }, {
                "id": 1201,
                "name": "FPPO",
                "eligible": true
            }, {
                "id": 1202,
                "name": "FMV",
                "eligible": true
            }],
            "contractTermination": {
                "renewPeriodsToBeBilled": 2,
                "servicePeriodsToBeBilled": 12,
                "annualDiscountRateFactor": 3.0,
                "rolloverIncentivePercentage": 10.0,
                "lateAssetReturnBilling": {
                    "olmId": "RECURRING_BILLING",
                    "name": "Recurring Billing"
                }
            },
            "interimRent": {
                "passThroughPercentageForRentPercent": null,
                "passthroughPercentageForInterimService": 0.0
            },
            "latePolicies": [{
                "id": 1140,
                "olmId": "136654589008707692506811921285448602224",
                "type": "Interest",
                "name": "LI Fixed Rate 18% Grace 34 Days"
            }, {
                "id": 1141,
                "olmId": "137130030196907131564031777595518735046",
                "type": "Charge",
                "name": "LC Rate 5% Grace 4 Days Min $4"
            }],
            "fees": [{
                "id": 1402,
                "feeId": 1001,
                "minAmount": 0.0,
                "maxAmount": 2000.0
            }, {
                "id": 1401,
                "feeId": 1003,
                "minAmount": 0.0,
                "maxAmount": 25.0
            }, {
                "id": 1400,
                "feeId": 1021,
                "minAmount": null,
                "maxAmount": null
            }],
            "classifications": [{
                "id": 1260,
                "type": "Class3",
                "name": "NON_PORTFOLIO"
            }, {
                "id": 1261,
                "type": "Class1",
                "name": "RETAIL"
            }, {
                "id": 1262,
                "type": "Class2",
                "name": "DEALER"
            }],
            "salesTax": {
                "passThroughEligible": false,
                "taxPaidToVendor": false,
                "responsibilities": []
            },
            "propertyTax": {
                "includedInRate": false,
                "bundled": false,
                "invoiceConsolidated": true,
                "overridable": true,
                "adminFeeRate": 10.0,
                "adminFeeMin": 6.0,
                "adminFeeMax": 125.0
            },
            "privateLabels": [{
                "id": 1260,
                "olmId": "38152259",
                "name": "TRITEC OFFICE EQUIPMENT L",
                "description": "TRITEC OFFICE EQUIPMENT L",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1700,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1701,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }, {
                "id": 1261,
                "olmId": "27903217",
                "name": "ADVANCED DOCUMENT SOLUTIO",
                "description": "ADVANCED DOCUMENT SOLUTIO",
                "logoName": null,
                "logoUrl": "www.lesseedirect.com",
                "phoneNumbers": [{
                    "id": 1702,
                    "phoneNumber": "1-800-735-3273",
                    "type": "REMIT TO PHONE NUMBER"
                }, {
                    "id": 1703,
                    "phoneNumber": "(800)736-0220",
                    "type": "REMIT TELEPHONE 1"
                }]
            }],
            "service": {
                "effectiveDate": "2006-09-01",
                "expirationDate": null,
                "clawBack": true
            },
            "renewal": {
                "option": "FIXED",
                "evergreenEligible": true,
                "daysToPreventRenewal": 60
            },
            "residualSharingEligible": false,
            "products": [{
                "id": 1400,
                "name": "Finance Agreement",
                "eligible": true
            }, {
                "id": 1401,
                "name": "Sale And Leaseback",
                "eligible": true
            }],
            "faxFunding": true,
            "rental": false,
            "cta": true,
            "progressPayment": true,
            "forcedPlacedInsurance": true,
            "autoCashApplication": true,
            "telephoneVerification": false,
            "syndicationEligble": true,
            "eSignature": true,
            "uccDetails": {
                "responsibleForFiling": "Lessor",
                "uccs": [{
                    "id": 1180,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 200000.0,
                    "maximumAmount": 499999.99,
                    "timingOfFiling": "After the fact"
                }, {
                    "id": 1181,
                    "purchaseOptionId": "FMV",
                    "minimumAmount": 500000.0,
                    "maximumAmount": 1.0E7,
                    "timingOfFiling": "Timely"
                }]
            },
            "documents": [{
                "id": 1360,
                "docCatalogId": "1530401111",
                "required": false,
                "ancillary": true,
                "autoGenerate": true
            }, {
                "id": 1361,
                "docCatalogId": "1530400228",
                "required": true,
                "ancillary": true,
                "autoGenerate": false
            }]
        }
    });
})

Sandbox.define('/pricing-service/health','GET', function(req, res){
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
            "status": "UP",
            "Service": {
                "status": "UP",
                "details": {
                    "Service Name": "DLL Pricing Service (PRD)",
                    "Service Version": "1.0.0-SNAPSHOT",
                    "LACS Status": "DOWN",
                    "Database Status": "UP"
                }
            }
        }
    
    );
})

Sandbox.define('/mosaic','GET', function(req, res) {
    // Set the status code of the response.
    res.status(303);
    
    // Send the response body.
    res.send('http://www.google.com');
})