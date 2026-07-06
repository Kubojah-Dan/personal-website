// ═══════════════════════════════════════════════════════════════
// AI Chatbot — Glassmorphic widget with mock responses
// ═══════════════════════════════════════════════════════════════

import { CHATBOT } from '../data/content.js';

export function initChatbot() {
  const toggle = document.getElementById('chatbot-toggle');
  const window_ = document.getElementById('chatbot-window');
  const messagesEl = document.getElementById('chatbot-messages');
  const inputEl = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');
  const suggestionsEl = document.getElementById('chatbot-suggestions');
  const ctaBtn = document.getElementById('chatbot-cta');

  if (!toggle || !window_ || !messagesEl || !inputEl) return;

  let isOpen = false;
  let hasGreeted = false;
  const chatHistory = [];

  // ── Toggle chatbot ──
  function toggleChat() {
    isOpen = !isOpen;
    toggle.classList.toggle('is-open', isOpen);
    window_.classList.toggle('is-open', isOpen);

    if (isOpen && !hasGreeted) {
      hasGreeted = true;
      setTimeout(() => {
        addBotMessage(CHATBOT.greeting);
        renderSuggestions();
      }, 500);
    }

    if (isOpen) {
      setTimeout(() => inputEl.focus(), 400);
    }
  }

  toggle.addEventListener('click', toggleChat);
  if (ctaBtn) ctaBtn.addEventListener('click', toggleChat);

  // ── Send message ──
  async function sendMessage(text) {
    if (!text.trim()) return;

    addUserMessage(text);
    inputEl.value = '';
    hideSuggestions();

    // Show typing indicator
    showTyping();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          history: chatHistory,
        }),
      });

      hideTyping();

      if (response.ok) {
        const data = await response.json();
        addBotMessage(data.reply);
        chatHistory.push({ sender: 'user', text: text });
        chatHistory.push({ sender: 'bot', text: data.reply });
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.warn('Chatbot API failed, falling back to mock response:', error);
      // Fallback response after a small delay to simulate typing
      hideTyping();
      const fallbackReply = generateResponse(text);
      addBotMessage(fallbackReply);
      chatHistory.push({ sender: 'user', text: text });
      chatHistory.push({ sender: 'bot', text: fallbackReply });
    }

    // Show new suggestions after response
    setTimeout(() => renderSuggestions(), 300);
  }

  sendBtn.addEventListener('click', () => sendMessage(inputEl.value));
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage(inputEl.value);
  });

  // ── Message rendering ──
  function addBotMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'chat-message bot';
    msg.innerHTML = formatMessage(text);
    messagesEl.appendChild(msg);
    scrollToBottom();
  }

  function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'chat-message user';
    msg.textContent = text;
    messagesEl.appendChild(msg);
    scrollToBottom();
  }

  function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.id = 'chat-typing';
    typing.innerHTML = `
      <span class="chat-typing-dot"></span>
      <span class="chat-typing-dot"></span>
      <span class="chat-typing-dot"></span>
    `;
    messagesEl.appendChild(typing);
    scrollToBottom();
  }

  function hideTyping() {
    const typing = document.getElementById('chat-typing');
    if (typing) typing.remove();
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  // ── Suggestions ──
  function renderSuggestions() {
    if (!suggestionsEl) return;
    suggestionsEl.innerHTML = CHATBOT.suggestions
      .map(
        (s) =>
          `<button class="chat-suggestion" data-cursor-hover>${s}</button>`
      )
      .join('');

    suggestionsEl.querySelectorAll('.chat-suggestion').forEach((btn) => {
      btn.addEventListener('click', () => sendMessage(btn.textContent));
    });
  }

  function hideSuggestions() {
    if (suggestionsEl) suggestionsEl.innerHTML = '';
  }

  // ── Response generation ──
  function generateResponse(input) {
    const lower = input.toLowerCase();

    if (lower.includes('education') || lower.includes('study') || lower.includes('college') || lower.includes('cgpa') || lower.includes('university')) {
      return CHATBOT.responses.education;
    }
    if (lower.includes('project') || lower.includes('work') || lower.includes('built') || lower.includes('build') || lower.includes('educentro') || lower.includes('scam') || lower.includes('stock') || lower.includes('gamif')) {
      return CHATBOT.responses.projects;
    }
    if (lower.includes('hackathon') || lower.includes('competition') || lower.includes('award') || lower.includes('achievement') || lower.includes('freshathon') || lower.includes('selfiehack')) {
      return CHATBOT.responses.hackathons;
    }
    if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack') || lower.includes('language') || lower.includes('framework') || lower.includes('tool')) {
      return CHATBOT.responses.skills;
    }
    if (lower.includes('code') || lower.includes('leetcode') || lower.includes('codechef') || lower.includes('algorithm') || lower.includes('problem') || lower.includes('competitive')) {
      return CHATBOT.responses.coding;
    }
    if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach') || lower.includes('hire') || lower.includes('connect')) {
      return CHATBOT.responses.contact;
    }
    if (lower.includes('impact') || lower.includes('social') || lower.includes('rural') || lower.includes('mission') || lower.includes('why') || lower.includes('passion') || lower.includes('democratiz')) {
      return CHATBOT.responses.impact;
    }
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('what')) {
      return CHATBOT.greeting;
    }

    return CHATBOT.responses.default;
  }

  // ── Format message (basic markdown-like) ──
  function formatMessage(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/•/g, '<br>•');
  }
}
