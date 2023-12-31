//  import { buildLegacyTheme } from "sanity";

// const props = {
//   "--my-white": "#fff",
//   "--my-black": "#1a1a1a",
//   "--alcatraz-brand": "#99e000",
//   "--my-red": "#db4437",
//   "--my-yellow": "#f4b400",
//   "--my-green": "#0f9d58",
// };

// export const myTheme = buildLegacyTheme({
//   /* Base theme colors */
//   "--black": props["--my-black"],
//   "--white": props["--my-white"],
//   "--gray": "#666",
//   "--gray-base": "#666",
//   "--component-bg": props["--my-black"],
//   "--component-text-color": props["--my-white"],

//   /* Brand */
//   "--brand-primary": props["--alcatraz-brand"],
//   // Default button
//   "--default-button-color": "#666",
//   "--default-button-primary-color": props["--alcatraz-brand"],
//   "--default-button-success-color": props["--my-green"],
//   "--default-button-warning-color": props["--my-yellow"],
//   "--default-button-danger-color": props["--my-red"],
//   /* State */
//   "--state-info-color": props["--alcatraz-brand"],
//   "--state-success-color": props["--my-green"],
//   "--state-warning-color": props["--my-yellow"],
//   "--state-danger-color": props["--my-red"],
 
//   /* Navbar */
//   "--main-navigation-color": props["--my-black"],
//   "--main-navigation-color--inverted": props["--my-white"],
//   "--focus-color": props["--alcatraz-brand"],
// });


declare module 'https://themer.sanity.build/api/hues?*' {
  interface Hue
    extends Omit<import('@sanity/color').ColorHueConfig, 'title' | 'midPoint'> {
    midPoint: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
  }
  interface Hues {
    default: Hue
    transparent: Hue
    primary: Hue
    positive: Hue
    caution: Hue
    critical: Hue
  }
  export const hues: Hues
  type Theme = import('sanity').StudioTheme
  export function createTheme(_hues: Hues): Theme
  export const theme: Theme
}
