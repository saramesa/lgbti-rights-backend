const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Lgbti Rights',
    description: 'LGBTI Rights API'
  },
  servers: [
    {
      url: 'https://lgbti-rights.com/api',
      description: 'Production server'
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
          _id: { type: 'string', example: '5eda865f5d6d7812c8235d49' },
          name: { type: 'string', example: 'Afganistán' },
          issues: {
            type: 'array',
            example: [
              {
                label: { type: 'string', example: 'Homosexual activity' },
                emoji: { type: 'string', example: '🏳️‍🌈' },
                label_short: { type: 'string', example: 'Homosexuality' },
                description: {
                  type: 'string',
                  example:
                    'Consensual sexual activity between individuals of the same sex.'
                },

                current_status: {
                  value: {
                    type: 'string',
                    example: 'Illegal (death penalty as punishment)'
                  },
                  value_formatted: {
                    type: 'string',
                    example: 'Illegal (death penalty as punishment)'
                  },
                  start_date_formatted: {
                    type: 'string',
                    example: 'October 7, 1976'
                  },
                  description: {
                    type: 'string',
                    example:
                      'Article 427 states homosexuality will suffer long imprisonments (along with Adultery.) In addition, article 398 states that honour killing is legal'
                  }
                }
              }
            ]
          },
          country_code: { type: 'string', example: 'AF' },
          region: { type: 'string', example: 'Asia' },
          subregion: { type: 'string', example: 'Southern Asia' },
          latlng: { type: 'array', example: [33, 65] },
          flag: {
            type: 'string',
            example: 'https://restcountries.eu/data/afg.svg'
          },
          flag_png: {
            type: 'string',
            example: 'https://www.countryflags.io/AF/flat/64.png'
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
            type: 'object',
            properties: {
              link: {
                type: 'string',
                example: 'https://github.com/andreaagudo3'
              },
              photo: {
                type: 'string',
                example:
                  'https://s3.eu-central-1.amazonaws.com/lgbti-rights.com/andrea.jpg'
              }
            }
          },
          sara: {
            type: 'object',
            properties: {
              link: {
                type: 'string',
                example: 'https://github.com/saramesa'
              },
              photo: {
                type: 'string',
                example:
                  'https://s3.eu-central-1.amazonaws.com/lgbti-rights.com/sara.jpg'
              }
            }
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
          flag_png: {
            type: 'string',
            example: 'https://www.countryflags.io/AF/flat/64.png'
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
