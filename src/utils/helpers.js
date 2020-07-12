export const formatDocument = (doc, url, lan) => {
  if (url === '/api/countries-detailed' || url === '/api/countries') {
    return doc.map(country => {
      const obj = {
        ...country,
        name: country.translations[lan] || country.name,
        issues: translateIssues(country.issues, lan)
      }

      const { translations, ...objWithoutTranslations } = obj
      return objWithoutTranslations
    })
  }
  return doc[0]
}

const translateIssues = (issues, lan) => {
  return issues.map(issue => {
    const language = lan === 'es' || lan === 'en' ? lan : 'en'
    return {
      label: issue.label[language],
      emoji: issue.emoji,
      label_short: issue.label_short[language],
      description: issue.description[language],
      current_status: {
        value: issue.current_status.value[language],
        value_formatted: issue.current_status.value_formatted[language],
        start_date_formatted: issue.current_status.start_date_formatted,
        description: issue.current_status.description[language]
      }
    }
  })
}

export const getLanguage = req =>
  req.headers && req.headers['accept-language']
    ? req.headers['accept-language'].toLowerCase()
    : undefined
