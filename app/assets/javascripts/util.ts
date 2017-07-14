export class PageVisibility {

  // Page Visibility API
  // Source: https://github.com/Justin-Credible/Ionic-TypeScript-Starter/blob/master/src/Services/Compatibility.ts

  /**
   * Used to determine if the tab for this document is currently visible.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
   */
  public static isDocumentHidden(): boolean {

    var propertyName: string = null;

    if (typeof document.hidden !== "undefined") {
      // Opera 12.10 and Firefox 18 and later support
      propertyName = "hidden";
    }
    else if (typeof document["msHidden"] !== "undefined") {
      propertyName = "msHidden";
    }
    else if (typeof document["webkitHidden"] !== "undefined") {
      propertyName = "webkitHidden";
    }
    else {
      // If the API isn't available, we must assume the page is visible.
      return true;
    }

    return !!document[propertyName];
  }

  /**
   * Returns the name of the visibilitychange event.
   *
   * https://developer.mozilla.org/en-US/docs/Web/Events/visibilitychange
   */
  public static visibilityChangeEventName(): string {

    var propertyName: string = null;

    if (typeof document.hidden !== "undefined") {
      // Opera 12.10 and Firefox 18 and later support
      propertyName = "visibilitychange";
    }
    else if (typeof document["msHidden"] !== "undefined") {
      propertyName = "msvisibilitychange";
    }
    else if (typeof document["webkitHidden"] !== "undefined") {
      propertyName = "webkitvisibilitychange";
    }
    else {
      // Assume the current draft standard.
      propertyName = "visibilitychange";
    }

    return propertyName;
  }
}
