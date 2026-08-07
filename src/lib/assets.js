/**
 * Optional-asset resolver.
 *
 * Several source images are still outstanding from the client (see
 * ASSET-REQUEST.md: the Dorada mark, the signature, the environmental
 * portrait). A bare `import` of a missing file is a hard build failure, so
 * images are resolved through a glob instead: drop the file into
 * src/assets/<dir>/ with the expected name and it appears on the next build,
 * with no code change. Until then the component renders its fallback.
 */
const modules = import.meta.glob('/src/assets/**/*.{webp,png,jpg,jpeg,avif,svg}', {
  eager: true,
  import: 'default',
});

/**
 * @param {string} path e.g. "books/escape-velocity.webp"
 * @returns {ImageMetadata | undefined}
 */
export function asset(path) {
  if (!path) return undefined;
  return /** @type {ImageMetadata | undefined} */ (modules[`/src/assets/${path}`]);
}

/** True when every named asset is present — lets a section hide itself cleanly. */
export function hasAssets(...paths) {
  return paths.every((p) => Boolean(asset(p)));
}
