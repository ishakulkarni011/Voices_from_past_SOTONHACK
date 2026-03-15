# Voices of the Past 🏛

> **Buildings argue.**

An AI-powered mobile app that lets you have real conversations with historical monuments — and watch them argue with each other.

Point your phone at any monument. It wakes up. It speaks. In your language. In its own voice. And if you're feeling bold, put it in a room with another monument and ask them to roast each other.

---

## What it does

- **Wake a monument** — upload a photo, use your camera, or drop a GPS pin anywhere on earth. Gemini Vision identifies the monument instantly.
- **Hear its story** — the monument speaks its own introduction in first person, voiced by ElevenLabs in 10 languages.
- **Ask it anything** — type your questions, get voice replies. The monument remembers what you've discussed.
- **Monument Battle** — pick two monuments and watch them debate, disagree, and roast each other. The Eiffel Tower vs the Colosseum. Zero chill.
- **Nearby suggestions** — the monument recommends its neighbours and introduces you to them personally.
- **Your collection** — every monument you've visited is saved. Your journey spans centuries.

---

## The unconventional connection

Every app connects humans to humans. We connected humans to stone. And then we connected the stone to each other. The Colosseum and the Taj Mahal have never had a conversation in 2,000 years of human history. They had one tonight.

---

## Tech stack

| Layer | Technology |
|---|---|
| Mobile | React Native (Expo) |
| Backend | Python (FastAPI) |
| Vision AI | Ollama (LLaVA) / Google Gemini |
| Language AI | Ollama (Llama 3.2) |
| Voice | ElevenLabs `eleven_multilingual_v2` |
| Database | MongoDB Atlas / Local JSON |
| Hosting | Render.com |

---

## Hackathon tracks

- ✅ **Unconventional Connection** — humans talking to monuments, monuments talking to each other
- ✅ **Best use of MongoDB** — conversation history, monument profiles, user collections
- ✅ **Best use of Google Gemini API** — vision identification + story generation
- ✅ **Best use of ElevenLabs** — multilingual voice synthesis with distinct monument personalities
- ✅ **Best use of Vultr** — cloud hosting and object storage
- ✅ **Hackiest Hack** — we made the Leaning Tower of Pisa insecure about its posture. Live. On stage.

---

## Getting started

### Prerequisites
- Node.js 20+
- Python 3.10+
- Ollama installed (`brew install ollama`)
- Expo Go on your phone

### Backend setup

```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # fill in your API keys
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

### Mobile setup

```bash
cd mobile
npm install
cp .env.example .env   # set EXPO_PUBLIC_API_URL
npx expo start --web   # web version
npx expo start         # scan QR with Expo Go
```

### Ollama models

```bash
ollama serve
ollama pull llava        # vision — monument identification
ollama pull llama3.2     # text — stories, conversation, battle
```

---

## Environment variables

### Backend `.env`

```env
GEMINI_API_KEY=your_key
ELEVENLABS_API_KEY=your_key
ELEVENLABS_VOICE_ANCIENT=voice_id
ELEVENLABS_VOICE_GRAND=voice_id
ELEVENLABS_VOICE_MYSTERIOUS=voice_id
MONGODB_URI=mongodb+srv://...
CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### Mobile `.env`

```env
EXPO_PUBLIC_API_URL=http://localhost:8000
```

---

## App screens

| Screen | Description |
|---|---|
| Language | Choose from 10 languages — monuments speak in yours |
| Identify | Upload photo · camera · GPS pin |
| Story | Monument's dramatic first-person introduction |
| Conversation | Text in → voice out |
| Battle | Two monuments debate and roast each other |
| Suggestions | Monuments introduce their neighbours |
| Collection | Your visited monuments across history |

---

## Voice types

Monuments are automatically assigned one of three voice personalities:

- **Ancient** — deep, gravelly, battle-hardened (Colosseum, Pyramids, Stonehenge)
- **Grand** — proud, dramatic, eloquent (Eiffel Tower, Big Ben, Burj Khalifa)
- **Mysterious** — soft, spiritual, eternal (Taj Mahal, Angkor Wat, Machu Picchu)

---

## The demo moment

```
User: "Roast each other"

Eiffel Tower: "Mon ami, you are a clock. I am art. People visit 
Paris to see me — they visit London because their flight was cheaper."

Big Ben: "I have kept time for 165 years. You were nearly torn down. 
At least I know my purpose."
```

---

## Built at SotonHack 2025
