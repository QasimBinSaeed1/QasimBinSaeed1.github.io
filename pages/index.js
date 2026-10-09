import React from 'react'
import dynamic from 'next/dynamic'
import {
  Link,
  Container,
  Heading,
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  chakra,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin, IoMailUnread, IoDocumentAttach, IoSchool } from 'react-icons/io5'
import Image from 'next/image'
import LogoBanner from '../components/logobanner'
import { SketchHeading, SketchHighlight, SketchButton, SketchPhoto } from '../components/sketch'
import {
  profile as siteProfile,
  news as siteNews,
  education as siteEducation,
  experience as siteExperience,
  affiliations as siteAffiliations,
  publications as sitePublications
} from '../lib/content'
import { visitedCities as siteCities } from '../lib/visited-cities'

const VisitMap = dynamic(() => import('../components/visit-map'), {
  ssr: false,
  loading: () => (
    <Skeleton
      w="100%"
      h={{ base: '220px', md: '320px' }}
      borderRadius="18px"
      startColor="blackAlpha.100"
      endColor="blackAlpha.200"
    />
  )
})

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', 'priority', 'sizes', 'style'].includes(prop)
})

function NewsBody({ item }) {
  if (item.link) {
    return (
      <>
        {item.content}{' '}
        <Link href={item.link} isExternal>
          paper
        </Link>
      </>
    )
  }
  return <>{item.content}</>
}

const Home = ({
  profile,
  news,
  education,
  experience,
  affiliations,
  publications,
  cities
}) => {
  return (
  <Layout>
    <Container maxW="100%">

      <Box display={{ lg: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            {profile.name}
          </Heading>
          <p><b>{profile.title}</b> <br/>{profile.affiliation}</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <SketchPhoto size={150}>
            <ProfileImage
              src={profile.photoUrl}
              alt="Profile image"
              width={150}
              height={150}
              priority
              sizes="150px"
            />
          </SketchPhoto>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Flex
          direction="row"
          flexWrap="wrap"
          gap={3}
          align="center"
          justify="center"
        >
          <SketchButton
            as="a"
            href={`mailto:${profile.email}`}
            leftIcon={<IoMailUnread/>}
          >
            e-mail
          </SketchButton>
          <SketchButton
            as="a"
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<IoDocumentAttach/>}
          >
            Curriculum Vitae
          </SketchButton>
          <SketchButton
            as="a"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<IoLogoGithub />}
          >
            GitHub
          </SketchButton>
          <SketchButton
            as="a"
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<IoSchool />}
          >
            Google Scholar
          </SketchButton>
          <SketchButton
            as="a"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<IoLogoLinkedin />}
          >
            LinkedIn
          </SketchButton>
        </Flex>
      </Section>

      <Box as="section" id="about" scrollMarginTop="5rem">
      <Section delay={0.15}>
        <SketchHeading>About me</SketchHeading>
        <Paragraph>
          {profile.shortBio}
        </Paragraph>
        <Box height="0.3em"></Box>
        <Paragraph>
          {profile.researchFocus}
        </Paragraph>
        <Box height="0.6em"></Box>
        <Box fontFamily="body" lineHeight="1.7">
          <SketchHighlight>{profile.seekingNote}</SketchHighlight>
          {' '}
          {profile.seekingCta}
        </Box>
      </Section>
      </Box>

      <Box as="section" id="news" scrollMarginTop="5rem">
      <Section delay={0.2}>
        <SketchHeading>News</SketchHeading>
        {(news || []).map(item => (
          <BioSection key={item.id}>
            <BioYear>{item.date}</BioYear>
            <NewsBody item={item} />
          </BioSection>
        ))}
      </Section>
      </Box>

      <Box as="section" id="publications" scrollMarginTop="5rem">
        <Section delay={0.25}>
          <SketchHeading>Publications</SketchHeading>
          <SimpleGrid columns={{ sm: 1 }} gap={8} mt={2}>
            {(publications || []).map(pub => (
              <PubGridItem
                key={pub.id || pub.slug}
                id={pub.slug}
                title={pub.title}
                thumbnail={pub.thumbnailUrl}
                journal={pub.journal}
                project_page={pub.projectPage || 'none'}
                author={pub.authors}
                paper={pub.paper || 'none'}
                video={pub.video || 'none'}
                code={pub.code || 'none'}
                dataset={pub.dataset || 'none'}
              />
            ))}
          </SimpleGrid>
        </Section>
      </Box>

      <Box as="section" id="education" scrollMarginTop="5rem">
      <Section delay={0.3}>
        <SketchHeading>Education</SketchHeading>
        {(education || []).map(item => (
          <BioSection key={item.id}>
            <BioYear>{item.period}</BioYear>
            {item.description}
            {item.linkText && item.linkUrl && (
              <>
                {' '}
                <Link href={item.linkUrl} isExternal>
                  {item.linkText}
                </Link>
              </>
            )}
          </BioSection>
        ))}
      </Section>
      </Box>

      <Box as="section" id="experience" scrollMarginTop="5rem">
      <Section delay={0.35}>
        <SketchHeading>Experience</SketchHeading>
        {(experience || []).map(item => (
          <BioSection key={item.id}>
            <BioYear>{item.period}</BioYear>
            {item.description}
            {item.linkText && item.linkUrl && (
              <>
                {' '}
                <Link href={item.linkUrl} isExternal>
                  {item.linkText}
                </Link>
              </>
            )}
          </BioSection>
        ))}
      </Section>
      </Box>

      <Box as="section" id="places" scrollMarginTop="5rem">
        <Section delay={0.4}>
          <SketchHeading>Places</SketchHeading>
          <Paragraph>
            Cities I have been to for conferences and fun as travelling is my hobby.
          </Paragraph>
          <VisitMap cities={cities} />
        </Section>
      </Box>

      <LogoBanner affiliations={affiliations} />

      <Box align="center" h="2em">
      </Box>

    </Container>
  </Layout>
  );
};

export default Home

export async function getStaticProps() {
  return {
    props: {
      profile: siteProfile,
      news: siteNews,
      education: siteEducation,
      experience: siteExperience,
      affiliations: siteAffiliations,
      publications: sitePublications,
      cities: siteCities
    }
  }
}
