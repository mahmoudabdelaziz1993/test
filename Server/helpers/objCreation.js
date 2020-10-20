const objCreate = (data) => {
    // console.log(data)
    let documents = []
    data.map((value , index)=>{
        const {name } = value

        let docObj =
        {
            name,
            issuer: {
                address: {
                    branchID: "190500200000084804",
                    country:  "us",
                    governate: "ElMonufia",
                    regionCity: "ElSadat",
                    street: "Industrial Zone ",
                    buildingNumber: "0",
                    postalCode: "",
                    floor: "",
                    room: "",
                    landmark: "",
                    additionalInformation: ""
                },
                type: "B",
                id: "303813148",
                name: 'country'
            },
            receiver: {
                address: {
                    country: "EG",
                    governate: "Governorate",
                    regionCity: "City",
                    street: "Street",
                    buildingNumber: "11",
                    postalCode: "",
                    floor: "",
                    room: "",
                    landmark: "",
                    additionalInformation: ""
                },
                type: "B",
                id: "100506267",
                name: "Abdelrahman"
            },
            documentType: '',
            documentTypeVersion: "0.9",
            dateTimeIssued: "2020-10-16T11:40:00Z",
            taxpayerActivityCode: "1130",
            internalID: "IID99",
            purchaseOrderReference: "",
            purchaseOrderDescription: "",
            salesOrderReference: "",
            salesOrderDescription: "",
            payment: {
                bankName: "",
                bankAddress: "",
                bankAccountNo: "",
                bankAccountIBAN: "",
                swiftCode: "",
                terms: ""
            },
            delivery: {
                approach: "",
                packaging: "",
                dateValidity: "",
                exportPort: "",
                countryOfOrigin: "EG",
                grossWeight: 0,
                netWeight: 0,
                terms: ""
            },
            invoiceLines: [
                {
                    description: "Trulite Clear",
                    itemType: "GPC",
                    itemCode: "10002584",
                    internalCode: "CL10GLE18302800K01",
                    salesTotal: 10,
                    total: 10,
                    unitType: "MTK",
                    quantity: 1,
                    unitValue: {
                        currencySold: "EGP",
                        amountEGP: 10,
                        amountSold: 10,
                        currencyExchangeRate: 1
                    },
                    factoryUnitValue: {
                        currencySold: "EGP",
                        amountEGP: 0,
                        amountSold: 0,
                        amountSold: 1
                    },
                    salesTotal: 10,
                    total: 10,
                    valueDifference: 0,
                    totalTaxableFees: 0,
                    netTotal: 10,
                    itemsDiscount: 0,
                    discount: {
                        rate: 0,
                        amount: 0
                    },
                    taxableItems: [
                        {
                            taxType: "T1",
                            amount: 0,
                            subType: "No Sub",
                            rate: 0
                        }
                    ],
                    internalCode: "IC99"
                }
            ],
            totalSales: 10,
            totalSalesAmount: 10,
            totalDiscountAmount: 0,
            netAmount: 10,
            taxTotals: [
                {
                    taxType: "T1",
                    amount: 0
                }
            ],
            extraDiscountAmount: 0,
            totalItemsDiscountAmount: 0,
            totalAmount: 10,
            signatures: [
                {
                    signatureType: "I",
                    value: "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"
                }
            ]
        }

        documents.push(docObj)
    })

   console.log("documents", documents)
    return documents;
}



module.exports = objCreate