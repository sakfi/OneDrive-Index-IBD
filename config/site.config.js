/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'dark@sakfi.onmicrosoft.com',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/128.png',

  // Prefix for KV Storage
  kvPrefix: process.env.KV_PREFIX || '',

  // The name of your website. Present alongside your icon.
  title: "I N D E X B D",

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: '/Index',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'Inter',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'Fira Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    '<head><meta name="viewport" content="width=device-width"><title>I N D E X B D - ইনডেক্স বিডি</title><meta name="title" content="I N D E X B D - ইনডেক্স বিডি"><meta name="description" content="ইনডেক্স বিডি- বিনোদন হোক ঝামেলাহীন"><meta name="keywords" content="search, searchengine, filessearch, filessearchengine, BDH"><meta name="robots" content="noindex, nofollow"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="language" content="English"><meta name="author" content="INDEXBD"><meta property="og:title" content="I N D E X B D - ইনডেক্স বিডি"/><meta property="og:type" content="search engine"/><meta property="og:url" content="https://indexbd.xyz"/><meta property="og:image" content="https://i.imgur.com/58EPYPB.png"/><link rel="icon" href="ইনডেক্স বিডি- Index BD"></head><body><center><b>ইনডেক্স বিডি"তে আপনাকে স্বাগতম</b><br><a href="https://indexbd.xyz"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7JxotPchccIeJn4pdaSbtryr3Wr2JAl9-3xt0Xg6VI7PJb2ts8mcGrkkJaTe9WUT8BklChFv5Bu5xgTm39S_sALZZWvQIKtSKqY7Ahl1tmwNHyV0i2AylwLZgtxZ0ya93zBtL-C9RVpYN4679kWQZ-ww-VQ7YX8Qx8LZbTbvu-fltn79EXMEBDHno6Z4/s16000/indexbd.png" alt="I N D E X B D" border="0" height="50px" width="50%" style="margin-top: 0px;"></a><br><b>"বিনোদন হোক ঝামেলাহীন"</b><br><br> Made with ❤ by <a href="https://indexbd.xyz" target="_blank" rel="noopener noreferrer"> I N D E X B D</a>.<br><p font-size:8px">All Content is Indexed from Various Sites around the globe, proxied using Cloudflare Technology and "INDEXBD" doesn’t rip/pirate anything. Copyright owners/Representatives contact us if you think any of the "INDEXBD" files violate intellectual property rights . This is just an Index, much like how Google and Search Engine Works.</p>',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route'],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: 'mailto:indexbd@pm.me',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [   
    {
      name: 'Telegram',
      link: 'https://t.me/INDEXBDbot',
    },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
