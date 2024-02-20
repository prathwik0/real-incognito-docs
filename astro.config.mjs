import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'real-incognito',
            logo: {
                light: './src/assets/logo.png',
                dark: './src/assets/logo.png',
            },
            customCss: [
                './src/tailwind.css',
                './src/styles/katex.css',
                './src/styles/index.css',
            ],
            social: {
                rss: 'https://real-incognito.vercel.app/',
                github: 'https://github.com/prathwik0/real-incognito',
            },
            tableOfContents: {
                minHeadingLevel: 1,
                maxHeadingLevel: 4,
            },
            sidebar: [
                {
                    label: 'Home',
                    link: '/',
                },
                {
                    label: 'Our Approach',
                    autogenerate: {
                        directory: '/approach',
                    },
                },
                {
                    label: 'Research',
                    autogenerate: {
                        directory: '/research',
                    },
                },
                {
                    label: 'About EG',
                    link: '/about-eg',
                },
            ],
        }),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});
