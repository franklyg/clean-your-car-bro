// In src/prismic-configuration.js
export const linkResolver = (doc) => {

  if (doc.type === 'interior-cleaning') {
    return `/interior-cleaning`
  }

  if (doc.type === 'exterior-cleaning') {
    return `/exterior-cleaning`
  }

  if (doc.type === 'cleaning-accessories') {
    return `/cleaning-accessories`
  }
  // Backup for all other types
  return '/'
}
