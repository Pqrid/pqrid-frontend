import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/app-config.service';

@Injectable()
export class UtilityService {
  constructor(
    private configService: ConfigService
  ) { }

  /**
   * Translates given message code and title code and displays corresponding notification
   *
   * @param messageTranslationCode
   * @param type
   * @param titleTranslationCode
   */
  public displayNotification(
    messageTranslationCode: string,
    type: string = 'info',
    titleTranslationCode?: string
  ) {
    const message: string = messageTranslationCode
    let title: string = titleTranslationCode ? titleTranslationCode : '';

    switch (type) {
      case 'error':
        title = 'Error Notification';
        break;

      case 'success':
        title = 'Success Notification';
        break;

      case 'alert':
        title = 'Warning Notification';
        break;

      default:
        title = 'Info Notification';
        break;
    }
    console.error(title);
  }
}
