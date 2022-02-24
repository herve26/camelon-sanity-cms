// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';

// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';
import slide from './objects/slide';
import Card from './objects/Card';
import Address from './objects/Address';
import Contact from './objects/Contact';
import Phone from './objects/Phone';
import WhatsApp from './objects/whatsapp';

//Sections
import FTextImage from './sections/FTextImage';
import ImageTextCarousel from './sections/ImageTextCarousel';
import Cards from './sections/Cards';
import ContactForm from './sections/ContactForm';
import Addresses from './sections/Addresses';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    Address,
    Addresses,
    Card,
    Cards,
    Contact,
    ContactForm,
    cta,
    embedHTML,
    figure,
    FTextImage,
    hero,
    imageSection,
    ImageTextCarousel,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    Phone,
    route,
    simplePortableText,
    siteConfig,
    slide,
    textSection,
    WhatsApp
  ]),
});
