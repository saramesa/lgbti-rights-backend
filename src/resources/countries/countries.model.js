import mongoose from 'mongoose'

const countriesSchema = new mongoose.Schema(
  {
    name: String,
    region: String,
    subregion: String,
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
    flag_png: String,
    legality: String,
    marriageAllowed: String
  },
  { timestamps: true }
)

countriesSchema.index({ countries: 1, name: 1 }, { unique: true })

export const Countries = mongoose.model(
  'countries',
  countriesSchema,
  'countries'
)
