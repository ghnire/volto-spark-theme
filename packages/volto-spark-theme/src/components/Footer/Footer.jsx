// SemanticUI-free pre-@plone/components
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import ConditionalLink from '@plone/volto/components/manage/ConditionalLink/ConditionalLink';
import Logo from '@plone/volto/components/theme/Logo/Logo';
import { Container } from '@plone/components';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers/Url/Url';
import config from '@plone/volto/registry';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
  const { settings } = config;
  const { lang, siteActions = [] } = useSelector(
    (state) => ({
      lang: state.intl.locale,
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );
  const navroot = useSelector((state) => state.navroot.data.navroot);
  const footerLinks = navroot?.footer_links;
  const footerLogos = navroot?.footer_logos;

  return (
    <footer id="footer">
      <Container className="footer">
        <div className="footer-container">
          <div className="footer-message footer-element">
            <div className="footer-element-flex">
              <p>Some quick links</p>
            </div>
          </div>
          <div className="footer-element">
            <ul className="footer-links">
              {!isEmpty(footerLinks?.blocks)
                ? footerLinks.blocks_layout.items.map((itemId) => {
                    const link = footerLinks.blocks[itemId];
                    const title = link.title || link.href[0]['title'];
                    const href = flattenToAppURL(link.href[0]['@id']);

                    if (!href) return null;

                    return (
                      <li className="item" key={href}>
                        <UniversalLink href={href}>{title}</UniversalLink>
                      </li>
                    );
                  })
                : siteActions?.length
                  ? siteActions.map((item) => (
                      <li className="item" key={item.id}>
                        <UniversalLink
                          className="item"
                          href={
                            settings.isMultilingual
                              ? `/${lang}/${
                                  item.url
                                    ? flattenToAppURL(item.url)
                                    : addAppURL(item.id)
                                }`
                              : item.url
                                ? flattenToAppURL(item.url)
                                : addAppURL(item.id)
                          }
                        >
                          {item?.title}
                        </UniversalLink>
                      </li>
                    ))
                  : null}
            </ul>
            <ul className="footer-logos">
              {!isEmpty(footerLogos?.blocks)
                ? footerLogos.blocks_layout.items.map((itemId) => {
                    const logo = footerLogos.blocks[itemId];
                    let logoHref, hrefTitle, href, srcAlt, src;
                    if (logo?.href) {
                      hrefTitle = logo.href[0]['title'];
                      href = flattenToAppURL(logo.href[0]['@id']);
                    }
                    if (logo?.logo) {
                      logoHref = logo.logo[0]['@id'];
                      srcAlt = logo['alt'];
                      src = `${flattenToAppURL(logoHref)}/${logo.logo[0].image_scales[logo.logo[0].image_field][0].download}`;
                    }

                    if (!src) return null;

                    return (
                      <li className="item" key={href}>
                        <ConditionalLink
                          condition={href}
                          to={href}
                          title={hrefTitle || srcAlt}
                        >
                          <img src={src} alt={srcAlt} />
                        </ConditionalLink>
                      </li>
                    );
                  })
                : null}
            </ul>
            <div className="logo">
              <Logo />
            </div>
          </div>
          <div className="footer-message footer-element">
            <div className="footer-element-flex">
              <p className="footer-message-sitename">
                <FormattedMessage
                  id="footer-message-sitename-id"
                  defaultMessage="{sparknet}"
                  values={{
                    sparknet: (
                      <FormattedMessage
                        id="Sparknet{reg} - Spark Holland Intranet site"
                        defaultMessage="Sparknet{reg} | Spark Holland Intranet site | {current_year}"
                        values={{
                          reg: <sup>®</sup>,
                          current_year: new Date().getFullYear(),
                        }}
                      />
                    ),
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
