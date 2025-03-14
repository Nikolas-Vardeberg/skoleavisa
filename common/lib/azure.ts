import { createAzure } from "@ai-sdk/azure";

export const azure = createAzure({
    apiKey: process.env.AZURE_API_KEY,
    resourceName: process.env.AZURE_RESOURCE_NAME,
    apiVersion: '2024-10-21'
  });
  