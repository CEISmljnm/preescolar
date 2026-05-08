import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                historia: 'src/pages/historia.html',
                galeria: 'src/pages/galeria.html',
                inscripcion: 'src/pages/inscripcion.html',
                nosotros: 'src/pages/nosotros.html',
            },
        },
    },
});