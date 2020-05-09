import mongoose from 'mongoose'

const countriesDetailedSchema = new mongoose.Schema(
  {
    name: String,
    issues: {
      homosexuality: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          start_date_formatted: Date,
          description: String
        }
      },
      marriage: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          start_date_formatted: Date,
          description: String
        }
      },
      changingGender: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          description: String
        }
      },
      adoption: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          description: String
        }
      },
      discrimination: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          start_date_formatted: Date,
          description: String
        }
      },
      housingDiscrimination: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          start_date_formatted: Date,
          description: String
        }
      },
      employmentDiscrimination: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          start_date_formatted: Date,
          description: String
        }
      },
      military: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          description: String
        }
      },
      ageOfConsent: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          description: String
        }
      },
      blood: {
        label: String,
        label_short: String,
        description: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          description: String
        }
      },
      conversionTherapy: {
        label: String,
        label_short: String,
        current_status: {
          value: String,
          value_formatted: {
            en: String,
            es: String
          },
          description: String
        }
      }
    },
    country_code: String,
    capital: String,
    region: String,
    subregion: String,
    population: Number,
    latlng: [Number, Number],
    translations: {
      de: String,
      es: String,
      fr: String,
      ja: String,
      it: String,
      br: String,
      pt: String,
      nl: String,
      hr: String,
      fa: String
    },
    flag: String,
    flag_png: String
  },
  { timestamps: true }
)

countriesDetailedSchema.index({ countries: 1, name: 1 }, { unique: true })

export const CountriesDetailed = mongoose.model(
  'countries-detailed',
  countriesDetailedSchema,
  'countries-detailed'
)
