import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

/* 1º PASSO DO PROJETO é criar com VITE.
Substituto do Create React App que executa o plugin 
São tools para views e ele já monta a estrutura da pasta do projeto
Usar SEMPRE
Substituir 'template vue' por 'tempate react' sem typescript na hora de criar
Ele não baixa o node_modules. (2º passo) */
