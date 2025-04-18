/// <reference types="@league-of-foundry-developers/foundry-vtt-types" />

// Extend Foundry types as needed
declare global {
    namespace ClientSettings {
      interface Values {
        'my-system.difficultySetting': string;
      }
    }
  
    interface CONFIG {
      mySystem: {
        skills: Record<string, string>;
        attributes: Record<string, string>;
      };
    }
  }