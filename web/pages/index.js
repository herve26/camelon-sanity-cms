import { createContext, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import client from '../client';
import groq from 'groq';

import Header from '#Organisms/Header';
import Main from '#Organisms/Main';
import Footer from '#Organisms/Footer';

import ContactContext from '#Utils/contactFormContext';

const socialTags = ({
  openGraphType,
  url,
  title,
  description,
  image,
  createdAt,
  updatedAt,
  settings
}) => {
  const metaTags = [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:site",
      content:
        settings &&
        settings.twitter,
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      name: "twitter:creator",
      content:
        settings &&
        settings.twitter,
    },
    { name: "twitter:image:src", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "og:title", content: title },
    { name: "og:type", content: openGraphType },
    { name: "og:url", content: url },
    { name: "og:image", content: image },
    { name: "og:description", content: description },
    {
      name: "og:site_name",
      content: title,
    },
    {
      name: "og:published_time",
      content: createdAt || new Date().toISOString(),
    },
    {
      name: "og:modified_time",
      content: updatedAt || new Date().toISOString(),
    },
  ];

  return metaTags;
};

export default function Home({twitter, title, description, openGraphImage, hero, sections, navigation, config, translation}) {
  const settings = {twitter}
  const socialProps = {title, description, url: config.url, image: openGraphImage, openGraphType: 'website', settings}

  const getContactSubject = sect => {
    const contactSect = sect.find(item => item._type === 'contactForm')

    if(contactSect){
      return contactSect.subjects[0]
    }

    return ""
  }

  const [subject, setSubject] = useState(getContactSubject(sections))
  const values = {subject, setSubject}

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta itemProp="name" content={title}/>
        <meta itemProp="description" content={description}/>
        <meta itemProp="image" content={openGraphImage}/>
        {socialTags(socialProps).map(({name, content}) => 
            <meta key={name} name={name} content={content}/>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "organization",
              name: title,
              address: sections[sections.length - 1].addresses[0].info[0].value,
              telephone: sections[sections.length - 1].addresses[0].info[1].value,
              url: config.url,
              image: openGraphImage
            })
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactContext.Provider value={values}>
        <Header
          hero={hero}
          navigation={navigation}
          logo={config.logo}
        />
        <Main sections={sections} translation={translation}/>
        <Footer copy={config.footerText}/>
      </ContactContext.Provider>
    </div>
  )
}


export async function getStaticProps({locale, defaultLocale}) {

  const clientConfig = { ...client.config(), token: process.env.SANITY_TOKEN }
  client.config(clientConfig)

  const config = await client.fetch(
    groq`
      *[_type == "site-config"][0]{
        "logo": logo.asset->url,
        title,
        url,
        footerText
      }
    `
  )

  const data = await client.fetch(
    groq`
      *[_type == "page" && __i18n_lang == "${locale}"][0]{
        hero,
        content,
        navigation,
        description,
        title,
        twitter,
        "openGraphImage": openGraphImage.asset->url
      }
    `
  )

  const translations = {
    en:{
      contactForm:{
        labels:{
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message'
        },
        buttons:{
          submit: "Send Message"
        }
      }
    },
    fr:{
      contactForm:{
        labels:{
          name: 'Nom',
          email: 'Email',
          subject: 'Suject',
          message: 'Message'
        },
        buttons:{
          submit: "Envoyer Message"
        }
      } 
    }
  }

  return { props: {
    hero: data.hero,
    sections: data.content ? data.content : [],
    navigation: data.navigation ? data.navigation : [],
    title: data.title,
    description: data.description,
    twitter: data.twitter,
    openGraphImage: data.openGraphImage,
    config,
    translation: translations[locale]
  }}
}