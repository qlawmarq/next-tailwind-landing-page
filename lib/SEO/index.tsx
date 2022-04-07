import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import config from '../../config'

type TypeCommonSEO = {
  title: string;
  description: string;
  ogImage: string;
  ogType: string;
  twImage: string;
}

const CommonSEO = ({ title, description, ogType, ogImage, twImage }: TypeCommonSEO) => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      {/* <meta name="robots" content="noindex"/>
      <meta name="robots" content="nofollow"/> */}
      <meta name="description" content={description} />
      <meta property="og:url" content={`${config.metadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={config.metadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} key={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={config.metadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

type TypePageSEO = {
  pageTitle?: string;
  description: string;
}

export const PageSEO = ({ pageTitle, description }: TypePageSEO) => {
  const ogImageUrl = config.metadata.siteUrl + config.metadata.socialBanner;
  const twImageUrl = config.metadata.siteUrl + config.metadata.socialBanner;
  const title = pageTitle ? config.metadata.title + ' | ' + pageTitle : config.metadata.title;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}

