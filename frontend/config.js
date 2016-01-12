System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },
  bundles: {
    "build.js": [
      "js/main.js",
      "npm:babel-core@5.8.34/polyfill",
      "npm:immutable@3.7.6",
      "npm:redux-logger@2.3.1",
      "npm:redux-thunk@1.0.3",
      "npm:react@0.14.5",
      "npm:react-dom@0.14.5",
      "npm:react-redux@4.0.6",
      "js/reducers.js",
      "js/actions.js",
      "js/views/main.js",
      "npm:redux@3.0.5",
      "npm:immutable@3.7.6/dist/immutable",
      "npm:redux-logger@2.3.1/lib/index",
      "npm:redux-thunk@1.0.3/lib/index",
      "npm:babel-core@5.8.34/lib/polyfill",
      "npm:react@0.14.5/react",
      "npm:react-dom@0.14.5/index",
      "npm:react-redux@4.0.6/lib/index",
      "npm:babel-runtime@5.8.34/helpers/class-call-check",
      "js/api.js",
      "npm:redux-actions@0.9.0",
      "js/views/applicationData.js",
      "js/views/serverUpdates.js",
      "npm:babel-runtime@5.8.34/core-js/object/assign",
      "npm:babel-runtime@5.8.34/helpers/get",
      "npm:babel-runtime@5.8.34/helpers/inherits",
      "npm:babel-runtime@5.8.34/helpers/create-class",
      "npm:redux@3.0.5/lib/index",
      "npm:babel-runtime@5.8.34/regenerator/runtime",
      "npm:react@0.14.5/lib/React",
      "npm:core-js@1.2.6/shim",
      "npm:react@0.14.5/lib/ReactDOM",
      "npm:react-redux@4.0.6/lib/components/connect",
      "npm:react-redux@4.0.6/lib/components/Provider",
      "npm:isomorphic-fetch@2.2.0",
      "js/views/applications.js",
      "js/views/applicationGroupList.js",
      "js/views/source.js",
      "npm:redux-actions@0.9.0/lib/index",
      "npm:core-js@1.2.6/library/fn/object/assign",
      "npm:babel-runtime@5.8.34/core-js/object/get-own-property-descriptor",
      "npm:babel-runtime@5.8.34/core-js/object/create",
      "npm:babel-runtime@5.8.34/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.34/core-js/object/define-property",
      "npm:redux@3.0.5/lib/createStore",
      "npm:redux@3.0.5/lib/utils/combineReducers",
      "npm:redux@3.0.5/lib/utils/bindActionCreators",
      "npm:redux@3.0.5/lib/utils/applyMiddleware",
      "npm:redux@3.0.5/lib/utils/compose",
      "npm:react@0.14.5/lib/Object.assign",
      "npm:core-js@1.2.6/modules/$.core",
      "npm:react@0.14.5/lib/ReactCurrentOwner",
      "npm:hoist-non-react-statics@1.0.3",
      "npm:react@0.14.5/lib/ReactPerf",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:invariant@2.2.0",
      "npm:babel-runtime@5.8.34/core-js/symbol",
      "npm:react@0.14.5/lib/ReactDOMServer",
      "npm:babel-runtime@5.8.34/core-js/promise",
      "npm:react@0.14.5/lib/ReactIsomorphic",
      "npm:react@0.14.5/lib/deprecated",
      "npm:core-js@1.2.6/modules/es6.symbol",
      "npm:core-js@1.2.6/modules/es5",
      "npm:core-js@1.2.6/modules/es6.object.assign",
      "npm:core-js@1.2.6/modules/es6.object.is",
      "npm:core-js@1.2.6/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.to-string",
      "npm:core-js@1.2.6/modules/es6.object.freeze",
      "npm:core-js@1.2.6/modules/es6.object.seal",
      "npm:core-js@1.2.6/modules/es6.object.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.object.is-frozen",
      "npm:core-js@1.2.6/modules/es6.object.is-sealed",
      "npm:core-js@1.2.6/modules/es6.object.is-extensible",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/modules/es6.object.keys",
      "npm:core-js@1.2.6/modules/es6.object.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-names",
      "npm:core-js@1.2.6/modules/es6.number.constructor",
      "npm:core-js@1.2.6/modules/es6.function.has-instance",
      "npm:core-js@1.2.6/modules/es6.function.name",
      "npm:core-js@1.2.6/modules/es6.number.epsilon",
      "npm:core-js@1.2.6/modules/es6.number.is-finite",
      "npm:core-js@1.2.6/modules/es6.number.is-integer",
      "npm:core-js@1.2.6/modules/es6.number.is-nan",
      "npm:core-js@1.2.6/modules/es6.number.is-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.max-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.parse-float",
      "npm:core-js@1.2.6/modules/es6.number.min-safe-integer",
      "npm:core-js@1.2.6/modules/es6.math.asinh",
      "npm:core-js@1.2.6/modules/es6.number.parse-int",
      "npm:core-js@1.2.6/modules/es6.math.acosh",
      "npm:core-js@1.2.6/modules/es6.math.atanh",
      "npm:core-js@1.2.6/modules/es6.math.cbrt",
      "npm:core-js@1.2.6/modules/es6.math.clz32",
      "npm:core-js@1.2.6/modules/es6.math.cosh",
      "npm:core-js@1.2.6/modules/es6.math.expm1",
      "npm:core-js@1.2.6/modules/es6.math.fround",
      "npm:core-js@1.2.6/modules/es6.math.hypot",
      "npm:core-js@1.2.6/modules/es6.math.imul",
      "npm:core-js@1.2.6/modules/es6.math.log10",
      "npm:core-js@1.2.6/modules/es6.math.log1p",
      "npm:core-js@1.2.6/modules/es6.math.log2",
      "npm:core-js@1.2.6/modules/es6.math.sinh",
      "npm:core-js@1.2.6/modules/es6.math.sign",
      "npm:core-js@1.2.6/modules/es6.math.tanh",
      "npm:core-js@1.2.6/modules/es6.math.trunc",
      "npm:core-js@1.2.6/modules/es6.string.trim",
      "npm:core-js@1.2.6/modules/es6.string.iterator",
      "npm:core-js@1.2.6/modules/es6.string.from-code-point",
      "npm:core-js@1.2.6/modules/es6.string.code-point-at",
      "npm:core-js@1.2.6/modules/es6.string.ends-with",
      "npm:core-js@1.2.6/modules/es6.string.includes",
      "npm:core-js@1.2.6/modules/es6.string.repeat",
      "npm:core-js@1.2.6/modules/es6.string.starts-with",
      "npm:core-js@1.2.6/modules/es6.array.of",
      "npm:core-js@1.2.6/modules/es6.array.iterator",
      "npm:core-js@1.2.6/modules/es6.array.species",
      "npm:core-js@1.2.6/modules/es6.array.copy-within",
      "npm:core-js@1.2.6/modules/es6.array.fill",
      "npm:core-js@1.2.6/modules/es6.array.find",
      "npm:core-js@1.2.6/modules/es6.array.from",
      "npm:core-js@1.2.6/modules/es6.array.find-index",
      "npm:core-js@1.2.6/modules/es6.regexp.constructor",
      "npm:core-js@1.2.6/modules/es6.regexp.match",
      "npm:core-js@1.2.6/modules/es6.regexp.flags",
      "npm:core-js@1.2.6/modules/es6.regexp.replace",
      "npm:core-js@1.2.6/modules/es6.regexp.search",
      "npm:core-js@1.2.6/modules/es6.regexp.split",
      "npm:core-js@1.2.6/modules/es6.promise",
      "npm:core-js@1.2.6/modules/es6.map",
      "npm:core-js@1.2.6/modules/es6.set",
      "npm:core-js@1.2.6/modules/es6.weak-map",
      "npm:core-js@1.2.6/modules/es6.weak-set",
      "npm:core-js@1.2.6/modules/es6.reflect.apply",
      "npm:core-js@1.2.6/modules/es6.reflect.construct",
      "npm:core-js@1.2.6/modules/es6.reflect.define-property",
      "npm:core-js@1.2.6/modules/es6.reflect.delete-property",
      "npm:core-js@1.2.6/modules/es6.reflect.enumerate",
      "npm:core-js@1.2.6/modules/es6.reflect.get",
      "npm:core-js@1.2.6/modules/es6.reflect.has",
      "npm:core-js@1.2.6/modules/es6.string.raw",
      "npm:core-js@1.2.6/modules/es6.reflect.is-extensible",
      "npm:core-js@1.2.6/modules/es6.reflect.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.reflect.set",
      "npm:core-js@1.2.6/modules/es6.reflect.own-keys",
      "npm:core-js@1.2.6/modules/es6.reflect.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.reflect.set-prototype-of",
      "npm:core-js@1.2.6/modules/es7.string.at",
      "npm:core-js@1.2.6/modules/es7.array.includes",
      "npm:core-js@1.2.6/modules/es7.string.pad-left",
      "npm:core-js@1.2.6/modules/es7.string.pad-right",
      "npm:core-js@1.2.6/modules/es7.string.trim-left",
      "npm:core-js@1.2.6/modules/es7.string.trim-right",
      "npm:core-js@1.2.6/modules/es7.regexp.escape",
      "npm:core-js@1.2.6/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@1.2.6/modules/es7.object.values",
      "npm:core-js@1.2.6/modules/es7.object.entries",
      "npm:core-js@1.2.6/modules/es7.map.to-json",
      "npm:core-js@1.2.6/modules/es7.set.to-json",
      "npm:core-js@1.2.6/modules/js.array.statics",
      "npm:core-js@1.2.6/modules/web.timers",
      "npm:core-js@1.2.6/modules/web.immediate",
      "npm:core-js@1.2.6/modules/web.dom.iterable",
      "npm:react@0.14.5/lib/ReactDOMTextComponent",
      "npm:core-js@1.2.6/modules/es6.reflect.get-own-property-descriptor",
      "npm:react@0.14.5/lib/ReactDefaultInjection",
      "npm:react@0.14.5/lib/ReactVersion",
      "npm:fbjs@0.6.0/lib/ExecutionEnvironment",
      "npm:react-redux@4.0.6/lib/utils/shallowEqual",
      "npm:react-redux@4.0.6/lib/utils/isPlainObject",
      "npm:redux-actions@0.9.0/lib/createAction",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:redux@3.0.5/lib/utils/mapValues",
      "npm:redux@3.0.5/lib/utils/isPlainObject",
      "npm:redux@3.0.5/lib/utils/pick",
      "npm:react-redux@4.0.6/lib/utils/storeShape",
      "npm:react-redux@4.0.6/lib/utils/wrapActionCreators",
      "npm:isomorphic-fetch@2.2.0/fetch-npm-browserify",
      "npm:redux-actions@0.9.0/lib/handleAction",
      "npm:react@0.14.5/lib/ReactReconciler",
      "npm:react@0.14.5/lib/ReactMount",
      "npm:react@0.14.5/lib/renderSubtreeIntoContainer",
      "npm:fbjs@0.6.0/lib/warning",
      "npm:react@0.14.5/lib/findDOMNode",
      "npm:react@0.14.5/lib/ReactUpdates",
      "js/views/sources.js",
      "npm:redux-actions@0.9.0/lib/handleActions",
      "npm:core-js@1.2.6/library/modules/es6.object.assign",
      "npm:core-js@1.2.6/library/fn/object/create",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of",
      "npm:core-js@1.2.6/library/fn/object/define-property",
      "npm:react@0.14.5/lib/ReactInstanceHandles",
      "npm:hoist-non-react-statics@1.0.3/index",
      "npm:core-js@1.2.6/modules/$",
      "npm:core-js@1.2.6/modules/$.global",
      "npm:core-js@1.2.6/modules/$.has",
      "npm:core-js@1.2.6/modules/$.fails",
      "npm:core-js@1.2.6/modules/$.uid",
      "npm:core-js@1.2.6/modules/$.property-desc",
      "npm:core-js@1.2.6/modules/$.library",
      "npm:core-js@1.2.6/modules/$.cof",
      "npm:core-js@1.2.6/modules/$.invoke",
      "npm:core-js@1.2.6/modules/$.a-function",
      "npm:core-js@1.2.6/modules/$.is-object",
      "npm:core-js@1.2.6/modules/$.to-integer",
      "npm:core-js@1.2.6/modules/$.same-value",
      "npm:core-js@1.2.6/modules/$.math-log1p",
      "npm:core-js@1.2.6/modules/$.math-sign",
      "npm:core-js@1.2.6/modules/$.math-expm1",
      "npm:core-js@1.2.6/modules/$.iter-step",
      "npm:core-js@1.2.6/modules/$.iterators",
      "npm:core-js@1.2.6/modules/$.strict-new",
      "npm:core-js@1.2.6/modules/$.replacer",
      "npm:react@0.14.5/lib/escapeTextContentForBrowser",
      "npm:react@0.14.5/lib/ClientReactRootIndex",
      "npm:react@0.14.5/lib/ServerReactRootIndex",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:invariant@2.2.0/browser",
      "npm:core-js@1.2.6/library/fn/symbol",
      "npm:react@0.14.5/lib/ReactServerRendering",
      "npm:react@0.14.5/lib/ReactChildren",
      "npm:core-js@1.2.6/library/fn/promise",
      "npm:react@0.14.5/lib/ReactComponent",
      "npm:react@0.14.5/lib/ReactClass",
      "npm:react@0.14.5/lib/ReactDOMFactories",
      "npm:react@0.14.5/lib/ReactElement",
      "npm:react@0.14.5/lib/ReactElementValidator",
      "npm:react@0.14.5/lib/onlyChild",
      "npm:react@0.14.5/lib/ReactPropTypes",
      "npm:core-js@1.2.6/modules/$.descriptors",
      "npm:core-js@1.2.6/modules/$.export",
      "npm:core-js@1.2.6/modules/$.redefine",
      "npm:core-js@1.2.6/modules/$.shared",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/modules/$.wks",
      "npm:core-js@1.2.6/modules/$.keyof",
      "npm:core-js@1.2.6/modules/$.get-names",
      "npm:core-js@1.2.6/modules/$.enum-keys",
      "npm:core-js@1.2.6/modules/$.is-array",
      "npm:core-js@1.2.6/modules/$.an-object",
      "npm:core-js@1.2.6/modules/$.to-iobject",
      "npm:core-js@1.2.6/modules/$.html",
      "npm:core-js@1.2.6/modules/$.dom-create",
      "npm:core-js@1.2.6/modules/$.to-index",
      "npm:core-js@1.2.6/modules/$.to-object",
      "npm:core-js@1.2.6/modules/$.to-length",
      "npm:core-js@1.2.6/modules/$.iobject",
      "npm:core-js@1.2.6/modules/$.array-methods",
      "npm:core-js@1.2.6/modules/$.array-includes",
      "npm:core-js@1.2.6/modules/$.object-assign",
      "npm:core-js@1.2.6/modules/$.set-proto",
      "npm:core-js@1.2.6/modules/$.classof",
      "npm:core-js@1.2.6/modules/$.object-sap",
      "npm:core-js@1.2.6/modules/$.to-primitive",
      "npm:core-js@1.2.6/modules/$.string-trim",
      "npm:core-js@1.2.6/modules/$.is-integer",
      "npm:core-js@1.2.6/modules/$.string-at",
      "npm:core-js@1.2.6/modules/$.iter-define",
      "npm:core-js@1.2.6/modules/$.string-context",
      "npm:core-js@1.2.6/modules/$.fails-is-regexp",
      "npm:core-js@1.2.6/modules/$.string-repeat",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/modules/$.set-species",
      "npm:core-js@1.2.6/modules/$.array-copy-within",
      "npm:core-js@1.2.6/modules/$.array-fill",
      "npm:core-js@1.2.6/modules/$.ctx",
      "npm:core-js@1.2.6/modules/$.iter-call",
      "npm:core-js@1.2.6/modules/$.is-array-iter",
      "npm:core-js@1.2.6/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/modules/$.iter-detect",
      "npm:core-js@1.2.6/modules/$.is-regexp",
      "npm:core-js@1.2.6/modules/$.flags",
      "npm:core-js@1.2.6/modules/$.fix-re-wks",
      "npm:core-js@1.2.6/modules/$.species-constructor",
      "npm:core-js@1.2.6/modules/$.for-of",
      "npm:core-js@1.2.6/modules/$.redefine-all",
      "npm:core-js@1.2.6/modules/$.microtask",
      "npm:core-js@1.2.6/modules/$.collection-strong",
      "npm:core-js@1.2.6/modules/$.collection",
      "npm:core-js@1.2.6/modules/$.collection-weak",
      "npm:core-js@1.2.6/modules/$.iter-create",
      "npm:core-js@1.2.6/modules/$.own-keys",
      "npm:core-js@1.2.6/modules/$.string-pad",
      "npm:core-js@1.2.6/modules/$.object-to-array",
      "npm:core-js@1.2.6/modules/$.collection-to-json",
      "npm:core-js@1.2.6/modules/$.partial",
      "npm:core-js@1.2.6/modules/$.task",
      "npm:react@0.14.5/lib/DOMChildrenOperations",
      "npm:react@0.14.5/lib/DOMPropertyOperations",
      "npm:core-js@1.2.6/modules/$.hide",
      "npm:react@0.14.5/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.5/lib/setTextContent",
      "npm:react@0.14.5/lib/validateDOMNesting",
      "npm:react@0.14.5/lib/BeforeInputEventPlugin",
      "npm:react@0.14.5/lib/ChangeEventPlugin",
      "npm:react@0.14.5/lib/DefaultEventPluginOrder",
      "npm:react@0.14.5/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.5/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.5/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.5/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.5/lib/ReactEventListener",
      "npm:react@0.14.5/lib/ReactDOMComponent",
      "npm:react@0.14.5/lib/ReactInjection",
      "npm:react@0.14.5/lib/ReactReconcileTransaction",
      "npm:react@0.14.5/lib/SelectEventPlugin",
      "npm:react@0.14.5/lib/SimpleEventPlugin",
      "npm:react@0.14.5/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.5/lib/ReactDefaultPerf",
      "npm:react@0.14.5/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.5/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.5/lib/ReactInstanceMap",
      "npm:react@0.14.5/lib/shouldUpdateReactComponent",
      "npm:fbjs@0.6.0/lib/emptyFunction",
      "npm:redux-actions@0.9.0/lib/ownKeys",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:whatwg-fetch@0.10.1",
      "npm:reduce-reducers@0.1.1",
      "npm:fbjs@0.6.0/lib/emptyObject",
      "npm:fbjs@0.6.0/lib/invariant",
      "npm:flux-standard-action@0.6.0",
      "npm:react@0.14.5/lib/ReactRef",
      "npm:react@0.14.5/lib/DOMProperty",
      "npm:react@0.14.5/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.5/lib/ReactMarkupChecksum",
      "npm:react@0.14.5/lib/ReactUpdateQueue",
      "npm:fbjs@0.6.0/lib/containsNode",
      "npm:react@0.14.5/lib/instantiateReactComponent",
      "npm:react@0.14.5/lib/setInnerHTML",
      "npm:react@0.14.5/lib/CallbackQueue",
      "npm:react@0.14.5/lib/PooledClass",
      "npm:react@0.14.5/lib/Transaction",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.object-assign",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of",
      "npm:react@0.14.5/lib/ReactRootIndex",
      "npm:react@0.14.5/lib/ReactServerBatchingStrategy",
      "npm:core-js@1.2.6/library/modules/es6.object.to-string",
      "npm:fbjs@0.6.0/lib/keyOf",
      "npm:fbjs@0.6.0/lib/mapObject",
      "npm:react@0.14.5/lib/getIteratorFn",
      "npm:core-js@1.2.6/modules/$.defined",
      "npm:react@0.14.5/lib/getEventTarget",
      "npm:react@0.14.5/lib/isTextInputElement",
      "npm:fbjs@0.6.0/lib/getUnboundedScrollPosition",
      "npm:react@0.14.5/lib/ReactDOMButton",
      "npm:fbjs@0.6.0/lib/shallowEqual",
      "npm:fbjs@0.6.0/lib/getActiveElement",
      "npm:react@0.14.5/lib/getEventCharCode",
      "npm:react@0.14.5/lib/canDefineProperty",
      "npm:react@0.14.5/lib/ReactPropTypeLocationNames",
      "npm:process@0.11.2",
      "npm:core-js@1.2.6/library/fn/symbol/index",
      "npm:react@0.14.5/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.5/lib/traverseAllChildren",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:react@0.14.5/lib/ReactNoopUpdateQueue",
      "npm:core-js@1.2.6/library/modules/es6.promise",
      "npm:react@0.14.5/lib/ReactPropTypeLocations",
      "npm:fbjs@0.6.0/lib/keyMirror",
      "npm:core-js@1.2.6/modules/$.array-species-create",
      "npm:core-js@1.2.6/modules/$.path",
      "npm:react@0.14.5/lib/Danger",
      "npm:react@0.14.5/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.5/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.5/lib/ReactDOMIDOperations",
      "npm:react@0.14.5/lib/EventConstants",
      "npm:react@0.14.5/lib/EventPropagators",
      "npm:react@0.14.5/lib/FallbackCompositionState",
      "npm:react@0.14.5/lib/SyntheticCompositionEvent",
      "npm:react@0.14.5/lib/SyntheticInputEvent",
      "npm:react@0.14.5/lib/EventPluginHub",
      "npm:react@0.14.5/lib/SyntheticEvent",
      "npm:react@0.14.5/lib/isEventSupported",
      "npm:react@0.14.5/lib/SyntheticMouseEvent",
      "npm:fbjs@0.6.0/lib/EventListener",
      "npm:react@0.14.5/lib/AutoFocusUtils",
      "npm:react@0.14.5/lib/CSSPropertyOperations",
      "npm:react@0.14.5/lib/ReactDOMInput",
      "npm:react@0.14.5/lib/ReactDOMOption",
      "npm:react@0.14.5/lib/ReactDOMSelect",
      "npm:react@0.14.5/lib/ReactDOMTextarea",
      "npm:react@0.14.5/lib/ReactMultiChild",
      "npm:react@0.14.5/lib/ReactComponentEnvironment",
      "npm:react@0.14.5/lib/ReactEmptyComponent",
      "npm:react@0.14.5/lib/ReactNativeComponent",
      "npm:react@0.14.5/lib/ReactInputSelection",
      "npm:react@0.14.5/lib/SyntheticClipboardEvent",
      "npm:react@0.14.5/lib/SyntheticFocusEvent",
      "npm:react@0.14.5/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.5/lib/SyntheticDragEvent",
      "npm:react@0.14.5/lib/SyntheticTouchEvent",
      "npm:react@0.14.5/lib/SyntheticUIEvent",
      "npm:react@0.14.5/lib/SyntheticWheelEvent",
      "npm:react@0.14.5/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.6.0/lib/performanceNow",
      "npm:whatwg-fetch@0.10.1/fetch",
      "npm:reduce-reducers@0.1.1/lib/index",
      "npm:react@0.14.5/lib/ViewportMetrics",
      "npm:react@0.14.5/lib/adler32",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:flux-standard-action@0.6.0/lib/index",
      "npm:react@0.14.5/lib/ReactOwner",
      "npm:react@0.14.5/lib/EventPluginRegistry",
      "npm:react@0.14.5/lib/ReactEventEmitterMixin",
      "npm:fbjs@0.6.0/lib/isTextNode",
      "npm:react@0.14.5/lib/ReactCompositeComponent",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.to-object",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/modules/$.object-sap",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:process@0.11.2/browser",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.library",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/$.strict-new",
      "npm:core-js@1.2.6/library/modules/$.same-value",
      "npm:react@0.14.5/lib/forEachAccumulated",
      "npm:fbjs@0.6.0/lib/focusNode",
      "npm:react@0.14.5/lib/CSSProperty",
      "npm:react@0.14.5/lib/getEventModifierState",
      "npm:fbjs@0.6.0/lib/memoizeStringOnly",
      "npm:react@0.14.5/lib/ReactErrorUtils",
      "npm:core-js@1.2.6/library/modules/es6.symbol",
      "npm:core-js@1.2.6/library/modules/$.string-at",
      "npm:core-js@1.2.6/library/modules/$.iter-define",
      "npm:core-js@1.2.6/library/modules/es6.array.iterator",
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.for-of",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.species-constructor",
      "npm:core-js@1.2.6/library/modules/$.microtask",
      "npm:core-js@1.2.6/library/modules/$.descriptors",
      "npm:core-js@1.2.6/library/modules/$.redefine-all",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$.set-species",
      "npm:core-js@1.2.6/library/modules/$.iter-detect",
      "npm:fbjs@0.6.0/lib/createNodesFromMarkup",
      "npm:fbjs@0.6.0/lib/getMarkupWrap",
      "npm:react@0.14.5/lib/accumulateInto",
      "npm:react@0.14.5/lib/getTextContentAccessor",
      "npm:react@0.14.5/lib/EventPluginUtils",
      "npm:fbjs@0.6.0/lib/camelizeStyleName",
      "npm:react@0.14.5/lib/dangerousStyleValue",
      "npm:fbjs@0.6.0/lib/hyphenateStyleName",
      "npm:react@0.14.5/lib/LinkedValueUtils",
      "npm:react@0.14.5/lib/ReactChildReconciler",
      "npm:react@0.14.5/lib/flattenChildren",
      "npm:react@0.14.5/lib/ReactDOMSelection",
      "npm:react@0.14.5/lib/getEventKey",
      "npm:fbjs@0.6.0/lib/performance",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:fbjs@0.6.0/lib/isNode",
      "npm:lodash.isplainobject@3.2.0",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:core-js@1.2.6/library/modules/$.uid",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.to-integer",
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/library/modules/$.iter-step",
      "npm:fbjs@0.6.0/lib/camelize",
      "npm:fbjs@0.6.0/lib/hyphenate",
      "npm:react@0.14.5/lib/getNodeForCharacterOffset",
      "npm:core-js@1.2.6/library/modules/$.redefine",
      "npm:core-js@1.2.6/library/modules/$.keyof",
      "npm:core-js@1.2.6/library/modules/$.get-names",
      "npm:core-js@1.2.6/library/modules/$.enum-keys",
      "npm:core-js@1.2.6/library/modules/$.shared",
      "npm:core-js@1.2.6/library/modules/$.is-array",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.iter-create",
      "npm:core-js@1.2.6/library/modules/$.iter-call",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter",
      "npm:core-js@1.2.6/library/modules/$.to-length",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/library/modules/$.task",
      "npm:fbjs@0.6.0/lib/createArrayFromMixed",
      "npm:lodash.isplainobject@3.2.0/index",
      "npm:core-js@1.2.6/library/modules/$.invoke",
      "npm:core-js@1.2.6/library/modules/$.dom-create",
      "npm:fbjs@0.6.0/lib/toArray",
      "npm:core-js@1.2.6/library/modules/$.html",
      "npm:lodash.isarguments@3.0.4",
      "npm:lodash._basefor@3.0.2",
      "npm:lodash.keysin@3.0.8",
      "npm:lodash.isarguments@3.0.4/index",
      "npm:lodash._basefor@3.0.2/index",
      "npm:lodash.keysin@3.0.8/index",
      "npm:lodash.isarray@3.0.4",
      "npm:lodash.isarray@3.0.4/index"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-core": "npm:babel-core@6.3.26",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "core-js": "npm:core-js@1.2.6",
    "immutable": "npm:immutable@3.7.6",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.0",
    "react": "npm:react@0.14.5",
    "react-dom": "npm:react-dom@0.14.5",
    "react-redux": "npm:react-redux@4.0.6",
    "redux": "npm:redux@3.0.5",
    "redux-actions": "npm:redux-actions@0.9.0",
    "redux-logger": "npm:redux-logger@2.3.1",
    "redux-promise": "npm:redux-promise@0.5.0",
    "redux-thunk": "npm:redux-thunk@1.0.3",
    "reselect": "npm:reselect@2.0.1",
    "typescript": "npm:typescript@1.7.5",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.6.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-code-frame@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "chalk": "npm:chalk@1.1.1",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@1.0.2",
      "line-numbers": "npm:line-numbers@0.2.0",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-core@6.3.26": {
      "babel-code-frame": "npm:babel-code-frame@6.3.13",
      "babel-generator": "npm:babel-generator@6.3.26",
      "babel-helpers": "npm:babel-helpers@6.3.13",
      "babel-messages": "npm:babel-messages@6.3.18",
      "babel-register": "npm:babel-register@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "babel-types": "npm:babel-types@6.3.24",
      "babylon": "npm:babylon@6.3.26",
      "convert-source-map": "npm:convert-source-map@1.1.3",
      "debug": "npm:debug@2.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json5": "npm:json5@0.4.0",
      "lodash": "npm:lodash@3.10.1",
      "minimatch": "npm:minimatch@2.0.10",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shebang-regex": "npm:shebang-regex@1.0.0",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-generator@6.3.26": {
      "babel-messages": "npm:babel-messages@6.3.18",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.3.24",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "detect-indent": "npm:detect-indent@3.0.1",
      "is-integer": "npm:is-integer@1.0.6",
      "lodash": "npm:lodash@3.10.1",
      "repeating": "npm:repeating@1.1.3",
      "source-map": "npm:source-map@0.5.3",
      "trim-right": "npm:trim-right@1.0.1"
    },
    "npm:babel-helpers@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13"
    },
    "npm:babel-messages@6.3.18": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-register@6.3.13": {
      "babel-core": "npm:babel-core@6.3.26",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "core-js": "npm:core-js@1.2.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "home-or-tmp": "npm:home-or-tmp@1.0.0",
      "lodash": "npm:lodash@3.10.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map-support": "npm:source-map-support@0.2.10"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-template@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "babel-types": "npm:babel-types@6.3.24",
      "babylon": "npm:babylon@6.3.26",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-traverse@6.3.26": {
      "babel-code-frame": "npm:babel-code-frame@6.3.13",
      "babel-messages": "npm:babel-messages@6.3.18",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.3.24",
      "babylon": "npm:babylon@6.3.26",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.17.0",
      "invariant": "npm:invariant@2.2.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-types@6.3.24": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@3.10.1",
      "to-fast-properties": "npm:to-fast-properties@1.0.1"
    },
    "npm:babylon@6.3.26": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:brace-expansion@1.1.2": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detect-indent@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.6.2",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.6.0": {
      "core-js": "npm:core-js@1.2.6",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:flux-standard-action@0.6.0": {
      "lodash.isplainobject": "npm:lodash.isplainobject@3.2.0"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:globals@8.17.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:home-or-tmp@1.0.0": {
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-integer@1.0.6": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:isomorphic-fetch@2.2.0": {
      "node-fetch": "npm:node-fetch@1.3.3",
      "whatwg-fetch": "npm:whatwg-fetch@0.10.1"
    },
    "npm:json5@0.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:line-numbers@0.2.0": {
      "left-pad": "npm:left-pad@0.0.3"
    },
    "npm:lodash._basefor@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.isplainobject@3.2.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.2",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash.keysin@3.0.8": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:node-fetch@1.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.3.0",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-exists@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.5": {
      "react": "npm:react@0.14.5"
    },
    "npm:react-redux@4.0.6": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.3",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.5",
      "redux": "npm:redux@3.0.5"
    },
    "npm:react@0.14.5": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.6.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:redux-actions@0.9.0": {
      "flux-standard-action": "npm:flux-standard-action@0.6.0",
      "reduce-reducers": "npm:reduce-reducers@0.1.1"
    },
    "npm:redux-promise@0.5.0": {
      "flux-standard-action": "npm:flux-standard-action@0.6.0"
    },
    "npm:redux@3.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-support@0.2.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
