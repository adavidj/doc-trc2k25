import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      title: 'UCAO-TECH',
      description: 'Documentation du projet TRC 2025 - Équipe UCAO-TECH Bénin',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/' }
        ],
        sidebar: [
          {
            text: 'Final',
            items: [
              {
                text: 'Phase de collecte',
                collapsed: false,
                items: [
                  { text: 'À propos du Rostmaster X3', link: '/markdown-examples#a-propos-du-rostmaster-x3' }
                ]
              },
              { text: 'Phase de tri', link: '/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/TekBot-Robotics-Challenge/2025-Team-UCAO-TECH-Docs' }
        ],
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante'
        },
        outline: {
          label: 'Sur cette page'
        },
        returnToTopLabel: 'Retour en haut',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Thème',
        lightModeSwitchLabel: 'Thème'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'UCAO-TECH',
      description: 'TRC 2025 Project Documentation - UCAO-TECH Benin Team',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' }
        ],
        sidebar: [
          {
            text: 'Final',
            items: [
              {
                text: 'Collection Phase',
                collapsed: false,
                items: [
                  { text: 'About the Rostmaster X3', link: '/en/markdown-examples#about-the-rostmaster-x3' }
                ]
              },
              { text: 'Sorting Phase', link: '/en/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/TekBot-Robotics-Challenge/2025-Team-UCAO-TECH-Docs' }
        ],
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchLabel: 'Theme'
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    }
  },
  markdown: {
    math: true
  }
})
