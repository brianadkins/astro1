export interface Provider {
  slug: string;
  name: string;
  business: string;
  category: 'hair' | 'nails' | 'waxing-brows-lashes' | 'skincare';
  image: string;
  description: string;
  services: string[];
  bookingUrl?: string;
}

export const categories = [
  { slug: 'hair', label: 'Hair' },
  { slug: 'nails', label: 'Nails' },
  { slug: 'waxing-brows-lashes', label: 'Waxing, Brows, & Lashes' },
  { slug: 'skincare', label: 'Skin Care' },
] as const;

export const providers: Provider[] = [
  {
    slug: 'chris-phillips-hair-lounge',
    name: 'Chris Phillips',
    business: 'Chris Phillips Hair Lounge',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop&crop=face',
    description: 'Specializing in color, cuts, and styling for all hair types. Chris brings years of experience and a passion for making every client feel beautiful.',
    services: ['Color', 'Highlights', 'Balayage', 'Haircuts', 'Blowouts', 'Styling'],
    bookingUrl: '#',
  },
  {
    slug: 'moonstone-studio',
    name: 'Randi',
    business: 'Moonstone Studio',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face',
    description: 'Moonstone Studio offers a relaxing, personalized experience with a focus on lived-in color and effortless styles.',
    services: ['Balayage', 'Color Correction', 'Haircuts', 'Bridal Styling'],
    bookingUrl: '#',
  },
  {
    slug: 'boujee-hair-lounge',
    name: 'The Boujee Hair Lounge',
    business: 'The Boujee Hair Lounge',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=400&h=400&fit=crop&crop=face',
    description: 'Where luxury meets artistry. Specializing in vivid colors, extensions, and transformative hair experiences.',
    services: ['Vivid Color', 'Extensions', 'Cuts', 'Deep Conditioning'],
    bookingUrl: '#',
  },
  {
    slug: 'flourish-hair-lounge',
    name: 'Flourish Hair Lounge',
    business: 'Flourish Hair Lounge',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1554519515-242161756769?w=400&h=400&fit=crop&crop=face',
    description: 'Helping your hair flourish with nourishing treatments and expert styling in a warm, welcoming environment.',
    services: ['Cuts', 'Color', 'Keratin Treatments', 'Styling'],
    bookingUrl: '#',
  },
  {
    slug: 'refreshed',
    name: 'Courtney Morgan',
    business: 'Refreshed',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face',
    description: 'Refreshed is your destination for a fresh new look. Courtney specializes in blonding, dimensional color, and precision cuts.',
    services: ['Blonding', 'Dimensional Color', 'Precision Cuts', 'Blowouts'],
    bookingUrl: '#',
  },
  {
    slug: 'roots-and-wings',
    name: 'Roots & Wings Hair Studio',
    business: 'Roots & Wings Hair Studio',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face',
    description: 'Rooted in technique, inspired by creativity. Offering a full range of hair services in a cozy studio setting.',
    services: ['Color', 'Cuts', 'Highlights', 'Textured Hair'],
    bookingUrl: '#',
  },
  {
    slug: 'vault-studio-shannon',
    name: 'Shannon',
    business: 'Vault Studio',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop&crop=face',
    description: 'Shannon at Vault Studio delivers polished, modern looks with expertise in color and cutting techniques.',
    services: ['Color', 'Balayage', 'Haircuts', 'Styling'],
    bookingUrl: '#',
  },
  {
    slug: 'vault-studio-mindy',
    name: 'Mindy',
    business: 'Vault Studio',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    description: 'Mindy brings creativity and precision to every appointment, specializing in color transformations and textured cuts.',
    services: ['Color', 'Textured Cuts', 'Highlights', 'Hair Treatments'],
    bookingUrl: '#',
  },
  {
    slug: 'blaire-hair-collective-gina',
    name: 'Gina',
    business: 'The Blaire Hair Collective',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    description: 'Gina at The Blaire Hair Collective creates stunning, customized looks with a focus on healthy hair.',
    services: ['Color', 'Highlights', 'Cuts', 'Treatments'],
    bookingUrl: '#',
  },
  {
    slug: 'blaire-hair-collective-alyssa',
    name: 'Alyssa',
    business: 'The Blaire Hair Collective',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    description: 'Alyssa specializes in lived-in color and effortless styles that complement your lifestyle.',
    services: ['Lived-in Color', 'Balayage', 'Cuts', 'Styling'],
    bookingUrl: '#',
  },
  {
    slug: 'daniel-penn',
    name: 'Daniel Penn',
    business: 'Daniel Penn',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'Daniel brings a fresh perspective and expert technique to mens and womens haircuts and styling.',
    services: ['Mens Cuts', 'Womens Cuts', 'Styling', 'Color'],
    bookingUrl: '#',
  },
  {
    slug: 'nicole-roberts',
    name: 'Nicole Roberts',
    business: 'Nicole Roberts',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    description: 'Nicole is passionate about creating beautiful hair with an emphasis on healthy color techniques.',
    services: ['Color', 'Highlights', 'Cuts', 'Treatments'],
    bookingUrl: '#',
  },
  {
    slug: 'studio-88',
    name: 'Hannah',
    business: 'Studio 88',
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    description: 'Studio 88 offers nail artistry at its finest. Hannah creates beautiful, long-lasting manicures and nail designs.',
    services: ['Gel Manicure', 'Nail Art', 'Acrylic Nails', 'Pedicure', 'Dip Powder'],
    bookingUrl: '#',
  },
  {
    slug: 'jersey-lashes',
    name: 'Nicolette Williams',
    business: 'Jersey Lashes & Beauty Bar',
    category: 'waxing-brows-lashes',
    image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=400&h=400&fit=crop&crop=face',
    description: 'Jersey Lashes & Beauty Bar specializes in lash extensions, brow shaping, and waxing services for a polished look.',
    services: ['Lash Extensions', 'Lash Lifts', 'Brow Shaping', 'Facial Waxing', 'Body Waxing'],
    bookingUrl: '#',
  },
  {
    slug: 'threadmandu',
    name: 'Threadmandu',
    business: 'Threadmandu Eyebrow Salon',
    category: 'waxing-brows-lashes',
    image: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?w=400&h=400&fit=crop&crop=face',
    description: 'Expert eyebrow threading and shaping using traditional techniques for perfectly defined brows.',
    services: ['Eyebrow Threading', 'Eyebrow Shaping', 'Facial Threading', 'Tinting'],
    bookingUrl: '#',
  },
  {
    slug: 'threadmandu-skincare',
    name: 'Threadmandu',
    business: 'Threadmandu Eyebrow Salon',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop&crop=face',
    description: 'In addition to threading, Threadmandu offers skincare treatments to help you achieve a radiant complexion.',
    services: ['Facials', 'Skin Treatments', 'Tinting'],
    bookingUrl: '#',
  },
];

export function getProvidersByCategory(category: string): Provider[] {
  return providers.filter((p) => p.category === category);
}

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug);
}
