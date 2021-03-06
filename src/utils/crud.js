import errors from './errors'
import { formatDocument, getLanguage } from './helpers'

export const getOne = model => async (req, res) => {
  const id =
    req.params && req.params.id ? req.params.id.toUpperCase() : undefined
  const lan = getLanguage(req)
  try {
    const doc = await model
      .findOne({ country_code: id })
      .lean()
      .exec()

    if (!doc) {
      return res.status(404).send({ error: errors.notFound })
    }
    const document = formatDocument([doc], req.baseUrl, lan)
    res.status(200).json(document[0])
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getMany = model => async (req, res) => {
  const lan = getLanguage(req)
  try {
    const docs = await model
      .find()
      .lean()
      .exec()
    const documents = formatDocument(docs, req.baseUrl, lan)
    res.status(200).json(documents)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

// export const createOne = model => async (req, res) => {
//   const createdBy = req.user._id
//   try {
//     const doc = await model.create({ ...req.body, createdBy })
//     res.status(201).json({ data: doc })
//   } catch (e) {
//     console.error(e)
//     res.status(400).end()
//   }
// }

// export const updateOne = model => async (req, res) => {
//   try {
//     const updatedDoc = await model
//       .findOneAndUpdate(
//         {
//           createdBy: req.user._id,
//           _id: req.params.id
//         },
//         req.body,
//         { new: true }
//       )
//       .lean()
//       .exec()

//     if (!updatedDoc) {
//       return res.status(400).end()
//     }

//     res.status(200).json({ data: updatedDoc })
//   } catch (e) {
//     console.error(e)
//     res.status(400).end()
//   }
// }

// export const removeOne = model => async (req, res) => {
//   try {
//     const removed = await model.findOneAndRemove({
//       createdBy: req.user._id,
//       _id: req.params.id
//     })

//     if (!removed) {
//       return res.status(400).end()
//     }

//     return res.status(200).json({ data: removed })
//   } catch (e) {
//     console.error(e)
//     res.status(400).end()
//   }
// }

export const crudControllers = model => ({
  // removeOne: removeOne(model),
  // updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model)
  // createOne: createOne(model)
})
