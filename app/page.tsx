import { routing } from "@/i18n/routing";

/**
 * Root index. With `output: "export"` there's no middleware to redirect "/",
 * so we ship a meta-refresh + JS fallback to the default locale.
 */
export default function RootRedirect() {
  const basePath = process.env.BASE_PATH ?? "";
  const target = `${basePath}/${routing.defaultLocale}/`;

  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta charSet="utf-8" />
        <title>French Tech Copenhagen</title>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={target} />
      </head>
      <body>
        <p>
          Redirecting to <a href={target}>French Tech Copenhagen</a>…
        </p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(target)});`,
          }}
        />
      </body>
    </html>
  );
}
