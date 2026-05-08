import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                historia: resolve(__dirname, 'pages/historia.html'),
                galeria: resolve(__dirname, 'pages/galeria.html'),
                inscripcion: resolve(__dirname, 'pages/inscripcion.html'),
                nosotros: resolve(__dirname, 'pages/nosotros.html'),
            },
        },
    },
})