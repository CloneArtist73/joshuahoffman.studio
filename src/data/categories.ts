export const imageCategories = [
  { slug: 'portrait', label: 'Portrait' },
  { slug: 'legacy', label: 'Legacy' },
  { slug: 'musician', label: 'Musician' },
  { slug: 'print', label: 'Print' },
  { slug: 'personal', label: 'Personal' },
  { slug: 'astrophotography', label: 'Astrophotography' },
  { slug: 'panoramic', label: 'Panoramic' },
] as const;

export function getImageCategoryLabel(slug: string) {
  return imageCategories.find((category) => category.slug === slug)?.label ?? slug;
}
