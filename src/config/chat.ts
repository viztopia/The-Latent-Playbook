/**
 * Chat Widget Configuration
 * 
 * This configuration controls the embedded chat widget that provides
 * RAG-powered AI assistance for The Latent Playbook.
 * 
 * Set `enabled: false` to completely disable the chat widget.
 */

export interface ChatConfig {
  /** Whether the chat widget is enabled */
  enabled: boolean;
  /** Backend API URL for the RAG service */
  apiUrl: string;
  /** Enable debug logging to console (API checks, connections, etc.) */
  debugLog: boolean;
  /** Header title displayed in the chat window */
  title: string;
  /** Subtitle below the title (empty string to hide) */
  subtitle: string;
  /** Welcome message shown when chat opens */
  welcomeMessage: string;
}

export const CHAT_CONFIG: ChatConfig = {
  // Toggle chat widget on/off
  enabled: true,

  // Backend API endpoint
  apiUrl: import.meta.env.PUBLIC_CHAT_API_URL || 'https://itp-ml.itp.tsoa.nyu.edu:1240',

  // Debug logging (set to true to see API connection logs in console)
  debugLog: true,

  // UI Configuration
  title: 'Playbook Assistant',
  subtitle: '',
  welcomeMessage: "Hello! I can help you find information from The Latent Playbook's knowledge base. What would you like to know?"
};
