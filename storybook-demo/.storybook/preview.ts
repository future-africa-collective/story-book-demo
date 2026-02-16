import type { Preview } from "@storybook/nextjs-vite";

// Import Tailwind CSS so all components are styled
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "button-name", enabled: true },
          { id: "image-alt", enabled: true },
        ],
      },
      test: "todo",
    },
  },
  tags: ["autodocs"],
};

export default preview;
