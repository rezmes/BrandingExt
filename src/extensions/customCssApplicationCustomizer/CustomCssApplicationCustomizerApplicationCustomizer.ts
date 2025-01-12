// import { override } from '@microsoft/decorators';
// import { Log } from '@microsoft/sp-core-library';
// import {
//   BaseApplicationCustomizer
// } from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

// import * as strings from 'CustomCssApplicationCustomizerApplicationCustomizerStrings';

// const LOG_SOURCE: string = 'CustomCssApplicationCustomizerApplicationCustomizer';

// /**
//  * If your command set uses the ClientSideComponentProperties JSON input,
//  * it will be deserialized into the BaseExtension.properties object.
//  * You can define an interface to describe it.
//  */
// export interface ICustomCssApplicationCustomizerApplicationCustomizerProperties {
//   // This is an example; replace with your own property
//   testMessage: string;
//   cssUrl: string; // URL to the custom CSS file
// }

// /** A Custom Action which can be run during execution of a Client Side Application */
// export default class CustomCssApplicationCustomizerApplicationCustomizer
//   extends BaseApplicationCustomizer<ICustomCssApplicationCustomizerApplicationCustomizerProperties> {

//   @override
//   // public onInit(): Promise<void> {
//   //   Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

//   //   let message: string = this.properties.testMessage;
//   //   if (!message) {
//   //     message = '(No properties were provided.)';
//   //   }

//   //   Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

//   //   return Promise.resolve();
//   // }
//   public onInit(): Promise<void> {
//     Log.info(LOG_SOURCE, `Initialized CustomCSSApplicationCustomizer`);

//     // Check if the CSS URL is provided
//     if (this.properties.cssUrl) {
//         // Inject the CSS file into the page
//         // const head: HTMLHeadElement = document.getElementsByTagName('head')[0] || document.documentElement;
//         const head: HTMLHeadElement = document.head || document.getElementsByTagName('head')[0];

//         const customStyle: HTMLLinkElement = document.createElement('link');
//         customStyle.rel = 'stylesheet';
//         customStyle.type = 'text/css';
//         customStyle.href = this.properties.cssUrl;

//         head.appendChild(customStyle);
//         Log.info(LOG_SOURCE, `Custom CSS injected: ${this.properties.cssUrl}`);
//     } else {
//         Log.warn(LOG_SOURCE, 'No CSS URL provided in properties.');
//     }

//     return Promise.resolve();
// }
// }
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';

const LOG_SOURCE: string = 'CustomCssApplicationCustomizerApplicationCustomizer';

export interface ICustomCssApplicationCustomizerApplicationCustomizerProperties {
  cssUrl: string; // URL to the custom CSS file
}

export default class CustomCssApplicationCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<ICustomCssApplicationCustomizerApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized CustomCSSApplicationCustomizer`);

    if (this.properties.cssUrl) {
      const head: HTMLHeadElement = document.head as HTMLHeadElement || document.getElementsByTagName('head')[0] as HTMLHeadElement;

      const customStyle: HTMLLinkElement = document.createElement('link');
      customStyle.rel = 'stylesheet';
      customStyle.type = 'text/css';
      customStyle.href = this.properties.cssUrl;

      head.appendChild(customStyle);
      Log.info(LOG_SOURCE, `Custom CSS injected: ${this.properties.cssUrl}`);
    } else {
      Log.warn(LOG_SOURCE, 'No CSS URL provided in properties.');
    }

    return Promise.resolve();
  }
}
