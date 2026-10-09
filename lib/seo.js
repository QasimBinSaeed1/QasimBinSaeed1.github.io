import { profile } from './content'

const siteUrl = (profile.siteUrl || 'https://qasimbinsaeed1.github.io').replace(
  /\/$/,
  ''
)

export const seo = {
  siteUrl,
  title: `${profile.name} | Robotics, Computer Vision & Embodied AI | ${profile.affiliation}`,
  shortTitle: profile.name,
  description: `${profile.name} — ${profile.title} at ${profile.affiliation}. Research in robotics, computer vision, 3D scene understanding, UAV inspection, and embodied AI. Advisors and collaborators: Dr. YoungJin Cha; previously Moffitt Cancer Center.`,
  keywords: [
    profile.name,
    'Qasim Saeed',
    'QasimBinSaeed',
    profile.affiliation,
    'robotics',
    'computer vision',
    'embodied AI',
    '3D reconstruction',
    'neural scene representations',
    'UAV',
    'PhD applicant',
    'Graduate Research Assistant',
    'YoungJin Cha',
    'Moffitt Cancer Center'
  ].join(', '),
  image: `${siteUrl}${profile.photoUrl}`,
  email: profile.email,
  sameAs: [profile.github, profile.scholar, profile.linkedin].filter(Boolean)
}

/** JSON-LD Person + WebSite for Google/Bing rich results */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${seo.siteUrl}/#person`,
        name: profile.name,
        url: seo.siteUrl,
        image: seo.image,
        email: profile.email,
        jobTitle: profile.title,
        worksFor: {
          '@type': 'Organization',
          name: profile.affiliation
        },
        affiliation: {
          '@type': 'CollegeOrUniversity',
          name: profile.affiliation
        },
        description: seo.description,
        sameAs: seo.sameAs,
        knowsAbout: [
          'Robotics',
          'Computer Vision',
          'Embodied AI',
          '3D Scene Understanding',
          'Neural Scene Representations',
          'UAV-based Infrastructure Inspection'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${seo.siteUrl}/#website`,
        url: seo.siteUrl,
        name: profile.name,
        description: seo.description,
        publisher: { '@id': `${seo.siteUrl}/#person` },
        inLanguage: 'en'
      },
      {
        '@type': 'ProfilePage',
        '@id': `${seo.siteUrl}/#profilepage`,
        url: seo.siteUrl,
        name: seo.title,
        about: { '@id': `${seo.siteUrl}/#person` },
        mainEntity: { '@id': `${seo.siteUrl}/#person` },
        isPartOf: { '@id': `${seo.siteUrl}/#website` }
      }
    ]
  }
}
