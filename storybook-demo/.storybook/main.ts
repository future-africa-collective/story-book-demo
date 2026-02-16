import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    // Component-level stories (co-located with components)
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    // Page-level compositions and prototypes
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-onboarding",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
};

export default config;
