import { defineConfig } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
    transformers: [transformerDirective(), transformerVariantGroup()],
    presets: [
        presetUno({
            dark: "media",
        }),
        presetIcons({
            extraProperties: {
                display: "inline-block",
                "vertical-align": "middle",
            },
        }),
        presetWebFonts({
            provider: "google",
            fonts: {
                sans: 'Vazirmatn'
            },
        }),
    ],
});
