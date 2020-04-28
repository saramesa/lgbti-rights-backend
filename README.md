# Introduction

Lgbti Rights was built from the ground-up with a JSON API that makes it easy for developers to get data about lgbti rights status around the world.

These docs describe how to use the [lgbti-rights](https://lgbti-rights.com) API. 

## Authorization

All API requests require the use of a generated API key. You can find your API key, or generate a new one, by navigating to the /settings endpoint, or clicking the “Settings” sidebar item.

To authenticate an API request, you should provide your API key in the `Authorization` header.

Alternatively, you may append the `api_key=[API_KEY]` as a GET parameter to authorize yourself to the API. But note that this is likely to leave traces in things like your history, if accessing the API through a browser.

```http
GET /api/countries
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `api_key` | `string` | **Required**. Your API key |


## Get All Countries
----
  Returns json data about all countries.

URL
**URL**

  ```http
GET /api/countries
```

* **Method:**

  `GET`
  
* **Request Header**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `Accept-Language` | `string` | **Optional**. User language |

**Accepted Languages**
| Accepted Languages | Description |
| :--- | :--- |
| es | `Spanish` |
| de | `German` |
| fr | `French` |
| ja | `Japanese` |
| it | `Italian` |
| br | `Portuguese` |
| pt | `Portuguese` |
| nl | `Dutch` |
| hr | `Croatian` |
| fa | `Farsi` |

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
```javascript
{
    "data": [
        {
            "_id":"5ea694e0228e8d38496eab92",
            "name":"Afghanistan",
            "country_code":"AF",
            "region":"Asia",
            "subregion":"Southern Asia",
            "latlng":[33,65],
            "flag":"https://restcountries.eu/data/afg.svg","marriageAllowed":"NO-LEGAL",
            "legality":"NO-LEGAL"
        },
        ...
    ]
}
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`


## Get Country
----
  Returns json data about an especific country.

URL
**URL**

  ```http
GET /api/countries-detailed
```

* **Method:**

  `GET`
  
* **Request Header**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `Accept-Language` | `string` | **Optional**. User language |

**Accepted Languages**
| Accepted Languages | Description |
| :--- | :--- |
| es | `Spanish` |
| de | `German` |
| fr | `French` |
| ja | `Japanese` |
| it | `Italian` |
| br | `Portuguese` |
| pt | `Portuguese` |
| nl | `Dutch` |
| hr | `Croatian` |
| fa | `Farsi` |

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
```javascript
{
    "data":[
        {"_id":"5e9341940b8e9251da4f0c81",
        "name":"Afghanistan",
        "issues":{
            "homosexuality":{
                "label":"Homosexual activity",
                "label_short":"Homosexuality",
                "description":"Consensual sexual activity between individuals of the same sex.",
                "current_status":{
                    "value":"Illegal (death penalty as punishment)","value_formatted":{
                        "en":"Illegal (death penalty as punishment)",
                        "es":"Ilegal (castigo de pena de muerte)"
                    },
                    "start_date_formatted":"October 7, 1976","description":"Article 427 states homosexuality will suffer long imprisonments (along with Adultery.) In addition, article 398 states that honour killing is legal "
                }
            },
            "marriage":{
                "label":"Same-sex marriage",
                "label_short":"Marriage",
                "description":"Marriage and marriage recognition between two people of the same biological sex and/or gender identity.","current_status":{
                    "value":"Not legal",
                    "value_formatted":{
                        "en":"Not legal",
                        "es":"Ilegal"
                    },
                    "start_date_formatted":"August 8, 1971",
                    "description":""
                }
            },
            "changing-gender":{
                "label":"Right to change legal gender",
                "label_short":"Changing Gender",
                "description":"Legal recognition of sex reassignment by permitting a change of legal gender on an individual's birth certificate.","current_status":{
                    "value":"ambiguous",
                    "value_formatted":{
                        "en":"Ambiguous",
                        "es":"Ambiguo"
                    },
                    "description":"Not preformed. No laws in place to do so."
                }
            },
            "adoption":{
                "label":"Same-sex adoption",
                "label_short":"Adoption",
                "description":"The ability for same-sex couples to legally adopt a child.",
                "current_status":{
                    "value":"Single only",
                    "value_formatted":{
                        "en":"Single only",
                        "es":"Solteros solo"
                    },
                    "description":"no laws in place."
                }
            },
            "discrimination":{
                "label":"LGBT discrimination",
                "label_short":"Discrimination",
                "description":"Prohibition of discrimination based on sexual orientation and/or gender identity.",
                "current_status":{
                    "value":"No protections",
                    "value_formatted":{
                        "en":"No protections",
                        "es":"Sin protección"
                    },
                    "start_date_formatted":"August 19, 1919",
                    "description":""
                }
            },
            "housing-discrimination":{
                "label":"LGBT housing discrimination",
                "label_short":"Housing Discrimination",
                "description":"Prohibition of discrimination based on sexual orientation and/or gender identity when applying for housing or discrimination by landlords / property owners.",
                "current_status":{
                    "value":"No protections",
                    "value_formatted":{
                        "en":"No protections",
                        "es":"Sin protección"
                    },
                    "start_date_formatted":"August 19, 1919",
                    "description":"No"
                }
            },
            "employment-discrimination":{
                "label":"LGBT employment discrimination",
                "label_short":"Employment Discrimination","description":"Prohibition of discrimination based on sexual orientation and/or gender identity in employment, including hiring, promotion, termination, harassment, etc.",
                "current_status":{
                    "value":"No protections",
                    "value_formatted":{
                        "en":"No protections",
                        "es":"Sin protección"
                    },
                    "start_date_formatted":"August 19, 1919",
                    "description":"None exist in the criminal code."
                }
            },
            "military":{
                "label":"Homosexuals serving openly in military","label_short":"Military",
                "description":"The ability for homosexuals to serve in the military and be open about their sexuality.",
                "current_status":{
                    "value":"Legal",
                    "value_formatted":{
                        "en":"Legal",
                        "es":"Legal"
                    },
                    "description":"Missing discrimination protections and same sex activity is currently illegal."
                }
            },
            "age-of-consent":{
                "label":"Equal age of consent",
                "label_short":"Age of Consent",
                "description":"The difference between legal age of consent for homosexual sex and heterosexual sex.",
                "current_status":{
                    "value":"Unequal",
                    "value_formatted":{
                        "en":"Unequal",
                        "es":"Desigual"
                        },
                    "description":"Homosexuality is illegal. Person must be married."
                }
            },
            "blood":{
                "label":"Blood donations by MSMs",
                "label_short":"Donating Blood",
                "description":"The ability for MSMs (men who have sex with men) to donate blood or tissue for organ transplants. A deferral period refers to a waiting time before a man can donate after having sex.",
                "current_status":{
                    "value":"Banned (1-year deferral)",
                    "value_formatted":{
                        "en":"Banned (1-year deferral)",
                        "es":"Prohibido (aplazamiento de 1 año)"
                    },
                    "description":"No"
                }
            },
            "conversion-therapy":{
                "label":"Conversion therapy",
                "label_short":{
                    "en":"Conversion Therapy",
                    "es":"Terapia de conversión"
                    },
                    "description":"Legal status of conducting sexual orientation changing therapy (\"ex-gay\" therapy)",
                    "current_status":{
                        "value":"ambiguous",
                        "value_formatted":{
                            "en":"Ambiguous",
                            "es":"Ambiguo"
                        },
                        "description":"Unknown."
                    }
            }
        },
        "country_code":"AF",
        "region":"Asia",
        "subregion":"Southern Asia",
        "latlng":[33,65],
        "flag":"https://restcountries.eu/data/afg.svg"
    }]
}
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`


## Get Links
----
  Returns json data with sara and andrea's personal links.

URL
**URL**

  ```http
GET /api/links
```

* **Method:**

  `GET`
  
* **Request Header**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `Accept-Language` | `string` | **Optional**. User language |

**Accepted Languages**
| Accepted Languages | Description |
| :--- | :--- |
| es | `Spanish` |
| de | `German` |
| fr | `French` |
| ja | `Japanese` |
| it | `Italian` |
| br | `Portuguese` |
| pt | `Portuguese` |
| nl | `Dutch` |
| hr | `Croatian` |
| fa | `Farsi` |

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
```javascript
{
    "data":
        [
            {
                "_id":"5ea6961f69b56b3975fdd201",
                "andrea":"https://github.com/andreaagudo3",
                "sara":"https://github.com/saramesa"
            }
        ]
}
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No data found" }`