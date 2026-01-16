import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
}

const SEO = ({
    title,
    description,
    canonical,
    ogImage = '/assets/og-vclip.png',
    ogType = 'website'
}: SEOProps) => {
    const { t, i18n } = useTranslation();

    // Allow overriding via props, otherwise use translation keys
    const siteTitle = title || t('seo.title', 'V Clip - Innovación Óptica');
    const siteDescription = description || t('seo.description', 'El inserto óptico definitivo para deportes extremos.');
    const siteUrl = window.location.origin;
    const currentCanonical = canonical || window.location.href;
    const currentLang = i18n.language;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <link rel="canonical" href={currentCanonical} />
            <html lang={currentLang} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={currentCanonical} />
            <meta property="og:title" content={title || t('seo.og.title', siteTitle)} />
            <meta property="og:description" content={description || t('seo.og.description', siteDescription)} />
            <meta property="og:image" content={siteUrl + ogImage} />
            <meta property="og:locale" content={currentLang} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentCanonical} />
            <meta name="twitter:title" content={title || t('seo.og.title', siteTitle)} />
            <meta name="twitter:description" content={description || t('seo.og.description', siteDescription)} />
            <meta name="twitter:image" content={siteUrl + ogImage} />
        </Helmet>
    );
};

export default SEO;
