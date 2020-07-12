const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Lgbti Rights',
    description: 'LGBTI Rights API'
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
          _id: '5eda865f5d6d7812c8235d49',
          name: 'Afganistán',
          issues: [
            {
              label: 'Homosexual activity',
              emoji: '🏳️‍🌈',
              label_short: 'Homosexuality',
              description:
                'Consensual sexual activity between individuals of the same sex.',
              current_status: {
                value: 'Illegal (death penalty as punishment)',
                value_formatted: {
                  en: 'Illegal (death penalty as punishment)',
                  es: 'Ilegal (castigo de pena de muerte)'
                },
                start_date_formatted: 'October 7, 1976',
                description:
                  'Article 427 states homosexuality will suffer long imprisonments (along with Adultery.) In addition, article 398 states that honour killing is legal '
              }
            },
            {
              label: 'Same-sex marriage',
              emoji: '💒',
              label_short: 'Marriage',
              description:
                'Marriage and marriage recognition between two people of the same biological sex and/or gender identity.',
              current_status: {
                value: 'Not legal',
                value_formatted: { en: 'Not legal', es: 'Ilegal' },
                start_date_formatted: 'August 8, 1971',
                description: ''
              }
            },
            {
              label: 'Right to change legal gender',
              emoji: '👨‍⚕️',
              label_short: 'Changing Gender',
              description:
                "Legal recognition of sex reassignment by permitting a change of legal gender on an individual's birth certificate.",
              current_status: {
                value: 'ambiguous',
                value_formatted: { en: 'Ambiguous', es: 'Ambiguo' },
                description: 'Not preformed. No laws in place to do so.'
              }
            },
            {
              label: 'Same-sex adoption',
              emoji: '👩‍👩‍👦',
              label_short: 'Adoption',
              description:
                'The ability for same-sex couples to legally adopt a child.',
              current_status: {
                value: 'Single only',
                value_formatted: { en: 'Single only', es: 'Solteros solo' },
                description: 'no laws in place.'
              }
            },
            {
              label: 'LGBT discrimination',
              emoji: '🤬',
              label_short: 'Discrimination',
              description:
                'Prohibition of discrimination based on sexual orientation and/or gender identity.',
              current_status: {
                value: 'No protections',
                value_formatted: { en: 'No protections', es: 'Sin protección' },
                start_date_formatted: 'August 19, 1919',
                description: ''
              }
            },
            {
              label: 'LGBT housing discrimination',
              emoji: '🏠',
              label_short: 'Housing Discrimination',
              description:
                'Prohibition of discrimination based on sexual orientation and/or gender identity when applying for housing or discrimination by landlords / property owners.',
              current_status: {
                value: 'No protections',
                value_formatted: { en: 'No protections', es: 'Sin protección' },
                start_date_formatted: 'August 19, 1919',
                description: 'No'
              }
            },
            {
              label: 'LGBT employment discrimination',
              emoji: '👩‍💻',
              label_short: 'Employment Discrimination',
              description:
                'Prohibition of discrimination based on sexual orientation and/or gender identity in employment, including hiring, promotion, termination, harassment, etc.',
              current_status: {
                value: 'No protections',
                value_formatted: { en: 'No protections', es: 'Sin protección' },
                start_date_formatted: 'August 19, 1919',
                description: 'None exist in the criminal code.'
              }
            },
            {
              label: 'Homosexuals serving openly in military',
              emoji: '🎖',
              label_short: 'Military',
              description:
                'The ability for homosexuals to serve in the military and be open about their sexuality.',
              current_status: {
                value: 'Legal',
                value_formatted: { en: 'Legal', es: 'Legal' },
                description:
                  'Missing discrimination protections and same sex activity is currently illegal.'
              }
            },
            {
              label: 'Equal age of consent',
              emoji: '🔞',
              label_short: 'Age of Consent',
              description:
                'The difference between legal age of consent for homosexual sex and heterosexual sex.',
              current_status: {
                value: 'Unequal',
                value_formatted: { en: 'Unequal', es: 'Desigual' },
                description: 'Homosexuality is illegal. Person must be married.'
              }
            },
            {
              label: 'Blood donations by MSMs',
              emoji: '💉',
              label_short: 'Donating Blood',
              description:
                'The ability for MSMs (men who have sex with men) to donate blood or tissue for organ transplants. A deferral period refers to a waiting time before a man can donate after having sex.',
              current_status: {
                value: 'Banned (1-year deferral)',
                value_formatted: {
                  en: 'Banned (1-year deferral)',
                  es: 'Prohibido (aplazamiento de 1 año)'
                },
                description: 'No'
              }
            },
            {
              label: 'Conversion therapy',
              emoji: '💊',
              label_short: 'Conversion Therapy',
              description:
                'Legal status of conducting sexual orientation changing therapy ("ex-gay" therapy)',
              current_status: {
                value: 'ambiguous',
                value_formatted: { en: 'Ambiguous', es: 'Ambiguo' },
                description: 'Unknown.'
              }
            }
          ],
          country_code: 'AF',
          region: 'Asia',
          subregion: 'Southern Asia',
          latlng: [33, 65],
          flag: 'https://restcountries.eu/data/afg.svg',
          flag_png: 'https://www.countryflags.io/AF/flat/64.png'
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
