module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profiler = function (_React$Component) {
  _inherits(Profiler, _React$Component);

  function Profiler() {
    _classCallCheck(this, Profiler);

    return _possibleConstructorReturn(this, (Profiler.__proto__ || Object.getPrototypeOf(Profiler)).apply(this, arguments));
  }

  _createClass(Profiler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* eslint-disable */
      var Sfjs = function () {
        if ("classList" in document.documentElement) {
          var hasClass = function hasClass(el, cssClass) {
            return el.classList.contains(cssClass);
          };
          var removeClass = function removeClass(el, cssClass) {
            el.classList.remove(cssClass);
          };
          var addClass = function addClass(el, cssClass) {
            el.classList.add(cssClass);
          };
          var toggleClass = function toggleClass(el, cssClass) {
            el.classList.toggle(cssClass);
          };
        } else {
          var hasClass = function hasClass(el, cssClass) {
            return el.className.match(new RegExp("\\b" + cssClass + "\\b"));
          };
          var removeClass = function removeClass(el, cssClass) {
            el.className = el.className.replace(new RegExp("\\b" + cssClass + "\\b"), " ");
          };
          var addClass = function addClass(el, cssClass) {
            if (!hasClass(el, cssClass)) {
              el.className += " " + cssClass;
            }
          };
          var toggleClass = function toggleClass(el, cssClass) {
            hasClass(el, cssClass) ? removeClass(el, cssClass) : addClass(el, cssClass);
          };
        }
        var noop = function noop() {};
        var profilerStorageKey = "symfony/profiler/";
        var request = function request(url, onSuccess, onError, payload, options) {
          var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          options = options || {};
          options.maxTries = options.maxTries || 0;
          xhr.open(options.method || "GET", url, true);
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          xhr.onreadystatechange = function (state) {
            if (4 !== xhr.readyState) {
              return null;
            }
            if (xhr.status == 404 && options.maxTries > 1) {
              setTimeout(function () {
                options.maxTries--;
                request(url, onSuccess, onError, payload, options);
              }, 1000);
              return null;
            }
            if (200 === xhr.status) {
              (onSuccess || noop)(xhr);
            } else {
              (onError || noop)(xhr);
            }
          };
          xhr.send(payload || "");
        };
        var getPreference = function getPreference(name) {
          if (!window.localStorage) {
            return null;
          }
          return localStorage.getItem(profilerStorageKey + name);
        };
        var setPreference = function setPreference(name, value) {
          if (!window.localStorage) {
            return null;
          }
          localStorage.setItem(profilerStorageKey + name, value);
        };
        var requestStack = [];
        var extractHeaders = function extractHeaders(xhr, stackElement) {
          /* Here we avoid to call xhr.getResponseHeader in order to */ /* prevent polluting the console with CORS security errors */var allHeaders = xhr.getAllResponseHeaders();
          var ret;
          if (ret = allHeaders.match(/^x-debug-token:\s+(.*)$/im)) {
            stackElement.profile = ret[1];
          }
          if (ret = allHeaders.match(/^x-debug-token-link:\s+(.*)$/im)) {
            stackElement.profilerUrl = ret[1];
          }
          if (ret = allHeaders.match(/^Symfony-Debug-Toolbar-Replace:\s+(.*)$/im)) {
            stackElement.toolbarReplaceFinished = false;
            stackElement.toolbarReplace = "1" === ret[1];
          }
        };
        var successStreak = 4;
        var pendingRequests = 0;
        var renderAjaxRequests = function renderAjaxRequests() {
          var requestCounter = document.querySelector(".sf-toolbar-ajax-request-counter");
          if (!requestCounter) {
            return;
          }
          requestCounter.textContent = requestStack.length;
          var infoSpan = document.querySelector(".sf-toolbar-ajax-info");
          if (infoSpan) {
            infoSpan.textContent = requestStack.length + " AJAX request" + (requestStack.length !== 1 ? "s" : "");
          }
          var ajaxToolbarPanel = document.querySelector(".sf-toolbar-block-ajax");
          if (requestStack.length) {
            ajaxToolbarPanel.style.display = "block";
          } else {
            ajaxToolbarPanel.style.display = "none";
          }
          if (pendingRequests > 0) {
            addClass(ajaxToolbarPanel, "sf-ajax-request-loading");
          } else if (successStreak < 4) {
            addClass(ajaxToolbarPanel, "sf-toolbar-status-red");
            removeClass(ajaxToolbarPanel, "sf-ajax-request-loading");
          } else {
            removeClass(ajaxToolbarPanel, "sf-ajax-request-loading");
            removeClass(ajaxToolbarPanel, "sf-toolbar-status-red");
          }
        };
        var startAjaxRequest = function startAjaxRequest(index) {
          var tbody = document.querySelector(".sf-toolbar-ajax-request-list");
          if (!tbody) {
            return;
          }
          var nbOfAjaxRequest = tbody.rows.length;
          if (nbOfAjaxRequest >= 100) {
            tbody.deleteRow(0);
          }
          var request = requestStack[index];
          pendingRequests++;
          var row = document.createElement("tr");
          request.DOMNode = row;
          var requestNumberCell = document.createElement("td");
          requestNumberCell.textContent = index + 1;
          row.appendChild(requestNumberCell);
          var profilerCell = document.createElement("td");
          profilerCell.textContent = "n/a";
          row.appendChild(profilerCell);
          var methodCell = document.createElement("td");
          methodCell.textContent = request.method;
          row.appendChild(methodCell);
          var typeCell = document.createElement("td");
          typeCell.textContent = request.type;
          row.appendChild(typeCell);
          var statusCodeCell = document.createElement("td");
          var statusCode = document.createElement("span");
          statusCode.textContent = "n/a";
          statusCodeCell.appendChild(statusCode);
          row.appendChild(statusCodeCell);
          var pathCell = document.createElement("td");
          pathCell.className = "sf-ajax-request-url";
          if ("GET" === request.method) {
            var pathLink = document.createElement("a");
            pathLink.setAttribute("href", request.url);
            pathLink.textContent = request.url;
            pathCell.appendChild(pathLink);
          } else {
            pathCell.textContent = request.url;
          }
          pathCell.setAttribute("title", request.url);
          row.appendChild(pathCell);
          var durationCell = document.createElement("td");
          durationCell.className = "sf-ajax-request-duration";
          durationCell.textContent = "n/a";
          row.appendChild(durationCell);
          request.liveDurationHandle = setInterval(function () {
            durationCell.textContent = new Date() - request.start + "ms";
          }, 100);
          row.className = "sf-ajax-request sf-ajax-request-loading";
          tbody.insertBefore(row, null);
          var toolbarInfo = document.querySelector(".sf-toolbar-block-ajax .sf-toolbar-info");
          toolbarInfo.scrollTop = toolbarInfo.scrollHeight;
          renderAjaxRequests();
        };
        var finishAjaxRequest = function finishAjaxRequest(index) {
          var request = requestStack[index];
          clearInterval(request.liveDurationHandle);
          if (!request.DOMNode) {
            return;
          }
          if (request.toolbarReplace && !request.toolbarReplaceFinished && request.profile) {
            /* Flag as complete because finishAjaxRequest can be called multiple times. */request.toolbarReplaceFinished = true;
            /* Search up through the DOM to find the toolbar's container ID. */for (var elem = request.DOMNode; elem && elem !== document; elem = elem.parentNode) {
              if (elem.id.match(/^sfwdt/)) {
                Sfjs.loadToolbar(elem.id.replace(/^sfwdt/, ""), request.profile);
                break;
              }
            }
          }
          pendingRequests--;
          var row = request.DOMNode;
          /* Unpack the children from the row */var profilerCell = row.children[1];
          var methodCell = row.children[2];
          var statusCodeCell = row.children[4];
          var statusCodeElem = statusCodeCell.children[0];
          var durationCell = row.children[6];
          if (request.error) {
            row.className = "sf-ajax-request sf-ajax-request-error";
            methodCell.className = "sf-ajax-request-error";
            successStreak = 0;
          } else {
            row.className = "sf-ajax-request sf-ajax-request-ok";
            successStreak++;
          }
          if (request.statusCode) {
            if (request.statusCode < 300) {
              statusCodeElem.setAttribute("class", "sf-toolbar-status");
            } else if (request.statusCode < 400) {
              statusCodeElem.setAttribute("class", "sf-toolbar-status sf-toolbar-status-yellow");
            } else {
              statusCodeElem.setAttribute("class", "sf-toolbar-status sf-toolbar-status-red");
            }
            statusCodeElem.textContent = request.statusCode;
          } else {
            statusCodeElem.setAttribute("class", "sf-toolbar-status sf-toolbar-status-red");
          }
          if (request.duration) {
            durationCell.textContent = request.duration + "ms";
          }
          if (request.profilerUrl) {
            profilerCell.textContent = "";
            var profilerLink = document.createElement("a");
            profilerLink.setAttribute("href", request.statusCode < 400 ? request.profilerUrl : request.profilerUrl + "?panel=exception");
            profilerLink.textContent = request.profile;
            profilerCell.appendChild(profilerLink);
          }
          renderAjaxRequests();
        };
        var addEventListener;
        var el = document.createElement("div");
        if (!("addEventListener" in el)) {
          addEventListener = function addEventListener(element, eventName, callback) {
            element.attachEvent("on" + eventName, callback);
          };
        } else {
          addEventListener = function addEventListener(element, eventName, callback) {
            element.addEventListener(eventName, callback, false);
          };
        }
        if (window.fetch && window.fetch.polyfill === undefined) {
          var oldFetch = window.fetch;
          window.fetch = function () {
            var promise = oldFetch.apply(this, arguments);
            var url = arguments[0];
            var params = arguments[1];
            var paramType = Object.prototype.toString.call(arguments[0]);
            if (paramType === "[object Request]") {
              url = arguments[0].url;
              params = {
                method: arguments[0].method,
                credentials: arguments[0].credentials,
                headers: arguments[0].headers,
                mode: arguments[0].mode,
                redirect: arguments[0].redirect
              };
            } else {
              url = String(url);
            }
            if (!url.match(new RegExp("^/((index|app(_[\\w]+)?)\\.php/)?_wdt"))) {
              var method = "GET";
              if (params && params.method !== undefined) {
                method = params.method;
              }
              var stackElement = {
                error: false,
                url: url,
                method: method,
                type: "fetch",
                start: new Date()
              };
              var idx = requestStack.push(stackElement) - 1;
              promise.then(function (r) {
                stackElement.duration = new Date() - stackElement.start;
                stackElement.error = r.status < 200 || r.status >= 400;
                stackElement.statusCode = r.status;
                stackElement.profile = r.headers.get("x-debug-token");
                stackElement.profilerUrl = r.headers.get("x-debug-token-link");
                stackElement.toolbarReplaceFinished = false;
                stackElement.toolbarReplace = "1" === r.headers.get("Symfony-Debug-Toolbar-Replace");
                finishAjaxRequest(idx);
              }, function (e) {
                stackElement.error = true;
                finishAjaxRequest(idx);
              });
              startAjaxRequest(idx);
            }
            return promise;
          };
        }
        if (window.XMLHttpRequest && XMLHttpRequest.prototype.addEventListener) {
          var proxied = XMLHttpRequest.prototype.open;
          XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
            var self = this;
            /* prevent logging AJAX calls to static and inline files, like templates */var path = url;
            if (url.substr(0, 1) === "/") {
              if (0 === url.indexOf("")) {
                path = url.substr(0);
              }
            } else if (0 === url.indexOf("http://localhost:8000")) {
              path = url.substr(21);
            }
            if (!path.match(new RegExp("^/((index|app(_[\\w]+)?)\\.php/)?_wdt"))) {
              var stackElement = {
                error: false,
                url: url,
                method: method,
                type: "xhr",
                start: new Date()
              };
              var idx = requestStack.push(stackElement) - 1;
              this.addEventListener("readystatechange", function () {
                if (self.readyState == 4) {
                  stackElement.duration = new Date() - stackElement.start;
                  stackElement.error = self.status < 200 || self.status >= 400;
                  stackElement.statusCode = self.status;
                  extractHeaders(self, stackElement);
                  finishAjaxRequest(idx);
                }
              }, false);
              startAjaxRequest(idx);
            }
            proxied.apply(this, Array.prototype.slice.call(arguments));
          };
        }
        return {
          hasClass: hasClass,
          removeClass: removeClass,
          addClass: addClass,
          toggleClass: toggleClass,
          getPreference: getPreference,
          setPreference: setPreference,
          addEventListener: addEventListener,
          request: request,
          renderAjaxRequests: renderAjaxRequests,
          load: function load(selector, url, onSuccess, onError, options) {
            var el = document.getElementById(selector);
            if (el && el.getAttribute("data-sfurl") !== url) {
              request(url, function (xhr) {
                el.innerHTML = xhr.responseText;
                el.setAttribute("data-sfurl", url);
                removeClass(el, "loading");
                var pending = pendingRequests;
                for (var i = 0; i < requestStack.length; i++) {
                  startAjaxRequest(i);
                  if (requestStack[i].duration) {
                    finishAjaxRequest(i);
                  }
                }
                /* Revert the pending state in case there was a start called without a finish above. */pendingRequests = pending;
                (onSuccess || noop)(xhr, el);
              }, function (xhr) {
                (onError || noop)(xhr, el);
              }, "", options);
            }
            return this;
          },
          loadToolbar: function loadToolbar(token, newToken) {
            newToken = newToken || token;
            addEventListener(document.getElementById("sfToolbarHideButton-" + newToken), "click", function (event) {
              event.preventDefault();
              var p = this.parentNode;
              p.style.display = "none";
              (p.previousElementSibling || p.previousSibling).style.display = "none";
              document.getElementById("sfMiniToolbar-" + newToken).style.display = "block";
              setPreference("toolbar/displayState", "none");
            });
            addEventListener(document.getElementById("sfToolbarMiniToggler-" + newToken), "click", function (event) {
              event.preventDefault();
              var elem = this.parentNode;
              if (elem.style.display == "none") {
                document.getElementById("sfToolbarMainContent-" + newToken).style.display = "none";
                document.getElementById("sfToolbarClearer-" + newToken).style.display = "none";
                elem.style.display = "block";
              } else {
                document.getElementById("sfToolbarMainContent-" + newToken).style.display = "block";
                document.getElementById("sfToolbarClearer-" + newToken).style.display = "block";
                elem.style.display = "none";
              }
              setPreference("toolbar/displayState", "block");
            });
            if (getPreference("toolbar/displayState") == "none") {
              document.getElementById("sfToolbarMainContent-" + newToken).style.display = "none";
              document.getElementById("sfToolbarClearer-" + newToken).style.display = "none";
              document.getElementById("sfMiniToolbar-" + newToken).style.display = "block";
            } else {
              document.getElementById("sfToolbarMainContent-" + newToken).style.display = "block";
              document.getElementById("sfToolbarClearer-" + newToken).style.display = "block";
              document.getElementById("sfMiniToolbar-" + newToken).style.display = "none";
            }
            this.load("sfwdt" + token, "/_wdt/xxxxxx".replace(/xxxxxx/, newToken), function (xhr, el) {
              /* Evaluate in global scope scripts embedded inside the toolbar */var i,
                  scripts = [].slice.call(el.querySelectorAll("script"));
              for (i = 0; i < scripts.length; ++i) {
                eval.call({}, scripts[i].firstChild.nodeValue);
              }
              el.style.display = -1 !== xhr.responseText.indexOf("sf-toolbarreset") ? "block" : "none";
              if (el.style.display == "none") {
                return;
              }
              /* Handle toolbar-info position */var toolbarBlocks = [].slice.call(el.querySelectorAll(".sf-toolbar-block"));
              for (i = 0; i < toolbarBlocks.length; ++i) {
                toolbarBlocks[i].onmouseover = function () {
                  var toolbarInfo = this.querySelectorAll(".sf-toolbar-info")[0];
                  var pageWidth = document.body.clientWidth;
                  var elementWidth = toolbarInfo.offsetWidth;
                  var leftValue = elementWidth + this.offsetLeft - pageWidth;
                  var rightValue = elementWidth + (pageWidth - this.offsetLeft) - pageWidth;
                  /* Reset right and left value, useful on window resize */toolbarInfo.style.right = "";
                  toolbarInfo.style.left = "";
                  if (elementWidth > pageWidth) {
                    toolbarInfo.style.left = 0;
                  } else if (leftValue > 0 && rightValue > 0) {
                    toolbarInfo.style.right = rightValue * -1 + "px";
                  } else if (leftValue < 0) {
                    toolbarInfo.style.left = 0;
                  } else {
                    toolbarInfo.style.right = "0px";
                  }
                };
              }

              renderAjaxRequests();
              addEventListener(document.querySelector(".sf-toolbar-block-ajax"), "mouseenter", function (event) {
                var elem = document.querySelector(".sf-toolbar-block-ajax .sf-toolbar-info");
                elem.scrollTop = elem.scrollHeight;
              });
              addEventListener(document.querySelector(".sf-toolbar-block-ajax > .sf-toolbar-icon"), "click", function (event) {
                event.preventDefault();
                toggleClass(this.parentNode, "hover");
              });
              var dumpInfo = document.querySelector(".sf-toolbar-block-dump .sf-toolbar-info");
              if (null !== dumpInfo) {
                addEventListener(dumpInfo, "sfbeforedumpcollapse", function () {
                  dumpInfo.style.minHeight = dumpInfo.getBoundingClientRect().height + "px";
                });
                addEventListener(dumpInfo, "mouseleave", function () {
                  dumpInfo.style.minHeight = "";
                });
              }
            }, function (xhr) {
              if (xhr.status !== 0) {
                var sfwdt = document.getElementById("sfwdt" + token);
                sfwdt.innerHTML = '                                <div class="sf-toolbarreset">                                    <div class="sf-toolbar-icon"><svg width="26" height="28" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 26 28" enable-background="new 0 0 26 28" xml:space="preserve"><path fill="#FFFFFF" d="M13 0C5.8 0 0 5.8 0 13c0 7.2 5.8 13 13 13c7.2 0 13-5.8 13-13C26 5.8 20.2 0 13 0z M20 7.5 c-0.6 0-1-0.3-1-0.9c0-0.2 0-0.4 0.2-0.6c0.1-0.3 0.2-0.3 0.2-0.4c0-0.3-0.5-0.4-0.7-0.4c-2 0.1-2.5 2.7-2.9 4.8l-0.2 1.1 c1.1 0.2 1.9 0 2.4-0.3c0.6-0.4-0.2-0.8-0.1-1.3C18 9.2 18.4 9 18.7 8.9c0.5 0 0.8 0.5 0.8 1c0 0.8-1.1 2-3.3 1.9 c-0.3 0-0.5 0-0.7-0.1L15 14.1c-0.4 1.7-0.9 4.1-2.6 6.2c-1.5 1.8-3.1 2.1-3.8 2.1c-1.3 0-2.1-0.6-2.2-1.6c0-0.9 0.8-1.4 1.3-1.4 c0.7 0 1.2 0.5 1.2 1.1c0 0.5-0.2 0.6-0.4 0.7c-0.1 0.1-0.3 0.2-0.3 0.4c0 0.1 0.1 0.3 0.4 0.3c0.5 0 0.9-0.3 1.2-0.5 c1.3-1 1.7-2.9 2.4-6.2l0.1-0.8c0.2-1.1 0.5-2.3 0.8-3.5c-0.9-0.7-1.4-1.5-2.6-1.8c-0.8-0.2-1.3 0-1.7 0.4C8.4 10 8.6 10.7 9 11.1 l0.7 0.7c0.8 0.9 1.3 1.7 1.1 2.7c-0.3 1.6-2.1 2.8-4.3 2.1c-1.9-0.6-2.2-1.9-2-2.7c0.2-0.6 0.7-0.8 1.2-0.6 c0.5 0.2 0.7 0.8 0.6 1.3c0 0.1 0 0.1-0.1 0.3C6 15 5.9 15.2 5.9 15.3c-0.1 0.4 0.4 0.7 0.8 0.8c0.8 0.3 1.7-0.2 1.9-0.9 c0.2-0.6-0.2-1.1-0.4-1.2l-0.8-0.9c-0.4-0.4-1.2-1.5-0.8-2.8c0.2-0.5 0.5-1 0.9-1.4c1-0.7 2-0.8 3-0.6c1.3 0.4 1.9 1.2 2.8 1.9 c0.5-1.3 1.1-2.6 2-3.8c0.9-1 2-1.7 3.3-1.8C20 4.8 21 5.4 21 6.3C21 6.7 20.8 7.5 20 7.5z"/></svg></div>                                    An error occurred while loading the web debug toolbar. <a href="/_profiler/' + newToken + ">Open the web profiler.</a>                                </div>                            ";
                sfwdt.setAttribute("class", "sf-toolbar sf-error-toolbar");
              }
            }, { maxTries: 5 });
            return this;
          },
          toggle: function toggle(selector, elOn, elOff) {
            var tmp = elOn.style.display,
                el = document.getElementById(selector);
            elOn.style.display = elOff.style.display;
            elOff.style.display = tmp;
            if (el) {
              el.style.display = "none" === tmp ? "none" : "block";
            }
            return this;
          },
          createTabs: function createTabs() {
            var tabGroups = document.querySelectorAll(".sf-tabs:not([data-processed=true])");
            /* create the tab navigation for each group of tabs */for (var i = 0; i < tabGroups.length; i++) {
              var tabs = tabGroups[i].querySelectorAll(":scope > .tab");
              var tabNavigation = document.createElement("ul");
              tabNavigation.className = "tab-navigation";
              var selectedTabId = "tab-" + i + "-0";
              /* select the first tab by default */for (var j = 0; j < tabs.length; j++) {
                var tabId = "tab-" + i + "-" + j;
                var tabTitle = tabs[j].querySelector(".tab-title").innerHTML;
                var tabNavigationItem = document.createElement("li");
                tabNavigationItem.setAttribute("data-tab-id", tabId);
                if (hasClass(tabs[j], "active")) {
                  selectedTabId = tabId;
                }
                if (hasClass(tabs[j], "disabled")) {
                  addClass(tabNavigationItem, "disabled");
                }
                tabNavigationItem.innerHTML = tabTitle;
                tabNavigation.appendChild(tabNavigationItem);
                var tabContent = tabs[j].querySelector(".tab-content");
                tabContent.parentElement.setAttribute("id", tabId);
              }
              tabGroups[i].insertBefore(tabNavigation, tabGroups[i].firstChild);
              addClass(document.querySelector('[data-tab-id="' + selectedTabId + '"]'), "active");
            }
            /* display the active tab and add the 'click' event listeners */for (i = 0; i < tabGroups.length; i++) {
              tabNavigation = tabGroups[i].querySelectorAll(":scope > .tab-navigation li");
              for (j = 0; j < tabNavigation.length; j++) {
                tabId = tabNavigation[j].getAttribute("data-tab-id");
                document.getElementById(tabId).querySelector(".tab-title").className = "hidden";
                if (hasClass(tabNavigation[j], "active")) {
                  document.getElementById(tabId).className = "block";
                } else {
                  document.getElementById(tabId).className = "hidden";
                }
                tabNavigation[j].addEventListener("click", function (e) {
                  var activeTab = e.target || e.srcElement;
                  /* needed because when the tab contains HTML contents, user can click */ /* on any of those elements instead of their parent '<li>' element */while (activeTab.tagName.toLowerCase() !== "li") {
                    activeTab = activeTab.parentNode;
                  }
                  /* get the full list of tabs through the parent of the active tab element */var tabNavigation = activeTab.parentNode.children;
                  for (var k = 0; k < tabNavigation.length; k++) {
                    var tabId = tabNavigation[k].getAttribute("data-tab-id");
                    document.getElementById(tabId).className = "hidden";
                    removeClass(tabNavigation[k], "active");
                  }
                  addClass(activeTab, "active");
                  var activeTabId = activeTab.getAttribute("data-tab-id");
                  document.getElementById(activeTabId).className = "block";
                });
              }
              tabGroups[i].setAttribute("data-processed", "true");
            }
          },
          createToggles: function createToggles() {
            var toggles = document.querySelectorAll(".sf-toggle:not([data-processed=true])");
            for (var i = 0; i < toggles.length; i++) {
              var elementSelector = toggles[i].getAttribute("data-toggle-selector");
              var element = document.querySelector(elementSelector);
              addClass(element, "sf-toggle-content");
              if (toggles[i].hasAttribute("data-toggle-initial") && toggles[i].getAttribute("data-toggle-initial") == "display") {
                addClass(toggles[i], "sf-toggle-on");
                addClass(element, "sf-toggle-visible");
              } else {
                addClass(toggles[i], "sf-toggle-off");
                addClass(element, "sf-toggle-hidden");
              }
              addEventListener(toggles[i], "click", function (e) {
                e.preventDefault();
                if ("" !== window.getSelection().toString()) {
                  /* Don't do anything on text selection */return;
                }
                var toggle = e.target || e.srcElement;
                /* needed because when the toggle contains HTML contents, user can click */ /* on any of those elements instead of their parent '.sf-toggle' element */while (!hasClass(toggle, "sf-toggle")) {
                  toggle = toggle.parentNode;
                }
                var element = document.querySelector(toggle.getAttribute("data-toggle-selector"));
                toggleClass(toggle, "sf-toggle-on");
                toggleClass(toggle, "sf-toggle-off");
                toggleClass(element, "sf-toggle-hidden");
                toggleClass(element, "sf-toggle-visible");
                /* the toggle doesn't change its contents when clicking on it */if (!toggle.hasAttribute("data-toggle-alt-content")) {
                  return;
                }
                if (!toggle.hasAttribute("data-toggle-original-content")) {
                  toggle.setAttribute("data-toggle-original-content", toggle.innerHTML);
                }
                var currentContent = toggle.innerHTML;
                var originalContent = toggle.getAttribute("data-toggle-original-content");
                var altContent = toggle.getAttribute("data-toggle-alt-content");
                toggle.innerHTML = currentContent !== altContent ? altContent : originalContent;
              });
              /* Prevents from disallowing clicks on links inside toggles */var toggleLinks = toggles[i].querySelectorAll("a");
              for (var j = 0; j < toggleLinks.length; j++) {
                addEventListener(toggleLinks[j], "click", function (e) {
                  e.stopPropagation();
                });
              }
              toggles[i].setAttribute("data-processed", "true");
            }
          },
          createFilters: function createFilters() {
            document.querySelectorAll("[data-filters] [data-filter]").forEach(function (filter) {
              var filters = filter.closest("[data-filters]"),
                  type = "choice",
                  name = filter.dataset.filter,
                  ucName = name.charAt(0).toUpperCase() + name.slice(1),
                  list = document.createElement("ul"),
                  values = filters.dataset["filter" + ucName] || filters.querySelectorAll("[data-filter-" + name + "]"),
                  labels = {},
                  defaults = null,
                  indexed = {},
                  processed = {};
              if (typeof values === "string") {
                type = "level";
                labels = values.split(",");
                values = values.toLowerCase().split(",");
                defaults = values.length - 1;
              }
              addClass(list, "filter-list");
              addClass(list, "filter-list-" + type);
              values.forEach(function (value, i) {
                if (value instanceof HTMLElement) {
                  value = value.dataset["filter" + ucName];
                }
                if (value in processed) {
                  return;
                }
                var option = document.createElement("li"),
                    label = i in labels ? labels[i] : value,
                    active = false,
                    matches;
                if ("" === label) {
                  option.innerHTML = "<em>(none)</em>";
                } else {
                  option.innerText = label;
                }
                option.dataset.filter = value;
                option.setAttribute("title", 1 === (matches = filters.querySelectorAll("[data-filter-" + name + '="' + value + '"]').length) ? "Matches 1 row" : "Matches " + matches + " rows");
                indexed[value] = i;
                list.appendChild(option);
                addEventListener(option, "click", function () {
                  if ("choice" === type) {
                    filters.querySelectorAll("[data-filter-" + name + "]").forEach(function (row) {
                      if (option.dataset.filter === row.dataset["filter" + ucName]) {
                        toggleClass(row, "filter-hidden-" + name);
                      }
                    });
                    toggleClass(option, "active");
                  } else if ("level" === type) {
                    if (i === this.parentNode.querySelectorAll(".active").length - 1) {
                      return;
                    }
                    this.parentNode.querySelectorAll("li").forEach(function (currentOption, j) {
                      if (j <= i) {
                        addClass(currentOption, "active");
                        if (i === j) {
                          addClass(currentOption, "last-active");
                        } else {
                          removeClass(currentOption, "last-active");
                        }
                      } else {
                        removeClass(currentOption, "active");
                        removeClass(currentOption, "last-active");
                      }
                    });
                    filters.querySelectorAll("[data-filter-" + name + "]").forEach(function (row) {
                      if (i < indexed[row.dataset["filter" + ucName]]) {
                        addClass(row, "filter-hidden-" + name);
                      } else {
                        removeClass(row, "filter-hidden-" + name);
                      }
                    });
                  }
                });
                if ("choice" === type) {
                  active = null === defaults || 0 <= defaults.indexOf(value);
                } else if ("level" === type) {
                  active = i <= defaults;
                  if (active && i === defaults) {
                    addClass(option, "last-active");
                  }
                }
                if (active) {
                  addClass(option, "active");
                } else {
                  filters.querySelectorAll("[data-filter-" + name + '="' + value + '"]').forEach(function (row) {
                    toggleClass(row, "filter-hidden-" + name);
                  });
                }
                processed[value] = true;
              });
              if (1 < list.childNodes.length) {
                filter.appendChild(list);
                filter.dataset.filtered = "";
              }
            });
          }
        };
      }();
      Sfjs.addEventListener(document, "DOMContentLoaded", function () {
        Sfjs.createTabs();
        Sfjs.createToggles();
      });
      Sfjs.loadToolbar("eeec88");
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          "div",
          {
            id: "sfwdteeec88",
            className: "sf-toolbar sf-display-none",
            "data-sfurl": "/_wdt/eeec88",
            style: { display: "block" }
          },
          _react2.default.createElement(
            "div",
            {
              id: "sfMiniToolbar-eeec88",
              className: "sf-minitoolbar",
              "data-no-turbolink": "",
              style: { display: "none" }
            },
            _react2.default.createElement(
              "a",
              {
                href: "#",
                title: "Show Symfony toolbar",
                tabIndex: "-1",
                id: "sfToolbarMiniToggler-eeec88",
                accessKey: "D"
              },
              _react2.default.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24"
                },
                _react2.default.createElement("path", {
                  fill: "#AAA",
                  d: "M12 .9C5.8.9.9 5.8.9 12a11 11 0 1 0 22.2 0A11 11 0 0 0 12 .9zm6.5 6c-.6 0-.9-.3-.9-.8 0-.2 0-.4.2-.6l.2-.4c0-.3-.5-.4-.6-.4-1.8.1-2.3 2.5-2.7 4.4l-.2 1c1 .2 1.8 0 2.2-.3.6-.4-.2-.7-.1-1.2.1-.3.5-.5.7-.6.5 0 .7.5.7.9 0 .7-1 1.8-3 1.8l-.6-.1-.6 2.4c-.4 1.6-.8 3.8-2.4 5.7-1.4 1.7-2.9 1.9-3.5 1.9-1.2 0-1.9-.6-2-1.5 0-.8.7-1.3 1.2-1.3.6 0 1.1.5 1.1 1s-.2.6-.4.6c-.1.1-.3.2-.3.4 0 .1.1.3.4.3.5 0 .8-.3 1.1-.5 1.2-.9 1.6-2.7 2.2-5.7l.1-.7.7-3.2c-.8-.6-1.3-1.4-2.4-1.7-.6-.1-1.1.1-1.5.5-.4.5-.2 1.1.2 1.5l.7.6c.7.8 1.2 1.6 1 2.5-.3 1.5-2 2.6-4 1.9-1.8-.6-2-1.8-1.8-2.5.2-.6.6-.7 1.1-.6.5.2.6.7.6 1.2l-.1.3c-.2.1-.3.3-.3.4-.1.4.4.6.7.7.7.3 1.6-.2 1.8-.8a1 1 0 0 0-.4-1.1l-.7-.8c-.4-.4-1.1-1.4-.7-2.6.1-.5.4-.9.7-1.3a4 4 0 0 1 2.8-.6c1.2.4 1.8 1.1 2.6 1.8.5-1.2 1-2.4 1.8-3.5.9-.9 1.9-1.6 3.1-1.7 1.3.2 2.2.7 2.2 1.6 0 .4-.2 1.1-.9 1.1z"
                })
              )
            )
          ),
          _react2.default.createElement("div", {
            id: "sfToolbarClearer-eeec88",
            className: "sf-toolbar-clearer",
            style: { display: "block" }
          }),
          _react2.default.createElement(
            "div",
            {
              id: "sfToolbarMainContent-eeec88",
              className: "sf-toolbarreset clear-fix",
              "data-no-turbolink": "",
              style: { display: "block" }
            },
            _react2.default.createElement(
              "div",
              { className: "sf-toolbar-block sf-toolbar-block-request sf-toolbar-status-normal " },
              _react2.default.createElement(
                "a",
                { href: "/_profiler" },
                " ",
                _react2.default.createElement(
                  "div",
                  { className: "sf-toolbar-icon" },
                  " ",
                  _react2.default.createElement(
                    "span",
                    { className: "sf-toolbar-status sf-toolbar-status-green" },
                    "200"
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "sf-toolbar-label" },
                    " @"
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "sf-toolbar-value sf-toolbar-info-piece-additional" },
                    "SPA profiler"
                  )
                )
              ),
              " ",
              _react2.default.createElement(
                "div",
                { className: "sf-toolbar-info" },
                " ",
                _react2.default.createElement(
                  "div",
                  { className: "sf-toolbar-info-group" },
                  _react2.default.createElement(
                    "div",
                    { className: "sf-toolbar-info-piece" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "HTTP status"
                    ),
                    _react2.default.createElement(
                      "span",
                      null,
                      "200 OK"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sf-toolbar-info-piece" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "Controller"
                    ),
                    _react2.default.createElement(
                      "span",
                      null,
                      " ",
                      _react2.default.createElement(
                        "a",
                        {
                          href: "/_profiler",
                          title: "App\\Controller\\FakeController"
                        },
                        "FakeController :: fakeAction"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sf-toolbar-info-piece" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "Route name"
                    ),
                    _react2.default.createElement(
                      "span",
                      null,
                      "~"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sf-toolbar-info-piece" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "Has session"
                    ),
                    _react2.default.createElement(
                      "span",
                      null,
                      "no"
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              {
                className: "sf-toolbar-block sf-toolbar-block-ajax sf-toolbar-status-normal",
                style: { display: "none" }
              },
              _react2.default.createElement(
                "div",
                { className: "sf-toolbar-icon" },
                " ",
                _react2.default.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                  },
                  _react2.default.createElement("path", {
                    fill: "#AAA",
                    d: "M9.8 18L6 22.4c-.3.3-.8.4-1.1 0L1 18c-.4-.5-.1-1 .5-1H3V6.4C3 3.8 5.5 2 8.2 2h3.9c1.1 0 2 .9 2 2s-.9 2-2 2H8.2C7.7 6 7 6 7 6.4V17h2.2c.6 0 1 .5.6 1zM23 6l-3.8-4.5a.8.8 0 0 0-1.1 0L14.2 6c-.4.5-.1 1 .5 1H17v10.6c0 .4-.7.4-1.2.4h-3.9c-1.1 0-2 .9-2 2s.9 2 2 2h3.9c2.6 0 5.2-1.8 5.2-4.4V7h1.5c.6 0 .9-.5.5-1z"
                  })
                ),
                _react2.default.createElement(
                  "span",
                  { className: "sf-toolbar-value sf-toolbar-ajax-request-counter" },
                  "0"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "sf-toolbar-info" },
                " ",
                _react2.default.createElement(
                  "div",
                  { className: "sf-toolbar-info-piece" },
                  _react2.default.createElement(
                    "b",
                    { className: "sf-toolbar-ajax-info" },
                    "0 AJAX requests"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "sf-toolbar-info-piece" },
                  _react2.default.createElement(
                    "table",
                    { className: "sf-toolbar-ajax-requests" },
                    _react2.default.createElement(
                      "thead",
                      null,
                      _react2.default.createElement(
                        "tr",
                        null,
                        _react2.default.createElement(
                          "th",
                          null,
                          "#"
                        ),
                        _react2.default.createElement(
                          "th",
                          null,
                          "Profile"
                        ),
                        _react2.default.createElement(
                          "th",
                          null,
                          "Method"
                        ),
                        _react2.default.createElement(
                          "th",
                          null,
                          "Type"
                        ),
                        _react2.default.createElement(
                          "th",
                          null,
                          "Status"
                        ),
                        _react2.default.createElement(
                          "th",
                          null,
                          "URL"
                        ),
                        _react2.default.createElement(
                          "th",
                          null,
                          "Time"
                        )
                      )
                    ),
                    _react2.default.createElement("tbody", { className: "sf-toolbar-ajax-request-list" })
                  )
                )
              )
            ),
            _react2.default.createElement(
              "a",
              {
                className: "hide-button",
                id: "sfToolbarHideButton-eeec88",
                title: "Close Toolbar",
                tabIndex: "-1",
                accessKey: "D"
              },
              _react2.default.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24"
                },
                _react2.default.createElement("path", {
                  fill: "#AAA",
                  d: "M21.1 18.3c.8.8.8 2 0 2.8-.4.4-.9.6-1.4.6s-1-.2-1.4-.6L12 14.8l-6.3 6.3c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6a2 2 0 0 1 0-2.8L9.2 12 2.9 5.7a2 2 0 0 1 0-2.8 2 2 0 0 1 2.8 0L12 9.2l6.3-6.3a2 2 0 0 1 2.8 0c.8.8.8 2 0 2.8L14.8 12l6.3 6.3z"
                })
              )
            )
          )
        ),
        _react2.default.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: "\n        .sf-minitoolbar {\n          background-color: #222;\n          border-top-left-radius: 4px;\n          bottom: 0;\n          box-sizing: border-box;\n          display: none;\n          height: 36px;\n          padding: 6px;\n          position: fixed;\n          right: 0;\n          z-index: 99999;\n        }\n        .sf-minitoolbar a {\n          display: block;\n        }\n        .sf-minitoolbar svg,\n        .sf-minitoolbar img {\n          max-height: 24px;\n          max-width: 24px;\n          display: inline;\n        }\n        .sf-toolbar-clearer {\n          clear: both;\n          height: 36px;\n        }\n        .sf-display-none {\n          display: none;\n        }\n        .sf-toolbarreset * {\n          box-sizing: content-box;\n          vertical-align: baseline;\n          letter-spacing: normal;\n          width: auto;\n        }\n        .sf-toolbarreset {\n          background-color: #222;\n          bottom: 0;\n          box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);\n          color: #eee;\n          font: 11px Arial, sans-serif;\n          left: 0;\n          margin: 0;\n          padding: 0 36px 0 0;\n          position: fixed;\n          right: 0;\n          text-align: left;\n          text-transform: none;\n          z-index: 99999;\n          direction: ltr; /* neutralize the aliasing defined by external CSS styles */\n          -webkit-font-smoothing: subpixel-antialiased;\n          -moz-osx-font-smoothing: auto;\n        }\n        .sf-toolbarreset abbr {\n          border: dashed #777;\n          border-width: 0 0 1px;\n        }\n        .sf-toolbarreset svg,\n        .sf-toolbarreset img {\n          height: 20px;\n          width: 20px;\n          display: inline-block;\n        }\n        .sf-toolbarreset .hide-button {\n          background: #444;\n          display: block;\n          position: absolute;\n          top: 0;\n          right: 0;\n          width: 36px;\n          height: 36px;\n          cursor: pointer;\n          text-align: center;\n        }\n        .sf-toolbarreset .hide-button svg {\n          max-height: 18px;\n          margin-top: 10px;\n        }\n        .sf-toolbar-block {\n          cursor: default;\n          display: block;\n          float: left;\n          height: 36px;\n          margin-right: 0;\n          white-space: nowrap;\n          max-width: 15%;\n        }\n        .sf-toolbar-block > a,\n        .sf-toolbar-block > a:hover {\n          display: block;\n          text-decoration: none;\n          color: inherit;\n        }\n        .sf-toolbar-block span {\n          display: inline-block;\n        }\n        .sf-toolbar-block .sf-toolbar-value {\n          color: #f5f5f5;\n          font-size: 13px;\n          line-height: 36px;\n          padding: 0;\n        }\n        .sf-toolbar-block .sf-toolbar-label,\n        .sf-toolbar-block .sf-toolbar-class-separator {\n          color: #aaa;\n          font-size: 12px;\n        }\n        .sf-toolbar-block .sf-toolbar-info {\n          border-collapse: collapse;\n          display: table;\n          z-index: 100000;\n        }\n        .sf-toolbar-block hr {\n          border-top: 1px solid #777;\n          margin: 4px 0;\n          padding-top: 4px;\n        }\n        .sf-toolbar-block .sf-toolbar-info-piece {\n          /* this 'border-bottom' trick is needed because 'margin-bottom' doesn't work for table rows */\n          border-bottom: solid transparent 3px;\n          display: table-row;\n        }\n        .sf-toolbar-block .sf-toolbar-info-piece-additional,\n        .sf-toolbar-block .sf-toolbar-info-piece-additional-detail {\n          display: none;\n        }\n        .sf-toolbar-block .sf-toolbar-info-group {\n          margin-bottom: 4px;\n          padding-bottom: 2px;\n          border-bottom: 1px solid #333333;\n        }\n        .sf-toolbar-block .sf-toolbar-info-group:last-child {\n          margin-bottom: 0;\n          padding-bottom: 0;\n          border-bottom: none;\n        }\n        .sf-toolbar-block .sf-toolbar-info-piece .sf-toolbar-status {\n          padding: 2px 5px;\n          margin-bottom: 0;\n        }\n        .sf-toolbar-block\n          .sf-toolbar-info-piece\n          .sf-toolbar-status\n          + .sf-toolbar-status {\n          margin-left: 4px;\n        }\n        .sf-toolbar-block .sf-toolbar-info-piece:last-child {\n          margin-bottom: 0;\n        }\n        div.sf-toolbar .sf-toolbar-block .sf-toolbar-info-piece a {\n          color: #99cdd8;\n          text-decoration: underline;\n        }\n        div.sf-toolbar .sf-toolbar-block a:hover {\n          text-decoration: none;\n        }\n        .sf-toolbar-block .sf-toolbar-info-piece b {\n          color: #aaa;\n          display: table-cell;\n          font-size: 11px;\n          padding: 4px 8px 4px 0;\n        }\n        .sf-toolbar-block:not(.sf-toolbar-block-dump) .sf-toolbar-info-piece span {\n          color: #f5f5f5;\n        }\n        .sf-toolbar-block .sf-toolbar-info-piece span {\n          font-size: 12px;\n        }\n        .sf-toolbar-block .sf-toolbar-info {\n          background-color: #444;\n          bottom: 36px;\n          color: #f5f5f5;\n          display: none;\n          padding: 9px 0;\n          position: absolute;\n        }\n        .sf-toolbar-block .sf-toolbar-info:empty {\n          visibility: hidden;\n        }\n        .sf-toolbar-block .sf-toolbar-status {\n          display: inline-block;\n          color: #fff;\n          background-color: #666;\n          padding: 3px 6px;\n          margin-bottom: 2px;\n          vertical-align: middle;\n          min-width: 15px;\n          min-height: 13px;\n          text-align: center;\n        }\n        .sf-toolbar-block .sf-toolbar-status-green {\n          background-color: #4f805d;\n        }\n        .sf-toolbar-block .sf-toolbar-status-red {\n          background-color: #b0413e;\n        }\n        .sf-toolbar-block .sf-toolbar-status-yellow {\n          background-color: #a46a1f;\n        }\n        .sf-toolbar-block.sf-toolbar-status-green {\n          background-color: #4f805d;\n          color: #fff;\n        }\n        .sf-toolbar-block.sf-toolbar-status-red {\n          background-color: #b0413e;\n          color: #fff;\n        }\n        .sf-toolbar-block.sf-toolbar-status-yellow {\n          background-color: #a46a1f;\n          color: #fff;\n        }\n        .sf-toolbar-block-request .sf-toolbar-status {\n          color: #fff;\n          display: inline-block;\n          font-size: 14px;\n          height: 36px;\n          line-height: 36px;\n          padding: 0 10px;\n        }\n        .sf-toolbar-block-request .sf-toolbar-info-piece a {\n          text-decoration: none;\n        }\n        .sf-toolbar-block-request .sf-toolbar-info-piece a:hover {\n          text-decoration: underline;\n        }\n        .sf-toolbar-block-request .sf-toolbar-redirection-status {\n          font-weight: normal;\n          padding: 2px 4px;\n          line-height: 18px;\n        }\n        .sf-toolbar-block-request\n          .sf-toolbar-info-piece\n          span.sf-toolbar-redirection-method {\n          font-size: 12px;\n          height: 17px;\n          line-height: 17px;\n          margin-right: 5px;\n        }\n        .sf-toolbar-block-ajax .sf-toolbar-icon {\n          cursor: pointer;\n        }\n        .sf-toolbar-status-green .sf-toolbar-label,\n        .sf-toolbar-status-yellow .sf-toolbar-label,\n        .sf-toolbar-status-red .sf-toolbar-label {\n          color: #fff;\n        }\n        .sf-toolbar-status-green svg path,\n        .sf-toolbar-status-green svg .sf-svg-path,\n        .sf-toolbar-status-red svg path,\n        .sf-toolbar-status-red svg .sf-svg-path,\n        .sf-toolbar-status-yellow svg path,\n        .sf-toolbar-status-yellow svg .sf-svg-path {\n          fill: #fff;\n        }\n        .sf-toolbar-block-config svg path,\n        .sf-toolbar-block-config svg .sf-svg-path {\n          fill: #fff;\n        }\n        .sf-toolbar-block .sf-toolbar-icon {\n          display: block;\n          height: 36px;\n          padding: 0 7px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .sf-toolbar-block-request .sf-toolbar-icon {\n          padding-left: 0;\n          padding-right: 0;\n        }\n        .sf-toolbar-block .sf-toolbar-icon img,\n        .sf-toolbar-block .sf-toolbar-icon svg {\n          border-width: 0;\n          position: relative;\n          top: 8px;\n          vertical-align: baseline;\n        }\n        .sf-toolbar-block .sf-toolbar-icon img + span,\n        .sf-toolbar-block .sf-toolbar-icon svg + span {\n          margin-left: 4px;\n        }\n        .sf-toolbar-block-config .sf-toolbar-icon .sf-toolbar-value {\n          margin-left: 4px;\n        }\n        .sf-toolbar-block:hover,\n        .sf-toolbar-block.hover {\n          position: relative;\n        }\n        .sf-toolbar-block:hover .sf-toolbar-icon,\n        .sf-toolbar-block.hover .sf-toolbar-icon {\n          background-color: #444;\n          position: relative;\n          z-index: 10002;\n        }\n        .sf-toolbar-block-ajax.hover .sf-toolbar-info {\n          z-index: 10001;\n        }\n        .sf-toolbar-block:hover .sf-toolbar-info,\n        .sf-toolbar-block.hover .sf-toolbar-info {\n          display: block;\n          padding: 10px;\n          max-width: 480px;\n          max-height: 480px;\n          word-wrap: break-word;\n          overflow: hidden;\n          overflow-y: auto;\n        }\n        .sf-toolbar-info-piece b.sf-toolbar-ajax-info {\n          color: #f5f5f5;\n        }\n        .sf-toolbar-ajax-requests {\n          table-layout: auto;\n          width: 100%;\n        }\n        .sf-toolbar-ajax-requests td {\n          background-color: #444;\n          border-bottom: 1px solid #777;\n          color: #f5f5f5;\n          font-size: 12px;\n          padding: 4px;\n        }\n        .sf-toolbar-ajax-requests tr:last-child td {\n          border-bottom: 0;\n        }\n        .sf-toolbar-ajax-requests th {\n          background-color: #222;\n          border-bottom: 0;\n          color: #aaa;\n          font-size: 11px;\n          padding: 4px;\n        }\n        .sf-ajax-request-url {\n          max-width: 250px;\n          line-height: 9px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .sf-toolbar-ajax-requests .sf-ajax-request-url a {\n          text-decoration: none;\n        }\n        .sf-toolbar-ajax-requests .sf-ajax-request-url a:hover {\n          text-decoration: underline;\n        }\n        .sf-ajax-request-duration {\n          text-align: right;\n        }\n        .sf-ajax-request-loading {\n          animation: sf-blink 0.5s ease-in-out infinite;\n        }\n        @keyframes sf-blink {\n          0% {\n            background: #222;\n          }\n          50% {\n            background: #444;\n          }\n          100% {\n            background: #222;\n          }\n        }\n        .sf-toolbar-block.sf-toolbar-block-dump .sf-toolbar-info {\n          max-width: none;\n          width: 100%;\n          position: fixed;\n          box-sizing: border-box;\n          left: 0;\n        }\n        .sf-toolbar-block-dump pre.sf-dump {\n          background-color: #222;\n          border-color: #777;\n          border-radius: 0;\n          margin: 6px 0 12px 0;\n        }\n        .sf-toolbar-block-dump pre.sf-dump:last-child {\n          margin-bottom: 0;\n        }\n        .sf-toolbar-block-dump pre.sf-dump .sf-dump-search-wrapper {\n          margin-bottom: 5px;\n        }\n        .sf-toolbar-block-dump pre.sf-dump span.sf-dump-search-count {\n          color: #333;\n          font-size: 12px;\n        }\n        .sf-toolbar-block-dump .sf-toolbar-info-piece {\n          display: block;\n        }\n        .sf-toolbar-block-dump .sf-toolbar-info-piece .sf-toolbar-file-line {\n          color: #aaa;\n          margin-left: 4px;\n        }\n        .sf-toolbar-block-dump .sf-toolbar-info img {\n          display: none;\n        } /* Responsive Design */\n        .sf-toolbar-icon .sf-toolbar-label,\n        .sf-toolbar-icon .sf-toolbar-value {\n          display: none;\n        }\n        .sf-toolbar-block-config .sf-toolbar-icon .sf-toolbar-label {\n          display: inline-block;\n        } /* Legacy Design - these styles are maintained to make old panels look   a bit better on the new toolbar */\n        .sf-toolbar-block .sf-toolbar-info-piece-additional-detail {\n          color: #aaa;\n          font-size: 12px;\n        }\n        .sf-toolbar-status-green .sf-toolbar-info-piece-additional-detail,\n        .sf-toolbar-status-yellow .sf-toolbar-info-piece-additional-detail,\n        .sf-toolbar-status-red .sf-toolbar-info-piece-additional-detail {\n          color: #fff;\n        }\n        @media (min-width: 768px) {\n          .sf-toolbar-icon .sf-toolbar-label,\n          .sf-toolbar-icon .sf-toolbar-value {\n            display: inline;\n          }\n          .sf-toolbar-block .sf-toolbar-icon img,\n          .sf-toolbar-block .sf-toolbar-icon svg {\n            top: 6px;\n          }\n          .sf-toolbar-block-time .sf-toolbar-icon svg,\n          .sf-toolbar-block-memory .sf-toolbar-icon svg {\n            display: none;\n          }\n          .sf-toolbar-block-time .sf-toolbar-icon svg + span,\n          .sf-toolbar-block-memory .sf-toolbar-icon svg + span {\n            margin-left: 0;\n          }\n          .sf-toolbar-block .sf-toolbar-icon {\n            padding: 0 10px;\n          }\n          .sf-toolbar-block-time .sf-toolbar-icon {\n            padding-right: 5px;\n          }\n          .sf-toolbar-block-memory .sf-toolbar-icon {\n            padding-left: 5px;\n          }\n          .sf-toolbar-block-request .sf-toolbar-icon {\n            padding-left: 0;\n            padding-right: 0;\n          }\n          .sf-toolbar-block-request .sf-toolbar-label {\n            margin-left: 5px;\n          }\n          .sf-toolbar-block-request .sf-toolbar-status + svg {\n            margin-left: 5px;\n          }\n          .sf-toolbar-block-request .sf-toolbar-icon svg + .sf-toolbar-label {\n            margin-left: 0;\n          }\n          .sf-toolbar-block-request .sf-toolbar-label + .sf-toolbar-value {\n            margin-right: 10px;\n          }\n          .sf-toolbar-block-request:hover .sf-toolbar-info {\n            max-width: none;\n          }\n          .sf-toolbar-block .sf-toolbar-info-piece b {\n            font-size: 12px;\n          }\n          .sf-toolbar-block .sf-toolbar-info-piece span {\n            font-size: 13px;\n          }\n          .sf-toolbar-block-right {\n            float: right;\n            margin-left: 0;\n            margin-right: 0;\n          }\n        }\n        @media (min-width: 1024px) {\n          .sf-toolbar-block .sf-toolbar-info-piece-additional,\n          .sf-toolbar-block .sf-toolbar-info-piece-additional-detail {\n            display: inline;\n          }\n          .sf-toolbar-block .sf-toolbar-info-piece-additional:empty,\n          .sf-toolbar-block .sf-toolbar-info-piece-additional-detail:empty {\n            display: none;\n          }\n        } /***** Error Toolbar *****/\n        .sf-error-toolbar .sf-toolbarreset {\n          background: #222;\n          color: #f5f5f5;\n          font: 13px/36px Arial, sans-serif;\n          height: 36px;\n          padding: 0 15px;\n          text-align: left;\n        }\n        .sf-error-toolbar .sf-toolbarreset svg {\n          height: auto;\n        }\n        .sf-error-toolbar .sf-toolbarreset a {\n          color: #99cdd8;\n          margin-left: 5px;\n          text-decoration: underline;\n        }\n        .sf-error-toolbar .sf-toolbarreset a:hover {\n          text-decoration: none;\n        }\n        .sf-error-toolbar .sf-toolbarreset .sf-toolbar-icon {\n          float: left;\n          padding: 5px 0;\n          margin-right: 10px;\n        } /***** Media query print: Do not print the Toolbar. *****/\n        @media print {\n          .sf-toolbar {\n            display: none;\n          }\n        }\n        \n        "
          }
        })
      );
    }
  }]);

  return Profiler;
}(_react2.default.Component);

exports.default = Profiler;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);