import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../packages/super-admin/src/**/*.mdx",
    "../packages/super-admin/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/super-admin/src/app/**/**/**/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/system-design/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {},
  },
  staticDirs: ["../packages/super-admin/public"],
};
export default config;
