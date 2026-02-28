import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Hair',
      links: [
        { text: 'Chris Phillips Hair Lounge', href: getPermalink('/providers/chris-phillips-hair-lounge') },
        { text: 'Moonstone Studio', href: getPermalink('/providers/moonstone-studio') },
        { text: 'The Boujee Hair Lounge', href: getPermalink('/providers/boujee-hair-lounge') },
        { text: 'Flourish Hair Lounge', href: getPermalink('/providers/flourish-hair-lounge') },
        { text: 'Refreshed', href: getPermalink('/providers/refreshed') },
        { text: 'Roots & Wings Hair Studio', href: getPermalink('/providers/roots-and-wings') },
        { text: 'Vault Studio ~ Shannon', href: getPermalink('/providers/vault-studio-shannon') },
        { text: 'Vault Studio ~ Mindy', href: getPermalink('/providers/vault-studio-mindy') },
        { text: 'The Blaire Hair Collective: Gina', href: getPermalink('/providers/blaire-hair-collective-gina') },
        { text: 'The Blaire Hair Collective: Alyssa', href: getPermalink('/providers/blaire-hair-collective-alyssa') },
        { text: 'Daniel Penn', href: getPermalink('/providers/daniel-penn') },
        { text: 'Nicole Roberts', href: getPermalink('/providers/nicole-roberts') },
      ],
    },
    {
      text: 'Nails',
      links: [
        { text: 'Studio 88', href: getPermalink('/providers/studio-88') },
      ],
    },
    {
      text: 'Waxing, Brows, & Lashes',
      links: [
        { text: 'Jersey Lashes & Beauty Bar', href: getPermalink('/providers/jersey-lashes') },
        { text: 'Threadmandu Eyebrow Salon', href: getPermalink('/providers/threadmandu') },
      ],
    },
    {
      text: 'Skin Care',
      links: [
        { text: 'Threadmandu Eyebrow Salon', href: getPermalink('/providers/threadmandu-skincare') },
      ],
    },
    {
      text: 'Directions',
      href: 'https://www.google.com/maps/dir//Beau+Monde+Salon+Suites,+300+S+Main+St+Suite+132,+Holly+Springs,+NC+27540',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/beaumondesalonsuites/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/beaumondesalonsuites/' },
  ],
  footNote: '',
};
