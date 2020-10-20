const axios = require('axios')
const call = async ()=>{
try {
   const res =await axios.get('https://jsonplaceholder.typicode.com/todos/5')
   console.log(res.data)
} catch (error) {
    console.log(error)
}
}


const LoginTaxpayer = async()=>{
    try {
       const result = await axios.post('https://id.sit.eta.gov.eg/connect/token/connect/token',{
        grant_type:'client_credentials',
        client_id : "clientId",
        client_secret :'clientSecret',
        scope : 'Mcs.Invoicing.Api'
       },{
           headers:{
           'Content-Type':'application/x-www-form-urlencoded'
           }
       })  
       console.log(result)
       return result ;
    } catch (error) {
        console.error(error)
    }
}



const submitDocs = async ()=>{
    try {
        const result = await axios.post('https://api.sit.invoicing.eta.gov.eg/api/v1/documentsubmissions',{
            
                "documents": [
                  {
                    "issuer": {
                      "branchAddress": {
                        "branchID": "BID0",
                        "country": "EG",          
                        "addressLine1": "Address 2-0 line 1",
                        "addressLine2": "Address 2-0 line 2",
                        "regionCity": "Cairo",
                        "postalCode": "098607"
                      },
                      "type": "B",
                      "id": "232232",
                      "name": "Issuer Name 0"
                    },
                    "receiver": {
                      "address": {         
                        "addressLine1": "Address 1-0 line 1",
                        "addressLine2": "Address 1-0 line 2",
                        "regionCity": "Cairo",
                        "postalCode": "098607",
                        "country": "EGY"
                      },        
                      "type": "B",
                      "id": "100449093",
                      "name": "Receiver name 0"
                    },
                    "documentType": "i",
                    "documentTypeVersion": "1.0",
                    "dateTimeIssued": "2015-02-13T13:15:00Z",
                    "taxActivityCode": "ACC0",
                    "internalID": "IID0",
                    "poReference": "1230",
                    "references": [
                      "RWEPEW622912Y31BJ7HQC3CE10",
                      "HTNPXC1P5SC3WMQKNWQQC3CE10"
                    ],
                    "invoiceLines": [
                      {
                        "description": "Invoice line description 0",
                        "itemType": "GPC",
                        "itemCode": "123abc10",
                        "unitType": "Kg",
                        "quantity": 10.5,
                        "unitValue": {
                          "currencySold": "EUR",
                          "currencyEGP": 10,
                          "currencyExchangeRate": 10
                        },
                        "factoryUnitValue": {
                          "currencySold": "EUR",
                          "currencyEGP": 10.5,
                          "currencyExchangeRate": 10.5
                        },
                        "total": 10.5,
                        "discount": {
                          "rate": 100,
                          "amount": 10.8
                        },
                        "taxableItems": [
                          {
                            "taxType": "VAT",
                            "amount": 10.5,
                            "reason": "tax 1",
                            "rate": 100
                          }            
                        ],
                        "internalCode": "IC0"
                      }
                    ],
                    "totalSales": 0,
                    "totalDiscount": 10,
                    "netAmount": -10,
                    "taxTotals": [
                      {
                        "taxType": "VAT",
                        "amount": 10.5
                      }        
                    ],
                    "totalAmount": 23,
                    "signatures": [
                      {
                        "signatureType": "I",
                        "value": "MIIGYgYJKoZIhvcNAQcCoIIGUzCCBk8CAQMxDTALBglghkgBZQMEAgEwCwYJKoZIhvcNAQcBoIID/zCCA/swggLjoAMCAQICEExmZ\u002B69rsEiVjVCUUMzjcEwDQYJKoZIhvcNAQELBQAwSTELMAkGA1UEBhMCRUcxFDASBgNVBAoTC0VneXB0IFRydXN0MSQwIgYDVQQDExtFZ3lwdCBUcnVzdCBDb3Jwb3JhdGUgQ0EgRzIwHhcNMjAwMzMxMDAwMDAwWhcNMjEwMzMwMjM1OTU5WjBgMRUwEwYDVQQKFAxFZ3lwdCBUcnVzdCAxGDAWBgNVBGEUD1ZBVEVHLTMxMzcxNzkxOTELMAkGA1UEBhMCRUcxIDAeBgNVBAMMF1Rlc3QgU2VhbGluZyBEZW1vIHVzZXIxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApmVGVJtpImeq\u002BtIJiVWSkIEEOTIcnG1XNYQOYtf5\u002BDg9eF5H5x1wkgR2G7dvWVXrTsdNv2Q\u002Bgvml9SdfWxlYxaljg2AuBrsHFjYVEAQFI37EW2K7tbMT7bfxwT1M5tbjxnkTTK12cgwxPr2LBNhHpfXp8SNyWCxpk6eyJb87DveVwCLbAGGXO9mhDj62glVTrCFit7mHC6bZ6MOMAp013B8No9c8xnrKQiOb4Tm2GxBYHFwEcfYUGZNltGZNdVUtu6ty\u002BNTrSRRC/dILeGHgz6/2pgQPk5OFYRTRHRNVNo\u002BjG\u002BnurUYkSWxA4I9CmsVt2FdeBeuvRFs/U1I\u002BieKg1wIDAQABo4HHMIHEMAkGA1UdEwQCMAAwVAYDVR0fBE0wSzBJoEegRYZDaHR0cDovL21wa2ljcmwuZWd5cHR0cnVzdC5jb20vRWd5cHRUcnVzdENvcnBvcmF0ZUNBRzIvTGF0ZXN0Q1JMLmNybDAdBgNVHQ4EFgQUqzFDImtytsUbghbmtnl2/k4d5jEwEQYJYIZIAYb4QgEBBAQDAgeAMB8GA1UdIwQYMBaAFCInP8ziUIPmu86XJUWXspKN3LsFMA4GA1UdDwEB/wQEAwIGwDANBgkqhkiG9w0BAQsFAAOCAQEAN/d9pnNi9IjMAoxi9A2FpfrWooNcejvOm0usIPj23F988uBa\u002B2vLVuWrNSC8aJJL9eLIjO9I2ecxRhRiGwp1YBoXJ25GvXvmIT4EN1B/kpZa/M/VIeSeimV/qlmdx/5Sy1ycK\u002BEFkqojEKrteNAZr5yU/v5stX/x\u002B5A0yKxrGv6GFmyLT4Mi1xtybjUpTNQXKYa/DUPtB4wO829CmPdCl8gIldIlMoyz0vQFp42PgRXoMpqVKO631wKXDBbplpC7GZ9FewGZHVwQ0ppCX1S27YGYATuhyWb9uZvuJxg9j20tLgy1BWZ2LEgbTaYQ5cZ2bggAzr5JckAqQSotU1LbFDGCAikwggIlAgEBMF0wSTELMAkGA1UEBhMCRUcxFDASBgNVBAoTC0VneXB0IFRydXN0MSQwIgYDVQQDExtFZ3lwdCBUcnVzdCBDb3Jwb3JhdGUgQ0EgRzICEExmZ\u002B69rsEiVjVCUUMzjcEwCwYJYIZIAWUDBAIBoIGiMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTIwMDYyMjEzMzAyMlowLwYJKoZIhvcNAQkEMSIEIGcZKUxQr2AzfuxfgvTFeCTnzvTWmi8PuoPRiDKia3DyMDcGCyqGSIb3DQEJEAIvMSgwJjAkMCIEIP64tKSYzgTXL9QKwIpQpo5Cj3Lnv7DpFDMbsh7RCAR6MAsGCSqGSIb3DQEBAQSCAQAueKIj1x64G49wSsXWoXA0cjFPMhcQ0zMAn39kRqIv7hJjBrf\u002BBdzrvqWDIxlKKA04DMRmTFTVHbtTtNQmut12LLLxjFLi\u002BfnVWbEJPezx\u002BbPvJEWETrjqW/yh2epWeW1LRy0GgQcyy77Xsz01J3jFe/0AUXKuCKvz\u002B\u002BEsNzbDXAki3OnF/zxY87WCEwFF3rW1w5zkqt0pqy7LAQYG/E17DRUD/kV8d\u002BuXmy1spAIvOtw1wJ5Yj0nvF4tWrU76Ani8oFOP4d65T0g1r7163GTP9xAR67dCaI\u002BdGo6RHJGbR2HK8cjeoj8FK48T\u002BKf/t4zDfUAGxLKPk8rU5jTuLZ/0"
                      },
                      {
                        "signatureType": "S",
                        "value": "MIIGYgYJKoZIhvcNAQcCoIIGUzCCBk8CAQMxDTALBglghkgBZQMEAgEwCwYJKoZIhvcNAQcBoIID/zCCA/swggLjoAMCAQICEEFkOqRVlVar0F0n3FZOLiIwDQYJKoZIhvcNAQELBQAwSTELMAkGA1UEBhMCRUcxFDASBgNVBAoTC0VneXB0IFRydXN0MSQwIgYDVQQDExtFZ3lwdCBUcnVzdCBDb3Jwb3JhdGUgQ0EgRzIwHhcNMjAwMzMxMDAwMDAwWhcNMjEwMzMwMjM1OTU5WjBgMRUwEwYDVQQKFAxFZ3lwdCBUcnVzdCAxGDAWBgNVBGEUD1ZBVEVHLTExMzMxNzcxMzELMAkGA1UEBhMCRUcxIDAeBgNVBAMMF1Rlc3QgU2VhbGluZyBEZW1vIHVzZXIyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApmVGVJtpImeq\u002BtIJiVWSkIEEOTIcnG1XNYQOYtf5\u002BDg9eF5H5x1wkgR2G7dvWVXrTsdNv2Q\u002Bgvml9SdfWxlYxaljg2AuBrsHFjYVEAQFI37EW2K7tbMT7bfxwT1M5tbjxnkTTK12cgwxPr2LBNhHpfXp8SNyWCxpk6eyJb87DveVwCLbAGGXO9mhDj62glVTrCFit7mHC6bZ6MOMAp013B8No9c8xnrKQiOb4Tm2GxBYHFwEcfYUGZNltGZNdVUtu6ty\u002BNTrSRRC/dILeGHgz6/2pgQPk5OFYRTRHRNVNo\u002BjG\u002BnurUYkSWxA4I9CmsVt2FdeBeuvRFs/U1I\u002BieKg1wIDAQABo4HHMIHEMAkGA1UdEwQCMAAwVAYDVR0fBE0wSzBJoEegRYZDaHR0cDovL21wa2ljcmwuZWd5cHR0cnVzdC5jb20vRWd5cHRUcnVzdENvcnBvcmF0ZUNBRzIvTGF0ZXN0Q1JMLmNybDAdBgNVHQ4EFgQUqzFDImtytsUbghbmtnl2/k4d5jEwEQYJYIZIAYb4QgEBBAQDAgeAMB8GA1UdIwQYMBaAFCInP8ziUIPmu86XJUWXspKN3LsFMA4GA1UdDwEB/wQEAwIGwDANBgkqhkiG9w0BAQsFAAOCAQEAxE3KpyYlPy/e3\u002B6jfz5RqlLhRLppWpRlKYUvH1uIhCNRuWaYYRchw1xe3jn7bLKbNrUmey\u002BMRwp1hZptkxFMYKTIEnNjOKCrLmVIuPFcfLXAQFq5vgLDSbnUhG/r5D\u002B50ndPucyUPhX3gw8gFlA1R\u002BtdNEoeKqYSo9v3p5qNANq12OuZbkhPg6sAD4dojWoNdlkc8J2ML0eq4a5AQvb4yZVb\u002BezqJyqKj83RekRZi0kMxoIm8l82CN8I/Bmp6VVNJRhQKhSeb7ShpdkZcMwcfKdDw6LW02/XcmzVl8NBBbLjKSJ/jxdL1RxPPza7RbGqSx9pfyav5\u002BAxO9sXnXXc5jGCAikwggIlAgEBMF0wSTELMAkGA1UEBhMCRUcxFDASBgNVBAoTC0VneXB0IFRydXN0MSQwIgYDVQQDExtFZ3lwdCBUcnVzdCBDb3Jwb3JhdGUgQ0EgRzICEEFkOqRVlVar0F0n3FZOLiIwCwYJYIZIAWUDBAIBoIGiMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTIwMDYyMjEzMzAyMlowLwYJKoZIhvcNAQkEMSIEIOw3Dsuh4y9TgZ9Y0iis6PxMj31enYBq8KfWNDggQkgAMDcGCyqGSIb3DQEJEAIvMSgwJjAkMCIEIAJA8uO/ek3l9i3ZOgRtPhGWwwFYljbeJ7yAgEnyYNCWMAsGCSqGSIb3DQEBAQSCAQCQgEFn2JMXk3\u002B3af0n8n/ce6V20u/tpklaWdwN8udUJo62vVuhrDYmUxlHAoUJZ6UQQLBSd2bDc0M1l/E3q0Nf1Q1g0qTchCfPUK1NnAG/\u002Bf\u002BDO6C9\u002B/L6kgLwchoG6\u002BEkWelW6g03tLABLN5hqU35fV0dyraIACTDIzf0BcazuVMoYHmjNZMZefOPmEmuuiNRnd6Ni2E1qwcTGbQRP4aEsju5CUwIszE6FmaHzGoHeuDhIMUT1zsbZJUq7TF477gIs42bhNw/SFxF0Zs2mOKz7Mhi2qRHlLB\u002BkZsQzAYLJWVltdwboGLXLzJ6AJ3VFOKNLS6qTUn6INs0EfTkHvbP"
                      }
                    ]
                  }
                ]
              
           },{
               headers:{
               'Content-Type':'application/x-www-form-urlencoded'
               }
           })  
           console.log(result)
           return result ;
    } catch (error) {
        console.error(error)

    }
}