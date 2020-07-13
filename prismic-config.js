// In src/prismic-configuration.js
export const linkResolver = (doc) => {

  if (doc.type === 'interior-cleaning') {
    return `/interior-cleaning/${doc.uid}`
  }

  if (doc.type === 'exterior-cleaning') {
    return `/exterior-cleaning/${doc.uid}`
  }

  if (doc.type === 'cleaning-accessories') {
    return `/cleaning-accessories/${doc.uid}`
  }
  // Backup for all other types
  return '/'
}
