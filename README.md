# MEI Calculado

Site brasileiro, gratuito, rápido e estático com calculadoras e guias simples para Microempreendedor Individual (MEI).

Domínio publicado: https://meicalculado.com.br

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Export estático para Cloudflare Pages
- Sem banco, backend, API routes, Server Actions ou autenticação

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

Quando definida, a meta tag de verificação é inserida no layout global durante o build.

## AdSense

O site ainda não exibe anúncios reais. O componente `AdPlaceholder` permanece sem renderização visual até existir aprovação real do Google AdSense.

Atualize `public/ads.txt` depois da aprovação no AdSense, trocando `pub-XXXXXXXXXXXXXXXX` pelo Publisher ID real.

Exemplo:

```txt
google.com, pub-SEU_PUBLISHER_ID_REAL, DIRECT, f08c47fec0942fa0
```

O script real do AdSense só deve ser adicionado depois da aprovação. Quando chegar esse momento, inclua o script oficial fornecido pelo Google no layout apropriado, mantendo o projeto estático e sem criar backend, API routes ou Server Actions.

## Contato

O e-mail de contato já está definido no projeto e não deve ser alterado sem necessidade. A página `/contato` deve continuar exibindo o e-mail existente.

## Atualizar valores do MEI

Os valores usados pelas calculadoras ficam em `src/data/meiConfig.ts`.

Revise esse arquivo anualmente antes de publicar. Não há atualização automática, scraping ou acesso a APIs externas.

## Checklist antes de solicitar AdSense

- Home completa
- 3 ou 4 calculadoras funcionando
- Pelo menos 8 guias úteis
- Página Sobre
- Página Contato
- Política de Privacidade
- Termos de Uso
- `sitemap.xml`
- `robots.txt`
- `ads.txt`
- Domínio próprio funcionando
- Search Console configurado
- Sitemap enviado no Search Console
- Build passando
- Pasta `out` gerada

## Checklist antes de publicar

- Rodar `npm install`
- Rodar `npm run build`
- Confirmar que a pasta `out` foi gerada
- Revisar `src/data/meiConfig.ts`
- Atualizar `public/ads.txt` quando houver Publisher ID real
- Configurar Search Console, se desejado
- Testar as principais páginas no celular e desktop
