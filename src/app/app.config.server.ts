import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateServerLoader } from './translate-server.loader';

// Factory function for our new server loader
export function translateServerLoaderFactory(): TranslateLoader {
  return new TranslateServerLoader();
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // This overrides the browser-based HttpLoader with our new server-based loader
    {
      provide: TranslateLoader,
      useFactory: translateServerLoaderFactory,
    },
  ],
};

// Merge the browser config with the server-specific overrides
export const config = mergeApplicationConfig(appConfig, serverConfig);
