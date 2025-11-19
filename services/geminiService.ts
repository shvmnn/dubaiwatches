import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not defined in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLuxuryPitch = async (domainName: string): Promise<string> => {
  const client = getClient();
  
  if (!client) {
    return "This premium domain represents a unique opportunity to capture the luxury watch market in Dubai, connecting high-net-worth individuals with exclusive timepieces.";
  }

  try {
    const prompt = `
      Write a sophisticated, persuasive, and high-end marketing paragraph (maximum 80 words) explaining why owning the domain name "${domainName}" is a strategic asset for a luxury watch retailer or investment firm in the UAE. 
      Focus on brand authority, SEO dominance, and the prestige associated with Dubai's luxury market. 
      Do not use hashtags. Tone: Exclusive, Professional, Visionary.
    `;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Experience the pinnacle of digital branding with this exclusive domain asset.";
  } catch (error) {
    console.error("Error generating pitch:", error);
    // Fallback text in case of API failure
    return "Establish immediate authority in the Middle East's most lucrative market. This domain is the ultimate digital storefront for premium horology.";
  }
};