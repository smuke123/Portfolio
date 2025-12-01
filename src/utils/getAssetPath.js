/**
 * Helper function to get the correct asset path
 * Works both in development and production (GitHub Pages)
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, BASE_URL will be '/Portfolio/'
  // In development, it will be '/'
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

