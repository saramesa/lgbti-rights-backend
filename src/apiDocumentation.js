const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Lgbti Rights',
    description: 'User management API'
  },
  servers: [
    // {
    //   url: 'http://localhost:3000/',
    //   description: 'Local server'
    // },
    // {
    //   url: 'https://api_url_testing',
    //   description: 'Testing server'
    // },
    {
      url: 'https://lgbti-rights.com/api',
      description: 'Production server'
    }
  ],
  security: [
    {
      ApiKeyAuth: []
    }
  ],
  tags: [
    {
      name: 'CRUD operations'
    }
  ],
  paths: {
    '/countries': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get countries',
        operationId: 'getCountries',
        parameters: [
          {
            name: 'Accept-Language',
            in: 'header',
            schema: {
              type: 'string',
              example: 'es'
            },
            required: false,
            description:
              'Language of the user. If not provided, default language is english'
          }
        ],
        responses: {
          '200': {
            description: 'Countries were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Countries'
                }
              }
            }
          }
        }
      }
    },
    '/countries-detailed/{country_code}': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get country',
        operationId: 'getCountry',
        parameters: [
          {
            name: 'Accept-Language',
            in: 'header',
            schema: {
              type: 'string',
              example: 'es'
            },
            required: false,
            description:
              'Language of the user. If not provided, default language is english'
          },
          {
            name: 'country_code',
            in: 'path',
            schema: {
              type: 'string',
              example: 'af'
            },
            required: true
          }
        ],
        responses: {
          '200': {
            description: 'Country was obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CountryDetailed'
                }
              }
            }
          },
          '404': {
            description: 'Data not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'No data found'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/links': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get personal links for Andrea and Sara',
        operationId: 'getLinks',
        responses: {
          '200': {
            description: 'Links were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Links'
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      CountryDetailed: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '5e9341940b8e9251da4f0c81'
          },
          name: {
            type: 'string',
            example: 'Afghanistan'
          },
          issues: {
            type: 'object',
            properties: {
              homosexuality: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'Homosexual activity'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Homosexuality'
                  },
                  description: {
                    type: 'string',
                    example:
                      'Consensual sexual activity between individuals of the same sex.'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'Illegal (death penalty as punishment)'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'Illegal (death penalty as punishment)'
                          },
                          es: {
                            type: 'string',
                            example: 'Ilegal (castigo de pena de muerte)'
                          }
                        }
                      }
                    }
                  }
                }
              },
              marriage: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'Same-sex marriage'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Marriage'
                  },
                  description: {
                    type: 'string',
                    example:
                      'Marriage and marriage recognition between two people of the same biological sex and/or gender identity.'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'Not legal'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'Not legal'
                          },
                          es: {
                            type: 'string',
                            example: 'Ilegal'
                          }
                        }
                      },
                      start_date_formatted: {
                        type: 'string',
                        example: 'August 8, 1971'
                      },
                      description: {
                        type: 'string',
                        example: ''
                      }
                    }
                  }
                }
              },
              changingGender: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'Right to change legal gender'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Changing Gender'
                  },
                  description: {
                    type: 'string',
                    example:
                      "Legal recognition of sex reassignment by permitting a change of legal gender on an individual's birth certificate."
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'ambiguous'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'Ambiguous'
                          },
                          es: {
                            type: 'string',
                            example: 'Ambiguo'
                          }
                        }
                      },
                      description: {
                        type: 'string',
                        example: 'Not preformed. No laws in place to do so.'
                      }
                    }
                  }
                }
              },
              adoption: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'Same-sex adoption'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Adoption'
                  },
                  description: {
                    type: 'string',
                    example:
                      'The ability for same-sex couples to legally adopt a child.'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'Single only'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'Single only'
                          },
                          es: {
                            type: 'string',
                            example: '"Solteros solo'
                          }
                        }
                      },
                      description: {
                        type: 'string',
                        example: 'no laws in place.'
                      }
                    }
                  }
                }
              },
              discrimination: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'LGBT discrimination'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Discrimination'
                  },
                  description: {
                    type: 'string',
                    example:
                      'Prohibition of discrimination based on sexual orientation and/or gender identity.'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'No protections'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'No protections'
                          },
                          es: {
                            type: 'string',
                            example: 'Sin protección'
                          }
                        }
                      },
                      start_date_formatted: {
                        type: 'string',
                        example: 'August 19, 1919'
                      },
                      description: {
                        type: 'string',
                        example: ''
                      }
                    }
                  }
                }
              },
              housingDiscrimination: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'LGBT housing discrimination'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Housing discrimination'
                  },
                  description: {
                    type: 'string',
                    example:
                      'Prohibition of discrimination based on sexual orientation and/or gender identity when applying for housing or discrimination by landlords / property owners.'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'No protections'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'No protections'
                          },
                          es: {
                            type: 'string',
                            example: 'Sin protección'
                          }
                        }
                      },
                      start_date_formatted: {
                        type: 'string',
                        example: 'August 19, 1919'
                      },
                      description: {
                        type: 'string',
                        example: 'No'
                      }
                    }
                  }
                }
              },
              employmentDiscrimination: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'LGBT employment Discrimination'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Employment Discrimination'
                  },
                  description: {
                    type: 'string',
                    example:
                      'Prohibition of discrimination based on sexual orientation and/or gender identity in employment, including hiring, promotion, termination, harassment, etc.'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'No protections'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'No protections'
                          },
                          es: {
                            type: 'string',
                            example: 'Sin protección'
                          }
                        }
                      },
                      start_date_formatted: {
                        type: 'string',
                        example: 'August 19, 1919'
                      },
                      description: {
                        type: 'string',
                        example: 'None exist in the criminal code.'
                      }
                    }
                  }
                }
              },
              military: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'Homosexuals serving openly in military'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Military'
                  },
                  description: {
                    type: 'string',
                    example:
                      'The ability for homosexuals to serve in the military and be open about their sexuality.'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'Legal'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'Legal'
                          },
                          es: {
                            type: 'string',
                            example: 'Legal'
                          }
                        }
                      },
                      description: {
                        type: 'string',
                        example:
                          'Missing discrimination protections and same sex activity is currently illegal.'
                      }
                    }
                  }
                }
              },
              ageOfConsent: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'Equal age of Consent'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Age of Consent'
                  },
                  description: {
                    type: 'string',
                    example:
                      'The difference between legal age of consent for homosexual sex and heterosexual sex.'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'Unequal'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'Unequal'
                          },
                          es: {
                            type: 'string',
                            example: 'Desigual'
                          }
                        }
                      },
                      description: {
                        type: 'string',
                        example:
                          'Homosexuality is illegal. Person must be married.'
                      }
                    }
                  }
                }
              },
              blood: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'Blood donations by MSMs'
                  },
                  label_short: {
                    type: 'string',
                    example: 'onating Blood'
                  },
                  description: {
                    type: 'string',
                    example:
                      'The ability for MSMs (men who have sex with men) to donate blood or tissue for organ transplants. A deferral period refers to a waiting time before a man can donate after having sex.'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'Banned (1-year deferral)'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'Banned (1-year deferral)'
                          },
                          es: {
                            type: 'string',
                            example: 'Prohibido (aplazamiento de 1 año)'
                          }
                        }
                      },
                      description: {
                        type: 'string',
                        example: ''
                      }
                    }
                  }
                }
              },
              conversionTherapy: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'Conversion therapy'
                  },
                  label_short: {
                    type: 'string',
                    example: 'Conversion therapy'
                  },
                  description: {
                    type: 'string',
                    example:
                      'Legal status of conducting sexual orientation changing therapy ("ex-gay" therapy)'
                  },
                  current_status: {
                    type: 'object',
                    properties: {
                      value: {
                        type: 'string',
                        example: 'ambiguous'
                      },
                      value_formatted: {
                        type: 'object',
                        properties: {
                          en: {
                            type: 'string',
                            example: 'Ambiguous'
                          },
                          es: {
                            type: 'string',
                            example: 'Ambiguo'
                          }
                        }
                      },
                      description: {
                        type: 'string',
                        example: 'Unknown.'
                      }
                    }
                  }
                }
              },
              country_code: {
                type: 'string',
                example: 'AF'
              },
              region: {
                type: 'string',
                example: 'Asia'
              },
              subregion: {
                type: 'string',
                example: 'Southern Asia'
              },
              latlng: {
                type: 'array',
                example: [33, 65]
              },
              flag: {
                type: 'string',
                example: 'https://restcountries.eu/data/afg.svg'
              }
            }
          }
        }
      },
      Links: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '5ea6961f69b56b3975fdd201'
          },
          andrea: {
            type: 'string',
            example: 'https://github.com/andreaagudo3'
          },
          sara: {
            type: 'string',
            example: 'https://github.com/saramesa'
          }
        }
      },
      Country: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '5ea694e0228e8d38496eab92'
          },
          name: {
            type: 'string',
            example: 'Afghanistan'
          },
          country_code: {
            type: 'string',
            example: 'AF'
          },
          region: {
            type: 'string',
            example: 'Asia'
          },
          subregion: {
            type: 'string',
            example: 'Southern Asia'
          },
          latlng: {
            type: 'array',
            example: [33, 65]
          },
          flag: {
            type: 'string',
            example: 'https://restcountries.eu/data/afg.svg'
          },
          marriageAllowed: {
            type: 'string',
            example: 'NO-LEGAL'
          },
          legality: {
            type: 'string',
            example: 'NO-LEGAL'
          }
        }
      },
      Countries: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Country'
            }
          }
        }
      }
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key'
      }
    }
  }
}

export default apiDocumentation
