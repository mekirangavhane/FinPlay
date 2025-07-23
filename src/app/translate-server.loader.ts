import { join } from 'path';
import { Observable, of } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';
import { readFileSync } from 'fs';

/**
 * A TranslateLoader for the server that reads translation files directly from the filesystem.
 */
export class TranslateServerLoader implements TranslateLoader {
  constructor(
    private prefix: string = 'src/assets/i18n/', // Path relative to the project root
    private suffix: string = '.json'
  ) {}

  public getTranslation(lang: string): Observable<any> {
    const assetsFolder = join(process.cwd(), this.prefix);
    const jsonData = JSON.parse(
      readFileSync(`${assetsFolder}/${lang}${this.suffix}`, 'utf8')
    );
    return of(jsonData);
  }
}
