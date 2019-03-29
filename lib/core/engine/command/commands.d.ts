declare namespace commands {
  /** Navigate to a URL without measuring it. */
  function navigate(url: string): Promise<void>;

  /** Create your own error. */
  function error(text: string): void;

  /** Add text to an input field. */
  namespace addText {
    /** Add text to an element with Selenium sendKeys. Throws an error if the id is not found. */
    function byId(text: string, id: string): { error?: Promise<void> };

    /** Add text to an element with Selenium sendKeys. Throws an error if the xpath is not found. */
    function bySelector(text: string, xpath: string): { error?: Promise<void> };

    /** Add text to an element with Selenium sendKeys.T hrows an error if the selector is not found. */
    function byXpath(text: string, selector: string): { error?: Promise<void> };
  }

  /** Clear the browser cache. */
  namespace cache {
    /** Clear the browser cache. Will clear browser cache and cookies. */
    function clear(): Promise<any>;
    /** Clear the browser cache by keep cookies. Use it if you want to stay logged in. */
    function clearKeepCookies(): Promise<any>;
  }

  /** Click on a element. Use the ...Wait functions to wait on a to page finish loading. See https://www.sitespeed.io/documentation/sitespeed.io/browsers/#choose-when-to-end-your-test */
  namespace click {
    /** Click on element that is found by specific class name.
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName */
    function byClassName(className: string): { error?: Promise<any> };

    /** Click on element that is found by specific class name and wait for the new page to finish loading.*/
    function byClassNameAndWait(className: string): { error?: Promise<any> };

    /** Click on link located by the ID attribute. Uses document.getElementById(). */
    function byId(id: string): { error?: Promise<any> };

    /** Click on link located by the ID attribute. Uses document.getElementById() to find the element. And wait for the new page to finish loading. */
    function byIdAndWait(id: string): { error?: Promise<any> };

    /** Click on a link located by evaluating a JavaScript expression. The result of this expression must be an element or list of elements. */
    function byJs(js: string): { error?: Promise<any> };

    /** Click on a link located by evaluating a JavaScript expression. The result of this expression must be an element or list of elements. And wait for the new page to finish loading. */
    function byJsAndWait(js: string): { error?: Promise<any> };

    /** Click on link whose text matches the given string. */
    function byLinkText(text: string): { error?: Promise<any> };

    /** Click on link whose text matches the given string.  And wait for the new page to finish loading. */
    function byLinkTextAndWait(text: string): { error?: Promise<any> };

    /** Click on link whose text contains the given substring. */
    function byPartialLinkText(text: string): { error?: Promise<any> };

    /** Click on link whose text contains the given substring.  And wait for the new page to finish loading.. */
    function byPartialLinkTextAndWait(text: string): { error?: Promise<any> };

    /**  Click on link that matches a CSS selector.  */
    function bySelector(selector: string): { error?: Promise<any> };

    /**  Click on link that matches a CSS selector.  And wait for the new page to finish loading. */
    function bySelectorAndWait(selector: string): { error?: Promise<any> };

    /**  Click on link that matches a XPath selector.  */
    function byXpath(xpath: string): { error?: Promise<any> };
    /** Click on link that matches a XPath selector and wait for the new page to finish loading. */
    function byXpathAndWait(xpath: string): { error?: Promise<any> };
  }

  /** Run your own JavaScript  */
  namespace js {
    /**
     * Run and execute your own JavaScript. When the promise it is fulfilled it will return whatever you return in your JavaScript. */
    function run(js: string): { error?: Promise<any> };
    /**
     * Run and execute your own JavaScript and then wait for a pageCompleteCheck to end. Use this when you wanna navigate to a new page, using JavaScript and wait on the page to finish loading. */
    function runAndWait(js: string): { error?: Promise<void> };
  }

  /** Measure the performance of a page load */
  namespace measure {
    function collect(): { error?: Promise<void> };

    /**
     *  Start collecting metrics for a URL. If you supply a URL to this method, the browser will navigate to that URL.
     *  If you do not use an URL (start()) everything is prepared for a new page to measure except the browser do not
     *  navigate to a new URL. You can also add an alias for the URL. The promise object return represents when the URL has been navigated and finished loading according to the pageCompleteCheck (https://www.sitespeed.io/documentation/sitespeed.io/browsers/#choose-when-to-end-your-test) or when everything is setup for measuring a new URL (if no URL is supplied)
     * */
    function start(
      urlOrAlias?: string,
      optionalAlias?: string
    ): { error?: Promise<void> };

    /**  Stop measuring and collect all the metrics. Promise object represents wh all the metrics has been collected. */
    function stop(): { error?: Promise<void> };
  }

  /** Set values of HTML elements. */
  namespace set {
    /** Set innerHtml to an element using a specific CSS selector. */
    function innerHtml(
      html: string,
      selector: string
    ): { error?: Promise<void> };

    /**  Set innerHtml to an element using a id. */
    function innerHtmlById(html: string, id: string): { error?: Promise<void> };

    /** Set innerText to an element using a specific CSS selector. */
    function innerText(
      text: string,
      selector: string
    ): { error?: Promise<void> };

    /** Set innerText to an element using a id. */
    function innerTextById(text: string, id: string): { error?: Promise<void> };

    /**  Set value to an element using a specific CSS selector. */
    function value(value: string, selector: string): { error?: Promise<void> };

    /** Set value to an element using a id. */
    function valueById(value: string, id: string): { error?: Promise<void> };
  }

  namespace wait {
    /**  Wait for an element with id to appear for maxTime (ms). Promise object represents when the element is found or the time times out */
    function byId(id: string, maxTime: number): { error?: Promise<void> };

    /** Wait for x ms. Promise object represents when the time has timed out. */
    function byTime(ms: number): Promise<void>;

    /** Wait for an element with xpath to appear for maxTime. */
    function byXpath(xpath: string, maxTime: number): { error?: Promise<void> };
  }
  /** Set meta data for a script. */
  namespace meta {
    /** Set the title of a script. Text only. */
    function setTitle(text: string): void;
    /** Set the description on a script. Text or HTML. */
    function setDescription(html: string): void;
  }

  /** Use the Chrome DevTools Protocol. This only works for Chrome. See https://chromedevtools.github.io/devtools-protocol/ */
  namespace cdp {
    /** Send a command to the DevTools Protocol. */
    function send(command: string, args: object): { error?: Promise<any> };
    /** Send a command and get a response back from the DevToolsProtocol. */
    function sendAndGet(
      command: string,
      args: object
    ): { error?: Promise<object> };
  }
}
