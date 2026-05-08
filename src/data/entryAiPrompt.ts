export const entryAiPrompt = {
  source: 'PromptForge local export',
  channel: 'stable',
  version: '2026-04-27',
  providerDefault: 'ollama',
  modelDefault: '',
  endpointDefault: 'http://localhost:11434',
  ollamaEndpointDefault: 'http://localhost:11434',
  ollamaModelPresets: [
    { label: 'Gemma 4 e4b (recommended)', value: 'gemma4:e4b', note: 'Balanced quality and speed. About 10 GB.' },
    { label: 'Gemma 4 e2b (lighter)', value: 'gemma4:e2b', note: 'Lower resource option. About 7-8 GB.' },
    { label: 'Gemma 4 26b (higher quality)', value: 'gemma4:26b', note: 'Higher quality, heavier runtime. About 18 GB.' },
    { label: 'Gemma 4 31b (max quality)', value: 'gemma4:31b', note: 'Best quality, largest runtime. About 20 GB.' },
    { label: 'Qwen 2.5 VL 7B (alternate)', value: 'qwen2.5vl:7b', note: 'Strong visual parsing, about 6 GB.' },
  ],
  promptForgeEndpointDefault: 'http://127.0.0.1:5000',
  promptForgeLaunchModels: [
    { label: 'Qwen 2.5 1.5B', value: 'qwen' },
    { label: 'GPT-OSS 20B', value: 'gpt20b' },
  ],
  template: `You are reviewing one photograph for joshuahoffman.studio, a print-first photography site for physical prints, real on-location astrophotography, portraits, musician images, restoration-style print work, personal work, and licensing inquiries.

Use the image itself as evidence. Do not invent the subject's identity, location, year, client names, storefront URLs, capture conditions, or print availability.

Return only valid JSON matching the requested schema.

Allowed imageCategory values: {{imageCategories}}.
Allowed orientation values: {{orientations}}.
Allowed serviceCTA values: {{serviceCtas}}.

Current form values:
{{currentValues}}

Image file context:
{{fileContext}}

Site voice examples:
- A musician portrait made after the room emptied out.
- A real night-sky photograph made around the place, the weather, and the timing.
- A physical print inquiry for buyers who need size, paper, or availability confirmed.

Avoid generic gallery or sales language such as "breathtaking", "mesmerizing", "stunning", "dramatic",
"perfect for", "capturing the", or "adding depth". Prefer concrete, restrained language that could sit
beside the site voice examples.

Suggest concise, usable entry-form values:
- title: 2 to 5 words, not gimmicky.
- tags: 3 to 6 lowercase tags.
- alt: direct screen-reader description, one sentence.
- hook: short card copy, one sentence.
- story: 2 to 4 sentences of context, grounded in the visible image.
- medium: usually "Digital photograph" unless the image clearly indicates otherwise.
- bestFormat: practical display or usage note.
- productShortDescription: only if the image clearly works as a print; otherwise empty.
- productFormats: only common size suggestions, and only when print suitability is clear.
- cautions: any uncertainty or fields a human should verify.`,
};
