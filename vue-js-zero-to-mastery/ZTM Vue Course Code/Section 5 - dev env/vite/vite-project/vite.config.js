import { defineConfig } from "vite" // gives you intellisense
import eslint from "vite-plugin-eslint"

export default defineConfig({
    plugins: [eslint()]
})