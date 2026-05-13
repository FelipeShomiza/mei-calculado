# MEI Calculado

Site brasileiro, gratuito, rápido e estático com calculadoras e guias simples para Microempreendedor Individual (MEI).

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Export estático para Cloudflare Pages
- Sem banco, backend, API routes, Server Actions ou autenticacao

## Instalar

```bash
npm install
```

## Rodar localmente

```bash
npm run dev
```

## Build estático

```bash
npm run build
```

O build deve gerar a pasta `out`.

## Cloudflare Pages

Use:

- Build command: `npm run build`
- Output directory: `out`

Depois, conecte o domínio `meicalculado.com.br` nas configurações de Custom Domains da Cloudflare Pages e ajuste o DNS conforme orientação da Cloudflare.

## Google Search Console

Configure a variável de ambiente:

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=seu_codigo
```

Quando definida, a meta tag de verificação é inserida no layout global.

## AdSense

O site ainda não exibe anúncios reais. Existe apenas o componente `AdPlaceholder`.

Atualize `public/ads.txt` depois da aprovação no AdSense, trocando `pub-XXXXXXXXXXXXXXXX` pelo Publisher ID real.

## Atualizar valores do MEI

Os valores usados pelas calculadoras ficam em `src/data/meiConfig.ts`.

Revise esse arquivo anualmente antes de publicar. Não há atualização automática, scraping ou acesso a APIs externas.

## Checklist antes de publicar

- Rodar `npm install`
- Rodar `npm run build`
- Confirmar que a pasta `out` foi gerada
- Revisar `src/data/meiConfig.ts`
- Atualizar `public/ads.txt` quando houver Publisher ID real
- Configurar Search Console, se desejado
- Testar as principais páginas no celular e desktop
