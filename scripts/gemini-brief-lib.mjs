const API_ROOT = "https://generativelanguage.googleapis.com/v1beta/models";
const DEFAULT_RESEARCH_MODEL = "gemini-3.5-flash-lite";
const DEFAULT_DRAFT_MODEL = "gemini-3.5-flash-lite";
const MAX_DRAFT_ATTEMPTS = 3;

const DISCLAIMER =
  "Independent technology analysis published by Dockfinity. Every release, " +
  "version, licence and figure carries the primary source it was read from.";

const string = (description) => ({ type: "string", description });

function itemSchema() {
  return {
    type: "object",
    additionalProperties: false,
    properties: {
      name: string("Display name."),
      kind: { type: "string", enum: ["tooling", "teardown", "credits", "pricing"] },
      version: string("Exact release version; tooling only."),
      releaseDate: { type: "string", format: "date" },
      licence: string("Licence read from the primary source; tooling only."),
      platform: string("Platform or runtime support exactly as stated."),
      repoUrl: string("Repository root URL."),
      releaseUrl: string("Exact GitHub /releases/tag/ URL; tooling only."),
      productUrl: string("Product or programme page; non-tooling only."),
      price: string("Complete public price ladder, omitted when not public."),
      priceUrl: string("Page carrying the complete price ladder."),
      what: string("What shipped and what it does."),
      whyDifferent: string("Why it differs and what changes for an evaluator."),
      isLead: { type: "boolean" },
      source: string('Exact format: "Source: NAME, D Mon YYYY - URL".'),
    },
    required: ["name", "kind", "what", "whyDifferent", "isLead", "source"],
  };
}

export function briefSchema(date) {
  return {
    type: "object",
    additionalProperties: false,
    properties: {
      date: { type: "string", enum: [date] },
      title: string("Short thesis headline."),
      summary: string("One or two sentences for meta tags and RSS."),
      thesis: string("Connecting thread, no more than 58 characters."),
      accentPhrase: string("Three to five words appearing exactly once in thesis."),
      sections: {
        type: "array",
        items: { type: "string", enum: ["TOOLING", "TEARDOWN", "CREDITS", "PRICING"] },
        minItems: 1,
        maxItems: 4,
      },
      items: { type: "array", items: itemSchema(), minItems: 2, maxItems: 3 },
      readThrough: string(
        "Two or three sentences on what changes for a team, 260 to 324 characters inclusive."
      ),
      social: {
        type: "object",
        additionalProperties: false,
        properties: {
          linkedin: string("120 to 180 words, no emojis."),
          instagram: string("Three to four lines."),
          x: string("At most 280 characters, no URL or bare domain."),
          hashtags: {
            type: "array",
            items: string("A hashtag beginning with # and containing no spaces."),
            minItems: 8,
            maxItems: 8,
          },
        },
        required: ["linkedin", "instagram", "x", "hashtags"],
      },
      sources: {
        type: "object",
        additionalProperties: false,
        properties: {
          attribution: string("Every primary source used, with dates and exact page URLs."),
          surveyDate: { type: "string", enum: [date] },
          disclaimer: { type: "string", enum: [DISCLAIMER] },
        },
        required: ["attribution", "surveyDate", "disclaimer"],
      },
    },
    required: [
      "date",
      "title",
      "summary",
      "thesis",
      "accentPhrase",
      "sections",
      "items",
      "readThrough",
      "social",
      "sources",
    ],
  };
}

export function parseResearchIssueTitle(title) {
  if (!title?.startsWith("research:")) {
    throw new Error('The issue title must begin with "research:".');
  }
  const date = title.slice("research:".length).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error("The research issue date must be YYYY-MM-DD.");
  }
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== date) {
    throw new Error("The research issue date must be a real YYYY-MM-DD date.");
  }
  return date;
}

export function buildResearchRequest({ date, specification, evidence }) {
  const prompt = `You are the evidence-gathering pass for the Dockfinity daily discovery brief dated ${date}.

Research from the primary GitHub release evidence collected immediately before this request. Follow the complete editorial specification below. Find two or three qualifying shipped items from the preceding seven days, including significant missed items that have not already been published.

For every candidate, open the exact pages needed to prove release status, date, version, licence, platform, availability, and the complete price ladder when a price exists. Reject announcements, future availability, inaccessible evidence, and facts that are only inferred. Return a concise research dossier, not a publishable article. Include the exact human-readable source URL beside every fact. Do not fabricate or reconstruct URLs. If fewer than two fully evidenced items exist, say so plainly; the run must fail rather than pad the brief.

PRIMARY RELEASE EVIDENCE
${evidence}

COMPLETE SPECIFICATION
${specification}`;

  return {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.1, maxOutputTokens: 12000 },
  };
}

export function buildDraftRequest({
  date,
  specification,
  research,
  publishedNames,
  correction,
}) {
  const published = publishedNames.length ? publishedNames.join("\n- ") : "(none)";
  const correctionBlock = correction
    ? `\n\nThe previous draft was rejected by the deterministic layout check: ${correction}\n` +
      "Regenerate the complete JSON and correct that defect."
    : "";
  const prompt = `Create the final Dockfinity website JSON for ${date} from the research dossier below.

Use only facts and exact URLs present in the dossier. Do not fill gaps from memory. Exclude anything already published unless the dossier proves a distinct new release. Produce exactly two or three items, exactly one lead, and obey every content, confidentiality, caption, and length rule in the complete specification. The thesis must be no more than 58 characters (38 to 56 is preferred), and the readThrough field must be two or three sentences and 260 to 324 characters inclusive so both fit the fixed slide. Optional item fields must be omitted when inapplicable; never emit null or an empty placeholder. The local validator and renderer are authoritative and will reject the run if anything is wrong.${correctionBlock}

ALREADY-PUBLISHED ITEM NAMES
- ${published}

RESEARCH DOSSIER
${research}

COMPLETE SPECIFICATION
${specification}`;

  return {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 12000,
      responseMimeType: "application/json",
      responseJsonSchema: briefSchema(date),
    },
  };
}

function assertDraftFits(brief) {
  const thesisLength = [...(brief?.thesis ?? "")].length;
  if (thesisLength < 1 || thesisLength > 58) {
    throw new Error(
      `thesis is ${thesisLength} characters; the fixed slide header requires 1 to 58.`
    );
  }

  const readThroughLength = [...(brief?.readThrough ?? "")].length;
  if (readThroughLength < 260 || readThroughLength > 324) {
    throw new Error(
      `readThrough is ${readThroughLength} characters; the fixed slide panel requires 260 to 324.`
    );
  }
}

function normalizeShortReadThrough(brief) {
  const original = brief?.readThrough ?? "";
  if ([...original].length >= 260) return brief;

  const stem = original.trim().replace(/[.!?]+$/u, "");
  const neutralClauses = [
    "; teams should validate it before adoption.",
    "; teams should test it in a reversible pilot before adoption.",
    "; teams should validate it against their own stack before adoption.",
    "; teams should evaluate it against their own stack, security controls and operating constraints before adoption.",
  ];

  for (const clause of neutralClauses) {
    const candidate = `${stem}${clause}`;
    const length = [...candidate].length;
    if (length >= 260 && length <= 324) {
      return { ...brief, readThrough: candidate };
    }
  }

  return brief;
}

export function extractResponseText(payload) {
  const blocked = payload?.promptFeedback?.blockReason;
  if (blocked) throw new Error(`Gemini blocked the request: ${blocked}.`);

  const text = payload?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text ?? "")
    .join("")
    .trim();
  if (!text) throw new Error("Gemini returned no text.");
  return text;
}

async function callGemini({ apiKey, model, body, fetchImpl }) {
  let response;
  try {
    response = await fetchImpl(`${API_ROOT}/${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    throw new Error(
      `Gemini ${model} request failed before a response: ${error.message ?? error}`
    );
  }
  const payload = await response.json();
  if (!response.ok) {
    const message = payload?.error?.message ?? `HTTP ${response.status}`;
    throw new Error(`Gemini ${model} request failed: ${message}`);
  }
  return extractResponseText(payload);
}

export async function generateBrief({
  apiKey,
  date,
  specification,
  publishedNames,
  evidence,
  fetchImpl = fetch,
  researchModel = DEFAULT_RESEARCH_MODEL,
  draftModel = DEFAULT_DRAFT_MODEL,
}) {
  if (!apiKey?.trim()) {
    throw new Error(
      "GEMINI_API_KEY is missing. Add a Google AI Studio Free Tier key as a GitHub Actions secret."
    );
  }

  const research = await callGemini({
    apiKey,
    model: researchModel,
    body: buildResearchRequest({ date, specification, evidence }),
    fetchImpl,
  });
  let correction;
  for (let attempt = 0; attempt < MAX_DRAFT_ATTEMPTS; attempt += 1) {
    const draft = await callGemini({
      apiKey,
      model: draftModel,
      body: buildDraftRequest({ date, specification, research, publishedNames, correction }),
      fetchImpl,
    });

    let brief;
    try {
      brief = normalizeShortReadThrough(JSON.parse(draft));
    } catch (error) {
      throw new Error(`Gemini returned invalid JSON: ${error.message}`);
    }

    try {
      assertDraftFits(brief);
      return brief;
    } catch (error) {
      if (attempt === MAX_DRAFT_ATTEMPTS - 1) throw error;
      correction = error.message;
    }
  }

  throw new Error("Gemini did not produce a layout-safe brief.");
}
