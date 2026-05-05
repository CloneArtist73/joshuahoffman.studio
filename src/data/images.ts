import type { ImageItem } from './types';
import { isPublicReadyImage } from '../utils/readiness';

// TODO: Replace these placeholder SVG paths with real photo files in /public/images/
// and update each title, alt, hook, story, and metadata as real work is added.
export const images: ImageItem[] = [
  {
    slug: 'after-the-show',
    status: 'draft',
    title: 'After the Show',
    category: 'musician',
    tags: ['musicians', 'performance', 'portrait'],
    imageSrc: '/images/placeholders/musician-stage.svg',
    alt: 'Illustrative low-lit musician portrait after a performance.',
    hook: 'A musician portrait made after the room emptied out.',
    story:
      'The frame stays with the minutes after performance, when the body is still charged but the audience is gone. It is less about stage energy than the quiet that follows it. This kind of portrait works for press kits, release cycles, and artists who want images with some residue left in them.',
    orientation: 'horizontal',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Large horizontal print or artist press image',
    featured: true,
    printAvailable: true,
    serviceCTA: 'musician',
    productSlug: 'after-the-show-print',
  },
  {
    slug: 'hands-at-rest',
    status: 'draft',
    title: 'Hands at Rest',
    category: 'legacy',
    tags: ['legacy', 'family', 'memory'],
    imageSrc: '/images/placeholders/legacy-light.svg',
    alt: 'Illustrative close family memory photograph centered on hands.',
    hook: 'A family image built around touch, not performance.',
    story:
      'Some photographs matter because they hold onto ordinary gestures before they disappear. This image is meant to point toward legacy work that is quiet, respectful, and grounded in family presence. The finished photograph should feel close, steady, and careful.',
    orientation: 'vertical',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Album spread or vertical wall print',
    featured: true,
    serviceCTA: 'legacy',
  },
  {
    slug: 'before-the-vow',
    status: 'draft',
    title: 'Before the Vow',
    category: 'portrait',
    tags: ['portrait', 'family', 'honest'],
    imageSrc: '/images/placeholders/portrait-session.svg',
    alt: 'Illustrative direct portrait with soft light and still posture.',
    hook: 'An honest portrait built around stillness instead of posing.',
    story:
      'The point here is presence rather than performance. This type of portrait works for people who want to look recognizable to themselves, not overly styled into somebody else. It is the baseline for individual, couple, and family sessions that need weight.',
    orientation: 'vertical',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Vertical portrait print',
    featured: true,
    serviceCTA: 'portrait',
  },
  {
    slug: 'room-with-flowers',
    status: 'draft',
    title: 'Room with Flowers',
    category: 'print',
    tags: ['print', 'memory', 'interior'],
    imageSrc: '/images/placeholders/hero-memory.svg',
    alt: 'Illustrative interior fine-art photograph with flowers and muted light.',
    hook: 'A still room that carries memory without explaining it.',
    story:
      'This image belongs to the print side of the site because it can live on a wall as quietly as it sits in a story. It suggests care, absence, and domestic space without pushing too hard. Buyers can choose an external checkout route or ask directly about signed editions.',
    orientation: 'horizontal',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Medium to large framed print',
    featured: true,
    printAvailable: true,
    serviceCTA: 'custom',
    productSlug: 'room-with-flowers-print',
  },
  {
    slug: 'green-room',
    status: 'draft',
    title: 'Green Room',
    category: 'musician',
    tags: ['musicians', 'promo', 'artist'],
    imageSrc: '/images/placeholders/musician-stage.svg',
    alt: 'Illustrative backstage musician portrait in low green light.',
    hook: 'A backstage frame for artists who need something more direct than promo gloss.',
    story:
      'This stands in for artist work made between performance and travel, when people are still themselves. The intended replacement image should feel useful for posters, social announcements, and album-side press. It should read as work, not costume.',
    orientation: 'horizontal',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Wide crop for digital promo use',
    featured: true,
    serviceCTA: 'musician',
  },
  {
    slug: 'kitchen-window',
    status: 'draft',
    title: 'Kitchen Window',
    category: 'personal',
    tags: ['personal', 'print', 'domestic'],
    imageSrc: '/images/placeholders/personal-window.svg',
    alt: 'Illustrative personal domestic photograph near a kitchen window.',
    hook: 'A personal frame about ordinary light and what it remembers.',
    story:
      'Personal work on this site should not feel like leftovers from client sessions. It should hold its own emotional logic. This image stands in for photographs that can become prints, editorials, or simply a clearer statement of what Joshua is drawn toward.',
    orientation: 'vertical',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Smaller framed print or pair with another work',
    featured: true,
    printAvailable: true,
    serviceCTA: 'custom',
    productSlug: 'kitchen-window-print',
  },
  {
    slug: 'father-and-daughter',
    status: 'draft',
    title: 'Father and Daughter',
    category: 'legacy',
    tags: ['legacy', 'family', 'portrait'],
    imageSrc: '/images/placeholders/legacy-light.svg',
    alt: 'Illustrative legacy family portrait of a father and daughter seated together.',
    hook: 'A family image meant to be held onto, not rushed past.',
    story:
      'Legacy photography is often about people realizing time is moving in a way they cannot ignore anymore. The right replacement image here should feel steady, not staged. It should offer enough quiet that a family can live with it for years.',
    orientation: 'vertical',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Vertical framed print or archival album page',
    serviceCTA: 'legacy',
  },
  {
    slug: 'studio-stillness',
    status: 'draft',
    title: 'Studio Stillness',
    category: 'portrait',
    tags: ['portrait', 'artist', 'direct'],
    imageSrc: '/images/placeholders/portrait-session.svg',
    alt: 'Illustrative studio portrait with soft shadow and strong eye line.',
    hook: 'A portrait for people who want clarity more than polish.',
    story:
      'This type of session is built around a slower read. The finished photograph should feel composed but not airless. It belongs on the portraits page because it signals how simple lighting and direct posture can carry a lot without much styling.',
    orientation: 'vertical',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Standard portrait print or profile image',
    serviceCTA: 'portrait',
  },
  {
    slug: 'hallway-blue',
    status: 'draft',
    title: 'Hallway Blue',
    category: 'personal',
    tags: ['personal', 'print', 'quiet'],
    imageSrc: '/images/placeholders/fine-art-quiet.svg',
    alt: 'Illustrative quiet blue-toned hallway photograph.',
    hook: 'A quiet frame that leans into mood without turning decorative.',
    story:
      'The personal and print work should sit close to Joshua’s client work without feeling interchangeable. This image is meant for work that can carry a room on its own but still feel lived in. It can route to prints or licensing depending on interest.',
    orientation: 'square',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Square print or editorial license',
    serviceCTA: 'custom',
  },
  {
    slug: 'quiet-amp',
    status: 'draft',
    title: 'Quiet Amp',
    category: 'print',
    tags: ['print', 'music', 'still-life'],
    imageSrc: '/images/placeholders/fine-art-quiet.svg',
    alt: 'Illustrative fine-art still life built around an amplifier.',
    hook: 'An object study that carries the weight of a room after sound has stopped.',
    story:
      'Not every music-related frame needs a face in it. This image is for print buyers who respond to instruments, equipment, and the architecture of rehearsal spaces. It can route to external checkout or to a custom print question.',
    orientation: 'square',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Square print or office display',
    featured: true,
    printAvailable: true,
    serviceCTA: 'custom',
    productSlug: 'quiet-amp-print',
  },
  {
    slug: 'soft-jacket',
    status: 'draft',
    title: 'Soft Jacket',
    category: 'portrait',
    tags: ['portrait', 'editorial', 'musician'],
    imageSrc: '/images/placeholders/portrait-session.svg',
    alt: 'Illustrative portrait with a jacket, side light, and quiet expression.',
    hook: 'A portrait that feels edited but still human.',
    story:
      'This is the kind of image that can cross over between portrait clients and artists. The final version should feel useful for websites, press packets, and personal archives. It should stay grounded in the person rather than the styling around them.',
    orientation: 'vertical',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Vertical web crop or framed print',
    serviceCTA: 'portrait',
  },
  {
    slug: 'empty-chair-sunday',
    status: 'draft',
    title: 'Empty Chair, Sunday',
    category: 'legacy',
    tags: ['legacy', 'memory', 'print'],
    imageSrc: '/images/placeholders/hero-memory.svg',
    alt: 'Illustrative domestic memory photograph centered on an empty chair.',
    hook: 'A domestic image about absence, routine, and what remains in a room.',
    story:
      'This page stands in for photographs that can function both as memory work and as independent prints. The right replacement image should feel plainspoken and personal. It is the kind of work that can move between family meaning and public viewing without losing itself.',
    orientation: 'horizontal',
    year: '2026',
    location: '[Service Area]',
    medium: 'Digital photograph',
    bestFormat: 'Wide print above a desk or console',
    serviceCTA: 'legacy',
  },
  {
    slug: 'star-trails-over-trees',
    status: 'public',
    title: 'Star Trails Over Trees',
    category: 'print',
    tags: ['astrophotography', 'night-sky', 'star-trails', 'landscape'],
    imageSrc: '/images/star-trails-over-trees.jpg',
    alt: 'A long-exposure photograph showing circular star trails over silhouetted trees and a building.',
    hook: 'The slow, silent rotation of the night sky.',
    story: 'This long-exposure captures the apparent movement of stars across the sky, creating concentric circles of light. The foreground features silhouetted trees and the edge of a structure, grounding the celestial movement in a specific, quiet location. It is a study in time and celestial mechanics.',
    orientation: 'horizontal',
    medium: 'Digital photograph',
    bestFormat: 'Large wall print or gallery display',
    featured: true,
    printAvailable: true,
    serviceCTA: 'custom',
    productSlug: 'star-trails-over-trees-print',
    // Add productSlug and outbound links when this image is ready to sell.
  },
  {
    slug: 'city-street-perspective',
    status: 'public',
    title: 'City street perspective',
    category: 'personal',
    tags: ['urban', 'architecture', 'street-photography', 'manhattan', 'perspective'],
    imageSrc: '/images/city-street-perspective.jpg',
    alt: 'A view down a set of parallel train tracks in a city street, flanked by tall buildings.',
    hook: 'The geometry of the city, viewed from the tracks.',
    story: 'The tracks draw the eye deep into the frame, creating a strong sense of linear perspective. The surrounding architecture—a mix of modern and historical styles—frames the passage, suggesting movement and the passage of time. It is a quiet moment of urban geometry.',
    orientation: 'vertical',
    medium: 'Digital photograph',
    bestFormat: 'Gallery display',
    featured: true,
    printAvailable: true,
    serviceCTA: 'custom',
    productSlug: 'city-street-perspective-print',
    // Add productSlug and outbound links when this image is ready to sell.
  },
  {
    slug: 'albany-skyline-at-night',
    status: 'public',
    title: 'Albany Skyline at Night',
    category: 'print',
    tags: ['cityscape', 'night', 'skyline', 'urban', 'panorama', 'albany'],
    imageSrc: '/images/albany-skyline-at-night.jpg',
    alt: 'A panoramic view of Albany, Ny\'s skyline at night.',
    hook: 'The quiet geometry of the city of Albany after dark.',
    story: 'This panoramic view captures the scale and rhythm of the modern metropolis after sunset. The clustered lights and towering structures create a sense of both immense energy and quiet solitude. It is a study in urban geometry and the enduring presence of human endeavor.',
    orientation: 'horizontal',
    medium: 'Digital photograph',
    bestFormat: 'Large wall print or gallery display',
    featured: true,
    printAvailable: true,
    serviceCTA: 'custom',
    productSlug: 'albany-skyline-at-night-print',
    // Add productSlug and outbound links when this image is ready to sell.
  },
  {
    slug: 'city-skyline-at-night',
    status: 'public',
    title: 'City skyline at night',
    category: 'print',
    tags: ['skyline', 'city', 'night', 'urban', 'panorama'],
    imageSrc: '/images/city-skyline-at-night.jpg',
    alt: 'A panoramic view of a modern city skyline at night, featuring numerous illuminated skyscrapers.',
    hook: 'The quiet geometry of the city after dark.',
    story: 'This panoramic view captures the vast scale and quiet energy of the city at night. The illuminated skyscrapers stand as silent monuments to modern life. It is a study in light, shadow, and the enduring presence of the urban landscape.',
    orientation: 'horizontal',
    medium: 'Digital photograph',
    bestFormat: 'Large wall print or gallery display',
    featured: true,
    printAvailable: true,
    serviceCTA: 'custom',
    productSlug: 'city-skyline-at-night-print',
    // Add productSlug and outbound links when this image is ready to sell.
  },
];

export function isPublicImage(image: ImageItem) {
  return isPublicReadyImage(image);
}

export function getFeaturedImages(limit = 6) {
  return images.filter((image) => image.featured && isPublicImage(image)).slice(0, limit);
}

export function getGalleryImages(limit?: number) {
  const publicImages = images.filter(isPublicImage);

  if (typeof limit === 'number') {
    return publicImages.slice(0, Math.max(0, limit));
  }

  return publicImages;
}

export function getImagesByCategory(category: ImageItem['category'], limit?: number) {
  const matches = images.filter((image) => image.category === category && isPublicImage(image));
  return typeof limit === 'number' ? matches.slice(0, limit) : matches;
}

export function getImageBySlug(slug: string) {
  return images.find((image) => image.slug === slug);
}

export function getRelatedImages(currentImage: ImageItem, limit = 3) {
  return images
    .filter((image) => image.slug !== currentImage.slug && isPublicImage(image))
    .map((image) => {
      const sharedTags = image.tags.filter((tag) => currentImage.tags.includes(tag)).length;
      const categoryBoost = image.category === currentImage.category ? 2 : 0;
      return {
        image,
        score: sharedTags + categoryBoost,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.image);
}
