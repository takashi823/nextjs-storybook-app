import type { Preview } from "@storybook/react";
// CSSの設定を読み込むために設定
import "../src/app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
