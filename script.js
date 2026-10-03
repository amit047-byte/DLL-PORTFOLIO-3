// Amitabha Ghosh Portfolio - Minimalist & Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  const html = document.documentElement;

  function updateThemeUI(isDark) {
    if (isDark) {
      html.classList.add('dark');
      if (themeText) themeText.textContent = 'Light Mode';
    } else {
      html.classList.remove('dark');
      if (themeText) themeText.textContent = 'Dark Mode';
    }
  }

  const savedTheme = localStorage.getItem('theme');
  const isDarkInitial = savedTheme !== 'light';
  updateThemeUI(isDarkInitial);

  themeToggle?.addEventListener('click', () => {
    const isCurrentlyDark = html.classList.contains('dark');
    const newIsDark = !isCurrentlyDark;
    updateThemeUI(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  });

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  menuBtn?.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  });

  // 3. Copy Email with Toast
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText('amitabhghosh3481@gmail.com').then(() => {
      copyBtn.textContent = 'Copied!';
      toast.style.opacity = '1';
      toast.style.transform = 'translate(-50%, -10px)';
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 0)';
      }, 2000);
    });
  });

  // 4. Interactive Hover Effect on Background Dots
  window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  }, { passive: true });

  // 5. Botpress AI Assistant Integration
  const botBtn = document.getElementById('ai-bot-launcher-btn');
  const botIconChat = document.getElementById('bot-icon-chat');
  const botIconClose = document.getElementById('bot-icon-close');
  const botTooltip = document.getElementById('ai-bot-tooltip');
  let isBotOpen = false;

  const botpressConfig = {
    botId: "f5a14552-e933-446b-bc19-f604148eaa2b",
    configuration: {
      version: "v2",
      website: {},
      email: {},
      phone: {},
      termsOfService: {},
      privacyPolicy: {},
      feedbackEnabled: true,
      footer: "[⚡ by Botpress](https://botpress.com/?from=webchat)",
      allowFileUpload: true,
      soundEnabled: true,
      conversationHistory: true,
      homePageEnabled: true,
      welcomeHeading: "Hi there, how can we help?",
      welcomeSubtitle: "Tap a starting point or ask in your own words.",
      conversationStartersEnabled: false,
      conversationStarters: [],
      conversationStartersDisplayStyle: "cards",
      citationsEnabled: true,
      agentPresenceEnabled: true
    },
    clientId: "b4ad7f73-e419-42db-b8ce-7f36d5d58289"
  };

  function updateBotIcon(open) {
    isBotOpen = open;
    if (botIconChat && botIconClose) {
      if (open) {
        botIconChat.style.display = 'none';
        botIconClose.style.display = 'block';
        if (botTooltip) botTooltip.style.opacity = '0';
      } else {
        botIconChat.style.display = 'block';
        botIconClose.style.display = 'none';
        if (botTooltip) botTooltip.style.opacity = '1';
      }
    }
  }

  function toggleBot() {
    if (window.botpress) {
      if (!window.botpress.clientId && typeof window.botpress.init === 'function') {
        try {
          window.botpress.init(botpressConfig);
        } catch (e) {
          console.warn('Botpress init:', e);
        }
      }

      if (!isBotOpen) {
        if (typeof window.botpress.open === 'function') {
          window.botpress.open();
        } else if (typeof window.botpress.toggle === 'function') {
          window.botpress.toggle();
        }
        updateBotIcon(true);
      } else {
        if (typeof window.botpress.close === 'function') {
          window.botpress.close();
        } else if (typeof window.botpress.toggle === 'function') {
          window.botpress.toggle();
        }
        updateBotIcon(false);
      }
    } else {
      let attempts = 0;
      const retry = setInterval(() => {
        attempts++;
        if (window.botpress) {
          clearInterval(retry);
          if (!window.botpress.clientId && typeof window.botpress.init === 'function') {
            window.botpress.init(botpressConfig);
          }
          if (typeof window.botpress.open === 'function') {
            window.botpress.open();
          } else if (typeof window.botpress.toggle === 'function') {
            window.botpress.toggle();
          }
          updateBotIcon(true);
        } else if (attempts > 30) {
          clearInterval(retry);
        }
      }, 100);
    }
  }

  botBtn?.addEventListener('click', toggleBot);

  // Hook into native Botpress events
  function setupBotpressEvents() {
    if (window.botpress && typeof window.botpress.on === 'function') {
      window.botpress.on('webchat:opened', () => updateBotIcon(true));
      window.botpress.on('webchat:closed', () => updateBotIcon(false));
    }
  }

  setupBotpressEvents();
  window.addEventListener('load', setupBotpressEvents);
  if (window.botpress && typeof window.botpress.on === 'function') {
    window.botpress.on('webchat:ready', setupBotpressEvents);
  }
});
