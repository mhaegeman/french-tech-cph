import messages from "../messages/en.json";

// next-intl v4 type augmentation: registers the message catalog shape so
// `useTranslations` / `getTranslations` namespaces and keys are type-checked
// against messages/en.json.
//
// `Locale` is intentionally left unregistered: Next.js delivers route params
// as `string`, and the locale layout already narrows/validates it via
// `hasLocale`, so registering a strict `Locale` union here would only force a
// redundant guard into every `generateMetadata`.
declare module "next-intl" {
  interface AppConfig {
    Messages: typeof messages;
  }
}
