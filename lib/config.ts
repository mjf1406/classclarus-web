const PRODUCT_NAME = "ClassClarus";

export const APP_URL = "https://app.classclarus.com";
/** @deprecated Use APP_URL */
export const WEBAPP_URL = APP_URL;

export const GITHUB_URL = "https://github.com/mjf1406/classclarus-app";
export const DOWNLOAD_URL = `${GITHUB_URL}/releases/latest`;
export const SELF_HOST_URL =
  "https://github.com/mjf1406/classclarus-app/blob/master/docs/SELF_HOSTING.md";
export const CHANGELOG_URL = "https://change-log.pages.dev/classclarus";
export const ROADMAP_URL = "https://change-log.pages.dev/classclarus/board";

function latestDownloadUrl(artifact: string): string {
  return `${GITHUB_URL}/releases/latest/download/${artifact}`;
}

export const DESKTOP_DOWNLOADS = {
  windows: latestDownloadUrl(`${PRODUCT_NAME}-Setup-Windows.exe`),
  mac: latestDownloadUrl(`${PRODUCT_NAME}-macOS.dmg`),
  ubuntu: latestDownloadUrl(`${PRODUCT_NAME}-Linux.AppImage`),
} as const;
