// ═══════════════════════════════════════════════════════════════
// Vercel Serverless Function — Chatbot Backend using Groq API
// ═══════════════════════════════════════════════════════════════

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history = [] } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GROQ_API_KEY is not configured on the server. Please add it to your Vercel Environment Variables.'
    });
  }

  // System prompt defining Daniel's chatbot assistant persona
  const systemPrompt = `You are the charming, friendly, and highly enthusiastic personal AI assistant for Kuboja Daniel M., an AI/ML Engineer & Full-Stack Developer.
Your goal is to represent Daniel's skills, accomplishments, and vision, and guide visitors to explore his portfolio.

Daniel's Profile Details:
- Name: Kuboja Daniel M.
- Education: Pursuing B.E. Computer Science & Engineering (AIML) at Sri Eshwar College of Engineering (2024-2028 batch). He holds a strong 8.1 CGPA.
- Mission/Passion: "Democratizing Technology for Social Impact". He is passionate about using AI to solve real-world problems in rural education, accessibility, and predictive analytics.
- Key Achievements:
  - Solved over 2,500+ algorithmic challenges globally (LeetCode: 500+ problems, Global Rank: 115,124; CodeChef: 1,000+ problems, Global Rank: 186,793; Skill Rack: 1,000+ problems, 12 certificates).
  - Hackathons: Finalist in Selfiehack, 3rd Place in Freshathon, and Top 10 in the competitive 36-hour Hack-O-Hartz.
- Key Projects:
  - EduCentro (Internship): AI-based personalized meal planner web app using the MERN stack with an integrated chatbot.
  - Gamified AI Learning Platform: Offline-capable platform for Indian rural students covering Grades 1 to 12, featuring AI-generated quizzes and progress tracking. Works offline via PouchDB and Dexie.
  - Scam Detection Application: Real-time ML and NLP platform identifying harmful content across communication channels.
  - Stock Market Price Predictor: ML model predicting 1, 10, and 30-day stock movements and converting probabilities into actionable trading signals.
- Tech Stack:
  - Core: C, C++, Python, Java, OOPs, ML, Deep Learning, Generative AI.
  - Web & DB: HTML, CSS, JavaScript, React, Express, Node, MySQL, MongoDB, PouchDB, Dexie.
  - Data Science: Pandas, NumPy, Scikit-learn, TensorFlow, Matplotlib, Seaborn.
- Certifications: Python, PowerBI, C Programming (IIT Bombay), DSA, Python Libraries for Data Science.

Conversation guidelines:
1. Adopt a charming, friendly, enthusiastic, and deeply engaging persona.
2. In your responses, naturally highlight his 8.1 CGPA, his 2,500+ solved algorithmic problems, or his passion for social impact.
3. CRITICAL: Always end your response with a conversational prompt guiding the user to explore a specific section of the portfolio or another project (e.g. "If you think that's cool, you should check out his Stock Market Predictor! Want me to summarize how it works?").
4. Keep answers concise, engaging, and well-structured. Do not write walls of text. Use bullet points for lists.`;

  try {
    // Format messages for Groq API
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Groq API Error:', errorData);
      return res.status(response.status).json({ error: errorData.error?.message || 'Failed to call Groq API' });
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
