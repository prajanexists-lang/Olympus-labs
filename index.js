const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/success-DzrlrZbf.js", "assets/check-TxHCPTjl.js", "assets/truck-B_DuTPpW.js", "assets/shop-e3qP5erI.js", "assets/ProductCard-Bnk08uHS.js", "assets/contact-C6Magqy9.js", "assets/map-pin-BT8awwna.js", "assets/checkout-BZ591d4z.js", "assets/loader-circle-Ce_6ZRMx.js", "assets/index-DNanFZAH.js", "assets/product._id-CXMKZCiW.js"]))) => i.map(i => d[i]);
function sS(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var Zc = {
    exports: {}
}
  , or = {};
var Hp;
function rS() {
    if (Hp)
        return or;
    Hp = 1;
    var n = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.fragment");
    function s(l, u, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        u.key !== void 0 && (d = "" + u.key),
        "key"in u) {
            f = {};
            for (var h in u)
                h !== "key" && (f[h] = u[h])
        } else
            f = u;
        return u = f.ref,
        {
            $$typeof: n,
            type: l,
            key: d,
            ref: u !== void 0 ? u : null,
            props: f
        }
    }
    return or.Fragment = a,
    or.jsx = s,
    or.jsxs = s,
    or
}
var qp;
function lS() {
    return qp || (qp = 1,
    Zc.exports = rS()),
    Zc.exports
}
var M = lS()
  , Vc = {
    exports: {}
}
  , de = {};
var Zp;
function uS() {
    if (Zp)
        return de;
    Zp = 1;
    var n = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , l = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , h = Symbol.for("react.forward_ref")
      , y = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , g = Symbol.for("react.activity")
      , _ = Symbol.iterator;
    function x(O) {
        return O === null || typeof O != "object" ? null : (O = _ && O[_] || O["@@iterator"],
        typeof O == "function" ? O : null)
    }
    var R = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , N = Object.assign
      , w = {};
    function A(O, Y, F) {
        this.props = O,
        this.context = Y,
        this.refs = w,
        this.updater = F || R
    }
    A.prototype.isReactComponent = {},
    A.prototype.setState = function(O, Y) {
        if (typeof O != "object" && typeof O != "function" && O != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, O, Y, "setState")
    }
    ,
    A.prototype.forceUpdate = function(O) {
        this.updater.enqueueForceUpdate(this, O, "forceUpdate")
    }
    ;
    function B() {}
    B.prototype = A.prototype;
    function Z(O, Y, F) {
        this.props = O,
        this.context = Y,
        this.refs = w,
        this.updater = F || R
    }
    var H = Z.prototype = new B;
    H.constructor = Z,
    N(H, A.prototype),
    H.isPureReactComponent = !0;
    var $ = Array.isArray;
    function I() {}
    var Q = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , X = Object.prototype.hasOwnProperty;
    function W(O, Y, F) {
        var ee = F.ref;
        return {
            $$typeof: n,
            type: O,
            key: Y,
            ref: ee !== void 0 ? ee : null,
            props: F
        }
    }
    function ce(O, Y) {
        return W(O.type, Y, O.props)
    }
    function re(O) {
        return typeof O == "object" && O !== null && O.$$typeof === n
    }
    function _e(O) {
        var Y = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + O.replace(/[=:]/g, function(F) {
            return Y[F]
        })
    }
    var Le = /\/+/g;
    function $e(O, Y) {
        return typeof O == "object" && O !== null && O.key != null ? _e("" + O.key) : Y.toString(36)
    }
    function Qe(O) {
        switch (O.status) {
        case "fulfilled":
            return O.value;
        case "rejected":
            throw O.reason;
        default:
            switch (typeof O.status == "string" ? O.then(I, I) : (O.status = "pending",
            O.then(function(Y) {
                O.status === "pending" && (O.status = "fulfilled",
                O.value = Y)
            }, function(Y) {
                O.status === "pending" && (O.status = "rejected",
                O.reason = Y)
            })),
            O.status) {
            case "fulfilled":
                return O.value;
            case "rejected":
                throw O.reason
            }
        }
        throw O
    }
    function k(O, Y, F, ee, le) {
        var ge = typeof O;
        (ge === "undefined" || ge === "boolean") && (O = null);
        var Ae = !1;
        if (O === null)
            Ae = !0;
        else
            switch (ge) {
            case "bigint":
            case "string":
            case "number":
                Ae = !0;
                break;
            case "object":
                switch (O.$$typeof) {
                case n:
                case a:
                    Ae = !0;
                    break;
                case v:
                    return Ae = O._init,
                    k(Ae(O._payload), Y, F, ee, le)
                }
            }
        if (Ae)
            return le = le(O),
            Ae = ee === "" ? "." + $e(O, 0) : ee,
            $(le) ? (F = "",
            Ae != null && (F = Ae.replace(Le, "$&/") + "/"),
            k(le, Y, F, "", function(bn) {
                return bn
            })) : le != null && (re(le) && (le = ce(le, F + (le.key == null || O && O.key === le.key ? "" : ("" + le.key).replace(Le, "$&/") + "/") + Ae)),
            Y.push(le)),
            1;
        Ae = 0;
        var We = ee === "" ? "." : ee + ":";
        if ($(O))
            for (var Ze = 0; Ze < O.length; Ze++)
                ee = O[Ze],
                ge = We + $e(ee, Ze),
                Ae += k(ee, Y, F, ge, le);
        else if (Ze = x(O),
        typeof Ze == "function")
            for (O = Ze.call(O),
            Ze = 0; !(ee = O.next()).done; )
                ee = ee.value,
                ge = We + $e(ee, Ze++),
                Ae += k(ee, Y, F, ge, le);
        else if (ge === "object") {
            if (typeof O.then == "function")
                return k(Qe(O), Y, F, ee, le);
            throw Y = String(O),
            Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Ae
    }
    function K(O, Y, F) {
        if (O == null)
            return O;
        var ee = []
          , le = 0;
        return k(O, ee, "", "", function(ge) {
            return Y.call(F, ge, le++)
        }),
        ee
    }
    function oe(O) {
        if (O._status === -1) {
            var Y = O._result;
            Y = Y(),
            Y.then(function(F) {
                (O._status === 0 || O._status === -1) && (O._status = 1,
                O._result = F)
            }, function(F) {
                (O._status === 0 || O._status === -1) && (O._status = 2,
                O._result = F)
            }),
            O._status === -1 && (O._status = 0,
            O._result = Y)
        }
        if (O._status === 1)
            return O._result.default;
        throw O._result
    }
    var ze = typeof reportError == "function" ? reportError : function(O) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var Y = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
                error: O
            });
            if (!window.dispatchEvent(Y))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", O);
            return
        }
        console.error(O)
    }
      , De = {
        map: K,
        forEach: function(O, Y, F) {
            K(O, function() {
                Y.apply(this, arguments)
            }, F)
        },
        count: function(O) {
            var Y = 0;
            return K(O, function() {
                Y++
            }),
            Y
        },
        toArray: function(O) {
            return K(O, function(Y) {
                return Y
            }) || []
        },
        only: function(O) {
            if (!re(O))
                throw Error("React.Children.only expected to receive a single React element child.");
            return O
        }
    };
    return de.Activity = g,
    de.Children = De,
    de.Component = A,
    de.Fragment = s,
    de.Profiler = u,
    de.PureComponent = Z,
    de.StrictMode = l,
    de.Suspense = y,
    de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q,
    de.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(O) {
            return Q.H.useMemoCache(O)
        }
    },
    de.cache = function(O) {
        return function() {
            return O.apply(null, arguments)
        }
    }
    ,
    de.cacheSignal = function() {
        return null
    }
    ,
    de.cloneElement = function(O, Y, F) {
        if (O == null)
            throw Error("The argument must be a React element, but you passed " + O + ".");
        var ee = N({}, O.props)
          , le = O.key;
        if (Y != null)
            for (ge in Y.key !== void 0 && (le = "" + Y.key),
            Y)
                !X.call(Y, ge) || ge === "key" || ge === "__self" || ge === "__source" || ge === "ref" && Y.ref === void 0 || (ee[ge] = Y[ge]);
        var ge = arguments.length - 2;
        if (ge === 1)
            ee.children = F;
        else if (1 < ge) {
            for (var Ae = Array(ge), We = 0; We < ge; We++)
                Ae[We] = arguments[We + 2];
            ee.children = Ae
        }
        return W(O.type, le, ee)
    }
    ,
    de.createContext = function(O) {
        return O = {
            $$typeof: d,
            _currentValue: O,
            _currentValue2: O,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        O.Provider = O,
        O.Consumer = {
            $$typeof: f,
            _context: O
        },
        O
    }
    ,
    de.createElement = function(O, Y, F) {
        var ee, le = {}, ge = null;
        if (Y != null)
            for (ee in Y.key !== void 0 && (ge = "" + Y.key),
            Y)
                X.call(Y, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (le[ee] = Y[ee]);
        var Ae = arguments.length - 2;
        if (Ae === 1)
            le.children = F;
        else if (1 < Ae) {
            for (var We = Array(Ae), Ze = 0; Ze < Ae; Ze++)
                We[Ze] = arguments[Ze + 2];
            le.children = We
        }
        if (O && O.defaultProps)
            for (ee in Ae = O.defaultProps,
            Ae)
                le[ee] === void 0 && (le[ee] = Ae[ee]);
        return W(O, ge, le)
    }
    ,
    de.createRef = function() {
        return {
            current: null
        }
    }
    ,
    de.forwardRef = function(O) {
        return {
            $$typeof: h,
            render: O
        }
    }
    ,
    de.isValidElement = re,
    de.lazy = function(O) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: O
            },
            _init: oe
        }
    }
    ,
    de.memo = function(O, Y) {
        return {
            $$typeof: p,
            type: O,
            compare: Y === void 0 ? null : Y
        }
    }
    ,
    de.startTransition = function(O) {
        var Y = Q.T
          , F = {};
        Q.T = F;
        try {
            var ee = O()
              , le = Q.S;
            le !== null && le(F, ee),
            typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(I, ze)
        } catch (ge) {
            ze(ge)
        } finally {
            Y !== null && F.types !== null && (Y.types = F.types),
            Q.T = Y
        }
    }
    ,
    de.unstable_useCacheRefresh = function() {
        return Q.H.useCacheRefresh()
    }
    ,
    de.use = function(O) {
        return Q.H.use(O)
    }
    ,
    de.useActionState = function(O, Y, F) {
        return Q.H.useActionState(O, Y, F)
    }
    ,
    de.useCallback = function(O, Y) {
        return Q.H.useCallback(O, Y)
    }
    ,
    de.useContext = function(O) {
        return Q.H.useContext(O)
    }
    ,
    de.useDebugValue = function() {}
    ,
    de.useDeferredValue = function(O, Y) {
        return Q.H.useDeferredValue(O, Y)
    }
    ,
    de.useEffect = function(O, Y) {
        return Q.H.useEffect(O, Y)
    }
    ,
    de.useEffectEvent = function(O) {
        return Q.H.useEffectEvent(O)
    }
    ,
    de.useId = function() {
        return Q.H.useId()
    }
    ,
    de.useImperativeHandle = function(O, Y, F) {
        return Q.H.useImperativeHandle(O, Y, F)
    }
    ,
    de.useInsertionEffect = function(O, Y) {
        return Q.H.useInsertionEffect(O, Y)
    }
    ,
    de.useLayoutEffect = function(O, Y) {
        return Q.H.useLayoutEffect(O, Y)
    }
    ,
    de.useMemo = function(O, Y) {
        return Q.H.useMemo(O, Y)
    }
    ,
    de.useOptimistic = function(O, Y) {
        return Q.H.useOptimistic(O, Y)
    }
    ,
    de.useReducer = function(O, Y, F) {
        return Q.H.useReducer(O, Y, F)
    }
    ,
    de.useRef = function(O) {
        return Q.H.useRef(O)
    }
    ,
    de.useState = function(O) {
        return Q.H.useState(O)
    }
    ,
    de.useSyncExternalStore = function(O, Y, F) {
        return Q.H.useSyncExternalStore(O, Y, F)
    }
    ,
    de.useTransition = function() {
        return Q.H.useTransition()
    }
    ,
    de.version = "19.2.5",
    de
}
var Vp;
function Cr() {
    return Vp || (Vp = 1,
    Vc.exports = uS()),
    Vc.exports
}
var J = Cr();
const br = sS(J);
var Yc = {
    exports: {}
}
  , cr = {}
  , Gc = {
    exports: {}
}
  , Qc = {};
var Yp;
function oS() {
    return Yp || (Yp = 1,
    (function(n) {
        function a(k, K) {
            var oe = k.length;
            k.push(K);
            e: for (; 0 < oe; ) {
                var ze = oe - 1 >>> 1
                  , De = k[ze];
                if (0 < u(De, K))
                    k[ze] = K,
                    k[oe] = De,
                    oe = ze;
                else
                    break e
            }
        }
        function s(k) {
            return k.length === 0 ? null : k[0]
        }
        function l(k) {
            if (k.length === 0)
                return null;
            var K = k[0]
              , oe = k.pop();
            if (oe !== K) {
                k[0] = oe;
                e: for (var ze = 0, De = k.length, O = De >>> 1; ze < O; ) {
                    var Y = 2 * (ze + 1) - 1
                      , F = k[Y]
                      , ee = Y + 1
                      , le = k[ee];
                    if (0 > u(F, oe))
                        ee < De && 0 > u(le, F) ? (k[ze] = le,
                        k[ee] = oe,
                        ze = ee) : (k[ze] = F,
                        k[Y] = oe,
                        ze = Y);
                    else if (ee < De && 0 > u(le, oe))
                        k[ze] = le,
                        k[ee] = oe,
                        ze = ee;
                    else
                        break e
                }
            }
            return K
        }
        function u(k, K) {
            var oe = k.sortIndex - K.sortIndex;
            return oe !== 0 ? oe : k.id - K.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , h = d.now();
            n.unstable_now = function() {
                return d.now() - h
            }
        }
        var y = []
          , p = []
          , v = 1
          , g = null
          , _ = 3
          , x = !1
          , R = !1
          , N = !1
          , w = !1
          , A = typeof setTimeout == "function" ? setTimeout : null
          , B = typeof clearTimeout == "function" ? clearTimeout : null
          , Z = typeof setImmediate < "u" ? setImmediate : null;
        function H(k) {
            for (var K = s(p); K !== null; ) {
                if (K.callback === null)
                    l(p);
                else if (K.startTime <= k)
                    l(p),
                    K.sortIndex = K.expirationTime,
                    a(y, K);
                else
                    break;
                K = s(p)
            }
        }
        function $(k) {
            if (N = !1,
            H(k),
            !R)
                if (s(y) !== null)
                    R = !0,
                    I || (I = !0,
                    _e());
                else {
                    var K = s(p);
                    K !== null && Qe($, K.startTime - k)
                }
        }
        var I = !1
          , Q = -1
          , X = 5
          , W = -1;
        function ce() {
            return w ? !0 : !(n.unstable_now() - W < X)
        }
        function re() {
            if (w = !1,
            I) {
                var k = n.unstable_now();
                W = k;
                var K = !0;
                try {
                    e: {
                        R = !1,
                        N && (N = !1,
                        B(Q),
                        Q = -1),
                        x = !0;
                        var oe = _;
                        try {
                            t: {
                                for (H(k),
                                g = s(y); g !== null && !(g.expirationTime > k && ce()); ) {
                                    var ze = g.callback;
                                    if (typeof ze == "function") {
                                        g.callback = null,
                                        _ = g.priorityLevel;
                                        var De = ze(g.expirationTime <= k);
                                        if (k = n.unstable_now(),
                                        typeof De == "function") {
                                            g.callback = De,
                                            H(k),
                                            K = !0;
                                            break t
                                        }
                                        g === s(y) && l(y),
                                        H(k)
                                    } else
                                        l(y);
                                    g = s(y)
                                }
                                if (g !== null)
                                    K = !0;
                                else {
                                    var O = s(p);
                                    O !== null && Qe($, O.startTime - k),
                                    K = !1
                                }
                            }
                            break e
                        } finally {
                            g = null,
                            _ = oe,
                            x = !1
                        }
                        K = void 0
                    }
                } finally {
                    K ? _e() : I = !1
                }
            }
        }
        var _e;
        if (typeof Z == "function")
            _e = function() {
                Z(re)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Le = new MessageChannel
              , $e = Le.port2;
            Le.port1.onmessage = re,
            _e = function() {
                $e.postMessage(null)
            }
        } else
            _e = function() {
                A(re, 0)
            }
            ;
        function Qe(k, K) {
            Q = A(function() {
                k(n.unstable_now())
            }, K)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(k) {
            k.callback = null
        }
        ,
        n.unstable_forceFrameRate = function(k) {
            0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < k ? Math.floor(1e3 / k) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return _
        }
        ,
        n.unstable_next = function(k) {
            switch (_) {
            case 1:
            case 2:
            case 3:
                var K = 3;
                break;
            default:
                K = _
            }
            var oe = _;
            _ = K;
            try {
                return k()
            } finally {
                _ = oe
            }
        }
        ,
        n.unstable_requestPaint = function() {
            w = !0
        }
        ,
        n.unstable_runWithPriority = function(k, K) {
            switch (k) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                k = 3
            }
            var oe = _;
            _ = k;
            try {
                return K()
            } finally {
                _ = oe
            }
        }
        ,
        n.unstable_scheduleCallback = function(k, K, oe) {
            var ze = n.unstable_now();
            switch (typeof oe == "object" && oe !== null ? (oe = oe.delay,
            oe = typeof oe == "number" && 0 < oe ? ze + oe : ze) : oe = ze,
            k) {
            case 1:
                var De = -1;
                break;
            case 2:
                De = 250;
                break;
            case 5:
                De = 1073741823;
                break;
            case 4:
                De = 1e4;
                break;
            default:
                De = 5e3
            }
            return De = oe + De,
            k = {
                id: v++,
                callback: K,
                priorityLevel: k,
                startTime: oe,
                expirationTime: De,
                sortIndex: -1
            },
            oe > ze ? (k.sortIndex = oe,
            a(p, k),
            s(y) === null && k === s(p) && (N ? (B(Q),
            Q = -1) : N = !0,
            Qe($, oe - ze))) : (k.sortIndex = De,
            a(y, k),
            R || x || (R = !0,
            I || (I = !0,
            _e()))),
            k
        }
        ,
        n.unstable_shouldYield = ce,
        n.unstable_wrapCallback = function(k) {
            var K = _;
            return function() {
                var oe = _;
                _ = K;
                try {
                    return k.apply(this, arguments)
                } finally {
                    _ = oe
                }
            }
        }
    }
    )(Qc)),
    Qc
}
var Gp;
function cS() {
    return Gp || (Gp = 1,
    Gc.exports = oS()),
    Gc.exports
}
var Xc = {
    exports: {}
}
  , xt = {};
var Qp;
function fS() {
    if (Qp)
        return xt;
    Qp = 1;
    var n = Cr();
    function a(y) {
        var p = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++)
                p += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + y + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s() {}
    var l = {
        d: {
            f: s,
            r: function() {
                throw Error(a(522))
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s
        },
        p: 0,
        findDOMNode: null
    }
      , u = Symbol.for("react.portal");
    function f(y, p, v) {
        var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: g == null ? null : "" + g,
            children: y,
            containerInfo: p,
            implementation: v
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(y, p) {
        if (y === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l,
    xt.createPortal = function(y, p) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(a(299));
        return f(y, p, null, v)
    }
    ,
    xt.flushSync = function(y) {
        var p = d.T
          , v = l.p;
        try {
            if (d.T = null,
            l.p = 2,
            y)
                return y()
        } finally {
            d.T = p,
            l.p = v,
            l.d.f()
        }
    }
    ,
    xt.preconnect = function(y, p) {
        typeof y == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        l.d.C(y, p))
    }
    ,
    xt.prefetchDNS = function(y) {
        typeof y == "string" && l.d.D(y)
    }
    ,
    xt.preinit = function(y, p) {
        if (typeof y == "string" && p && typeof p.as == "string") {
            var v = p.as
              , g = h(v, p.crossOrigin)
              , _ = typeof p.integrity == "string" ? p.integrity : void 0
              , x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            v === "style" ? l.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: g,
                integrity: _,
                fetchPriority: x
            }) : v === "script" && l.d.X(y, {
                crossOrigin: g,
                integrity: _,
                fetchPriority: x,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    xt.preinitModule = function(y, p) {
        if (typeof y == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var v = h(p.as, p.crossOrigin);
                    l.d.M(y, {
                        crossOrigin: v,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && l.d.M(y)
    }
    ,
    xt.preload = function(y, p) {
        if (typeof y == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var v = p.as
              , g = h(v, p.crossOrigin);
            l.d.L(y, v, {
                crossOrigin: g,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    xt.preloadModule = function(y, p) {
        if (typeof y == "string")
            if (p) {
                var v = h(p.as, p.crossOrigin);
                l.d.m(y, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: v,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                l.d.m(y)
    }
    ,
    xt.requestFormReset = function(y) {
        l.d.r(y)
    }
    ,
    xt.unstable_batchedUpdates = function(y, p) {
        return y(p)
    }
    ,
    xt.useFormState = function(y, p, v) {
        return d.H.useFormState(y, p, v)
    }
    ,
    xt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    xt.version = "19.2.5",
    xt
}
var Xp;
function dg() {
    if (Xp)
        return Xc.exports;
    Xp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (a) {
                console.error(a)
            }
    }
    return n(),
    Xc.exports = fS(),
    Xc.exports
}
var Pp;
function dS() {
    if (Pp)
        return cr;
    Pp = 1;
    var n = cS()
      , a = Cr()
      , s = dg();
    function l(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var i = 2; i < arguments.length; i++)
                t += "&args[]=" + encodeURIComponent(arguments[i])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function f(e) {
        var t = e
          , i = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (i = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? i : null
    }
    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function h(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function y(e) {
        if (f(e) !== e)
            throw Error(l(188))
    }
    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e),
            t === null)
                throw Error(l(188));
            return t !== e ? null : e
        }
        for (var i = e, r = t; ; ) {
            var o = i.return;
            if (o === null)
                break;
            var c = o.alternate;
            if (c === null) {
                if (r = o.return,
                r !== null) {
                    i = r;
                    continue
                }
                break
            }
            if (o.child === c.child) {
                for (c = o.child; c; ) {
                    if (c === i)
                        return y(o),
                        e;
                    if (c === r)
                        return y(o),
                        t;
                    c = c.sibling
                }
                throw Error(l(188))
            }
            if (i.return !== r.return)
                i = o,
                r = c;
            else {
                for (var m = !1, b = o.child; b; ) {
                    if (b === i) {
                        m = !0,
                        i = o,
                        r = c;
                        break
                    }
                    if (b === r) {
                        m = !0,
                        r = o,
                        i = c;
                        break
                    }
                    b = b.sibling
                }
                if (!m) {
                    for (b = c.child; b; ) {
                        if (b === i) {
                            m = !0,
                            i = c,
                            r = o;
                            break
                        }
                        if (b === r) {
                            m = !0,
                            r = c,
                            i = o;
                            break
                        }
                        b = b.sibling
                    }
                    if (!m)
                        throw Error(l(189))
                }
            }
            if (i.alternate !== r)
                throw Error(l(190))
        }
        if (i.tag !== 3)
            throw Error(l(188));
        return i.stateNode.current === i ? e : t
    }
    function v(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = v(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var g = Object.assign
      , _ = Symbol.for("react.element")
      , x = Symbol.for("react.transitional.element")
      , R = Symbol.for("react.portal")
      , N = Symbol.for("react.fragment")
      , w = Symbol.for("react.strict_mode")
      , A = Symbol.for("react.profiler")
      , B = Symbol.for("react.consumer")
      , Z = Symbol.for("react.context")
      , H = Symbol.for("react.forward_ref")
      , $ = Symbol.for("react.suspense")
      , I = Symbol.for("react.suspense_list")
      , Q = Symbol.for("react.memo")
      , X = Symbol.for("react.lazy")
      , W = Symbol.for("react.activity")
      , ce = Symbol.for("react.memo_cache_sentinel")
      , re = Symbol.iterator;
    function _e(e) {
        return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var Le = Symbol.for("react.client.reference");
    function $e(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === Le ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case N:
            return "Fragment";
        case A:
            return "Profiler";
        case w:
            return "StrictMode";
        case $:
            return "Suspense";
        case I:
            return "SuspenseList";
        case W:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case R:
                return "Portal";
            case Z:
                return e.displayName || "Context";
            case B:
                return (e._context.displayName || "Context") + ".Consumer";
            case H:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case Q:
                return t = e.displayName || null,
                t !== null ? t : $e(e.type) || "Memo";
            case X:
                t = e._payload,
                e = e._init;
                try {
                    return $e(e(t))
                } catch {}
            }
        return null
    }
    var Qe = Array.isArray
      , k = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , K = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , oe = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ze = []
      , De = -1;
    function O(e) {
        return {
            current: e
        }
    }
    function Y(e) {
        0 > De || (e.current = ze[De],
        ze[De] = null,
        De--)
    }
    function F(e, t) {
        De++,
        ze[De] = e.current,
        e.current = t
    }
    var ee = O(null)
      , le = O(null)
      , ge = O(null)
      , Ae = O(null);
    function We(e, t) {
        switch (F(ge, t),
        F(le, e),
        F(ee, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = up(t),
                e = op(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        Y(ee),
        F(ee, e)
    }
    function Ze() {
        Y(ee),
        Y(le),
        Y(ge)
    }
    function bn(e) {
        e.memoizedState !== null && F(Ae, e);
        var t = ee.current
          , i = op(t, e.type);
        t !== i && (F(le, e),
        F(ee, i))
    }
    function Sn(e) {
        le.current === e && (Y(ee),
        Y(le)),
        Ae.current === e && (Y(Ae),
        sr._currentValue = oe)
    }
    var Xn, ms;
    function cn(e) {
        if (Xn === void 0)
            try {
                throw Error()
            } catch (i) {
                var t = i.stack.trim().match(/\n( *(at )?)/);
                Xn = t && t[1] || "",
                ms = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Xn + e + ms
    }
    var ps = !1;
    function hi(e, t) {
        if (!e || ps)
            return "";
        ps = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var G = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(G.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(G, [])
                                } catch (U) {
                                    var L = U
                                }
                                Reflect.construct(e, [], G)
                            } else {
                                try {
                                    G.call()
                                } catch (U) {
                                    L = U
                                }
                                e.call(G.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (U) {
                                L = U
                            }
                            (G = e()) && typeof G.catch == "function" && G.catch(function() {})
                        }
                    } catch (U) {
                        if (U && L && typeof U.stack == "string")
                            return [U.stack, L.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = r.DetermineComponentFrameRoot()
              , m = c[0]
              , b = c[1];
            if (m && b) {
                var E = m.split(`
`)
                  , D = b.split(`
`);
                for (o = r = 0; r < E.length && !E[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                for (; o < D.length && !D[o].includes("DetermineComponentFrameRoot"); )
                    o++;
                if (r === E.length || o === D.length)
                    for (r = E.length - 1,
                    o = D.length - 1; 1 <= r && 0 <= o && E[r] !== D[o]; )
                        o--;
                for (; 1 <= r && 0 <= o; r--,
                o--)
                    if (E[r] !== D[o]) {
                        if (r !== 1 || o !== 1)
                            do
                                if (r--,
                                o--,
                                0 > o || E[r] !== D[o]) {
                                    var q = `
` + E[r].replace(" at new ", " at ");
                                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)),
                                    q
                                }
                            while (1 <= r && 0 <= o);
                        break
                    }
            }
        } finally {
            ps = !1,
            Error.prepareStackTrace = i
        }
        return (i = e ? e.displayName || e.name : "") ? cn(i) : ""
    }
    function Mr(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return cn(e.type);
        case 16:
            return cn("Lazy");
        case 13:
            return e.child !== t && t !== null ? cn("Suspense Fallback") : cn("Suspense");
        case 19:
            return cn("SuspenseList");
        case 0:
        case 15:
            return hi(e.type, !1);
        case 11:
            return hi(e.type.render, !1);
        case 1:
            return hi(e.type, !0);
        case 31:
            return cn("Activity");
        default:
            return ""
        }
    }
    function _n(e) {
        try {
            var t = ""
              , i = null;
            do
                t += Mr(e, i),
                i = e,
                e = e.return;
            while (e);
            return t
        } catch (r) {
            return `
Error generating stack: ` + r.message + `
` + r.stack
        }
    }
    var Da = Object.prototype.hasOwnProperty
      , an = n.unstable_scheduleCallback
      , ys = n.unstable_cancelCallback
      , Nr = n.unstable_shouldYield
      , Tu = n.unstable_requestPaint
      , _t = n.unstable_now
      , Ge = n.unstable_getCurrentPriorityLevel
      , mt = n.unstable_ImmediatePriority
      , fn = n.unstable_UserBlockingPriority
      , mi = n.unstable_NormalPriority
      , qv = n.unstable_LowPriority
      , Vf = n.unstable_IdlePriority
      , Zv = n.log
      , Vv = n.unstable_setDisableYieldValue
      , gs = null
      , Ut = null;
    function Pn(e) {
        if (typeof Zv == "function" && Vv(e),
        Ut && typeof Ut.setStrictMode == "function")
            try {
                Ut.setStrictMode(gs, e)
            } catch {}
    }
    var kt = Math.clz32 ? Math.clz32 : Qv
      , Yv = Math.log
      , Gv = Math.LN2;
    function Qv(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Yv(e) / Gv | 0) | 0
    }
    var zr = 256
      , jr = 262144
      , Dr = 4194304;
    function La(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function Lr(e, t, i) {
        var r = e.pendingLanes;
        if (r === 0)
            return 0;
        var o = 0
          , c = e.suspendedLanes
          , m = e.pingedLanes;
        e = e.warmLanes;
        var b = r & 134217727;
        return b !== 0 ? (r = b & ~c,
        r !== 0 ? o = La(r) : (m &= b,
        m !== 0 ? o = La(m) : i || (i = b & ~e,
        i !== 0 && (o = La(i))))) : (b = r & ~c,
        b !== 0 ? o = La(b) : m !== 0 ? o = La(m) : i || (i = r & ~e,
        i !== 0 && (o = La(i)))),
        o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o,
        i = t & -t,
        c >= i || c === 32 && (i & 4194048) !== 0) ? t : o
    }
    function vs(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Xv(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Yf() {
        var e = Dr;
        return Dr <<= 1,
        (Dr & 62914560) === 0 && (Dr = 4194304),
        e
    }
    function Cu(e) {
        for (var t = [], i = 0; 31 > i; i++)
            t.push(e);
        return t
    }
    function bs(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Pv(e, t, i, r, o, c) {
        var m = e.pendingLanes;
        e.pendingLanes = i,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= i,
        e.entangledLanes &= i,
        e.errorRecoveryDisabledLanes &= i,
        e.shellSuspendCounter = 0;
        var b = e.entanglements
          , E = e.expirationTimes
          , D = e.hiddenUpdates;
        for (i = m & ~i; 0 < i; ) {
            var q = 31 - kt(i)
              , G = 1 << q;
            b[q] = 0,
            E[q] = -1;
            var L = D[q];
            if (L !== null)
                for (D[q] = null,
                q = 0; q < L.length; q++) {
                    var U = L[q];
                    U !== null && (U.lane &= -536870913)
                }
            i &= ~G
        }
        r !== 0 && Gf(e, r, 0),
        c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(m & ~t))
    }
    function Gf(e, t, i) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var r = 31 - kt(t);
        e.entangledLanes |= t,
        e.entanglements[r] = e.entanglements[r] | 1073741824 | i & 261930
    }
    function Qf(e, t) {
        var i = e.entangledLanes |= t;
        for (e = e.entanglements; i; ) {
            var r = 31 - kt(i)
              , o = 1 << r;
            o & t | e[r] & t && (e[r] |= t),
            i &= ~o
        }
    }
    function Xf(e, t) {
        var i = t & -t;
        return i = (i & 42) !== 0 ? 1 : Ou(i),
        (i & (e.suspendedLanes | t)) !== 0 ? 0 : i
    }
    function Ou(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Mu(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Pf() {
        var e = K.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : zp(e.type))
    }
    function Kf(e, t) {
        var i = K.p;
        try {
            return K.p = e,
            t()
        } finally {
            K.p = i
        }
    }
    var Kn = Math.random().toString(36).slice(2)
      , pt = "__reactFiber$" + Kn
      , At = "__reactProps$" + Kn
      , pi = "__reactContainer$" + Kn
      , Nu = "__reactEvents$" + Kn
      , Kv = "__reactListeners$" + Kn
      , Fv = "__reactHandles$" + Kn
      , Ff = "__reactResources$" + Kn
      , Ss = "__reactMarker$" + Kn;
    function zu(e) {
        delete e[pt],
        delete e[At],
        delete e[Nu],
        delete e[Kv],
        delete e[Fv]
    }
    function yi(e) {
        var t = e[pt];
        if (t)
            return t;
        for (var i = e.parentNode; i; ) {
            if (t = i[pi] || i[pt]) {
                if (i = t.alternate,
                t.child !== null || i !== null && i.child !== null)
                    for (e = yp(e); e !== null; ) {
                        if (i = e[pt])
                            return i;
                        e = yp(e)
                    }
                return t
            }
            e = i,
            i = e.parentNode
        }
        return null
    }
    function gi(e) {
        if (e = e[pt] || e[pi]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function _s(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(l(33))
    }
    function vi(e) {
        var t = e[Ff];
        return t || (t = e[Ff] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function ft(e) {
        e[Ss] = !0
    }
    var If = new Set
      , Jf = {};
    function Ua(e, t) {
        bi(e, t),
        bi(e + "Capture", t)
    }
    function bi(e, t) {
        for (Jf[e] = t,
        e = 0; e < t.length; e++)
            If.add(t[e])
    }
    var Iv = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , $f = {}
      , Wf = {};
    function Jv(e) {
        return Da.call(Wf, e) ? !0 : Da.call($f, e) ? !1 : Iv.test(e) ? Wf[e] = !0 : ($f[e] = !0,
        !1)
    }
    function Ur(e, t, i) {
        if (Jv(t))
            if (i === null)
                e.removeAttribute(t);
            else {
                switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var r = t.toLowerCase().slice(0, 5);
                    if (r !== "data-" && r !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + i)
            }
    }
    function kr(e, t, i) {
        if (i === null)
            e.removeAttribute(t);
        else {
            switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + i)
        }
    }
    function xn(e, t, i, r) {
        if (r === null)
            e.removeAttribute(i);
        else {
            switch (typeof r) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(i);
                return
            }
            e.setAttributeNS(t, i, "" + r)
        }
    }
    function Xt(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function ed(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function $v(e, t, i) {
        var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
            var o = r.get
              , c = r.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(m) {
                    i = "" + m,
                    c.call(this, m)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: r.enumerable
            }),
            {
                getValue: function() {
                    return i
                },
                setValue: function(m) {
                    i = "" + m
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function ju(e) {
        if (!e._valueTracker) {
            var t = ed(e) ? "checked" : "value";
            e._valueTracker = $v(e, t, "" + e[t])
        }
    }
    function td(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var i = t.getValue()
          , r = "";
        return e && (r = ed(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== i ? (t.setValue(e),
        !0) : !1
    }
    function Br(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Wv = /[\n"\\]/g;
    function Pt(e) {
        return e.replace(Wv, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Du(e, t, i, r, o, c, m, b) {
        e.name = "",
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"),
        t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xt(t)) : e.value !== "" + Xt(t) && (e.value = "" + Xt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"),
        t != null ? Lu(e, m, Xt(t)) : i != null ? Lu(e, m, Xt(i)) : r != null && e.removeAttribute("value"),
        o == null && c != null && (e.defaultChecked = !!c),
        o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Xt(b) : e.removeAttribute("name")
    }
    function nd(e, t, i, r, o, c, m, b) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c),
        t != null || i != null) {
            if (!(c !== "submit" && c !== "reset" || t != null)) {
                ju(e);
                return
            }
            i = i != null ? "" + Xt(i) : "",
            t = t != null ? "" + Xt(t) : i,
            b || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        r = r ?? o,
        r = typeof r != "function" && typeof r != "symbol" && !!r,
        e.checked = b ? e.checked : !!r,
        e.defaultChecked = !!r,
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m),
        ju(e)
    }
    function Lu(e, t, i) {
        t === "number" && Br(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i)
    }
    function Si(e, t, i, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var o = 0; o < i.length; o++)
                t["$" + i[o]] = !0;
            for (i = 0; i < e.length; i++)
                o = t.hasOwnProperty("$" + e[i].value),
                e[i].selected !== o && (e[i].selected = o),
                o && r && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + Xt(i),
            t = null,
            o = 0; o < e.length; o++) {
                if (e[o].value === i) {
                    e[o].selected = !0,
                    r && (e[o].defaultSelected = !0);
                    return
                }
                t !== null || e[o].disabled || (t = e[o])
            }
            t !== null && (t.selected = !0)
        }
    }
    function ad(e, t, i) {
        if (t != null && (t = "" + Xt(t),
        t !== e.value && (e.value = t),
        i == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = i != null ? "" + Xt(i) : ""
    }
    function id(e, t, i, r) {
        if (t == null) {
            if (r != null) {
                if (i != null)
                    throw Error(l(92));
                if (Qe(r)) {
                    if (1 < r.length)
                        throw Error(l(93));
                    r = r[0]
                }
                i = r
            }
            i == null && (i = ""),
            t = i
        }
        i = Xt(t),
        e.defaultValue = i,
        r = e.textContent,
        r === i && r !== "" && r !== null && (e.value = r),
        ju(e)
    }
    function _i(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var e0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function sd(e, t, i) {
        var r = t.indexOf("--") === 0;
        i == null || typeof i == "boolean" || i === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, i) : typeof i != "number" || i === 0 || e0.has(t) ? t === "float" ? e.cssFloat = i : e[t] = ("" + i).trim() : e[t] = i + "px"
    }
    function rd(e, t, i) {
        if (t != null && typeof t != "object")
            throw Error(l(62));
        if (e = e.style,
        i != null) {
            for (var r in i)
                !i.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
            for (var o in t)
                r = t[o],
                t.hasOwnProperty(o) && i[o] !== r && sd(e, o, r)
        } else
            for (var c in t)
                t.hasOwnProperty(c) && sd(e, c, t[c])
    }
    function Uu(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var t0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , n0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Hr(e) {
        return n0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function wn() {}
    var ku = null;
    function Bu(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var xi = null
      , wi = null;
    function ld(e) {
        var t = gi(e);
        if (t && (e = t.stateNode)) {
            var i = e[At] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Du(e, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name),
                t = i.name,
                i.type === "radio" && t != null) {
                    for (i = e; i.parentNode; )
                        i = i.parentNode;
                    for (i = i.querySelectorAll('input[name="' + Pt("" + t) + '"][type="radio"]'),
                    t = 0; t < i.length; t++) {
                        var r = i[t];
                        if (r !== e && r.form === e.form) {
                            var o = r[At] || null;
                            if (!o)
                                throw Error(l(90));
                            Du(r, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
                        }
                    }
                    for (t = 0; t < i.length; t++)
                        r = i[t],
                        r.form === e.form && td(r)
                }
                break e;
            case "textarea":
                ad(e, i.value, i.defaultValue);
                break e;
            case "select":
                t = i.value,
                t != null && Si(e, !!i.multiple, t, !1)
            }
        }
    }
    var Hu = !1;
    function ud(e, t, i) {
        if (Hu)
            return e(t, i);
        Hu = !0;
        try {
            var r = e(t);
            return r
        } finally {
            if (Hu = !1,
            (xi !== null || wi !== null) && (Al(),
            xi && (t = xi,
            e = wi,
            wi = xi = null,
            ld(t),
            e)))
                for (t = 0; t < e.length; t++)
                    ld(e[t])
        }
    }
    function xs(e, t) {
        var i = e.stateNode;
        if (i === null)
            return null;
        var r = i[At] || null;
        if (r === null)
            return null;
        i = r[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
            r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !r;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (i && typeof i != "function")
            throw Error(l(231, t, typeof i));
        return i
    }
    var En = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , qu = !1;
    if (En)
        try {
            var ws = {};
            Object.defineProperty(ws, "passive", {
                get: function() {
                    qu = !0
                }
            }),
            window.addEventListener("test", ws, ws),
            window.removeEventListener("test", ws, ws)
        } catch {
            qu = !1
        }
    var Fn = null
      , Zu = null
      , qr = null;
    function od() {
        if (qr)
            return qr;
        var e, t = Zu, i = t.length, r, o = "value"in Fn ? Fn.value : Fn.textContent, c = o.length;
        for (e = 0; e < i && t[e] === o[e]; e++)
            ;
        var m = i - e;
        for (r = 1; r <= m && t[i - r] === o[c - r]; r++)
            ;
        return qr = o.slice(e, 1 < r ? 1 - r : void 0)
    }
    function Zr(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Vr() {
        return !0
    }
    function cd() {
        return !1
    }
    function Tt(e) {
        function t(i, r, o, c, m) {
            this._reactName = i,
            this._targetInst = o,
            this.type = r,
            this.nativeEvent = c,
            this.target = m,
            this.currentTarget = null;
            for (var b in e)
                e.hasOwnProperty(b) && (i = e[b],
                this[b] = i ? i(c) : c[b]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Vr : cd,
            this.isPropagationStopped = cd,
            this
        }
        return g(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1),
                this.isDefaultPrevented = Vr)
            },
            stopPropagation: function() {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
                this.isPropagationStopped = Vr)
            },
            persist: function() {},
            isPersistent: Vr
        }),
        t
    }
    var ka = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Yr = Tt(ka), Es = g({}, ka, {
        view: 0,
        detail: 0
    }), a0 = Tt(Es), Vu, Yu, Rs, Gr = g({}, Es, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Qu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Rs && (Rs && e.type === "mousemove" ? (Vu = e.screenX - Rs.screenX,
            Yu = e.screenY - Rs.screenY) : Yu = Vu = 0,
            Rs = e),
            Vu)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Yu
        }
    }), fd = Tt(Gr), i0 = g({}, Gr, {
        dataTransfer: 0
    }), s0 = Tt(i0), r0 = g({}, Es, {
        relatedTarget: 0
    }), Gu = Tt(r0), l0 = g({}, ka, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), u0 = Tt(l0), o0 = g({}, ka, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), c0 = Tt(o0), f0 = g({}, ka, {
        data: 0
    }), dd = Tt(f0), d0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, h0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, m0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function p0(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = m0[e]) ? !!t[e] : !1
    }
    function Qu() {
        return p0
    }
    var y0 = g({}, Es, {
        key: function(e) {
            if (e.key) {
                var t = d0[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Zr(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? h0[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Qu,
        charCode: function(e) {
            return e.type === "keypress" ? Zr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , g0 = Tt(y0)
      , v0 = g({}, Gr, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , hd = Tt(v0)
      , b0 = g({}, Es, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Qu
    })
      , S0 = Tt(b0)
      , _0 = g({}, ka, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , x0 = Tt(_0)
      , w0 = g({}, Gr, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , E0 = Tt(w0)
      , R0 = g({}, ka, {
        newState: 0,
        oldState: 0
    })
      , A0 = Tt(R0)
      , T0 = [9, 13, 27, 32]
      , Xu = En && "CompositionEvent"in window
      , As = null;
    En && "documentMode"in document && (As = document.documentMode);
    var C0 = En && "TextEvent"in window && !As
      , md = En && (!Xu || As && 8 < As && 11 >= As)
      , pd = " "
      , yd = !1;
    function gd(e, t) {
        switch (e) {
        case "keyup":
            return T0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function vd(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Ei = !1;
    function O0(e, t) {
        switch (e) {
        case "compositionend":
            return vd(t);
        case "keypress":
            return t.which !== 32 ? null : (yd = !0,
            pd);
        case "textInput":
            return e = t.data,
            e === pd && yd ? null : e;
        default:
            return null
        }
    }
    function M0(e, t) {
        if (Ei)
            return e === "compositionend" || !Xu && gd(e, t) ? (e = od(),
            qr = Zu = Fn = null,
            Ei = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return md && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var N0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function bd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!N0[e.type] : t === "textarea"
    }
    function Sd(e, t, i, r) {
        xi ? wi ? wi.push(r) : wi = [r] : xi = r,
        t = jl(t, "onChange"),
        0 < t.length && (i = new Yr("onChange","change",null,i,r),
        e.push({
            event: i,
            listeners: t
        }))
    }
    var Ts = null
      , Cs = null;
    function z0(e) {
        np(e, 0)
    }
    function Qr(e) {
        var t = _s(e);
        if (td(t))
            return e
    }
    function _d(e, t) {
        if (e === "change")
            return t
    }
    var xd = !1;
    if (En) {
        var Pu;
        if (En) {
            var Ku = "oninput"in document;
            if (!Ku) {
                var wd = document.createElement("div");
                wd.setAttribute("oninput", "return;"),
                Ku = typeof wd.oninput == "function"
            }
            Pu = Ku
        } else
            Pu = !1;
        xd = Pu && (!document.documentMode || 9 < document.documentMode)
    }
    function Ed() {
        Ts && (Ts.detachEvent("onpropertychange", Rd),
        Cs = Ts = null)
    }
    function Rd(e) {
        if (e.propertyName === "value" && Qr(Cs)) {
            var t = [];
            Sd(t, Cs, e, Bu(e)),
            ud(z0, t)
        }
    }
    function j0(e, t, i) {
        e === "focusin" ? (Ed(),
        Ts = t,
        Cs = i,
        Ts.attachEvent("onpropertychange", Rd)) : e === "focusout" && Ed()
    }
    function D0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Qr(Cs)
    }
    function L0(e, t) {
        if (e === "click")
            return Qr(t)
    }
    function U0(e, t) {
        if (e === "input" || e === "change")
            return Qr(t)
    }
    function k0(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Bt = typeof Object.is == "function" ? Object.is : k0;
    function Os(e, t) {
        if (Bt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var i = Object.keys(e)
          , r = Object.keys(t);
        if (i.length !== r.length)
            return !1;
        for (r = 0; r < i.length; r++) {
            var o = i[r];
            if (!Da.call(t, o) || !Bt(e[o], t[o]))
                return !1
        }
        return !0
    }
    function Ad(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Td(e, t) {
        var i = Ad(e);
        e = 0;
        for (var r; i; ) {
            if (i.nodeType === 3) {
                if (r = e + i.textContent.length,
                e <= t && r >= t)
                    return {
                        node: i,
                        offset: t - e
                    };
                e = r
            }
            e: {
                for (; i; ) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = Ad(i)
        }
    }
    function Cd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Od(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Br(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var i = typeof t.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i)
                e = t.contentWindow;
            else
                break;
            t = Br(e.document)
        }
        return t
    }
    function Fu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var B0 = En && "documentMode"in document && 11 >= document.documentMode
      , Ri = null
      , Iu = null
      , Ms = null
      , Ju = !1;
    function Md(e, t, i) {
        var r = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        Ju || Ri == null || Ri !== Br(r) || (r = Ri,
        "selectionStart"in r && Fu(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
        r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }),
        Ms && Os(Ms, r) || (Ms = r,
        r = jl(Iu, "onSelect"),
        0 < r.length && (t = new Yr("onSelect","select",null,t,i),
        e.push({
            event: t,
            listeners: r
        }),
        t.target = Ri)))
    }
    function Ba(e, t) {
        var i = {};
        return i[e.toLowerCase()] = t.toLowerCase(),
        i["Webkit" + e] = "webkit" + t,
        i["Moz" + e] = "moz" + t,
        i
    }
    var Ai = {
        animationend: Ba("Animation", "AnimationEnd"),
        animationiteration: Ba("Animation", "AnimationIteration"),
        animationstart: Ba("Animation", "AnimationStart"),
        transitionrun: Ba("Transition", "TransitionRun"),
        transitionstart: Ba("Transition", "TransitionStart"),
        transitioncancel: Ba("Transition", "TransitionCancel"),
        transitionend: Ba("Transition", "TransitionEnd")
    }
      , $u = {}
      , Nd = {};
    En && (Nd = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ai.animationend.animation,
    delete Ai.animationiteration.animation,
    delete Ai.animationstart.animation),
    "TransitionEvent"in window || delete Ai.transitionend.transition);
    function Ha(e) {
        if ($u[e])
            return $u[e];
        if (!Ai[e])
            return e;
        var t = Ai[e], i;
        for (i in t)
            if (t.hasOwnProperty(i) && i in Nd)
                return $u[e] = t[i];
        return e
    }
    var zd = Ha("animationend")
      , jd = Ha("animationiteration")
      , Dd = Ha("animationstart")
      , H0 = Ha("transitionrun")
      , q0 = Ha("transitionstart")
      , Z0 = Ha("transitioncancel")
      , Ld = Ha("transitionend")
      , Ud = new Map
      , Wu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Wu.push("scrollEnd");
    function sn(e, t) {
        Ud.set(e, t),
        Ua(t, [e])
    }
    var Xr = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , Kt = []
      , Ti = 0
      , eo = 0;
    function Pr() {
        for (var e = Ti, t = eo = Ti = 0; t < e; ) {
            var i = Kt[t];
            Kt[t++] = null;
            var r = Kt[t];
            Kt[t++] = null;
            var o = Kt[t];
            Kt[t++] = null;
            var c = Kt[t];
            if (Kt[t++] = null,
            r !== null && o !== null) {
                var m = r.pending;
                m === null ? o.next = o : (o.next = m.next,
                m.next = o),
                r.pending = o
            }
            c !== 0 && kd(i, o, c)
        }
    }
    function Kr(e, t, i, r) {
        Kt[Ti++] = e,
        Kt[Ti++] = t,
        Kt[Ti++] = i,
        Kt[Ti++] = r,
        eo |= r,
        e.lanes |= r,
        e = e.alternate,
        e !== null && (e.lanes |= r)
    }
    function to(e, t, i, r) {
        return Kr(e, t, i, r),
        Fr(e)
    }
    function qa(e, t) {
        return Kr(e, null, null, t),
        Fr(e)
    }
    function kd(e, t, i) {
        e.lanes |= i;
        var r = e.alternate;
        r !== null && (r.lanes |= i);
        for (var o = !1, c = e.return; c !== null; )
            c.childLanes |= i,
            r = c.alternate,
            r !== null && (r.childLanes |= i),
            c.tag === 22 && (e = c.stateNode,
            e === null || e._visibility & 1 || (o = !0)),
            e = c,
            c = c.return;
        return e.tag === 3 ? (c = e.stateNode,
        o && t !== null && (o = 31 - kt(i),
        e = c.hiddenUpdates,
        r = e[o],
        r === null ? e[o] = [t] : r.push(t),
        t.lane = i | 536870912),
        c) : null
    }
    function Fr(e) {
        if (50 < $s)
            throw $s = 0,
            fc = null,
            Error(l(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Ci = {};
    function V0(e, t, i, r) {
        this.tag = e,
        this.key = i,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Ht(e, t, i, r) {
        return new V0(e,t,i,r)
    }
    function no(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Rn(e, t) {
        var i = e.alternate;
        return i === null ? (i = Ht(e.tag, t, e.key, e.mode),
        i.elementType = e.elementType,
        i.type = e.type,
        i.stateNode = e.stateNode,
        i.alternate = e,
        e.alternate = i) : (i.pendingProps = t,
        i.type = e.type,
        i.flags = 0,
        i.subtreeFlags = 0,
        i.deletions = null),
        i.flags = e.flags & 65011712,
        i.childLanes = e.childLanes,
        i.lanes = e.lanes,
        i.child = e.child,
        i.memoizedProps = e.memoizedProps,
        i.memoizedState = e.memoizedState,
        i.updateQueue = e.updateQueue,
        t = e.dependencies,
        i.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        i.sibling = e.sibling,
        i.index = e.index,
        i.ref = e.ref,
        i.refCleanup = e.refCleanup,
        i
    }
    function Bd(e, t) {
        e.flags &= 65011714;
        var i = e.alternate;
        return i === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = i.childLanes,
        e.lanes = i.lanes,
        e.child = i.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = i.memoizedProps,
        e.memoizedState = i.memoizedState,
        e.updateQueue = i.updateQueue,
        e.type = i.type,
        t = i.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Ir(e, t, i, r, o, c) {
        var m = 0;
        if (r = e,
        typeof e == "function")
            no(e) && (m = 1);
        else if (typeof e == "string")
            m = Pb(e, i, ee.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case W:
                return e = Ht(31, i, t, o),
                e.elementType = W,
                e.lanes = c,
                e;
            case N:
                return Za(i.children, o, c, t);
            case w:
                m = 8,
                o |= 24;
                break;
            case A:
                return e = Ht(12, i, t, o | 2),
                e.elementType = A,
                e.lanes = c,
                e;
            case $:
                return e = Ht(13, i, t, o),
                e.elementType = $,
                e.lanes = c,
                e;
            case I:
                return e = Ht(19, i, t, o),
                e.elementType = I,
                e.lanes = c,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case Z:
                        m = 10;
                        break e;
                    case B:
                        m = 9;
                        break e;
                    case H:
                        m = 11;
                        break e;
                    case Q:
                        m = 14;
                        break e;
                    case X:
                        m = 16,
                        r = null;
                        break e
                    }
                m = 29,
                i = Error(l(130, e === null ? "null" : typeof e, "")),
                r = null
            }
        return t = Ht(m, i, t, o),
        t.elementType = e,
        t.type = r,
        t.lanes = c,
        t
    }
    function Za(e, t, i, r) {
        return e = Ht(7, e, r, t),
        e.lanes = i,
        e
    }
    function ao(e, t, i) {
        return e = Ht(6, e, null, t),
        e.lanes = i,
        e
    }
    function Hd(e) {
        var t = Ht(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function io(e, t, i) {
        return t = Ht(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = i,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var qd = new WeakMap;
    function Ft(e, t) {
        if (typeof e == "object" && e !== null) {
            var i = qd.get(e);
            return i !== void 0 ? i : (t = {
                value: e,
                source: t,
                stack: _n(t)
            },
            qd.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: _n(t)
        }
    }
    var Oi = []
      , Mi = 0
      , Jr = null
      , Ns = 0
      , It = []
      , Jt = 0
      , In = null
      , dn = 1
      , hn = "";
    function An(e, t) {
        Oi[Mi++] = Ns,
        Oi[Mi++] = Jr,
        Jr = e,
        Ns = t
    }
    function Zd(e, t, i) {
        It[Jt++] = dn,
        It[Jt++] = hn,
        It[Jt++] = In,
        In = e;
        var r = dn;
        e = hn;
        var o = 32 - kt(r) - 1;
        r &= ~(1 << o),
        i += 1;
        var c = 32 - kt(t) + o;
        if (30 < c) {
            var m = o - o % 5;
            c = (r & (1 << m) - 1).toString(32),
            r >>= m,
            o -= m,
            dn = 1 << 32 - kt(t) + o | i << o | r,
            hn = c + e
        } else
            dn = 1 << c | i << o | r,
            hn = e
    }
    function so(e) {
        e.return !== null && (An(e, 1),
        Zd(e, 1, 0))
    }
    function ro(e) {
        for (; e === Jr; )
            Jr = Oi[--Mi],
            Oi[Mi] = null,
            Ns = Oi[--Mi],
            Oi[Mi] = null;
        for (; e === In; )
            In = It[--Jt],
            It[Jt] = null,
            hn = It[--Jt],
            It[Jt] = null,
            dn = It[--Jt],
            It[Jt] = null
    }
    function Vd(e, t) {
        It[Jt++] = dn,
        It[Jt++] = hn,
        It[Jt++] = In,
        dn = t.id,
        hn = t.overflow,
        In = e
    }
    var yt = null
      , Xe = null
      , Ee = !1
      , Jn = null
      , $t = !1
      , lo = Error(l(519));
    function $n(e) {
        var t = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw zs(Ft(t, e)),
        lo
    }
    function Yd(e) {
        var t = e.stateNode
          , i = e.type
          , r = e.memoizedProps;
        switch (t[pt] = e,
        t[At] = r,
        i) {
        case "dialog":
            Se("cancel", t),
            Se("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            Se("load", t);
            break;
        case "video":
        case "audio":
            for (i = 0; i < er.length; i++)
                Se(er[i], t);
            break;
        case "source":
            Se("error", t);
            break;
        case "img":
        case "image":
        case "link":
            Se("error", t),
            Se("load", t);
            break;
        case "details":
            Se("toggle", t);
            break;
        case "input":
            Se("invalid", t),
            nd(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
            break;
        case "select":
            Se("invalid", t);
            break;
        case "textarea":
            Se("invalid", t),
            id(t, r.value, r.defaultValue, r.children)
        }
        i = r.children,
        typeof i != "string" && typeof i != "number" && typeof i != "bigint" || t.textContent === "" + i || r.suppressHydrationWarning === !0 || rp(t.textContent, i) ? (r.popover != null && (Se("beforetoggle", t),
        Se("toggle", t)),
        r.onScroll != null && Se("scroll", t),
        r.onScrollEnd != null && Se("scrollend", t),
        r.onClick != null && (t.onclick = wn),
        t = !0) : t = !1,
        t || $n(e, !0)
    }
    function Gd(e) {
        for (yt = e.return; yt; )
            switch (yt.tag) {
            case 5:
            case 31:
            case 13:
                $t = !1;
                return;
            case 27:
            case 3:
                $t = !0;
                return;
            default:
                yt = yt.return
            }
    }
    function Ni(e) {
        if (e !== yt)
            return !1;
        if (!Ee)
            return Gd(e),
            Ee = !0,
            !1;
        var t = e.tag, i;
        if ((i = t !== 3 && t !== 27) && ((i = t === 5) && (i = e.type,
        i = !(i !== "form" && i !== "button") || Ac(e.type, e.memoizedProps)),
        i = !i),
        i && Xe && $n(e),
        Gd(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(l(317));
            Xe = pp(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(l(317));
            Xe = pp(e)
        } else
            t === 27 ? (t = Xe,
            da(e.type) ? (e = Nc,
            Nc = null,
            Xe = e) : Xe = t) : Xe = yt ? en(e.stateNode.nextSibling) : null;
        return !0
    }
    function Va() {
        Xe = yt = null,
        Ee = !1
    }
    function uo() {
        var e = Jn;
        return e !== null && (Nt === null ? Nt = e : Nt.push.apply(Nt, e),
        Jn = null),
        e
    }
    function zs(e) {
        Jn === null ? Jn = [e] : Jn.push(e)
    }
    var oo = O(null)
      , Ya = null
      , Tn = null;
    function Wn(e, t, i) {
        F(oo, t._currentValue),
        t._currentValue = i
    }
    function Cn(e) {
        e._currentValue = oo.current,
        Y(oo)
    }
    function co(e, t, i) {
        for (; e !== null; ) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === i)
                break;
            e = e.return
        }
    }
    function fo(e, t, i, r) {
        var o = e.child;
        for (o !== null && (o.return = e); o !== null; ) {
            var c = o.dependencies;
            if (c !== null) {
                var m = o.child;
                c = c.firstContext;
                e: for (; c !== null; ) {
                    var b = c;
                    c = o;
                    for (var E = 0; E < t.length; E++)
                        if (b.context === t[E]) {
                            c.lanes |= i,
                            b = c.alternate,
                            b !== null && (b.lanes |= i),
                            co(c.return, i, e),
                            r || (m = null);
                            break e
                        }
                    c = b.next
                }
            } else if (o.tag === 18) {
                if (m = o.return,
                m === null)
                    throw Error(l(341));
                m.lanes |= i,
                c = m.alternate,
                c !== null && (c.lanes |= i),
                co(m, i, e),
                m = null
            } else
                m = o.child;
            if (m !== null)
                m.return = o;
            else
                for (m = o; m !== null; ) {
                    if (m === e) {
                        m = null;
                        break
                    }
                    if (o = m.sibling,
                    o !== null) {
                        o.return = m.return,
                        m = o;
                        break
                    }
                    m = m.return
                }
            o = m
        }
    }
    function zi(e, t, i, r) {
        e = null;
        for (var o = t, c = !1; o !== null; ) {
            if (!c) {
                if ((o.flags & 524288) !== 0)
                    c = !0;
                else if ((o.flags & 262144) !== 0)
                    break
            }
            if (o.tag === 10) {
                var m = o.alternate;
                if (m === null)
                    throw Error(l(387));
                if (m = m.memoizedProps,
                m !== null) {
                    var b = o.type;
                    Bt(o.pendingProps.value, m.value) || (e !== null ? e.push(b) : e = [b])
                }
            } else if (o === Ae.current) {
                if (m = o.alternate,
                m === null)
                    throw Error(l(387));
                m.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(sr) : e = [sr])
            }
            o = o.return
        }
        e !== null && fo(t, e, i, r),
        t.flags |= 262144
    }
    function $r(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Bt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Ga(e) {
        Ya = e,
        Tn = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function gt(e) {
        return Qd(Ya, e)
    }
    function Wr(e, t) {
        return Ya === null && Ga(e),
        Qd(e, t)
    }
    function Qd(e, t) {
        var i = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: i,
            next: null
        },
        Tn === null) {
            if (e === null)
                throw Error(l(308));
            Tn = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Tn = Tn.next = t;
        return i
    }
    var Y0 = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(i, r) {
                e.push(r)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(i) {
                return i()
            })
        }
    }
      , G0 = n.unstable_scheduleCallback
      , Q0 = n.unstable_NormalPriority
      , nt = {
        $$typeof: Z,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function ho() {
        return {
            controller: new Y0,
            data: new Map,
            refCount: 0
        }
    }
    function js(e) {
        e.refCount--,
        e.refCount === 0 && G0(Q0, function() {
            e.controller.abort()
        })
    }
    var Ds = null
      , mo = 0
      , ji = 0
      , Di = null;
    function X0(e, t) {
        if (Ds === null) {
            var i = Ds = [];
            mo = 0,
            ji = gc(),
            Di = {
                status: "pending",
                value: void 0,
                then: function(r) {
                    i.push(r)
                }
            }
        }
        return mo++,
        t.then(Xd, Xd),
        t
    }
    function Xd() {
        if (--mo === 0 && Ds !== null) {
            Di !== null && (Di.status = "fulfilled");
            var e = Ds;
            Ds = null,
            ji = 0,
            Di = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function P0(e, t) {
        var i = []
          , r = {
            status: "pending",
            value: null,
            reason: null,
            then: function(o) {
                i.push(o)
            }
        };
        return e.then(function() {
            r.status = "fulfilled",
            r.value = t;
            for (var o = 0; o < i.length; o++)
                (0,
                i[o])(t)
        }, function(o) {
            for (r.status = "rejected",
            r.reason = o,
            o = 0; o < i.length; o++)
                (0,
                i[o])(void 0)
        }),
        r
    }
    var Pd = k.S;
    k.S = function(e, t) {
        Mm = _t(),
        typeof t == "object" && t !== null && typeof t.then == "function" && X0(e, t),
        Pd !== null && Pd(e, t)
    }
    ;
    var Qa = O(null);
    function po() {
        var e = Qa.current;
        return e !== null ? e : Ve.pooledCache
    }
    function el(e, t) {
        t === null ? F(Qa, Qa.current) : F(Qa, t.pool)
    }
    function Kd() {
        var e = po();
        return e === null ? null : {
            parent: nt._currentValue,
            pool: e
        }
    }
    var Li = Error(l(460))
      , yo = Error(l(474))
      , tl = Error(l(542))
      , nl = {
        then: function() {}
    };
    function Fd(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Id(e, t, i) {
        switch (i = e[i],
        i === void 0 ? e.push(t) : i !== t && (t.then(wn, wn),
        t = i),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            $d(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(wn, wn);
            else {
                if (e = Ve,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(l(482));
                e = t,
                e.status = "pending",
                e.then(function(r) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "fulfilled",
                        o.value = r
                    }
                }, function(r) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "rejected",
                        o.reason = r
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                $d(e),
                e
            }
            throw Pa = t,
            Li
        }
    }
    function Xa(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (i) {
            throw i !== null && typeof i == "object" && typeof i.then == "function" ? (Pa = i,
            Li) : i
        }
    }
    var Pa = null;
    function Jd() {
        if (Pa === null)
            throw Error(l(459));
        var e = Pa;
        return Pa = null,
        e
    }
    function $d(e) {
        if (e === Li || e === tl)
            throw Error(l(483))
    }
    var Ui = null
      , Ls = 0;
    function al(e) {
        var t = Ls;
        return Ls += 1,
        Ui === null && (Ui = []),
        Id(Ui, e, t)
    }
    function Us(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function il(e, t) {
        throw t.$$typeof === _ ? Error(l(525)) : (e = Object.prototype.toString.call(t),
        Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Wd(e) {
        function t(z, C) {
            if (e) {
                var j = z.deletions;
                j === null ? (z.deletions = [C],
                z.flags |= 16) : j.push(C)
            }
        }
        function i(z, C) {
            if (!e)
                return null;
            for (; C !== null; )
                t(z, C),
                C = C.sibling;
            return null
        }
        function r(z) {
            for (var C = new Map; z !== null; )
                z.key !== null ? C.set(z.key, z) : C.set(z.index, z),
                z = z.sibling;
            return C
        }
        function o(z, C) {
            return z = Rn(z, C),
            z.index = 0,
            z.sibling = null,
            z
        }
        function c(z, C, j) {
            return z.index = j,
            e ? (j = z.alternate,
            j !== null ? (j = j.index,
            j < C ? (z.flags |= 67108866,
            C) : j) : (z.flags |= 67108866,
            C)) : (z.flags |= 1048576,
            C)
        }
        function m(z) {
            return e && z.alternate === null && (z.flags |= 67108866),
            z
        }
        function b(z, C, j, V) {
            return C === null || C.tag !== 6 ? (C = ao(j, z.mode, V),
            C.return = z,
            C) : (C = o(C, j),
            C.return = z,
            C)
        }
        function E(z, C, j, V) {
            var ue = j.type;
            return ue === N ? q(z, C, j.props.children, V, j.key) : C !== null && (C.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === X && Xa(ue) === C.type) ? (C = o(C, j.props),
            Us(C, j),
            C.return = z,
            C) : (C = Ir(j.type, j.key, j.props, null, z.mode, V),
            Us(C, j),
            C.return = z,
            C)
        }
        function D(z, C, j, V) {
            return C === null || C.tag !== 4 || C.stateNode.containerInfo !== j.containerInfo || C.stateNode.implementation !== j.implementation ? (C = io(j, z.mode, V),
            C.return = z,
            C) : (C = o(C, j.children || []),
            C.return = z,
            C)
        }
        function q(z, C, j, V, ue) {
            return C === null || C.tag !== 7 ? (C = Za(j, z.mode, V, ue),
            C.return = z,
            C) : (C = o(C, j),
            C.return = z,
            C)
        }
        function G(z, C, j) {
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
                return C = ao("" + C, z.mode, j),
                C.return = z,
                C;
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case x:
                    return j = Ir(C.type, C.key, C.props, null, z.mode, j),
                    Us(j, C),
                    j.return = z,
                    j;
                case R:
                    return C = io(C, z.mode, j),
                    C.return = z,
                    C;
                case X:
                    return C = Xa(C),
                    G(z, C, j)
                }
                if (Qe(C) || _e(C))
                    return C = Za(C, z.mode, j, null),
                    C.return = z,
                    C;
                if (typeof C.then == "function")
                    return G(z, al(C), j);
                if (C.$$typeof === Z)
                    return G(z, Wr(z, C), j);
                il(z, C)
            }
            return null
        }
        function L(z, C, j, V) {
            var ue = C !== null ? C.key : null;
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return ue !== null ? null : b(z, C, "" + j, V);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case x:
                    return j.key === ue ? E(z, C, j, V) : null;
                case R:
                    return j.key === ue ? D(z, C, j, V) : null;
                case X:
                    return j = Xa(j),
                    L(z, C, j, V)
                }
                if (Qe(j) || _e(j))
                    return ue !== null ? null : q(z, C, j, V, null);
                if (typeof j.then == "function")
                    return L(z, C, al(j), V);
                if (j.$$typeof === Z)
                    return L(z, C, Wr(z, j), V);
                il(z, j)
            }
            return null
        }
        function U(z, C, j, V, ue) {
            if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
                return z = z.get(j) || null,
                b(C, z, "" + V, ue);
            if (typeof V == "object" && V !== null) {
                switch (V.$$typeof) {
                case x:
                    return z = z.get(V.key === null ? j : V.key) || null,
                    E(C, z, V, ue);
                case R:
                    return z = z.get(V.key === null ? j : V.key) || null,
                    D(C, z, V, ue);
                case X:
                    return V = Xa(V),
                    U(z, C, j, V, ue)
                }
                if (Qe(V) || _e(V))
                    return z = z.get(j) || null,
                    q(C, z, V, ue, null);
                if (typeof V.then == "function")
                    return U(z, C, j, al(V), ue);
                if (V.$$typeof === Z)
                    return U(z, C, j, Wr(C, V), ue);
                il(C, V)
            }
            return null
        }
        function ne(z, C, j, V) {
            for (var ue = null, Ce = null, ie = C, ye = C = 0, we = null; ie !== null && ye < j.length; ye++) {
                ie.index > ye ? (we = ie,
                ie = null) : we = ie.sibling;
                var Oe = L(z, ie, j[ye], V);
                if (Oe === null) {
                    ie === null && (ie = we);
                    break
                }
                e && ie && Oe.alternate === null && t(z, ie),
                C = c(Oe, C, ye),
                Ce === null ? ue = Oe : Ce.sibling = Oe,
                Ce = Oe,
                ie = we
            }
            if (ye === j.length)
                return i(z, ie),
                Ee && An(z, ye),
                ue;
            if (ie === null) {
                for (; ye < j.length; ye++)
                    ie = G(z, j[ye], V),
                    ie !== null && (C = c(ie, C, ye),
                    Ce === null ? ue = ie : Ce.sibling = ie,
                    Ce = ie);
                return Ee && An(z, ye),
                ue
            }
            for (ie = r(ie); ye < j.length; ye++)
                we = U(ie, z, ye, j[ye], V),
                we !== null && (e && we.alternate !== null && ie.delete(we.key === null ? ye : we.key),
                C = c(we, C, ye),
                Ce === null ? ue = we : Ce.sibling = we,
                Ce = we);
            return e && ie.forEach(function(ga) {
                return t(z, ga)
            }),
            Ee && An(z, ye),
            ue
        }
        function fe(z, C, j, V) {
            if (j == null)
                throw Error(l(151));
            for (var ue = null, Ce = null, ie = C, ye = C = 0, we = null, Oe = j.next(); ie !== null && !Oe.done; ye++,
            Oe = j.next()) {
                ie.index > ye ? (we = ie,
                ie = null) : we = ie.sibling;
                var ga = L(z, ie, Oe.value, V);
                if (ga === null) {
                    ie === null && (ie = we);
                    break
                }
                e && ie && ga.alternate === null && t(z, ie),
                C = c(ga, C, ye),
                Ce === null ? ue = ga : Ce.sibling = ga,
                Ce = ga,
                ie = we
            }
            if (Oe.done)
                return i(z, ie),
                Ee && An(z, ye),
                ue;
            if (ie === null) {
                for (; !Oe.done; ye++,
                Oe = j.next())
                    Oe = G(z, Oe.value, V),
                    Oe !== null && (C = c(Oe, C, ye),
                    Ce === null ? ue = Oe : Ce.sibling = Oe,
                    Ce = Oe);
                return Ee && An(z, ye),
                ue
            }
            for (ie = r(ie); !Oe.done; ye++,
            Oe = j.next())
                Oe = U(ie, z, ye, Oe.value, V),
                Oe !== null && (e && Oe.alternate !== null && ie.delete(Oe.key === null ? ye : Oe.key),
                C = c(Oe, C, ye),
                Ce === null ? ue = Oe : Ce.sibling = Oe,
                Ce = Oe);
            return e && ie.forEach(function(iS) {
                return t(z, iS)
            }),
            Ee && An(z, ye),
            ue
        }
        function qe(z, C, j, V) {
            if (typeof j == "object" && j !== null && j.type === N && j.key === null && (j = j.props.children),
            typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case x:
                    e: {
                        for (var ue = j.key; C !== null; ) {
                            if (C.key === ue) {
                                if (ue = j.type,
                                ue === N) {
                                    if (C.tag === 7) {
                                        i(z, C.sibling),
                                        V = o(C, j.props.children),
                                        V.return = z,
                                        z = V;
                                        break e
                                    }
                                } else if (C.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === X && Xa(ue) === C.type) {
                                    i(z, C.sibling),
                                    V = o(C, j.props),
                                    Us(V, j),
                                    V.return = z,
                                    z = V;
                                    break e
                                }
                                i(z, C);
                                break
                            } else
                                t(z, C);
                            C = C.sibling
                        }
                        j.type === N ? (V = Za(j.props.children, z.mode, V, j.key),
                        V.return = z,
                        z = V) : (V = Ir(j.type, j.key, j.props, null, z.mode, V),
                        Us(V, j),
                        V.return = z,
                        z = V)
                    }
                    return m(z);
                case R:
                    e: {
                        for (ue = j.key; C !== null; ) {
                            if (C.key === ue)
                                if (C.tag === 4 && C.stateNode.containerInfo === j.containerInfo && C.stateNode.implementation === j.implementation) {
                                    i(z, C.sibling),
                                    V = o(C, j.children || []),
                                    V.return = z,
                                    z = V;
                                    break e
                                } else {
                                    i(z, C);
                                    break
                                }
                            else
                                t(z, C);
                            C = C.sibling
                        }
                        V = io(j, z.mode, V),
                        V.return = z,
                        z = V
                    }
                    return m(z);
                case X:
                    return j = Xa(j),
                    qe(z, C, j, V)
                }
                if (Qe(j))
                    return ne(z, C, j, V);
                if (_e(j)) {
                    if (ue = _e(j),
                    typeof ue != "function")
                        throw Error(l(150));
                    return j = ue.call(j),
                    fe(z, C, j, V)
                }
                if (typeof j.then == "function")
                    return qe(z, C, al(j), V);
                if (j.$$typeof === Z)
                    return qe(z, C, Wr(z, j), V);
                il(z, j)
            }
            return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j,
            C !== null && C.tag === 6 ? (i(z, C.sibling),
            V = o(C, j),
            V.return = z,
            z = V) : (i(z, C),
            V = ao(j, z.mode, V),
            V.return = z,
            z = V),
            m(z)) : i(z, C)
        }
        return function(z, C, j, V) {
            try {
                Ls = 0;
                var ue = qe(z, C, j, V);
                return Ui = null,
                ue
            } catch (ie) {
                if (ie === Li || ie === tl)
                    throw ie;
                var Ce = Ht(29, ie, null, z.mode);
                return Ce.lanes = V,
                Ce.return = z,
                Ce
            }
        }
    }
    var Ka = Wd(!0)
      , eh = Wd(!1)
      , ea = !1;
    function go(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function vo(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function ta(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function na(e, t, i) {
        var r = e.updateQueue;
        if (r === null)
            return null;
        if (r = r.shared,
        (je & 2) !== 0) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next,
            o.next = t),
            r.pending = t,
            t = Fr(e),
            kd(e, null, i),
            t
        }
        return Kr(e, r, t, i),
        Fr(e)
    }
    function ks(e, t, i) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (i & 4194048) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes,
            i |= r,
            t.lanes = i,
            Qf(e, i)
        }
    }
    function bo(e, t) {
        var i = e.updateQueue
          , r = e.alternate;
        if (r !== null && (r = r.updateQueue,
        i === r)) {
            var o = null
              , c = null;
            if (i = i.firstBaseUpdate,
            i !== null) {
                do {
                    var m = {
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? o = c = m : c = c.next = m,
                    i = i.next
                } while (i !== null);
                c === null ? o = c = t : c = c.next = t
            } else
                o = c = t;
            i = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: c,
                shared: r.shared,
                callbacks: r.callbacks
            },
            e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate,
        e === null ? i.firstBaseUpdate = t : e.next = t,
        i.lastBaseUpdate = t
    }
    var So = !1;
    function Bs() {
        if (So) {
            var e = Di;
            if (e !== null)
                throw e
        }
    }
    function Hs(e, t, i, r) {
        So = !1;
        var o = e.updateQueue;
        ea = !1;
        var c = o.firstBaseUpdate
          , m = o.lastBaseUpdate
          , b = o.shared.pending;
        if (b !== null) {
            o.shared.pending = null;
            var E = b
              , D = E.next;
            E.next = null,
            m === null ? c = D : m.next = D,
            m = E;
            var q = e.alternate;
            q !== null && (q = q.updateQueue,
            b = q.lastBaseUpdate,
            b !== m && (b === null ? q.firstBaseUpdate = D : b.next = D,
            q.lastBaseUpdate = E))
        }
        if (c !== null) {
            var G = o.baseState;
            m = 0,
            q = D = E = null,
            b = c;
            do {
                var L = b.lane & -536870913
                  , U = L !== b.lane;
                if (U ? (xe & L) === L : (r & L) === L) {
                    L !== 0 && L === ji && (So = !0),
                    q !== null && (q = q.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var ne = e
                          , fe = b;
                        L = t;
                        var qe = i;
                        switch (fe.tag) {
                        case 1:
                            if (ne = fe.payload,
                            typeof ne == "function") {
                                G = ne.call(qe, G, L);
                                break e
                            }
                            G = ne;
                            break e;
                        case 3:
                            ne.flags = ne.flags & -65537 | 128;
                        case 0:
                            if (ne = fe.payload,
                            L = typeof ne == "function" ? ne.call(qe, G, L) : ne,
                            L == null)
                                break e;
                            G = g({}, G, L);
                            break e;
                        case 2:
                            ea = !0
                        }
                    }
                    L = b.callback,
                    L !== null && (e.flags |= 64,
                    U && (e.flags |= 8192),
                    U = o.callbacks,
                    U === null ? o.callbacks = [L] : U.push(L))
                } else
                    U = {
                        lane: L,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    q === null ? (D = q = U,
                    E = G) : q = q.next = U,
                    m |= L;
                if (b = b.next,
                b === null) {
                    if (b = o.shared.pending,
                    b === null)
                        break;
                    U = b,
                    b = U.next,
                    U.next = null,
                    o.lastBaseUpdate = U,
                    o.shared.pending = null
                }
            } while (!0);
            q === null && (E = G),
            o.baseState = E,
            o.firstBaseUpdate = D,
            o.lastBaseUpdate = q,
            c === null && (o.shared.lanes = 0),
            la |= m,
            e.lanes = m,
            e.memoizedState = G
        }
    }
    function th(e, t) {
        if (typeof e != "function")
            throw Error(l(191, e));
        e.call(t)
    }
    function nh(e, t) {
        var i = e.callbacks;
        if (i !== null)
            for (e.callbacks = null,
            e = 0; e < i.length; e++)
                th(i[e], t)
    }
    var ki = O(null)
      , sl = O(0);
    function ah(e, t) {
        e = kn,
        F(sl, e),
        F(ki, t),
        kn = e | t.baseLanes
    }
    function _o() {
        F(sl, kn),
        F(ki, ki.current)
    }
    function xo() {
        kn = sl.current,
        Y(ki),
        Y(sl)
    }
    var qt = O(null)
      , Wt = null;
    function aa(e) {
        var t = e.alternate;
        F(et, et.current & 1),
        F(qt, e),
        Wt === null && (t === null || ki.current !== null || t.memoizedState !== null) && (Wt = e)
    }
    function wo(e) {
        F(et, et.current),
        F(qt, e),
        Wt === null && (Wt = e)
    }
    function ih(e) {
        e.tag === 22 ? (F(et, et.current),
        F(qt, e),
        Wt === null && (Wt = e)) : ia()
    }
    function ia() {
        F(et, et.current),
        F(qt, qt.current)
    }
    function Zt(e) {
        Y(qt),
        Wt === e && (Wt = null),
        Y(et)
    }
    var et = O(0);
    function rl(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (i !== null && (i = i.dehydrated,
                i === null || Oc(i) || Mc(i)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var On = 0
      , pe = null
      , Be = null
      , at = null
      , ll = !1
      , Bi = !1
      , Fa = !1
      , ul = 0
      , qs = 0
      , Hi = null
      , K0 = 0;
    function Ie() {
        throw Error(l(321))
    }
    function Eo(e, t) {
        if (t === null)
            return !1;
        for (var i = 0; i < t.length && i < e.length; i++)
            if (!Bt(e[i], t[i]))
                return !1;
        return !0
    }
    function Ro(e, t, i, r, o, c) {
        return On = c,
        pe = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        k.H = e === null || e.memoizedState === null ? Zh : qo,
        Fa = !1,
        c = i(r, o),
        Fa = !1,
        Bi && (c = rh(t, i, r, o)),
        sh(e),
        c
    }
    function sh(e) {
        k.H = Ys;
        var t = Be !== null && Be.next !== null;
        if (On = 0,
        at = Be = pe = null,
        ll = !1,
        qs = 0,
        Hi = null,
        t)
            throw Error(l(300));
        e === null || it || (e = e.dependencies,
        e !== null && $r(e) && (it = !0))
    }
    function rh(e, t, i, r) {
        pe = e;
        var o = 0;
        do {
            if (Bi && (Hi = null),
            qs = 0,
            Bi = !1,
            25 <= o)
                throw Error(l(301));
            if (o += 1,
            at = Be = null,
            e.updateQueue != null) {
                var c = e.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            k.H = Vh,
            c = t(i, r)
        } while (Bi);
        return c
    }
    function F0() {
        var e = k.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Zs(t) : t,
        e = e.useState()[0],
        (Be !== null ? Be.memoizedState : null) !== e && (pe.flags |= 1024),
        t
    }
    function Ao() {
        var e = ul !== 0;
        return ul = 0,
        e
    }
    function To(e, t, i) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~i
    }
    function Co(e) {
        if (ll) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            ll = !1
        }
        On = 0,
        at = Be = pe = null,
        Bi = !1,
        qs = ul = 0,
        Hi = null
    }
    function wt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return at === null ? pe.memoizedState = at = e : at = at.next = e,
        at
    }
    function tt() {
        if (Be === null) {
            var e = pe.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Be.next;
        var t = at === null ? pe.memoizedState : at.next;
        if (t !== null)
            at = t,
            Be = e;
        else {
            if (e === null)
                throw pe.alternate === null ? Error(l(467)) : Error(l(310));
            Be = e,
            e = {
                memoizedState: Be.memoizedState,
                baseState: Be.baseState,
                baseQueue: Be.baseQueue,
                queue: Be.queue,
                next: null
            },
            at === null ? pe.memoizedState = at = e : at = at.next = e
        }
        return at
    }
    function ol() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Zs(e) {
        var t = qs;
        return qs += 1,
        Hi === null && (Hi = []),
        e = Id(Hi, e, t),
        t = pe,
        (at === null ? t.memoizedState : at.next) === null && (t = t.alternate,
        k.H = t === null || t.memoizedState === null ? Zh : qo),
        e
    }
    function cl(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Zs(e);
            if (e.$$typeof === Z)
                return gt(e)
        }
        throw Error(l(438, String(e)))
    }
    function Oo(e) {
        var t = null
          , i = pe.updateQueue;
        if (i !== null && (t = i.memoCache),
        t == null) {
            var r = pe.alternate;
            r !== null && (r = r.updateQueue,
            r !== null && (r = r.memoCache,
            r != null && (t = {
                data: r.data.map(function(o) {
                    return o.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        i === null && (i = ol(),
        pe.updateQueue = i),
        i.memoCache = t,
        i = t.data[t.index],
        i === void 0)
            for (i = t.data[t.index] = Array(e),
            r = 0; r < e; r++)
                i[r] = ce;
        return t.index++,
        i
    }
    function Mn(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function fl(e) {
        var t = tt();
        return Mo(t, Be, e)
    }
    function Mo(e, t, i) {
        var r = e.queue;
        if (r === null)
            throw Error(l(311));
        r.lastRenderedReducer = i;
        var o = e.baseQueue
          , c = r.pending;
        if (c !== null) {
            if (o !== null) {
                var m = o.next;
                o.next = c.next,
                c.next = m
            }
            t.baseQueue = o = c,
            r.pending = null
        }
        if (c = e.baseState,
        o === null)
            e.memoizedState = c;
        else {
            t = o.next;
            var b = m = null
              , E = null
              , D = t
              , q = !1;
            do {
                var G = D.lane & -536870913;
                if (G !== D.lane ? (xe & G) === G : (On & G) === G) {
                    var L = D.revertLane;
                    if (L === 0)
                        E !== null && (E = E.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        }),
                        G === ji && (q = !0);
                    else if ((On & L) === L) {
                        D = D.next,
                        L === ji && (q = !0);
                        continue
                    } else
                        G = {
                            lane: 0,
                            revertLane: D.revertLane,
                            gesture: null,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        },
                        E === null ? (b = E = G,
                        m = c) : E = E.next = G,
                        pe.lanes |= L,
                        la |= L;
                    G = D.action,
                    Fa && i(c, G),
                    c = D.hasEagerState ? D.eagerState : i(c, G)
                } else
                    L = {
                        lane: G,
                        revertLane: D.revertLane,
                        gesture: D.gesture,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    },
                    E === null ? (b = E = L,
                    m = c) : E = E.next = L,
                    pe.lanes |= G,
                    la |= G;
                D = D.next
            } while (D !== null && D !== t);
            if (E === null ? m = c : E.next = b,
            !Bt(c, e.memoizedState) && (it = !0,
            q && (i = Di,
            i !== null)))
                throw i;
            e.memoizedState = c,
            e.baseState = m,
            e.baseQueue = E,
            r.lastRenderedState = c
        }
        return o === null && (r.lanes = 0),
        [e.memoizedState, r.dispatch]
    }
    function No(e) {
        var t = tt()
          , i = t.queue;
        if (i === null)
            throw Error(l(311));
        i.lastRenderedReducer = e;
        var r = i.dispatch
          , o = i.pending
          , c = t.memoizedState;
        if (o !== null) {
            i.pending = null;
            var m = o = o.next;
            do
                c = e(c, m.action),
                m = m.next;
            while (m !== o);
            Bt(c, t.memoizedState) || (it = !0),
            t.memoizedState = c,
            t.baseQueue === null && (t.baseState = c),
            i.lastRenderedState = c
        }
        return [c, r]
    }
    function lh(e, t, i) {
        var r = pe
          , o = tt()
          , c = Ee;
        if (c) {
            if (i === void 0)
                throw Error(l(407));
            i = i()
        } else
            i = t();
        var m = !Bt((Be || o).memoizedState, i);
        if (m && (o.memoizedState = i,
        it = !0),
        o = o.queue,
        Do(ch.bind(null, r, o, e), [e]),
        o.getSnapshot !== t || m || at !== null && at.memoizedState.tag & 1) {
            if (r.flags |= 2048,
            qi(9, {
                destroy: void 0
            }, oh.bind(null, r, o, i, t), null),
            Ve === null)
                throw Error(l(349));
            c || (On & 127) !== 0 || uh(r, t, i)
        }
        return i
    }
    function uh(e, t, i) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: i
        },
        t = pe.updateQueue,
        t === null ? (t = ol(),
        pe.updateQueue = t,
        t.stores = [e]) : (i = t.stores,
        i === null ? t.stores = [e] : i.push(e))
    }
    function oh(e, t, i, r) {
        t.value = i,
        t.getSnapshot = r,
        fh(t) && dh(e)
    }
    function ch(e, t, i) {
        return i(function() {
            fh(t) && dh(e)
        })
    }
    function fh(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !Bt(e, i)
        } catch {
            return !0
        }
    }
    function dh(e) {
        var t = qa(e, 2);
        t !== null && zt(t, e, 2)
    }
    function zo(e) {
        var t = wt();
        if (typeof e == "function") {
            var i = e;
            if (e = i(),
            Fa) {
                Pn(!0);
                try {
                    i()
                } finally {
                    Pn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Mn,
            lastRenderedState: e
        },
        t
    }
    function hh(e, t, i, r) {
        return e.baseState = i,
        Mo(e, Be, typeof r == "function" ? r : Mn)
    }
    function I0(e, t, i, r, o) {
        if (ml(e))
            throw Error(l(485));
        if (e = t.action,
        e !== null) {
            var c = {
                payload: o,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(m) {
                    c.listeners.push(m)
                }
            };
            k.T !== null ? i(!0) : c.isTransition = !1,
            r(c),
            i = t.pending,
            i === null ? (c.next = t.pending = c,
            mh(t, c)) : (c.next = i.next,
            t.pending = i.next = c)
        }
    }
    function mh(e, t) {
        var i = t.action
          , r = t.payload
          , o = e.state;
        if (t.isTransition) {
            var c = k.T
              , m = {};
            k.T = m;
            try {
                var b = i(o, r)
                  , E = k.S;
                E !== null && E(m, b),
                ph(e, t, b)
            } catch (D) {
                jo(e, t, D)
            } finally {
                c !== null && m.types !== null && (c.types = m.types),
                k.T = c
            }
        } else
            try {
                c = i(o, r),
                ph(e, t, c)
            } catch (D) {
                jo(e, t, D)
            }
    }
    function ph(e, t, i) {
        i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function(r) {
            yh(e, t, r)
        }, function(r) {
            return jo(e, t, r)
        }) : yh(e, t, i)
    }
    function yh(e, t, i) {
        t.status = "fulfilled",
        t.value = i,
        gh(t),
        e.state = i,
        t = e.pending,
        t !== null && (i = t.next,
        i === t ? e.pending = null : (i = i.next,
        t.next = i,
        mh(e, i)))
    }
    function jo(e, t, i) {
        var r = e.pending;
        if (e.pending = null,
        r !== null) {
            r = r.next;
            do
                t.status = "rejected",
                t.reason = i,
                gh(t),
                t = t.next;
            while (t !== r)
        }
        e.action = null
    }
    function gh(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function vh(e, t) {
        return t
    }
    function bh(e, t) {
        if (Ee) {
            var i = Ve.formState;
            if (i !== null) {
                e: {
                    var r = pe;
                    if (Ee) {
                        if (Xe) {
                            t: {
                                for (var o = Xe, c = $t; o.nodeType !== 8; ) {
                                    if (!c) {
                                        o = null;
                                        break t
                                    }
                                    if (o = en(o.nextSibling),
                                    o === null) {
                                        o = null;
                                        break t
                                    }
                                }
                                c = o.data,
                                o = c === "F!" || c === "F" ? o : null
                            }
                            if (o) {
                                Xe = en(o.nextSibling),
                                r = o.data === "F!";
                                break e
                            }
                        }
                        $n(r)
                    }
                    r = !1
                }
                r && (t = i[0])
            }
        }
        return i = wt(),
        i.memoizedState = i.baseState = t,
        r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: vh,
            lastRenderedState: t
        },
        i.queue = r,
        i = Bh.bind(null, pe, r),
        r.dispatch = i,
        r = zo(!1),
        c = Ho.bind(null, pe, !1, r.queue),
        r = wt(),
        o = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        r.queue = o,
        i = I0.bind(null, pe, o, c, i),
        o.dispatch = i,
        r.memoizedState = e,
        [t, i, !1]
    }
    function Sh(e) {
        var t = tt();
        return _h(t, Be, e)
    }
    function _h(e, t, i) {
        if (t = Mo(e, t, vh)[0],
        e = fl(Mn)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var r = Zs(t)
            } catch (m) {
                throw m === Li ? tl : m
            }
        else
            r = t;
        t = tt();
        var o = t.queue
          , c = o.dispatch;
        return i !== t.memoizedState && (pe.flags |= 2048,
        qi(9, {
            destroy: void 0
        }, J0.bind(null, o, i), null)),
        [r, c, e]
    }
    function J0(e, t) {
        e.action = t
    }
    function xh(e) {
        var t = tt()
          , i = Be;
        if (i !== null)
            return _h(t, i, e);
        tt(),
        t = t.memoizedState,
        i = tt();
        var r = i.queue.dispatch;
        return i.memoizedState = e,
        [t, r, !1]
    }
    function qi(e, t, i, r) {
        return e = {
            tag: e,
            create: i,
            deps: r,
            inst: t,
            next: null
        },
        t = pe.updateQueue,
        t === null && (t = ol(),
        pe.updateQueue = t),
        i = t.lastEffect,
        i === null ? t.lastEffect = e.next = e : (r = i.next,
        i.next = e,
        e.next = r,
        t.lastEffect = e),
        e
    }
    function wh() {
        return tt().memoizedState
    }
    function dl(e, t, i, r) {
        var o = wt();
        pe.flags |= e,
        o.memoizedState = qi(1 | t, {
            destroy: void 0
        }, i, r === void 0 ? null : r)
    }
    function hl(e, t, i, r) {
        var o = tt();
        r = r === void 0 ? null : r;
        var c = o.memoizedState.inst;
        Be !== null && r !== null && Eo(r, Be.memoizedState.deps) ? o.memoizedState = qi(t, c, i, r) : (pe.flags |= e,
        o.memoizedState = qi(1 | t, c, i, r))
    }
    function Eh(e, t) {
        dl(8390656, 8, e, t)
    }
    function Do(e, t) {
        hl(2048, 8, e, t)
    }
    function $0(e) {
        pe.flags |= 4;
        var t = pe.updateQueue;
        if (t === null)
            t = ol(),
            pe.updateQueue = t,
            t.events = [e];
        else {
            var i = t.events;
            i === null ? t.events = [e] : i.push(e)
        }
    }
    function Rh(e) {
        var t = tt().memoizedState;
        return $0({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((je & 2) !== 0)
                throw Error(l(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function Ah(e, t) {
        return hl(4, 2, e, t)
    }
    function Th(e, t) {
        return hl(4, 4, e, t)
    }
    function Ch(e, t) {
        if (typeof t == "function") {
            e = e();
            var i = t(e);
            return function() {
                typeof i == "function" ? i() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Oh(e, t, i) {
        i = i != null ? i.concat([e]) : null,
        hl(4, 4, Ch.bind(null, t, e), i)
    }
    function Lo() {}
    function Mh(e, t) {
        var i = tt();
        t = t === void 0 ? null : t;
        var r = i.memoizedState;
        return t !== null && Eo(t, r[1]) ? r[0] : (i.memoizedState = [e, t],
        e)
    }
    function Nh(e, t) {
        var i = tt();
        t = t === void 0 ? null : t;
        var r = i.memoizedState;
        if (t !== null && Eo(t, r[1]))
            return r[0];
        if (r = e(),
        Fa) {
            Pn(!0);
            try {
                e()
            } finally {
                Pn(!1)
            }
        }
        return i.memoizedState = [r, t],
        r
    }
    function Uo(e, t, i) {
        return i === void 0 || (On & 1073741824) !== 0 && (xe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = i,
        e = zm(),
        pe.lanes |= e,
        la |= e,
        i)
    }
    function zh(e, t, i, r) {
        return Bt(i, t) ? i : ki.current !== null ? (e = Uo(e, i, r),
        Bt(e, t) || (it = !0),
        e) : (On & 42) === 0 || (On & 1073741824) !== 0 && (xe & 261930) === 0 ? (it = !0,
        e.memoizedState = i) : (e = zm(),
        pe.lanes |= e,
        la |= e,
        t)
    }
    function jh(e, t, i, r, o) {
        var c = K.p;
        K.p = c !== 0 && 8 > c ? c : 8;
        var m = k.T
          , b = {};
        k.T = b,
        Ho(e, !1, t, i);
        try {
            var E = o()
              , D = k.S;
            if (D !== null && D(b, E),
            E !== null && typeof E == "object" && typeof E.then == "function") {
                var q = P0(E, r);
                Vs(e, t, q, Gt(e))
            } else
                Vs(e, t, r, Gt(e))
        } catch (G) {
            Vs(e, t, {
                then: function() {},
                status: "rejected",
                reason: G
            }, Gt())
        } finally {
            K.p = c,
            m !== null && b.types !== null && (m.types = b.types),
            k.T = m
        }
    }
    function W0() {}
    function ko(e, t, i, r) {
        if (e.tag !== 5)
            throw Error(l(476));
        var o = Dh(e).queue;
        jh(e, o, t, oe, i === null ? W0 : function() {
            return Lh(e),
            i(r)
        }
        )
    }
    function Dh(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: oe,
            baseState: oe,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Mn,
                lastRenderedState: oe
            },
            next: null
        };
        var i = {};
        return t.next = {
            memoizedState: i,
            baseState: i,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Mn,
                lastRenderedState: i
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Lh(e) {
        var t = Dh(e);
        t.next === null && (t = e.alternate.memoizedState),
        Vs(e, t.next.queue, {}, Gt())
    }
    function Bo() {
        return gt(sr)
    }
    function Uh() {
        return tt().memoizedState
    }
    function kh() {
        return tt().memoizedState
    }
    function eb(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var i = Gt();
                e = ta(i);
                var r = na(t, e, i);
                r !== null && (zt(r, t, i),
                ks(r, t, i)),
                t = {
                    cache: ho()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function tb(e, t, i) {
        var r = Gt();
        i = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ml(e) ? Hh(t, i) : (i = to(e, t, i, r),
        i !== null && (zt(i, e, r),
        qh(i, t, r)))
    }
    function Bh(e, t, i) {
        var r = Gt();
        Vs(e, t, i, r)
    }
    function Vs(e, t, i, r) {
        var o = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ml(e))
            Hh(t, o);
        else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer,
            c !== null))
                try {
                    var m = t.lastRenderedState
                      , b = c(m, i);
                    if (o.hasEagerState = !0,
                    o.eagerState = b,
                    Bt(b, m))
                        return Kr(e, t, o, 0),
                        Ve === null && Pr(),
                        !1
                } catch {}
            if (i = to(e, t, o, r),
            i !== null)
                return zt(i, e, r),
                qh(i, t, r),
                !0
        }
        return !1
    }
    function Ho(e, t, i, r) {
        if (r = {
            lane: 2,
            revertLane: gc(),
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ml(e)) {
            if (t)
                throw Error(l(479))
        } else
            t = to(e, i, r, 2),
            t !== null && zt(t, e, 2)
    }
    function ml(e) {
        var t = e.alternate;
        return e === pe || t !== null && t === pe
    }
    function Hh(e, t) {
        Bi = ll = !0;
        var i = e.pending;
        i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        e.pending = t
    }
    function qh(e, t, i) {
        if ((i & 4194048) !== 0) {
            var r = t.lanes;
            r &= e.pendingLanes,
            i |= r,
            t.lanes = i,
            Qf(e, i)
        }
    }
    var Ys = {
        readContext: gt,
        use: cl,
        useCallback: Ie,
        useContext: Ie,
        useEffect: Ie,
        useImperativeHandle: Ie,
        useLayoutEffect: Ie,
        useInsertionEffect: Ie,
        useMemo: Ie,
        useReducer: Ie,
        useRef: Ie,
        useState: Ie,
        useDebugValue: Ie,
        useDeferredValue: Ie,
        useTransition: Ie,
        useSyncExternalStore: Ie,
        useId: Ie,
        useHostTransitionStatus: Ie,
        useFormState: Ie,
        useActionState: Ie,
        useOptimistic: Ie,
        useMemoCache: Ie,
        useCacheRefresh: Ie
    };
    Ys.useEffectEvent = Ie;
    var Zh = {
        readContext: gt,
        use: cl,
        useCallback: function(e, t) {
            return wt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: gt,
        useEffect: Eh,
        useImperativeHandle: function(e, t, i) {
            i = i != null ? i.concat([e]) : null,
            dl(4194308, 4, Ch.bind(null, t, e), i)
        },
        useLayoutEffect: function(e, t) {
            return dl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            dl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var i = wt();
            t = t === void 0 ? null : t;
            var r = e();
            if (Fa) {
                Pn(!0);
                try {
                    e()
                } finally {
                    Pn(!1)
                }
            }
            return i.memoizedState = [r, t],
            r
        },
        useReducer: function(e, t, i) {
            var r = wt();
            if (i !== void 0) {
                var o = i(t);
                if (Fa) {
                    Pn(!0);
                    try {
                        i(t)
                    } finally {
                        Pn(!1)
                    }
                }
            } else
                o = t;
            return r.memoizedState = r.baseState = o,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: o
            },
            r.queue = e,
            e = e.dispatch = tb.bind(null, pe, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = wt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = zo(e);
            var t = e.queue
              , i = Bh.bind(null, pe, t);
            return t.dispatch = i,
            [e.memoizedState, i]
        },
        useDebugValue: Lo,
        useDeferredValue: function(e, t) {
            var i = wt();
            return Uo(i, e, t)
        },
        useTransition: function() {
            var e = zo(!1);
            return e = jh.bind(null, pe, e.queue, !0, !1),
            wt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, i) {
            var r = pe
              , o = wt();
            if (Ee) {
                if (i === void 0)
                    throw Error(l(407));
                i = i()
            } else {
                if (i = t(),
                Ve === null)
                    throw Error(l(349));
                (xe & 127) !== 0 || uh(r, t, i)
            }
            o.memoizedState = i;
            var c = {
                value: i,
                getSnapshot: t
            };
            return o.queue = c,
            Eh(ch.bind(null, r, c, e), [e]),
            r.flags |= 2048,
            qi(9, {
                destroy: void 0
            }, oh.bind(null, r, c, i, t), null),
            i
        },
        useId: function() {
            var e = wt()
              , t = Ve.identifierPrefix;
            if (Ee) {
                var i = hn
                  , r = dn;
                i = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + i,
                t = "_" + t + "R_" + i,
                i = ul++,
                0 < i && (t += "H" + i.toString(32)),
                t += "_"
            } else
                i = K0++,
                t = "_" + t + "r_" + i.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Bo,
        useFormState: bh,
        useActionState: bh,
        useOptimistic: function(e) {
            var t = wt();
            t.memoizedState = t.baseState = e;
            var i = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = i,
            t = Ho.bind(null, pe, !0, i),
            i.dispatch = t,
            [e, t]
        },
        useMemoCache: Oo,
        useCacheRefresh: function() {
            return wt().memoizedState = eb.bind(null, pe)
        },
        useEffectEvent: function(e) {
            var t = wt()
              , i = {
                impl: e
            };
            return t.memoizedState = i,
            function() {
                if ((je & 2) !== 0)
                    throw Error(l(440));
                return i.impl.apply(void 0, arguments)
            }
        }
    }
      , qo = {
        readContext: gt,
        use: cl,
        useCallback: Mh,
        useContext: gt,
        useEffect: Do,
        useImperativeHandle: Oh,
        useInsertionEffect: Ah,
        useLayoutEffect: Th,
        useMemo: Nh,
        useReducer: fl,
        useRef: wh,
        useState: function() {
            return fl(Mn)
        },
        useDebugValue: Lo,
        useDeferredValue: function(e, t) {
            var i = tt();
            return zh(i, Be.memoizedState, e, t)
        },
        useTransition: function() {
            var e = fl(Mn)[0]
              , t = tt().memoizedState;
            return [typeof e == "boolean" ? e : Zs(e), t]
        },
        useSyncExternalStore: lh,
        useId: Uh,
        useHostTransitionStatus: Bo,
        useFormState: Sh,
        useActionState: Sh,
        useOptimistic: function(e, t) {
            var i = tt();
            return hh(i, Be, e, t)
        },
        useMemoCache: Oo,
        useCacheRefresh: kh
    };
    qo.useEffectEvent = Rh;
    var Vh = {
        readContext: gt,
        use: cl,
        useCallback: Mh,
        useContext: gt,
        useEffect: Do,
        useImperativeHandle: Oh,
        useInsertionEffect: Ah,
        useLayoutEffect: Th,
        useMemo: Nh,
        useReducer: No,
        useRef: wh,
        useState: function() {
            return No(Mn)
        },
        useDebugValue: Lo,
        useDeferredValue: function(e, t) {
            var i = tt();
            return Be === null ? Uo(i, e, t) : zh(i, Be.memoizedState, e, t)
        },
        useTransition: function() {
            var e = No(Mn)[0]
              , t = tt().memoizedState;
            return [typeof e == "boolean" ? e : Zs(e), t]
        },
        useSyncExternalStore: lh,
        useId: Uh,
        useHostTransitionStatus: Bo,
        useFormState: xh,
        useActionState: xh,
        useOptimistic: function(e, t) {
            var i = tt();
            return Be !== null ? hh(i, Be, e, t) : (i.baseState = e,
            [e, i.queue.dispatch])
        },
        useMemoCache: Oo,
        useCacheRefresh: kh
    };
    Vh.useEffectEvent = Rh;
    function Zo(e, t, i, r) {
        t = e.memoizedState,
        i = i(r, t),
        i = i == null ? t : g({}, t, i),
        e.memoizedState = i,
        e.lanes === 0 && (e.updateQueue.baseState = i)
    }
    var Vo = {
        enqueueSetState: function(e, t, i) {
            e = e._reactInternals;
            var r = Gt()
              , o = ta(r);
            o.payload = t,
            i != null && (o.callback = i),
            t = na(e, o, r),
            t !== null && (zt(t, e, r),
            ks(t, e, r))
        },
        enqueueReplaceState: function(e, t, i) {
            e = e._reactInternals;
            var r = Gt()
              , o = ta(r);
            o.tag = 1,
            o.payload = t,
            i != null && (o.callback = i),
            t = na(e, o, r),
            t !== null && (zt(t, e, r),
            ks(t, e, r))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var i = Gt()
              , r = ta(i);
            r.tag = 2,
            t != null && (r.callback = t),
            t = na(e, r, i),
            t !== null && (zt(t, e, i),
            ks(t, e, i))
        }
    };
    function Yh(e, t, i, r, o, c, m) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, m) : t.prototype && t.prototype.isPureReactComponent ? !Os(i, r) || !Os(o, c) : !0
    }
    function Gh(e, t, i, r) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, r),
        t.state !== e && Vo.enqueueReplaceState(t, t.state, null)
    }
    function Ia(e, t) {
        var i = t;
        if ("ref"in t) {
            i = {};
            for (var r in t)
                r !== "ref" && (i[r] = t[r])
        }
        if (e = e.defaultProps) {
            i === t && (i = g({}, i));
            for (var o in e)
                i[o] === void 0 && (i[o] = e[o])
        }
        return i
    }
    function Qh(e) {
        Xr(e)
    }
    function Xh(e) {
        console.error(e)
    }
    function Ph(e) {
        Xr(e)
    }
    function pl(e, t) {
        try {
            var i = e.onUncaughtError;
            i(t.value, {
                componentStack: t.stack
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }
    function Kh(e, t, i) {
        try {
            var r = e.onCaughtError;
            r(i.value, {
                componentStack: i.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    function Yo(e, t, i) {
        return i = ta(i),
        i.tag = 3,
        i.payload = {
            element: null
        },
        i.callback = function() {
            pl(e, t)
        }
        ,
        i
    }
    function Fh(e) {
        return e = ta(e),
        e.tag = 3,
        e
    }
    function Ih(e, t, i, r) {
        var o = i.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var c = r.value;
            e.payload = function() {
                return o(c)
            }
            ,
            e.callback = function() {
                Kh(t, i, r)
            }
        }
        var m = i.stateNode;
        m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
            Kh(t, i, r),
            typeof o != "function" && (ua === null ? ua = new Set([this]) : ua.add(this));
            var b = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function nb(e, t, i, r, o) {
        if (i.flags |= 32768,
        r !== null && typeof r == "object" && typeof r.then == "function") {
            if (t = i.alternate,
            t !== null && zi(t, i, o, !0),
            i = qt.current,
            i !== null) {
                switch (i.tag) {
                case 31:
                case 13:
                    return Wt === null ? Tl() : i.alternate === null && Je === 0 && (Je = 3),
                    i.flags &= -257,
                    i.flags |= 65536,
                    i.lanes = o,
                    r === nl ? i.flags |= 16384 : (t = i.updateQueue,
                    t === null ? i.updateQueue = new Set([r]) : t.add(r),
                    mc(e, r, o)),
                    !1;
                case 22:
                    return i.flags |= 65536,
                    r === nl ? i.flags |= 16384 : (t = i.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r])
                    },
                    i.updateQueue = t) : (i = t.retryQueue,
                    i === null ? t.retryQueue = new Set([r]) : i.add(r)),
                    mc(e, r, o)),
                    !1
                }
                throw Error(l(435, i.tag))
            }
            return mc(e, r, o),
            Tl(),
            !1
        }
        if (Ee)
            return t = qt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = o,
            r !== lo && (e = Error(l(422), {
                cause: r
            }),
            zs(Ft(e, i)))) : (r !== lo && (t = Error(l(423), {
                cause: r
            }),
            zs(Ft(t, i))),
            e = e.current.alternate,
            e.flags |= 65536,
            o &= -o,
            e.lanes |= o,
            r = Ft(r, i),
            o = Yo(e.stateNode, r, o),
            bo(e, o),
            Je !== 4 && (Je = 2)),
            !1;
        var c = Error(l(520), {
            cause: r
        });
        if (c = Ft(c, i),
        Js === null ? Js = [c] : Js.push(c),
        Je !== 4 && (Je = 2),
        t === null)
            return !0;
        r = Ft(r, i),
        i = t;
        do {
            switch (i.tag) {
            case 3:
                return i.flags |= 65536,
                e = o & -o,
                i.lanes |= e,
                e = Yo(i.stateNode, r, e),
                bo(i, e),
                !1;
            case 1:
                if (t = i.type,
                c = i.stateNode,
                (i.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ua === null || !ua.has(c))))
                    return i.flags |= 65536,
                    o &= -o,
                    i.lanes |= o,
                    o = Fh(o),
                    Ih(o, e, i, r),
                    bo(i, o),
                    !1
            }
            i = i.return
        } while (i !== null);
        return !1
    }
    var Go = Error(l(461))
      , it = !1;
    function vt(e, t, i, r) {
        t.child = e === null ? eh(t, null, i, r) : Ka(t, e.child, i, r)
    }
    function Jh(e, t, i, r, o) {
        i = i.render;
        var c = t.ref;
        if ("ref"in r) {
            var m = {};
            for (var b in r)
                b !== "ref" && (m[b] = r[b])
        } else
            m = r;
        return Ga(t),
        r = Ro(e, t, i, m, c, o),
        b = Ao(),
        e !== null && !it ? (To(e, t, o),
        Nn(e, t, o)) : (Ee && b && so(t),
        t.flags |= 1,
        vt(e, t, r, o),
        t.child)
    }
    function $h(e, t, i, r, o) {
        if (e === null) {
            var c = i.type;
            return typeof c == "function" && !no(c) && c.defaultProps === void 0 && i.compare === null ? (t.tag = 15,
            t.type = c,
            Wh(e, t, c, r, o)) : (e = Ir(i.type, null, r, t, t.mode, o),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (c = e.child,
        !$o(e, o)) {
            var m = c.memoizedProps;
            if (i = i.compare,
            i = i !== null ? i : Os,
            i(m, r) && e.ref === t.ref)
                return Nn(e, t, o)
        }
        return t.flags |= 1,
        e = Rn(c, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Wh(e, t, i, r, o) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (Os(c, r) && e.ref === t.ref)
                if (it = !1,
                t.pendingProps = r = c,
                $o(e, o))
                    (e.flags & 131072) !== 0 && (it = !0);
                else
                    return t.lanes = e.lanes,
                    Nn(e, t, o)
        }
        return Qo(e, t, i, r, o)
    }
    function em(e, t, i, r) {
        var o = r.children
          , c = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        r.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (c = c !== null ? c.baseLanes | i : i,
                e !== null) {
                    for (r = t.child = e.child,
                    o = 0; r !== null; )
                        o = o | r.lanes | r.childLanes,
                        r = r.sibling;
                    r = o & ~c
                } else
                    r = 0,
                    t.child = null;
                return tm(e, t, c, i, r)
            }
            if ((i & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && el(t, c !== null ? c.cachePool : null),
                c !== null ? ah(t, c) : _o(),
                ih(t);
            else
                return r = t.lanes = 536870912,
                tm(e, t, c !== null ? c.baseLanes | i : i, i, r)
        } else
            c !== null ? (el(t, c.cachePool),
            ah(t, c),
            ia(),
            t.memoizedState = null) : (e !== null && el(t, null),
            _o(),
            ia());
        return vt(e, t, o, i),
        t.child
    }
    function Gs(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function tm(e, t, i, r, o) {
        var c = po();
        return c = c === null ? null : {
            parent: nt._currentValue,
            pool: c
        },
        t.memoizedState = {
            baseLanes: i,
            cachePool: c
        },
        e !== null && el(t, null),
        _o(),
        ih(t),
        e !== null && zi(e, t, r, !0),
        t.childLanes = o,
        null
    }
    function yl(e, t) {
        return t = vl({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function nm(e, t, i) {
        return Ka(t, e.child, null, i),
        e = yl(t, t.pendingProps),
        e.flags |= 2,
        Zt(t),
        t.memoizedState = null,
        e
    }
    function ab(e, t, i) {
        var r = t.pendingProps
          , o = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (Ee) {
                if (r.mode === "hidden")
                    return e = yl(t, r),
                    t.lanes = 536870912,
                    Gs(null, e);
                if (wo(t),
                (e = Xe) ? (e = mp(e, $t),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: In !== null ? {
                        id: dn,
                        overflow: hn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                i = Hd(e),
                i.return = t,
                t.child = i,
                yt = t,
                Xe = null)) : e = null,
                e === null)
                    throw $n(t);
                return t.lanes = 536870912,
                null
            }
            return yl(t, r)
        }
        var c = e.memoizedState;
        if (c !== null) {
            var m = c.dehydrated;
            if (wo(t),
            o)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = nm(e, t, i);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(l(558));
            else if (it || zi(e, t, i, !1),
            o = (i & e.childLanes) !== 0,
            it || o) {
                if (r = Ve,
                r !== null && (m = Xf(r, i),
                m !== 0 && m !== c.retryLane))
                    throw c.retryLane = m,
                    qa(e, m),
                    zt(r, e, m),
                    Go;
                Tl(),
                t = nm(e, t, i)
            } else
                e = c.treeContext,
                Xe = en(m.nextSibling),
                yt = t,
                Ee = !0,
                Jn = null,
                $t = !1,
                e !== null && Vd(t, e),
                t = yl(t, r),
                t.flags |= 4096;
            return t
        }
        return e = Rn(e.child, {
            mode: r.mode,
            children: r.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function gl(e, t) {
        var i = t.ref;
        if (i === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof i != "function" && typeof i != "object")
                throw Error(l(284));
            (e === null || e.ref !== i) && (t.flags |= 4194816)
        }
    }
    function Qo(e, t, i, r, o) {
        return Ga(t),
        i = Ro(e, t, i, r, void 0, o),
        r = Ao(),
        e !== null && !it ? (To(e, t, o),
        Nn(e, t, o)) : (Ee && r && so(t),
        t.flags |= 1,
        vt(e, t, i, o),
        t.child)
    }
    function am(e, t, i, r, o, c) {
        return Ga(t),
        t.updateQueue = null,
        i = rh(t, r, i, o),
        sh(e),
        r = Ao(),
        e !== null && !it ? (To(e, t, c),
        Nn(e, t, c)) : (Ee && r && so(t),
        t.flags |= 1,
        vt(e, t, i, c),
        t.child)
    }
    function im(e, t, i, r, o) {
        if (Ga(t),
        t.stateNode === null) {
            var c = Ci
              , m = i.contextType;
            typeof m == "object" && m !== null && (c = gt(m)),
            c = new i(r,c),
            t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = Vo,
            t.stateNode = c,
            c._reactInternals = t,
            c = t.stateNode,
            c.props = r,
            c.state = t.memoizedState,
            c.refs = {},
            go(t),
            m = i.contextType,
            c.context = typeof m == "object" && m !== null ? gt(m) : Ci,
            c.state = t.memoizedState,
            m = i.getDerivedStateFromProps,
            typeof m == "function" && (Zo(t, i, m, r),
            c.state = t.memoizedState),
            typeof i.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (m = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            m !== c.state && Vo.enqueueReplaceState(c, c.state, null),
            Hs(t, r, c, o),
            Bs(),
            c.state = t.memoizedState),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            r = !0
        } else if (e === null) {
            c = t.stateNode;
            var b = t.memoizedProps
              , E = Ia(i, b);
            c.props = E;
            var D = c.context
              , q = i.contextType;
            m = Ci,
            typeof q == "object" && q !== null && (m = gt(q));
            var G = i.getDerivedStateFromProps;
            q = typeof G == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            b = t.pendingProps !== b,
            q || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b || D !== m) && Gh(t, c, r, m),
            ea = !1;
            var L = t.memoizedState;
            c.state = L,
            Hs(t, r, c, o),
            Bs(),
            D = t.memoizedState,
            b || L !== D || ea ? (typeof G == "function" && (Zo(t, i, G, r),
            D = t.memoizedState),
            (E = ea || Yh(t, i, E, r, L, D, m)) ? (q || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = D),
            c.props = r,
            c.state = D,
            c.context = m,
            r = E) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            r = !1)
        } else {
            c = t.stateNode,
            vo(e, t),
            m = t.memoizedProps,
            q = Ia(i, m),
            c.props = q,
            G = t.pendingProps,
            L = c.context,
            D = i.contextType,
            E = Ci,
            typeof D == "object" && D !== null && (E = gt(D)),
            b = i.getDerivedStateFromProps,
            (D = typeof b == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== G || L !== E) && Gh(t, c, r, E),
            ea = !1,
            L = t.memoizedState,
            c.state = L,
            Hs(t, r, c, o),
            Bs();
            var U = t.memoizedState;
            m !== G || L !== U || ea || e !== null && e.dependencies !== null && $r(e.dependencies) ? (typeof b == "function" && (Zo(t, i, b, r),
            U = t.memoizedState),
            (q = ea || Yh(t, i, q, r, L, U, E) || e !== null && e.dependencies !== null && $r(e.dependencies)) ? (D || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, U, E),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, U, E)),
            typeof c.componentDidUpdate == "function" && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && L === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = r,
            t.memoizedState = U),
            c.props = r,
            c.state = U,
            c.context = E,
            r = q) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && L === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024),
            r = !1)
        }
        return c = r,
        gl(e, t),
        r = (t.flags & 128) !== 0,
        c || r ? (c = t.stateNode,
        i = r && typeof i.getDerivedStateFromError != "function" ? null : c.render(),
        t.flags |= 1,
        e !== null && r ? (t.child = Ka(t, e.child, null, o),
        t.child = Ka(t, null, i, o)) : vt(e, t, i, o),
        t.memoizedState = c.state,
        e = t.child) : e = Nn(e, t, o),
        e
    }
    function sm(e, t, i, r) {
        return Va(),
        t.flags |= 256,
        vt(e, t, i, r),
        t.child
    }
    var Xo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Po(e) {
        return {
            baseLanes: e,
            cachePool: Kd()
        }
    }
    function Ko(e, t, i) {
        return e = e !== null ? e.childLanes & ~i : 0,
        t && (e |= Yt),
        e
    }
    function rm(e, t, i) {
        var r = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, m;
        if ((m = c) || (m = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0),
        m && (o = !0,
        t.flags &= -129),
        m = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (Ee) {
                if (o ? aa(t) : ia(),
                (e = Xe) ? (e = mp(e, $t),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: In !== null ? {
                        id: dn,
                        overflow: hn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                i = Hd(e),
                i.return = t,
                t.child = i,
                yt = t,
                Xe = null)) : e = null,
                e === null)
                    throw $n(t);
                return Mc(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var b = r.children;
            return r = r.fallback,
            o ? (ia(),
            o = t.mode,
            b = vl({
                mode: "hidden",
                children: b
            }, o),
            r = Za(r, o, i, null),
            b.return = t,
            r.return = t,
            b.sibling = r,
            t.child = b,
            r = t.child,
            r.memoizedState = Po(i),
            r.childLanes = Ko(e, m, i),
            t.memoizedState = Xo,
            Gs(null, r)) : (aa(t),
            Fo(t, b))
        }
        var E = e.memoizedState;
        if (E !== null && (b = E.dehydrated,
        b !== null)) {
            if (c)
                t.flags & 256 ? (aa(t),
                t.flags &= -257,
                t = Io(e, t, i)) : t.memoizedState !== null ? (ia(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (ia(),
                b = r.fallback,
                o = t.mode,
                r = vl({
                    mode: "visible",
                    children: r.children
                }, o),
                b = Za(b, o, i, null),
                b.flags |= 2,
                r.return = t,
                b.return = t,
                r.sibling = b,
                t.child = r,
                Ka(t, e.child, null, i),
                r = t.child,
                r.memoizedState = Po(i),
                r.childLanes = Ko(e, m, i),
                t.memoizedState = Xo,
                t = Gs(null, r));
            else if (aa(t),
            Mc(b)) {
                if (m = b.nextSibling && b.nextSibling.dataset,
                m)
                    var D = m.dgst;
                m = D,
                r = Error(l(419)),
                r.stack = "",
                r.digest = m,
                zs({
                    value: r,
                    source: null,
                    stack: null
                }),
                t = Io(e, t, i)
            } else if (it || zi(e, t, i, !1),
            m = (i & e.childLanes) !== 0,
            it || m) {
                if (m = Ve,
                m !== null && (r = Xf(m, i),
                r !== 0 && r !== E.retryLane))
                    throw E.retryLane = r,
                    qa(e, r),
                    zt(m, e, r),
                    Go;
                Oc(b) || Tl(),
                t = Io(e, t, i)
            } else
                Oc(b) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = E.treeContext,
                Xe = en(b.nextSibling),
                yt = t,
                Ee = !0,
                Jn = null,
                $t = !1,
                e !== null && Vd(t, e),
                t = Fo(t, r.children),
                t.flags |= 4096);
            return t
        }
        return o ? (ia(),
        b = r.fallback,
        o = t.mode,
        E = e.child,
        D = E.sibling,
        r = Rn(E, {
            mode: "hidden",
            children: r.children
        }),
        r.subtreeFlags = E.subtreeFlags & 65011712,
        D !== null ? b = Rn(D, b) : (b = Za(b, o, i, null),
        b.flags |= 2),
        b.return = t,
        r.return = t,
        r.sibling = b,
        t.child = r,
        Gs(null, r),
        r = t.child,
        b = e.child.memoizedState,
        b === null ? b = Po(i) : (o = b.cachePool,
        o !== null ? (E = nt._currentValue,
        o = o.parent !== E ? {
            parent: E,
            pool: E
        } : o) : o = Kd(),
        b = {
            baseLanes: b.baseLanes | i,
            cachePool: o
        }),
        r.memoizedState = b,
        r.childLanes = Ko(e, m, i),
        t.memoizedState = Xo,
        Gs(e.child, r)) : (aa(t),
        i = e.child,
        e = i.sibling,
        i = Rn(i, {
            mode: "visible",
            children: r.children
        }),
        i.return = t,
        i.sibling = null,
        e !== null && (m = t.deletions,
        m === null ? (t.deletions = [e],
        t.flags |= 16) : m.push(e)),
        t.child = i,
        t.memoizedState = null,
        i)
    }
    function Fo(e, t) {
        return t = vl({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function vl(e, t) {
        return e = Ht(22, e, null, t),
        e.lanes = 0,
        e
    }
    function Io(e, t, i) {
        return Ka(t, e.child, null, i),
        e = Fo(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function lm(e, t, i) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t),
        co(e.return, t, i)
    }
    function Jo(e, t, i, r, o, c) {
        var m = e.memoizedState;
        m === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: i,
            tailMode: o,
            treeForkCount: c
        } : (m.isBackwards = t,
        m.rendering = null,
        m.renderingStartTime = 0,
        m.last = r,
        m.tail = i,
        m.tailMode = o,
        m.treeForkCount = c)
    }
    function um(e, t, i) {
        var r = t.pendingProps
          , o = r.revealOrder
          , c = r.tail;
        r = r.children;
        var m = et.current
          , b = (m & 2) !== 0;
        if (b ? (m = m & 1 | 2,
        t.flags |= 128) : m &= 1,
        F(et, m),
        vt(e, t, r, i),
        r = Ee ? Ns : 0,
        !b && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && lm(e, i, t);
                else if (e.tag === 19)
                    lm(e, i, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (o) {
        case "forwards":
            for (i = t.child,
            o = null; i !== null; )
                e = i.alternate,
                e !== null && rl(e) === null && (o = i),
                i = i.sibling;
            i = o,
            i === null ? (o = t.child,
            t.child = null) : (o = i.sibling,
            i.sibling = null),
            Jo(t, !1, o, i, c, r);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (i = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && rl(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = i,
                i = o,
                o = e
            }
            Jo(t, !0, i, null, c, r);
            break;
        case "together":
            Jo(t, !1, null, null, void 0, r);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Nn(e, t, i) {
        if (e !== null && (t.dependencies = e.dependencies),
        la |= t.lanes,
        (i & t.childLanes) === 0)
            if (e !== null) {
                if (zi(e, t, i, !1),
                (i & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(l(153));
        if (t.child !== null) {
            for (e = t.child,
            i = Rn(e, e.pendingProps),
            t.child = i,
            i.return = t; e.sibling !== null; )
                e = e.sibling,
                i = i.sibling = Rn(e, e.pendingProps),
                i.return = t;
            i.sibling = null
        }
        return t.child
    }
    function $o(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && $r(e)))
    }
    function ib(e, t, i) {
        switch (t.tag) {
        case 3:
            We(t, t.stateNode.containerInfo),
            Wn(t, nt, e.memoizedState.cache),
            Va();
            break;
        case 27:
        case 5:
            bn(t);
            break;
        case 4:
            We(t, t.stateNode.containerInfo);
            break;
        case 10:
            Wn(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                wo(t),
                null;
            break;
        case 13:
            var r = t.memoizedState;
            if (r !== null)
                return r.dehydrated !== null ? (aa(t),
                t.flags |= 128,
                null) : (i & t.child.childLanes) !== 0 ? rm(e, t, i) : (aa(t),
                e = Nn(e, t, i),
                e !== null ? e.sibling : null);
            aa(t);
            break;
        case 19:
            var o = (e.flags & 128) !== 0;
            if (r = (i & t.childLanes) !== 0,
            r || (zi(e, t, i, !1),
            r = (i & t.childLanes) !== 0),
            o) {
                if (r)
                    return um(e, t, i);
                t.flags |= 128
            }
            if (o = t.memoizedState,
            o !== null && (o.rendering = null,
            o.tail = null,
            o.lastEffect = null),
            F(et, et.current),
            r)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            em(e, t, i, t.pendingProps);
        case 24:
            Wn(t, nt, e.memoizedState.cache)
        }
        return Nn(e, t, i)
    }
    function om(e, t, i) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                it = !0;
            else {
                if (!$o(e, i) && (t.flags & 128) === 0)
                    return it = !1,
                    ib(e, t, i);
                it = (e.flags & 131072) !== 0
            }
        else
            it = !1,
            Ee && (t.flags & 1048576) !== 0 && Zd(t, Ns, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var r = t.pendingProps;
                if (e = Xa(t.elementType),
                t.type = e,
                typeof e == "function")
                    no(e) ? (r = Ia(e, r),
                    t.tag = 1,
                    t = im(null, t, e, r, i)) : (t.tag = 0,
                    t = Qo(null, t, e, r, i));
                else {
                    if (e != null) {
                        var o = e.$$typeof;
                        if (o === H) {
                            t.tag = 11,
                            t = Jh(null, t, e, r, i);
                            break e
                        } else if (o === Q) {
                            t.tag = 14,
                            t = $h(null, t, e, r, i);
                            break e
                        }
                    }
                    throw t = $e(e) || e,
                    Error(l(306, t, ""))
                }
            }
            return t;
        case 0:
            return Qo(e, t, t.type, t.pendingProps, i);
        case 1:
            return r = t.type,
            o = Ia(r, t.pendingProps),
            im(e, t, r, o, i);
        case 3:
            e: {
                if (We(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(l(387));
                r = t.pendingProps;
                var c = t.memoizedState;
                o = c.element,
                vo(e, t),
                Hs(t, r, null, i);
                var m = t.memoizedState;
                if (r = m.cache,
                Wn(t, nt, r),
                r !== c.cache && fo(t, [nt], i, !0),
                Bs(),
                r = m.element,
                c.isDehydrated)
                    if (c = {
                        element: r,
                        isDehydrated: !1,
                        cache: m.cache
                    },
                    t.updateQueue.baseState = c,
                    t.memoizedState = c,
                    t.flags & 256) {
                        t = sm(e, t, r, i);
                        break e
                    } else if (r !== o) {
                        o = Ft(Error(l(424)), t),
                        zs(o),
                        t = sm(e, t, r, i);
                        break e
                    } else
                        for (e = t.stateNode.containerInfo,
                        e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                        Xe = en(e.firstChild),
                        yt = t,
                        Ee = !0,
                        Jn = null,
                        $t = !0,
                        i = eh(t, null, r, i),
                        t.child = i; i; )
                            i.flags = i.flags & -3 | 4096,
                            i = i.sibling;
                else {
                    if (Va(),
                    r === o) {
                        t = Nn(e, t, i);
                        break e
                    }
                    vt(e, t, r, i)
                }
                t = t.child
            }
            return t;
        case 26:
            return gl(e, t),
            e === null ? (i = Sp(t.type, null, t.pendingProps, null)) ? t.memoizedState = i : Ee || (i = t.type,
            e = t.pendingProps,
            r = Dl(ge.current).createElement(i),
            r[pt] = t,
            r[At] = e,
            bt(r, i, e),
            ft(r),
            t.stateNode = r) : t.memoizedState = Sp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return bn(t),
            e === null && Ee && (r = t.stateNode = gp(t.type, t.pendingProps, ge.current),
            yt = t,
            $t = !0,
            o = Xe,
            da(t.type) ? (Nc = o,
            Xe = en(r.firstChild)) : Xe = o),
            vt(e, t, t.pendingProps.children, i),
            gl(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && Ee && ((o = r = Xe) && (r = Db(r, t.type, t.pendingProps, $t),
            r !== null ? (t.stateNode = r,
            yt = t,
            Xe = en(r.firstChild),
            $t = !1,
            o = !0) : o = !1),
            o || $n(t)),
            bn(t),
            o = t.type,
            c = t.pendingProps,
            m = e !== null ? e.memoizedProps : null,
            r = c.children,
            Ac(o, c) ? r = null : m !== null && Ac(o, m) && (t.flags |= 32),
            t.memoizedState !== null && (o = Ro(e, t, F0, null, null, i),
            sr._currentValue = o),
            gl(e, t),
            vt(e, t, r, i),
            t.child;
        case 6:
            return e === null && Ee && ((e = i = Xe) && (i = Lb(i, t.pendingProps, $t),
            i !== null ? (t.stateNode = i,
            yt = t,
            Xe = null,
            e = !0) : e = !1),
            e || $n(t)),
            null;
        case 13:
            return rm(e, t, i);
        case 4:
            return We(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            e === null ? t.child = Ka(t, null, r, i) : vt(e, t, r, i),
            t.child;
        case 11:
            return Jh(e, t, t.type, t.pendingProps, i);
        case 7:
            return vt(e, t, t.pendingProps, i),
            t.child;
        case 8:
            return vt(e, t, t.pendingProps.children, i),
            t.child;
        case 12:
            return vt(e, t, t.pendingProps.children, i),
            t.child;
        case 10:
            return r = t.pendingProps,
            Wn(t, t.type, r.value),
            vt(e, t, r.children, i),
            t.child;
        case 9:
            return o = t.type._context,
            r = t.pendingProps.children,
            Ga(t),
            o = gt(o),
            r = r(o),
            t.flags |= 1,
            vt(e, t, r, i),
            t.child;
        case 14:
            return $h(e, t, t.type, t.pendingProps, i);
        case 15:
            return Wh(e, t, t.type, t.pendingProps, i);
        case 19:
            return um(e, t, i);
        case 31:
            return ab(e, t, i);
        case 22:
            return em(e, t, i, t.pendingProps);
        case 24:
            return Ga(t),
            r = gt(nt),
            e === null ? (o = po(),
            o === null && (o = Ve,
            c = ho(),
            o.pooledCache = c,
            c.refCount++,
            c !== null && (o.pooledCacheLanes |= i),
            o = c),
            t.memoizedState = {
                parent: r,
                cache: o
            },
            go(t),
            Wn(t, nt, o)) : ((e.lanes & i) !== 0 && (vo(e, t),
            Hs(t, null, null, i),
            Bs()),
            o = e.memoizedState,
            c = t.memoizedState,
            o.parent !== r ? (o = {
                parent: r,
                cache: r
            },
            t.memoizedState = o,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o),
            Wn(t, nt, r)) : (r = c.cache,
            Wn(t, nt, r),
            r !== o.cache && fo(t, [nt], i, !0))),
            vt(e, t, t.pendingProps.children, i),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(l(156, t.tag))
    }
    function zn(e) {
        e.flags |= 4
    }
    function Wo(e, t, i, r, o) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (o & 335544128) === o)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Um())
                    e.flags |= 8192;
                else
                    throw Pa = nl,
                    yo
        } else
            e.flags &= -16777217
    }
    function cm(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Rp(t))
            if (Um())
                e.flags |= 8192;
            else
                throw Pa = nl,
                yo
    }
    function bl(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? Yf() : 536870912,
        e.lanes |= t,
        Gi |= t)
    }
    function Qs(e, t) {
        if (!Ee)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var i = null; t !== null; )
                    t.alternate !== null && (i = t),
                    t = t.sibling;
                i === null ? e.tail = null : i.sibling = null;
                break;
            case "collapsed":
                i = e.tail;
                for (var r = null; i !== null; )
                    i.alternate !== null && (r = i),
                    i = i.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function Pe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , i = 0
          , r = 0;
        if (t)
            for (var o = e.child; o !== null; )
                i |= o.lanes | o.childLanes,
                r |= o.subtreeFlags & 65011712,
                r |= o.flags & 65011712,
                o.return = e,
                o = o.sibling;
        else
            for (o = e.child; o !== null; )
                i |= o.lanes | o.childLanes,
                r |= o.subtreeFlags,
                r |= o.flags,
                o.return = e,
                o = o.sibling;
        return e.subtreeFlags |= r,
        e.childLanes = i,
        t
    }
    function sb(e, t, i) {
        var r = t.pendingProps;
        switch (ro(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Pe(t),
            null;
        case 1:
            return Pe(t),
            null;
        case 3:
            return i = t.stateNode,
            r = null,
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Cn(nt),
            Ze(),
            i.pendingContext && (i.context = i.pendingContext,
            i.pendingContext = null),
            (e === null || e.child === null) && (Ni(t) ? zn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            uo())),
            Pe(t),
            null;
        case 26:
            var o = t.type
              , c = t.memoizedState;
            return e === null ? (zn(t),
            c !== null ? (Pe(t),
            cm(t, c)) : (Pe(t),
            Wo(t, o, null, r, i))) : c ? c !== e.memoizedState ? (zn(t),
            Pe(t),
            cm(t, c)) : (Pe(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== r && zn(t),
            Pe(t),
            Wo(t, o, e, r, i)),
            null;
        case 27:
            if (Sn(t),
            i = ge.current,
            o = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== r && zn(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(l(166));
                    return Pe(t),
                    null
                }
                e = ee.current,
                Ni(t) ? Yd(t) : (e = gp(o, r, i),
                t.stateNode = e,
                zn(t))
            }
            return Pe(t),
            null;
        case 5:
            if (Sn(t),
            o = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== r && zn(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(l(166));
                    return Pe(t),
                    null
                }
                if (c = ee.current,
                Ni(t))
                    Yd(t);
                else {
                    var m = Dl(ge.current);
                    switch (c) {
                    case 1:
                        c = m.createElementNS("http://www.w3.org/2000/svg", o);
                        break;
                    case 2:
                        c = m.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                        break;
                    default:
                        switch (o) {
                        case "svg":
                            c = m.createElementNS("http://www.w3.org/2000/svg", o);
                            break;
                        case "math":
                            c = m.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                            break;
                        case "script":
                            c = m.createElement("div"),
                            c.innerHTML = "<script><\/script>",
                            c = c.removeChild(c.firstChild);
                            break;
                        case "select":
                            c = typeof r.is == "string" ? m.createElement("select", {
                                is: r.is
                            }) : m.createElement("select"),
                            r.multiple ? c.multiple = !0 : r.size && (c.size = r.size);
                            break;
                        default:
                            c = typeof r.is == "string" ? m.createElement(o, {
                                is: r.is
                            }) : m.createElement(o)
                        }
                    }
                    c[pt] = t,
                    c[At] = r;
                    e: for (m = t.child; m !== null; ) {
                        if (m.tag === 5 || m.tag === 6)
                            c.appendChild(m.stateNode);
                        else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                            m.child.return = m,
                            m = m.child;
                            continue
                        }
                        if (m === t)
                            break e;
                        for (; m.sibling === null; ) {
                            if (m.return === null || m.return === t)
                                break e;
                            m = m.return
                        }
                        m.sibling.return = m.return,
                        m = m.sibling
                    }
                    t.stateNode = c;
                    e: switch (bt(c, o, r),
                    o) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                    r && zn(t)
                }
            }
            return Pe(t),
            Wo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, i),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== r && zn(t);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(l(166));
                if (e = ge.current,
                Ni(t)) {
                    if (e = t.stateNode,
                    i = t.memoizedProps,
                    r = null,
                    o = yt,
                    o !== null)
                        switch (o.tag) {
                        case 27:
                        case 5:
                            r = o.memoizedProps
                        }
                    e[pt] = t,
                    e = !!(e.nodeValue === i || r !== null && r.suppressHydrationWarning === !0 || rp(e.nodeValue, i)),
                    e || $n(t, !0)
                } else
                    e = Dl(e).createTextNode(r),
                    e[pt] = t,
                    t.stateNode = e
            }
            return Pe(t),
            null;
        case 31:
            if (i = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (r = Ni(t),
                i !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(l(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(l(557));
                        e[pt] = t
                    } else
                        Va(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Pe(t),
                    e = !1
                } else
                    i = uo(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (Zt(t),
                    t) : (Zt(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(l(558))
            }
            return Pe(t),
            null;
        case 13:
            if (r = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (o = Ni(t),
                r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(l(318));
                        if (o = t.memoizedState,
                        o = o !== null ? o.dehydrated : null,
                        !o)
                            throw Error(l(317));
                        o[pt] = t
                    } else
                        Va(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Pe(t),
                    o = !1
                } else
                    o = uo(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o),
                    o = !0;
                if (!o)
                    return t.flags & 256 ? (Zt(t),
                    t) : (Zt(t),
                    null)
            }
            return Zt(t),
            (t.flags & 128) !== 0 ? (t.lanes = i,
            t) : (i = r !== null,
            e = e !== null && e.memoizedState !== null,
            i && (r = t.child,
            o = null,
            r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (o = r.alternate.memoizedState.cachePool.pool),
            c = null,
            r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool),
            c !== o && (r.flags |= 2048)),
            i !== e && i && (t.child.flags |= 8192),
            bl(t, t.updateQueue),
            Pe(t),
            null);
        case 4:
            return Ze(),
            e === null && _c(t.stateNode.containerInfo),
            Pe(t),
            null;
        case 10:
            return Cn(t.type),
            Pe(t),
            null;
        case 19:
            if (Y(et),
            r = t.memoizedState,
            r === null)
                return Pe(t),
                null;
            if (o = (t.flags & 128) !== 0,
            c = r.rendering,
            c === null)
                if (o)
                    Qs(r, !1);
                else {
                    if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (c = rl(e),
                            c !== null) {
                                for (t.flags |= 128,
                                Qs(r, !1),
                                e = c.updateQueue,
                                t.updateQueue = e,
                                bl(t, e),
                                t.subtreeFlags = 0,
                                e = i,
                                i = t.child; i !== null; )
                                    Bd(i, e),
                                    i = i.sibling;
                                return F(et, et.current & 1 | 2),
                                Ee && An(t, r.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    r.tail !== null && _t() > El && (t.flags |= 128,
                    o = !0,
                    Qs(r, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!o)
                    if (e = rl(c),
                    e !== null) {
                        if (t.flags |= 128,
                        o = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        bl(t, e),
                        Qs(r, !0),
                        r.tail === null && r.tailMode === "hidden" && !c.alternate && !Ee)
                            return Pe(t),
                            null
                    } else
                        2 * _t() - r.renderingStartTime > El && i !== 536870912 && (t.flags |= 128,
                        o = !0,
                        Qs(r, !1),
                        t.lanes = 4194304);
                r.isBackwards ? (c.sibling = t.child,
                t.child = c) : (e = r.last,
                e !== null ? e.sibling = c : t.child = c,
                r.last = c)
            }
            return r.tail !== null ? (e = r.tail,
            r.rendering = e,
            r.tail = e.sibling,
            r.renderingStartTime = _t(),
            e.sibling = null,
            i = et.current,
            F(et, o ? i & 1 | 2 : i & 1),
            Ee && An(t, r.treeForkCount),
            e) : (Pe(t),
            null);
        case 22:
        case 23:
            return Zt(t),
            xo(),
            r = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
            r ? (i & 536870912) !== 0 && (t.flags & 128) === 0 && (Pe(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t),
            i = t.updateQueue,
            i !== null && bl(t, i.retryQueue),
            i = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
            r = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool),
            r !== i && (t.flags |= 2048),
            e !== null && Y(Qa),
            null;
        case 24:
            return i = null,
            e !== null && (i = e.memoizedState.cache),
            t.memoizedState.cache !== i && (t.flags |= 2048),
            Cn(nt),
            Pe(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(l(156, t.tag))
    }
    function rb(e, t) {
        switch (ro(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Cn(nt),
            Ze(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Sn(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (Zt(t),
                t.alternate === null)
                    throw Error(l(340));
                Va()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (Zt(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(l(340));
                Va()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Y(et),
            null;
        case 4:
            return Ze(),
            null;
        case 10:
            return Cn(t.type),
            null;
        case 22:
        case 23:
            return Zt(t),
            xo(),
            e !== null && Y(Qa),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Cn(nt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function fm(e, t) {
        switch (ro(t),
        t.tag) {
        case 3:
            Cn(nt),
            Ze();
            break;
        case 26:
        case 27:
        case 5:
            Sn(t);
            break;
        case 4:
            Ze();
            break;
        case 31:
            t.memoizedState !== null && Zt(t);
            break;
        case 13:
            Zt(t);
            break;
        case 19:
            Y(et);
            break;
        case 10:
            Cn(t.type);
            break;
        case 22:
        case 23:
            Zt(t),
            xo(),
            e !== null && Y(Qa);
            break;
        case 24:
            Cn(nt)
        }
    }
    function Xs(e, t) {
        try {
            var i = t.updateQueue
              , r = i !== null ? i.lastEffect : null;
            if (r !== null) {
                var o = r.next;
                i = o;
                do {
                    if ((i.tag & e) === e) {
                        r = void 0;
                        var c = i.create
                          , m = i.inst;
                        r = c(),
                        m.destroy = r
                    }
                    i = i.next
                } while (i !== o)
            }
        } catch (b) {
            ke(t, t.return, b)
        }
    }
    function sa(e, t, i) {
        try {
            var r = t.updateQueue
              , o = r !== null ? r.lastEffect : null;
            if (o !== null) {
                var c = o.next;
                r = c;
                do {
                    if ((r.tag & e) === e) {
                        var m = r.inst
                          , b = m.destroy;
                        if (b !== void 0) {
                            m.destroy = void 0,
                            o = t;
                            var E = i
                              , D = b;
                            try {
                                D()
                            } catch (q) {
                                ke(o, E, q)
                            }
                        }
                    }
                    r = r.next
                } while (r !== c)
            }
        } catch (q) {
            ke(t, t.return, q)
        }
    }
    function dm(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var i = e.stateNode;
            try {
                nh(t, i)
            } catch (r) {
                ke(e, e.return, r)
            }
        }
    }
    function hm(e, t, i) {
        i.props = Ia(e.type, e.memoizedProps),
        i.state = e.memoizedState;
        try {
            i.componentWillUnmount()
        } catch (r) {
            ke(e, t, r)
        }
    }
    function Ps(e, t) {
        try {
            var i = e.ref;
            if (i !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var r = e.stateNode;
                    break;
                case 30:
                    r = e.stateNode;
                    break;
                default:
                    r = e.stateNode
                }
                typeof i == "function" ? e.refCleanup = i(r) : i.current = r
            }
        } catch (o) {
            ke(e, t, o)
        }
    }
    function mn(e, t) {
        var i = e.ref
          , r = e.refCleanup;
        if (i !== null)
            if (typeof r == "function")
                try {
                    r()
                } catch (o) {
                    ke(e, t, o)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof i == "function")
                try {
                    i(null)
                } catch (o) {
                    ke(e, t, o)
                }
            else
                i.current = null
    }
    function mm(e) {
        var t = e.type
          , i = e.memoizedProps
          , r = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                i.autoFocus && r.focus();
                break e;
            case "img":
                i.src ? r.src = i.src : i.srcSet && (r.srcset = i.srcSet)
            }
        } catch (o) {
            ke(e, e.return, o)
        }
    }
    function ec(e, t, i) {
        try {
            var r = e.stateNode;
            Cb(r, e.type, i, t),
            r[At] = t
        } catch (o) {
            ke(e, e.return, o)
        }
    }
    function pm(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && da(e.type) || e.tag === 4
    }
    function tc(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || pm(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && da(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function nc(e, t, i) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, t) : (t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i,
            t.appendChild(e),
            i = i._reactRootContainer,
            i != null || t.onclick !== null || (t.onclick = wn));
        else if (r !== 4 && (r === 27 && da(e.type) && (i = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (nc(e, t, i),
            e = e.sibling; e !== null; )
                nc(e, t, i),
                e = e.sibling
    }
    function Sl(e, t, i) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? i.insertBefore(e, t) : i.appendChild(e);
        else if (r !== 4 && (r === 27 && da(e.type) && (i = e.stateNode),
        e = e.child,
        e !== null))
            for (Sl(e, t, i),
            e = e.sibling; e !== null; )
                Sl(e, t, i),
                e = e.sibling
    }
    function ym(e) {
        var t = e.stateNode
          , i = e.memoizedProps;
        try {
            for (var r = e.type, o = t.attributes; o.length; )
                t.removeAttributeNode(o[0]);
            bt(t, r, i),
            t[pt] = e,
            t[At] = i
        } catch (c) {
            ke(e, e.return, c)
        }
    }
    var jn = !1
      , st = !1
      , ac = !1
      , gm = typeof WeakSet == "function" ? WeakSet : Set
      , dt = null;
    function lb(e, t) {
        if (e = e.containerInfo,
        Ec = Zl,
        e = Od(e),
        Fu(e)) {
            if ("selectionStart"in e)
                var i = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    i = (i = e.ownerDocument) && i.defaultView || window;
                    var r = i.getSelection && i.getSelection();
                    if (r && r.rangeCount !== 0) {
                        i = r.anchorNode;
                        var o = r.anchorOffset
                          , c = r.focusNode;
                        r = r.focusOffset;
                        try {
                            i.nodeType,
                            c.nodeType
                        } catch {
                            i = null;
                            break e
                        }
                        var m = 0
                          , b = -1
                          , E = -1
                          , D = 0
                          , q = 0
                          , G = e
                          , L = null;
                        t: for (; ; ) {
                            for (var U; G !== i || o !== 0 && G.nodeType !== 3 || (b = m + o),
                            G !== c || r !== 0 && G.nodeType !== 3 || (E = m + r),
                            G.nodeType === 3 && (m += G.nodeValue.length),
                            (U = G.firstChild) !== null; )
                                L = G,
                                G = U;
                            for (; ; ) {
                                if (G === e)
                                    break t;
                                if (L === i && ++D === o && (b = m),
                                L === c && ++q === r && (E = m),
                                (U = G.nextSibling) !== null)
                                    break;
                                G = L,
                                L = G.parentNode
                            }
                            G = U
                        }
                        i = b === -1 || E === -1 ? null : {
                            start: b,
                            end: E
                        }
                    } else
                        i = null
                }
            i = i || {
                start: 0,
                end: 0
            }
        } else
            i = null;
        for (Rc = {
            focusedElem: e,
            selectionRange: i
        },
        Zl = !1,
        dt = t; dt !== null; )
            if (t = dt,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                dt = e;
            else
                for (; dt !== null; ) {
                    switch (t = dt,
                    c = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (i = 0; i < e.length; i++)
                                o = e[i],
                                o.ref.impl = o.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && c !== null) {
                            e = void 0,
                            i = t,
                            o = c.memoizedProps,
                            c = c.memoizedState,
                            r = i.stateNode;
                            try {
                                var ne = Ia(i.type, o);
                                e = r.getSnapshotBeforeUpdate(ne, c),
                                r.__reactInternalSnapshotBeforeUpdate = e
                            } catch (fe) {
                                ke(i, i.return, fe)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            i = e.nodeType,
                            i === 9)
                                Cc(e);
                            else if (i === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Cc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(l(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        dt = e;
                        break
                    }
                    dt = t.return
                }
    }
    function vm(e, t, i) {
        var r = i.flags;
        switch (i.tag) {
        case 0:
        case 11:
        case 15:
            Ln(e, i),
            r & 4 && Xs(5, i);
            break;
        case 1:
            if (Ln(e, i),
            r & 4)
                if (e = i.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (m) {
                        ke(i, i.return, m)
                    }
                else {
                    var o = Ia(i.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (m) {
                        ke(i, i.return, m)
                    }
                }
            r & 64 && dm(i),
            r & 512 && Ps(i, i.return);
            break;
        case 3:
            if (Ln(e, i),
            r & 64 && (e = i.updateQueue,
            e !== null)) {
                if (t = null,
                i.child !== null)
                    switch (i.child.tag) {
                    case 27:
                    case 5:
                        t = i.child.stateNode;
                        break;
                    case 1:
                        t = i.child.stateNode
                    }
                try {
                    nh(e, t)
                } catch (m) {
                    ke(i, i.return, m)
                }
            }
            break;
        case 27:
            t === null && r & 4 && ym(i);
        case 26:
        case 5:
            Ln(e, i),
            t === null && r & 4 && mm(i),
            r & 512 && Ps(i, i.return);
            break;
        case 12:
            Ln(e, i);
            break;
        case 31:
            Ln(e, i),
            r & 4 && _m(e, i);
            break;
        case 13:
            Ln(e, i),
            r & 4 && xm(e, i),
            r & 64 && (e = i.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (i = yb.bind(null, i),
            Ub(e, i))));
            break;
        case 22:
            if (r = i.memoizedState !== null || jn,
            !r) {
                t = t !== null && t.memoizedState !== null || st,
                o = jn;
                var c = st;
                jn = r,
                (st = t) && !c ? Un(e, i, (i.subtreeFlags & 8772) !== 0) : Ln(e, i),
                jn = o,
                st = c
            }
            break;
        case 30:
            break;
        default:
            Ln(e, i)
        }
    }
    function bm(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        bm(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && zu(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Ke = null
      , Ct = !1;
    function Dn(e, t, i) {
        for (i = i.child; i !== null; )
            Sm(e, t, i),
            i = i.sibling
    }
    function Sm(e, t, i) {
        if (Ut && typeof Ut.onCommitFiberUnmount == "function")
            try {
                Ut.onCommitFiberUnmount(gs, i)
            } catch {}
        switch (i.tag) {
        case 26:
            st || mn(i, t),
            Dn(e, t, i),
            i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode,
            i.parentNode.removeChild(i));
            break;
        case 27:
            st || mn(i, t);
            var r = Ke
              , o = Ct;
            da(i.type) && (Ke = i.stateNode,
            Ct = !1),
            Dn(e, t, i),
            nr(i.stateNode),
            Ke = r,
            Ct = o;
            break;
        case 5:
            st || mn(i, t);
        case 6:
            if (r = Ke,
            o = Ct,
            Ke = null,
            Dn(e, t, i),
            Ke = r,
            Ct = o,
            Ke !== null)
                if (Ct)
                    try {
                        (Ke.nodeType === 9 ? Ke.body : Ke.nodeName === "HTML" ? Ke.ownerDocument.body : Ke).removeChild(i.stateNode)
                    } catch (c) {
                        ke(i, t, c)
                    }
                else
                    try {
                        Ke.removeChild(i.stateNode)
                    } catch (c) {
                        ke(i, t, c)
                    }
            break;
        case 18:
            Ke !== null && (Ct ? (e = Ke,
            dp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, i.stateNode),
            $i(e)) : dp(Ke, i.stateNode));
            break;
        case 4:
            r = Ke,
            o = Ct,
            Ke = i.stateNode.containerInfo,
            Ct = !0,
            Dn(e, t, i),
            Ke = r,
            Ct = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            sa(2, i, t),
            st || sa(4, i, t),
            Dn(e, t, i);
            break;
        case 1:
            st || (mn(i, t),
            r = i.stateNode,
            typeof r.componentWillUnmount == "function" && hm(i, t, r)),
            Dn(e, t, i);
            break;
        case 21:
            Dn(e, t, i);
            break;
        case 22:
            st = (r = st) || i.memoizedState !== null,
            Dn(e, t, i),
            st = r;
            break;
        default:
            Dn(e, t, i)
        }
    }
    function _m(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                $i(e)
            } catch (i) {
                ke(t, t.return, i)
            }
        }
    }
    function xm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                $i(e)
            } catch (i) {
                ke(t, t.return, i)
            }
    }
    function ub(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new gm),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new gm),
            t;
        default:
            throw Error(l(435, e.tag))
        }
    }
    function _l(e, t) {
        var i = ub(e);
        t.forEach(function(r) {
            if (!i.has(r)) {
                i.add(r);
                var o = gb.bind(null, e, r);
                r.then(o, o)
            }
        })
    }
    function Ot(e, t) {
        var i = t.deletions;
        if (i !== null)
            for (var r = 0; r < i.length; r++) {
                var o = i[r]
                  , c = e
                  , m = t
                  , b = m;
                e: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (da(b.type)) {
                            Ke = b.stateNode,
                            Ct = !1;
                            break e
                        }
                        break;
                    case 5:
                        Ke = b.stateNode,
                        Ct = !1;
                        break e;
                    case 3:
                    case 4:
                        Ke = b.stateNode.containerInfo,
                        Ct = !0;
                        break e
                    }
                    b = b.return
                }
                if (Ke === null)
                    throw Error(l(160));
                Sm(c, m, o),
                Ke = null,
                Ct = !1,
                c = o.alternate,
                c !== null && (c.return = null),
                o.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                wm(t, e),
                t = t.sibling
    }
    var rn = null;
    function wm(e, t) {
        var i = e.alternate
          , r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Ot(t, e),
            Mt(e),
            r & 4 && (sa(3, e, e.return),
            Xs(3, e),
            sa(5, e, e.return));
            break;
        case 1:
            Ot(t, e),
            Mt(e),
            r & 512 && (st || i === null || mn(i, i.return)),
            r & 64 && jn && (e = e.updateQueue,
            e !== null && (r = e.callbacks,
            r !== null && (i = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = i === null ? r : i.concat(r))));
            break;
        case 26:
            var o = rn;
            if (Ot(t, e),
            Mt(e),
            r & 512 && (st || i === null || mn(i, i.return)),
            r & 4) {
                var c = i !== null ? i.memoizedState : null;
                if (r = e.memoizedState,
                i === null)
                    if (r === null)
                        if (e.stateNode === null) {
                            e: {
                                r = e.type,
                                i = e.memoizedProps,
                                o = o.ownerDocument || o;
                                t: switch (r) {
                                case "title":
                                    c = o.getElementsByTagName("title")[0],
                                    (!c || c[Ss] || c[pt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(r),
                                    o.head.insertBefore(c, o.querySelector("head > title"))),
                                    bt(c, r, i),
                                    c[pt] = e,
                                    ft(c),
                                    r = c;
                                    break e;
                                case "link":
                                    var m = wp("link", "href", o).get(r + (i.href || ""));
                                    if (m) {
                                        for (var b = 0; b < m.length; b++)
                                            if (c = m[b],
                                            c.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && c.getAttribute("rel") === (i.rel == null ? null : i.rel) && c.getAttribute("title") === (i.title == null ? null : i.title) && c.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                                                m.splice(b, 1);
                                                break t
                                            }
                                    }
                                    c = o.createElement(r),
                                    bt(c, r, i),
                                    o.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (m = wp("meta", "content", o).get(r + (i.content || ""))) {
                                        for (b = 0; b < m.length; b++)
                                            if (c = m[b],
                                            c.getAttribute("content") === (i.content == null ? null : "" + i.content) && c.getAttribute("name") === (i.name == null ? null : i.name) && c.getAttribute("property") === (i.property == null ? null : i.property) && c.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && c.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                                                m.splice(b, 1);
                                                break t
                                            }
                                    }
                                    c = o.createElement(r),
                                    bt(c, r, i),
                                    o.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(l(468, r))
                                }
                                c[pt] = e,
                                ft(c),
                                r = c
                            }
                            e.stateNode = r
                        } else
                            Ep(o, e.type, e.stateNode);
                    else
                        e.stateNode = xp(o, r, e.memoizedProps);
                else
                    c !== r ? (c === null ? i.stateNode !== null && (i = i.stateNode,
                    i.parentNode.removeChild(i)) : c.count--,
                    r === null ? Ep(o, e.type, e.stateNode) : xp(o, r, e.memoizedProps)) : r === null && e.stateNode !== null && ec(e, e.memoizedProps, i.memoizedProps)
            }
            break;
        case 27:
            Ot(t, e),
            Mt(e),
            r & 512 && (st || i === null || mn(i, i.return)),
            i !== null && r & 4 && ec(e, e.memoizedProps, i.memoizedProps);
            break;
        case 5:
            if (Ot(t, e),
            Mt(e),
            r & 512 && (st || i === null || mn(i, i.return)),
            e.flags & 32) {
                o = e.stateNode;
                try {
                    _i(o, "")
                } catch (ne) {
                    ke(e, e.return, ne)
                }
            }
            r & 4 && e.stateNode != null && (o = e.memoizedProps,
            ec(e, o, i !== null ? i.memoizedProps : o)),
            r & 1024 && (ac = !0);
            break;
        case 6:
            if (Ot(t, e),
            Mt(e),
            r & 4) {
                if (e.stateNode === null)
                    throw Error(l(162));
                r = e.memoizedProps,
                i = e.stateNode;
                try {
                    i.nodeValue = r
                } catch (ne) {
                    ke(e, e.return, ne)
                }
            }
            break;
        case 3:
            if (kl = null,
            o = rn,
            rn = Ll(t.containerInfo),
            Ot(t, e),
            rn = o,
            Mt(e),
            r & 4 && i !== null && i.memoizedState.isDehydrated)
                try {
                    $i(t.containerInfo)
                } catch (ne) {
                    ke(e, e.return, ne)
                }
            ac && (ac = !1,
            Em(e));
            break;
        case 4:
            r = rn,
            rn = Ll(e.stateNode.containerInfo),
            Ot(t, e),
            Mt(e),
            rn = r;
            break;
        case 12:
            Ot(t, e),
            Mt(e);
            break;
        case 31:
            Ot(t, e),
            Mt(e),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            _l(e, r)));
            break;
        case 13:
            Ot(t, e),
            Mt(e),
            e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (wl = _t()),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            _l(e, r)));
            break;
        case 22:
            o = e.memoizedState !== null;
            var E = i !== null && i.memoizedState !== null
              , D = jn
              , q = st;
            if (jn = D || o,
            st = q || E,
            Ot(t, e),
            st = q,
            jn = D,
            Mt(e),
            r & 8192)
                e: for (t = e.stateNode,
                t._visibility = o ? t._visibility & -2 : t._visibility | 1,
                o && (i === null || E || jn || st || Ja(e)),
                i = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (i === null) {
                            E = i = t;
                            try {
                                if (c = E.stateNode,
                                o)
                                    m = c.style,
                                    typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                                else {
                                    b = E.stateNode;
                                    var G = E.memoizedProps.style
                                      , L = G != null && G.hasOwnProperty("display") ? G.display : null;
                                    b.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim()
                                }
                            } catch (ne) {
                                ke(E, E.return, ne)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (i === null) {
                            E = t;
                            try {
                                E.stateNode.nodeValue = o ? "" : E.memoizedProps
                            } catch (ne) {
                                ke(E, E.return, ne)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (i === null) {
                            E = t;
                            try {
                                var U = E.stateNode;
                                o ? hp(U, !0) : hp(E.stateNode, !1)
                            } catch (ne) {
                                ke(E, E.return, ne)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        i === t && (i = null),
                        t = t.return
                    }
                    i === t && (i = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            r & 4 && (r = e.updateQueue,
            r !== null && (i = r.retryQueue,
            i !== null && (r.retryQueue = null,
            _l(e, i))));
            break;
        case 19:
            Ot(t, e),
            Mt(e),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            _l(e, r)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Ot(t, e),
            Mt(e)
        }
    }
    function Mt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var i, r = e.return; r !== null; ) {
                    if (pm(r)) {
                        i = r;
                        break
                    }
                    r = r.return
                }
                if (i == null)
                    throw Error(l(160));
                switch (i.tag) {
                case 27:
                    var o = i.stateNode
                      , c = tc(e);
                    Sl(e, c, o);
                    break;
                case 5:
                    var m = i.stateNode;
                    i.flags & 32 && (_i(m, ""),
                    i.flags &= -33);
                    var b = tc(e);
                    Sl(e, b, m);
                    break;
                case 3:
                case 4:
                    var E = i.stateNode.containerInfo
                      , D = tc(e);
                    nc(e, D, E);
                    break;
                default:
                    throw Error(l(161))
                }
            } catch (q) {
                ke(e, e.return, q)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Em(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                Em(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function Ln(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                vm(e, t.alternate, t),
                t = t.sibling
    }
    function Ja(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                sa(4, t, t.return),
                Ja(t);
                break;
            case 1:
                mn(t, t.return);
                var i = t.stateNode;
                typeof i.componentWillUnmount == "function" && hm(t, t.return, i),
                Ja(t);
                break;
            case 27:
                nr(t.stateNode);
            case 26:
            case 5:
                mn(t, t.return),
                Ja(t);
                break;
            case 22:
                t.memoizedState === null && Ja(t);
                break;
            case 30:
                Ja(t);
                break;
            default:
                Ja(t)
            }
            e = e.sibling
        }
    }
    function Un(e, t, i) {
        for (i = i && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var r = t.alternate
              , o = e
              , c = t
              , m = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                Un(o, c, i),
                Xs(4, c);
                break;
            case 1:
                if (Un(o, c, i),
                r = c,
                o = r.stateNode,
                typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount()
                    } catch (D) {
                        ke(r, r.return, D)
                    }
                if (r = c,
                o = r.updateQueue,
                o !== null) {
                    var b = r.stateNode;
                    try {
                        var E = o.shared.hiddenCallbacks;
                        if (E !== null)
                            for (o.shared.hiddenCallbacks = null,
                            o = 0; o < E.length; o++)
                                th(E[o], b)
                    } catch (D) {
                        ke(r, r.return, D)
                    }
                }
                i && m & 64 && dm(c),
                Ps(c, c.return);
                break;
            case 27:
                ym(c);
            case 26:
            case 5:
                Un(o, c, i),
                i && r === null && m & 4 && mm(c),
                Ps(c, c.return);
                break;
            case 12:
                Un(o, c, i);
                break;
            case 31:
                Un(o, c, i),
                i && m & 4 && _m(o, c);
                break;
            case 13:
                Un(o, c, i),
                i && m & 4 && xm(o, c);
                break;
            case 22:
                c.memoizedState === null && Un(o, c, i),
                Ps(c, c.return);
                break;
            case 30:
                break;
            default:
                Un(o, c, i)
            }
            t = t.sibling
        }
    }
    function ic(e, t) {
        var i = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== i && (e != null && e.refCount++,
        i != null && js(i))
    }
    function sc(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && js(e))
    }
    function ln(e, t, i, r) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Rm(e, t, i, r),
                t = t.sibling
    }
    function Rm(e, t, i, r) {
        var o = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            ln(e, t, i, r),
            o & 2048 && Xs(9, t);
            break;
        case 1:
            ln(e, t, i, r);
            break;
        case 3:
            ln(e, t, i, r),
            o & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && js(e)));
            break;
        case 12:
            if (o & 2048) {
                ln(e, t, i, r),
                e = t.stateNode;
                try {
                    var c = t.memoizedProps
                      , m = c.id
                      , b = c.onPostCommit;
                    typeof b == "function" && b(m, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (E) {
                    ke(t, t.return, E)
                }
            } else
                ln(e, t, i, r);
            break;
        case 31:
            ln(e, t, i, r);
            break;
        case 13:
            ln(e, t, i, r);
            break;
        case 23:
            break;
        case 22:
            c = t.stateNode,
            m = t.alternate,
            t.memoizedState !== null ? c._visibility & 2 ? ln(e, t, i, r) : Ks(e, t) : c._visibility & 2 ? ln(e, t, i, r) : (c._visibility |= 2,
            Zi(e, t, i, r, (t.subtreeFlags & 10256) !== 0 || !1)),
            o & 2048 && ic(m, t);
            break;
        case 24:
            ln(e, t, i, r),
            o & 2048 && sc(t.alternate, t);
            break;
        default:
            ln(e, t, i, r)
        }
    }
    function Zi(e, t, i, r, o) {
        for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var c = e
              , m = t
              , b = i
              , E = r
              , D = m.flags;
            switch (m.tag) {
            case 0:
            case 11:
            case 15:
                Zi(c, m, b, E, o),
                Xs(8, m);
                break;
            case 23:
                break;
            case 22:
                var q = m.stateNode;
                m.memoizedState !== null ? q._visibility & 2 ? Zi(c, m, b, E, o) : Ks(c, m) : (q._visibility |= 2,
                Zi(c, m, b, E, o)),
                o && D & 2048 && ic(m.alternate, m);
                break;
            case 24:
                Zi(c, m, b, E, o),
                o && D & 2048 && sc(m.alternate, m);
                break;
            default:
                Zi(c, m, b, E, o)
            }
            t = t.sibling
        }
    }
    function Ks(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var i = e
                  , r = t
                  , o = r.flags;
                switch (r.tag) {
                case 22:
                    Ks(i, r),
                    o & 2048 && ic(r.alternate, r);
                    break;
                case 24:
                    Ks(i, r),
                    o & 2048 && sc(r.alternate, r);
                    break;
                default:
                    Ks(i, r)
                }
                t = t.sibling
            }
    }
    var Fs = 8192;
    function Vi(e, t, i) {
        if (e.subtreeFlags & Fs)
            for (e = e.child; e !== null; )
                Am(e, t, i),
                e = e.sibling
    }
    function Am(e, t, i) {
        switch (e.tag) {
        case 26:
            Vi(e, t, i),
            e.flags & Fs && e.memoizedState !== null && Kb(i, rn, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Vi(e, t, i);
            break;
        case 3:
        case 4:
            var r = rn;
            rn = Ll(e.stateNode.containerInfo),
            Vi(e, t, i),
            rn = r;
            break;
        case 22:
            e.memoizedState === null && (r = e.alternate,
            r !== null && r.memoizedState !== null ? (r = Fs,
            Fs = 16777216,
            Vi(e, t, i),
            Fs = r) : Vi(e, t, i));
            break;
        default:
            Vi(e, t, i)
        }
    }
    function Tm(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Is(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    dt = r,
                    Om(r, e)
                }
            Tm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Cm(e),
                e = e.sibling
    }
    function Cm(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Is(e),
            e.flags & 2048 && sa(9, e, e.return);
            break;
        case 3:
            Is(e);
            break;
        case 12:
            Is(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            xl(e)) : Is(e);
            break;
        default:
            Is(e)
        }
    }
    function xl(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    dt = r,
                    Om(r, e)
                }
            Tm(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                sa(8, t, t.return),
                xl(t);
                break;
            case 22:
                i = t.stateNode,
                i._visibility & 2 && (i._visibility &= -3,
                xl(t));
                break;
            default:
                xl(t)
            }
            e = e.sibling
        }
    }
    function Om(e, t) {
        for (; dt !== null; ) {
            var i = dt;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                sa(8, i, t);
                break;
            case 23:
            case 22:
                if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
                    var r = i.memoizedState.cachePool.pool;
                    r != null && r.refCount++
                }
                break;
            case 24:
                js(i.memoizedState.cache)
            }
            if (r = i.child,
            r !== null)
                r.return = i,
                dt = r;
            else
                e: for (i = e; dt !== null; ) {
                    r = dt;
                    var o = r.sibling
                      , c = r.return;
                    if (bm(r),
                    r === i) {
                        dt = null;
                        break e
                    }
                    if (o !== null) {
                        o.return = c,
                        dt = o;
                        break e
                    }
                    dt = c
                }
        }
    }
    var ob = {
        getCacheForType: function(e) {
            var t = gt(nt)
              , i = t.data.get(e);
            return i === void 0 && (i = e(),
            t.data.set(e, i)),
            i
        },
        cacheSignal: function() {
            return gt(nt).controller.signal
        }
    }
      , cb = typeof WeakMap == "function" ? WeakMap : Map
      , je = 0
      , Ve = null
      , be = null
      , xe = 0
      , Ue = 0
      , Vt = null
      , ra = !1
      , Yi = !1
      , rc = !1
      , kn = 0
      , Je = 0
      , la = 0
      , $a = 0
      , lc = 0
      , Yt = 0
      , Gi = 0
      , Js = null
      , Nt = null
      , uc = !1
      , wl = 0
      , Mm = 0
      , El = 1 / 0
      , Rl = null
      , ua = null
      , ut = 0
      , oa = null
      , Qi = null
      , Bn = 0
      , oc = 0
      , cc = null
      , Nm = null
      , $s = 0
      , fc = null;
    function Gt() {
        return (je & 2) !== 0 && xe !== 0 ? xe & -xe : k.T !== null ? gc() : Pf()
    }
    function zm() {
        if (Yt === 0)
            if ((xe & 536870912) === 0 || Ee) {
                var e = jr;
                jr <<= 1,
                (jr & 3932160) === 0 && (jr = 262144),
                Yt = e
            } else
                Yt = 536870912;
        return e = qt.current,
        e !== null && (e.flags |= 32),
        Yt
    }
    function zt(e, t, i) {
        (e === Ve && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) && (Xi(e, 0),
        ca(e, xe, Yt, !1)),
        bs(e, i),
        ((je & 2) === 0 || e !== Ve) && (e === Ve && ((je & 2) === 0 && ($a |= i),
        Je === 4 && ca(e, xe, Yt, !1)),
        pn(e))
    }
    function jm(e, t, i) {
        if ((je & 6) !== 0)
            throw Error(l(327));
        var r = !i && (t & 127) === 0 && (t & e.expiredLanes) === 0 || vs(e, t)
          , o = r ? hb(e, t) : hc(e, t, !0)
          , c = r;
        do {
            if (o === 0) {
                Yi && !r && ca(e, t, 0, !1);
                break
            } else {
                if (i = e.current.alternate,
                c && !fb(i)) {
                    o = hc(e, t, !1),
                    c = !1;
                    continue
                }
                if (o === 2) {
                    if (c = t,
                    e.errorRecoveryDisabledLanes & c)
                        var m = 0;
                    else
                        m = e.pendingLanes & -536870913,
                        m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
                    if (m !== 0) {
                        t = m;
                        e: {
                            var b = e;
                            o = Js;
                            var E = b.current.memoizedState.isDehydrated;
                            if (E && (Xi(b, m).flags |= 256),
                            m = hc(b, m, !1),
                            m !== 2) {
                                if (rc && !E) {
                                    b.errorRecoveryDisabledLanes |= c,
                                    $a |= c,
                                    o = 4;
                                    break e
                                }
                                c = Nt,
                                Nt = o,
                                c !== null && (Nt === null ? Nt = c : Nt.push.apply(Nt, c))
                            }
                            o = m
                        }
                        if (c = !1,
                        o !== 2)
                            continue
                    }
                }
                if (o === 1) {
                    Xi(e, 0),
                    ca(e, t, 0, !0);
                    break
                }
                e: {
                    switch (r = e,
                    c = o,
                    c) {
                    case 0:
                    case 1:
                        throw Error(l(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        ca(r, t, Yt, !ra);
                        break e;
                    case 2:
                        Nt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329))
                    }
                    if ((t & 62914560) === t && (o = wl + 300 - _t(),
                    10 < o)) {
                        if (ca(r, t, Yt, !ra),
                        Lr(r, 0, !0) !== 0)
                            break e;
                        Bn = t,
                        r.timeoutHandle = cp(Dm.bind(null, r, i, Nt, Rl, uc, t, Yt, $a, Gi, ra, c, "Throttled", -0, 0), o);
                        break e
                    }
                    Dm(r, i, Nt, Rl, uc, t, Yt, $a, Gi, ra, c, null, -0, 0)
                }
            }
            break
        } while (!0);
        pn(e)
    }
    function Dm(e, t, i, r, o, c, m, b, E, D, q, G, L, U) {
        if (e.timeoutHandle = -1,
        G = t.subtreeFlags,
        G & 8192 || (G & 16785408) === 16785408) {
            G = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: wn
            },
            Am(t, c, G);
            var ne = (c & 62914560) === c ? wl - _t() : (c & 4194048) === c ? Mm - _t() : 0;
            if (ne = Fb(G, ne),
            ne !== null) {
                Bn = c,
                e.cancelPendingCommit = ne(Vm.bind(null, e, t, c, i, r, o, m, b, E, q, G, null, L, U)),
                ca(e, c, m, !D);
                return
            }
        }
        Vm(e, t, c, i, r, o, m, b, E)
    }
    function fb(e) {
        for (var t = e; ; ) {
            var i = t.tag;
            if ((i === 0 || i === 11 || i === 15) && t.flags & 16384 && (i = t.updateQueue,
            i !== null && (i = i.stores,
            i !== null)))
                for (var r = 0; r < i.length; r++) {
                    var o = i[r]
                      , c = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Bt(c(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (i = t.child,
            t.subtreeFlags & 16384 && i !== null)
                i.return = t,
                t = i;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function ca(e, t, i, r) {
        t &= ~lc,
        t &= ~$a,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        r && (e.warmLanes |= t),
        r = e.expirationTimes;
        for (var o = t; 0 < o; ) {
            var c = 31 - kt(o)
              , m = 1 << c;
            r[c] = -1,
            o &= ~m
        }
        i !== 0 && Gf(e, i, t)
    }
    function Al() {
        return (je & 6) === 0 ? (Ws(0),
        !1) : !0
    }
    function dc() {
        if (be !== null) {
            if (Ue === 0)
                var e = be.return;
            else
                e = be,
                Tn = Ya = null,
                Co(e),
                Ui = null,
                Ls = 0,
                e = be;
            for (; e !== null; )
                fm(e.alternate, e),
                e = e.return;
            be = null
        }
    }
    function Xi(e, t) {
        var i = e.timeoutHandle;
        i !== -1 && (e.timeoutHandle = -1,
        Nb(i)),
        i = e.cancelPendingCommit,
        i !== null && (e.cancelPendingCommit = null,
        i()),
        Bn = 0,
        dc(),
        Ve = e,
        be = i = Rn(e.current, null),
        xe = t,
        Ue = 0,
        Vt = null,
        ra = !1,
        Yi = vs(e, t),
        rc = !1,
        Gi = Yt = lc = $a = la = Je = 0,
        Nt = Js = null,
        uc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var r = e.entangledLanes;
        if (r !== 0)
            for (e = e.entanglements,
            r &= t; 0 < r; ) {
                var o = 31 - kt(r)
                  , c = 1 << o;
                t |= e[o],
                r &= ~c
            }
        return kn = t,
        Pr(),
        i
    }
    function Lm(e, t) {
        pe = null,
        k.H = Ys,
        t === Li || t === tl ? (t = Jd(),
        Ue = 3) : t === yo ? (t = Jd(),
        Ue = 4) : Ue = t === Go ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        Vt = t,
        be === null && (Je = 1,
        pl(e, Ft(t, e.current)))
    }
    function Um() {
        var e = qt.current;
        return e === null ? !0 : (xe & 4194048) === xe ? Wt === null : (xe & 62914560) === xe || (xe & 536870912) !== 0 ? e === Wt : !1
    }
    function km() {
        var e = k.H;
        return k.H = Ys,
        e === null ? Ys : e
    }
    function Bm() {
        var e = k.A;
        return k.A = ob,
        e
    }
    function Tl() {
        Je = 4,
        ra || (xe & 4194048) !== xe && qt.current !== null || (Yi = !0),
        (la & 134217727) === 0 && ($a & 134217727) === 0 || Ve === null || ca(Ve, xe, Yt, !1)
    }
    function hc(e, t, i) {
        var r = je;
        je |= 2;
        var o = km()
          , c = Bm();
        (Ve !== e || xe !== t) && (Rl = null,
        Xi(e, t)),
        t = !1;
        var m = Je;
        e: do
            try {
                if (Ue !== 0 && be !== null) {
                    var b = be
                      , E = Vt;
                    switch (Ue) {
                    case 8:
                        dc(),
                        m = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        qt.current === null && (t = !0);
                        var D = Ue;
                        if (Ue = 0,
                        Vt = null,
                        Pi(e, b, E, D),
                        i && Yi) {
                            m = 0;
                            break e
                        }
                        break;
                    default:
                        D = Ue,
                        Ue = 0,
                        Vt = null,
                        Pi(e, b, E, D)
                    }
                }
                db(),
                m = Je;
                break
            } catch (q) {
                Lm(e, q)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Tn = Ya = null,
        je = r,
        k.H = o,
        k.A = c,
        be === null && (Ve = null,
        xe = 0,
        Pr()),
        m
    }
    function db() {
        for (; be !== null; )
            Hm(be)
    }
    function hb(e, t) {
        var i = je;
        je |= 2;
        var r = km()
          , o = Bm();
        Ve !== e || xe !== t ? (Rl = null,
        El = _t() + 500,
        Xi(e, t)) : Yi = vs(e, t);
        e: do
            try {
                if (Ue !== 0 && be !== null) {
                    t = be;
                    var c = Vt;
                    t: switch (Ue) {
                    case 1:
                        Ue = 0,
                        Vt = null,
                        Pi(e, t, c, 1);
                        break;
                    case 2:
                    case 9:
                        if (Fd(c)) {
                            Ue = 0,
                            Vt = null,
                            qm(t);
                            break
                        }
                        t = function() {
                            Ue !== 2 && Ue !== 9 || Ve !== e || (Ue = 7),
                            pn(e)
                        }
                        ,
                        c.then(t, t);
                        break e;
                    case 3:
                        Ue = 7;
                        break e;
                    case 4:
                        Ue = 5;
                        break e;
                    case 7:
                        Fd(c) ? (Ue = 0,
                        Vt = null,
                        qm(t)) : (Ue = 0,
                        Vt = null,
                        Pi(e, t, c, 7));
                        break;
                    case 5:
                        var m = null;
                        switch (be.tag) {
                        case 26:
                            m = be.memoizedState;
                        case 5:
                        case 27:
                            var b = be;
                            if (m ? Rp(m) : b.stateNode.complete) {
                                Ue = 0,
                                Vt = null;
                                var E = b.sibling;
                                if (E !== null)
                                    be = E;
                                else {
                                    var D = b.return;
                                    D !== null ? (be = D,
                                    Cl(D)) : be = null
                                }
                                break t
                            }
                        }
                        Ue = 0,
                        Vt = null,
                        Pi(e, t, c, 5);
                        break;
                    case 6:
                        Ue = 0,
                        Vt = null,
                        Pi(e, t, c, 6);
                        break;
                    case 8:
                        dc(),
                        Je = 6;
                        break e;
                    default:
                        throw Error(l(462))
                    }
                }
                mb();
                break
            } catch (q) {
                Lm(e, q)
            }
        while (!0);
        return Tn = Ya = null,
        k.H = r,
        k.A = o,
        je = i,
        be !== null ? 0 : (Ve = null,
        xe = 0,
        Pr(),
        Je)
    }
    function mb() {
        for (; be !== null && !Nr(); )
            Hm(be)
    }
    function Hm(e) {
        var t = om(e.alternate, e, kn);
        e.memoizedProps = e.pendingProps,
        t === null ? Cl(e) : be = t
    }
    function qm(e) {
        var t = e
          , i = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = am(i, t, t.pendingProps, t.type, void 0, xe);
            break;
        case 11:
            t = am(i, t, t.pendingProps, t.type.render, t.ref, xe);
            break;
        case 5:
            Co(t);
        default:
            fm(i, t),
            t = be = Bd(t, kn),
            t = om(i, t, kn)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Cl(e) : be = t
    }
    function Pi(e, t, i, r) {
        Tn = Ya = null,
        Co(t),
        Ui = null,
        Ls = 0;
        var o = t.return;
        try {
            if (nb(e, o, t, i, xe)) {
                Je = 1,
                pl(e, Ft(i, e.current)),
                be = null;
                return
            }
        } catch (c) {
            if (o !== null)
                throw be = o,
                c;
            Je = 1,
            pl(e, Ft(i, e.current)),
            be = null;
            return
        }
        t.flags & 32768 ? (Ee || r === 1 ? e = !0 : Yi || (xe & 536870912) !== 0 ? e = !1 : (ra = e = !0,
        (r === 2 || r === 9 || r === 3 || r === 6) && (r = qt.current,
        r !== null && r.tag === 13 && (r.flags |= 16384))),
        Zm(t, e)) : Cl(t)
    }
    function Cl(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Zm(t, ra);
                return
            }
            e = t.return;
            var i = sb(t.alternate, t, kn);
            if (i !== null) {
                be = i;
                return
            }
            if (t = t.sibling,
            t !== null) {
                be = t;
                return
            }
            be = t = e
        } while (t !== null);
        Je === 0 && (Je = 5)
    }
    function Zm(e, t) {
        do {
            var i = rb(e.alternate, e);
            if (i !== null) {
                i.flags &= 32767,
                be = i;
                return
            }
            if (i = e.return,
            i !== null && (i.flags |= 32768,
            i.subtreeFlags = 0,
            i.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                be = e;
                return
            }
            be = e = i
        } while (e !== null);
        Je = 6,
        be = null
    }
    function Vm(e, t, i, r, o, c, m, b, E) {
        e.cancelPendingCommit = null;
        do
            Ol();
        while (ut !== 0);
        if ((je & 6) !== 0)
            throw Error(l(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(l(177));
            if (c = t.lanes | t.childLanes,
            c |= eo,
            Pv(e, i, c, m, b, E),
            e === Ve && (be = Ve = null,
            xe = 0),
            Qi = t,
            oa = e,
            Bn = i,
            oc = c,
            cc = o,
            Nm = r,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            vb(mi, function() {
                return Pm(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            r = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || r) {
                r = k.T,
                k.T = null,
                o = K.p,
                K.p = 2,
                m = je,
                je |= 4;
                try {
                    lb(e, t, i)
                } finally {
                    je = m,
                    K.p = o,
                    k.T = r
                }
            }
            ut = 1,
            Ym(),
            Gm(),
            Qm()
        }
    }
    function Ym() {
        if (ut === 1) {
            ut = 0;
            var e = oa
              , t = Qi
              , i = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || i) {
                i = k.T,
                k.T = null;
                var r = K.p;
                K.p = 2;
                var o = je;
                je |= 4;
                try {
                    wm(t, e);
                    var c = Rc
                      , m = Od(e.containerInfo)
                      , b = c.focusedElem
                      , E = c.selectionRange;
                    if (m !== b && b && b.ownerDocument && Cd(b.ownerDocument.documentElement, b)) {
                        if (E !== null && Fu(b)) {
                            var D = E.start
                              , q = E.end;
                            if (q === void 0 && (q = D),
                            "selectionStart"in b)
                                b.selectionStart = D,
                                b.selectionEnd = Math.min(q, b.value.length);
                            else {
                                var G = b.ownerDocument || document
                                  , L = G && G.defaultView || window;
                                if (L.getSelection) {
                                    var U = L.getSelection()
                                      , ne = b.textContent.length
                                      , fe = Math.min(E.start, ne)
                                      , qe = E.end === void 0 ? fe : Math.min(E.end, ne);
                                    !U.extend && fe > qe && (m = qe,
                                    qe = fe,
                                    fe = m);
                                    var z = Td(b, fe)
                                      , C = Td(b, qe);
                                    if (z && C && (U.rangeCount !== 1 || U.anchorNode !== z.node || U.anchorOffset !== z.offset || U.focusNode !== C.node || U.focusOffset !== C.offset)) {
                                        var j = G.createRange();
                                        j.setStart(z.node, z.offset),
                                        U.removeAllRanges(),
                                        fe > qe ? (U.addRange(j),
                                        U.extend(C.node, C.offset)) : (j.setEnd(C.node, C.offset),
                                        U.addRange(j))
                                    }
                                }
                            }
                        }
                        for (G = [],
                        U = b; U = U.parentNode; )
                            U.nodeType === 1 && G.push({
                                element: U,
                                left: U.scrollLeft,
                                top: U.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < G.length; b++) {
                            var V = G[b];
                            V.element.scrollLeft = V.left,
                            V.element.scrollTop = V.top
                        }
                    }
                    Zl = !!Ec,
                    Rc = Ec = null
                } finally {
                    je = o,
                    K.p = r,
                    k.T = i
                }
            }
            e.current = t,
            ut = 2
        }
    }
    function Gm() {
        if (ut === 2) {
            ut = 0;
            var e = oa
              , t = Qi
              , i = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || i) {
                i = k.T,
                k.T = null;
                var r = K.p;
                K.p = 2;
                var o = je;
                je |= 4;
                try {
                    vm(e, t.alternate, t)
                } finally {
                    je = o,
                    K.p = r,
                    k.T = i
                }
            }
            ut = 3
        }
    }
    function Qm() {
        if (ut === 4 || ut === 3) {
            ut = 0,
            Tu();
            var e = oa
              , t = Qi
              , i = Bn
              , r = Nm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ut = 5 : (ut = 0,
            Qi = oa = null,
            Xm(e, e.pendingLanes));
            var o = e.pendingLanes;
            if (o === 0 && (ua = null),
            Mu(i),
            t = t.stateNode,
            Ut && typeof Ut.onCommitFiberRoot == "function")
                try {
                    Ut.onCommitFiberRoot(gs, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (r !== null) {
                t = k.T,
                o = K.p,
                K.p = 2,
                k.T = null;
                try {
                    for (var c = e.onRecoverableError, m = 0; m < r.length; m++) {
                        var b = r[m];
                        c(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    k.T = t,
                    K.p = o
                }
            }
            (Bn & 3) !== 0 && Ol(),
            pn(e),
            o = e.pendingLanes,
            (i & 261930) !== 0 && (o & 42) !== 0 ? e === fc ? $s++ : ($s = 0,
            fc = e) : $s = 0,
            Ws(0)
        }
    }
    function Xm(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        js(t)))
    }
    function Ol() {
        return Ym(),
        Gm(),
        Qm(),
        Pm()
    }
    function Pm() {
        if (ut !== 5)
            return !1;
        var e = oa
          , t = oc;
        oc = 0;
        var i = Mu(Bn)
          , r = k.T
          , o = K.p;
        try {
            K.p = 32 > i ? 32 : i,
            k.T = null,
            i = cc,
            cc = null;
            var c = oa
              , m = Bn;
            if (ut = 0,
            Qi = oa = null,
            Bn = 0,
            (je & 6) !== 0)
                throw Error(l(331));
            var b = je;
            if (je |= 4,
            Cm(c.current),
            Rm(c, c.current, m, i),
            je = b,
            Ws(0, !1),
            Ut && typeof Ut.onPostCommitFiberRoot == "function")
                try {
                    Ut.onPostCommitFiberRoot(gs, c)
                } catch {}
            return !0
        } finally {
            K.p = o,
            k.T = r,
            Xm(e, t)
        }
    }
    function Km(e, t, i) {
        t = Ft(i, t),
        t = Yo(e.stateNode, t, 2),
        e = na(e, t, 2),
        e !== null && (bs(e, 2),
        pn(e))
    }
    function ke(e, t, i) {
        if (e.tag === 3)
            Km(e, e, i);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Km(t, e, i);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ua === null || !ua.has(r))) {
                        e = Ft(i, e),
                        i = Fh(2),
                        r = na(t, i, 2),
                        r !== null && (Ih(i, r, t, e),
                        bs(r, 2),
                        pn(r));
                        break
                    }
                }
                t = t.return
            }
    }
    function mc(e, t, i) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new cb;
            var o = new Set;
            r.set(t, o)
        } else
            o = r.get(t),
            o === void 0 && (o = new Set,
            r.set(t, o));
        o.has(i) || (rc = !0,
        o.add(i),
        e = pb.bind(null, e, t, i),
        t.then(e, e))
    }
    function pb(e, t, i) {
        var r = e.pingCache;
        r !== null && r.delete(t),
        e.pingedLanes |= e.suspendedLanes & i,
        e.warmLanes &= ~i,
        Ve === e && (xe & i) === i && (Je === 4 || Je === 3 && (xe & 62914560) === xe && 300 > _t() - wl ? (je & 2) === 0 && Xi(e, 0) : lc |= i,
        Gi === xe && (Gi = 0)),
        pn(e)
    }
    function Fm(e, t) {
        t === 0 && (t = Yf()),
        e = qa(e, t),
        e !== null && (bs(e, t),
        pn(e))
    }
    function yb(e) {
        var t = e.memoizedState
          , i = 0;
        t !== null && (i = t.retryLane),
        Fm(e, i)
    }
    function gb(e, t) {
        var i = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var r = e.stateNode
              , o = e.memoizedState;
            o !== null && (i = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default:
            throw Error(l(314))
        }
        r !== null && r.delete(t),
        Fm(e, i)
    }
    function vb(e, t) {
        return an(e, t)
    }
    var Ml = null
      , Ki = null
      , pc = !1
      , Nl = !1
      , yc = !1
      , fa = 0;
    function pn(e) {
        e !== Ki && e.next === null && (Ki === null ? Ml = Ki = e : Ki = Ki.next = e),
        Nl = !0,
        pc || (pc = !0,
        Sb())
    }
    function Ws(e, t) {
        if (!yc && Nl) {
            yc = !0;
            do
                for (var i = !1, r = Ml; r !== null; ) {
                    if (e !== 0) {
                        var o = r.pendingLanes;
                        if (o === 0)
                            var c = 0;
                        else {
                            var m = r.suspendedLanes
                              , b = r.pingedLanes;
                            c = (1 << 31 - kt(42 | e) + 1) - 1,
                            c &= o & ~(m & ~b),
                            c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (i = !0,
                        Wm(r, c))
                    } else
                        c = xe,
                        c = Lr(r, r === Ve ? c : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1),
                        (c & 3) === 0 || vs(r, c) || (i = !0,
                        Wm(r, c));
                    r = r.next
                }
            while (i);
            yc = !1
        }
    }
    function bb() {
        Im()
    }
    function Im() {
        Nl = pc = !1;
        var e = 0;
        fa !== 0 && Mb() && (e = fa);
        for (var t = _t(), i = null, r = Ml; r !== null; ) {
            var o = r.next
              , c = Jm(r, t);
            c === 0 ? (r.next = null,
            i === null ? Ml = o : i.next = o,
            o === null && (Ki = i)) : (i = r,
            (e !== 0 || (c & 3) !== 0) && (Nl = !0)),
            r = o
        }
        ut !== 0 && ut !== 5 || Ws(e),
        fa !== 0 && (fa = 0)
    }
    function Jm(e, t) {
        for (var i = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
            var m = 31 - kt(c)
              , b = 1 << m
              , E = o[m];
            E === -1 ? ((b & i) === 0 || (b & r) !== 0) && (o[m] = Xv(b, t)) : E <= t && (e.expiredLanes |= b),
            c &= ~b
        }
        if (t = Ve,
        i = xe,
        i = Lr(e, e === t ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        r = e.callbackNode,
        i === 0 || e === t && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null)
            return r !== null && r !== null && ys(r),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((i & 3) === 0 || vs(e, i)) {
            if (t = i & -i,
            t === e.callbackPriority)
                return t;
            switch (r !== null && ys(r),
            Mu(i)) {
            case 2:
            case 8:
                i = fn;
                break;
            case 32:
                i = mi;
                break;
            case 268435456:
                i = Vf;
                break;
            default:
                i = mi
            }
            return r = $m.bind(null, e),
            i = an(i, r),
            e.callbackPriority = t,
            e.callbackNode = i,
            t
        }
        return r !== null && r !== null && ys(r),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function $m(e, t) {
        if (ut !== 0 && ut !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var i = e.callbackNode;
        if (Ol() && e.callbackNode !== i)
            return null;
        var r = xe;
        return r = Lr(e, e === Ve ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        r === 0 ? null : (jm(e, r, t),
        Jm(e, _t()),
        e.callbackNode != null && e.callbackNode === i ? $m.bind(null, e) : null)
    }
    function Wm(e, t) {
        if (Ol())
            return null;
        jm(e, t, !0)
    }
    function Sb() {
        zb(function() {
            (je & 6) !== 0 ? an(mt, bb) : Im()
        })
    }
    function gc() {
        if (fa === 0) {
            var e = ji;
            e === 0 && (e = zr,
            zr <<= 1,
            (zr & 261888) === 0 && (zr = 256)),
            fa = e
        }
        return fa
    }
    function ep(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Hr("" + e)
    }
    function tp(e, t) {
        var i = t.ownerDocument.createElement("input");
        return i.name = t.name,
        i.value = t.value,
        e.id && i.setAttribute("form", e.id),
        t.parentNode.insertBefore(i, t),
        e = new FormData(e),
        i.parentNode.removeChild(i),
        e
    }
    function _b(e, t, i, r, o) {
        if (t === "submit" && i && i.stateNode === o) {
            var c = ep((o[At] || null).action)
              , m = r.submitter;
            m && (t = (t = m[At] || null) ? ep(t.formAction) : m.getAttribute("formAction"),
            t !== null && (c = t,
            m = null));
            var b = new Yr("action","action",null,r,o);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (r.defaultPrevented) {
                            if (fa !== 0) {
                                var E = m ? tp(o, m) : new FormData(o);
                                ko(i, {
                                    pending: !0,
                                    data: E,
                                    method: o.method,
                                    action: c
                                }, null, E)
                            }
                        } else
                            typeof c == "function" && (b.preventDefault(),
                            E = m ? tp(o, m) : new FormData(o),
                            ko(i, {
                                pending: !0,
                                data: E,
                                method: o.method,
                                action: c
                            }, c, E))
                    },
                    currentTarget: o
                }]
            })
        }
    }
    for (var vc = 0; vc < Wu.length; vc++) {
        var bc = Wu[vc]
          , xb = bc.toLowerCase()
          , wb = bc[0].toUpperCase() + bc.slice(1);
        sn(xb, "on" + wb)
    }
    sn(zd, "onAnimationEnd"),
    sn(jd, "onAnimationIteration"),
    sn(Dd, "onAnimationStart"),
    sn("dblclick", "onDoubleClick"),
    sn("focusin", "onFocus"),
    sn("focusout", "onBlur"),
    sn(H0, "onTransitionRun"),
    sn(q0, "onTransitionStart"),
    sn(Z0, "onTransitionCancel"),
    sn(Ld, "onTransitionEnd"),
    bi("onMouseEnter", ["mouseout", "mouseover"]),
    bi("onMouseLeave", ["mouseout", "mouseover"]),
    bi("onPointerEnter", ["pointerout", "pointerover"]),
    bi("onPointerLeave", ["pointerout", "pointerover"]),
    Ua("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ua("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ua("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ua("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ua("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ua("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Eb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(er));
    function np(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var r = e[i]
              , o = r.event;
            r = r.listeners;
            e: {
                var c = void 0;
                if (t)
                    for (var m = r.length - 1; 0 <= m; m--) {
                        var b = r[m]
                          , E = b.instance
                          , D = b.currentTarget;
                        if (b = b.listener,
                        E !== c && o.isPropagationStopped())
                            break e;
                        c = b,
                        o.currentTarget = D;
                        try {
                            c(o)
                        } catch (q) {
                            Xr(q)
                        }
                        o.currentTarget = null,
                        c = E
                    }
                else
                    for (m = 0; m < r.length; m++) {
                        if (b = r[m],
                        E = b.instance,
                        D = b.currentTarget,
                        b = b.listener,
                        E !== c && o.isPropagationStopped())
                            break e;
                        c = b,
                        o.currentTarget = D;
                        try {
                            c(o)
                        } catch (q) {
                            Xr(q)
                        }
                        o.currentTarget = null,
                        c = E
                    }
            }
        }
    }
    function Se(e, t) {
        var i = t[Nu];
        i === void 0 && (i = t[Nu] = new Set);
        var r = e + "__bubble";
        i.has(r) || (ap(t, e, 2, !1),
        i.add(r))
    }
    function Sc(e, t, i) {
        var r = 0;
        t && (r |= 4),
        ap(i, e, r, t)
    }
    var zl = "_reactListening" + Math.random().toString(36).slice(2);
    function _c(e) {
        if (!e[zl]) {
            e[zl] = !0,
            If.forEach(function(i) {
                i !== "selectionchange" && (Eb.has(i) || Sc(i, !1, e),
                Sc(i, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[zl] || (t[zl] = !0,
            Sc("selectionchange", !1, t))
        }
    }
    function ap(e, t, i, r) {
        switch (zp(t)) {
        case 2:
            var o = $b;
            break;
        case 8:
            o = Wb;
            break;
        default:
            o = Uc
        }
        i = o.bind(null, t, i, e),
        o = void 0,
        !qu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
        r ? o !== void 0 ? e.addEventListener(t, i, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, i, !0) : o !== void 0 ? e.addEventListener(t, i, {
            passive: o
        }) : e.addEventListener(t, i, !1)
    }
    function xc(e, t, i, r, o) {
        var c = r;
        if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
            e: for (; ; ) {
                if (r === null)
                    return;
                var m = r.tag;
                if (m === 3 || m === 4) {
                    var b = r.stateNode.containerInfo;
                    if (b === o)
                        break;
                    if (m === 4)
                        for (m = r.return; m !== null; ) {
                            var E = m.tag;
                            if ((E === 3 || E === 4) && m.stateNode.containerInfo === o)
                                return;
                            m = m.return
                        }
                    for (; b !== null; ) {
                        if (m = yi(b),
                        m === null)
                            return;
                        if (E = m.tag,
                        E === 5 || E === 6 || E === 26 || E === 27) {
                            r = c = m;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                r = r.return
            }
        ud(function() {
            var D = c
              , q = Bu(i)
              , G = [];
            e: {
                var L = Ud.get(e);
                if (L !== void 0) {
                    var U = Yr
                      , ne = e;
                    switch (e) {
                    case "keypress":
                        if (Zr(i) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        U = g0;
                        break;
                    case "focusin":
                        ne = "focus",
                        U = Gu;
                        break;
                    case "focusout":
                        ne = "blur",
                        U = Gu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        U = Gu;
                        break;
                    case "click":
                        if (i.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        U = fd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        U = s0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        U = S0;
                        break;
                    case zd:
                    case jd:
                    case Dd:
                        U = u0;
                        break;
                    case Ld:
                        U = x0;
                        break;
                    case "scroll":
                    case "scrollend":
                        U = a0;
                        break;
                    case "wheel":
                        U = E0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        U = c0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        U = hd;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        U = A0
                    }
                    var fe = (t & 4) !== 0
                      , qe = !fe && (e === "scroll" || e === "scrollend")
                      , z = fe ? L !== null ? L + "Capture" : null : L;
                    fe = [];
                    for (var C = D, j; C !== null; ) {
                        var V = C;
                        if (j = V.stateNode,
                        V = V.tag,
                        V !== 5 && V !== 26 && V !== 27 || j === null || z === null || (V = xs(C, z),
                        V != null && fe.push(tr(C, V, j))),
                        qe)
                            break;
                        C = C.return
                    }
                    0 < fe.length && (L = new U(L,ne,null,i,q),
                    G.push({
                        event: L,
                        listeners: fe
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (L = e === "mouseover" || e === "pointerover",
                    U = e === "mouseout" || e === "pointerout",
                    L && i !== ku && (ne = i.relatedTarget || i.fromElement) && (yi(ne) || ne[pi]))
                        break e;
                    if ((U || L) && (L = q.window === q ? q : (L = q.ownerDocument) ? L.defaultView || L.parentWindow : window,
                    U ? (ne = i.relatedTarget || i.toElement,
                    U = D,
                    ne = ne ? yi(ne) : null,
                    ne !== null && (qe = f(ne),
                    fe = ne.tag,
                    ne !== qe || fe !== 5 && fe !== 27 && fe !== 6) && (ne = null)) : (U = null,
                    ne = D),
                    U !== ne)) {
                        if (fe = fd,
                        V = "onMouseLeave",
                        z = "onMouseEnter",
                        C = "mouse",
                        (e === "pointerout" || e === "pointerover") && (fe = hd,
                        V = "onPointerLeave",
                        z = "onPointerEnter",
                        C = "pointer"),
                        qe = U == null ? L : _s(U),
                        j = ne == null ? L : _s(ne),
                        L = new fe(V,C + "leave",U,i,q),
                        L.target = qe,
                        L.relatedTarget = j,
                        V = null,
                        yi(q) === D && (fe = new fe(z,C + "enter",ne,i,q),
                        fe.target = j,
                        fe.relatedTarget = qe,
                        V = fe),
                        qe = V,
                        U && ne)
                            t: {
                                for (fe = Rb,
                                z = U,
                                C = ne,
                                j = 0,
                                V = z; V; V = fe(V))
                                    j++;
                                V = 0;
                                for (var ue = C; ue; ue = fe(ue))
                                    V++;
                                for (; 0 < j - V; )
                                    z = fe(z),
                                    j--;
                                for (; 0 < V - j; )
                                    C = fe(C),
                                    V--;
                                for (; j--; ) {
                                    if (z === C || C !== null && z === C.alternate) {
                                        fe = z;
                                        break t
                                    }
                                    z = fe(z),
                                    C = fe(C)
                                }
                                fe = null
                            }
                        else
                            fe = null;
                        U !== null && ip(G, L, U, fe, !1),
                        ne !== null && qe !== null && ip(G, qe, ne, fe, !0)
                    }
                }
                e: {
                    if (L = D ? _s(D) : window,
                    U = L.nodeName && L.nodeName.toLowerCase(),
                    U === "select" || U === "input" && L.type === "file")
                        var Ce = _d;
                    else if (bd(L))
                        if (xd)
                            Ce = U0;
                        else {
                            Ce = D0;
                            var ie = j0
                        }
                    else
                        U = L.nodeName,
                        !U || U.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? D && Uu(D.elementType) && (Ce = _d) : Ce = L0;
                    if (Ce && (Ce = Ce(e, D))) {
                        Sd(G, Ce, i, q);
                        break e
                    }
                    ie && ie(e, L, D),
                    e === "focusout" && D && L.type === "number" && D.memoizedProps.value != null && Lu(L, "number", L.value)
                }
                switch (ie = D ? _s(D) : window,
                e) {
                case "focusin":
                    (bd(ie) || ie.contentEditable === "true") && (Ri = ie,
                    Iu = D,
                    Ms = null);
                    break;
                case "focusout":
                    Ms = Iu = Ri = null;
                    break;
                case "mousedown":
                    Ju = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ju = !1,
                    Md(G, i, q);
                    break;
                case "selectionchange":
                    if (B0)
                        break;
                case "keydown":
                case "keyup":
                    Md(G, i, q)
                }
                var ye;
                if (Xu)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var we = "onCompositionStart";
                            break e;
                        case "compositionend":
                            we = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            we = "onCompositionUpdate";
                            break e
                        }
                        we = void 0
                    }
                else
                    Ei ? gd(e, i) && (we = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (we = "onCompositionStart");
                we && (md && i.locale !== "ko" && (Ei || we !== "onCompositionStart" ? we === "onCompositionEnd" && Ei && (ye = od()) : (Fn = q,
                Zu = "value"in Fn ? Fn.value : Fn.textContent,
                Ei = !0)),
                ie = jl(D, we),
                0 < ie.length && (we = new dd(we,e,null,i,q),
                G.push({
                    event: we,
                    listeners: ie
                }),
                ye ? we.data = ye : (ye = vd(i),
                ye !== null && (we.data = ye)))),
                (ye = C0 ? O0(e, i) : M0(e, i)) && (we = jl(D, "onBeforeInput"),
                0 < we.length && (ie = new dd("onBeforeInput","beforeinput",null,i,q),
                G.push({
                    event: ie,
                    listeners: we
                }),
                ie.data = ye)),
                _b(G, e, D, i, q)
            }
            np(G, t)
        })
    }
    function tr(e, t, i) {
        return {
            instance: e,
            listener: t,
            currentTarget: i
        }
    }
    function jl(e, t) {
        for (var i = t + "Capture", r = []; e !== null; ) {
            var o = e
              , c = o.stateNode;
            if (o = o.tag,
            o !== 5 && o !== 26 && o !== 27 || c === null || (o = xs(e, i),
            o != null && r.unshift(tr(e, o, c)),
            o = xs(e, t),
            o != null && r.push(tr(e, o, c))),
            e.tag === 3)
                return r;
            e = e.return
        }
        return []
    }
    function Rb(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function ip(e, t, i, r, o) {
        for (var c = t._reactName, m = []; i !== null && i !== r; ) {
            var b = i
              , E = b.alternate
              , D = b.stateNode;
            if (b = b.tag,
            E !== null && E === r)
                break;
            b !== 5 && b !== 26 && b !== 27 || D === null || (E = D,
            o ? (D = xs(i, c),
            D != null && m.unshift(tr(i, D, E))) : o || (D = xs(i, c),
            D != null && m.push(tr(i, D, E)))),
            i = i.return
        }
        m.length !== 0 && e.push({
            event: t,
            listeners: m
        })
    }
    var Ab = /\r\n?/g
      , Tb = /\u0000|\uFFFD/g;
    function sp(e) {
        return (typeof e == "string" ? e : "" + e).replace(Ab, `
`).replace(Tb, "")
    }
    function rp(e, t) {
        return t = sp(t),
        sp(e) === t
    }
    function He(e, t, i, r, o, c) {
        switch (i) {
        case "children":
            typeof r == "string" ? t === "body" || t === "textarea" && r === "" || _i(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && _i(e, "" + r);
            break;
        case "className":
            kr(e, "class", r);
            break;
        case "tabIndex":
            kr(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            kr(e, i, r);
            break;
        case "style":
            rd(e, r, c);
            break;
        case "data":
            if (t !== "object") {
                kr(e, "data", r);
                break
            }
        case "src":
        case "href":
            if (r === "" && (t !== "a" || i !== "href")) {
                e.removeAttribute(i);
                break
            }
            if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
                e.removeAttribute(i);
                break
            }
            r = Hr("" + r),
            e.setAttribute(i, r);
            break;
        case "action":
        case "formAction":
            if (typeof r == "function") {
                e.setAttribute(i, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof c == "function" && (i === "formAction" ? (t !== "input" && He(e, t, "name", o.name, o, null),
                He(e, t, "formEncType", o.formEncType, o, null),
                He(e, t, "formMethod", o.formMethod, o, null),
                He(e, t, "formTarget", o.formTarget, o, null)) : (He(e, t, "encType", o.encType, o, null),
                He(e, t, "method", o.method, o, null),
                He(e, t, "target", o.target, o, null)));
            if (r == null || typeof r == "symbol" || typeof r == "boolean") {
                e.removeAttribute(i);
                break
            }
            r = Hr("" + r),
            e.setAttribute(i, r);
            break;
        case "onClick":
            r != null && (e.onclick = wn);
            break;
        case "onScroll":
            r != null && Se("scroll", e);
            break;
        case "onScrollEnd":
            r != null && Se("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (r != null) {
                if (typeof r != "object" || !("__html"in r))
                    throw Error(l(61));
                if (i = r.__html,
                i != null) {
                    if (o.children != null)
                        throw Error(l(60));
                    e.innerHTML = i
                }
            }
            break;
        case "multiple":
            e.multiple = r && typeof r != "function" && typeof r != "symbol";
            break;
        case "muted":
            e.muted = r && typeof r != "function" && typeof r != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            i = Hr("" + r),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(i, "" + r) : e.removeAttribute(i);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
            break;
        case "capture":
        case "download":
            r === !0 ? e.setAttribute(i, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(i, r) : e.removeAttribute(i);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(i, r) : e.removeAttribute(i);
            break;
        case "rowSpan":
        case "start":
            r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(i) : e.setAttribute(i, r);
            break;
        case "popover":
            Se("beforetoggle", e),
            Se("toggle", e),
            Ur(e, "popover", r);
            break;
        case "xlinkActuate":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            xn(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            xn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            xn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            xn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            Ur(e, "is", r);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = t0.get(i) || i,
            Ur(e, i, r))
        }
    }
    function wc(e, t, i, r, o, c) {
        switch (i) {
        case "style":
            rd(e, r, c);
            break;
        case "dangerouslySetInnerHTML":
            if (r != null) {
                if (typeof r != "object" || !("__html"in r))
                    throw Error(l(61));
                if (i = r.__html,
                i != null) {
                    if (o.children != null)
                        throw Error(l(60));
                    e.innerHTML = i
                }
            }
            break;
        case "children":
            typeof r == "string" ? _i(e, r) : (typeof r == "number" || typeof r == "bigint") && _i(e, "" + r);
            break;
        case "onScroll":
            r != null && Se("scroll", e);
            break;
        case "onScrollEnd":
            r != null && Se("scrollend", e);
            break;
        case "onClick":
            r != null && (e.onclick = wn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Jf.hasOwnProperty(i))
                e: {
                    if (i[0] === "o" && i[1] === "n" && (o = i.endsWith("Capture"),
                    t = i.slice(2, o ? i.length - 7 : void 0),
                    c = e[At] || null,
                    c = c != null ? c[i] : null,
                    typeof c == "function" && e.removeEventListener(t, c, o),
                    typeof r == "function")) {
                        typeof c != "function" && c !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)),
                        e.addEventListener(t, r, o);
                        break e
                    }
                    i in e ? e[i] = r : r === !0 ? e.setAttribute(i, "") : Ur(e, i, r)
                }
        }
    }
    function bt(e, t, i) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            Se("error", e),
            Se("load", e);
            var r = !1, o = !1, c;
            for (c in i)
                if (i.hasOwnProperty(c)) {
                    var m = i[c];
                    if (m != null)
                        switch (c) {
                        case "src":
                            r = !0;
                            break;
                        case "srcSet":
                            o = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            He(e, t, c, m, i, null)
                        }
                }
            o && He(e, t, "srcSet", i.srcSet, i, null),
            r && He(e, t, "src", i.src, i, null);
            return;
        case "input":
            Se("invalid", e);
            var b = c = m = o = null
              , E = null
              , D = null;
            for (r in i)
                if (i.hasOwnProperty(r)) {
                    var q = i[r];
                    if (q != null)
                        switch (r) {
                        case "name":
                            o = q;
                            break;
                        case "type":
                            m = q;
                            break;
                        case "checked":
                            E = q;
                            break;
                        case "defaultChecked":
                            D = q;
                            break;
                        case "value":
                            c = q;
                            break;
                        case "defaultValue":
                            b = q;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (q != null)
                                throw Error(l(137, t));
                            break;
                        default:
                            He(e, t, r, q, i, null)
                        }
                }
            nd(e, c, b, E, D, m, o, !1);
            return;
        case "select":
            Se("invalid", e),
            r = m = c = null;
            for (o in i)
                if (i.hasOwnProperty(o) && (b = i[o],
                b != null))
                    switch (o) {
                    case "value":
                        c = b;
                        break;
                    case "defaultValue":
                        m = b;
                        break;
                    case "multiple":
                        r = b;
                    default:
                        He(e, t, o, b, i, null)
                    }
            t = c,
            i = m,
            e.multiple = !!r,
            t != null ? Si(e, !!r, t, !1) : i != null && Si(e, !!r, i, !0);
            return;
        case "textarea":
            Se("invalid", e),
            c = o = r = null;
            for (m in i)
                if (i.hasOwnProperty(m) && (b = i[m],
                b != null))
                    switch (m) {
                    case "value":
                        r = b;
                        break;
                    case "defaultValue":
                        o = b;
                        break;
                    case "children":
                        c = b;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(l(91));
                        break;
                    default:
                        He(e, t, m, b, i, null)
                    }
            id(e, r, o, c);
            return;
        case "option":
            for (E in i)
                i.hasOwnProperty(E) && (r = i[E],
                r != null) && (E === "selected" ? e.selected = r && typeof r != "function" && typeof r != "symbol" : He(e, t, E, r, i, null));
            return;
        case "dialog":
            Se("beforetoggle", e),
            Se("toggle", e),
            Se("cancel", e),
            Se("close", e);
            break;
        case "iframe":
        case "object":
            Se("load", e);
            break;
        case "video":
        case "audio":
            for (r = 0; r < er.length; r++)
                Se(er[r], e);
            break;
        case "image":
            Se("error", e),
            Se("load", e);
            break;
        case "details":
            Se("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            Se("error", e),
            Se("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (D in i)
                if (i.hasOwnProperty(D) && (r = i[D],
                r != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(l(137, t));
                    default:
                        He(e, t, D, r, i, null)
                    }
            return;
        default:
            if (Uu(t)) {
                for (q in i)
                    i.hasOwnProperty(q) && (r = i[q],
                    r !== void 0 && wc(e, t, q, r, i, void 0));
                return
            }
        }
        for (b in i)
            i.hasOwnProperty(b) && (r = i[b],
            r != null && He(e, t, b, r, i, null))
    }
    function Cb(e, t, i, r) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var o = null
              , c = null
              , m = null
              , b = null
              , E = null
              , D = null
              , q = null;
            for (U in i) {
                var G = i[U];
                if (i.hasOwnProperty(U) && G != null)
                    switch (U) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        E = G;
                    default:
                        r.hasOwnProperty(U) || He(e, t, U, null, r, G)
                    }
            }
            for (var L in r) {
                var U = r[L];
                if (G = i[L],
                r.hasOwnProperty(L) && (U != null || G != null))
                    switch (L) {
                    case "type":
                        c = U;
                        break;
                    case "name":
                        o = U;
                        break;
                    case "checked":
                        D = U;
                        break;
                    case "defaultChecked":
                        q = U;
                        break;
                    case "value":
                        m = U;
                        break;
                    case "defaultValue":
                        b = U;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (U != null)
                            throw Error(l(137, t));
                        break;
                    default:
                        U !== G && He(e, t, L, U, r, G)
                    }
            }
            Du(e, m, b, E, D, q, c, o);
            return;
        case "select":
            U = m = b = L = null;
            for (c in i)
                if (E = i[c],
                i.hasOwnProperty(c) && E != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        U = E;
                    default:
                        r.hasOwnProperty(c) || He(e, t, c, null, r, E)
                    }
            for (o in r)
                if (c = r[o],
                E = i[o],
                r.hasOwnProperty(o) && (c != null || E != null))
                    switch (o) {
                    case "value":
                        L = c;
                        break;
                    case "defaultValue":
                        b = c;
                        break;
                    case "multiple":
                        m = c;
                    default:
                        c !== E && He(e, t, o, c, r, E)
                    }
            t = b,
            i = m,
            r = U,
            L != null ? Si(e, !!i, L, !1) : !!r != !!i && (t != null ? Si(e, !!i, t, !0) : Si(e, !!i, i ? [] : "", !1));
            return;
        case "textarea":
            U = L = null;
            for (b in i)
                if (o = i[b],
                i.hasOwnProperty(b) && o != null && !r.hasOwnProperty(b))
                    switch (b) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        He(e, t, b, null, r, o)
                    }
            for (m in r)
                if (o = r[m],
                c = i[m],
                r.hasOwnProperty(m) && (o != null || c != null))
                    switch (m) {
                    case "value":
                        L = o;
                        break;
                    case "defaultValue":
                        U = o;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (o != null)
                            throw Error(l(91));
                        break;
                    default:
                        o !== c && He(e, t, m, o, r, c)
                    }
            ad(e, L, U);
            return;
        case "option":
            for (var ne in i)
                L = i[ne],
                i.hasOwnProperty(ne) && L != null && !r.hasOwnProperty(ne) && (ne === "selected" ? e.selected = !1 : He(e, t, ne, null, r, L));
            for (E in r)
                L = r[E],
                U = i[E],
                r.hasOwnProperty(E) && L !== U && (L != null || U != null) && (E === "selected" ? e.selected = L && typeof L != "function" && typeof L != "symbol" : He(e, t, E, L, r, U));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var fe in i)
                L = i[fe],
                i.hasOwnProperty(fe) && L != null && !r.hasOwnProperty(fe) && He(e, t, fe, null, r, L);
            for (D in r)
                if (L = r[D],
                U = i[D],
                r.hasOwnProperty(D) && L !== U && (L != null || U != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (L != null)
                            throw Error(l(137, t));
                        break;
                    default:
                        He(e, t, D, L, r, U)
                    }
            return;
        default:
            if (Uu(t)) {
                for (var qe in i)
                    L = i[qe],
                    i.hasOwnProperty(qe) && L !== void 0 && !r.hasOwnProperty(qe) && wc(e, t, qe, void 0, r, L);
                for (q in r)
                    L = r[q],
                    U = i[q],
                    !r.hasOwnProperty(q) || L === U || L === void 0 && U === void 0 || wc(e, t, q, L, r, U);
                return
            }
        }
        for (var z in i)
            L = i[z],
            i.hasOwnProperty(z) && L != null && !r.hasOwnProperty(z) && He(e, t, z, null, r, L);
        for (G in r)
            L = r[G],
            U = i[G],
            !r.hasOwnProperty(G) || L === U || L == null && U == null || He(e, t, G, L, r, U)
    }
    function lp(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Ob() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, i = performance.getEntriesByType("resource"), r = 0; r < i.length; r++) {
                var o = i[r]
                  , c = o.transferSize
                  , m = o.initiatorType
                  , b = o.duration;
                if (c && b && lp(m)) {
                    for (m = 0,
                    b = o.responseEnd,
                    r += 1; r < i.length; r++) {
                        var E = i[r]
                          , D = E.startTime;
                        if (D > b)
                            break;
                        var q = E.transferSize
                          , G = E.initiatorType;
                        q && lp(G) && (E = E.responseEnd,
                        m += q * (E < b ? 1 : (b - D) / (E - D)))
                    }
                    if (--r,
                    t += 8 * (c + m) / (o.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var Ec = null
      , Rc = null;
    function Dl(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function up(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function op(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Ac(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Tc = null;
    function Mb() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Tc ? !1 : (Tc = e,
        !0) : (Tc = null,
        !1)
    }
    var cp = typeof setTimeout == "function" ? setTimeout : void 0
      , Nb = typeof clearTimeout == "function" ? clearTimeout : void 0
      , fp = typeof Promise == "function" ? Promise : void 0
      , zb = typeof queueMicrotask == "function" ? queueMicrotask : typeof fp < "u" ? function(e) {
        return fp.resolve(null).then(e).catch(jb)
    }
    : cp;
    function jb(e) {
        setTimeout(function() {
            throw e
        })
    }
    function da(e) {
        return e === "head"
    }
    function dp(e, t) {
        var i = t
          , r = 0;
        do {
            var o = i.nextSibling;
            if (e.removeChild(i),
            o && o.nodeType === 8)
                if (i = o.data,
                i === "/$" || i === "/&") {
                    if (r === 0) {
                        e.removeChild(o),
                        $i(t);
                        return
                    }
                    r--
                } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&")
                    r++;
                else if (i === "html")
                    nr(e.ownerDocument.documentElement);
                else if (i === "head") {
                    i = e.ownerDocument.head,
                    nr(i);
                    for (var c = i.firstChild; c; ) {
                        var m = c.nextSibling
                          , b = c.nodeName;
                        c[Ss] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && c.rel.toLowerCase() === "stylesheet" || i.removeChild(c),
                        c = m
                    }
                } else
                    i === "body" && nr(e.ownerDocument.body);
            i = o
        } while (i);
        $i(t)
    }
    function hp(e, t) {
        var i = e;
        e = 0;
        do {
            var r = i.nextSibling;
            if (i.nodeType === 1 ? t ? (i._stashedDisplay = i.style.display,
            i.style.display = "none") : (i.style.display = i._stashedDisplay || "",
            i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (t ? (i._stashedText = i.nodeValue,
            i.nodeValue = "") : i.nodeValue = i._stashedText || ""),
            r && r.nodeType === 8)
                if (i = r.data,
                i === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || e++;
            i = r
        } while (i)
    }
    function Cc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var i = t;
            switch (t = t.nextSibling,
            i.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Cc(i),
                zu(i);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (i.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(i)
        }
    }
    function Db(e, t, i, r) {
        for (; e.nodeType === 1; ) {
            var o = i;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (r) {
                if (!e[Ss])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (c = e.getAttribute("rel"),
                        c === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (c !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (c = e.getAttribute("src"),
                        (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var c = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && e.getAttribute("name") === c)
                    return e
            } else
                return e;
            if (e = en(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function Lb(e, t, i) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = en(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function mp(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = en(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Oc(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function Mc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function Ub(e, t) {
        var i = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || i.readyState !== "loading")
            t();
        else {
            var r = function() {
                t(),
                i.removeEventListener("DOMContentLoaded", r)
            };
            i.addEventListener("DOMContentLoaded", r),
            e._reactRetry = r
        }
    }
    function en(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var Nc = null;
    function pp(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "/$" || i === "/&") {
                    if (t === 0)
                        return en(e.nextSibling);
                    t--
                } else
                    i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function yp(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    i !== "/$" && i !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function gp(e, t, i) {
        switch (t = Dl(i),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(l(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(l(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(l(454));
            return e;
        default:
            throw Error(l(451))
        }
    }
    function nr(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        zu(e)
    }
    var tn = new Map
      , vp = new Set;
    function Ll(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Hn = K.d;
    K.d = {
        f: kb,
        r: Bb,
        D: Hb,
        C: qb,
        L: Zb,
        m: Vb,
        X: Gb,
        S: Yb,
        M: Qb
    };
    function kb() {
        var e = Hn.f()
          , t = Al();
        return e || t
    }
    function Bb(e) {
        var t = gi(e);
        t !== null && t.tag === 5 && t.type === "form" ? Lh(t) : Hn.r(e)
    }
    var Fi = typeof document > "u" ? null : document;
    function bp(e, t, i) {
        var r = Fi;
        if (r && typeof t == "string" && t) {
            var o = Pt(t);
            o = 'link[rel="' + e + '"][href="' + o + '"]',
            typeof i == "string" && (o += '[crossorigin="' + i + '"]'),
            vp.has(o) || (vp.add(o),
            e = {
                rel: e,
                crossOrigin: i,
                href: t
            },
            r.querySelector(o) === null && (t = r.createElement("link"),
            bt(t, "link", e),
            ft(t),
            r.head.appendChild(t)))
        }
    }
    function Hb(e) {
        Hn.D(e),
        bp("dns-prefetch", e, null)
    }
    function qb(e, t) {
        Hn.C(e, t),
        bp("preconnect", e, t)
    }
    function Zb(e, t, i) {
        Hn.L(e, t, i);
        var r = Fi;
        if (r && e && t) {
            var o = 'link[rel="preload"][as="' + Pt(t) + '"]';
            t === "image" && i && i.imageSrcSet ? (o += '[imagesrcset="' + Pt(i.imageSrcSet) + '"]',
            typeof i.imageSizes == "string" && (o += '[imagesizes="' + Pt(i.imageSizes) + '"]')) : o += '[href="' + Pt(e) + '"]';
            var c = o;
            switch (t) {
            case "style":
                c = Ii(e);
                break;
            case "script":
                c = Ji(e)
            }
            tn.has(c) || (e = g({
                rel: "preload",
                href: t === "image" && i && i.imageSrcSet ? void 0 : e,
                as: t
            }, i),
            tn.set(c, e),
            r.querySelector(o) !== null || t === "style" && r.querySelector(ar(c)) || t === "script" && r.querySelector(ir(c)) || (t = r.createElement("link"),
            bt(t, "link", e),
            ft(t),
            r.head.appendChild(t)))
        }
    }
    function Vb(e, t) {
        Hn.m(e, t);
        var i = Fi;
        if (i && e) {
            var r = t && typeof t.as == "string" ? t.as : "script"
              , o = 'link[rel="modulepreload"][as="' + Pt(r) + '"][href="' + Pt(e) + '"]'
              , c = o;
            switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = Ji(e)
            }
            if (!tn.has(c) && (e = g({
                rel: "modulepreload",
                href: e
            }, t),
            tn.set(c, e),
            i.querySelector(o) === null)) {
                switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (i.querySelector(ir(c)))
                        return
                }
                r = i.createElement("link"),
                bt(r, "link", e),
                ft(r),
                i.head.appendChild(r)
            }
        }
    }
    function Yb(e, t, i) {
        Hn.S(e, t, i);
        var r = Fi;
        if (r && e) {
            var o = vi(r).hoistableStyles
              , c = Ii(e);
            t = t || "default";
            var m = o.get(c);
            if (!m) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (m = r.querySelector(ar(c)))
                    b.loading = 5;
                else {
                    e = g({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, i),
                    (i = tn.get(c)) && zc(e, i);
                    var E = m = r.createElement("link");
                    ft(E),
                    bt(E, "link", e),
                    E._p = new Promise(function(D, q) {
                        E.onload = D,
                        E.onerror = q
                    }
                    ),
                    E.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    E.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    Ul(m, t, r)
                }
                m = {
                    type: "stylesheet",
                    instance: m,
                    count: 1,
                    state: b
                },
                o.set(c, m)
            }
        }
    }
    function Gb(e, t) {
        Hn.X(e, t);
        var i = Fi;
        if (i && e) {
            var r = vi(i).hoistableScripts
              , o = Ji(e)
              , c = r.get(o);
            c || (c = i.querySelector(ir(o)),
            c || (e = g({
                src: e,
                async: !0
            }, t),
            (t = tn.get(o)) && jc(e, t),
            c = i.createElement("script"),
            ft(c),
            bt(c, "link", e),
            i.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            r.set(o, c))
        }
    }
    function Qb(e, t) {
        Hn.M(e, t);
        var i = Fi;
        if (i && e) {
            var r = vi(i).hoistableScripts
              , o = Ji(e)
              , c = r.get(o);
            c || (c = i.querySelector(ir(o)),
            c || (e = g({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = tn.get(o)) && jc(e, t),
            c = i.createElement("script"),
            ft(c),
            bt(c, "link", e),
            i.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            r.set(o, c))
        }
    }
    function Sp(e, t, i, r) {
        var o = (o = ge.current) ? Ll(o) : null;
        if (!o)
            throw Error(l(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof i.precedence == "string" && typeof i.href == "string" ? (t = Ii(i.href),
            i = vi(o).hoistableStyles,
            r = i.get(t),
            r || (r = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            i.set(t, r)),
            r) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
                e = Ii(i.href);
                var c = vi(o).hoistableStyles
                  , m = c.get(e);
                if (m || (o = o.ownerDocument || o,
                m = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                c.set(e, m),
                (c = o.querySelector(ar(e))) && !c._p && (m.instance = c,
                m.state.loading = 5),
                tn.has(e) || (i = {
                    rel: "preload",
                    as: "style",
                    href: i.href,
                    crossOrigin: i.crossOrigin,
                    integrity: i.integrity,
                    media: i.media,
                    hrefLang: i.hrefLang,
                    referrerPolicy: i.referrerPolicy
                },
                tn.set(e, i),
                c || Xb(o, e, i, m.state))),
                t && r === null)
                    throw Error(l(528, ""));
                return m
            }
            if (t && r !== null)
                throw Error(l(529, ""));
            return null;
        case "script":
            return t = i.async,
            i = i.src,
            typeof i == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ji(i),
            i = vi(o).hoistableScripts,
            r = i.get(t),
            r || (r = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            i.set(t, r)),
            r) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(l(444, e))
        }
    }
    function Ii(e) {
        return 'href="' + Pt(e) + '"'
    }
    function ar(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function _p(e) {
        return g({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Xb(e, t, i, r) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"),
        r.preload = t,
        t.addEventListener("load", function() {
            return r.loading |= 1
        }),
        t.addEventListener("error", function() {
            return r.loading |= 2
        }),
        bt(t, "link", i),
        ft(t),
        e.head.appendChild(t))
    }
    function Ji(e) {
        return '[src="' + Pt(e) + '"]'
    }
    function ir(e) {
        return "script[async]" + e
    }
    function xp(e, t, i) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + Pt(i.href) + '"]');
                if (r)
                    return t.instance = r,
                    ft(r),
                    r;
                var o = g({}, i, {
                    "data-href": i.href,
                    "data-precedence": i.precedence,
                    href: null,
                    precedence: null
                });
                return r = (e.ownerDocument || e).createElement("style"),
                ft(r),
                bt(r, "style", o),
                Ul(r, i.precedence, e),
                t.instance = r;
            case "stylesheet":
                o = Ii(i.href);
                var c = e.querySelector(ar(o));
                if (c)
                    return t.state.loading |= 4,
                    t.instance = c,
                    ft(c),
                    c;
                r = _p(i),
                (o = tn.get(o)) && zc(r, o),
                c = (e.ownerDocument || e).createElement("link"),
                ft(c);
                var m = c;
                return m._p = new Promise(function(b, E) {
                    m.onload = b,
                    m.onerror = E
                }
                ),
                bt(c, "link", r),
                t.state.loading |= 4,
                Ul(c, i.precedence, e),
                t.instance = c;
            case "script":
                return c = Ji(i.src),
                (o = e.querySelector(ir(c))) ? (t.instance = o,
                ft(o),
                o) : (r = i,
                (o = tn.get(c)) && (r = g({}, i),
                jc(r, o)),
                e = e.ownerDocument || e,
                o = e.createElement("script"),
                ft(o),
                bt(o, "link", r),
                e.head.appendChild(o),
                t.instance = o);
            case "void":
                return null;
            default:
                throw Error(l(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance,
            t.state.loading |= 4,
            Ul(r, i.precedence, e));
        return t.instance
    }
    function Ul(e, t, i) {
        for (var r = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = r.length ? r[r.length - 1] : null, c = o, m = 0; m < r.length; m++) {
            var b = r[m];
            if (b.dataset.precedence === t)
                c = b;
            else if (c !== o)
                break
        }
        c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = i.nodeType === 9 ? i.head : i,
        t.insertBefore(e, t.firstChild))
    }
    function zc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function jc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var kl = null;
    function wp(e, t, i) {
        if (kl === null) {
            var r = new Map
              , o = kl = new Map;
            o.set(i, r)
        } else
            o = kl,
            r = o.get(i),
            r || (r = new Map,
            o.set(i, r));
        if (r.has(e))
            return r;
        for (r.set(e, null),
        i = i.getElementsByTagName(e),
        o = 0; o < i.length; o++) {
            var c = i[o];
            if (!(c[Ss] || c[pt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var m = c.getAttribute(t) || "";
                m = e + m;
                var b = r.get(m);
                b ? b.push(c) : r.set(m, [c])
            }
        }
        return r
    }
    function Ep(e, t, i) {
        e = e.ownerDocument || e,
        e.head.insertBefore(i, t === "title" ? e.querySelector("head > title") : null)
    }
    function Pb(e, t, i) {
        if (i === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (e = t.disabled,
            typeof t.precedence == "string" && e == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function Rp(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function Kb(e, t, i, r) {
        if (i.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (i.state.loading & 4) === 0) {
            if (i.instance === null) {
                var o = Ii(r.href)
                  , c = t.querySelector(ar(o));
                if (c) {
                    t = c._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = Bl.bind(e),
                    t.then(e, e)),
                    i.state.loading |= 4,
                    i.instance = c,
                    ft(c);
                    return
                }
                c = t.ownerDocument || t,
                r = _p(r),
                (o = tn.get(o)) && zc(r, o),
                c = c.createElement("link"),
                ft(c);
                var m = c;
                m._p = new Promise(function(b, E) {
                    m.onload = b,
                    m.onerror = E
                }
                ),
                bt(c, "link", r),
                i.instance = c
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(i, t),
            (t = i.state.preload) && (i.state.loading & 3) === 0 && (e.count++,
            i = Bl.bind(e),
            t.addEventListener("load", i),
            t.addEventListener("error", i))
        }
    }
    var Dc = 0;
    function Fb(e, t) {
        return e.stylesheets && e.count === 0 && ql(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(i) {
            var r = setTimeout(function() {
                if (e.stylesheets && ql(e, e.stylesheets),
                e.unsuspend) {
                    var c = e.unsuspend;
                    e.unsuspend = null,
                    c()
                }
            }, 6e4 + t);
            0 < e.imgBytes && Dc === 0 && (Dc = 62500 * Ob());
            var o = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && ql(e, e.stylesheets),
                e.unsuspend)) {
                    var c = e.unsuspend;
                    e.unsuspend = null,
                    c()
                }
            }, (e.imgBytes > Dc ? 50 : 800) + t);
            return e.unsuspend = i,
            function() {
                e.unsuspend = null,
                clearTimeout(r),
                clearTimeout(o)
            }
        }
        : null
    }
    function Bl() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                ql(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Hl = null;
    function ql(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Hl = new Map,
        t.forEach(Ib, e),
        Hl = null,
        Bl.call(e))
    }
    function Ib(e, t) {
        if (!(t.state.loading & 4)) {
            var i = Hl.get(e);
            if (i)
                var r = i.get(null);
            else {
                i = new Map,
                Hl.set(e, i);
                for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < o.length; c++) {
                    var m = o[c];
                    (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (i.set(m.dataset.precedence, m),
                    r = m)
                }
                r && i.set(null, r)
            }
            o = t.instance,
            m = o.getAttribute("data-precedence"),
            c = i.get(m) || r,
            c === r && i.set(null, o),
            i.set(m, o),
            this.count++,
            r = Bl.bind(this),
            o.addEventListener("load", r),
            o.addEventListener("error", r),
            c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(o, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var sr = {
        $$typeof: Z,
        Provider: null,
        Consumer: null,
        _currentValue: oe,
        _currentValue2: oe,
        _threadCount: 0
    };
    function Jb(e, t, i, r, o, c, m, b, E) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Cu(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Cu(0),
        this.hiddenUpdates = Cu(null),
        this.identifierPrefix = r,
        this.onUncaughtError = o,
        this.onCaughtError = c,
        this.onRecoverableError = m,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = E,
        this.incompleteTransitions = new Map
    }
    function Ap(e, t, i, r, o, c, m, b, E, D, q, G) {
        return e = new Jb(e,t,i,m,E,D,q,G,b),
        t = 1,
        c === !0 && (t |= 24),
        c = Ht(3, null, null, t),
        e.current = c,
        c.stateNode = e,
        t = ho(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        c.memoizedState = {
            element: r,
            isDehydrated: i,
            cache: t
        },
        go(c),
        e
    }
    function Tp(e) {
        return e ? (e = Ci,
        e) : Ci
    }
    function Cp(e, t, i, r, o, c) {
        o = Tp(o),
        r.context === null ? r.context = o : r.pendingContext = o,
        r = ta(t),
        r.payload = {
            element: i
        },
        c = c === void 0 ? null : c,
        c !== null && (r.callback = c),
        i = na(e, r, t),
        i !== null && (zt(i, e, t),
        ks(i, e, t))
    }
    function Op(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t
        }
    }
    function Lc(e, t) {
        Op(e, t),
        (e = e.alternate) && Op(e, t)
    }
    function Mp(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = qa(e, 67108864);
            t !== null && zt(t, e, 67108864),
            Lc(e, 67108864)
        }
    }
    function Np(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Gt();
            t = Ou(t);
            var i = qa(e, t);
            i !== null && zt(i, e, t),
            Lc(e, t)
        }
    }
    var Zl = !0;
    function $b(e, t, i, r) {
        var o = k.T;
        k.T = null;
        var c = K.p;
        try {
            K.p = 2,
            Uc(e, t, i, r)
        } finally {
            K.p = c,
            k.T = o
        }
    }
    function Wb(e, t, i, r) {
        var o = k.T;
        k.T = null;
        var c = K.p;
        try {
            K.p = 8,
            Uc(e, t, i, r)
        } finally {
            K.p = c,
            k.T = o
        }
    }
    function Uc(e, t, i, r) {
        if (Zl) {
            var o = kc(r);
            if (o === null)
                xc(e, t, r, Vl, i),
                jp(e, r);
            else if (tS(o, e, t, i, r))
                r.stopPropagation();
            else if (jp(e, r),
            t & 4 && -1 < eS.indexOf(e)) {
                for (; o !== null; ) {
                    var c = gi(o);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var m = La(c.pendingLanes);
                                if (m !== 0) {
                                    var b = c;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; m; ) {
                                        var E = 1 << 31 - kt(m);
                                        b.entanglements[1] |= E,
                                        m &= ~E
                                    }
                                    pn(c),
                                    (je & 6) === 0 && (El = _t() + 500,
                                    Ws(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            b = qa(c, 2),
                            b !== null && zt(b, c, 2),
                            Al(),
                            Lc(c, 2)
                        }
                    if (c = kc(r),
                    c === null && xc(e, t, r, Vl, i),
                    c === o)
                        break;
                    o = c
                }
                o !== null && r.stopPropagation()
            } else
                xc(e, t, r, null, i)
        }
    }
    function kc(e) {
        return e = Bu(e),
        Bc(e)
    }
    var Vl = null;
    function Bc(e) {
        if (Vl = null,
        e = yi(e),
        e !== null) {
            var t = f(e);
            if (t === null)
                e = null;
            else {
                var i = t.tag;
                if (i === 13) {
                    if (e = d(t),
                    e !== null)
                        return e;
                    e = null
                } else if (i === 31) {
                    if (e = h(t),
                    e !== null)
                        return e;
                    e = null
                } else if (i === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Vl = e,
        null
    }
    function zp(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Ge()) {
            case mt:
                return 2;
            case fn:
                return 8;
            case mi:
            case qv:
                return 32;
            case Vf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Hc = !1
      , ha = null
      , ma = null
      , pa = null
      , rr = new Map
      , lr = new Map
      , ya = []
      , eS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function jp(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            ha = null;
            break;
        case "dragenter":
        case "dragleave":
            ma = null;
            break;
        case "mouseover":
        case "mouseout":
            pa = null;
            break;
        case "pointerover":
        case "pointerout":
            rr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            lr.delete(t.pointerId)
        }
    }
    function ur(e, t, i, r, o, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: r,
            nativeEvent: c,
            targetContainers: [o]
        },
        t !== null && (t = gi(t),
        t !== null && Mp(t)),
        e) : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e)
    }
    function tS(e, t, i, r, o) {
        switch (t) {
        case "focusin":
            return ha = ur(ha, e, t, i, r, o),
            !0;
        case "dragenter":
            return ma = ur(ma, e, t, i, r, o),
            !0;
        case "mouseover":
            return pa = ur(pa, e, t, i, r, o),
            !0;
        case "pointerover":
            var c = o.pointerId;
            return rr.set(c, ur(rr.get(c) || null, e, t, i, r, o)),
            !0;
        case "gotpointercapture":
            return c = o.pointerId,
            lr.set(c, ur(lr.get(c) || null, e, t, i, r, o)),
            !0
        }
        return !1
    }
    function Dp(e) {
        var t = yi(e.target);
        if (t !== null) {
            var i = f(t);
            if (i !== null) {
                if (t = i.tag,
                t === 13) {
                    if (t = d(i),
                    t !== null) {
                        e.blockedOn = t,
                        Kf(e.priority, function() {
                            Np(i)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = h(i),
                    t !== null) {
                        e.blockedOn = t,
                        Kf(e.priority, function() {
                            Np(i)
                        });
                        return
                    }
                } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Yl(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var i = kc(e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var r = new i.constructor(i.type,i);
                ku = r,
                i.target.dispatchEvent(r),
                ku = null
            } else
                return t = gi(i),
                t !== null && Mp(t),
                e.blockedOn = i,
                !1;
            t.shift()
        }
        return !0
    }
    function Lp(e, t, i) {
        Yl(e) && i.delete(t)
    }
    function nS() {
        Hc = !1,
        ha !== null && Yl(ha) && (ha = null),
        ma !== null && Yl(ma) && (ma = null),
        pa !== null && Yl(pa) && (pa = null),
        rr.forEach(Lp),
        lr.forEach(Lp)
    }
    function Gl(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Hc || (Hc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, nS)))
    }
    var Ql = null;
    function Up(e) {
        Ql !== e && (Ql = e,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Ql === e && (Ql = null);
            for (var t = 0; t < e.length; t += 3) {
                var i = e[t]
                  , r = e[t + 1]
                  , o = e[t + 2];
                if (typeof r != "function") {
                    if (Bc(r || i) === null)
                        continue;
                    break
                }
                var c = gi(i);
                c !== null && (e.splice(t, 3),
                t -= 3,
                ko(c, {
                    pending: !0,
                    data: o,
                    method: i.method,
                    action: r
                }, r, o))
            }
        }))
    }
    function $i(e) {
        function t(E) {
            return Gl(E, e)
        }
        ha !== null && Gl(ha, e),
        ma !== null && Gl(ma, e),
        pa !== null && Gl(pa, e),
        rr.forEach(t),
        lr.forEach(t);
        for (var i = 0; i < ya.length; i++) {
            var r = ya[i];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < ya.length && (i = ya[0],
        i.blockedOn === null); )
            Dp(i),
            i.blockedOn === null && ya.shift();
        if (i = (e.ownerDocument || e).$$reactFormReplay,
        i != null)
            for (r = 0; r < i.length; r += 3) {
                var o = i[r]
                  , c = i[r + 1]
                  , m = o[At] || null;
                if (typeof c == "function")
                    m || Up(i);
                else if (m) {
                    var b = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (o = c,
                        m = c[At] || null)
                            b = m.formAction;
                        else if (Bc(o) !== null)
                            continue
                    } else
                        b = m.action;
                    typeof b == "function" ? i[r + 1] = b : (i.splice(r, 3),
                    r -= 3),
                    Up(i)
                }
            }
    }
    function kp() {
        function e(c) {
            c.canIntercept && c.info === "react-transition" && c.intercept({
                handler: function() {
                    return new Promise(function(m) {
                        return o = m
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            o !== null && (o(),
            o = null),
            r || setTimeout(i, 20)
        }
        function i() {
            if (!r && !navigation.transition) {
                var c = navigation.currentEntry;
                c && c.url != null && navigation.navigate(c.url, {
                    state: c.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var r = !1
              , o = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(i, 100),
            function() {
                r = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                o !== null && (o(),
                o = null)
            }
        }
    }
    function qc(e) {
        this._internalRoot = e
    }
    Xl.prototype.render = qc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(l(409));
        var i = t.current
          , r = Gt();
        Cp(i, r, e, t, null, null)
    }
    ,
    Xl.prototype.unmount = qc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Cp(e.current, 2, null, e, null, null),
            Al(),
            t[pi] = null
        }
    }
    ;
    function Xl(e) {
        this._internalRoot = e
    }
    Xl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Pf();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var i = 0; i < ya.length && t !== 0 && t < ya[i].priority; i++)
                ;
            ya.splice(i, 0, e),
            i === 0 && Dp(e)
        }
    }
    ;
    var Bp = a.version;
    if (Bp !== "19.2.5")
        throw Error(l(527, Bp, "19.2.5"));
    K.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","),
            Error(l(268, e)));
        return e = p(t),
        e = e !== null ? v(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var aS = {
        bundleType: 0,
        version: "19.2.5",
        rendererPackageName: "react-dom",
        currentDispatcherRef: k,
        reconcilerVersion: "19.2.5"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Pl.isDisabled && Pl.supportsFiber)
            try {
                gs = Pl.inject(aS),
                Ut = Pl
            } catch {}
    }
    return cr.createRoot = function(e, t) {
        if (!u(e))
            throw Error(l(299));
        var i = !1
          , r = ""
          , o = Qh
          , c = Xh
          , m = Ph;
        return t != null && (t.unstable_strictMode === !0 && (i = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
        t.onCaughtError !== void 0 && (c = t.onCaughtError),
        t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        t = Ap(e, 1, !1, null, null, i, r, null, o, c, m, kp),
        e[pi] = t.current,
        _c(e),
        new qc(t)
    }
    ,
    cr.hydrateRoot = function(e, t, i) {
        if (!u(e))
            throw Error(l(299));
        var r = !1
          , o = ""
          , c = Qh
          , m = Xh
          , b = Ph
          , E = null;
        return i != null && (i.unstable_strictMode === !0 && (r = !0),
        i.identifierPrefix !== void 0 && (o = i.identifierPrefix),
        i.onUncaughtError !== void 0 && (c = i.onUncaughtError),
        i.onCaughtError !== void 0 && (m = i.onCaughtError),
        i.onRecoverableError !== void 0 && (b = i.onRecoverableError),
        i.formState !== void 0 && (E = i.formState)),
        t = Ap(e, 1, !0, t, i ?? null, r, o, E, c, m, b, kp),
        t.context = Tp(null),
        i = t.current,
        r = Gt(),
        r = Ou(r),
        o = ta(r),
        o.callback = null,
        na(i, o, r),
        i = r,
        t.current.lanes = i,
        bs(t, i),
        pn(t),
        e[pi] = t.current,
        _c(e),
        new Xl(t)
    }
    ,
    cr.version = "19.2.5",
    cr
}
var Kp;
function hS() {
    if (Kp)
        return Yc.exports;
    Kp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (a) {
                console.error(a)
            }
    }
    return n(),
    Yc.exports = dS(),
    Yc.exports
}
var mS = hS()
  , pS = "__TSS_CONTEXT"
  , of = Symbol.for("TSS_SERVER_FUNCTION")
  , yS = "application/x-tss-framed"
  , qn = {
    JSON: 0,
    CHUNK: 1,
    END: 2,
    ERROR: 3
}
  , gS = /;\s*v=(\d+)/;
function vS(n) {
    const a = n.match(gS);
    return a ? parseInt(a[1], 10) : void 0
}
function bS(n) {
    const a = vS(n);
    if (a !== void 0 && a !== 1)
        throw new Error(`Incompatible framed protocol version: server=${a}, client=1. Please ensure client and server are using compatible versions.`)
}
var hg = () => window.__TSS_START_OPTIONS__
  , mg = !1;
function Sr(n) {
    return n[n.length - 1]
}
function SS(n) {
    return typeof n == "function"
}
function _a(n, a) {
    return SS(n) ? n(a) : n
}
var _S = Object.prototype.hasOwnProperty
  , Fp = Object.prototype.propertyIsEnumerable
  , xS = () => Object.create(null)
  , Wa = (n, a) => ei(n, a, xS);
function ei(n, a, s= () => ({}), l=0) {
    if (n === a)
        return n;
    if (l > 500)
        return a;
    const u = a
      , f = $p(n) && $p(u);
    if (!f && !(ls(n) && ls(u)))
        return u;
    const d = f ? n : Ip(n);
    if (!d)
        return u;
    const h = f ? u : Ip(u);
    if (!h)
        return u;
    const y = d.length
      , p = h.length
      , v = f ? new Array(p) : s();
    let g = 0;
    for (let _ = 0; _ < p; _++) {
        const x = f ? _ : h[_]
          , R = n[x]
          , N = u[x];
        if (R === N) {
            v[x] = R,
            (f ? _ < y : _S.call(n, x)) && g++;
            continue
        }
        if (R === null || N === null || typeof R != "object" || typeof N != "object") {
            v[x] = N;
            continue
        }
        const w = ei(R, N, s, l + 1);
        v[x] = w,
        w === R && g++
    }
    return y === p && g === y ? n : v
}
function Ip(n) {
    const a = Object.getOwnPropertyNames(n);
    for (const u of a)
        if (!Fp.call(n, u))
            return !1;
    const s = Object.getOwnPropertySymbols(n);
    if (s.length === 0)
        return a;
    const l = a;
    for (const u of s) {
        if (!Fp.call(n, u))
            return !1;
        l.push(u)
    }
    return l
}
function ls(n) {
    if (!Jp(n))
        return !1;
    const a = n.constructor;
    if (typeof a > "u")
        return !0;
    const s = a.prototype;
    return !(!Jp(s) || !s.hasOwnProperty("isPrototypeOf"))
}
function Jp(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function $p(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}
function jt(n, a, s) {
    if (n === a)
        return !0;
    if (typeof n != typeof a)
        return !1;
    if (Array.isArray(n) && Array.isArray(a)) {
        if (n.length !== a.length)
            return !1;
        for (let l = 0, u = n.length; l < u; l++)
            if (!jt(n[l], a[l], s))
                return !1;
        return !0
    }
    if (ls(n) && ls(a)) {
        const l = s?.ignoreUndefined ?? !0;
        if (s?.partial) {
            for (const d in a)
                if ((!l || a[d] !== void 0) && !jt(n[d], a[d], s))
                    return !1;
            return !0
        }
        let u = 0;
        if (!l)
            u = Object.keys(n).length;
        else
            for (const d in n)
                n[d] !== void 0 && u++;
        let f = 0;
        for (const d in a)
            if ((!l || a[d] !== void 0) && (f++,
            f > u || !jt(n[d], a[d], s)))
                return !1;
        return u === f
    }
    return !1
}
function si(n) {
    let a, s;
    const l = new Promise( (u, f) => {
        a = u,
        s = f
    }
    );
    return l.status = "pending",
    l.resolve = u => {
        l.status = "resolved",
        l.value = u,
        a(u),
        n?.(u)
    }
    ,
    l.reject = u => {
        l.status = "rejected",
        s(u)
    }
    ,
    l
}
function wS(n) {
    return typeof n?.message != "string" ? !1 : n.message.startsWith("Failed to fetch dynamically imported module") || n.message.startsWith("error loading dynamically imported module") || n.message.startsWith("Importing a module script failed")
}
function _r(n) {
    return !!(n && typeof n == "object" && typeof n.then == "function")
}
function ES(n) {
    return n.replace(/[\x00-\x1f\x7f]/g, "")
}
function Wp(n) {
    let a;
    try {
        a = decodeURI(n)
    } catch {
        a = n.replaceAll(/%[0-9A-F]{2}/gi, s => {
            try {
                return decodeURI(s)
            } catch {
                return s
            }
        }
        )
    }
    return ES(a)
}
var RS = ["http:", "https:", "mailto:", "tel:"];
function su(n, a) {
    if (!n)
        return !1;
    try {
        const s = new URL(n);
        return !a.has(s.protocol)
    } catch {
        return !1
    }
}
var AS = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
}
  , TS = /[&><\u2028\u2029]/g;
function CS(n) {
    return n.replace(TS, a => AS[a])
}
function fr(n) {
    if (!n)
        return {
            path: n,
            handledProtocolRelativeURL: !1
        };
    if (!/[%\\\x00-\x1f\x7f]/.test(n) && !n.startsWith("//"))
        return {
            path: n,
            handledProtocolRelativeURL: !1
        };
    const a = /%25|%5C/gi;
    let s = 0, l = "", u;
    for (; (u = a.exec(n)) !== null; )
        l += Wp(n.slice(s, u.index)) + u[0],
        s = a.lastIndex;
    l = l + Wp(s ? n.slice(s) : n);
    let f = !1;
    return l.startsWith("//") && (f = !0,
    l = "/" + l.replace(/^\/+/, "")),
    {
        path: l,
        handledProtocolRelativeURL: f
    }
}
function OS(n) {
    return /\s|[^\u0000-\u007F]/.test(n) ? n.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : n
}
function MS(n, a) {
    if (n === a)
        return !0;
    if (n.length !== a.length)
        return !1;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== a[s])
            return !1;
    return !0
}
function Lt() {
    throw new Error("Invariant failed")
}
function xr(n) {
    const a = new Map;
    let s, l;
    const u = f => {
        f.next && (f.prev ? (f.prev.next = f.next,
        f.next.prev = f.prev,
        f.next = void 0,
        l && (l.next = f,
        f.prev = l)) : (f.next.prev = void 0,
        s = f.next,
        f.next = void 0,
        l && (f.prev = l,
        l.next = f)),
        l = f)
    }
    ;
    return {
        get(f) {
            const d = a.get(f);
            if (d)
                return u(d),
                d.value
        },
        set(f, d) {
            if (a.size >= n && s) {
                const y = s;
                a.delete(y.key),
                y.next && (s = y.next,
                y.next.prev = void 0),
                y === l && (l = void 0)
            }
            const h = a.get(f);
            if (h)
                h.value = d,
                u(h);
            else {
                const y = {
                    key: f,
                    value: d,
                    prev: l
                };
                l && (l.next = y),
                l = y,
                s || (s = y),
                a.set(f, y)
            }
        },
        clear() {
            a.clear(),
            s = void 0,
            l = void 0
        }
    }
}
var xa = 4
  , pg = 5;
function NS(n) {
    const a = n.indexOf("{");
    if (a === -1)
        return null;
    const s = n.indexOf("}", a);
    return s === -1 || a + 1 >= n.length ? null : [a, s]
}
function Tf(n, a, s=new Uint16Array(6)) {
    const l = n.indexOf("/", a)
      , u = l === -1 ? n.length : l
      , f = n.substring(a, u);
    if (!f || !f.includes("$"))
        return s[0] = 0,
        s[1] = a,
        s[2] = a,
        s[3] = u,
        s[4] = u,
        s[5] = u,
        s;
    if (f === "$") {
        const h = n.length;
        return s[0] = 2,
        s[1] = a,
        s[2] = a,
        s[3] = h,
        s[4] = h,
        s[5] = h,
        s
    }
    if (f.charCodeAt(0) === 36)
        return s[0] = 1,
        s[1] = a,
        s[2] = a + 1,
        s[3] = u,
        s[4] = u,
        s[5] = u,
        s;
    const d = NS(f);
    if (d) {
        const [h,y] = d
          , p = f.charCodeAt(h + 1);
        if (p === 45) {
            if (h + 2 < f.length && f.charCodeAt(h + 2) === 36) {
                const v = h + 3
                  , g = y;
                if (v < g)
                    return s[0] = 3,
                    s[1] = a + h,
                    s[2] = a + v,
                    s[3] = a + g,
                    s[4] = a + y + 1,
                    s[5] = u,
                    s
            }
        } else if (p === 36) {
            const v = h + 1
              , g = h + 2;
            return g === y ? (s[0] = 2,
            s[1] = a + h,
            s[2] = a + v,
            s[3] = a + g,
            s[4] = a + y + 1,
            s[5] = n.length,
            s) : (s[0] = 1,
            s[1] = a + h,
            s[2] = a + g,
            s[3] = a + y,
            s[4] = a + y + 1,
            s[5] = u,
            s)
        }
    }
    return s[0] = 0,
    s[1] = a,
    s[2] = a,
    s[3] = u,
    s[4] = u,
    s[5] = u,
    s
}
function vu(n, a, s, l, u, f, d) {
    d?.(s);
    let h = l;
    {
        const y = s.fullPath ?? s.from
          , p = y.length
          , v = s.options?.caseSensitive ?? n
          , g = !!(s.options?.params?.parse && s.options?.skipRouteOnParseError?.params);
        for (; h < p; ) {
            const x = Tf(y, h, a);
            let R;
            const N = h
              , w = x[5];
            switch (h = w + 1,
            f++,
            x[0]) {
            case 0:
                {
                    const A = y.substring(x[2], x[3]);
                    if (v) {
                        const B = u.static?.get(A);
                        if (B)
                            R = B;
                        else {
                            u.static ??= new Map;
                            const Z = ti(s.fullPath ?? s.from);
                            Z.parent = u,
                            Z.depth = f,
                            R = Z,
                            u.static.set(A, Z)
                        }
                    } else {
                        const B = A.toLowerCase()
                          , Z = u.staticInsensitive?.get(B);
                        if (Z)
                            R = Z;
                        else {
                            u.staticInsensitive ??= new Map;
                            const H = ti(s.fullPath ?? s.from);
                            H.parent = u,
                            H.depth = f,
                            R = H,
                            u.staticInsensitive.set(B, H)
                        }
                    }
                    break
                }
            case 1:
                {
                    const A = y.substring(N, x[1])
                      , B = y.substring(x[4], w)
                      , Z = v && !!(A || B)
                      , H = A ? Z ? A : A.toLowerCase() : void 0
                      , $ = B ? Z ? B : B.toLowerCase() : void 0
                      , I = !g && u.dynamic?.find(Q => !Q.skipOnParamError && Q.caseSensitive === Z && Q.prefix === H && Q.suffix === $);
                    if (I)
                        R = I;
                    else {
                        const Q = Kc(1, s.fullPath ?? s.from, Z, H, $);
                        R = Q,
                        Q.depth = f,
                        Q.parent = u,
                        u.dynamic ??= [],
                        u.dynamic.push(Q)
                    }
                    break
                }
            case 3:
                {
                    const A = y.substring(N, x[1])
                      , B = y.substring(x[4], w)
                      , Z = v && !!(A || B)
                      , H = A ? Z ? A : A.toLowerCase() : void 0
                      , $ = B ? Z ? B : B.toLowerCase() : void 0
                      , I = !g && u.optional?.find(Q => !Q.skipOnParamError && Q.caseSensitive === Z && Q.prefix === H && Q.suffix === $);
                    if (I)
                        R = I;
                    else {
                        const Q = Kc(3, s.fullPath ?? s.from, Z, H, $);
                        R = Q,
                        Q.parent = u,
                        Q.depth = f,
                        u.optional ??= [],
                        u.optional.push(Q)
                    }
                    break
                }
            case 2:
                {
                    const A = y.substring(N, x[1])
                      , B = y.substring(x[4], w)
                      , Z = v && !!(A || B)
                      , H = A ? Z ? A : A.toLowerCase() : void 0
                      , $ = B ? Z ? B : B.toLowerCase() : void 0
                      , I = Kc(2, s.fullPath ?? s.from, Z, H, $);
                    R = I,
                    I.parent = u,
                    I.depth = f,
                    u.wildcard ??= [],
                    u.wildcard.push(I)
                }
            }
            u = R
        }
        if (g && s.children && !s.isRoot && s.id && s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95) {
            const x = ti(s.fullPath ?? s.from);
            x.kind = pg,
            x.parent = u,
            f++,
            x.depth = f,
            u.pathless ??= [],
            u.pathless.push(x),
            u = x
        }
        const _ = (s.path || !s.children) && !s.isRoot;
        if (_ && y.endsWith("/")) {
            const x = ti(s.fullPath ?? s.from);
            x.kind = xa,
            x.parent = u,
            f++,
            x.depth = f,
            u.index = x,
            u = x
        }
        u.parse = s.options?.params?.parse ?? null,
        u.skipOnParamError = g,
        u.parsingPriority = s.options?.skipRouteOnParseError?.priority ?? 0,
        _ && !u.route && (u.route = s,
        u.fullPath = s.fullPath ?? s.from)
    }
    if (s.children)
        for (const y of s.children)
            vu(n, a, y, h, u, f, d)
}
function Pc(n, a) {
    if (n.skipOnParamError && !a.skipOnParamError)
        return -1;
    if (!n.skipOnParamError && a.skipOnParamError)
        return 1;
    if (n.skipOnParamError && a.skipOnParamError && (n.parsingPriority || a.parsingPriority))
        return a.parsingPriority - n.parsingPriority;
    if (n.prefix && a.prefix && n.prefix !== a.prefix) {
        if (n.prefix.startsWith(a.prefix))
            return -1;
        if (a.prefix.startsWith(n.prefix))
            return 1
    }
    if (n.suffix && a.suffix && n.suffix !== a.suffix) {
        if (n.suffix.endsWith(a.suffix))
            return -1;
        if (a.suffix.endsWith(n.suffix))
            return 1
    }
    return n.prefix && !a.prefix ? -1 : !n.prefix && a.prefix ? 1 : n.suffix && !a.suffix ? -1 : !n.suffix && a.suffix ? 1 : n.caseSensitive && !a.caseSensitive ? -1 : !n.caseSensitive && a.caseSensitive ? 1 : 0
}
function va(n) {
    if (n.pathless)
        for (const a of n.pathless)
            va(a);
    if (n.static)
        for (const a of n.static.values())
            va(a);
    if (n.staticInsensitive)
        for (const a of n.staticInsensitive.values())
            va(a);
    if (n.dynamic?.length) {
        n.dynamic.sort(Pc);
        for (const a of n.dynamic)
            va(a)
    }
    if (n.optional?.length) {
        n.optional.sort(Pc);
        for (const a of n.optional)
            va(a)
    }
    if (n.wildcard?.length) {
        n.wildcard.sort(Pc);
        for (const a of n.wildcard)
            va(a)
    }
}
function ti(n) {
    return {
        kind: 0,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: n,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0
    }
}
function Kc(n, a, s, l, u) {
    return {
        kind: n,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: a,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0,
        caseSensitive: s,
        prefix: l,
        suffix: u
    }
}
function zS(n, a) {
    const s = ti("/")
      , l = new Uint16Array(6);
    for (const u of n)
        vu(!1, l, u, 1, s, 0);
    va(s),
    a.masksTree = s,
    a.flatCache = xr(1e3)
}
function jS(n, a) {
    n ||= "/";
    const s = a.flatCache.get(n);
    if (s)
        return s;
    const l = Cf(n, a.masksTree);
    return a.flatCache.set(n, l),
    l
}
function DS(n, a, s, l, u) {
    n ||= "/",
    l ||= "/";
    const f = a ? `case\0${n}` : n;
    let d = u.singleCache.get(f);
    return d || (d = ti("/"),
    vu(a, new Uint16Array(6), {
        from: n
    }, 1, d, 0),
    u.singleCache.set(f, d)),
    Cf(l, d, s)
}
function LS(n, a, s=!1) {
    const l = s ? n : `nofuzz\0${n}`
      , u = a.matchCache.get(l);
    if (u !== void 0)
        return u;
    n ||= "/";
    let f;
    try {
        f = Cf(n, a.segmentTree, s)
    } catch (d) {
        if (d instanceof URIError)
            f = null;
        else
            throw d
    }
    return f && (f.branch = BS(f.route)),
    a.matchCache.set(l, f),
    f
}
function US(n) {
    return n === "/" ? n : n.replace(/\/{1,}$/, "")
}
function kS(n, a=!1, s) {
    const l = ti(n.fullPath)
      , u = new Uint16Array(6)
      , f = {}
      , d = {};
    let h = 0;
    return vu(a, u, n, 1, l, 0, y => {
        if (s?.(y, h),
        y.id in f && Lt(),
        f[y.id] = y,
        h !== 0 && y.path) {
            const p = US(y.fullPath);
            (!d[p] || y.fullPath.endsWith("/")) && (d[p] = y)
        }
        h++
    }
    ),
    va(l),
    {
        processedTree: {
            segmentTree: l,
            singleCache: xr(1e3),
            matchCache: xr(1e3),
            flatCache: null,
            masksTree: null
        },
        routesById: f,
        routesByPath: d
    }
}
function Cf(n, a, s=!1) {
    const l = n.split("/")
      , u = qS(n, l, a, s);
    if (!u)
        return null;
    const [f] = yg(n, l, u);
    return {
        route: u.node.route,
        rawParams: f,
        parsedParams: u.parsedParams
    }
}
function yg(n, a, s) {
    const l = HS(s.node);
    let u = null;
    const f = Object.create(null);
    let d = s.extract?.part ?? 0
      , h = s.extract?.node ?? 0
      , y = s.extract?.path ?? 0
      , p = s.extract?.segment ?? 0;
    for (; h < l.length; d++,
    h++,
    y++,
    p++) {
        const v = l[h];
        if (v.kind === xa)
            break;
        if (v.kind === pg) {
            p--,
            d--,
            y--;
            continue
        }
        const g = a[d]
          , _ = y;
        if (g && (y += g.length),
        v.kind === 1) {
            u ??= s.node.fullPath.split("/");
            const x = u[p]
              , R = v.prefix?.length ?? 0;
            if (x.charCodeAt(R) === 123) {
                const N = v.suffix?.length ?? 0
                  , w = x.substring(R + 2, x.length - N - 1)
                  , A = g.substring(R, g.length - N);
                f[w] = decodeURIComponent(A)
            } else {
                const N = x.substring(1);
                f[N] = decodeURIComponent(g)
            }
        } else if (v.kind === 3) {
            if (s.skipped & 1 << h) {
                d--,
                y = _ - 1;
                continue
            }
            u ??= s.node.fullPath.split("/");
            const x = u[p]
              , R = v.prefix?.length ?? 0
              , N = v.suffix?.length ?? 0
              , w = x.substring(R + 3, x.length - N - 1)
              , A = v.suffix || v.prefix ? g.substring(R, g.length - N) : g;
            A && (f[w] = decodeURIComponent(A))
        } else if (v.kind === 2) {
            const x = v
              , R = n.substring(_ + (x.prefix?.length ?? 0), n.length - (x.suffix?.length ?? 0))
              , N = decodeURIComponent(R);
            f["*"] = N,
            f._splat = N;
            break
        }
    }
    return s.rawParams && Object.assign(f, s.rawParams),
    [f, {
        part: d,
        node: h,
        path: y,
        segment: p
    }]
}
function BS(n) {
    const a = [n];
    for (; n.parentRoute; )
        n = n.parentRoute,
        a.push(n);
    return a.reverse(),
    a
}
function HS(n) {
    const a = Array(n.depth + 1);
    do
        a[n.depth] = n,
        n = n.parent;
    while (n);
    return a
}
function qS(n, a, s, l) {
    if (n === "/" && s.index)
        return {
            node: s.index,
            skipped: 0
        };
    const u = !Sr(a)
      , f = u && n !== "/"
      , d = a.length - (u ? 1 : 0)
      , h = [{
        node: s,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 0,
        dynamics: 0,
        optionals: 0
    }];
    let y = null
      , p = null;
    for (; h.length; ) {
        const v = h.pop()
          , {node: g, index: _, skipped: x, depth: R, statics: N, dynamics: w, optionals: A} = v;
        let {extract: B, rawParams: Z, parsedParams: H} = v;
        if (g.kind === 2 && g.route && !Fl(p, v))
            continue;
        if (g.skipOnParamError) {
            if (!ey(n, a, v))
                continue;
            Z = v.rawParams,
            B = v.extract,
            H = v.parsedParams
        }
        l && g.route && g.kind !== xa && Fl(y, v) && (y = v);
        const $ = _ === d;
        if ($ && (g.route && (!f || g.kind === xa || g.kind === 2) && Fl(p, v) && (p = v),
        !g.optional && !g.wildcard && !g.index && !g.pathless))
            continue;
        const I = $ ? void 0 : a[_];
        let Q;
        if ($ && g.index) {
            const X = {
                node: g.index,
                index: _,
                skipped: x,
                depth: R + 1,
                statics: N,
                dynamics: w,
                optionals: A,
                extract: B,
                rawParams: Z,
                parsedParams: H
            };
            let W = !0;
            if (g.index.skipOnParamError && (ey(n, a, X) || (W = !1)),
            W) {
                if (!w && !A && !x && ZS(N, d))
                    return X;
                Fl(p, X) && (p = X)
            }
        }
        if (g.wildcard)
            for (let X = g.wildcard.length - 1; X >= 0; X--) {
                const W = g.wildcard[X]
                  , {prefix: ce, suffix: re} = W;
                if (!(ce && ($ || !(W.caseSensitive ? I : Q ??= I.toLowerCase()).startsWith(ce)))) {
                    if (re) {
                        if ($)
                            continue;
                        const _e = a.slice(_).join("/").slice(-re.length);
                        if ((W.caseSensitive ? _e : _e.toLowerCase()) !== re)
                            continue
                    }
                    h.push({
                        node: W,
                        index: d,
                        skipped: x,
                        depth: R + 1,
                        statics: N,
                        dynamics: w,
                        optionals: A,
                        extract: B,
                        rawParams: Z,
                        parsedParams: H
                    })
                }
            }
        if (g.optional) {
            const X = x | 1 << R
              , W = R + 1;
            for (let ce = g.optional.length - 1; ce >= 0; ce--) {
                const re = g.optional[ce];
                h.push({
                    node: re,
                    index: _,
                    skipped: X,
                    depth: W,
                    statics: N,
                    dynamics: w,
                    optionals: A,
                    extract: B,
                    rawParams: Z,
                    parsedParams: H
                })
            }
            if (!$)
                for (let ce = g.optional.length - 1; ce >= 0; ce--) {
                    const re = g.optional[ce]
                      , {prefix: _e, suffix: Le} = re;
                    if (_e || Le) {
                        const $e = re.caseSensitive ? I : Q ??= I.toLowerCase();
                        if (_e && !$e.startsWith(_e) || Le && !$e.endsWith(Le))
                            continue
                    }
                    h.push({
                        node: re,
                        index: _ + 1,
                        skipped: x,
                        depth: W,
                        statics: N,
                        dynamics: w,
                        optionals: A + Kl(d, _),
                        extract: B,
                        rawParams: Z,
                        parsedParams: H
                    })
                }
        }
        if (!$ && g.dynamic && I)
            for (let X = g.dynamic.length - 1; X >= 0; X--) {
                const W = g.dynamic[X]
                  , {prefix: ce, suffix: re} = W;
                if (ce || re) {
                    const _e = W.caseSensitive ? I : Q ??= I.toLowerCase();
                    if (ce && !_e.startsWith(ce) || re && !_e.endsWith(re))
                        continue
                }
                h.push({
                    node: W,
                    index: _ + 1,
                    skipped: x,
                    depth: R + 1,
                    statics: N,
                    dynamics: w + Kl(d, _),
                    optionals: A,
                    extract: B,
                    rawParams: Z,
                    parsedParams: H
                })
            }
        if (!$ && g.staticInsensitive) {
            const X = g.staticInsensitive.get(Q ??= I.toLowerCase());
            X && h.push({
                node: X,
                index: _ + 1,
                skipped: x,
                depth: R + 1,
                statics: N + Kl(d, _),
                dynamics: w,
                optionals: A,
                extract: B,
                rawParams: Z,
                parsedParams: H
            })
        }
        if (!$ && g.static) {
            const X = g.static.get(I);
            X && h.push({
                node: X,
                index: _ + 1,
                skipped: x,
                depth: R + 1,
                statics: N + Kl(d, _),
                dynamics: w,
                optionals: A,
                extract: B,
                rawParams: Z,
                parsedParams: H
            })
        }
        if (g.pathless) {
            const X = R + 1;
            for (let W = g.pathless.length - 1; W >= 0; W--) {
                const ce = g.pathless[W];
                h.push({
                    node: ce,
                    index: _,
                    skipped: x,
                    depth: X,
                    statics: N,
                    dynamics: w,
                    optionals: A,
                    extract: B,
                    rawParams: Z,
                    parsedParams: H
                })
            }
        }
    }
    if (p)
        return p;
    if (l && y) {
        let v = y.index;
        for (let _ = 0; _ < y.index; _++)
            v += a[_].length;
        const g = v === n.length ? "/" : n.slice(v);
        return y.rawParams ??= Object.create(null),
        y.rawParams["**"] = decodeURIComponent(g),
        y
    }
    return null
}
function Kl(n, a) {
    return 2 ** (n - a - 1)
}
function ZS(n, a) {
    return n === 2 ** (a - 1) - 1
}
function ey(n, a, s) {
    try {
        const [l,u] = yg(n, a, s);
        s.rawParams = l,
        s.extract = u;
        const f = s.node.parse(l);
        return s.parsedParams = Object.assign(Object.create(null), s.parsedParams, f),
        !0
    } catch {
        return null
    }
}
function Fl(n, a) {
    return n ? a.statics > n.statics || a.statics === n.statics && (a.dynamics > n.dynamics || a.dynamics === n.dynamics && (a.optionals > n.optionals || a.optionals === n.optionals && ((a.node.kind === xa) > (n.node.kind === xa) || a.node.kind === xa == (n.node.kind === xa) && a.depth > n.depth))) : !0
}
function eu(n) {
    return Of(n.filter(a => a !== void 0).join("/"))
}
function Of(n) {
    return n.replace(/\/{2,}/g, "/")
}
function gg(n) {
    return n === "/" ? n : n.replace(/^\/{1,}/, "")
}
function Ea(n) {
    const a = n.length;
    return a > 1 && n[a - 1] === "/" ? n.replace(/\/{1,}$/, "") : n
}
function vg(n) {
    return Ea(gg(n))
}
function ru(n, a) {
    return n?.endsWith("/") && n !== "/" && n !== `${a}/` ? n.slice(0, -1) : n
}
function VS(n, a, s) {
    return ru(n, s) === ru(a, s)
}
function YS({base: n, to: a, trailingSlash: s="never", cache: l}) {
    const u = a.startsWith("/")
      , f = !u && a === ".";
    let d;
    if (l) {
        d = u ? a : f ? n : n + "\0" + a;
        const g = l.get(d);
        if (g)
            return g
    }
    let h;
    if (f)
        h = n.split("/");
    else if (u)
        h = a.split("/");
    else {
        for (h = n.split("/"); h.length > 1 && Sr(h) === ""; )
            h.pop();
        const g = a.split("/");
        for (let _ = 0, x = g.length; _ < x; _++) {
            const R = g[_];
            R === "" ? _ ? _ === x - 1 && h.push(R) : h = [R] : R === ".." ? h.pop() : R === "." || h.push(R)
        }
    }
    h.length > 1 && (Sr(h) === "" ? s === "never" && h.pop() : s === "always" && h.push(""));
    let y, p = "";
    for (let g = 0; g < h.length; g++) {
        g > 0 && (p += "/");
        const _ = h[g];
        if (!_)
            continue;
        y = Tf(_, 0, y);
        const x = y[0];
        if (x === 0) {
            p += _;
            continue
        }
        const R = y[5]
          , N = _.substring(0, y[1])
          , w = _.substring(y[4], R)
          , A = _.substring(y[2], y[3]);
        x === 1 ? p += N || w ? `${N}{$${A}}${w}` : `$${A}` : x === 2 ? p += N || w ? `${N}{$}${w}` : "$" : p += `${N}{-$${A}}${w}`
    }
    p = Of(p);
    const v = p || "/";
    return d && l && l.set(d, v),
    v
}
function GS(n) {
    const a = new Map(n.map(u => [encodeURIComponent(u), u]))
      , s = Array.from(a.keys()).map(u => u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
      , l = new RegExp(s,"g");
    return u => u.replace(l, f => a.get(f) ?? f)
}
function Fc(n, a, s) {
    const l = a[n];
    return typeof l != "string" ? l : n === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(l) ? l : l.split("/").map(u => ny(u, s)).join("/") : ny(l, s)
}
function ty({path: n, params: a, decoder: s, ...l}) {
    let u = !1;
    const f = Object.create(null);
    if (!n || n === "/")
        return {
            interpolatedPath: "/",
            usedParams: f,
            isMissingParams: u
        };
    if (!n.includes("$"))
        return {
            interpolatedPath: n,
            usedParams: f,
            isMissingParams: u
        };
    const d = n.length;
    let h = 0, y, p = "";
    for (; h < d; ) {
        const v = h;
        y = Tf(n, v, y);
        const g = y[5];
        if (h = g + 1,
        v === g)
            continue;
        const _ = y[0];
        if (_ === 0) {
            p += "/" + n.substring(v, g);
            continue
        }
        if (_ === 2) {
            const x = a._splat;
            f._splat = x,
            f["*"] = x;
            const R = n.substring(v, y[1])
              , N = n.substring(y[4], g);
            if (!x) {
                u = !0,
                (R || N) && (p += "/" + R + N);
                continue
            }
            const w = Fc("_splat", a, s);
            p += "/" + R + w + N;
            continue
        }
        if (_ === 1) {
            const x = n.substring(y[2], y[3]);
            !u && !(x in a) && (u = !0),
            f[x] = a[x];
            const R = n.substring(v, y[1])
              , N = n.substring(y[4], g)
              , w = Fc(x, a, s) ?? "undefined";
            p += "/" + R + w + N;
            continue
        }
        if (_ === 3) {
            const x = n.substring(y[2], y[3])
              , R = a[x];
            if (R == null)
                continue;
            f[x] = R;
            const N = n.substring(v, y[1])
              , w = n.substring(y[4], g)
              , A = Fc(x, a, s) ?? "";
            p += "/" + N + A + w;
            continue
        }
    }
    return n.endsWith("/") && (p += "/"),
    {
        usedParams: f,
        interpolatedPath: p || "/",
        isMissingParams: u
    }
}
function ny(n, a) {
    const s = encodeURIComponent(n);
    return a?.(s) ?? s
}
function QS(n={}) {
    if (n.isNotFound = !0,
    n.throw)
        throw n;
    return n
}
function ht(n) {
    return n?.isNotFound === !0
}
function XS() {
    try {
        return typeof window < "u" && typeof window.sessionStorage == "object" ? window.sessionStorage : void 0
    } catch {
        return
    }
}
var PS = "tsr-scroll-restoration-v1_3";
function KS() {
    const n = XS();
    if (!n)
        return null;
    let a = {};
    try {
        const l = JSON.parse(n.getItem("tsr-scroll-restoration-v1_3") || "{}");
        ls(l) && (a = l)
    } catch {}
    return {
        get state() {
            return a
        },
        set: l => {
            a = _a(l, a) || a
        }
        ,
        persist: () => {
            try {
                n.setItem(PS, JSON.stringify(a))
            } catch {}
        }
    }
}
var ay = KS()
  , FS = n => n.state.__TSR_key || n.href;
function IS(n) {
    const a = [];
    let s;
    for (; s = n.parentNode; )
        a.push(`${n.tagName}:nth-child(${Array.prototype.indexOf.call(s.children, n) + 1})`),
        n = s;
    return `${a.reverse().join(" > ")}`.toLowerCase()
}
var Il = !1
  , dr = "window"
  , iy = "data-scroll-restoration-id";
function JS(n, a) {
    if (!ay)
        return;
    const s = ay;
    if ((n.options.scrollRestoration ?? !1) && (n.isScrollRestoring = !0),
    n.isScrollRestorationSetup || !s)
        return;
    n.isScrollRestorationSetup = !0,
    Il = !1;
    const l = n.options.getScrollRestorationKey || FS
      , u = new Map;
    window.history.scrollRestoration = "manual";
    const f = h => {
        if (!(Il || !n.isScrollRestoring))
            if (h.target === document || h.target === window)
                u.set(dr, {
                    scrollX: window.scrollX || 0,
                    scrollY: window.scrollY || 0
                });
            else {
                const y = h.target;
                u.set(y, {
                    scrollX: y.scrollLeft || 0,
                    scrollY: y.scrollTop || 0
                })
            }
    }
      , d = h => {
        if (!n.isScrollRestoring || !h || u.size === 0 || !s)
            return;
        const y = s.state[h] ||= {};
        for (const [p,v] of u) {
            let g;
            if (p === dr)
                g = dr;
            else if (p.isConnected) {
                const _ = p.getAttribute(iy);
                g = _ ? `[${iy}="${_}"]` : IS(p)
            }
            g && (y[g] = v)
        }
    }
    ;
    document.addEventListener("scroll", f, !0),
    n.subscribe("onBeforeLoad", h => {
        d(h.fromLocation ? l(h.fromLocation) : void 0),
        u.clear()
    }
    ),
    window.addEventListener("pagehide", () => {
        d(l(n.stores.resolvedLocation.get() ?? n.stores.location.get())),
        s.persist()
    }
    ),
    n.subscribe("onRendered", h => {
        const y = l(h.toLocation)
          , p = n.options.scrollRestorationBehavior
          , v = n.options.scrollToTopSelectors;
        if (u.clear(),
        !n.resetNextScroll) {
            n.resetNextScroll = !0;
            return
        }
        if (!(typeof n.options.scrollRestoration == "function" && !n.options.scrollRestoration({
            location: n.latestLocation
        }))) {
            Il = !0;
            try {
                const g = n.isScrollRestoring ? s.state[y] : void 0;
                let _ = !1;
                if (g)
                    for (const x in g) {
                        const R = g[x];
                        if (!ls(R))
                            continue;
                        const {scrollX: N, scrollY: w} = R;
                        if (!(!Number.isFinite(N) || !Number.isFinite(w))) {
                            if (x === dr)
                                window.scrollTo({
                                    top: w,
                                    left: N,
                                    behavior: p
                                }),
                                _ = !0;
                            else if (x) {
                                let A;
                                try {
                                    A = document.querySelector(x)
                                } catch {
                                    continue
                                }
                                A && (A.scrollLeft = N,
                                A.scrollTop = w,
                                _ = !0)
                            }
                        }
                    }
                if (!_) {
                    const x = n.history.location.hash.slice(1);
                    if (x) {
                        const R = window.history.state?.__hashScrollIntoViewOptions ?? !0;
                        if (R) {
                            const N = document.getElementById(x);
                            N && N.scrollIntoView(R)
                        }
                    } else {
                        const R = {
                            top: 0,
                            left: 0,
                            behavior: p
                        };
                        if (window.scrollTo(R),
                        v)
                            for (const N of v) {
                                if (N === dr)
                                    continue;
                                const w = typeof N == "function" ? N() : document.querySelector(N);
                                w && w.scrollTo(R)
                            }
                    }
                }
            } finally {
                Il = !1
            }
            n.isScrollRestoring && s.set(g => (g[y] ||= {},
            g))
        }
    }
    )
}
function bg(n, a=String) {
    const s = new URLSearchParams;
    for (const l in n) {
        const u = n[l];
        u !== void 0 && s.set(l, a(u))
    }
    return s.toString()
}
function Ic(n) {
    return n ? n === "false" ? !1 : n === "true" ? !0 : +n * 0 === 0 && +n + "" === n ? +n : n : ""
}
function $S(n) {
    const a = new URLSearchParams(n)
      , s = Object.create(null);
    for (const [l,u] of a.entries()) {
        const f = s[l];
        f == null ? s[l] = Ic(u) : Array.isArray(f) ? f.push(Ic(u)) : s[l] = [f, Ic(u)]
    }
    return s
}
var WS = t_(JSON.parse)
  , e_ = n_(JSON.stringify, JSON.parse);
function t_(n) {
    return a => {
        a[0] === "?" && (a = a.substring(1));
        const s = $S(a);
        for (const l in s) {
            const u = s[l];
            if (typeof u == "string")
                try {
                    s[l] = n(u)
                } catch {}
        }
        return s
    }
}
function n_(n, a) {
    const s = typeof a == "function";
    function l(u) {
        if (typeof u == "object" && u !== null)
            try {
                return n(u)
            } catch {}
        else if (s && typeof u == "string")
            try {
                return a(u),
                n(u)
            } catch {}
        return u
    }
    return u => {
        const f = bg(u, l);
        return f ? `?${f}` : ""
    }
}
var ai = "__root__";
function Sg(n) {
    if (n.statusCode = n.statusCode || n.code || 307,
    !n._builtLocation && !n.reloadDocument && typeof n.href == "string")
        try {
            new URL(n.href),
            n.reloadDocument = !0
        } catch {}
    const a = new Headers(n.headers);
    n.href && a.get("Location") === null && a.set("Location", n.href);
    const s = new Response(null,{
        status: n.statusCode,
        headers: a
    });
    if (s.options = n,
    n.throw)
        throw s;
    return s
}
function Dt(n) {
    return n instanceof Response && !!n.options
}
function a_(n) {
    if (n !== null && typeof n == "object" && n.isSerializedRedirect)
        return Sg(n)
}
function i_(n) {
    return {
        input: ({url: a}) => {
            for (const s of n)
                a = cf(s, a);
            return a
        }
        ,
        output: ({url: a}) => {
            for (let s = n.length - 1; s >= 0; s--)
                a = _g(n[s], a);
            return a
        }
    }
}
function s_(n) {
    const a = vg(n.basepath)
      , s = `/${a}`
      , l = `${s}/`
      , u = n.caseSensitive ? s : s.toLowerCase()
      , f = n.caseSensitive ? l : l.toLowerCase();
    return {
        input: ({url: d}) => {
            const h = n.caseSensitive ? d.pathname : d.pathname.toLowerCase();
            return h === u ? d.pathname = "/" : h.startsWith(f) && (d.pathname = d.pathname.slice(s.length)),
            d
        }
        ,
        output: ({url: d}) => (d.pathname = eu(["/", a, d.pathname]),
        d)
    }
}
function cf(n, a) {
    const s = n?.input?.({
        url: a
    });
    if (s) {
        if (typeof s == "string")
            return new URL(s);
        if (s instanceof URL)
            return s
    }
    return a
}
function _g(n, a) {
    const s = n?.output?.({
        url: a
    });
    if (s) {
        if (typeof s == "string")
            return new URL(s);
        if (s instanceof URL)
            return s
    }
    return a
}
function r_(n, a) {
    const {createMutableStore: s, createReadonlyStore: l, batch: u, init: f} = a
      , d = new Map
      , h = new Map
      , y = new Map
      , p = s(n.status)
      , v = s(n.loadedAt)
      , g = s(n.isLoading)
      , _ = s(n.isTransitioning)
      , x = s(n.location)
      , R = s(n.resolvedLocation)
      , N = s(n.statusCode)
      , w = s(n.redirect)
      , A = s([])
      , B = s([])
      , Z = s([])
      , H = l( () => Jc(d, A.get()))
      , $ = l( () => Jc(h, B.get()))
      , I = l( () => Jc(y, Z.get()))
      , Q = l( () => A.get()[0])
      , X = l( () => A.get().some(K => d.get(K)?.get().status === "pending"))
      , W = l( () => ({
        locationHref: x.get().href,
        resolvedLocationHref: R.get()?.href,
        status: p.get()
    }))
      , ce = l( () => ({
        status: p.get(),
        loadedAt: v.get(),
        isLoading: g.get(),
        isTransitioning: _.get(),
        matches: H.get(),
        location: x.get(),
        resolvedLocation: R.get(),
        statusCode: N.get(),
        redirect: w.get()
    }))
      , re = xr(64);
    function _e(K) {
        let oe = re.get(K);
        return oe || (oe = l( () => {
            const ze = A.get();
            for (const De of ze) {
                const O = d.get(De);
                if (O && O.routeId === K)
                    return O.get()
            }
        }
        ),
        re.set(K, oe)),
        oe
    }
    const Le = {
        status: p,
        loadedAt: v,
        isLoading: g,
        isTransitioning: _,
        location: x,
        resolvedLocation: R,
        statusCode: N,
        redirect: w,
        matchesId: A,
        pendingIds: B,
        cachedIds: Z,
        matches: H,
        pendingMatches: $,
        cachedMatches: I,
        firstId: Q,
        hasPending: X,
        matchRouteDeps: W,
        matchStores: d,
        pendingMatchStores: h,
        cachedMatchStores: y,
        __store: ce,
        getRouteMatchStore: _e,
        setMatches: $e,
        setPending: Qe,
        setCached: k
    };
    $e(n.matches),
    f?.(Le);
    function $e(K) {
        $c(K, d, A, s, u)
    }
    function Qe(K) {
        $c(K, h, B, s, u)
    }
    function k(K) {
        $c(K, y, Z, s, u)
    }
    return Le
}
function Jc(n, a) {
    const s = [];
    for (const l of a) {
        const u = n.get(l);
        u && s.push(u.get())
    }
    return s
}
function $c(n, a, s, l, u) {
    const f = n.map(h => h.id)
      , d = new Set(f);
    u( () => {
        for (const h of a.keys())
            d.has(h) || a.delete(h);
        for (const h of n) {
            const y = a.get(h.id);
            if (!y) {
                const p = l(h);
                p.routeId = h.routeId,
                a.set(h.id, p);
                continue
            }
            y.routeId = h.routeId,
            y.get() !== h && y.set(h)
        }
        MS(s.get(), f) || s.set(f)
    }
    )
}
var ff = n => {
    if (!n.rendered)
        return n.rendered = !0,
        n.onReady?.()
}
  , l_ = n => n.stores.matchesId.get().some(a => n.stores.matchStores.get(a)?.get()._forcePending)
  , bu = (n, a) => !!(n.preload && !n.router.stores.matchStores.has(a))
  , ii = (n, a, s=!0) => {
    const l = {
        ...n.router.options.context ?? {}
    }
      , u = s ? a : a - 1;
    for (let f = 0; f <= u; f++) {
        const d = n.matches[f];
        if (!d)
            continue;
        const h = n.router.getMatch(d.id);
        h && Object.assign(l, h.__routeContext, h.__beforeLoadContext)
    }
    return l
}
  , sy = (n, a) => {
    if (!n.matches.length)
        return;
    const s = a.routeId
      , l = n.matches.findIndex(d => d.routeId === n.router.routeTree.id)
      , u = l >= 0 ? l : 0;
    let f = s ? n.matches.findIndex(d => d.routeId === s) : n.firstBadMatchIndex ?? n.matches.length - 1;
    f < 0 && (f = u);
    for (let d = f; d >= 0; d--) {
        const h = n.matches[d];
        if (n.router.looseRoutesById[h.routeId].options.notFoundComponent)
            return d
    }
    return s ? f : u
}
  , wa = (n, a, s) => {
    if (!(!Dt(s) && !ht(s)))
        throw Dt(s) && s.redirectHandled && !s.options.reloadDocument || (a && (a._nonReactive.beforeLoadPromise?.resolve(),
        a._nonReactive.loaderPromise?.resolve(),
        a._nonReactive.beforeLoadPromise = void 0,
        a._nonReactive.loaderPromise = void 0,
        a._nonReactive.error = s,
        n.updateMatch(a.id, l => ({
            ...l,
            status: Dt(s) ? "redirected" : ht(s) ? "notFound" : l.status === "pending" ? "success" : l.status,
            context: ii(n, a.index),
            isFetching: !1,
            error: s
        })),
        ht(s) && !s.routeId && (s.routeId = a.routeId),
        a._nonReactive.loadPromise?.resolve()),
        Dt(s) && (n.rendered = !0,
        s.options._fromLocation = n.location,
        s.redirectHandled = !0,
        s = n.router.resolveRedirect(s))),
        s
}
  , xg = (n, a) => {
    const s = n.router.getMatch(a);
    return !!(!s || s._nonReactive.dehydrated)
}
  , ry = (n, a, s) => {
    const l = ii(n, s);
    n.updateMatch(a, u => ({
        ...u,
        context: l
    }))
}
  , hr = (n, a, s, l) => {
    const {id: u, routeId: f} = n.matches[a]
      , d = n.router.looseRoutesById[f];
    if (s instanceof Promise)
        throw s;
    s.routerCode = l,
    n.firstBadMatchIndex ??= a,
    wa(n, n.router.getMatch(u), s);
    try {
        d.options.onError?.(s)
    } catch (h) {
        s = h,
        wa(n, n.router.getMatch(u), s)
    }
    n.updateMatch(u, h => (h._nonReactive.beforeLoadPromise?.resolve(),
    h._nonReactive.beforeLoadPromise = void 0,
    h._nonReactive.loadPromise?.resolve(),
    {
        ...h,
        error: s,
        status: "error",
        isFetching: !1,
        updatedAt: Date.now(),
        abortController: new AbortController
    })),
    !n.preload && !Dt(s) && !ht(s) && (n.serialError ??= s)
}
  , wg = (n, a, s, l) => {
    if (l._nonReactive.pendingTimeout !== void 0)
        return;
    const u = s.options.pendingMs ?? n.router.options.defaultPendingMs;
    if (n.onReady && !bu(n, a) && (s.options.loader || s.options.beforeLoad || Rg(s)) && typeof u == "number" && u !== 1 / 0 && (s.options.pendingComponent ?? n.router.options?.defaultPendingComponent)) {
        const f = setTimeout( () => {
            ff(n)
        }
        , u);
        l._nonReactive.pendingTimeout = f
    }
}
  , u_ = (n, a, s) => {
    const l = n.router.getMatch(a);
    if (!l._nonReactive.beforeLoadPromise && !l._nonReactive.loaderPromise)
        return;
    wg(n, a, s, l);
    const u = () => {
        const f = n.router.getMatch(a);
        f.preload && (f.status === "redirected" || f.status === "notFound") && wa(n, f, f.error)
    }
    ;
    return l._nonReactive.beforeLoadPromise ? l._nonReactive.beforeLoadPromise.then(u) : u()
}
  , o_ = (n, a, s, l) => {
    const u = n.router.getMatch(a);
    let f = u._nonReactive.loadPromise;
    u._nonReactive.loadPromise = si( () => {
        f?.resolve(),
        f = void 0
    }
    );
    const {paramsError: d, searchError: h} = u;
    d && hr(n, s, d, "PARSE_PARAMS"),
    h && hr(n, s, h, "VALIDATE_SEARCH"),
    wg(n, a, l, u);
    const y = new AbortController;
    let p = !1;
    const v = () => {
        p || (p = !0,
        n.updateMatch(a, H => ({
            ...H,
            isFetching: "beforeLoad",
            fetchCount: H.fetchCount + 1,
            abortController: y
        })))
    }
      , g = () => {
        u._nonReactive.beforeLoadPromise?.resolve(),
        u._nonReactive.beforeLoadPromise = void 0,
        n.updateMatch(a, H => ({
            ...H,
            isFetching: !1
        }))
    }
    ;
    if (!l.options.beforeLoad) {
        n.router.batch( () => {
            v(),
            g()
        }
        );
        return
    }
    u._nonReactive.beforeLoadPromise = si();
    const _ = {
        ...ii(n, s, !1),
        ...u.__routeContext
    }
      , {search: x, params: R, cause: N} = u
      , w = bu(n, a)
      , A = {
        search: x,
        abortController: y,
        params: R,
        preload: w,
        context: _,
        location: n.location,
        navigate: H => n.router.navigate({
            ...H,
            _fromLocation: n.location
        }),
        buildLocation: n.router.buildLocation,
        cause: w ? "preload" : N,
        matches: n.matches,
        routeId: l.id,
        ...n.router.options.additionalContext
    }
      , B = H => {
        if (H === void 0) {
            n.router.batch( () => {
                v(),
                g()
            }
            );
            return
        }
        (Dt(H) || ht(H)) && (v(),
        hr(n, s, H, "BEFORE_LOAD")),
        n.router.batch( () => {
            v(),
            n.updateMatch(a, $ => ({
                ...$,
                __beforeLoadContext: H
            })),
            g()
        }
        )
    }
    ;
    let Z;
    try {
        if (Z = l.options.beforeLoad(A),
        _r(Z))
            return v(),
            Z.catch(H => {
                hr(n, s, H, "BEFORE_LOAD")
            }
            ).then(B)
    } catch (H) {
        v(),
        hr(n, s, H, "BEFORE_LOAD")
    }
    B(Z)
}
  , c_ = (n, a) => {
    const {id: s, routeId: l} = n.matches[a]
      , u = n.router.looseRoutesById[l]
      , f = () => h()
      , d = () => o_(n, s, a, u)
      , h = () => {
        if (xg(n, s))
            return;
        const y = u_(n, s, u);
        return _r(y) ? y.then(d) : d()
    }
    ;
    return f()
}
  , f_ = (n, a, s) => {
    const l = n.router.getMatch(a);
    if (!l || !s.options.head && !s.options.scripts && !s.options.headers)
        return;
    const u = {
        ssr: n.router.options.ssr,
        matches: n.matches,
        match: l,
        params: l.params,
        loaderData: l.loaderData
    };
    return Promise.all([s.options.head?.(u), s.options.scripts?.(u), s.options.headers?.(u)]).then( ([f,d,h]) => ({
        meta: f?.meta,
        links: f?.links,
        headScripts: f?.scripts,
        headers: h,
        scripts: d,
        styles: f?.styles
    }))
}
  , Eg = (n, a, s, l, u) => {
    const f = a[l - 1]
      , {params: d, loaderDeps: h, abortController: y, cause: p} = n.router.getMatch(s)
      , v = ii(n, l)
      , g = bu(n, s);
    return {
        params: d,
        deps: h,
        preload: !!g,
        parentMatchPromise: f,
        abortController: y,
        context: v,
        location: n.location,
        navigate: _ => n.router.navigate({
            ..._,
            _fromLocation: n.location
        }),
        cause: g ? "preload" : p,
        route: u,
        ...n.router.options.additionalContext
    }
}
  , ly = async (n, a, s, l, u) => {
    try {
        const f = n.router.getMatch(s);
        try {
            (!(mg ?? n.router.isServer) || f.ssr === !0) && wr(u);
            const d = u.options.loader
              , h = typeof d == "function" ? d : d?.handler
              , y = h?.(Eg(n, a, s, l, u))
              , p = !!h && _r(y);
            if ((p || u._lazyPromise || u._componentsPromise || u.options.head || u.options.scripts || u.options.headers || f._nonReactive.minPendingPromise) && n.updateMatch(s, g => ({
                ...g,
                isFetching: "loader"
            })),
            h) {
                const g = p ? await y : y;
                wa(n, n.router.getMatch(s), g),
                g !== void 0 && n.updateMatch(s, _ => ({
                    ..._,
                    loaderData: g
                }))
            }
            u._lazyPromise && await u._lazyPromise;
            const v = f._nonReactive.minPendingPromise;
            v && await v,
            u._componentsPromise && await u._componentsPromise,
            n.updateMatch(s, g => ({
                ...g,
                error: void 0,
                context: ii(n, l),
                status: "success",
                isFetching: !1,
                updatedAt: Date.now()
            }))
        } catch (d) {
            let h = d;
            if (h?.name === "AbortError") {
                if (f.abortController.signal.aborted) {
                    f._nonReactive.loaderPromise?.resolve(),
                    f._nonReactive.loaderPromise = void 0;
                    return
                }
                n.updateMatch(s, p => ({
                    ...p,
                    status: p.status === "pending" ? "success" : p.status,
                    isFetching: !1,
                    context: ii(n, l)
                }));
                return
            }
            const y = f._nonReactive.minPendingPromise;
            y && await y,
            ht(d) && await u.options.notFoundComponent?.preload?.(),
            wa(n, n.router.getMatch(s), d);
            try {
                u.options.onError?.(d)
            } catch (p) {
                h = p,
                wa(n, n.router.getMatch(s), p)
            }
            !Dt(h) && !ht(h) && await wr(u, ["errorComponent"]),
            n.updateMatch(s, p => ({
                ...p,
                error: h,
                context: ii(n, l),
                status: "error",
                isFetching: !1
            }))
        }
    } catch (f) {
        const d = n.router.getMatch(s);
        d && (d._nonReactive.loaderPromise = void 0),
        wa(n, d, f)
    }
}
  , d_ = async (n, a, s) => {
    async function l(x, R, N, w, A) {
        const B = Date.now() - R.updatedAt
          , Z = x ? A.options.preloadStaleTime ?? n.router.options.defaultPreloadStaleTime ?? 3e4 : A.options.staleTime ?? n.router.options.defaultStaleTime ?? 0
          , H = A.options.shouldReload
          , $ = typeof H == "function" ? H(Eg(n, a, u, s, A)) : H
          , {status: I, invalid: Q} = w
          , X = B >= Z && (!!n.forceStaleReload || w.cause === "enter" || N !== void 0 && N !== w.id);
        d = I === "success" && (Q || ($ ?? X)),
        x && A.options.preload === !1 || (d && !n.sync && v ? (h = !0,
        (async () => {
            try {
                await ly(n, a, u, s, A);
                const W = n.router.getMatch(u);
                W._nonReactive.loaderPromise?.resolve(),
                W._nonReactive.loadPromise?.resolve(),
                W._nonReactive.loaderPromise = void 0,
                W._nonReactive.loadPromise = void 0
            } catch (W) {
                Dt(W) && await n.router.navigate(W.options)
            }
        }
        )()) : I !== "success" || d ? await ly(n, a, u, s, A) : ry(n, u, s))
    }
    const {id: u, routeId: f} = n.matches[s];
    let d = !1
      , h = !1;
    const y = n.router.looseRoutesById[f]
      , p = y.options.loader
      , v = ((typeof p == "function" ? void 0 : p?.staleReloadMode) ?? n.router.options.defaultStaleReloadMode) !== "blocking";
    if (xg(n, u)) {
        if (!n.router.getMatch(u))
            return n.matches[s];
        ry(n, u, s)
    } else {
        const x = n.router.getMatch(u)
          , R = n.router.stores.matchesId.get()[s]
          , N = (R && n.router.stores.matchStores.get(R) || null)?.routeId === f ? R : n.router.stores.matches.get().find(A => A.routeId === f)?.id
          , w = bu(n, u);
        if (x._nonReactive.loaderPromise) {
            if (x.status === "success" && !n.sync && !x.preload && v)
                return x;
            await x._nonReactive.loaderPromise;
            const A = n.router.getMatch(u)
              , B = A._nonReactive.error || A.error;
            B && wa(n, A, B),
            A.status === "pending" && await l(w, x, N, A, y)
        } else {
            const A = w && !n.router.stores.matchStores.has(u)
              , B = n.router.getMatch(u);
            B._nonReactive.loaderPromise = si(),
            A !== B.preload && n.updateMatch(u, Z => ({
                ...Z,
                preload: A
            })),
            await l(w, x, N, B, y)
        }
    }
    const g = n.router.getMatch(u);
    h || (g._nonReactive.loaderPromise?.resolve(),
    g._nonReactive.loadPromise?.resolve(),
    g._nonReactive.loadPromise = void 0),
    clearTimeout(g._nonReactive.pendingTimeout),
    g._nonReactive.pendingTimeout = void 0,
    h || (g._nonReactive.loaderPromise = void 0),
    g._nonReactive.dehydrated = void 0;
    const _ = h ? g.isFetching : !1;
    return _ !== g.isFetching || g.invalid !== !1 ? (n.updateMatch(u, x => ({
        ...x,
        isFetching: _,
        invalid: !1
    })),
    n.router.getMatch(u)) : g
}
;
async function uy(n) {
    const a = n
      , s = [];
    l_(a.router) && ff(a);
    let l;
    for (let _ = 0; _ < a.matches.length; _++) {
        try {
            const x = c_(a, _);
            _r(x) && await x
        } catch (x) {
            if (Dt(x))
                throw x;
            if (ht(x))
                l = x;
            else if (!a.preload)
                throw x;
            break
        }
        if (a.serialError || a.firstBadMatchIndex != null)
            break
    }
    const u = a.firstBadMatchIndex ?? a.matches.length
      , f = l && !a.preload ? sy(a, l) : void 0
      , d = l && a.preload ? 0 : f !== void 0 ? Math.min(f + 1, u) : u;
    let h, y;
    for (let _ = 0; _ < d; _++)
        s.push(d_(a, s, _));
    try {
        await Promise.all(s)
    } catch {
        const _ = await Promise.allSettled(s);
        for (const x of _) {
            if (x.status !== "rejected")
                continue;
            const R = x.reason;
            if (Dt(R))
                throw R;
            ht(R) ? h ??= R : y ??= R
        }
        if (y !== void 0)
            throw y
    }
    const p = h ?? (l && !a.preload ? l : void 0);
    let v = a.firstBadMatchIndex !== void 0 ? a.firstBadMatchIndex : a.matches.length - 1;
    if (!p && l && a.preload)
        return a.matches;
    if (p) {
        const _ = sy(a, p);
        _ === void 0 && Lt();
        const x = a.matches[_]
          , R = a.router.looseRoutesById[x.routeId]
          , N = a.router.options?.defaultNotFoundComponent;
        !R.options.notFoundComponent && N && (R.options.notFoundComponent = N),
        p.routeId = x.routeId;
        const w = x.routeId === a.router.routeTree.id;
        a.updateMatch(x.id, A => ({
            ...A,
            ...w ? {
                status: "success",
                globalNotFound: !0,
                error: void 0
            } : {
                status: "notFound",
                error: p
            },
            isFetching: !1
        })),
        v = _,
        await wr(R, ["notFoundComponent"])
    } else if (!a.preload) {
        const _ = a.matches[0];
        _.globalNotFound || a.router.getMatch(_.id)?.globalNotFound && a.updateMatch(_.id, x => ({
            ...x,
            globalNotFound: !1,
            error: void 0
        }))
    }
    if (a.serialError && a.firstBadMatchIndex !== void 0) {
        const _ = a.router.looseRoutesById[a.matches[a.firstBadMatchIndex].routeId];
        await wr(_, ["errorComponent"])
    }
    for (let _ = 0; _ <= v; _++) {
        const {id: x, routeId: R} = a.matches[_]
          , N = a.router.looseRoutesById[R];
        try {
            const w = f_(a, x, N);
            if (w) {
                const A = await w;
                a.updateMatch(x, B => ({
                    ...B,
                    ...A
                }))
            }
        } catch (w) {
            console.error(`Error executing head for route ${R}:`, w)
        }
    }
    const g = ff(a);
    if (_r(g) && await g,
    p)
        throw p;
    if (a.serialError && !a.preload && !a.onReady)
        throw a.serialError;
    return a.matches
}
function oy(n, a) {
    const s = a.map(l => n.options[l]?.preload?.()).filter(Boolean);
    if (s.length !== 0)
        return Promise.all(s)
}
function wr(n, a=tu) {
    !n._lazyLoaded && n._lazyPromise === void 0 && (n.lazyFn ? n._lazyPromise = n.lazyFn().then(l => {
        const {id: u, ...f} = l.options;
        Object.assign(n.options, f),
        n._lazyLoaded = !0,
        n._lazyPromise = void 0
    }
    ) : n._lazyLoaded = !0);
    const s = () => n._componentsLoaded ? void 0 : a === tu ? ( () => {
        if (n._componentsPromise === void 0) {
            const l = oy(n, tu);
            l ? n._componentsPromise = l.then( () => {
                n._componentsLoaded = !0,
                n._componentsPromise = void 0
            }
            ) : n._componentsLoaded = !0
        }
        return n._componentsPromise
    }
    )() : oy(n, a);
    return n._lazyPromise ? n._lazyPromise.then(s) : s()
}
function Rg(n) {
    for (const a of tu)
        if (n.options[a]?.preload)
            return !0;
    return !1
}
var tu = ["component", "errorComponent", "pendingComponent", "notFoundComponent"]
  , Ra = "__TSR_index"
  , cy = "popstate"
  , fy = "beforeunload";
function h_(n) {
    let a = n.getLocation();
    const s = new Set
      , l = d => {
        a = n.getLocation(),
        s.forEach(h => h({
            location: a,
            action: d
        }))
    }
      , u = d => {
        n.notifyOnIndexChange ?? !0 ? l(d) : a = n.getLocation()
    }
      , f = async ({task: d, navigateOpts: h, ...y}) => {
        if (h?.ignoreBlocker ?? !1) {
            d();
            return
        }
        const p = n.getBlockers?.() ?? []
          , v = y.type === "PUSH" || y.type === "REPLACE";
        if (typeof document < "u" && p.length && v)
            for (const g of p) {
                const _ = lu(y.path, y.state);
                if (await g.blockerFn({
                    currentLocation: a,
                    nextLocation: _,
                    action: y.type
                })) {
                    n.onBlocked?.();
                    return
                }
            }
        d()
    }
    ;
    return {
        get location() {
            return a
        },
        get length() {
            return n.getLength()
        },
        subscribers: s,
        subscribe: d => (s.add(d),
        () => {
            s.delete(d)
        }
        ),
        push: (d, h, y) => {
            const p = a.state[Ra];
            h = dy(p + 1, h),
            f({
                task: () => {
                    n.pushState(d, h),
                    l({
                        type: "PUSH"
                    })
                }
                ,
                navigateOpts: y,
                type: "PUSH",
                path: d,
                state: h
            })
        }
        ,
        replace: (d, h, y) => {
            const p = a.state[Ra];
            h = dy(p, h),
            f({
                task: () => {
                    n.replaceState(d, h),
                    l({
                        type: "REPLACE"
                    })
                }
                ,
                navigateOpts: y,
                type: "REPLACE",
                path: d,
                state: h
            })
        }
        ,
        go: (d, h) => {
            f({
                task: () => {
                    n.go(d),
                    u({
                        type: "GO",
                        index: d
                    })
                }
                ,
                navigateOpts: h,
                type: "GO"
            })
        }
        ,
        back: d => {
            f({
                task: () => {
                    n.back(d?.ignoreBlocker ?? !1),
                    u({
                        type: "BACK"
                    })
                }
                ,
                navigateOpts: d,
                type: "BACK"
            })
        }
        ,
        forward: d => {
            f({
                task: () => {
                    n.forward(d?.ignoreBlocker ?? !1),
                    u({
                        type: "FORWARD"
                    })
                }
                ,
                navigateOpts: d,
                type: "FORWARD"
            })
        }
        ,
        canGoBack: () => a.state[Ra] !== 0,
        createHref: d => n.createHref(d),
        block: d => {
            if (!n.setBlockers)
                return () => {}
                ;
            const h = n.getBlockers?.() ?? [];
            return n.setBlockers([...h, d]),
            () => {
                const y = n.getBlockers?.() ?? [];
                n.setBlockers?.(y.filter(p => p !== d))
            }
        }
        ,
        flush: () => n.flush?.(),
        destroy: () => n.destroy?.(),
        notify: l
    }
}
function dy(n, a) {
    a || (a = {});
    const s = Mf();
    return {
        ...a,
        key: s,
        __TSR_key: s,
        [Ra]: n
    }
}
function m_(n) {
    const a = typeof document < "u" ? window : void 0
      , s = a.history.pushState
      , l = a.history.replaceState;
    let u = [];
    const f = () => u
      , d = X => u = X
      , h = (X => X)
      , y = ( () => lu(`${a.location.pathname}${a.location.search}${a.location.hash}`, a.history.state));
    if (!a.history.state?.__TSR_key && !a.history.state?.key) {
        const X = Mf();
        a.history.replaceState({
            [Ra]: 0,
            key: X,
            __TSR_key: X
        }, "")
    }
    let p = y(), v, g = !1, _ = !1, x = !1, R = !1;
    const N = () => p;
    let w, A;
    const B = () => {
        w && (Q._ignoreSubscribers = !0,
        (w.isPush ? a.history.pushState : a.history.replaceState)(w.state, "", w.href),
        Q._ignoreSubscribers = !1,
        w = void 0,
        A = void 0,
        v = void 0)
    }
      , Z = (X, W, ce) => {
        const re = h(W);
        A || (v = p),
        p = lu(W, ce),
        w = {
            href: re,
            state: ce,
            isPush: w?.isPush || X === "push"
        },
        A || (A = Promise.resolve().then( () => B()))
    }
      , H = X => {
        p = y(),
        Q.notify({
            type: X
        })
    }
      , $ = async () => {
        if (_) {
            _ = !1;
            return
        }
        const X = y()
          , W = X.state[Ra] - p.state[Ra]
          , ce = W === 1
          , re = W === -1
          , _e = !ce && !re || g;
        g = !1;
        const Le = _e ? "GO" : re ? "BACK" : "FORWARD"
          , $e = _e ? {
            type: "GO",
            index: W
        } : {
            type: re ? "BACK" : "FORWARD"
        };
        if (x)
            x = !1;
        else {
            const Qe = f();
            if (typeof document < "u" && Qe.length) {
                for (const k of Qe)
                    if (await k.blockerFn({
                        currentLocation: p,
                        nextLocation: X,
                        action: Le
                    })) {
                        _ = !0,
                        a.history.go(1),
                        Q.notify($e);
                        return
                    }
            }
        }
        p = y(),
        Q.notify($e)
    }
      , I = X => {
        if (R) {
            R = !1;
            return
        }
        let W = !1;
        const ce = f();
        if (typeof document < "u" && ce.length)
            for (const re of ce) {
                const _e = re.enableBeforeUnload ?? !0;
                if (_e === !0) {
                    W = !0;
                    break
                }
                if (typeof _e == "function" && _e() === !0) {
                    W = !0;
                    break
                }
            }
        if (W)
            return X.preventDefault(),
            X.returnValue = ""
    }
      , Q = h_({
        getLocation: N,
        getLength: () => a.history.length,
        pushState: (X, W) => Z("push", X, W),
        replaceState: (X, W) => Z("replace", X, W),
        back: X => (X && (x = !0),
        R = !0,
        a.history.back()),
        forward: X => {
            X && (x = !0),
            R = !0,
            a.history.forward()
        }
        ,
        go: X => {
            g = !0,
            a.history.go(X)
        }
        ,
        createHref: X => h(X),
        flush: B,
        destroy: () => {
            a.history.pushState = s,
            a.history.replaceState = l,
            a.removeEventListener(fy, I, {
                capture: !0
            }),
            a.removeEventListener(cy, $)
        }
        ,
        onBlocked: () => {
            v && p !== v && (p = v)
        }
        ,
        getBlockers: f,
        setBlockers: d,
        notifyOnIndexChange: !1
    });
    return a.addEventListener(fy, I, {
        capture: !0
    }),
    a.addEventListener(cy, $),
    a.history.pushState = function(...X) {
        const W = s.apply(a.history, X);
        return Q._ignoreSubscribers || H("PUSH"),
        W
    }
    ,
    a.history.replaceState = function(...X) {
        const W = l.apply(a.history, X);
        return Q._ignoreSubscribers || H("REPLACE"),
        W
    }
    ,
    Q
}
function p_(n) {
    let a = n.replace(/[\x00-\x1f\x7f]/g, "");
    return a.startsWith("//") && (a = "/" + a.replace(/^\/+/, "")),
    a
}
function lu(n, a) {
    const s = p_(n)
      , l = s.indexOf("#")
      , u = s.indexOf("?")
      , f = Mf();
    return {
        href: s,
        pathname: s.substring(0, l > 0 ? u > 0 ? Math.min(l, u) : l : u > 0 ? u : s.length),
        hash: l > -1 ? s.substring(l) : "",
        search: u > -1 ? s.slice(u, l === -1 ? void 0 : l) : "",
        state: a || {
            [Ra]: 0,
            key: f,
            __TSR_key: f
        }
    }
}
function Mf() {
    return (Math.random() + 1).toString(36).substring(7)
}
function y_(n) {
    return n instanceof Error ? {
        name: n.name,
        message: n.message
    } : {
        data: n
    }
}
function is(n, a) {
    const s = a
      , l = n;
    return {
        fromLocation: s,
        toLocation: l,
        pathChanged: s?.pathname !== l.pathname,
        hrefChanged: s?.href !== l.href,
        hashChanged: s?.hash !== l.hash
    }
}
var g_ = class {
    constructor(n, a) {
        this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`,
        this.resetNextScroll = !0,
        this.shouldViewTransition = void 0,
        this.isViewTransitionTypesSupported = void 0,
        this.subscribers = new Set,
        this.isScrollRestoring = !1,
        this.isScrollRestorationSetup = !1,
        this.startTransition = s => s(),
        this.update = s => {
            const l = this.options
              , u = this.basepath ?? l?.basepath ?? "/"
              , f = this.basepath === void 0
              , d = l?.rewrite;
            if (this.options = {
                ...l,
                ...s
            },
            this.isServer = this.options.isServer ?? typeof document > "u",
            this.protocolAllowlist = new Set(this.options.protocolAllowlist),
            this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = GS(this.options.pathParamsAllowedCharacters)),
            (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = m_()),
            this.origin = this.options.origin,
            this.origin || (window?.origin && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree) {
                this.routeTree = this.options.routeTree;
                let v;
                this.resolvePathCache = xr(1e3),
                v = this.buildRouteTree(),
                this.setRoutes(v)
            }
            if (!this.stores && this.latestLocation) {
                const v = this.getStoreConfig(this);
                this.batch = v.batch,
                this.stores = r_(b_(this.latestLocation), v),
                JS(this)
            }
            let h = !1;
            const y = this.options.basepath ?? "/"
              , p = this.options.rewrite;
            if (f || u !== y || d !== p) {
                this.basepath = y;
                const v = []
                  , g = vg(y);
                g && g !== "/" && v.push(s_({
                    basepath: y
                })),
                p && v.push(p),
                this.rewrite = v.length === 0 ? void 0 : v.length === 1 ? v[0] : i_(v),
                this.history && this.updateLatestLocation(),
                h = !0
            }
            h && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" && "CSS"in window && typeof window.CSS?.supports == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"))
        }
        ,
        this.updateLatestLocation = () => {
            this.latestLocation = this.parseLocation(this.history.location, this.latestLocation)
        }
        ,
        this.buildRouteTree = () => {
            const s = kS(this.routeTree, this.options.caseSensitive, (l, u) => {
                l.init({
                    originalIndex: u
                })
            }
            );
            return this.options.routeMasks && zS(this.options.routeMasks, s.processedTree),
            s
        }
        ,
        this.subscribe = (s, l) => {
            const u = {
                eventType: s,
                fn: l
            };
            return this.subscribers.add(u),
            () => {
                this.subscribers.delete(u)
            }
        }
        ,
        this.emit = s => {
            this.subscribers.forEach(l => {
                l.eventType === s.type && l.fn(s)
            }
            )
        }
        ,
        this.parseLocation = (s, l) => {
            const u = ({pathname: y, search: p, hash: v, href: g, state: _}) => {
                if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(y)) {
                    const A = this.options.parseSearch(p)
                      , B = this.options.stringifySearch(A);
                    return {
                        href: y + B + v,
                        publicHref: y + B + v,
                        pathname: fr(y).path,
                        external: !1,
                        searchStr: B,
                        search: Wa(l?.search, A),
                        hash: fr(v.slice(1)).path,
                        state: ei(l?.state, _)
                    }
                }
                const x = new URL(g,this.origin)
                  , R = cf(this.rewrite, x)
                  , N = this.options.parseSearch(R.search)
                  , w = this.options.stringifySearch(N);
                return R.search = w,
                {
                    href: R.href.replace(R.origin, ""),
                    publicHref: g,
                    pathname: fr(R.pathname).path,
                    external: !!this.rewrite && R.origin !== this.origin,
                    searchStr: w,
                    search: Wa(l?.search, N),
                    hash: fr(R.hash.slice(1)).path,
                    state: ei(l?.state, _)
                }
            }
              , f = u(s)
              , {__tempLocation: d, __tempKey: h} = f.state;
            if (d && (!h || h === this.tempLocationKey)) {
                const y = u(d);
                return y.state.key = f.state.key,
                y.state.__TSR_key = f.state.__TSR_key,
                delete y.state.__tempLocation,
                {
                    ...y,
                    maskedLocation: f
                }
            }
            return f
        }
        ,
        this.resolvePathWithBase = (s, l) => YS({
            base: s,
            to: Of(l),
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache
        }),
        this.matchRoutes = (s, l, u) => typeof s == "string" ? this.matchRoutesInternal({
            pathname: s,
            search: l
        }, u) : this.matchRoutesInternal(s, l),
        this.getMatchedRoutes = s => S_({
            pathname: s,
            routesById: this.routesById,
            processedTree: this.processedTree
        }),
        this.cancelMatch = s => {
            const l = this.getMatch(s);
            l && (l.abortController.abort(),
            clearTimeout(l._nonReactive.pendingTimeout),
            l._nonReactive.pendingTimeout = void 0)
        }
        ,
        this.cancelMatches = () => {
            this.stores.pendingIds.get().forEach(s => {
                this.cancelMatch(s)
            }
            ),
            this.stores.matchesId.get().forEach(s => {
                if (this.stores.pendingMatchStores.has(s))
                    return;
                const l = this.stores.matchStores.get(s)?.get();
                l && (l.status === "pending" || l.isFetching === "loader") && this.cancelMatch(s)
            }
            )
        }
        ,
        this.buildLocation = s => {
            const l = (f={}) => {
                const d = f._fromLocation || this.pendingBuiltLocation || this.latestLocation
                  , h = this.matchRoutesLightweight(d);
                f.from;
                const y = f.unsafeRelative === "path" ? d.pathname : f.from ?? h.fullPath
                  , p = this.resolvePathWithBase(y, ".")
                  , v = h.search
                  , g = Object.assign(Object.create(null), h.params)
                  , _ = f.to ? this.resolvePathWithBase(p, `${f.to}`) : this.resolvePathWithBase(p, ".")
                  , x = f.params === !1 || f.params === null ? Object.create(null) : (f.params ?? !0) === !0 ? g : Object.assign(g, _a(f.params, g))
                  , R = this.getMatchedRoutes(_);
                let N = R.matchedRoutes;
                if ((!R.foundRoute || R.foundRoute.path !== "/" && R.routeParams["**"]) && this.options.notFoundRoute && (N = [...N, this.options.notFoundRoute]),
                Object.keys(x).length > 0)
                    for (const ce of N) {
                        const re = ce.options.params?.stringify ?? ce.options.stringifyParams;
                        if (re)
                            try {
                                Object.assign(x, re(x))
                            } catch {}
                    }
                const w = s.leaveParams ? _ : fr(ty({
                    path: _,
                    params: x,
                    decoder: this.pathParamsDecoder,
                    server: this.isServer
                }).interpolatedPath).path;
                let A = v;
                if (s._includeValidateSearch && this.options.search?.strict) {
                    const ce = {};
                    N.forEach(re => {
                        if (re.options.validateSearch)
                            try {
                                Object.assign(ce, nu(re.options.validateSearch, {
                                    ...ce,
                                    ...A
                                }))
                            } catch {}
                    }
                    ),
                    A = ce
                }
                A = __({
                    search: A,
                    dest: f,
                    destRoutes: N,
                    _includeValidateSearch: s._includeValidateSearch
                }),
                A = Wa(v, A);
                const B = this.options.stringifySearch(A)
                  , Z = f.hash === !0 ? d.hash : f.hash ? _a(f.hash, d.hash) : void 0
                  , H = Z ? `#${Z}` : "";
                let $ = f.state === !0 ? d.state : f.state ? _a(f.state, d.state) : {};
                $ = ei(d.state, $);
                const I = `${w}${B}${H}`;
                let Q, X, W = !1;
                if (this.rewrite) {
                    const ce = new URL(I,this.origin)
                      , re = _g(this.rewrite, ce);
                    Q = ce.href.replace(ce.origin, ""),
                    re.origin !== this.origin ? (X = re.href,
                    W = !0) : X = re.pathname + re.search + re.hash
                } else
                    Q = OS(I),
                    X = Q;
                return {
                    publicHref: X,
                    href: Q,
                    pathname: w,
                    search: A,
                    searchStr: B,
                    state: $,
                    hash: Z ?? "",
                    external: W,
                    unmaskOnReload: f.unmaskOnReload
                }
            }
              , u = (f={}, d) => {
                const h = l(f);
                let y = d ? l(d) : void 0;
                if (!y) {
                    const p = Object.create(null);
                    if (this.options.routeMasks) {
                        const v = jS(h.pathname, this.processedTree);
                        if (v) {
                            Object.assign(p, v.rawParams);
                            const {from: g, params: _, ...x} = v.route
                              , R = _ === !1 || _ === null ? Object.create(null) : (_ ?? !0) === !0 ? p : Object.assign(p, _a(_, p));
                            d = {
                                from: s.from,
                                ...x,
                                params: R
                            },
                            y = l(d)
                        }
                    }
                }
                return y && (h.maskedLocation = y),
                h
            }
            ;
            return s.mask ? u(s, {
                from: s.from,
                ...s.mask
            }) : u(s)
        }
        ,
        this.commitLocation = async ({viewTransition: s, ignoreBlocker: l, ...u}) => {
            const f = () => {
                const y = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
                y.forEach(v => {
                    u.state[v] = this.latestLocation.state[v]
                }
                );
                const p = jt(u.state, this.latestLocation.state);
                return y.forEach(v => {
                    delete u.state[v]
                }
                ),
                p
            }
              , d = Ea(this.latestLocation.href) === Ea(u.href);
            let h = this.commitLocationPromise;
            if (this.commitLocationPromise = si( () => {
                h?.resolve(),
                h = void 0
            }
            ),
            d && f())
                this.load();
            else {
                let {maskedLocation: y, hashScrollIntoView: p, ...v} = u;
                y && (v = {
                    ...y,
                    state: {
                        ...y.state,
                        __tempKey: void 0,
                        __tempLocation: {
                            ...v,
                            search: v.searchStr,
                            state: {
                                ...v.state,
                                __tempKey: void 0,
                                __tempLocation: void 0,
                                __TSR_key: void 0,
                                key: void 0
                            }
                        }
                    }
                },
                (v.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (v.state.__tempKey = this.tempLocationKey)),
                v.state.__hashScrollIntoViewOptions = p ?? this.options.defaultHashScrollIntoView ?? !0,
                this.shouldViewTransition = s,
                this.history[u.replace ? "replace" : "push"](v.publicHref, v.state, {
                    ignoreBlocker: l
                })
            }
            return this.resetNextScroll = u.resetScroll ?? !0,
            this.history.subscribers.size || this.load(),
            this.commitLocationPromise
        }
        ,
        this.buildAndCommitLocation = ({replace: s, resetScroll: l, hashScrollIntoView: u, viewTransition: f, ignoreBlocker: d, href: h, ...y}={}) => {
            if (h) {
                const g = this.history.location.state.__TSR_index
                  , _ = lu(h, {
                    __TSR_index: s ? g : g + 1
                })
                  , x = new URL(_.pathname,this.origin);
                y.to = cf(this.rewrite, x).pathname,
                y.search = this.options.parseSearch(_.search),
                y.hash = _.hash.slice(1)
            }
            const p = this.buildLocation({
                ...y,
                _includeValidateSearch: !0
            });
            this.pendingBuiltLocation = p;
            const v = this.commitLocation({
                ...p,
                viewTransition: f,
                replace: s,
                resetScroll: l,
                hashScrollIntoView: u,
                ignoreBlocker: d
            });
            return Promise.resolve().then( () => {
                this.pendingBuiltLocation === p && (this.pendingBuiltLocation = void 0)
            }
            ),
            v
        }
        ,
        this.navigate = async ({to: s, reloadDocument: l, href: u, publicHref: f, ...d}) => {
            let h = !1;
            if (u)
                try {
                    new URL(`${u}`),
                    h = !0
                } catch {}
            if (h && !l && (l = !0),
            l) {
                if (s !== void 0 || !u) {
                    const p = this.buildLocation({
                        to: s,
                        ...d
                    });
                    u = u ?? p.publicHref,
                    f = f ?? p.publicHref
                }
                const y = !h && f ? f : u;
                if (su(y, this.protocolAllowlist))
                    return Promise.resolve();
                if (!d.ignoreBlocker) {
                    const p = this.history.getBlockers?.() ?? [];
                    for (const v of p)
                        if (v?.blockerFn && await v.blockerFn({
                            currentLocation: this.latestLocation,
                            nextLocation: this.latestLocation,
                            action: "PUSH"
                        }))
                            return Promise.resolve()
                }
                return d.replace ? window.location.replace(y) : window.location.href = y,
                Promise.resolve()
            }
            return this.buildAndCommitLocation({
                ...d,
                href: u,
                to: s,
                _isNavigate: !0
            })
        }
        ,
        this.beforeLoad = () => {
            this.cancelMatches(),
            this.updateLatestLocation();
            const s = this.matchRoutes(this.latestLocation)
              , l = this.stores.cachedMatches.get().filter(u => !s.some(f => f.id === u.id));
            this.batch( () => {
                this.stores.status.set("pending"),
                this.stores.statusCode.set(200),
                this.stores.isLoading.set(!0),
                this.stores.location.set(this.latestLocation),
                this.stores.setPending(s),
                this.stores.setCached(l)
            }
            )
        }
        ,
        this.load = async s => {
            let l, u, f;
            const d = this.stores.resolvedLocation.get() ?? this.stores.location.get();
            for (f = new Promise(y => {
                this.startTransition(async () => {
                    try {
                        this.beforeLoad();
                        const p = this.latestLocation
                          , v = is(p, this.stores.resolvedLocation.get());
                        this.stores.redirect.get() || this.emit({
                            type: "onBeforeNavigate",
                            ...v
                        }),
                        this.emit({
                            type: "onBeforeLoad",
                            ...v
                        }),
                        await uy({
                            router: this,
                            sync: s?.sync,
                            forceStaleReload: d.href === p.href,
                            matches: this.stores.pendingMatches.get(),
                            location: p,
                            updateMatch: this.updateMatch,
                            onReady: async () => {
                                this.startTransition( () => {
                                    this.startViewTransition(async () => {
                                        let g = null
                                          , _ = null
                                          , x = null
                                          , R = null;
                                        this.batch( () => {
                                            const N = this.stores.pendingMatches.get()
                                              , w = N.length
                                              , A = this.stores.matches.get();
                                            g = w ? A.filter(H => !this.stores.pendingMatchStores.has(H.id)) : null;
                                            const B = new Set;
                                            for (const H of this.stores.pendingMatchStores.values())
                                                H.routeId && B.add(H.routeId);
                                            const Z = new Set;
                                            for (const H of this.stores.matchStores.values())
                                                H.routeId && Z.add(H.routeId);
                                            _ = w ? A.filter(H => !B.has(H.routeId)) : null,
                                            x = w ? N.filter(H => !Z.has(H.routeId)) : null,
                                            R = w ? N.filter(H => Z.has(H.routeId)) : A,
                                            this.stores.isLoading.set(!1),
                                            this.stores.loadedAt.set(Date.now()),
                                            w && (this.stores.setMatches(N),
                                            this.stores.setPending([]),
                                            this.stores.setCached([...this.stores.cachedMatches.get(), ...g.filter(H => H.status !== "error" && H.status !== "notFound" && H.status !== "redirected")]),
                                            this.clearExpiredCache())
                                        }
                                        );
                                        for (const [N,w] of [[_, "onLeave"], [x, "onEnter"], [R, "onStay"]])
                                            if (N)
                                                for (const A of N)
                                                    this.looseRoutesById[A.routeId].options[w]?.(A)
                                    }
                                    )
                                }
                                )
                            }
                        })
                    } catch (p) {
                        Dt(p) ? (l = p,
                        this.navigate({
                            ...l.options,
                            replace: !0,
                            ignoreBlocker: !0
                        })) : ht(p) && (u = p);
                        const v = l ? l.status : u ? 404 : this.stores.matches.get().some(g => g.status === "error") ? 500 : 200;
                        this.batch( () => {
                            this.stores.statusCode.set(v),
                            this.stores.redirect.set(l)
                        }
                        )
                    }
                    this.latestLoadPromise === f && (this.commitLocationPromise?.resolve(),
                    this.latestLoadPromise = void 0,
                    this.commitLocationPromise = void 0),
                    y()
                }
                )
            }
            ),
            this.latestLoadPromise = f,
            await f; this.latestLoadPromise && f !== this.latestLoadPromise; )
                await this.latestLoadPromise;
            let h;
            this.hasNotFoundMatch() ? h = 404 : this.stores.matches.get().some(y => y.status === "error") && (h = 500),
            h !== void 0 && this.stores.statusCode.set(h)
        }
        ,
        this.startViewTransition = s => {
            const l = this.shouldViewTransition ?? this.options.defaultViewTransition;
            if (this.shouldViewTransition = void 0,
            l && typeof document < "u" && "startViewTransition"in document && typeof document.startViewTransition == "function") {
                let u;
                if (typeof l == "object" && this.isViewTransitionTypesSupported) {
                    const f = this.latestLocation
                      , d = this.stores.resolvedLocation.get()
                      , h = typeof l.types == "function" ? l.types(is(f, d)) : l.types;
                    if (h === !1) {
                        s();
                        return
                    }
                    u = {
                        update: s,
                        types: h
                    }
                } else
                    u = s;
                document.startViewTransition(u)
            } else
                s()
        }
        ,
        this.updateMatch = (s, l) => {
            this.startTransition( () => {
                const u = this.stores.pendingMatchStores.get(s);
                if (u) {
                    u.set(l);
                    return
                }
                const f = this.stores.matchStores.get(s);
                if (f) {
                    f.set(l);
                    return
                }
                const d = this.stores.cachedMatchStores.get(s);
                if (d) {
                    const h = l(d.get());
                    h.status === "redirected" ? this.stores.cachedMatchStores.delete(s) && this.stores.cachedIds.set(y => y.filter(p => p !== s)) : d.set(h)
                }
            }
            )
        }
        ,
        this.getMatch = s => this.stores.cachedMatchStores.get(s)?.get() ?? this.stores.pendingMatchStores.get(s)?.get() ?? this.stores.matchStores.get(s)?.get(),
        this.invalidate = s => {
            const l = u => s?.filter?.(u) ?? !0 ? {
                ...u,
                invalid: !0,
                ...s?.forcePending || u.status === "error" || u.status === "notFound" ? {
                    status: "pending",
                    error: void 0
                } : void 0
            } : u;
            return this.batch( () => {
                this.stores.setMatches(this.stores.matches.get().map(l)),
                this.stores.setCached(this.stores.cachedMatches.get().map(l)),
                this.stores.setPending(this.stores.pendingMatches.get().map(l))
            }
            ),
            this.shouldViewTransition = !1,
            this.load({
                sync: s?.sync
            })
        }
        ,
        this.getParsedLocationHref = s => s.publicHref || "/",
        this.resolveRedirect = s => {
            const l = s.headers.get("Location");
            if (!s.options.href || s.options._builtLocation) {
                const u = s.options._builtLocation ?? this.buildLocation(s.options)
                  , f = this.getParsedLocationHref(u);
                s.options.href = f,
                s.headers.set("Location", f)
            } else if (l)
                try {
                    const u = new URL(l);
                    if (this.origin && u.origin === this.origin) {
                        const f = u.pathname + u.search + u.hash;
                        s.options.href = f,
                        s.headers.set("Location", f)
                    }
                } catch {}
            if (s.options.href && !s.options._builtLocation && su(s.options.href, this.protocolAllowlist))
                throw new Error("Redirect blocked: unsafe protocol");
            return s.headers.get("Location") || s.headers.set("Location", s.options.href),
            s
        }
        ,
        this.clearCache = s => {
            const l = s?.filter;
            l !== void 0 ? this.stores.setCached(this.stores.cachedMatches.get().filter(u => !l(u))) : this.stores.setCached([])
        }
        ,
        this.clearExpiredCache = () => {
            const s = Date.now()
              , l = u => {
                const f = this.looseRoutesById[u.routeId];
                if (!f.options.loader)
                    return !0;
                const d = (u.preload ? f.options.preloadGcTime ?? this.options.defaultPreloadGcTime : f.options.gcTime ?? this.options.defaultGcTime) ?? 300 * 1e3;
                return u.status === "error" ? !0 : s - u.updatedAt >= d
            }
            ;
            this.clearCache({
                filter: l
            })
        }
        ,
        this.loadRouteChunk = wr,
        this.preloadRoute = async s => {
            const l = s._builtLocation ?? this.buildLocation(s);
            let u = this.matchRoutes(l, {
                throwOnError: !0,
                preload: !0,
                dest: s
            });
            const f = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()])
              , d = new Set([...f, ...this.stores.cachedIds.get()])
              , h = u.filter(y => !d.has(y.id));
            if (h.length) {
                const y = this.stores.cachedMatches.get();
                this.stores.setCached([...y, ...h])
            }
            try {
                return u = await uy({
                    router: this,
                    matches: u,
                    location: l,
                    preload: !0,
                    updateMatch: (y, p) => {
                        f.has(y) ? u = u.map(v => v.id === y ? p(v) : v) : this.updateMatch(y, p)
                    }
                }),
                u
            } catch (y) {
                if (Dt(y))
                    return y.options.reloadDocument ? void 0 : await this.preloadRoute({
                        ...y.options,
                        _fromLocation: l
                    });
                ht(y) || console.error(y);
                return
            }
        }
        ,
        this.matchRoute = (s, l) => {
            const u = {
                ...s,
                to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0,
                params: s.params || {},
                leaveParams: !0
            }
              , f = this.buildLocation(u);
            if (l?.pending && this.stores.status.get() !== "pending")
                return !1;
            const d = (l?.pending === void 0 ? !this.stores.isLoading.get() : l.pending) ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get()
              , h = DS(f.pathname, l?.caseSensitive ?? !1, l?.fuzzy ?? !1, d.pathname, this.processedTree);
            return !h || s.params && !jt(h.rawParams, s.params, {
                partial: !0
            }) ? !1 : l?.includeSearch ?? !0 ? jt(d.search, f.search, {
                partial: !0
            }) ? h.rawParams : !1 : h.rawParams
        }
        ,
        this.hasNotFoundMatch = () => this.stores.matches.get().some(s => s.status === "notFound" || s.globalNotFound),
        this.getStoreConfig = a,
        this.update({
            defaultPreloadDelay: 50,
            defaultPendingMs: 1e3,
            defaultPendingMinMs: 500,
            context: void 0,
            ...n,
            caseSensitive: n.caseSensitive ?? !1,
            notFoundMode: n.notFoundMode ?? "fuzzy",
            stringifySearch: n.stringifySearch ?? e_,
            parseSearch: n.parseSearch ?? WS,
            protocolAllowlist: n.protocolAllowlist ?? RS
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this)
    }
    isShell() {
        return !!this.options.isShell
    }
    isPrerendering() {
        return !!this.options.isPrerendering
    }
    get state() {
        return this.stores.__store.get()
    }
    setRoutes({routesById: n, routesByPath: a, processedTree: s}) {
        this.routesById = n,
        this.routesByPath = a,
        this.processedTree = s;
        const l = this.options.notFoundRoute;
        l && (l.init({
            originalIndex: 99999999999
        }),
        this.routesById[l.id] = l)
    }
    get looseRoutesById() {
        return this.routesById
    }
    getParentContext(n) {
        return n?.id ? n.context ?? this.options.context ?? void 0 : this.options.context ?? void 0
    }
    matchRoutesInternal(n, a) {
        const s = this.getMatchedRoutes(n.pathname)
          , {foundRoute: l, routeParams: u, parsedParams: f} = s;
        let {matchedRoutes: d} = s
          , h = !1;
        (l ? l.path !== "/" && u["**"] : Ea(n.pathname)) && (this.options.notFoundRoute ? d = [...d, this.options.notFoundRoute] : h = !0);
        const y = h ? w_(this.options.notFoundMode, d) : void 0
          , p = new Array(d.length)
          , v = new Map;
        for (const g of this.stores.matchStores.values())
            g.routeId && v.set(g.routeId, g.get());
        for (let g = 0; g < d.length; g++) {
            const _ = d[g]
              , x = p[g - 1];
            let R, N, w;
            {
                const Le = x?.search ?? n.search
                  , $e = x?._strictSearch ?? void 0;
                try {
                    const Qe = nu(_.options.validateSearch, {
                        ...Le
                    }) ?? void 0;
                    R = {
                        ...Le,
                        ...Qe
                    },
                    N = {
                        ...$e,
                        ...Qe
                    },
                    w = void 0
                } catch (Qe) {
                    let k = Qe;
                    if (Qe instanceof uu || (k = new uu(Qe.message,{
                        cause: Qe
                    })),
                    a?.throwOnError)
                        throw k;
                    R = Le,
                    N = {},
                    w = k
                }
            }
            const A = _.options.loaderDeps?.({
                search: R
            }) ?? ""
              , B = A ? JSON.stringify(A) : ""
              , {interpolatedPath: Z, usedParams: H} = ty({
                path: _.fullPath,
                params: u,
                decoder: this.pathParamsDecoder,
                server: this.isServer
            })
              , $ = _.id + Z + B
              , I = this.getMatch($)
              , Q = v.get(_.id)
              , X = I?._strictParams ?? H;
            let W;
            if (!I)
                try {
                    hy(_, H, f, X)
                } catch (Le) {
                    if (ht(Le) || Dt(Le) ? W = Le : W = new v_(Le.message,{
                        cause: Le
                    }),
                    a?.throwOnError)
                        throw W
                }
            Object.assign(u, X);
            const ce = Q ? "stay" : "enter";
            let re;
            if (I)
                re = {
                    ...I,
                    cause: ce,
                    params: Q?.params ?? u,
                    _strictParams: X,
                    search: Wa(Q ? Q.search : I.search, R),
                    _strictSearch: N
                };
            else {
                const Le = _.options.loader || _.options.beforeLoad || _.lazyFn || Rg(_) ? "pending" : "success";
                re = {
                    id: $,
                    ssr: _.options.ssr,
                    index: g,
                    routeId: _.id,
                    params: Q?.params ?? u,
                    _strictParams: X,
                    pathname: Z,
                    updatedAt: Date.now(),
                    search: Q ? Wa(Q.search, R) : R,
                    _strictSearch: N,
                    searchError: void 0,
                    status: Le,
                    isFetching: !1,
                    error: void 0,
                    paramsError: W,
                    __routeContext: void 0,
                    _nonReactive: {
                        loadPromise: si()
                    },
                    __beforeLoadContext: void 0,
                    context: {},
                    abortController: new AbortController,
                    fetchCount: 0,
                    cause: ce,
                    loaderDeps: Q ? ei(Q.loaderDeps, A) : A,
                    invalid: !1,
                    preload: !1,
                    links: void 0,
                    scripts: void 0,
                    headScripts: void 0,
                    meta: void 0,
                    staticData: _.options.staticData || {},
                    fullPath: _.fullPath
                }
            }
            a?.preload || (re.globalNotFound = y === _.id),
            re.searchError = w;
            const _e = this.getParentContext(x);
            re.context = {
                ..._e,
                ...re.__routeContext,
                ...re.__beforeLoadContext
            },
            p[g] = re
        }
        for (let g = 0; g < p.length; g++) {
            const _ = p[g]
              , x = this.looseRoutesById[_.routeId]
              , R = this.getMatch(_.id)
              , N = v.get(_.routeId);
            if (_.params = N ? Wa(N.params, u) : u,
            !R) {
                const w = p[g - 1]
                  , A = this.getParentContext(w);
                if (x.options.context) {
                    const B = {
                        deps: _.loaderDeps,
                        params: _.params,
                        context: A ?? {},
                        location: n,
                        navigate: Z => this.navigate({
                            ...Z,
                            _fromLocation: n
                        }),
                        buildLocation: this.buildLocation,
                        cause: _.cause,
                        abortController: _.abortController,
                        preload: !!_.preload,
                        matches: p,
                        routeId: x.id
                    };
                    _.__routeContext = x.options.context(B) ?? void 0
                }
                _.context = {
                    ...A,
                    ..._.__routeContext,
                    ..._.__beforeLoadContext
                }
            }
        }
        return p
    }
    matchRoutesLightweight(n) {
        const {matchedRoutes: a, routeParams: s, parsedParams: l} = this.getMatchedRoutes(n.pathname)
          , u = Sr(a)
          , f = {
            ...n.search
        };
        for (const v of a)
            try {
                Object.assign(f, nu(v.options.validateSearch, f))
            } catch {}
        const d = Sr(this.stores.matchesId.get())
          , h = d && this.stores.matchStores.get(d)?.get()
          , y = h && h.routeId === u.id && h.pathname === n.pathname;
        let p;
        if (y)
            p = h.params;
        else {
            const v = Object.assign(Object.create(null), s);
            for (const g of a)
                try {
                    hy(g, s, l ?? {}, v)
                } catch {}
            p = v
        }
        return {
            matchedRoutes: a,
            fullPath: u.fullPath,
            search: f,
            params: p
        }
    }
}
  , uu = class extends Error {
}
  , v_ = class extends Error {
}
;
function b_(n) {
    return {
        loadedAt: 0,
        isLoading: !1,
        isTransitioning: !1,
        status: "idle",
        resolvedLocation: void 0,
        location: n,
        matches: [],
        statusCode: 200
    }
}
function nu(n, a) {
    if (n == null)
        return {};
    if ("~standard"in n) {
        const s = n["~standard"].validate(a);
        if (s instanceof Promise)
            throw new uu("Async validation not supported");
        if (s.issues)
            throw new uu(JSON.stringify(s.issues, void 0, 2),{
                cause: s
            });
        return s.value
    }
    return "parse"in n ? n.parse(a) : typeof n == "function" ? n(a) : {}
}
function S_({pathname: n, routesById: a, processedTree: s}) {
    const l = Object.create(null)
      , u = Ea(n);
    let f, d;
    const h = LS(u, s, !0);
    return h && (f = h.route,
    Object.assign(l, h.rawParams),
    d = Object.assign(Object.create(null), h.parsedParams)),
    {
        matchedRoutes: h?.branch || [a.__root__],
        routeParams: l,
        foundRoute: f,
        parsedParams: d
    }
}
function __({search: n, dest: a, destRoutes: s, _includeValidateSearch: l}) {
    return x_(s)(n, a, l ?? !1)
}
function x_(n) {
    const a = {
        dest: null,
        _includeValidateSearch: !1,
        middlewares: []
    };
    for (const u of n) {
        if ("search"in u.options)
            u.options.search?.middlewares && a.middlewares.push(...u.options.search.middlewares);
        else if (u.options.preSearchFilters || u.options.postSearchFilters) {
            const f = ({search: d, next: h}) => {
                let y = d;
                "preSearchFilters"in u.options && u.options.preSearchFilters && (y = u.options.preSearchFilters.reduce( (v, g) => g(v), d));
                const p = h(y);
                return "postSearchFilters"in u.options && u.options.postSearchFilters ? u.options.postSearchFilters.reduce( (v, g) => g(v), p) : p
            }
            ;
            a.middlewares.push(f)
        }
        if (u.options.validateSearch) {
            const f = ({search: d, next: h}) => {
                const y = h(d);
                if (!a._includeValidateSearch)
                    return y;
                try {
                    return {
                        ...y,
                        ...nu(u.options.validateSearch, y) ?? void 0
                    }
                } catch {
                    return y
                }
            }
            ;
            a.middlewares.push(f)
        }
    }
    const s = ({search: u}) => {
        const f = a.dest;
        return f.search ? f.search === !0 ? u : _a(f.search, u) : {}
    }
    ;
    a.middlewares.push(s);
    const l = (u, f, d) => {
        if (u >= d.length)
            return f;
        const h = d[u];
        return h({
            search: f,
            next: p => l(u + 1, p, d)
        })
    }
    ;
    return function(f, d, h) {
        return a.dest = d,
        a._includeValidateSearch = h,
        l(0, f, a.middlewares)
    }
}
function w_(n, a) {
    if (n !== "root")
        for (let s = a.length - 1; s >= 0; s--) {
            const l = a[s];
            if (l.children)
                return l.id
        }
    return ai
}
function hy(n, a, s, l) {
    const u = n.options.params?.parse ?? n.options.parseParams;
    if (u)
        if (n.options.skipRouteOnParseError)
            for (const f in a)
                f in s && (l[f] = s[f]);
        else {
            const f = u(l);
            Object.assign(l, f)
        }
}
var gn = Symbol.for("TSR_DEFERRED_PROMISE");
function E_(n, a) {
    const s = n;
    return s[gn] || (s[gn] = {
        status: "pending"
    },
    s.then(l => {
        s[gn].status = "success",
        s[gn].data = l
    }
    ).catch(l => {
        s[gn].status = "error",
        s[gn].error = {
            data: y_(l),
            __isServerError: !0
        }
    }
    )),
    s
}
var R_ = "Error preloading route! ☝️";
function my(n, a) {
    if (n)
        return typeof n == "string" ? n : n[a]
}
function A_(n) {
    return typeof n == "string" ? {
        href: n,
        crossOrigin: void 0
    } : n
}
function T_(n) {
    if (n.tag !== "link")
        return;
    const a = n.attrs?.rel
      , s = n.attrs?.href;
    if (typeof s == "string" && (typeof a == "string" ? a.split(/\s+/) : []).includes("stylesheet"))
        return s
}
function C_(n, a) {
    const s = T_(a);
    return !!s && n?.inlineCss?.styles[s] !== void 0
}
var Ag = class {
    get to() {
        return this._to
    }
    get id() {
        return this._id
    }
    get path() {
        return this._path
    }
    get fullPath() {
        return this._fullPath
    }
    constructor(n) {
        if (this.init = a => {
            this.originalIndex = a.originalIndex;
            const s = this.options
              , l = !s?.path && !s?.id;
            this.parentRoute = this.options.getParentRoute?.(),
            l ? this._path = ai : this.parentRoute || Lt();
            let u = l ? ai : s?.path;
            u && u !== "/" && (u = gg(u));
            const f = s?.id || u;
            let d = l ? ai : eu([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, f]);
            u === "__root__" && (u = "/"),
            d !== "__root__" && (d = eu(["/", d]));
            const h = d === "__root__" ? "/" : eu([this.parentRoute.fullPath, u]);
            this._path = u,
            this._id = d,
            this._fullPath = h,
            this._to = Ea(h)
        }
        ,
        this.addChildren = a => this._addFileChildren(a),
        this._addFileChildren = a => (Array.isArray(a) && (this.children = a),
        typeof a == "object" && a !== null && (this.children = Object.values(a)),
        this),
        this._addFileTypes = () => this,
        this.updateLoader = a => (Object.assign(this.options, a),
        this),
        this.update = a => (Object.assign(this.options, a),
        this),
        this.lazy = a => (this.lazyFn = a,
        this),
        this.redirect = a => Sg({
            from: this.fullPath,
            ...a
        }),
        this.options = n || {},
        this.isRoot = !n?.getParentRoute,
        n?.id && n?.path)
            throw new Error("Route cannot have both an 'id' and a 'path' option.")
    }
}
  , O_ = class extends Ag {
    constructor(n) {
        super(n)
    }
}
;
function M_(n) {
    if (typeof document < "u" && document.querySelector) {
        const a = n.stores.location.get()
          , s = a.state.__hashScrollIntoViewOptions ?? !0;
        if (s && a.hash !== "") {
            const l = document.getElementById(a.hash);
            l && l.scrollIntoView(s)
        }
    }
}
var N_ = (n => (n[n.AggregateError = 1] = "AggregateError",
n[n.ArrowFunction = 2] = "ArrowFunction",
n[n.ErrorPrototypeStack = 4] = "ErrorPrototypeStack",
n[n.ObjectAssign = 8] = "ObjectAssign",
n[n.BigIntTypedArray = 16] = "BigIntTypedArray",
n[n.RegExp = 32] = "RegExp",
n))(N_ || {})
  , Vn = Symbol.asyncIterator
  , Tg = Symbol.hasInstance
  , ss = Symbol.isConcatSpreadable
  , Yn = Symbol.iterator
  , Cg = Symbol.match
  , Og = Symbol.matchAll
  , Mg = Symbol.replace
  , Ng = Symbol.search
  , zg = Symbol.species
  , jg = Symbol.split
  , Dg = Symbol.toPrimitive
  , rs = Symbol.toStringTag
  , Lg = Symbol.unscopables
  , Ug = {
    [Vn]: 0,
    [Tg]: 1,
    [ss]: 2,
    [Yn]: 3,
    [Cg]: 4,
    [Og]: 5,
    [Mg]: 6,
    [Ng]: 7,
    [zg]: 8,
    [jg]: 9,
    [Dg]: 10,
    [rs]: 11,
    [Lg]: 12
}
  , z_ = {
    0: Vn,
    1: Tg,
    2: ss,
    3: Yn,
    4: Cg,
    5: Og,
    6: Mg,
    7: Ng,
    8: zg,
    9: jg,
    10: Dg,
    11: rs,
    12: Lg
}
  , S = void 0
  , j_ = {
    2: !0,
    3: !1,
    1: S,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN
}
  , D_ = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError"
}
  , L_ = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError
};
function Ne(n, a, s, l, u, f, d, h, y, p, v, g) {
    return {
        t: n,
        i: a,
        s,
        c: l,
        m: u,
        p: f,
        e: d,
        a: h,
        f: y,
        b: p,
        o: v,
        l: g
    }
}
function Oa(n) {
    return Ne(2, S, n, S, S, S, S, S, S, S, S, S)
}
var kg = Oa(2)
  , Bg = Oa(3)
  , U_ = Oa(1)
  , k_ = Oa(0)
  , B_ = Oa(4)
  , H_ = Oa(5)
  , q_ = Oa(6)
  , Z_ = Oa(7);
function V_(n) {
    switch (n) {
    case '"':
        return '\\"';
    case "\\":
        return "\\\\";
    case `
`:
        return "\\n";
    case "\r":
        return "\\r";
    case "\b":
        return "\\b";
    case "	":
        return "\\t";
    case "\f":
        return "\\f";
    case "<":
        return "\\x3C";
    case "\u2028":
        return "\\u2028";
    case "\u2029":
        return "\\u2029";
    default:
        return S
    }
}
function Ma(n) {
    let a = "", s = 0, l;
    for (let u = 0, f = n.length; u < f; u++)
        l = V_(n[u]),
        l && (a += n.slice(s, u) + l,
        s = u + 1);
    return s === 0 ? a = n : a += n.slice(s),
    a
}
function Y_(n) {
    switch (n) {
    case "\\\\":
        return "\\";
    case '\\"':
        return '"';
    case "\\n":
        return `
`;
    case "\\r":
        return "\r";
    case "\\b":
        return "\b";
    case "\\t":
        return "	";
    case "\\f":
        return "\f";
    case "\\x3C":
        return "<";
    case "\\u2028":
        return "\u2028";
    case "\\u2029":
        return "\u2029";
    default:
        return n
    }
}
function Na(n) {
    return n.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Y_)
}
var Jl = "__SEROVAL_REFS__"
  , Hg = new Map
  , ns = new Map;
function qg(n) {
    return Hg.has(n)
}
function G_(n) {
    return ns.has(n)
}
function Q_(n) {
    if (qg(n))
        return Hg.get(n);
    throw new x1(n)
}
function X_(n) {
    if (G_(n))
        return ns.get(n);
    throw new w1(n)
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, Jl, {
    value: ns,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof window < "u" ? Object.defineProperty(window, Jl, {
    value: ns,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof self < "u" ? Object.defineProperty(self, Jl, {
    value: ns,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof global < "u" && Object.defineProperty(global, Jl, {
    value: ns,
    configurable: !0,
    writable: !1,
    enumerable: !1
});
function Nf(n) {
    return n instanceof EvalError ? 1 : n instanceof RangeError ? 2 : n instanceof ReferenceError ? 3 : n instanceof SyntaxError ? 4 : n instanceof TypeError ? 5 : n instanceof URIError ? 6 : 0
}
function P_(n) {
    let a = D_[Nf(n)];
    return n.name !== a ? {
        name: n.name
    } : n.constructor.name !== a ? {
        name: n.constructor.name
    } : {}
}
function Zg(n, a) {
    let s = P_(n)
      , l = Object.getOwnPropertyNames(n);
    for (let u = 0, f = l.length, d; u < f; u++)
        d = l[u],
        d !== "name" && d !== "message" && (d === "stack" ? a & 4 && (s = s || {},
        s[d] = n[d]) : (s = s || {},
        s[d] = n[d]));
    return s
}
function Vg(n) {
    return Object.isFrozen(n) ? 3 : Object.isSealed(n) ? 2 : Object.isExtensible(n) ? 0 : 1
}
function K_(n) {
    switch (n) {
    case Number.POSITIVE_INFINITY:
        return H_;
    case Number.NEGATIVE_INFINITY:
        return q_
    }
    return n !== n ? Z_ : Object.is(n, -0) ? B_ : Ne(0, S, n, S, S, S, S, S, S, S, S, S)
}
function Yg(n) {
    return Ne(1, S, Ma(n), S, S, S, S, S, S, S, S, S)
}
function F_(n) {
    return Ne(3, S, "" + n, S, S, S, S, S, S, S, S, S)
}
function I_(n) {
    return Ne(4, n, S, S, S, S, S, S, S, S, S, S)
}
function J_(n, a) {
    let s = a.valueOf();
    return Ne(5, n, s !== s ? "" : a.toISOString(), S, S, S, S, S, S, S, S, S)
}
function $_(n, a) {
    return Ne(6, n, S, Ma(a.source), a.flags, S, S, S, S, S, S, S)
}
function W_(n, a) {
    return Ne(17, n, Ug[a], S, S, S, S, S, S, S, S, S)
}
function e1(n, a) {
    return Ne(18, n, Ma(Q_(a)), S, S, S, S, S, S, S, S, S)
}
function t1(n, a, s) {
    return Ne(25, n, s, Ma(a), S, S, S, S, S, S, S, S)
}
function n1(n, a, s) {
    return Ne(9, n, S, S, S, S, S, s, S, S, Vg(a), S)
}
function a1(n, a) {
    return Ne(21, n, S, S, S, S, S, S, a, S, S, S)
}
function i1(n, a, s) {
    return Ne(15, n, S, a.constructor.name, S, S, S, S, s, a.byteOffset, S, a.length)
}
function s1(n, a, s) {
    return Ne(16, n, S, a.constructor.name, S, S, S, S, s, a.byteOffset, S, a.byteLength)
}
function r1(n, a, s) {
    return Ne(20, n, S, S, S, S, S, S, s, a.byteOffset, S, a.byteLength)
}
function l1(n, a, s) {
    return Ne(13, n, Nf(a), S, Ma(a.message), s, S, S, S, S, S, S)
}
function u1(n, a, s) {
    return Ne(14, n, Nf(a), S, Ma(a.message), s, S, S, S, S, S, S)
}
function o1(n, a) {
    return Ne(7, n, S, S, S, S, S, a, S, S, S, S)
}
function c1(n, a) {
    return Ne(28, S, S, S, S, S, S, [n, a], S, S, S, S)
}
function f1(n, a) {
    return Ne(30, S, S, S, S, S, S, [n, a], S, S, S, S)
}
function d1(n, a, s) {
    return Ne(31, n, S, S, S, S, S, s, a, S, S, S)
}
function h1(n, a) {
    return Ne(32, n, S, S, S, S, S, S, a, S, S, S)
}
function m1(n, a) {
    return Ne(33, n, S, S, S, S, S, S, a, S, S, S)
}
function p1(n, a) {
    return Ne(34, n, S, S, S, S, S, S, a, S, S, S)
}
function y1(n, a, s, l) {
    return Ne(35, n, s, S, S, S, S, a, S, S, S, l)
}
var g1 = {
    parsing: 1,
    serialization: 2,
    deserialization: 3
};
function v1(n) {
    return `Seroval Error (step: ${g1[n]})`
}
var b1 = (n, a) => v1(n)
  , Gg = class extends Error {
    constructor(n, a) {
        super(b1(n)),
        this.cause = a
    }
}
  , py = class extends Gg {
    constructor(n) {
        super("parsing", n)
    }
}
  , S1 = class extends Gg {
    constructor(n) {
        super("deserialization", n)
    }
}
;
function Qn(n) {
    return `Seroval Error (specific: ${n})`
}
var Su = class extends Error {
    constructor(a) {
        super(Qn(1)),
        this.value = a
    }
}
  , Qg = class extends Error {
    constructor(a) {
        super(Qn(2))
    }
}
  , _1 = class extends Error {
    constructor(n) {
        super(Qn(3))
    }
}
  , Or = class extends Error {
    constructor(n) {
        super(Qn(4))
    }
}
  , x1 = class extends Error {
    constructor(n) {
        super(Qn(5)),
        this.value = n
    }
}
  , w1 = class extends Error {
    constructor(n) {
        super(Qn(6))
    }
}
  , E1 = class extends Error {
    constructor(n) {
        super(Qn(7))
    }
}
  , za = class extends Error {
    constructor(n) {
        super(Qn(8))
    }
}
  , R1 = class extends Error {
    constructor(a) {
        super(Qn(9))
    }
}
  , A1 = class {
    constructor(n, a) {
        this.value = n,
        this.replacement = a
    }
}
  , _u = () => {
    let n = {
        p: 0,
        s: 0,
        f: 0
    };
    return n.p = new Promise( (a, s) => {
        n.s = a,
        n.f = s
    }
    ),
    n
}
  , T1 = (n, a) => {
    n.s(a),
    n.p.s = 1,
    n.p.v = a
}
  , C1 = (n, a) => {
    n.f(a),
    n.p.s = 2,
    n.p.v = a
}
;
_u.toString();
T1.toString();
C1.toString();
var O1 = () => {
    let n = []
      , a = []
      , s = !0
      , l = !1
      , u = 0
      , f = (y, p, v) => {
        for (v = 0; v < u; v++)
            a[v] && a[v][p](y)
    }
      , d = (y, p, v, g) => {
        for (p = 0,
        v = n.length; p < v; p++)
            g = n[p],
            !s && p === v - 1 ? y[l ? "return" : "throw"](g) : y.next(g)
    }
      , h = (y, p) => (s && (p = u++,
    a[p] = y),
    d(y),
    () => {
        s && (a[p] = a[u],
        a[u--] = void 0)
    }
    );
    return {
        __SEROVAL_STREAM__: !0,
        on: y => h(y),
        next: y => {
            s && (n.push(y),
            f(y, "next"))
        }
        ,
        throw: y => {
            s && (n.push(y),
            f(y, "throw"),
            s = !1,
            l = !1,
            a.length = 0)
        }
        ,
        return: y => {
            s && (n.push(y),
            f(y, "return"),
            s = !1,
            l = !0,
            a.length = 0)
        }
    }
}
  , M1 = n => a => () => {
    let s = 0
      , l = {
        [n]: () => l,
        next: () => {
            if (s > a.d)
                return {
                    done: !0,
                    value: void 0
                };
            let u = s++
              , f = a.v[u];
            if (u === a.t)
                throw f;
            return {
                done: u === a.d,
                value: f
            }
        }
    };
    return l
}
  , N1 = (n, a) => s => () => {
    let l = 0
      , u = -1
      , f = !1
      , d = []
      , h = []
      , y = (v=0, g=h.length) => {
        for (; v < g; v++)
            h[v].s({
                done: !0,
                value: void 0
            })
    }
    ;
    s.on({
        next: v => {
            let g = h.shift();
            g && g.s({
                done: !1,
                value: v
            }),
            d.push(v)
        }
        ,
        throw: v => {
            let g = h.shift();
            g && g.f(v),
            y(),
            u = d.length,
            f = !0,
            d.push(v)
        }
        ,
        return: v => {
            let g = h.shift();
            g && g.s({
                done: !0,
                value: v
            }),
            y(),
            u = d.length,
            d.push(v)
        }
    });
    let p = {
        [n]: () => p,
        next: () => {
            if (u === -1) {
                let _ = l++;
                if (_ >= d.length) {
                    let x = a();
                    return h.push(x),
                    x.p
                }
                return {
                    done: !1,
                    value: d[_]
                }
            }
            if (l > u)
                return {
                    done: !0,
                    value: void 0
                };
            let v = l++
              , g = d[v];
            if (v !== u)
                return {
                    done: !1,
                    value: g
                };
            if (f)
                throw g;
            return {
                done: !0,
                value: g
            }
        }
    };
    return p
}
  , Xg = n => {
    let a = atob(n)
      , s = a.length
      , l = new Uint8Array(s);
    for (let u = 0; u < s; u++)
        l[u] = a.charCodeAt(u);
    return l.buffer
}
;
Xg.toString();
function z1(n) {
    return "__SEROVAL_SEQUENCE__"in n
}
function Pg(n, a, s) {
    return {
        __SEROVAL_SEQUENCE__: !0,
        v: n,
        t: a,
        d: s
    }
}
function j1(n) {
    let a = []
      , s = -1
      , l = -1
      , u = n[Yn]();
    for (; ; )
        try {
            let f = u.next();
            if (a.push(f.value),
            f.done) {
                l = a.length - 1;
                break
            }
        } catch (f) {
            s = a.length,
            a.push(f)
        }
    return Pg(a, s, l)
}
var D1 = M1(Yn);
function L1(n) {
    return D1(n)
}
var U1 = {}
  , k1 = {}
  , B1 = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {}
};
function xu(n) {
    return "__SEROVAL_STREAM__"in n
}
function ci() {
    return O1()
}
function H1(n) {
    let a = ci()
      , s = n[Vn]();
    async function l() {
        try {
            let u = await s.next();
            u.done ? a.return(u.value) : (a.next(u.value),
            await l())
        } catch (u) {
            a.throw(u)
        }
    }
    return l().catch( () => {}
    ),
    a
}
var q1 = N1(Vn, _u);
function Z1(n) {
    return q1(n)
}
async function V1(n) {
    try {
        return [1, await n]
    } catch (a) {
        return [0, a]
    }
}
function Y1(n, a) {
    return {
        plugins: a.plugins,
        mode: n,
        marked: new Set,
        features: 63 ^ (a.disabledFeatures || 0),
        refs: a.refs || new Map,
        depthLimit: a.depthLimit || 1e3
    }
}
function au(n, a) {
    n.marked.add(a)
}
function G1(n, a) {
    let s = n.refs.size;
    return n.refs.set(a, s),
    s
}
function wu(n, a) {
    let s = n.refs.get(a);
    return s != null ? (au(n, s),
    {
        type: 1,
        value: I_(s)
    }) : {
        type: 0,
        value: G1(n, a)
    }
}
function zf(n, a) {
    let s = wu(n, a);
    return s.type === 1 ? s : qg(a) ? {
        type: 2,
        value: e1(s.value, a)
    } : s
}
function ni(n, a) {
    let s = zf(n, a);
    if (s.type !== 0)
        return s.value;
    if (a in Ug)
        return W_(s.value, a);
    throw new Su(a)
}
function Eu(n, a) {
    let s = wu(n, B1[a]);
    return s.type === 1 ? s.value : Ne(26, s.value, a, S, S, S, S, S, S, S, S, S)
}
function Q1(n) {
    let a = wu(n, U1);
    return a.type === 1 ? a.value : Ne(27, a.value, S, S, S, S, S, S, ni(n, Yn), S, S, S)
}
function X1(n) {
    let a = wu(n, k1);
    return a.type === 1 ? a.value : Ne(29, a.value, S, S, S, S, S, [Eu(n, 1), ni(n, Vn)], S, S, S, S)
}
function P1(n, a, s, l) {
    return Ne(s ? 11 : 10, n, S, S, S, l, S, S, S, S, Vg(a), S)
}
function K1(n, a, s, l) {
    return Ne(8, a, S, S, S, S, {
        k: s,
        v: l
    }, S, Eu(n, 0), S, S, S)
}
function F1(n, a, s) {
    let l = new Uint8Array(s)
      , u = "";
    for (let f = 0, d = l.length; f < d; f++)
        u += String.fromCharCode(l[f]);
    return Ne(19, a, Ma(btoa(u)), S, S, S, S, S, Eu(n, 5), S, S, S)
}
function I1(n, a) {
    return {
        base: Y1(n, a),
        child: void 0
    }
}
var J1 = class {
    constructor(n, a) {
        this._p = n,
        this.depth = a
    }
    parse(n) {
        return ot(this._p, this.depth, n)
    }
}
;
async function $1(n, a, s) {
    let l = [];
    for (let u = 0, f = s.length; u < f; u++)
        u in s ? l[u] = await ot(n, a, s[u]) : l[u] = 0;
    return l
}
async function W1(n, a, s, l) {
    return n1(s, l, await $1(n, a, l))
}
async function jf(n, a, s) {
    let l = Object.entries(s)
      , u = []
      , f = [];
    for (let d = 0, h = l.length; d < h; d++)
        u.push(Ma(l[d][0])),
        f.push(await ot(n, a, l[d][1]));
    return Yn in s && (u.push(ni(n.base, Yn)),
    f.push(c1(Q1(n.base), await ot(n, a, j1(s))))),
    Vn in s && (u.push(ni(n.base, Vn)),
    f.push(f1(X1(n.base), await ot(n, a, H1(s))))),
    rs in s && (u.push(ni(n.base, rs)),
    f.push(Yg(s[rs]))),
    ss in s && (u.push(ni(n.base, ss)),
    f.push(s[ss] ? kg : Bg)),
    {
        k: u,
        v: f
    }
}
async function Wc(n, a, s, l, u) {
    return P1(s, l, u, await jf(n, a, l))
}
async function ex(n, a, s, l) {
    return a1(s, await ot(n, a, l.valueOf()))
}
async function tx(n, a, s, l) {
    return i1(s, l, await ot(n, a, l.buffer))
}
async function nx(n, a, s, l) {
    return s1(s, l, await ot(n, a, l.buffer))
}
async function ax(n, a, s, l) {
    return r1(s, l, await ot(n, a, l.buffer))
}
async function yy(n, a, s, l) {
    let u = Zg(l, n.base.features);
    return l1(s, l, u ? await jf(n, a, u) : S)
}
async function ix(n, a, s, l) {
    let u = Zg(l, n.base.features);
    return u1(s, l, u ? await jf(n, a, u) : S)
}
async function sx(n, a, s, l) {
    let u = []
      , f = [];
    for (let[d,h] of l.entries())
        u.push(await ot(n, a, d)),
        f.push(await ot(n, a, h));
    return K1(n.base, s, u, f)
}
async function rx(n, a, s, l) {
    let u = [];
    for (let f of l.keys())
        u.push(await ot(n, a, f));
    return o1(s, u)
}
async function Kg(n, a, s, l) {
    let u = n.base.plugins;
    if (u)
        for (let f = 0, d = u.length; f < d; f++) {
            let h = u[f];
            if (h.parse.async && h.test(l))
                return t1(s, h.tag, await h.parse.async(l, new J1(n,a), {
                    id: s
                }))
        }
    return S
}
async function lx(n, a, s, l) {
    let[u,f] = await V1(l);
    return Ne(12, s, u, S, S, S, S, S, await ot(n, a, f), S, S, S)
}
function ux(n, a, s, l, u) {
    let f = []
      , d = s.on({
        next: h => {
            au(this.base, a),
            ot(this, n, h).then(y => {
                f.push(h1(a, y))
            }
            , y => {
                u(y),
                d()
            }
            )
        }
        ,
        throw: h => {
            au(this.base, a),
            ot(this, n, h).then(y => {
                f.push(m1(a, y)),
                l(f),
                d()
            }
            , y => {
                u(y),
                d()
            }
            )
        }
        ,
        return: h => {
            au(this.base, a),
            ot(this, n, h).then(y => {
                f.push(p1(a, y)),
                l(f),
                d()
            }
            , y => {
                u(y),
                d()
            }
            )
        }
    })
}
async function ox(n, a, s, l) {
    return d1(s, Eu(n.base, 4), await new Promise(ux.bind(n, a, s, l)))
}
async function cx(n, a, s, l) {
    let u = [];
    for (let f = 0, d = l.v.length; f < d; f++)
        u[f] = await ot(n, a, l.v[f]);
    return y1(s, u, l.t, l.d)
}
async function fx(n, a, s, l) {
    if (Array.isArray(l))
        return W1(n, a, s, l);
    if (xu(l))
        return ox(n, a, s, l);
    if (z1(l))
        return cx(n, a, s, l);
    let u = l.constructor;
    if (u === A1)
        return ot(n, a, l.replacement);
    let f = await Kg(n, a, s, l);
    if (f)
        return f;
    switch (u) {
    case Object:
        return Wc(n, a, s, l, !1);
    case S:
        return Wc(n, a, s, l, !0);
    case Date:
        return J_(s, l);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
        return yy(n, a, s, l);
    case Number:
    case Boolean:
    case String:
    case BigInt:
        return ex(n, a, s, l);
    case ArrayBuffer:
        return F1(n.base, s, l);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
        return tx(n, a, s, l);
    case DataView:
        return ax(n, a, s, l);
    case Map:
        return sx(n, a, s, l);
    case Set:
        return rx(n, a, s, l)
    }
    if (u === Promise || l instanceof Promise)
        return lx(n, a, s, l);
    let d = n.base.features;
    if (d & 32 && u === RegExp)
        return $_(s, l);
    if (d & 16)
        switch (u) {
        case BigInt64Array:
        case BigUint64Array:
            return nx(n, a, s, l)
        }
    if (d & 1 && typeof AggregateError < "u" && (u === AggregateError || l instanceof AggregateError))
        return ix(n, a, s, l);
    if (l instanceof Error)
        return yy(n, a, s, l);
    if (Yn in l || Vn in l)
        return Wc(n, a, s, l, !!u);
    throw new Su(l)
}
async function dx(n, a, s) {
    let l = zf(n.base, s);
    if (l.type !== 0)
        return l.value;
    let u = await Kg(n, a, l.value, s);
    if (u)
        return u;
    throw new Su(s)
}
async function ot(n, a, s) {
    switch (typeof s) {
    case "boolean":
        return s ? kg : Bg;
    case "undefined":
        return U_;
    case "string":
        return Yg(s);
    case "number":
        return K_(s);
    case "bigint":
        return F_(s);
    case "object":
        {
            if (s) {
                let l = zf(n.base, s);
                return l.type === 0 ? await fx(n, a + 1, l.value, s) : l.value
            }
            return k_
        }
    case "symbol":
        return ni(n.base, s);
    case "function":
        return dx(n, a, s);
    default:
        throw new Su(s)
    }
}
async function hx(n, a) {
    try {
        return await ot(n, 0, a)
    } catch (s) {
        throw s instanceof py ? s : new py(s)
    }
}
var mx = (n => (n[n.Vanilla = 1] = "Vanilla",
n[n.Cross = 2] = "Cross",
n))(mx || {});
function Fg(n, a) {
    for (let s = 0, l = a.length; s < l; s++) {
        let u = a[s];
        n.has(u) || (n.add(u),
        u.extends && Fg(n, u.extends))
    }
}
function Ig(n) {
    if (n) {
        let a = new Set;
        return Fg(a, n),
        [...a]
    }
}
function px(n) {
    switch (n) {
    case "Int8Array":
        return Int8Array;
    case "Int16Array":
        return Int16Array;
    case "Int32Array":
        return Int32Array;
    case "Uint8Array":
        return Uint8Array;
    case "Uint16Array":
        return Uint16Array;
    case "Uint32Array":
        return Uint32Array;
    case "Uint8ClampedArray":
        return Uint8ClampedArray;
    case "Float32Array":
        return Float32Array;
    case "Float64Array":
        return Float64Array;
    case "BigInt64Array":
        return BigInt64Array;
    case "BigUint64Array":
        return BigUint64Array;
    default:
        throw new E1(n)
    }
}
var yx = 1e6
  , gx = 1e4
  , vx = 2e4;
function Jg(n, a) {
    switch (a) {
    case 3:
        return Object.freeze(n);
    case 1:
        return Object.preventExtensions(n);
    case 2:
        return Object.seal(n);
    default:
        return n
    }
}
var bx = 1e3;
function Sx(n, a) {
    var s;
    return {
        mode: n,
        plugins: a.plugins,
        refs: a.refs || new Map,
        features: (s = a.features) != null ? s : 63 ^ (a.disabledFeatures || 0),
        depthLimit: a.depthLimit || bx
    }
}
function _x(n) {
    return {
        mode: 2,
        base: Sx(2, n),
        child: S
    }
}
var xx = class {
    constructor(n, a) {
        this._p = n,
        this.depth = a
    }
    deserialize(n) {
        return Ye(this._p, this.depth, n)
    }
}
;
function $g(n, a) {
    if (a < 0 || !Number.isFinite(a) || !Number.isInteger(a))
        throw new za({
            t: 4,
            i: a
        });
    if (n.refs.has(a))
        throw new Error("Conflicted ref id: " + a)
}
function wx(n, a, s) {
    return $g(n.base, a),
    n.state.marked.has(a) && n.base.refs.set(a, s),
    s
}
function Ex(n, a, s) {
    return $g(n.base, a),
    n.base.refs.set(a, s),
    s
}
function ct(n, a, s) {
    return n.mode === 1 ? wx(n, a, s) : Ex(n, a, s)
}
function df(n, a, s) {
    if (Object.hasOwn(a, s))
        return a[s];
    throw new za(n)
}
function Rx(n, a) {
    return ct(n, a.i, X_(Na(a.s)))
}
function Ax(n, a, s) {
    let l = s.a
      , u = l.length
      , f = ct(n, s.i, new Array(u));
    for (let d = 0, h; d < u; d++)
        h = l[d],
        h && (f[d] = Ye(n, a, h));
    return Jg(f, s.o),
    f
}
function Tx(n) {
    switch (n) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
        return !1;
    default:
        return !0
    }
}
function Cx(n) {
    switch (n) {
    case Vn:
    case ss:
    case rs:
    case Yn:
        return !0;
    default:
        return !1
    }
}
function gy(n, a, s) {
    Tx(a) ? n[a] = s : Object.defineProperty(n, a, {
        value: s,
        configurable: !0,
        enumerable: !0,
        writable: !0
    })
}
function Ox(n, a, s, l, u) {
    if (typeof l == "string")
        gy(s, Na(l), Ye(n, a, u));
    else {
        let f = Ye(n, a, l);
        switch (typeof f) {
        case "string":
            gy(s, f, Ye(n, a, u));
            break;
        case "symbol":
            Cx(f) && (s[f] = Ye(n, a, u));
            break;
        default:
            throw new za(l)
        }
    }
}
function Wg(n, a, s, l) {
    let u = s.k;
    if (u.length > 0)
        for (let f = 0, d = s.v, h = u.length; f < h; f++)
            Ox(n, a, l, u[f], d[f]);
    return l
}
function Mx(n, a, s) {
    let l = ct(n, s.i, s.t === 10 ? {} : Object.create(null));
    return Wg(n, a, s.p, l),
    Jg(l, s.o),
    l
}
function Nx(n, a) {
    return ct(n, a.i, new Date(a.s))
}
function zx(n, a) {
    if (n.base.features & 32) {
        let s = Na(a.c);
        if (s.length > vx)
            throw new za(a);
        return ct(n, a.i, new RegExp(s,a.m))
    }
    throw new Qg(a)
}
function jx(n, a, s) {
    let l = ct(n, s.i, new Set);
    for (let u = 0, f = s.a, d = f.length; u < d; u++)
        l.add(Ye(n, a, f[u]));
    return l
}
function Dx(n, a, s) {
    let l = ct(n, s.i, new Map);
    for (let u = 0, f = s.e.k, d = s.e.v, h = f.length; u < h; u++)
        l.set(Ye(n, a, f[u]), Ye(n, a, d[u]));
    return l
}
function Lx(n, a) {
    if (a.s.length > yx)
        throw new za(a);
    return ct(n, a.i, Xg(Na(a.s)))
}
function Ux(n, a, s) {
    var l;
    let u = px(s.c)
      , f = Ye(n, a, s.f)
      , d = (l = s.b) != null ? l : 0;
    if (d < 0 || d > f.byteLength)
        throw new za(s);
    return ct(n, s.i, new u(f,d,s.l))
}
function kx(n, a, s) {
    var l;
    let u = Ye(n, a, s.f)
      , f = (l = s.b) != null ? l : 0;
    if (f < 0 || f > u.byteLength)
        throw new za(s);
    return ct(n, s.i, new DataView(u,f,s.l))
}
function ev(n, a, s, l) {
    if (s.p) {
        let u = Wg(n, a, s.p, {});
        Object.defineProperties(l, Object.getOwnPropertyDescriptors(u))
    }
    return l
}
function Bx(n, a, s) {
    let l = ct(n, s.i, new AggregateError([],Na(s.m)));
    return ev(n, a, s, l)
}
function Hx(n, a, s) {
    let l = df(s, L_, s.s)
      , u = ct(n, s.i, new l(Na(s.m)));
    return ev(n, a, s, u)
}
function qx(n, a, s) {
    let l = _u()
      , u = ct(n, s.i, l.p)
      , f = Ye(n, a, s.f);
    return s.s ? l.s(f) : l.f(f),
    u
}
function Zx(n, a, s) {
    return ct(n, s.i, Object(Ye(n, a, s.f)))
}
function Vx(n, a, s) {
    let l = n.base.plugins;
    if (l) {
        let u = Na(s.c);
        for (let f = 0, d = l.length; f < d; f++) {
            let h = l[f];
            if (h.tag === u)
                return ct(n, s.i, h.deserialize(s.s, new xx(n,a), {
                    id: s.i
                }))
        }
    }
    throw new _1(s.c)
}
function Yx(n, a) {
    return ct(n, a.i, ct(n, a.s, _u()).p)
}
function Gx(n, a, s) {
    let l = n.base.refs.get(s.i);
    if (l)
        return l.s(Ye(n, a, s.a[1])),
        S;
    throw new Or("Promise")
}
function Qx(n, a, s) {
    let l = n.base.refs.get(s.i);
    if (l)
        return l.f(Ye(n, a, s.a[1])),
        S;
    throw new Or("Promise")
}
function Xx(n, a, s) {
    Ye(n, a, s.a[0]);
    let l = Ye(n, a, s.a[1]);
    return L1(l)
}
function Px(n, a, s) {
    Ye(n, a, s.a[0]);
    let l = Ye(n, a, s.a[1]);
    return Z1(l)
}
function Kx(n, a, s) {
    let l = ct(n, s.i, ci())
      , u = s.a
      , f = u.length;
    if (f)
        for (let d = 0; d < f; d++)
            Ye(n, a, u[d]);
    return l
}
function Fx(n, a, s) {
    let l = n.base.refs.get(s.i);
    if (l && xu(l))
        return l.next(Ye(n, a, s.f)),
        S;
    throw new Or("Stream")
}
function Ix(n, a, s) {
    let l = n.base.refs.get(s.i);
    if (l && xu(l))
        return l.throw(Ye(n, a, s.f)),
        S;
    throw new Or("Stream")
}
function Jx(n, a, s) {
    let l = n.base.refs.get(s.i);
    if (l && xu(l))
        return l.return(Ye(n, a, s.f)),
        S;
    throw new Or("Stream")
}
function $x(n, a, s) {
    return Ye(n, a, s.f),
    S
}
function Wx(n, a, s) {
    return Ye(n, a, s.a[1]),
    S
}
function e2(n, a, s) {
    let l = ct(n, s.i, Pg([], s.s, s.l));
    for (let u = 0, f = s.a.length; u < f; u++)
        l.v[u] = Ye(n, a, s.a[u]);
    return l
}
function Ye(n, a, s) {
    if (a > n.base.depthLimit)
        throw new R1(n.base.depthLimit);
    switch (a += 1,
    s.t) {
    case 2:
        return df(s, j_, s.s);
    case 0:
        return Number(s.s);
    case 1:
        return Na(String(s.s));
    case 3:
        if (String(s.s).length > gx)
            throw new za(s);
        return BigInt(s.s);
    case 4:
        return n.base.refs.get(s.i);
    case 18:
        return Rx(n, s);
    case 9:
        return Ax(n, a, s);
    case 10:
    case 11:
        return Mx(n, a, s);
    case 5:
        return Nx(n, s);
    case 6:
        return zx(n, s);
    case 7:
        return jx(n, a, s);
    case 8:
        return Dx(n, a, s);
    case 19:
        return Lx(n, s);
    case 16:
    case 15:
        return Ux(n, a, s);
    case 20:
        return kx(n, a, s);
    case 14:
        return Bx(n, a, s);
    case 13:
        return Hx(n, a, s);
    case 12:
        return qx(n, a, s);
    case 17:
        return df(s, z_, s.s);
    case 21:
        return Zx(n, a, s);
    case 25:
        return Vx(n, a, s);
    case 22:
        return Yx(n, s);
    case 23:
        return Gx(n, a, s);
    case 24:
        return Qx(n, a, s);
    case 28:
        return Xx(n, a, s);
    case 30:
        return Px(n, a, s);
    case 31:
        return Kx(n, a, s);
    case 32:
        return Fx(n, a, s);
    case 33:
        return Ix(n, a, s);
    case 34:
        return Jx(n, a, s);
    case 27:
        return $x(n, a, s);
    case 29:
        return Wx(n, a, s);
    case 35:
        return e2(n, a, s);
    default:
        throw new Qg(s)
    }
}
function t2(n, a) {
    try {
        return Ye(n, 0, a)
    } catch (s) {
        throw new S1(s)
    }
}
var n2 = () => T;
n2.toString();
function vy(n, a) {
    let s = Ig(a.plugins)
      , l = _x({
        plugins: s,
        refs: a.refs,
        features: a.features,
        disabledFeatures: a.disabledFeatures,
        depthLimit: a.depthLimit
    });
    return t2(l, n)
}
async function a2(n, a={}) {
    let s = Ig(a.plugins)
      , l = I1(1, {
        plugins: s,
        disabledFeatures: a.disabledFeatures
    });
    return {
        t: await hx(l, n),
        f: l.base.features,
        m: Array.from(l.base.marked)
    }
}
function i2(n) {
    return {
        tag: "$TSR/t/" + n.key,
        test: n.test,
        parse: {
            sync(a, s, l) {
                return {
                    v: s.parse(n.toSerializable(a))
                }
            },
            async async(a, s, l) {
                return {
                    v: await s.parse(n.toSerializable(a))
                }
            },
            stream(a, s, l) {
                return {
                    v: s.parse(n.toSerializable(a))
                }
            }
        },
        serialize: void 0,
        deserialize(a, s, l) {
            return n.fromSerializable(s.deserialize(a.v))
        }
    }
}
var s2 = class {
    constructor(n, a) {
        this.stream = n,
        this.hint = a?.hint ?? "binary"
    }
}
  , ou = globalThis.Buffer
  , tv = !!ou && typeof ou.from == "function";
function nv(n) {
    if (n.length === 0)
        return "";
    if (tv)
        return ou.from(n).toString("base64");
    const a = 32768
      , s = [];
    for (let l = 0; l < n.length; l += a) {
        const u = n.subarray(l, l + a);
        s.push(String.fromCharCode.apply(null, u))
    }
    return btoa(s.join(""))
}
function av(n) {
    if (n.length === 0)
        return new Uint8Array(0);
    if (tv) {
        const l = ou.from(n, "base64");
        return new Uint8Array(l.buffer,l.byteOffset,l.byteLength)
    }
    const a = atob(n)
      , s = new Uint8Array(a.length);
    for (let l = 0; l < a.length; l++)
        s[l] = a.charCodeAt(l);
    return s
}
var mr = Object.create(null)
  , pr = Object.create(null)
  , r2 = n => new ReadableStream({
    start(a) {
        n.on({
            next(s) {
                try {
                    a.enqueue(av(s))
                } catch {}
            },
            throw(s) {
                a.error(s)
            },
            return() {
                try {
                    a.close()
                } catch {}
            }
        })
    }
})
  , l2 = new TextEncoder
  , u2 = n => new ReadableStream({
    start(a) {
        n.on({
            next(s) {
                try {
                    typeof s == "string" ? a.enqueue(l2.encode(s)) : a.enqueue(av(s.$b64))
                } catch {}
            },
            throw(s) {
                a.error(s)
            },
            return() {
                try {
                    a.close()
                } catch {}
            }
        })
    }
})
  , o2 = "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))"
  , c2 = "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function by(n) {
    const a = ci()
      , s = n.getReader();
    return (async () => {
        try {
            for (; ; ) {
                const {done: l, value: u} = await s.read();
                if (l) {
                    a.return(void 0);
                    break
                }
                a.next(nv(u))
            }
        } catch (l) {
            a.throw(l)
        } finally {
            s.releaseLock()
        }
    }
    )(),
    a
}
function Sy(n) {
    const a = ci()
      , s = n.getReader()
      , l = new TextDecoder("utf-8",{
        fatal: !0
    });
    return (async () => {
        try {
            for (; ; ) {
                const {done: u, value: f} = await s.read();
                if (u) {
                    try {
                        const d = l.decode();
                        d.length > 0 && a.next(d)
                    } catch {}
                    a.return(void 0);
                    break
                }
                try {
                    const d = l.decode(f, {
                        stream: !0
                    });
                    d.length > 0 && a.next(d)
                } catch {
                    a.next({
                        $b64: nv(f)
                    })
                }
            }
        } catch (u) {
            a.throw(u)
        } finally {
            s.releaseLock()
        }
    }
    )(),
    a
}
var f2 = {
    tag: "tss/RawStream",
    extends: [{
        tag: "tss/RawStreamFactory",
        test(n) {
            return n === mr
        },
        parse: {
            sync(n, a, s) {
                return {}
            },
            async async(n, a, s) {
                return {}
            },
            stream(n, a, s) {
                return {}
            }
        },
        serialize(n, a, s) {
            return o2
        },
        deserialize(n, a, s) {
            return mr
        }
    }, {
        tag: "tss/RawStreamFactoryText",
        test(n) {
            return n === pr
        },
        parse: {
            sync(n, a, s) {
                return {}
            },
            async async(n, a, s) {
                return {}
            },
            stream(n, a, s) {
                return {}
            }
        },
        serialize(n, a, s) {
            return c2
        },
        deserialize(n, a, s) {
            return pr
        }
    }],
    test(n) {
        return n instanceof s2
    },
    parse: {
        sync(n, a, s) {
            const l = n.hint === "text" ? pr : mr;
            return {
                hint: a.parse(n.hint),
                factory: a.parse(l),
                stream: a.parse(ci())
            }
        },
        async async(n, a, s) {
            const l = n.hint === "text" ? pr : mr
              , u = n.hint === "text" ? Sy(n.stream) : by(n.stream);
            return {
                hint: await a.parse(n.hint),
                factory: await a.parse(l),
                stream: await a.parse(u)
            }
        },
        stream(n, a, s) {
            const l = n.hint === "text" ? pr : mr
              , u = n.hint === "text" ? Sy(n.stream) : by(n.stream);
            return {
                hint: a.parse(n.hint),
                factory: a.parse(l),
                stream: a.parse(u)
            }
        }
    },
    serialize(n, a, s) {
        return "(" + a.serialize(n.factory) + ")(" + a.serialize(n.stream) + ")"
    },
    deserialize(n, a, s) {
        const l = a.deserialize(n.stream);
        return a.deserialize(n.hint) === "text" ? u2(l) : r2(l)
    }
};
function d2(n) {
    return {
        tag: "tss/RawStream",
        test: () => !1,
        parse: {},
        serialize() {
            throw new Error("RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.")
        },
        deserialize(a, s, l) {
            return n(typeof s?.deserialize == "function" ? s.deserialize(a.streamId) : a.streamId)
        }
    }
}
var h2 = {
    tag: "$TSR/Error",
    test(n) {
        return n instanceof Error
    },
    parse: {
        sync(n, a) {
            return {
                message: a.parse(n.message)
            }
        },
        async async(n, a) {
            return {
                message: await a.parse(n.message)
            }
        },
        stream(n, a) {
            return {
                message: a.parse(n.message)
            }
        }
    },
    serialize(n, a) {
        return "new Error(" + a.serialize(n.message) + ")"
    },
    deserialize(n, a) {
        return new Error(a.deserialize(n.message))
    }
}
  , Sa = {}
  , iv = n => new ReadableStream({
    start: a => {
        n.on({
            next: s => {
                try {
                    a.enqueue(s)
                } catch {}
            }
            ,
            throw: s => {
                a.error(s)
            }
            ,
            return: () => {
                try {
                    a.close()
                } catch {}
            }
        })
    }
})
  , m2 = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(n) {
        return n === Sa
    },
    parse: {
        sync() {
            return Sa
        },
        async async() {
            return await Promise.resolve(Sa)
        },
        stream() {
            return Sa
        }
    },
    serialize() {
        return iv.toString()
    },
    deserialize() {
        return Sa
    }
};
function _y(n) {
    let a = ci()
      , s = n.getReader();
    async function l() {
        try {
            let u = await s.read();
            u.done ? a.return(u.value) : (a.next(u.value),
            await l())
        } catch (u) {
            a.throw(u)
        }
    }
    return l().catch( () => {}
    ),
    a
}
var p2 = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [m2],
    test(n) {
        return typeof ReadableStream > "u" ? !1 : n instanceof ReadableStream
    },
    parse: {
        sync(n, a) {
            return {
                factory: a.parse(Sa),
                stream: a.parse(ci())
            }
        },
        async async(n, a) {
            return {
                factory: await a.parse(Sa),
                stream: await a.parse(_y(n))
            }
        },
        stream(n, a) {
            return {
                factory: a.parse(Sa),
                stream: a.parse(_y(n))
            }
        }
    },
    serialize(n, a) {
        return "(" + a.serialize(n.factory) + ")(" + a.serialize(n.stream) + ")"
    },
    deserialize(n, a) {
        let s = a.deserialize(n.stream);
        return iv(s)
    }
}
  , y2 = p2
  , g2 = [h2, f2, y2];
function v2() {
    return [...hg()?.serializationAdapters?.map(i2) ?? [], ...g2]
}
var xy = new TextDecoder
  , b2 = new Uint8Array(0)
  , wy = 16 * 1024 * 1024
  , Ey = 32 * 1024 * 1024
  , Ry = 1024
  , Ay = 1e5;
function S2(n) {
    const a = new Map
      , s = new Map
      , l = new Set;
    let u = !1, f = null, d = 0, h;
    const y = new ReadableStream({
        start(g) {
            h = g
        },
        cancel() {
            u = !0;
            try {
                f?.cancel()
            } catch {}
            a.forEach(g => {
                try {
                    g.error(new Error("Framed response cancelled"))
                } catch {}
            }
            ),
            a.clear(),
            s.clear(),
            l.clear()
        }
    });
    function p(g) {
        const _ = s.get(g);
        if (_)
            return _;
        if (l.has(g))
            return new ReadableStream({
                start(R) {
                    R.close()
                }
            });
        if (s.size >= Ry)
            throw new Error(`Too many raw streams in framed response (max ${Ry})`);
        const x = new ReadableStream({
            start(R) {
                a.set(g, R)
            },
            cancel() {
                l.add(g),
                a.delete(g),
                s.delete(g)
            }
        });
        return s.set(g, x),
        x
    }
    function v(g) {
        return p(g),
        a.get(g)
    }
    return (async () => {
        const g = n.getReader();
        f = g;
        const _ = [];
        let x = 0;
        function R() {
            if (x < 9)
                return null;
            const w = _[0];
            if (w.length >= 9)
                return {
                    type: w[0],
                    streamId: (w[1] << 24 | w[2] << 16 | w[3] << 8 | w[4]) >>> 0,
                    length: (w[5] << 24 | w[6] << 16 | w[7] << 8 | w[8]) >>> 0
                };
            const A = new Uint8Array(9);
            let B = 0
              , Z = 9;
            for (let H = 0; H < _.length && Z > 0; H++) {
                const $ = _[H]
                  , I = Math.min($.length, Z);
                A.set($.subarray(0, I), B),
                B += I,
                Z -= I
            }
            return {
                type: A[0],
                streamId: (A[1] << 24 | A[2] << 16 | A[3] << 8 | A[4]) >>> 0,
                length: (A[5] << 24 | A[6] << 16 | A[7] << 8 | A[8]) >>> 0
            }
        }
        function N(w) {
            if (w === 0)
                return b2;
            const A = new Uint8Array(w);
            let B = 0
              , Z = w;
            for (; Z > 0 && _.length > 0; ) {
                const H = _[0];
                if (!H)
                    break;
                const $ = Math.min(H.length, Z);
                A.set(H.subarray(0, $), B),
                B += $,
                Z -= $,
                $ === H.length ? _.shift() : _[0] = H.subarray($)
            }
            return x -= w,
            A
        }
        try {
            for (; ; ) {
                const {done: w, value: A} = await g.read();
                if (u || w)
                    break;
                if (A) {
                    if (x + A.length > Ey)
                        throw new Error(`Framed response buffer exceeded ${Ey} bytes`);
                    for (_.push(A),
                    x += A.length; ; ) {
                        const B = R();
                        if (!B)
                            break;
                        const {type: Z, streamId: H, length: $} = B;
                        if (Z !== qn.JSON && Z !== qn.CHUNK && Z !== qn.END && Z !== qn.ERROR)
                            throw new Error(`Unknown frame type: ${Z}`);
                        if (Z === qn.JSON) {
                            if (H !== 0)
                                throw new Error("Invalid JSON frame streamId (expected 0)")
                        } else if (H === 0)
                            throw new Error("Invalid raw frame streamId (expected non-zero)");
                        if ($ > wy)
                            throw new Error(`Frame payload too large: ${$} bytes (max ${wy})`);
                        const I = 9 + $;
                        if (x < I)
                            break;
                        if (++d > Ay)
                            throw new Error(`Too many frames in framed response (max ${Ay})`);
                        N(9);
                        const Q = N($);
                        switch (Z) {
                        case qn.JSON:
                            try {
                                h.enqueue(xy.decode(Q))
                            } catch {}
                            break;
                        case qn.CHUNK:
                            {
                                const X = v(H);
                                X && X.enqueue(Q);
                                break
                            }
                        case qn.END:
                            {
                                const X = v(H);
                                if (l.add(H),
                                X) {
                                    try {
                                        X.close()
                                    } catch {}
                                    a.delete(H)
                                }
                                break
                            }
                        case qn.ERROR:
                            {
                                const X = v(H);
                                if (l.add(H),
                                X) {
                                    const W = xy.decode(Q);
                                    X.error(new Error(W)),
                                    a.delete(H)
                                }
                                break
                            }
                        }
                    }
                }
            }
            if (x !== 0)
                throw new Error("Incomplete frame at end of framed response");
            try {
                h.close()
            } catch {}
            a.forEach(w => {
                try {
                    w.close()
                } catch {}
            }
            ),
            a.clear()
        } catch (w) {
            try {
                h.error(w)
            } catch {}
            a.forEach(A => {
                try {
                    A.error(w)
                } catch {}
            }
            ),
            a.clear()
        } finally {
            try {
                g.releaseLock()
            } catch {}
            f = null
        }
    }
    )(),
    {
        getOrCreateStream: p,
        jsonChunks: y
    }
}
var Er = null;
async function hf(n) {
    n.length > 0 && await Promise.allSettled(n)
}
var _2 = Object.prototype.hasOwnProperty;
function sv(n) {
    for (const a in n)
        if (_2.call(n, a))
            return !0;
    return !1
}
async function x2(n, a, s) {
    Er || (Er = v2());
    const l = a[0]
      , u = l.fetch ?? s
      , f = l.data instanceof FormData ? "formData" : "payload"
      , d = l.headers ? new Headers(l.headers) : new Headers;
    if (d.set("x-tsr-serverFn", "true"),
    f === "payload" && d.set("accept", `${yS}, application/x-ndjson, application/json`),
    l.method === "GET") {
        if (f === "formData")
            throw new Error("FormData is not supported with GET requests");
        const y = await rv(l);
        if (y !== void 0) {
            const p = bg({
                payload: y
            });
            n.includes("?") ? n += `&${p}` : n += `?${p}`
        }
    }
    let h;
    if (l.method === "POST") {
        const y = await w2(l);
        y?.contentType && d.set("content-type", y.contentType),
        h = y?.body
    }
    return await E2(async () => u(n, {
        method: l.method,
        headers: d,
        signal: l.signal,
        body: h
    }))
}
async function rv(n) {
    let a = !1;
    const s = {};
    if (n.data !== void 0 && (a = !0,
    s.data = n.data),
    n.context && sv(n.context) && (a = !0,
    s.context = n.context),
    a)
        return lv(s)
}
async function lv(n) {
    return JSON.stringify(await Promise.resolve(a2(n, {
        plugins: Er
    })))
}
async function w2(n) {
    if (n.data instanceof FormData) {
        let s;
        return n.context && sv(n.context) && (s = await lv(n.context)),
        s !== void 0 && n.data.set(pS, s),
        {
            body: n.data
        }
    }
    const a = await rv(n);
    if (a)
        return {
            body: a,
            contentType: "application/json"
        }
}
async function E2(n) {
    let a;
    try {
        a = await n()
    } catch (l) {
        if (l instanceof Response)
            a = l;
        else
            throw console.log(l),
            l
    }
    if (a.headers.get("x-tss-raw") === "true")
        return a;
    const s = a.headers.get("content-type");
    if (s || Lt(),
    a.headers.get("x-tss-serialized")) {
        let l;
        if (s.includes("application/x-tss-framed")) {
            if (bS(s),
            !a.body)
                throw new Error("No response body for framed response");
            const {getOrCreateStream: u, jsonChunks: f} = S2(a.body)
              , d = [d2(u), ...Er || []]
              , h = new Map;
            l = await R2({
                jsonStream: f,
                onMessage: y => vy(y, {
                    refs: h,
                    plugins: d
                }),
                onError(y, p) {
                    console.error(y, p)
                }
            })
        } else if (s.includes("application/json")) {
            const u = await a.json()
              , f = [];
            l = vy(u, {
                plugins: Er
            }),
            await hf(f)
        }
        if (l || Lt(),
        l instanceof Error)
            throw l;
        return l
    }
    if (s.includes("application/json")) {
        const l = await a.json()
          , u = a_(l);
        if (u)
            throw u;
        if (ht(l))
            throw l;
        return l
    }
    if (!a.ok)
        throw new Error(await a.text());
    return a
}
async function R2({jsonStream: n, onMessage: a, onError: s}) {
    const l = n.getReader()
      , {value: u, done: f} = await l.read();
    if (f || !u)
        throw new Error("Stream ended before first object");
    const d = JSON.parse(u);
    let h = !1;
    const y = (async () => {
        try {
            for (; ; ) {
                const {value: g, done: _} = await l.read();
                if (_)
                    break;
                if (g)
                    try {
                        const x = [];
                        try {
                            a(JSON.parse(g))
                        } finally {}
                        await hf(x)
                    } catch (x) {
                        s?.(`Invalid JSON: ${g}`, x)
                    }
            }
        } catch (g) {
            h || s?.("Stream processing error:", g)
        }
    }
    )();
    let p;
    const v = [];
    try {
        p = a(d)
    } catch (g) {
        throw h = !0,
        l.cancel().catch( () => {}
        ),
        g
    }
    return await hf(v),
    Promise.resolve(p).catch( () => {
        h = !0,
        l.cancel().catch( () => {}
        )
    }
    ),
    y.finally( () => {
        try {
            l.releaseLock()
        } catch {}
    }
    ),
    p
}
function A2(n) {
    const a = "/_serverFn/" + n;
    return Object.assign( (...u) => {
        const f = hg()?.serverFns?.fetch;
        return x2(a, u, f ?? fetch)
    }
    , {
        url: a,
        serverFnMeta: {
            id: n
        },
        [of]: !0
    })
}
var T2 = {
    key: "$TSS/serverfn",
    test: n => typeof n != "function" || !(of in n) ? !1 : !!n[of],
    toSerializable: ({serverFnMeta: n}) => ({
        functionId: n.id
    }),
    fromSerializable: ({functionId: n}) => A2(n)
};
function Ty(n) {
    return n.replaceAll("\0", "/").replaceAll("�", "/")
}
function C2(n, a) {
    n.id = a.i,
    n.__beforeLoadContext = a.b,
    n.loaderData = a.l,
    n.status = a.s,
    n.ssr = a.ssr,
    n.updatedAt = a.u,
    n.error = a.e,
    a.g !== void 0 && (n.globalNotFound = a.g)
}
async function O2(n) {
    window.$_TSR || Lt();
    const a = n.options.serializationAdapters;
    if (a?.length) {
        const w = new Map;
        a.forEach(A => {
            w.set(A.key, A.fromSerializable)
        }
        ),
        window.$_TSR.t = w,
        window.$_TSR.buffer.forEach(A => A())
    }
    window.$_TSR.initialized = !0,
    window.$_TSR.router || Lt();
    const s = window.$_TSR.router;
    s.matches.forEach(w => {
        w.i = Ty(w.i)
    }
    ),
    s.lastMatchId && (s.lastMatchId = Ty(s.lastMatchId));
    const {manifest: l, dehydratedData: u, lastMatchId: f} = s;
    n.ssr = {
        manifest: l
    };
    const d = document.querySelector('meta[property="csp-nonce"]')?.content;
    n.options.ssr = {
        nonce: d
    };
    const h = n.matchRoutes(n.stores.location.get())
      , y = Promise.all(h.map(w => n.loadRouteChunk(n.looseRoutesById[w.routeId])));
    function p(w) {
        const A = n.looseRoutesById[w.routeId].options.pendingMinMs ?? n.options.defaultPendingMinMs;
        if (A) {
            const B = si();
            w._nonReactive.minPendingPromise = B,
            w._forcePending = !0,
            setTimeout( () => {
                B.resolve(),
                n.updateMatch(w.id, Z => (Z._nonReactive.minPendingPromise = void 0,
                {
                    ...Z,
                    _forcePending: void 0
                }))
            }
            , A)
        }
    }
    function v(w) {
        const A = n.looseRoutesById[w.routeId];
        A && (A.options.ssr = w.ssr)
    }
    let g;
    h.forEach(w => {
        const A = s.matches.find(B => B.i === w.id);
        if (!A) {
            w._nonReactive.dehydrated = !1,
            w.ssr = !1,
            v(w);
            return
        }
        C2(w, A),
        v(w),
        w._nonReactive.dehydrated = w.ssr !== !1,
        (w.ssr === "data-only" || w.ssr === !1) && g === void 0 && (g = w.index,
        p(w))
    }
    ),
    n.stores.setMatches(h),
    await n.options.hydrate?.(u);
    const _ = n.stores.matches.get()
      , x = n.stores.location.get();
    await Promise.all(_.map(async w => {
        try {
            const A = n.looseRoutesById[w.routeId]
              , B = _[w.index - 1]?.context ?? n.options.context;
            if (A.options.context) {
                const I = {
                    deps: w.loaderDeps,
                    params: w.params,
                    context: B ?? {},
                    location: x,
                    navigate: Q => n.navigate({
                        ...Q,
                        _fromLocation: x
                    }),
                    buildLocation: n.buildLocation,
                    cause: w.cause,
                    abortController: w.abortController,
                    preload: !1,
                    matches: h,
                    routeId: A.id
                };
                w.__routeContext = A.options.context(I) ?? void 0
            }
            w.context = {
                ...B,
                ...w.__routeContext,
                ...w.__beforeLoadContext
            };
            const Z = {
                ssr: n.options.ssr,
                matches: _,
                match: w,
                params: w.params,
                loaderData: w.loaderData
            }
              , H = await A.options.head?.(Z)
              , $ = await A.options.scripts?.(Z);
            w.meta = H?.meta,
            w.links = H?.links,
            w.headScripts = H?.scripts,
            w.styles = H?.styles,
            w.scripts = $
        } catch (A) {
            if (ht(A))
                w.error = {
                    isNotFound: !0
                },
                console.error(`NotFound error during hydration for routeId: ${w.routeId}`, A);
            else
                throw w.error = A,
                console.error(`Error during hydration for route ${w.routeId}:`, A),
                A
        }
    }
    ));
    const R = h[h.length - 1].id !== f;
    if (!h.some(w => w.ssr === !1) && !R)
        return h.forEach(w => {
            w._nonReactive.dehydrated = void 0
        }
        ),
        n.stores.resolvedLocation.set(n.stores.location.get()),
        y;
    const N = Promise.resolve().then( () => n.load()).catch(w => {
        console.error("Error during router hydration:", w)
    }
    );
    if (R) {
        const w = h[1];
        w || Lt(),
        p(w),
        w._displayPending = !0,
        w._nonReactive.displayPendingPromise = N,
        N.then( () => {
            n.batch( () => {
                n.stores.status.get() === "pending" && (n.stores.status.set("idle"),
                n.stores.resolvedLocation.set(n.stores.location.get())),
                n.updateMatch(w.id, A => ({
                    ...A,
                    _displayPending: void 0,
                    displayPendingPromise: void 0
                }))
            }
            )
        }
        )
    }
    return y
}
var cu = J.use
  , gr = typeof window < "u" ? J.useLayoutEffect : J.useEffect;
function ef(n) {
    const a = J.useRef({
        value: n,
        prev: null
    })
      , s = a.current.value;
    return n !== s && (a.current = {
        value: n,
        prev: s
    }),
    a.current.prev
}
function M2(n, a, s={}, l={}) {
    J.useEffect( () => {
        if (!n.current || l.disabled || typeof IntersectionObserver != "function")
            return;
        const u = new IntersectionObserver( ([f]) => {
            a(f)
        }
        ,s);
        return u.observe(n.current),
        () => {
            u.disconnect()
        }
    }
    , [a, s, l.disabled, n])
}
function N2(n) {
    const a = J.useRef(null);
    return J.useImperativeHandle(n, () => a.current, []),
    a
}
function z2({promise: n}) {
    if (cu)
        return cu(n);
    const a = E_(n);
    if (a[gn].status === "pending")
        throw a;
    if (a[gn].status === "error")
        throw a[gn].error;
    return a[gn].data
}
function j2(n) {
    const a = M.jsx(D2, {
        ...n
    });
    return n.fallback ? M.jsx(J.Suspense, {
        fallback: n.fallback,
        children: a
    }) : a
}
function D2(n) {
    const a = z2(n);
    return n.children(a)
}
function Df(n) {
    const a = n.errorComponent ?? Lf;
    return M.jsx(L2, {
        getResetKey: n.getResetKey,
        onCatch: n.onCatch,
        children: ({error: s, reset: l}) => s ? J.createElement(a, {
            error: s,
            reset: l
        }) : n.children
    })
}
var L2 = class extends J.Component {
    constructor(...n) {
        super(...n),
        this.state = {
            error: null
        }
    }
    static getDerivedStateFromProps(n, a) {
        const s = n.getResetKey();
        return a.error && a.resetKey !== s ? {
            resetKey: s,
            error: null
        } : {
            resetKey: s
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    reset() {
        this.setState({
            error: null
        })
    }
    componentDidCatch(n, a) {
        this.props.onCatch && this.props.onCatch(n, a)
    }
    render() {
        return this.props.children({
            error: this.state.error,
            reset: () => {
                this.reset()
            }
        })
    }
}
;
function Lf({error: n}) {
    const [a,s] = J.useState(!1);
    return M.jsxs("div", {
        style: {
            padding: ".5rem",
            maxWidth: "100%"
        },
        children: [M.jsxs("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: ".5rem"
            },
            children: [M.jsx("strong", {
                style: {
                    fontSize: "1rem"
                },
                children: "Something went wrong!"
            }), M.jsx("button", {
                style: {
                    appearance: "none",
                    fontSize: ".6em",
                    border: "1px solid currentColor",
                    padding: ".1rem .2rem",
                    fontWeight: "bold",
                    borderRadius: ".25rem"
                },
                onClick: () => s(l => !l),
                children: a ? "Hide Error" : "Show Error"
            })]
        }), M.jsx("div", {
            style: {
                height: ".25rem"
            }
        }), a ? M.jsx("div", {
            children: M.jsx("pre", {
                style: {
                    fontSize: ".7em",
                    border: "1px solid red",
                    borderRadius: ".25rem",
                    padding: ".3rem",
                    color: "red",
                    overflow: "auto"
                },
                children: n.message ? M.jsx("code", {
                    children: n.message
                }) : null
            })
        }) : null]
    })
}
function U2({children: n, fallback: a=null}) {
    return Uf() ? M.jsx(br.Fragment, {
        children: n
    }) : M.jsx(br.Fragment, {
        children: a
    })
}
function Uf() {
    return br.useSyncExternalStore(k2, () => !0, () => !1)
}
function k2() {
    return () => {}
}
var uv = J.createContext(null);
function St(n) {
    return J.useContext(uv)
}
var Ru = J.createContext(void 0)
  , B2 = J.createContext(void 0)
  , Fe = (n => (n[n.None = 0] = "None",
n[n.Mutable = 1] = "Mutable",
n[n.Watching = 2] = "Watching",
n[n.RecursedCheck = 4] = "RecursedCheck",
n[n.Recursed = 8] = "Recursed",
n[n.Dirty = 16] = "Dirty",
n[n.Pending = 32] = "Pending",
n))(Fe || {});
function H2({update: n, notify: a, unwatched: s}) {
    return {
        link: l,
        unlink: u,
        propagate: f,
        checkDirty: d,
        shallowPropagate: h
    };
    function l(p, v, g) {
        const _ = v.depsTail;
        if (_ !== void 0 && _.dep === p)
            return;
        const x = _ !== void 0 ? _.nextDep : v.deps;
        if (x !== void 0 && x.dep === p) {
            x.version = g,
            v.depsTail = x;
            return
        }
        const R = p.subsTail;
        if (R !== void 0 && R.version === g && R.sub === v)
            return;
        const N = v.depsTail = p.subsTail = {
            version: g,
            dep: p,
            sub: v,
            prevDep: _,
            nextDep: x,
            prevSub: R,
            nextSub: void 0
        };
        x !== void 0 && (x.prevDep = N),
        _ !== void 0 ? _.nextDep = N : v.deps = N,
        R !== void 0 ? R.nextSub = N : p.subs = N
    }
    function u(p, v=p.sub) {
        const g = p.dep
          , _ = p.prevDep
          , x = p.nextDep
          , R = p.nextSub
          , N = p.prevSub;
        return x !== void 0 ? x.prevDep = _ : v.depsTail = _,
        _ !== void 0 ? _.nextDep = x : v.deps = x,
        R !== void 0 ? R.prevSub = N : g.subsTail = N,
        N !== void 0 ? N.nextSub = R : (g.subs = R) === void 0 && s(g),
        x
    }
    function f(p) {
        let v = p.nextSub, g;
        e: do {
            const _ = p.sub;
            let x = _.flags;
            if (x & 60 ? x & 12 ? x & 4 ? !(x & 48) && y(p, _) ? (_.flags = x | 40,
            x &= 1) : x = 0 : _.flags = x & -9 | 32 : x = 0 : _.flags = x | 32,
            x & 2 && a(_),
            x & 1) {
                const R = _.subs;
                if (R !== void 0) {
                    const N = (p = R).nextSub;
                    N !== void 0 && (g = {
                        value: v,
                        prev: g
                    },
                    v = N);
                    continue
                }
            }
            if ((p = v) !== void 0) {
                v = p.nextSub;
                continue
            }
            for (; g !== void 0; )
                if (p = g.value,
                g = g.prev,
                p !== void 0) {
                    v = p.nextSub;
                    continue e
                }
            break
        } while (!0)
    }
    function d(p, v) {
        let g, _ = 0, x = !1;
        e: do {
            const R = p.dep
              , N = R.flags;
            if (v.flags & 16)
                x = !0;
            else if ((N & 17) === 17) {
                if (n(R)) {
                    const w = R.subs;
                    w.nextSub !== void 0 && h(w),
                    x = !0
                }
            } else if ((N & 33) === 33) {
                (p.nextSub !== void 0 || p.prevSub !== void 0) && (g = {
                    value: p,
                    prev: g
                }),
                p = R.deps,
                v = R,
                ++_;
                continue
            }
            if (!x) {
                const w = p.nextDep;
                if (w !== void 0) {
                    p = w;
                    continue
                }
            }
            for (; _--; ) {
                const w = v.subs
                  , A = w.nextSub !== void 0;
                if (A ? (p = g.value,
                g = g.prev) : p = w,
                x) {
                    if (n(v)) {
                        A && h(w),
                        v = p.sub;
                        continue
                    }
                    x = !1
                } else
                    v.flags &= -33;
                v = p.sub;
                const B = p.nextDep;
                if (B !== void 0) {
                    p = B;
                    continue e
                }
            }
            return x
        } while (!0)
    }
    function h(p) {
        do {
            const v = p.sub
              , g = v.flags;
            (g & 48) === 32 && (v.flags = g | 16,
            (g & 6) === 2 && a(v))
        } while ((p = p.nextSub) !== void 0)
    }
    function y(p, v) {
        let g = v.depsTail;
        for (; g !== void 0; ) {
            if (g === p)
                return !0;
            g = g.prevDep
        }
        return !1
    }
}
function q2(n, a, s) {
    const l = typeof n == "object"
      , u = l ? n : void 0;
    return {
        next: (l ? n.next : n)?.bind(u),
        error: (l ? n.error : a)?.bind(u),
        complete: (l ? n.complete : s)?.bind(u)
    }
}
const mf = [];
let iu = 0;
const {link: Cy, unlink: Z2, propagate: V2, checkDirty: ov, shallowPropagate: Oy} = H2({
    update(n) {
        return n._update()
    },
    notify(n) {
        mf[pf++] = n,
        n.flags &= ~Fe.Watching
    },
    unwatched(n) {
        n.depsTail !== void 0 && (n.depsTail = void 0,
        n.flags = Fe.Mutable | Fe.Dirty,
        fu(n))
    }
});
let $l = 0, pf = 0, yn, yf = 0;
function cv(n) {
    try {
        ++yf,
        n()
    } finally {
        --yf || fv()
    }
}
function fu(n) {
    const a = n.depsTail;
    let s = a !== void 0 ? a.nextDep : n.deps;
    for (; s !== void 0; )
        s = Z2(s, n)
}
function fv() {
    if (!(yf > 0)) {
        for (; $l < pf; ) {
            const n = mf[$l];
            mf[$l++] = void 0,
            n.notify()
        }
        $l = 0,
        pf = 0
    }
}
function My(n, a) {
    const s = typeof n == "function"
      , l = n
      , u = {
        _snapshot: s ? void 0 : n,
        subs: void 0,
        subsTail: void 0,
        deps: void 0,
        depsTail: void 0,
        flags: s ? Fe.None : Fe.Mutable,
        get() {
            return yn !== void 0 && Cy(u, yn, iu),
            u._snapshot
        },
        subscribe(f) {
            const d = q2(f)
              , h = {
                current: !1
            }
              , y = Y2( () => {
                u.get(),
                h.current ? d.next?.(u._snapshot) : h.current = !0
            }
            );
            return {
                unsubscribe: () => {
                    y.stop()
                }
            }
        },
        _update(f) {
            const d = yn
              , h = a?.compare ?? Object.is;
            if (s)
                yn = u,
                ++iu,
                u.depsTail = void 0;
            else if (f === void 0)
                return !1;
            s && (u.flags = Fe.Mutable | Fe.RecursedCheck);
            try {
                const y = u._snapshot
                  , p = typeof f == "function" ? f(y) : f === void 0 && s ? l(y) : f;
                return y === void 0 || !h(y, p) ? (u._snapshot = p,
                !0) : !1
            } finally {
                yn = d,
                s && (u.flags &= ~Fe.RecursedCheck),
                fu(u)
            }
        }
    };
    return s ? (u.flags = Fe.Mutable | Fe.Dirty,
    u.get = function() {
        const f = u.flags;
        if (f & Fe.Dirty || f & Fe.Pending && ov(u.deps, u)) {
            if (u._update()) {
                const d = u.subs;
                d !== void 0 && Oy(d)
            }
        } else
            f & Fe.Pending && (u.flags = f & ~Fe.Pending);
        return yn !== void 0 && Cy(u, yn, iu),
        u._snapshot
    }
    ) : u.set = function(f) {
        if (u._update(f)) {
            const d = u.subs;
            d !== void 0 && (V2(d),
            Oy(d),
            fv())
        }
    }
    ,
    u
}
function Y2(n) {
    const a = () => {
        const l = yn;
        yn = s,
        ++iu,
        s.depsTail = void 0,
        s.flags = Fe.Watching | Fe.RecursedCheck;
        try {
            return n()
        } finally {
            yn = l,
            s.flags &= ~Fe.RecursedCheck,
            fu(s)
        }
    }
      , s = {
        deps: void 0,
        depsTail: void 0,
        subs: void 0,
        subsTail: void 0,
        flags: Fe.Watching | Fe.RecursedCheck,
        notify() {
            const l = this.flags;
            l & Fe.Dirty || l & Fe.Pending && ov(this.deps, this) ? a() : this.flags = Fe.Watching
        },
        stop() {
            this.flags = Fe.None,
            this.depsTail = void 0,
            fu(this)
        }
    };
    return a(),
    s
}
var tf = {
    exports: {}
}
  , nf = {}
  , af = {
    exports: {}
}
  , sf = {};
var Ny;
function G2() {
    if (Ny)
        return sf;
    Ny = 1;
    var n = Cr();
    function a(g, _) {
        return g === _ && (g !== 0 || 1 / g === 1 / _) || g !== g && _ !== _
    }
    var s = typeof Object.is == "function" ? Object.is : a
      , l = n.useState
      , u = n.useEffect
      , f = n.useLayoutEffect
      , d = n.useDebugValue;
    function h(g, _) {
        var x = _()
          , R = l({
            inst: {
                value: x,
                getSnapshot: _
            }
        })
          , N = R[0].inst
          , w = R[1];
        return f(function() {
            N.value = x,
            N.getSnapshot = _,
            y(N) && w({
                inst: N
            })
        }, [g, x, _]),
        u(function() {
            return y(N) && w({
                inst: N
            }),
            g(function() {
                y(N) && w({
                    inst: N
                })
            })
        }, [g]),
        d(x),
        x
    }
    function y(g) {
        var _ = g.getSnapshot;
        g = g.value;
        try {
            var x = _();
            return !s(g, x)
        } catch {
            return !0
        }
    }
    function p(g, _) {
        return _()
    }
    var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : h;
    return sf.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : v,
    sf
}
var zy;
function Q2() {
    return zy || (zy = 1,
    af.exports = G2()),
    af.exports
}
var jy;
function X2() {
    if (jy)
        return nf;
    jy = 1;
    var n = Cr()
      , a = Q2();
    function s(p, v) {
        return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v
    }
    var l = typeof Object.is == "function" ? Object.is : s
      , u = a.useSyncExternalStore
      , f = n.useRef
      , d = n.useEffect
      , h = n.useMemo
      , y = n.useDebugValue;
    return nf.useSyncExternalStoreWithSelector = function(p, v, g, _, x) {
        var R = f(null);
        if (R.current === null) {
            var N = {
                hasValue: !1,
                value: null
            };
            R.current = N
        } else
            N = R.current;
        R = h(function() {
            function A(I) {
                if (!B) {
                    if (B = !0,
                    Z = I,
                    I = _(I),
                    x !== void 0 && N.hasValue) {
                        var Q = N.value;
                        if (x(Q, I))
                            return H = Q
                    }
                    return H = I
                }
                if (Q = H,
                l(Z, I))
                    return Q;
                var X = _(I);
                return x !== void 0 && x(Q, X) ? (Z = I,
                Q) : (Z = I,
                H = X)
            }
            var B = !1, Z, H, $ = g === void 0 ? null : g;
            return [function() {
                return A(v())
            }
            , $ === null ? void 0 : function() {
                return A($())
            }
            ]
        }, [v, g, _, x]);
        var w = u(p, R[0], R[1]);
        return d(function() {
            N.hasValue = !0,
            N.value = w
        }, [w]),
        y(w),
        w
    }
    ,
    nf
}
var Dy;
function P2() {
    return Dy || (Dy = 1,
    tf.exports = X2()),
    tf.exports
}
var K2 = P2();
function F2(n, a) {
    return n === a
}
function lt(n, a, s=F2) {
    const l = J.useCallback(d => {
        if (!n)
            return () => {}
            ;
        const {unsubscribe: h} = n.subscribe(d);
        return h
    }
    , [n])
      , u = J.useCallback( () => n?.get(), [n]);
    return K2.useSyncExternalStoreWithSelector(l, u, u, a, s)
}
var I2 = {
    get: () => {}
    ,
    subscribe: () => ({
        unsubscribe: () => {}
    })
};
function fi(n) {
    const a = St()
      , s = J.useContext(n.from ? B2 : Ru)
      , l = n.from ?? s
      , u = l ? n.from ? a.stores.getRouteMatchStore(l) : a.stores.matchStores.get(l) : void 0
      , f = J.useRef(void 0);
    return lt(u ?? I2, d => {
        if ((n.shouldThrow ?? !0) && !d && Lt(),
        d === void 0)
            return;
        const h = n.select ? n.select(d) : d;
        if (n.structuralSharing ?? a.options.defaultStructuralSharing) {
            const y = ei(f.current, h);
            return f.current = y,
            y
        }
        return h
    }
    )
}
function dv(n) {
    return fi({
        from: n.from,
        strict: n.strict,
        structuralSharing: n.structuralSharing,
        select: a => n.select ? n.select(a.loaderData) : a.loaderData
    })
}
function hv(n) {
    const {select: a, ...s} = n;
    return fi({
        ...s,
        select: l => a ? a(l.loaderDeps) : l.loaderDeps
    })
}
function mv(n) {
    return fi({
        from: n.from,
        shouldThrow: n.shouldThrow,
        structuralSharing: n.structuralSharing,
        strict: n.strict,
        select: a => {
            const s = n.strict === !1 ? a.params : a._strictParams;
            return n.select ? n.select(s) : s
        }
    })
}
function pv(n) {
    return fi({
        from: n.from,
        strict: n.strict,
        shouldThrow: n.shouldThrow,
        structuralSharing: n.structuralSharing,
        select: a => n.select ? n.select(a.search) : a.search
    })
}
function kf(n) {
    const a = St();
    return J.useCallback(s => a.navigate({
        ...s,
        from: s.from ?? n?.from
    }), [n?.from, a])
}
function yv(n) {
    return fi({
        ...n,
        select: a => n.select ? n.select(a.context) : a.context
    })
}
var J2 = dg();
function $2(n, a) {
    const s = St()
      , l = N2(a)
      , {activeProps: u, inactiveProps: f, activeOptions: d, to: h, preload: y, preloadDelay: p, preloadIntentProximity: v, hashScrollIntoView: g, replace: _, startTransition: x, resetScroll: R, viewTransition: N, children: w, target: A, disabled: B, style: Z, className: H, onClick: $, onBlur: I, onFocus: Q, onMouseEnter: X, onMouseLeave: W, onTouchStart: ce, ignoreBlocker: re, params: _e, search: Le, hash: $e, state: Qe, mask: k, reloadDocument: K, unsafeRelative: oe, from: ze, _fromLocation: De, ...O} = n
      , Y = Uf()
      , F = J.useMemo( () => n, [s, n.from, n._fromLocation, n.hash, n.to, n.search, n.params, n.state, n.mask, n.unsafeRelative])
      , ee = lt(s.stores.location, Ge => Ge, (Ge, mt) => Ge.href === mt.href)
      , le = J.useMemo( () => {
        const Ge = {
            _fromLocation: ee,
            ...F
        };
        return s.buildLocation(Ge)
    }
    , [s, ee, F])
      , ge = le.maskedLocation ? le.maskedLocation.publicHref : le.publicHref
      , Ae = le.maskedLocation ? le.maskedLocation.external : le.external
      , We = J.useMemo( () => iw(ge, Ae, s.history, B), [B, Ae, ge, s.history])
      , Ze = J.useMemo( () => {
        if (We?.external)
            return su(We.href, s.protocolAllowlist) ? void 0 : We.href;
        if (!sw(h) && !(typeof h != "string" || h.indexOf(":") === -1))
            try {
                return new URL(h),
                su(h, s.protocolAllowlist) ? void 0 : h
            } catch {}
    }
    , [h, We, s.protocolAllowlist])
      , bn = J.useMemo( () => {
        if (Ze)
            return !1;
        if (d?.exact) {
            if (!VS(ee.pathname, le.pathname, s.basepath))
                return !1
        } else {
            const Ge = ru(ee.pathname, s.basepath)
              , mt = ru(le.pathname, s.basepath);
            if (!(Ge.startsWith(mt) && (Ge.length === mt.length || Ge[mt.length] === "/")))
                return !1
        }
        return (d?.includeSearch ?? !0) && !jt(ee.search, le.search, {
            partial: !d?.exact,
            ignoreUndefined: !d?.explicitUndefined
        }) ? !1 : d?.includeHash ? Y && ee.hash === le.hash : !0
    }
    , [d?.exact, d?.explicitUndefined, d?.includeHash, d?.includeSearch, ee, Ze, Y, le.hash, le.pathname, le.search, s.basepath])
      , Sn = bn ? _a(u, {}) ?? W2 : rf
      , Xn = bn ? rf : _a(f, {}) ?? rf
      , ms = [H, Sn.className, Xn.className].filter(Boolean).join(" ")
      , cn = (Z || Sn.style || Xn.style) && {
        ...Z,
        ...Sn.style,
        ...Xn.style
    }
      , [ps,hi] = J.useState(!1)
      , Mr = J.useRef(!1)
      , _n = n.reloadDocument || Ze ? !1 : y ?? s.options.defaultPreload
      , Da = p ?? s.options.defaultPreloadDelay ?? 0
      , an = J.useCallback( () => {
        s.preloadRoute({
            ...F,
            _builtLocation: le
        }).catch(Ge => {
            console.warn(Ge),
            console.warn(R_)
        }
        )
    }
    , [s, F, le]);
    M2(l, J.useCallback(Ge => {
        Ge?.isIntersecting && an()
    }
    , [an]), aw, {
        disabled: !!B || _n !== "viewport"
    }),
    J.useEffect( () => {
        Mr.current || !B && _n === "render" && (an(),
        Mr.current = !0)
    }
    , [B, an, _n]);
    const ys = Ge => {
        const mt = Ge.currentTarget.getAttribute("target")
          , fn = A !== void 0 ? A : mt;
        if (!B && !rw(Ge) && !Ge.defaultPrevented && (!fn || fn === "_self") && Ge.button === 0) {
            Ge.preventDefault(),
            J2.flushSync( () => {
                hi(!0)
            }
            );
            const mi = s.subscribe("onResolved", () => {
                mi(),
                hi(!1)
            }
            );
            s.navigate({
                ...F,
                replace: _,
                resetScroll: R,
                hashScrollIntoView: g,
                startTransition: x,
                viewTransition: N,
                ignoreBlocker: re
            })
        }
    }
    ;
    if (Ze)
        return {
            ...O,
            ref: l,
            href: Ze,
            ...w && {
                children: w
            },
            ...A && {
                target: A
            },
            ...B && {
                disabled: B
            },
            ...Z && {
                style: Z
            },
            ...H && {
                className: H
            },
            ...$ && {
                onClick: $
            },
            ...I && {
                onBlur: I
            },
            ...Q && {
                onFocus: Q
            },
            ...X && {
                onMouseEnter: X
            },
            ...W && {
                onMouseLeave: W
            },
            ...ce && {
                onTouchStart: ce
            }
        };
    const Nr = Ge => {
        if (B || _n !== "intent")
            return;
        if (!Da) {
            an();
            return
        }
        const mt = Ge.currentTarget;
        if (yr.has(mt))
            return;
        const fn = setTimeout( () => {
            yr.delete(mt),
            an()
        }
        , Da);
        yr.set(mt, fn)
    }
      , Tu = Ge => {
        B || _n !== "intent" || an()
    }
      , _t = Ge => {
        if (B || !_n || !Da)
            return;
        const mt = Ge.currentTarget
          , fn = yr.get(mt);
        fn && (clearTimeout(fn),
        yr.delete(mt))
    }
    ;
    return {
        ...O,
        ...Sn,
        ...Xn,
        href: We?.href,
        ref: l,
        onClick: Wi([$, ys]),
        onBlur: Wi([I, _t]),
        onFocus: Wi([Q, Nr]),
        onMouseEnter: Wi([X, Nr]),
        onMouseLeave: Wi([W, _t]),
        onTouchStart: Wi([ce, Tu]),
        disabled: !!B,
        target: A,
        ...cn && {
            style: cn
        },
        ...ms && {
            className: ms
        },
        ...B && ew,
        ...bn && tw,
        ...Y && ps && nw
    }
}
var rf = {}
  , W2 = {
    className: "active"
}
  , ew = {
    role: "link",
    "aria-disabled": !0
}
  , tw = {
    "data-status": "active",
    "aria-current": "page"
}
  , nw = {
    "data-transitioning": "transitioning"
}
  , yr = new WeakMap
  , aw = {
    rootMargin: "100px"
}
  , Wi = n => a => {
    for (const s of n)
        if (s) {
            if (a.defaultPrevented)
                return;
            s(a)
        }
}
;
function iw(n, a, s, l) {
    if (!l)
        return a ? {
            href: n,
            external: !0
        } : {
            href: s.createHref(n) || "/",
            external: !1
        }
}
function sw(n) {
    if (typeof n != "string")
        return !1;
    const a = n.charCodeAt(0);
    return a === 47 ? n.charCodeAt(1) !== 47 : a === 46
}
var Et = J.forwardRef( (n, a) => {
    const {_asChild: s, ...l} = n
      , {type: u, ...f} = $2(l, a)
      , d = typeof l.children == "function" ? l.children({
        isActive: f["data-status"] === "active"
    }) : l.children;
    if (!s) {
        const {disabled: h, ...y} = f;
        return J.createElement("a", y, d)
    }
    return J.createElement(s, f, d)
}
);
function rw(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
var lw = class extends Ag {
    constructor(a) {
        super(a),
        this.useMatch = s => fi({
            select: s?.select,
            from: this.id,
            structuralSharing: s?.structuralSharing
        }),
        this.useRouteContext = s => yv({
            ...s,
            from: this.id
        }),
        this.useSearch = s => pv({
            select: s?.select,
            structuralSharing: s?.structuralSharing,
            from: this.id
        }),
        this.useParams = s => mv({
            select: s?.select,
            structuralSharing: s?.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = s => hv({
            ...s,
            from: this.id
        }),
        this.useLoaderData = s => dv({
            ...s,
            from: this.id
        }),
        this.useNavigate = () => kf({
            from: this.fullPath
        }),
        this.Link = br.forwardRef( (s, l) => M.jsx(Et, {
            ref: l,
            from: this.fullPath,
            ...s
        }))
    }
}
;
function uw(n) {
    return new lw(n)
}
function ow() {
    return n => fw(n)
}
var cw = class extends O_ {
    constructor(n) {
        super(n),
        this.useMatch = a => fi({
            select: a?.select,
            from: this.id,
            structuralSharing: a?.structuralSharing
        }),
        this.useRouteContext = a => yv({
            ...a,
            from: this.id
        }),
        this.useSearch = a => pv({
            select: a?.select,
            structuralSharing: a?.structuralSharing,
            from: this.id
        }),
        this.useParams = a => mv({
            select: a?.select,
            structuralSharing: a?.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = a => hv({
            ...a,
            from: this.id
        }),
        this.useLoaderData = a => dv({
            ...a,
            from: this.id
        }),
        this.useNavigate = () => kf({
            from: this.fullPath
        }),
        this.Link = br.forwardRef( (a, s) => M.jsx(Et, {
            ref: s,
            from: this.fullPath,
            ...a
        }))
    }
}
;
function fw(n) {
    return new cw(n)
}
function hs(n) {
    return new dw(n,{
        silent: !0
    }).createRoute
}
var dw = class {
    constructor(n, a) {
        this.path = n,
        this.createRoute = s => {
            const l = uw(s);
            return l.isRoot = !1,
            l
        }
        ,
        this.silent = a?.silent
    }
}
;
function ri(n, a) {
    let s, l, u, f;
    const d = () => (s || (s = n().then(y => {
        s = void 0,
        l = y[a ?? "default"]
    }
    ).catch(y => {
        if (u = y,
        wS(u) && u instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
            const p = `tanstack_router_reload:${u.message}`;
            sessionStorage.getItem(p) || (sessionStorage.setItem(p, "1"),
            f = !0)
        }
    }
    )),
    s)
      , h = function(p) {
        if (f)
            throw window.location.reload(),
            new Promise( () => {}
            );
        if (u)
            throw u;
        if (!l)
            if (cu)
                cu(d());
            else
                throw d();
        return J.createElement(l, p)
    };
    return h.preload = d,
    h
}
function hw(n) {
    const a = St()
      , s = `not-found-${lt(a.stores.location, l => l.pathname)}-${lt(a.stores.status, l => l)}`;
    return M.jsx(Df, {
        getResetKey: () => s,
        onCatch: (l, u) => {
            if (ht(l))
                n.onCatch?.(l, u);
            else
                throw l
        }
        ,
        errorComponent: ({error: l}) => {
            if (ht(l))
                return n.fallback?.(l);
            throw l
        }
        ,
        children: n.children
    })
}
function mw() {
    return M.jsx("p", {
        children: "Not Found"
    })
}
function es(n) {
    return M.jsx(M.Fragment, {
        children: n.children
    })
}
function gv(n, a, s) {
    return a.options.notFoundComponent ? M.jsx(a.options.notFoundComponent, {
        ...s
    }) : n.options.defaultNotFoundComponent ? M.jsx(n.options.defaultNotFoundComponent, {
        ...s
    }) : M.jsx(mw, {})
}
function pw(n) {
    return null
}
function yw() {
    return pw(St()),
    null
}
var vv = J.memo(function({matchId: a}) {
    const s = St()
      , l = s.stores.matchStores.get(a);
    l || Lt();
    const u = lt(s.stores.loadedAt, d => d)
      , f = lt(l, d => d);
    return M.jsx(gw, {
        router: s,
        matchId: a,
        resetKey: u,
        matchState: J.useMemo( () => {
            const d = f.routeId
              , h = s.routesById[d].parentRoute?.id;
            return {
                routeId: d,
                ssr: f.ssr,
                _displayPending: f._displayPending,
                parentRouteId: h
            }
        }
        , [f._displayPending, f.routeId, f.ssr, s.routesById])
    })
});
function gw({router: n, matchId: a, resetKey: s, matchState: l}) {
    const u = n.routesById[l.routeId]
      , f = u.options.pendingComponent ?? n.options.defaultPendingComponent
      , d = f ? M.jsx(f, {}) : null
      , h = u.options.errorComponent ?? n.options.defaultErrorComponent
      , y = u.options.onCatch ?? n.options.defaultOnCatch
      , p = u.isRoot ? u.options.notFoundComponent ?? n.options.notFoundRoute?.options.component : u.options.notFoundComponent
      , v = l.ssr === !1 || l.ssr === "data-only"
      , g = (!u.isRoot || u.options.wrapInSuspense || v) && (u.options.wrapInSuspense ?? f ?? (u.options.errorComponent?.preload || v)) ? J.Suspense : es
      , _ = h ? Df : es
      , x = p ? hw : es;
    return M.jsxs(u.isRoot ? u.options.shellComponent ?? es : es, {
        children: [M.jsx(Ru.Provider, {
            value: a,
            children: M.jsx(g, {
                fallback: d,
                children: M.jsx(_, {
                    getResetKey: () => s,
                    errorComponent: h || Lf,
                    onCatch: (R, N) => {
                        if (ht(R))
                            throw R.routeId ??= l.routeId,
                            R;
                        y?.(R, N)
                    }
                    ,
                    children: M.jsx(x, {
                        fallback: R => {
                            if (R.routeId ??= l.routeId,
                            !p || R.routeId && R.routeId !== l.routeId || !R.routeId && !u.isRoot)
                                throw R;
                            return J.createElement(p, R)
                        }
                        ,
                        children: v || l._displayPending ? M.jsx(U2, {
                            fallback: d,
                            children: M.jsx(Ly, {
                                matchId: a
                            })
                        }) : M.jsx(Ly, {
                            matchId: a
                        })
                    })
                })
            })
        }), l.parentRouteId === ai ? M.jsxs(M.Fragment, {
            children: [M.jsx(vw, {
                resetKey: s
            }), n.options.scrollRestoration && mg ? M.jsx(yw, {}) : null]
        }) : null]
    })
}
function vw({resetKey: n}) {
    const a = St()
      , s = J.useRef(void 0);
    return gr( () => {
        const l = a.latestLocation.href;
        (s.current === void 0 || s.current !== l) && (a.emit({
            type: "onRendered",
            ...is(a.stores.location.get(), a.stores.resolvedLocation.get())
        }),
        s.current = l)
    }
    , [a.latestLocation.state.__TSR_key, n, a]),
    null
}
var Ly = J.memo(function({matchId: a}) {
    const s = St()
      , l = (v, g) => s.getMatch(v.id)?._nonReactive[g] ?? v._nonReactive[g]
      , u = s.stores.matchStores.get(a);
    u || Lt();
    const f = lt(u, v => v)
      , d = f.routeId
      , h = s.routesById[d]
      , y = J.useMemo( () => {
        const v = (s.routesById[d].options.remountDeps ?? s.options.defaultRemountDeps)?.({
            routeId: d,
            loaderDeps: f.loaderDeps,
            params: f._strictParams,
            search: f._strictSearch
        });
        return v ? JSON.stringify(v) : void 0
    }
    , [d, f.loaderDeps, f._strictParams, f._strictSearch, s.options.defaultRemountDeps, s.routesById])
      , p = J.useMemo( () => {
        const v = h.options.component ?? s.options.defaultComponent;
        return v ? M.jsx(v, {}, y) : M.jsx(bv, {})
    }
    , [y, h.options.component, s.options.defaultComponent]);
    if (f._displayPending)
        throw l(f, "displayPendingPromise");
    if (f._forcePending)
        throw l(f, "minPendingPromise");
    if (f.status === "pending") {
        const v = h.options.pendingMinMs ?? s.options.defaultPendingMinMs;
        if (v) {
            const g = s.getMatch(f.id);
            if (g && !g._nonReactive.minPendingPromise) {
                const _ = si();
                g._nonReactive.minPendingPromise = _,
                setTimeout( () => {
                    _.resolve(),
                    g._nonReactive.minPendingPromise = void 0
                }
                , v)
            }
        }
        throw l(f, "loadPromise")
    }
    if (f.status === "notFound")
        return ht(f.error) || Lt(),
        gv(s, h, f.error);
    if (f.status === "redirected")
        throw Dt(f.error) || Lt(),
        l(f, "loadPromise");
    if (f.status === "error")
        throw f.error;
    return p
})
  , bv = J.memo(function() {
    const a = St()
      , s = J.useContext(Ru);
    let l, u = !1, f;
    {
        const p = s ? a.stores.matchStores.get(s) : void 0;
        [l,u] = lt(p, v => [v?.routeId, v?.globalNotFound ?? !1]),
        f = lt(a.stores.matchesId, v => v[v.findIndex(g => g === s) + 1])
    }
    const d = l ? a.routesById[l] : void 0
      , h = a.options.defaultPendingComponent ? M.jsx(a.options.defaultPendingComponent, {}) : null;
    if (u)
        return d || Lt(),
        gv(a, d, void 0);
    if (!f)
        return null;
    const y = M.jsx(vv, {
        matchId: f
    });
    return l === ai ? M.jsx(J.Suspense, {
        fallback: h,
        children: y
    }) : y
});
function bw() {
    const n = St()
      , a = J.useRef({
        router: n,
        mounted: !1
    })
      , [s,l] = J.useState(!1)
      , u = lt(n.stores.isLoading, g => g)
      , f = lt(n.stores.hasPending, g => g)
      , d = ef(u)
      , h = u || s || f
      , y = ef(h)
      , p = u || f
      , v = ef(p);
    return n.startTransition = g => {
        l(!0),
        J.startTransition( () => {
            g(),
            l(!1)
        }
        )
    }
    ,
    J.useEffect( () => {
        const g = n.history.subscribe(n.load)
          , _ = n.buildLocation({
            to: n.latestLocation.pathname,
            search: !0,
            params: !0,
            hash: !0,
            state: !0,
            _includeValidateSearch: !0
        });
        return Ea(n.latestLocation.publicHref) !== Ea(_.publicHref) && n.commitLocation({
            ..._,
            replace: !0
        }),
        () => {
            g()
        }
    }
    , [n, n.history]),
    gr( () => {
        if (typeof window < "u" && n.ssr || a.current.router === n && a.current.mounted)
            return;
        a.current = {
            router: n,
            mounted: !0
        },
        (async () => {
            try {
                await n.load()
            } catch (_) {
                console.error(_)
            }
        }
        )()
    }
    , [n]),
    gr( () => {
        d && !u && n.emit({
            type: "onLoad",
            ...is(n.stores.location.get(), n.stores.resolvedLocation.get())
        })
    }
    , [d, n, u]),
    gr( () => {
        v && !p && n.emit({
            type: "onBeforeRouteMount",
            ...is(n.stores.location.get(), n.stores.resolvedLocation.get())
        })
    }
    , [p, v, n]),
    gr( () => {
        if (y && !h) {
            const g = is(n.stores.location.get(), n.stores.resolvedLocation.get());
            n.emit({
                type: "onResolved",
                ...g
            }),
            cv( () => {
                n.stores.status.set("idle"),
                n.stores.resolvedLocation.set(n.stores.location.get())
            }
            ),
            g.hrefChanged && M_(n)
        }
    }
    , [h, y, n]),
    null
}
function Sw() {
    const n = St()
      , a = n.routesById[ai].options.pendingComponent ?? n.options.defaultPendingComponent
      , s = a ? M.jsx(a, {}) : null
      , l = M.jsxs(typeof document < "u" && n.ssr ? es : J.Suspense, {
        fallback: s,
        children: [M.jsx(bw, {}), M.jsx(_w, {})]
    });
    return n.options.InnerWrap ? M.jsx(n.options.InnerWrap, {
        children: l
    }) : l
}
function _w() {
    const n = St()
      , a = lt(n.stores.firstId, u => u)
      , s = lt(n.stores.loadedAt, u => u)
      , l = a ? M.jsx(vv, {
        matchId: a
    }) : null;
    return M.jsx(Ru.Provider, {
        value: a,
        children: n.options.disableGlobalCatchBoundary ? l : M.jsx(Df, {
            getResetKey: () => s,
            errorComponent: Lf,
            onCatch: void 0,
            children: l
        })
    })
}
var xw = n => ({
    createMutableStore: My,
    createReadonlyStore: My,
    batch: cv
})
  , ww = n => new Ew(n)
  , Ew = class extends g_ {
    constructor(n) {
        super(n, xw)
    }
}
;
function Rw({router: n, children: a, ...s}) {
    Object.keys(s).length > 0 && n.update({
        ...n.options,
        ...s,
        context: {
            ...n.options.context,
            ...s.context
        }
    });
    const l = M.jsx(uv.Provider, {
        value: n,
        children: a
    });
    return n.options.Wrap ? M.jsx(n.options.Wrap, {
        children: l
    }) : l
}
function Aw({router: n, ...a}) {
    return M.jsx(Rw, {
        router: n,
        ...a,
        children: M.jsx(Sw, {})
    })
}
function Sv(n) {
    const {attrs: a, children: s, nonce: l} = n;
    switch (n.tag) {
    case "title":
        return M.jsx("title", {
            ...a,
            suppressHydrationWarning: !0,
            children: s
        });
    case "meta":
        return M.jsx("meta", {
            ...a,
            suppressHydrationWarning: !0
        });
    case "link":
        return M.jsx("link", {
            ...a,
            precedence: a?.precedence ?? (a?.rel === "stylesheet" ? "default" : void 0),
            nonce: l,
            suppressHydrationWarning: !0
        });
    case "style":
        return n.inlineCss,
        M.jsx("style", {
            ...a,
            dangerouslySetInnerHTML: {
                __html: s
            },
            nonce: l
        });
    case "script":
        return M.jsx(Tw, {
            attrs: a,
            children: s
        });
    default:
        return null
    }
}
function Tw({attrs: n, children: a}) {
    St();
    const s = Uf()
      , l = typeof n?.type == "string" && n.type !== "" && n.type !== "text/javascript" && n.type !== "module";
    if (J.useEffect( () => {
        if (!l) {
            if (n?.src) {
                const u = ( () => {
                    try {
                        const d = document.baseURI || window.location.href;
                        return new URL(n.src,d).href
                    } catch {
                        return n.src
                    }
                }
                )();
                if (Array.from(document.querySelectorAll("script[src]")).find(d => d.src === u))
                    return;
                const f = document.createElement("script");
                for (const [d,h] of Object.entries(n))
                    d !== "suppressHydrationWarning" && h !== void 0 && h !== !1 && f.setAttribute(d, typeof h == "boolean" ? "" : String(h));
                return document.head.appendChild(f),
                () => {
                    f.parentNode && f.parentNode.removeChild(f)
                }
            }
            if (typeof a == "string") {
                const u = typeof n?.type == "string" ? n.type : "text/javascript"
                  , f = typeof n?.nonce == "string" ? n.nonce : void 0;
                if (Array.from(document.querySelectorAll("script:not([src])")).find(h => {
                    if (!(h instanceof HTMLScriptElement))
                        return !1;
                    const y = h.getAttribute("type") ?? "text/javascript"
                      , p = h.getAttribute("nonce") ?? void 0;
                    return h.textContent === a && y === u && p === f
                }
                ))
                    return;
                const d = document.createElement("script");
                if (d.textContent = a,
                n)
                    for (const [h,y] of Object.entries(n))
                        h !== "suppressHydrationWarning" && y !== void 0 && y !== !1 && d.setAttribute(h, typeof y == "boolean" ? "" : String(y));
                return document.head.appendChild(d),
                () => {
                    d.parentNode && d.parentNode.removeChild(d)
                }
            }
        }
    }
    , [n, a, l]),
    l && typeof a == "string")
        return M.jsx("script", {
            ...n,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: a
            }
        });
    if (!s) {
        if (n?.src)
            return M.jsx("script", {
                ...n,
                suppressHydrationWarning: !0
            });
        if (typeof a == "string")
            return M.jsx("script", {
                ...n,
                dangerouslySetInnerHTML: {
                    __html: a
                },
                suppressHydrationWarning: !0
            })
    }
    return null
}
var Cw = n => {
    const a = St()
      , s = a.options.ssr?.nonce
      , l = lt(a.stores.matches, p => p.map(v => v.meta).filter(Boolean), jt)
      , u = J.useMemo( () => {
        const p = []
          , v = {};
        let g;
        for (let _ = l.length - 1; _ >= 0; _--) {
            const x = l[_];
            for (let R = x.length - 1; R >= 0; R--) {
                const N = x[R];
                if (N)
                    if (N.title)
                        g || (g = {
                            tag: "title",
                            children: N.title
                        });
                    else if ("script:ld+json"in N)
                        try {
                            const w = JSON.stringify(N["script:ld+json"]);
                            p.push({
                                tag: "script",
                                attrs: {
                                    type: "application/ld+json"
                                },
                                children: CS(w)
                            })
                        } catch {}
                    else {
                        const w = N.name ?? N.property;
                        if (w) {
                            if (v[w])
                                continue;
                            v[w] = !0
                        }
                        p.push({
                            tag: "meta",
                            attrs: {
                                ...N,
                                nonce: s
                            }
                        })
                    }
            }
        }
        return g && p.push(g),
        s && p.push({
            tag: "meta",
            attrs: {
                property: "csp-nonce",
                content: s
            }
        }),
        p.reverse(),
        p
    }
    , [l, s])
      , f = lt(a.stores.matches, p => {
        const v = p.map(x => x.links).filter(Boolean).flat(1).map(x => ({
            tag: "link",
            attrs: {
                ...x,
                nonce: s
            }
        }))
          , g = a.ssr?.manifest
          , _ = p.map(x => g?.routes[x.routeId]?.assets ?? []).filter(Boolean).flat(1).flatMap(x => x.tag === "link" ? C_(g, x) ? [] : [{
            tag: "link",
            attrs: {
                ...x.attrs,
                crossOrigin: my(n, "stylesheet") ?? x.attrs?.crossOrigin,
                suppressHydrationWarning: !0,
                nonce: s
            }
        }] : x.tag === "style" ? [{
            tag: "style",
            attrs: {
                ...x.attrs,
                nonce: s
            },
            children: x.children,
            ...x.inlineCss ? {
                inlineCss: !0
            } : {}
        }] : []);
        return [...v, ..._]
    }
    , jt)
      , d = lt(a.stores.matches, p => {
        const v = [];
        return p.map(g => a.looseRoutesById[g.routeId]).forEach(g => a.ssr?.manifest?.routes[g.id]?.preloads?.filter(Boolean).forEach(_ => {
            const x = A_(_);
            v.push({
                tag: "link",
                attrs: {
                    rel: "modulepreload",
                    href: x.href,
                    crossOrigin: my(n, "modulepreload") ?? x.crossOrigin,
                    nonce: s
                }
            })
        }
        )),
        v
    }
    , jt)
      , h = lt(a.stores.matches, p => p.map(v => v.styles).flat(1).filter(Boolean).map( ({children: v, ...g}) => ({
        tag: "style",
        attrs: {
            ...g,
            nonce: s
        },
        children: v
    })), jt)
      , y = lt(a.stores.matches, p => p.map(v => v.headScripts).flat(1).filter(Boolean).map( ({children: v, ...g}) => ({
        tag: "script",
        attrs: {
            ...g,
            nonce: s
        },
        children: v
    })), jt);
    return Ow([...u, ...d, ...f, ...h, ...y], p => JSON.stringify(p))
}
;
function Ow(n, a) {
    const s = new Set;
    return n.filter(l => {
        const u = a(l);
        return s.has(u) ? !1 : (s.add(u),
        !0)
    }
    )
}
function Mw(n) {
    const a = Cw(n.assetCrossOrigin)
      , s = St().options.ssr?.nonce;
    return M.jsx(M.Fragment, {
        children: a.map(l => J.createElement(Sv, {
            ...l,
            key: `tsr-meta-${JSON.stringify(l)}`,
            nonce: s
        }))
    })
}
var Nw = () => {
    const n = St()
      , a = n.options.ssr?.nonce
      , s = f => {
        const d = []
          , h = n.ssr?.manifest;
        return h ? (f.map(y => n.looseRoutesById[y.routeId]).forEach(y => h.routes[y.id]?.assets?.filter(p => p.tag === "script").forEach(p => {
            d.push({
                tag: "script",
                attrs: {
                    ...p.attrs,
                    nonce: a
                },
                children: p.children
            })
        }
        )),
        d) : []
    }
      , l = f => f.map(d => d.scripts).flat(1).filter(Boolean).map( ({children: d, ...h}) => ({
        tag: "script",
        attrs: {
            ...h,
            suppressHydrationWarning: !0,
            nonce: a
        },
        children: d
    }))
      , u = lt(n.stores.matches, s, jt);
    return zw(n, lt(n.stores.matches, l, jt), u)
}
;
function zw(n, a, s) {
    let l;
    n.serverSsr && (l = n.serverSsr.takeBufferedScripts());
    const u = [...a, ...s];
    return l && u.unshift(l),
    M.jsx(M.Fragment, {
        children: u.map( (f, d) => J.createElement(Sv, {
            ...f,
            key: `tsr-scripts-${f.tag}-${d}`
        }))
    })
}
var as = (n, a) => {
    const s = {
        type: "request",
        ...a || n
    };
    return {
        options: s,
        middleware: l => as({}, Object.assign(s, {
            middleware: l
        })),
        inputValidator: l => as({}, Object.assign(s, {
            inputValidator: l
        })),
        client: l => as({}, Object.assign(s, {
            client: l
        })),
        server: l => as({}, Object.assign(s, {
            server: l
        }))
    }
}
;
function _v(n, a) {
    for (let s = 0, l = a.length; s < l; s++) {
        const u = a[s];
        n.has(u) || (n.add(u),
        u.extends && _v(n, u.extends))
    }
}
var jw = n => ({
    getOptions: async () => {
        const a = await n();
        if (a.serializationAdapters) {
            const s = new Set;
            _v(s, a.serializationAdapters),
            a.serializationAdapters = Array.from(s)
        }
        return a
    }
    ,
    createMiddleware: as
});
const Dw = as()
  , Uy = jw( () => ({
    requestMiddleware: [Dw]
}));
var Au = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(n) {
        return this.listeners.add(n),
        this.onSubscribe(),
        () => {
            this.listeners.delete(n),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Lw = class extends Au {
    #e;
    #n;
    #t;
    constructor() {
        super(),
        this.#t = n => {
            if (typeof window < "u" && window.addEventListener) {
                const a = () => n();
                return window.addEventListener("visibilitychange", a, !1),
                () => {
                    window.removeEventListener("visibilitychange", a)
                }
            }
        }
    }
    onSubscribe() {
        this.#n || this.setEventListener(this.#t)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#n?.(),
        this.#n = void 0)
    }
    setEventListener(n) {
        this.#t = n,
        this.#n?.(),
        this.#n = n(a => {
            typeof a == "boolean" ? this.setFocused(a) : this.onFocus()
        }
        )
    }
    setFocused(n) {
        this.#e !== n && (this.#e = n,
        this.onFocus())
    }
    onFocus() {
        const n = this.isFocused();
        this.listeners.forEach(a => {
            a(n)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , xv = new Lw
  , Uw = {
    setTimeout: (n, a) => setTimeout(n, a),
    clearTimeout: n => clearTimeout(n),
    setInterval: (n, a) => setInterval(n, a),
    clearInterval: n => clearInterval(n)
}
  , kw = class {
    #e = Uw;
    #n = !1;
    setTimeoutProvider(n) {
        this.#e = n
    }
    setTimeout(n, a) {
        return this.#e.setTimeout(n, a)
    }
    clearTimeout(n) {
        this.#e.clearTimeout(n)
    }
    setInterval(n, a) {
        return this.#e.setInterval(n, a)
    }
    clearInterval(n) {
        this.#e.clearInterval(n)
    }
}
  , gf = new kw;
function Bw(n) {
    setTimeout(n, 0)
}
var Hw = typeof window > "u" || "Deno"in globalThis;
function un() {}
function qw(n, a) {
    return typeof n == "function" ? n(a) : n
}
function Zw(n) {
    return typeof n == "number" && n >= 0 && n !== 1 / 0
}
function Vw(n, a) {
    return Math.max(n + (a || 0) - Date.now(), 0)
}
function vf(n, a) {
    return typeof n == "function" ? n(a) : n
}
function Yw(n, a) {
    return typeof n == "function" ? n(a) : n
}
function ky(n, a) {
    const {type: s="all", exact: l, fetchStatus: u, predicate: f, queryKey: d, stale: h} = n;
    if (d) {
        if (l) {
            if (a.queryHash !== Bf(d, a.options))
                return !1
        } else if (!Ar(a.queryKey, d))
            return !1
    }
    if (s !== "all") {
        const y = a.isActive();
        if (s === "active" && !y || s === "inactive" && y)
            return !1
    }
    return !(typeof h == "boolean" && a.isStale() !== h || u && u !== a.state.fetchStatus || f && !f(a))
}
function By(n, a) {
    const {exact: s, status: l, predicate: u, mutationKey: f} = n;
    if (f) {
        if (!a.options.mutationKey)
            return !1;
        if (s) {
            if (Rr(a.options.mutationKey) !== Rr(f))
                return !1
        } else if (!Ar(a.options.mutationKey, f))
            return !1
    }
    return !(l && a.state.status !== l || u && !u(a))
}
function Bf(n, a) {
    return (a?.queryKeyHashFn || Rr)(n)
}
function Rr(n) {
    return JSON.stringify(n, (a, s) => bf(s) ? Object.keys(s).sort().reduce( (l, u) => (l[u] = s[u],
    l), {}) : s)
}
function Ar(n, a) {
    return n === a ? !0 : typeof n != typeof a ? !1 : n && a && typeof n == "object" && typeof a == "object" ? Object.keys(a).every(s => Ar(n[s], a[s])) : !1
}
var Gw = Object.prototype.hasOwnProperty;
function wv(n, a, s=0) {
    if (n === a)
        return n;
    if (s > 500)
        return a;
    const l = Hy(n) && Hy(a);
    if (!l && !(bf(n) && bf(a)))
        return a;
    const f = (l ? n : Object.keys(n)).length
      , d = l ? a : Object.keys(a)
      , h = d.length
      , y = l ? new Array(h) : {};
    let p = 0;
    for (let v = 0; v < h; v++) {
        const g = l ? v : d[v]
          , _ = n[g]
          , x = a[g];
        if (_ === x) {
            y[g] = _,
            (l ? v < f : Gw.call(n, g)) && p++;
            continue
        }
        if (_ === null || x === null || typeof _ != "object" || typeof x != "object") {
            y[g] = x;
            continue
        }
        const R = wv(_, x, s + 1);
        y[g] = R,
        R === _ && p++
    }
    return f === h && p === f ? n : y
}
function Hy(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}
function bf(n) {
    if (!qy(n))
        return !1;
    const a = n.constructor;
    if (a === void 0)
        return !0;
    const s = a.prototype;
    return !(!qy(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(n) !== Object.prototype)
}
function qy(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function Qw(n) {
    return new Promise(a => {
        gf.setTimeout(a, n)
    }
    )
}
function Xw(n, a, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(n, a) : s.structuralSharing !== !1 ? wv(n, a) : a
}
function Pw(n, a, s=0) {
    const l = [...n, a];
    return s && l.length > s ? l.slice(1) : l
}
function Kw(n, a, s=0) {
    const l = [a, ...n];
    return s && l.length > s ? l.slice(0, -1) : l
}
var Hf = Symbol();
function Ev(n, a) {
    return !n.queryFn && a?.initialPromise ? () => a.initialPromise : !n.queryFn || n.queryFn === Hf ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)) : n.queryFn
}
function Fw(n, a, s) {
    let l = !1, u;
    return Object.defineProperty(n, "signal", {
        enumerable: !0,
        get: () => (u ??= a(),
        l || (l = !0,
        u.aborted ? s() : u.addEventListener("abort", s, {
            once: !0
        })),
        u)
    }),
    n
}
var Rv = ( () => {
    let n = () => Hw;
    return {
        isServer() {
            return n()
        },
        setIsServer(a) {
            n = a
        }
    }
}
)();
function Iw() {
    let n, a;
    const s = new Promise( (u, f) => {
        n = u,
        a = f
    }
    );
    s.status = "pending",
    s.catch( () => {}
    );
    function l(u) {
        Object.assign(s, u),
        delete s.resolve,
        delete s.reject
    }
    return s.resolve = u => {
        l({
            status: "fulfilled",
            value: u
        }),
        n(u)
    }
    ,
    s.reject = u => {
        l({
            status: "rejected",
            reason: u
        }),
        a(u)
    }
    ,
    s
}
var Jw = Bw;
function $w() {
    let n = []
      , a = 0
      , s = h => {
        h()
    }
      , l = h => {
        h()
    }
      , u = Jw;
    const f = h => {
        a ? n.push(h) : u( () => {
            s(h)
        }
        )
    }
      , d = () => {
        const h = n;
        n = [],
        h.length && u( () => {
            l( () => {
                h.forEach(y => {
                    s(y)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: h => {
            let y;
            a++;
            try {
                y = h()
            } finally {
                a--,
                a || d()
            }
            return y
        }
        ,
        batchCalls: h => (...y) => {
            f( () => {
                h(...y)
            }
            )
        }
        ,
        schedule: f,
        setNotifyFunction: h => {
            s = h
        }
        ,
        setBatchNotifyFunction: h => {
            l = h
        }
        ,
        setScheduler: h => {
            u = h
        }
    }
}
var Rt = $w()
  , Ww = class extends Au {
    #e = !0;
    #n;
    #t;
    constructor() {
        super(),
        this.#t = n => {
            if (typeof window < "u" && window.addEventListener) {
                const a = () => n(!0)
                  , s = () => n(!1);
                return window.addEventListener("online", a, !1),
                window.addEventListener("offline", s, !1),
                () => {
                    window.removeEventListener("online", a),
                    window.removeEventListener("offline", s)
                }
            }
        }
    }
    onSubscribe() {
        this.#n || this.setEventListener(this.#t)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#n?.(),
        this.#n = void 0)
    }
    setEventListener(n) {
        this.#t = n,
        this.#n?.(),
        this.#n = n(this.setOnline.bind(this))
    }
    setOnline(n) {
        this.#e !== n && (this.#e = n,
        this.listeners.forEach(s => {
            s(n)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , du = new Ww;
function eE(n) {
    return Math.min(1e3 * 2 ** n, 3e4)
}
function Av(n) {
    return (n ?? "online") === "online" ? du.isOnline() : !0
}
var Sf = class extends Error {
    constructor(n) {
        super("CancelledError"),
        this.revert = n?.revert,
        this.silent = n?.silent
    }
}
;
function Tv(n) {
    let a = !1, s = 0, l;
    const u = Iw()
      , f = () => u.status !== "pending"
      , d = N => {
        if (!f()) {
            const w = new Sf(N);
            _(w),
            n.onCancel?.(w)
        }
    }
      , h = () => {
        a = !0
    }
      , y = () => {
        a = !1
    }
      , p = () => xv.isFocused() && (n.networkMode === "always" || du.isOnline()) && n.canRun()
      , v = () => Av(n.networkMode) && n.canRun()
      , g = N => {
        f() || (l?.(),
        u.resolve(N))
    }
      , _ = N => {
        f() || (l?.(),
        u.reject(N))
    }
      , x = () => new Promise(N => {
        l = w => {
            (f() || p()) && N(w)
        }
        ,
        n.onPause?.()
    }
    ).then( () => {
        l = void 0,
        f() || n.onContinue?.()
    }
    )
      , R = () => {
        if (f())
            return;
        let N;
        const w = s === 0 ? n.initialPromise : void 0;
        try {
            N = w ?? n.fn()
        } catch (A) {
            N = Promise.reject(A)
        }
        Promise.resolve(N).then(g).catch(A => {
            if (f())
                return;
            const B = n.retry ?? (Rv.isServer() ? 0 : 3)
              , Z = n.retryDelay ?? eE
              , H = typeof Z == "function" ? Z(s, A) : Z
              , $ = B === !0 || typeof B == "number" && s < B || typeof B == "function" && B(s, A);
            if (a || !$) {
                _(A);
                return
            }
            s++,
            n.onFail?.(s, A),
            Qw(H).then( () => p() ? void 0 : x()).then( () => {
                a ? _(A) : R()
            }
            )
        }
        )
    }
    ;
    return {
        promise: u,
        status: () => u.status,
        cancel: d,
        continue: () => (l?.(),
        u),
        cancelRetry: h,
        continueRetry: y,
        canStart: v,
        start: () => (v() ? R() : x().then(R),
        u)
    }
}
var Cv = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Zw(this.gcTime) && (this.#e = gf.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(n) {
        this.gcTime = Math.max(this.gcTime || 0, n ?? (Rv.isServer() ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e !== void 0 && (gf.clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , tE = class extends Cv {
    #e;
    #n;
    #t;
    #i;
    #a;
    #s;
    #r;
    constructor(n) {
        super(),
        this.#r = !1,
        this.#s = n.defaultOptions,
        this.setOptions(n.options),
        this.observers = [],
        this.#i = n.client,
        this.#t = this.#i.getQueryCache(),
        this.queryKey = n.queryKey,
        this.queryHash = n.queryHash,
        this.#e = Vy(this.options),
        this.state = n.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#a?.promise
    }
    setOptions(n) {
        if (this.options = {
            ...this.#s,
            ...n
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const a = Vy(this.options);
            a.data !== void 0 && (this.setState(Zy(a.data, a.dataUpdatedAt)),
            this.#e = a)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#t.remove(this)
    }
    setData(n, a) {
        const s = Xw(this.state.data, n, this.options);
        return this.#l({
            data: s,
            type: "success",
            dataUpdatedAt: a?.updatedAt,
            manual: a?.manual
        }),
        s
    }
    setState(n, a) {
        this.#l({
            type: "setState",
            state: n,
            setStateOptions: a
        })
    }
    cancel(n) {
        const a = this.#a?.promise;
        return this.#a?.cancel(n),
        a ? a.then(un).catch(un) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    get resetState() {
        return this.#e
    }
    reset() {
        this.destroy(),
        this.setState(this.resetState)
    }
    isActive() {
        return this.observers.some(n => Yw(n.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Hf || !this.isFetched()
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(n => vf(n.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(n=0) {
        return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !Vw(this.state.dataUpdatedAt, n)
    }
    onFocus() {
        this.observers.find(a => a.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    onOnline() {
        this.observers.find(a => a.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    addObserver(n) {
        this.observers.includes(n) || (this.observers.push(n),
        this.clearGcTimeout(),
        this.#t.notify({
            type: "observerAdded",
            query: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.observers.includes(n) && (this.observers = this.observers.filter(a => a !== n),
        this.observers.length || (this.#a && (this.#r || this.#u() ? this.#a.cancel({
            revert: !0
        }) : this.#a.cancelRetry()),
        this.scheduleGc()),
        this.#t.notify({
            type: "observerRemoved",
            query: this,
            observer: n
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    #u() {
        return this.state.fetchStatus === "paused" && this.state.status === "pending"
    }
    invalidate() {
        this.state.isInvalidated || this.#l({
            type: "invalidate"
        })
    }
    async fetch(n, a) {
        if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
            if (this.state.data !== void 0 && a?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#a)
                return this.#a.continueRetry(),
                this.#a.promise
        }
        if (n && this.setOptions(n),
        !this.options.queryFn) {
            const h = this.observers.find(y => y.options.queryFn);
            h && this.setOptions(h.options)
        }
        const s = new AbortController
          , l = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (this.#r = !0,
                s.signal)
            })
        }
          , u = () => {
            const h = Ev(this.options, a)
              , p = ( () => {
                const v = {
                    client: this.#i,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return l(v),
                v
            }
            )();
            return this.#r = !1,
            this.options.persister ? this.options.persister(h, p, this) : h(p)
        }
          , d = ( () => {
            const h = {
                fetchOptions: a,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#i,
                state: this.state,
                fetchFn: u
            };
            return l(h),
            h
        }
        )();
        this.options.behavior?.onFetch(d, this),
        this.#n = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== d.fetchOptions?.meta) && this.#l({
            type: "fetch",
            meta: d.fetchOptions?.meta
        }),
        this.#a = Tv({
            initialPromise: a?.initialPromise,
            fn: d.fetchFn,
            onCancel: h => {
                h instanceof Sf && h.revert && this.setState({
                    ...this.#n,
                    fetchStatus: "idle"
                }),
                s.abort()
            }
            ,
            onFail: (h, y) => {
                this.#l({
                    type: "failed",
                    failureCount: h,
                    error: y
                })
            }
            ,
            onPause: () => {
                this.#l({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#l({
                    type: "continue"
                })
            }
            ,
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        });
        try {
            const h = await this.#a.start();
            if (h === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(h),
            this.#t.config.onSuccess?.(h, this),
            this.#t.config.onSettled?.(h, this.state.error, this),
            h
        } catch (h) {
            if (h instanceof Sf) {
                if (h.silent)
                    return this.#a.promise;
                if (h.revert) {
                    if (this.state.data === void 0)
                        throw h;
                    return this.state.data
                }
            }
            throw this.#l({
                type: "error",
                error: h
            }),
            this.#t.config.onError?.(h, this),
            this.#t.config.onSettled?.(this.state.data, h, this),
            h
        } finally {
            this.scheduleGc()
        }
    }
    #l(n) {
        const a = s => {
            switch (n.type) {
            case "failed":
                return {
                    ...s,
                    fetchFailureCount: n.failureCount,
                    fetchFailureReason: n.error
                };
            case "pause":
                return {
                    ...s,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...s,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...s,
                    ...nE(s.data, this.options),
                    fetchMeta: n.meta ?? null
                };
            case "success":
                const l = {
                    ...s,
                    ...Zy(n.data, n.dataUpdatedAt),
                    dataUpdateCount: s.dataUpdateCount + 1,
                    ...!n.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                return this.#n = n.manual ? l : void 0,
                l;
            case "error":
                const u = n.error;
                return {
                    ...s,
                    error: u,
                    errorUpdateCount: s.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: s.fetchFailureCount + 1,
                    fetchFailureReason: u,
                    fetchStatus: "idle",
                    status: "error",
                    isInvalidated: !0
                };
            case "invalidate":
                return {
                    ...s,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...s,
                    ...n.state
                }
            }
        }
        ;
        this.state = a(this.state),
        Rt.batch( () => {
            this.observers.forEach(s => {
                s.onQueryUpdate()
            }
            ),
            this.#t.notify({
                query: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function nE(n, a) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Av(a.networkMode) ? "fetching" : "paused",
        ...n === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Zy(n, a) {
    return {
        data: n,
        dataUpdatedAt: a ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function Vy(n) {
    const a = typeof n.initialData == "function" ? n.initialData() : n.initialData
      , s = a !== void 0
      , l = s ? typeof n.initialDataUpdatedAt == "function" ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0;
    return {
        data: a,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? l ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
function Yy(n) {
    return {
        onFetch: (a, s) => {
            const l = a.options
              , u = a.fetchOptions?.meta?.fetchMore?.direction
              , f = a.state.data?.pages || []
              , d = a.state.data?.pageParams || [];
            let h = {
                pages: [],
                pageParams: []
            }
              , y = 0;
            const p = async () => {
                let v = !1;
                const g = R => {
                    Fw(R, () => a.signal, () => v = !0)
                }
                  , _ = Ev(a.options, a.fetchOptions)
                  , x = async (R, N, w) => {
                    if (v)
                        return Promise.reject();
                    if (N == null && R.pages.length)
                        return Promise.resolve(R);
                    const B = ( () => {
                        const I = {
                            client: a.client,
                            queryKey: a.queryKey,
                            pageParam: N,
                            direction: w ? "backward" : "forward",
                            meta: a.options.meta
                        };
                        return g(I),
                        I
                    }
                    )()
                      , Z = await _(B)
                      , {maxPages: H} = a.options
                      , $ = w ? Kw : Pw;
                    return {
                        pages: $(R.pages, Z, H),
                        pageParams: $(R.pageParams, N, H)
                    }
                }
                ;
                if (u && f.length) {
                    const R = u === "backward"
                      , N = R ? aE : Gy
                      , w = {
                        pages: f,
                        pageParams: d
                    }
                      , A = N(l, w);
                    h = await x(w, A, R)
                } else {
                    const R = n ?? f.length;
                    do {
                        const N = y === 0 ? d[0] ?? l.initialPageParam : Gy(l, h);
                        if (y > 0 && N == null)
                            break;
                        h = await x(h, N),
                        y++
                    } while (y < R)
                }
                return h
            }
            ;
            a.options.persister ? a.fetchFn = () => a.options.persister?.(p, {
                client: a.client,
                queryKey: a.queryKey,
                meta: a.options.meta,
                signal: a.signal
            }, s) : a.fetchFn = p
        }
    }
}
function Gy(n, {pages: a, pageParams: s}) {
    const l = a.length - 1;
    return a.length > 0 ? n.getNextPageParam(a[l], a, s[l], s) : void 0
}
function aE(n, {pages: a, pageParams: s}) {
    return a.length > 0 ? n.getPreviousPageParam?.(a[0], a, s[0], s) : void 0
}
var iE = class extends Cv {
    #e;
    #n;
    #t;
    #i;
    constructor(n) {
        super(),
        this.#e = n.client,
        this.mutationId = n.mutationId,
        this.#t = n.mutationCache,
        this.#n = [],
        this.state = n.state || sE(),
        this.setOptions(n.options),
        this.scheduleGc()
    }
    setOptions(n) {
        this.options = n,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        this.#n.includes(n) || (this.#n.push(n),
        this.clearGcTimeout(),
        this.#t.notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.#n = this.#n.filter(a => a !== n),
        this.scheduleGc(),
        this.#t.notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        this.#n.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
    }
    continue() {
        return this.#i?.continue() ?? this.execute(this.state.variables)
    }
    async execute(n) {
        const a = () => {
            this.#a({
                type: "continue"
            })
        }
          , s = {
            client: this.#e,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#i = Tv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n, s) : Promise.reject(new Error("No mutationFn found")),
            onFail: (f, d) => {
                this.#a({
                    type: "failed",
                    failureCount: f,
                    error: d
                })
            }
            ,
            onPause: () => {
                this.#a({
                    type: "pause"
                })
            }
            ,
            onContinue: a,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#t.canRun(this)
        });
        const l = this.state.status === "pending"
          , u = !this.#i.canStart();
        try {
            if (l)
                a();
            else {
                this.#a({
                    type: "pending",
                    variables: n,
                    isPaused: u
                }),
                this.#t.config.onMutate && await this.#t.config.onMutate(n, this, s);
                const d = await this.options.onMutate?.(n, s);
                d !== this.state.context && this.#a({
                    type: "pending",
                    context: d,
                    variables: n,
                    isPaused: u
                })
            }
            const f = await this.#i.start();
            return await this.#t.config.onSuccess?.(f, n, this.state.context, this, s),
            await this.options.onSuccess?.(f, n, this.state.context, s),
            await this.#t.config.onSettled?.(f, null, this.state.variables, this.state.context, this, s),
            await this.options.onSettled?.(f, null, n, this.state.context, s),
            this.#a({
                type: "success",
                data: f
            }),
            f
        } catch (f) {
            try {
                await this.#t.config.onError?.(f, n, this.state.context, this, s)
            } catch (d) {
                Promise.reject(d)
            }
            try {
                await this.options.onError?.(f, n, this.state.context, s)
            } catch (d) {
                Promise.reject(d)
            }
            try {
                await this.#t.config.onSettled?.(void 0, f, this.state.variables, this.state.context, this, s)
            } catch (d) {
                Promise.reject(d)
            }
            try {
                await this.options.onSettled?.(void 0, f, n, this.state.context, s)
            } catch (d) {
                Promise.reject(d)
            }
            throw this.#a({
                type: "error",
                error: f
            }),
            f
        } finally {
            this.#t.runNext(this)
        }
    }
    #a(n) {
        const a = s => {
            switch (n.type) {
            case "failed":
                return {
                    ...s,
                    failureCount: n.failureCount,
                    failureReason: n.error
                };
            case "pause":
                return {
                    ...s,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...s,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...s,
                    context: n.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: n.isPaused,
                    status: "pending",
                    variables: n.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...s,
                    data: n.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...s,
                    data: void 0,
                    error: n.error,
                    failureCount: s.failureCount + 1,
                    failureReason: n.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = a(this.state),
        Rt.batch( () => {
            this.#n.forEach(s => {
                s.onMutationUpdate(n)
            }
            ),
            this.#t.notify({
                mutation: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function sE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var rE = class extends Au {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#e = new Set,
        this.#n = new Map,
        this.#t = 0
    }
    #e;
    #n;
    #t;
    build(n, a, s) {
        const l = new iE({
            client: n,
            mutationCache: this,
            mutationId: ++this.#t,
            options: n.defaultMutationOptions(a),
            state: s
        });
        return this.add(l),
        l
    }
    add(n) {
        this.#e.add(n);
        const a = Wl(n);
        if (typeof a == "string") {
            const s = this.#n.get(a);
            s ? s.push(n) : this.#n.set(a, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (this.#e.delete(n)) {
            const a = Wl(n);
            if (typeof a == "string") {
                const s = this.#n.get(a);
                if (s)
                    if (s.length > 1) {
                        const l = s.indexOf(n);
                        l !== -1 && s.splice(l, 1)
                    } else
                        s[0] === n && this.#n.delete(a)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const a = Wl(n);
        if (typeof a == "string") {
            const l = this.#n.get(a)?.find(u => u.state.status === "pending");
            return !l || l === n
        } else
            return !0
    }
    runNext(n) {
        const a = Wl(n);
        return typeof a == "string" ? this.#n.get(a)?.find(l => l !== n && l.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        Rt.batch( () => {
            this.#e.forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }
            ),
            this.#e.clear(),
            this.#n.clear()
        }
        )
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(n) {
        const a = {
            exact: !0,
            ...n
        };
        return this.getAll().find(s => By(a, s))
    }
    findAll(n={}) {
        return this.getAll().filter(a => By(n, a))
    }
    notify(n) {
        Rt.batch( () => {
            this.listeners.forEach(a => {
                a(n)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const n = this.getAll().filter(a => a.state.isPaused);
        return Rt.batch( () => Promise.all(n.map(a => a.continue().catch(un))))
    }
}
;
function Wl(n) {
    return n.options.scope?.id
}
var lE = class extends Au {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#e = new Map
    }
    #e;
    build(n, a, s) {
        const l = a.queryKey
          , u = a.queryHash ?? Bf(l, a);
        let f = this.get(u);
        return f || (f = new tE({
            client: n,
            queryKey: l,
            queryHash: u,
            options: n.defaultQueryOptions(a),
            state: s,
            defaultOptions: n.getQueryDefaults(l)
        }),
        this.add(f)),
        f
    }
    add(n) {
        this.#e.has(n.queryHash) || (this.#e.set(n.queryHash, n),
        this.notify({
            type: "added",
            query: n
        }))
    }
    remove(n) {
        const a = this.#e.get(n.queryHash);
        a && (n.destroy(),
        a === n && this.#e.delete(n.queryHash),
        this.notify({
            type: "removed",
            query: n
        }))
    }
    clear() {
        Rt.batch( () => {
            this.getAll().forEach(n => {
                this.remove(n)
            }
            )
        }
        )
    }
    get(n) {
        return this.#e.get(n)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(n) {
        const a = {
            exact: !0,
            ...n
        };
        return this.getAll().find(s => ky(a, s))
    }
    findAll(n={}) {
        const a = this.getAll();
        return Object.keys(n).length > 0 ? a.filter(s => ky(n, s)) : a
    }
    notify(n) {
        Rt.batch( () => {
            this.listeners.forEach(a => {
                a(n)
            }
            )
        }
        )
    }
    onFocus() {
        Rt.batch( () => {
            this.getAll().forEach(n => {
                n.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Rt.batch( () => {
            this.getAll().forEach(n => {
                n.onOnline()
            }
            )
        }
        )
    }
}
  , uE = class {
    #e;
    #n;
    #t;
    #i;
    #a;
    #s;
    #r;
    #u;
    constructor(n={}) {
        this.#e = n.queryCache || new lE,
        this.#n = n.mutationCache || new rE,
        this.#t = n.defaultOptions || {},
        this.#i = new Map,
        this.#a = new Map,
        this.#s = 0
    }
    mount() {
        this.#s++,
        this.#s === 1 && (this.#r = xv.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#u = du.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#s--,
        this.#s === 0 && (this.#r?.(),
        this.#r = void 0,
        this.#u?.(),
        this.#u = void 0)
    }
    isFetching(n) {
        return this.#e.findAll({
            ...n,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(n) {
        return this.#n.findAll({
            ...n,
            status: "pending"
        }).length
    }
    getQueryData(n) {
        const a = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#e.get(a.queryHash)?.state.data
    }
    ensureQueryData(n) {
        const a = this.defaultQueryOptions(n)
          , s = this.#e.build(this, a)
          , l = s.state.data;
        return l === void 0 ? this.fetchQuery(n) : (n.revalidateIfStale && s.isStaleByTime(vf(a.staleTime, s)) && this.prefetchQuery(a),
        Promise.resolve(l))
    }
    getQueriesData(n) {
        return this.#e.findAll(n).map( ({queryKey: a, state: s}) => {
            const l = s.data;
            return [a, l]
        }
        )
    }
    setQueryData(n, a, s) {
        const l = this.defaultQueryOptions({
            queryKey: n
        })
          , f = this.#e.get(l.queryHash)?.state.data
          , d = qw(a, f);
        if (d !== void 0)
            return this.#e.build(this, l).setData(d, {
                ...s,
                manual: !0
            })
    }
    setQueriesData(n, a, s) {
        return Rt.batch( () => this.#e.findAll(n).map( ({queryKey: l}) => [l, this.setQueryData(l, a, s)]))
    }
    getQueryState(n) {
        const a = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#e.get(a.queryHash)?.state
    }
    removeQueries(n) {
        const a = this.#e;
        Rt.batch( () => {
            a.findAll(n).forEach(s => {
                a.remove(s)
            }
            )
        }
        )
    }
    resetQueries(n, a) {
        const s = this.#e;
        return Rt.batch( () => (s.findAll(n).forEach(l => {
            l.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...n
        }, a)))
    }
    cancelQueries(n, a={}) {
        const s = {
            revert: !0,
            ...a
        }
          , l = Rt.batch( () => this.#e.findAll(n).map(u => u.cancel(s)));
        return Promise.all(l).then(un).catch(un)
    }
    invalidateQueries(n, a={}) {
        return Rt.batch( () => (this.#e.findAll(n).forEach(s => {
            s.invalidate()
        }
        ),
        n?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
            ...n,
            type: n?.refetchType ?? n?.type ?? "active"
        }, a)))
    }
    refetchQueries(n, a={}) {
        const s = {
            ...a,
            cancelRefetch: a.cancelRefetch ?? !0
        }
          , l = Rt.batch( () => this.#e.findAll(n).filter(u => !u.isDisabled() && !u.isStatic()).map(u => {
            let f = u.fetch(void 0, s);
            return s.throwOnError || (f = f.catch(un)),
            u.state.fetchStatus === "paused" ? Promise.resolve() : f
        }
        ));
        return Promise.all(l).then(un)
    }
    fetchQuery(n) {
        const a = this.defaultQueryOptions(n);
        a.retry === void 0 && (a.retry = !1);
        const s = this.#e.build(this, a);
        return s.isStaleByTime(vf(a.staleTime, s)) ? s.fetch(a) : Promise.resolve(s.state.data)
    }
    prefetchQuery(n) {
        return this.fetchQuery(n).then(un).catch(un)
    }
    fetchInfiniteQuery(n) {
        return n.behavior = Yy(n.pages),
        this.fetchQuery(n)
    }
    prefetchInfiniteQuery(n) {
        return this.fetchInfiniteQuery(n).then(un).catch(un)
    }
    ensureInfiniteQueryData(n) {
        return n.behavior = Yy(n.pages),
        this.ensureQueryData(n)
    }
    resumePausedMutations() {
        return du.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#n
    }
    getDefaultOptions() {
        return this.#t
    }
    setDefaultOptions(n) {
        this.#t = n
    }
    setQueryDefaults(n, a) {
        this.#i.set(Rr(n), {
            queryKey: n,
            defaultOptions: a
        })
    }
    getQueryDefaults(n) {
        const a = [...this.#i.values()]
          , s = {};
        return a.forEach(l => {
            Ar(n, l.queryKey) && Object.assign(s, l.defaultOptions)
        }
        ),
        s
    }
    setMutationDefaults(n, a) {
        this.#a.set(Rr(n), {
            mutationKey: n,
            defaultOptions: a
        })
    }
    getMutationDefaults(n) {
        const a = [...this.#a.values()]
          , s = {};
        return a.forEach(l => {
            Ar(n, l.mutationKey) && Object.assign(s, l.defaultOptions)
        }
        ),
        s
    }
    defaultQueryOptions(n) {
        if (n._defaulted)
            return n;
        const a = {
            ...this.#t.queries,
            ...this.getQueryDefaults(n.queryKey),
            ...n,
            _defaulted: !0
        };
        return a.queryHash || (a.queryHash = Bf(a.queryKey, a)),
        a.refetchOnReconnect === void 0 && (a.refetchOnReconnect = a.networkMode !== "always"),
        a.throwOnError === void 0 && (a.throwOnError = !!a.suspense),
        !a.networkMode && a.persister && (a.networkMode = "offlineFirst"),
        a.queryFn === Hf && (a.enabled = !1),
        a
    }
    defaultMutationOptions(n) {
        return n?._defaulted ? n : {
            ...this.#t.mutations,
            ...n?.mutationKey && this.getMutationDefaults(n.mutationKey),
            ...n,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#n.clear()
    }
}
  , oE = J.createContext(void 0)
  , cE = ({client: n, children: a}) => (J.useEffect( () => (n.mount(),
() => {
    n.unmount()
}
), [n]),
M.jsx(oE.Provider, {
    value: n,
    children: a
}));
const fE = "/assets/styles-DYnT6csZ.css";
function dE(n, a={}) {
    typeof window > "u" || window.__lovableEvents?.captureException?.(n, {
        source: "react_error_boundary",
        route: window.location.pathname,
        ...a
    }, {
        mechanism: "react_error_boundary",
        handled: !1,
        severity: "error"
    })
}
const Qy = ["Space", "Nature", "Cyberpunk", "Abstract", "Myth", "Post-Modern", "Renaissance"]
  , WR = {
    Medium: "30 × 45 cm",
    Large: "60 × 90 cm"
}
  , hE = {
    Medium: 1,
    Large: 1.85
};
function Ov(n, a) {
    return Math.round(n.basePrice * hE[a])
}
function Xy(n) {
    return n < 0 ? "-₹" + Math.abs(n).toLocaleString("en-IN") : "₹" + n.toLocaleString("en-IN")
}
function mE(n, a=800, s=1e3) {
    return `https://picsum.photos/seed/${encodeURIComponent(n)}/${a}/${s}`
}
const Re = (n, a, s, l, u, f, d) => ({
    id: n,
    name: a,
    category: s,
    artist: l,
    basePrice: u,
    description: f,
    tags: d,
    seed: `olympus-${n}`
})
  , pE = [Re("sp-1", "Nebula Genesis", "Space", "Helios.AI", 1799, "A swirling birth of stars rendered in cobalt and magenta gases drifting across the void.", ["cosmos", "stars"]), Re("sp-2", "Voyager's Requiem", "Space", "Kronos Engine", 1999, "A lone probe silhouetted against a ringed gas giant glowing in Olympus gold.", ["planets", "deep-space"]), Re("sp-3", "Singularity Bloom", "Space", "Helios.AI", 2299, "Light bends around a black hole as iridescent accretion petals unfold.", ["blackhole"]), Re("sp-4", "Andromeda's Veil", "Space", "Atlas Diffusion", 1899, "A diaphanous spiral arm of the Andromeda galaxy captured in painterly fidelity.", ["galaxy"]), Re("sp-5", "Lunar Cathedral", "Space", "Kronos Engine", 1699, "Towering basalt arches sculpted on the dark side of the moon under earthrise.", ["moon"]), Re("na-1", "Mossfall Sanctum", "Nature", "Gaia Studio", 1599, "A waterfall cascades through emerald moss in a hidden temperate canyon.", ["forest", "water"]), Re("na-2", "Aurora Reach", "Nature", "Helios.AI", 1899, "The aurora borealis ripples above an Icelandic fjord mirrored in glass water.", ["aurora"]), Re("na-3", "Sequoia Throne", "Nature", "Gaia Studio", 2199, "Ancient sequoias rise like cathedral pillars filtered by golden hour light.", ["forest"]), Re("na-4", "Coral Symphony", "Nature", "Atlas Diffusion", 1799, "Hyperreal coral reef teeming with bioluminescent marine life.", ["ocean"]), Re("na-5", "Desert Mirage", "Nature", "Kronos Engine", 1699, "Crimson dunes ripple beneath a sky of violet dusk in the Atacama.", ["desert"]), Re("cy-1", "Neon Shogunate", "Cyberpunk", "Mecha-Muse", 2199, "A samurai stands beneath kanji holograms in a rain-slicked Neo-Tokyo alley.", ["neon", "tokyo"]), Re("cy-2", "Chrome Oracle", "Cyberpunk", "Mecha-Muse", 2499, "An android priestess interfaces with a vertical megacity skyline.", ["android"]), Re("cy-3", "Datastream Geisha", "Cyberpunk", "Synth Atelier", 2299, "A geisha dissolving into glitching data petals against electric pink fog.", ["glitch"]), Re("cy-4", "Black Market Sprawl", "Cyberpunk", "Mecha-Muse", 1999, "Drone-lit night market towers stacked under a polluted neon sky.", ["city"]), Re("cy-5", "Synapse Highway", "Cyberpunk", "Synth Atelier", 1899, "Hyperspeed motorcycle blur threading through a luminous data freeway.", ["motion"]), Re("ab-1", "Fractal Aria", "Abstract", "Orpheus Net", 1499, "Recursive fractals breathe in chromatic harmonics like a visual symphony.", ["fractal"]), Re("ab-2", "Liquid Geometry", "Abstract", "Orpheus Net", 1599, "Molten polygons collide in mercury and ultraviolet pigment.", ["geometric"]), Re("ab-3", "Echoes of Form", "Abstract", "Atlas Diffusion", 1699, "Tonal gradients fold over themselves like silk in a black void.", ["minimal"]), Re("ab-4", "Tessellated Dawn", "Abstract", "Orpheus Net", 1799, "Triangular tessellations refracting the colors of an unseen sunrise.", ["pattern"]), Re("ab-5", "Quantum Ink", "Abstract", "Helios.AI", 1899, "Probability clouds bloom across the canvas in india ink and gold leaf.", ["ink"]), Re("my-1", "Athena's Wisdom", "Myth", "Pantheon AI", 2699, "The goddess of wisdom emerges from a storm of owls and olive light.", ["greek"]), Re("my-2", "Poseidon's Wrath", "Myth", "Pantheon AI", 2899, "Titanic waves curl around the sea god's trident in cinematic detail.", ["greek"]), Re("my-3", "Phoenix Ascendant", "Myth", "Pantheon AI", 2499, "A reborn phoenix erupts from molten gold against a starless sky.", ["fire"]), Re("my-4", "Ragnarok Eclipse", "Myth", "Atlas Diffusion", 2299, "Norse wolves chase the sun beneath a blood-orange eclipse.", ["norse"]), Re("my-5", "Olympian Council", "Myth", "Pantheon AI", 3299, "The twelve Olympians gathered atop marble thrones in heroic chiaroscuro.", ["greek"]), Re("pm-1", "Glitch Madonna", "Post-Modern", "Synth Atelier", 1999, "A classical madonna fractured through CRT artifacting and tape decay.", ["glitch"]), Re("pm-2", "Concrete Bloom", "Post-Modern", "Atlas Diffusion", 1799, "Brutalist concrete sprouting hyperreal flora in saturated film grain.", ["brutalist"]), Re("pm-3", "Suburban Dystopia", "Post-Modern", "Orpheus Net", 1699, "A 1970s suburban street rendered in unsettling pastel surrealism.", ["surreal"]), Re("pm-4", "Vapor Manifesto", "Post-Modern", "Synth Atelier", 1599, "Vaporwave statuary collaged with corporate slogans turned poetry.", ["vapor"]), Re("pm-5", "Static Cathedral", "Post-Modern", "Atlas Diffusion", 1899, "An empty cathedral made entirely of analog television static.", ["lo-fi"]), Re("re-1", "Da Vinci's Algorithm", "Renaissance", "Pantheon AI", 3199, "A mechanical study sketched in the style of Leonardo, inked with circuitry.", ["sketch"]), Re("re-2", "The Botticelli Cipher", "Renaissance", "Pantheon AI", 3299, "A Venus reborn from a sea of generative noise and tempera petals.", ["classical"]), Re("re-3", "Caravaggio's Light", "Renaissance", "Atlas Diffusion", 3499, "Dramatic chiaroscuro of a scribe lit only by a glowing manuscript.", ["chiaroscuro"]), Re("re-4", "Michelangelo Reborn", "Renaissance", "Pantheon AI", 3899, "A sculpted titan emerging from raw marble in painterly hyperrealism.", ["sculpture"]), Re("re-5", "Sistine Reverie", "Renaissance", "Pantheon AI", 4299, "A ceiling fresco reimagined with celestial nebulae and golden seraphim.", ["fresco"])];
function qf(n) {
    return pE.find(a => a.id === n)
}
const Mv = J.createContext(null)
  , Py = "olympus-cart-v1";
function yE({children: n}) {
    const [a,s] = J.useState([])
      , [l,u] = J.useState(!1)
      , [f,d] = J.useState("")
      , [h,y] = J.useState(!1);
    J.useEffect( () => {
        try {
            const w = localStorage.getItem(Py);
            w && s(JSON.parse(w))
        } catch {}
        y(!0)
    }
    , []),
    J.useEffect( () => {
        h && localStorage.setItem(Py, JSON.stringify(a))
    }
    , [a, h]);
    const p = (w, A, B, Z=1) => {
        const H = `${w}::${A}::${B}`;
        s($ => $.find(Q => Q.key === H) ? $.map(Q => Q.key === H ? {
            ...Q,
            qty: Q.qty + Z
        } : Q) : [...$, {
            key: H,
            productId: w,
            size: A,
            orientation: B,
            qty: Z
        }]),
        u(!0)
    }
      , v = w => s(A => A.filter(B => B.key !== w))
      , g = (w, A) => s(B => B.flatMap(Z => Z.key === w ? A <= 0 ? [] : [{
        ...Z,
        qty: A
    }] : [Z]))
      , _ = () => s([])
      , x = J.useMemo( () => a.reduce( (w, A) => {
        const B = qf(A.productId);
        return B ? w + Ov(B, A.size) * A.qty : w
    }
    , 0), [a])
      , R = a.reduce( (w, A) => w + A.qty, 0)
      , N = f.trim().toUpperCase() === "JUDGES100" ? 100 : 0;
    return M.jsx(Mv.Provider, {
        value: {
            items: a,
            add: p,
            remove: v,
            setQty: g,
            clear: _,
            count: R,
            subtotal: x,
            drawerOpen: l,
            setDrawerOpen: u,
            promo: f,
            setPromo: d,
            discountPct: N
        },
        children: n
    })
}
function Nv() {
    const n = J.useContext(Mv);
    if (!n)
        throw new Error("useCart must be inside CartProvider");
    return n
}
const zv = (...n) => n.filter( (a, s, l) => !!a && a.trim() !== "" && l.indexOf(a) === s).join(" ").trim();
const gE = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const vE = n => n.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, s, l) => l ? l.toUpperCase() : s.toLowerCase());
const Ky = n => {
    const a = vE(n);
    return a.charAt(0).toUpperCase() + a.slice(1)
}
;
var bE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const SE = n => {
    for (const a in n)
        if (a.startsWith("aria-") || a === "role" || a === "title")
            return !0;
    return !1
}
;
const _E = J.forwardRef( ({color: n="currentColor", size: a=24, strokeWidth: s=2, absoluteStrokeWidth: l, className: u="", children: f, iconNode: d, ...h}, y) => J.createElement("svg", {
    ref: y,
    ...bE,
    width: a,
    height: a,
    stroke: n,
    strokeWidth: l ? Number(s) * 24 / Number(a) : s,
    className: zv("lucide", u),
    ...!f && !SE(h) && {
        "aria-hidden": "true"
    },
    ...h
}, [...d.map( ([p,v]) => J.createElement(p, v)), ...Array.isArray(f) ? f : [f]]));
const on = (n, a) => {
    const s = J.forwardRef( ({className: l, ...u}, f) => J.createElement(_E, {
        ref: f,
        iconNode: a,
        className: zv(`lucide-${gE(Ky(n))}`, `lucide-${n}`, l),
        ...u
    }));
    return s.displayName = Ky(n),
    s
}
;
const xE = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , wE = on("chevron-down", xE);
const EE = [["path", {
    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
    key: "132q7q"
}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]]
  , RE = on("mail", EE);
const AE = [["path", {
    d: "M4 5h16",
    key: "1tepv9"
}], ["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 19h16",
    key: "1djgab"
}]]
  , TE = on("menu", AE);
const CE = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]
  , OE = on("minus", CE);
const ME = [["path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
    key: "9njp5v"
}]]
  , NE = on("phone", ME);
const zE = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]
  , jE = on("plus", zE);
const DE = [["path", {
    d: "m21 21-4.34-4.34",
    key: "14j7rj"
}], ["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}]]
  , Fy = on("search", DE);
const LE = [["path", {
    d: "M16 10a4 4 0 0 1-8 0",
    key: "1ltviw"
}], ["path", {
    d: "M3.103 6.034h17.794",
    key: "awc11p"
}], ["path", {
    d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
    key: "o988cm"
}]]
  , _f = on("shopping-bag", LE);
const UE = [["path", {
    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
    key: "1s2grr"
}], ["path", {
    d: "M20 2v4",
    key: "1rf3ol"
}], ["path", {
    d: "M22 4h-4",
    key: "gwowj6"
}], ["circle", {
    cx: "4",
    cy: "20",
    r: "2",
    key: "6kqj1y"
}]]
  , jv = on("sparkles", UE);
const kE = [["path", {
    d: "M10 11v6",
    key: "nco0om"
}], ["path", {
    d: "M14 11v6",
    key: "outv1u"
}], ["path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
    key: "miytrc"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    key: "e791ji"
}]]
  , BE = on("trash-2", kE);
const HE = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , Dv = on("x", HE);
function qE() {
    const {count: n, setDrawerOpen: a} = Nv()
      , [s,l] = J.useState(!1)
      , [u,f] = J.useState("")
      , [d,h] = J.useState(!1)
      , y = kf()
      , p = v => {
        v.preventDefault(),
        y({
            to: "/shop",
            search: {
                q: u,
                cat: void 0
            }
        })
    }
    ;
    return M.jsxs("header", {
        className: "fixed top-0 left-0 right-0 z-50 px-4 pt-4",
        children: [M.jsxs("nav", {
            className: "glass mx-auto flex max-w-7xl items-center gap-3 rounded-2xl px-4 py-3 md:px-6",
            children: [M.jsxs(Et, {
                to: "/",
                className: "flex items-center gap-2 group shrink-0",
                children: [M.jsx("div", {
                    className: "relative h-8 w-8 rounded-lg bg-linear-to-br from-electric via-violet-neon to-gold grid place-items-center glow-primary",
                    children: M.jsx(jv, {
                        className: "h-4 w-4 text-background"
                    })
                }), M.jsxs("div", {
                    className: "hidden sm:block",
                    children: [M.jsxs("div", {
                        className: "font-display text-lg font-bold leading-none tracking-tight",
                        children: ["Olympus", M.jsx("span", {
                            className: "text-gradient",
                            children: "Labs"
                        })]
                    }), M.jsx("div", {
                        className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
                        children: "AI Art Atelier"
                    })]
                })]
            }), M.jsxs("form", {
                onSubmit: p,
                className: "hidden md:flex flex-1 max-w-md items-center gap-2 rounded-xl bg-input/60 px-3 py-2 border border-border focus-within:border-primary focus-within:glow-primary transition",
                children: [M.jsx(Fy, {
                    className: "h-4 w-4 text-muted-foreground"
                }), M.jsx("input", {
                    value: u,
                    onChange: v => f(v.target.value),
                    placeholder: "Search artworks, artists, themes…",
                    className: "bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
                })]
            }), M.jsxs("div", {
                className: "hidden md:block relative",
                children: [M.jsxs("button", {
                    onClick: () => l(v => !v),
                    onBlur: () => setTimeout( () => l(!1), 150),
                    className: "flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-secondary/60 text-sm font-medium transition",
                    children: ["Categories ", M.jsx(wE, {
                        className: `h-4 w-4 transition ${s ? "rotate-180" : ""}`
                    })]
                }), s && M.jsxs("div", {
                    className: "absolute right-0 mt-2 w-56 glass rounded-xl p-2 animate-fade-up",
                    children: [M.jsx(Et, {
                        to: "/shop",
                        className: "block px-3 py-2 rounded-lg hover:bg-secondary text-sm",
                        children: "All Artworks"
                    }), Qy.map(v => M.jsx(Et, {
                        to: "/shop",
                        search: {
                            cat: v
                        },
                        className: "block px-3 py-2 rounded-lg hover:bg-secondary text-sm",
                        children: v
                    }, v))]
                })]
            }), M.jsx(Et, {
                to: "/contact",
                className: "hidden lg:block px-3 py-2 text-sm font-medium hover:text-primary transition",
                children: "Contact"
            }), M.jsxs("button", {
                onClick: () => a(!0),
                className: "relative flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/15 hover:bg-primary/25 border border-primary/30 transition group",
                "aria-label": "Open cart",
                children: [M.jsx(_f, {
                    className: "h-4 w-4 text-primary"
                }), M.jsx("span", {
                    className: "hidden sm:inline text-sm font-medium",
                    children: "Cart"
                }), n > 0 && M.jsx("span", {
                    className: "absolute -top-1.5 -right-1.5 h-5 min-w-5 px-1.5 rounded-full bg-gold text-background text-[10px] font-bold grid place-items-center animate-pulse-glow",
                    children: n
                })]
            }), M.jsx("button", {
                className: "md:hidden p-2",
                onClick: () => h(v => !v),
                "aria-label": "Menu",
                children: d ? M.jsx(Dv, {
                    className: "h-5 w-5"
                }) : M.jsx(TE, {
                    className: "h-5 w-5"
                })
            })]
        }), d && M.jsxs("div", {
            className: "md:hidden glass mx-auto mt-2 max-w-7xl rounded-2xl p-3 animate-fade-up",
            children: [M.jsxs("form", {
                onSubmit: p,
                className: "flex items-center gap-2 rounded-xl bg-input/60 px-3 py-2 mb-2",
                children: [M.jsx(Fy, {
                    className: "h-4 w-4 text-muted-foreground"
                }), M.jsx("input", {
                    value: u,
                    onChange: v => f(v.target.value),
                    placeholder: "Search…",
                    className: "bg-transparent outline-none text-sm flex-1"
                })]
            }), M.jsxs("div", {
                className: "grid grid-cols-2 gap-1",
                children: [M.jsx(Et, {
                    to: "/shop",
                    onClick: () => h(!1),
                    className: "px-3 py-2 rounded-lg hover:bg-secondary text-sm",
                    children: "All"
                }), Qy.map(v => M.jsx(Et, {
                    to: "/shop",
                    search: {
                        cat: v
                    },
                    onClick: () => h(!1),
                    className: "px-3 py-2 rounded-lg hover:bg-secondary text-sm",
                    children: v
                }, v)), M.jsx(Et, {
                    to: "/contact",
                    onClick: () => h(!1),
                    className: "px-3 py-2 rounded-lg hover:bg-secondary text-sm",
                    children: "Contact"
                })]
            })]
        })]
    })
}
function ZE() {
    const {items: n, drawerOpen: a, setDrawerOpen: s, remove: l, setQty: u, subtotal: f, count: d} = Nv();
    return M.jsxs(M.Fragment, {
        children: [M.jsx("div", {
            className: `fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-opacity ${a ? "opacity-100" : "opacity-0 pointer-events-none"}`,
            onClick: () => s(!1)
        }), M.jsxs("aside", {
            className: `fixed top-0 right-0 z-[61] h-full w-full max-w-md glass border-l border-border transition-transform duration-300 ${a ? "translate-x-0" : "translate-x-full"} flex flex-col`,
            children: [M.jsxs("header", {
                className: "flex items-center justify-between p-5 border-b border-border",
                children: [M.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [M.jsx(_f, {
                        className: "h-5 w-5 text-primary"
                    }), M.jsxs("h2", {
                        className: "font-display text-xl font-bold",
                        children: ["Your Atelier (", d, ")"]
                    })]
                }), M.jsx("button", {
                    onClick: () => s(!1),
                    className: "p-2 rounded-lg hover:bg-secondary",
                    children: M.jsx(Dv, {
                        className: "h-4 w-4"
                    })
                })]
            }), M.jsxs("div", {
                className: "flex-1 overflow-y-auto p-5 space-y-4",
                children: [n.length === 0 && M.jsxs("div", {
                    className: "text-center py-16",
                    children: [M.jsx("div", {
                        className: "mx-auto h-16 w-16 rounded-2xl bg-secondary grid place-items-center mb-4",
                        children: M.jsx(_f, {
                            className: "h-7 w-7 text-muted-foreground"
                        })
                    }), M.jsx("p", {
                        className: "font-display text-lg",
                        children: "Your gallery is empty"
                    }), M.jsx("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: "Curate a masterpiece from the collection."
                    }), M.jsx(Et, {
                        to: "/shop",
                        onClick: () => s(!1),
                        className: "inline-block mt-5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90",
                        children: "Browse Gallery"
                    })]
                }), n.map(h => {
                    const y = qf(h.productId)
                      , p = Ov(y, h.size);
                    return M.jsxs("div", {
                        className: "flex gap-3 p-3 rounded-xl bg-card/60 border border-border",
                        children: [M.jsx("img", {
                            src: mE(y.seed, 200, 240),
                            alt: y.name,
                            className: "h-20 w-16 object-cover rounded-lg"
                        }), M.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [M.jsxs("div", {
                                className: "flex justify-between gap-2",
                                children: [M.jsxs("div", {
                                    className: "min-w-0",
                                    children: [M.jsx("div", {
                                        className: "font-medium truncate",
                                        children: y.name
                                    }), M.jsxs("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: [h.size, " · ", h.orientation]
                                    })]
                                }), M.jsx("button", {
                                    onClick: () => l(h.key),
                                    className: "text-muted-foreground hover:text-destructive shrink-0",
                                    children: M.jsx(BE, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            }), M.jsxs("div", {
                                className: "flex items-center justify-between mt-2",
                                children: [M.jsxs("div", {
                                    className: "flex items-center gap-1 bg-secondary rounded-lg",
                                    children: [M.jsx("button", {
                                        onClick: () => u(h.key, h.qty - 1),
                                        className: "p-1.5 hover:text-primary",
                                        children: M.jsx(OE, {
                                            className: "h-3 w-3"
                                        })
                                    }), M.jsx("span", {
                                        className: "w-6 text-center text-sm",
                                        children: h.qty
                                    }), M.jsx("button", {
                                        onClick: () => u(h.key, h.qty + 1),
                                        className: "p-1.5 hover:text-primary",
                                        children: M.jsx(jE, {
                                            className: "h-3 w-3"
                                        })
                                    })]
                                }), M.jsx("div", {
                                    className: "font-display font-bold text-gold",
                                    children: Xy(p * h.qty)
                                })]
                            })]
                        })]
                    }, h.key)
                }
                )]
            }), n.length > 0 && M.jsxs("footer", {
                className: "border-t border-border p-5 space-y-3",
                children: [M.jsxs("div", {
                    className: "flex justify-between text-sm",
                    children: [M.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Subtotal"
                    }), M.jsx("span", {
                        className: "font-display font-bold text-lg",
                        children: Xy(f)
                    })]
                }), M.jsx(Et, {
                    to: "/checkout",
                    onClick: () => s(!1),
                    className: "block text-center py-3 rounded-xl bg-linear-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 glow-primary",
                    children: "Proceed to Checkout"
                })]
            })]
        })]
    })
}
function VE() {
    return M.jsxs("footer", {
        className: "mt-24 border-t border-border bg-background",
        children: [M.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8",
            children: [M.jsxs("div", {
                className: "md:col-span-2",
                children: [M.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [M.jsx("div", {
                        className: "h-9 w-9 rounded-lg bg-linear-to-br from-electric via-violet-neon to-gold grid place-items-center",
                        children: M.jsx(jv, {
                            className: "h-4 w-4 text-background"
                        })
                    }), M.jsxs("div", {
                        className: "font-display text-xl font-bold",
                        children: ["Olympus", M.jsx("span", {
                            className: "text-gradient",
                            children: "Labs"
                        })]
                    })]
                }), M.jsx("p", {
                    className: "mt-3 text-sm text-muted-foreground max-w-md",
                    children: "Founded by Prajan Radhakrishnan to bridge classical human imagination and modern artificial intelligence — a curated gallery of high-fidelity digital masterpieces."
                })]
            }), M.jsxs("div", {
                children: [M.jsx("h4", {
                    className: "font-display font-semibold mb-3",
                    children: "Explore"
                }), M.jsxs("ul", {
                    className: "space-y-2 text-sm text-muted-foreground",
                    children: [M.jsx("li", {
                        children: M.jsx(Et, {
                            to: "/shop",
                            className: "hover:text-primary",
                            children: "Gallery"
                        })
                    }), M.jsx("li", {
                        children: M.jsx(Et, {
                            to: "/",
                            className: "hover:text-primary",
                            children: "The Forge"
                        })
                    }), M.jsx("li", {
                        children: M.jsx(Et, {
                            to: "/contact",
                            className: "hover:text-primary",
                            children: "Contact"
                        })
                    })]
                })]
            }), M.jsxs("div", {
                children: [M.jsx("h4", {
                    className: "font-display font-semibold mb-3",
                    children: "Atelier"
                }), M.jsxs("ul", {
                    className: "space-y-2 text-sm text-muted-foreground",
                    children: [M.jsxs("li", {
                        className: "flex items-center gap-2",
                        children: [M.jsx(RE, {
                            className: "h-3.5 w-3.5"
                        }), " prajanexists@gmail.com"]
                    }), M.jsxs("li", {
                        className: "flex items-center gap-2",
                        children: [M.jsx(NE, {
                            className: "h-3.5 w-3.5"
                        }), " +1 (555) 019-2834"]
                    })]
                })]
            })]
        }), M.jsxs("div", {
            className: "border-t border-border py-5 text-center text-xs text-muted-foreground",
            children: ["© ", new Date().getFullYear(), " Olympus Labs · Forged on Mount Silicon"]
        })]
    })
}
function YE() {
    return M.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-background px-4",
        children: M.jsxs("div", {
            className: "max-w-md text-center",
            children: [M.jsx("h1", {
                className: "font-display text-7xl font-bold text-gradient",
                children: "404"
            }), M.jsx("h2", {
                className: "mt-4 text-xl font-semibold",
                children: "Lost in the cosmos"
            }), M.jsx("p", {
                className: "mt-2 text-sm text-muted-foreground",
                children: "This artifact has drifted beyond Olympus."
            }), M.jsx(Et, {
                to: "/",
                className: "mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
                children: "Return home"
            })]
        })
    })
}
function GE({error: n, reset: a}) {
    console.error(n);
    const s = St();
    return J.useEffect( () => {
        dE(n, {
            boundary: "tanstack_root_error_component"
        })
    }
    , [n]),
    M.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-background px-4",
        children: M.jsxs("div", {
            className: "max-w-md text-center",
            children: [M.jsx("h1", {
                className: "font-display text-xl font-semibold",
                children: "Something fractured"
            }), M.jsx("p", {
                className: "mt-2 text-sm text-muted-foreground",
                children: "Try again or head back home."
            }), M.jsxs("div", {
                className: "mt-6 flex justify-center gap-2",
                children: [M.jsx("button", {
                    onClick: () => {
                        s.invalidate(),
                        a()
                    }
                    ,
                    className: "rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
                    children: "Retry"
                }), M.jsx("a", {
                    href: "/",
                    className: "rounded-xl border border-border px-4 py-2 text-sm font-medium",
                    children: "Home"
                })]
            })]
        })
    })
}
const ja = ow()({
    head: () => ({
        meta: [{
            charSet: "utf-8"
        }, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }, {
            title: "Olympus Labs — AI Art Atelier"
        }, {
            name: "description",
            content: "A curated gallery of high-fidelity AI-forged masterpieces — from Renaissance to Cyberpunk."
        }, {
            property: "og:title",
            content: "Olympus Labs — AI Art Atelier"
        }, {
            property: "og:description",
            content: "A curated gallery of high-fidelity AI-forged masterpieces — from Renaissance to Cyberpunk."
        }, {
            property: "og:type",
            content: "website"
        }, {
            name: "twitter:title",
            content: "Olympus Labs — AI Art Atelier"
        }, {
            name: "twitter:description",
            content: "A curated gallery of high-fidelity AI-forged masterpieces — from Renaissance to Cyberpunk."
        }, {
            property: "og:image",
            content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4a122d9-50c3-4c27-b897-6e206de3b6e2/id-preview-dee1133a--98ebbe6c-31b9-43f3-817f-e3d97530464c.lovable.app-1780731745778.png"
        }, {
            name: "twitter:image",
            content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4a122d9-50c3-4c27-b897-6e206de3b6e2/id-preview-dee1133a--98ebbe6c-31b9-43f3-817f-e3d97530464c.lovable.app-1780731745778.png"
        }, {
            name: "twitter:card",
            content: "summary_large_image"
        }],
        links: [{
            rel: "stylesheet",
            href: fE
        }, {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        }, {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous"
        }, {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap"
        }]
    }),
    shellComponent: QE,
    component: XE,
    notFoundComponent: YE,
    errorComponent: GE
});
function QE({children: n}) {
    return M.jsxs("html", {
        lang: "en",
        className: "dark",
        children: [M.jsx("head", {
            children: M.jsx(Mw, {})
        }), M.jsxs("body", {
            children: [n, M.jsx(Nw, {})]
        })]
    })
}
function XE() {
    const {queryClient: n} = ja.useRouteContext();
    return M.jsx(cE, {
        client: n,
        children: M.jsx(yE, {
            children: M.jsxs("div", {
                className: "min-h-screen flex flex-col",
                children: [M.jsx(qE, {}), M.jsx("main", {
                    className: "flex-1 pt-24",
                    children: M.jsx(bv, {})
                }), M.jsx(VE, {}), M.jsx(ZE, {})]
            })
        })
    })
}
const PE = "modulepreload"
  , KE = function(n) {
    return "/" + n
}
  , Iy = {}
  , di = function(a, s, l) {
    let u = Promise.resolve();
    if (s && s.length > 0) {
        let y = function(p) {
            return Promise.all(p.map(v => Promise.resolve(v).then(g => ({
                status: "fulfilled",
                value: g
            }), g => ({
                status: "rejected",
                reason: g
            }))))
        };
        document.getElementsByTagName("link");
        const d = document.querySelector("meta[property=csp-nonce]")
          , h = d?.nonce || d?.getAttribute("nonce");
        u = y(s.map(p => {
            if (p = KE(p),
            p in Iy)
                return;
            Iy[p] = !0;
            const v = p.endsWith(".css")
              , g = v ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${p}"]${g}`))
                return;
            const _ = document.createElement("link");
            if (_.rel = v ? "stylesheet" : PE,
            v || (_.as = "script"),
            _.crossOrigin = "",
            _.href = p,
            h && _.setAttribute("nonce", h),
            document.head.appendChild(_),
            v)
                return new Promise( (x, R) => {
                    _.addEventListener("load", x),
                    _.addEventListener("error", () => R(new Error(`Unable to preload CSS for ${p}`)))
                }
                )
        }
        ))
    }
    function f(d) {
        const h = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (h.payload = d,
        window.dispatchEvent(h),
        !h.defaultPrevented)
            throw d
    }
    return u.then(d => {
        for (const h of d || [])
            h.status === "rejected" && f(h.reason);
        return a().catch(f)
    }
    )
};
var Me;
(function(n) {
    n.assertEqual = u => {}
    ;
    function a(u) {}
    n.assertIs = a;
    function s(u) {
        throw new Error
    }
    n.assertNever = s,
    n.arrayToEnum = u => {
        const f = {};
        for (const d of u)
            f[d] = d;
        return f
    }
    ,
    n.getValidEnumValues = u => {
        const f = n.objectKeys(u).filter(h => typeof u[u[h]] != "number")
          , d = {};
        for (const h of f)
            d[h] = u[h];
        return n.objectValues(d)
    }
    ,
    n.objectValues = u => n.objectKeys(u).map(function(f) {
        return u[f]
    }),
    n.objectKeys = typeof Object.keys == "function" ? u => Object.keys(u) : u => {
        const f = [];
        for (const d in u)
            Object.prototype.hasOwnProperty.call(u, d) && f.push(d);
        return f
    }
    ,
    n.find = (u, f) => {
        for (const d of u)
            if (f(d))
                return d
    }
    ,
    n.isInteger = typeof Number.isInteger == "function" ? u => Number.isInteger(u) : u => typeof u == "number" && Number.isFinite(u) && Math.floor(u) === u;
    function l(u, f=" | ") {
        return u.map(d => typeof d == "string" ? `'${d}'` : d).join(f)
    }
    n.joinValues = l,
    n.jsonStringifyReplacer = (u, f) => typeof f == "bigint" ? f.toString() : f
}
)(Me || (Me = {}));
var Jy;
(function(n) {
    n.mergeShapes = (a, s) => ({
        ...a,
        ...s
    })
}
)(Jy || (Jy = {}));
const ae = Me.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , ba = n => {
    switch (typeof n) {
    case "undefined":
        return ae.undefined;
    case "string":
        return ae.string;
    case "number":
        return Number.isNaN(n) ? ae.nan : ae.number;
    case "boolean":
        return ae.boolean;
    case "function":
        return ae.function;
    case "bigint":
        return ae.bigint;
    case "symbol":
        return ae.symbol;
    case "object":
        return Array.isArray(n) ? ae.array : n === null ? ae.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? ae.promise : typeof Map < "u" && n instanceof Map ? ae.map : typeof Set < "u" && n instanceof Set ? ae.set : typeof Date < "u" && n instanceof Date ? ae.date : ae.object;
    default:
        return ae.unknown
    }
}
  , P = Me.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class Gn extends Error {
    get errors() {
        return this.issues
    }
    constructor(a) {
        super(),
        this.issues = [],
        this.addIssue = l => {
            this.issues = [...this.issues, l]
        }
        ,
        this.addIssues = (l=[]) => {
            this.issues = [...this.issues, ...l]
        }
        ;
        const s = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, s) : this.__proto__ = s,
        this.name = "ZodError",
        this.issues = a
    }
    format(a) {
        const s = a || function(f) {
            return f.message
        }
          , l = {
            _errors: []
        }
          , u = f => {
            for (const d of f.issues)
                if (d.code === "invalid_union")
                    d.unionErrors.map(u);
                else if (d.code === "invalid_return_type")
                    u(d.returnTypeError);
                else if (d.code === "invalid_arguments")
                    u(d.argumentsError);
                else if (d.path.length === 0)
                    l._errors.push(s(d));
                else {
                    let h = l
                      , y = 0;
                    for (; y < d.path.length; ) {
                        const p = d.path[y];
                        y === d.path.length - 1 ? (h[p] = h[p] || {
                            _errors: []
                        },
                        h[p]._errors.push(s(d))) : h[p] = h[p] || {
                            _errors: []
                        },
                        h = h[p],
                        y++
                    }
                }
        }
        ;
        return u(this),
        l
    }
    static assert(a) {
        if (!(a instanceof Gn))
            throw new Error(`Not a ZodError: ${a}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Me.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(a=s => s.message) {
        const s = {}
          , l = [];
        for (const u of this.issues)
            if (u.path.length > 0) {
                const f = u.path[0];
                s[f] = s[f] || [],
                s[f].push(a(u))
            } else
                l.push(a(u));
        return {
            formErrors: l,
            fieldErrors: s
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
Gn.create = n => new Gn(n);
const xf = (n, a) => {
    let s;
    switch (n.code) {
    case P.invalid_type:
        n.received === ae.undefined ? s = "Required" : s = `Expected ${n.expected}, received ${n.received}`;
        break;
    case P.invalid_literal:
        s = `Invalid literal value, expected ${JSON.stringify(n.expected, Me.jsonStringifyReplacer)}`;
        break;
    case P.unrecognized_keys:
        s = `Unrecognized key(s) in object: ${Me.joinValues(n.keys, ", ")}`;
        break;
    case P.invalid_union:
        s = "Invalid input";
        break;
    case P.invalid_union_discriminator:
        s = `Invalid discriminator value. Expected ${Me.joinValues(n.options)}`;
        break;
    case P.invalid_enum_value:
        s = `Invalid enum value. Expected ${Me.joinValues(n.options)}, received '${n.received}'`;
        break;
    case P.invalid_arguments:
        s = "Invalid function arguments";
        break;
    case P.invalid_return_type:
        s = "Invalid function return type";
        break;
    case P.invalid_date:
        s = "Invalid date";
        break;
    case P.invalid_string:
        typeof n.validation == "object" ? "includes"in n.validation ? (s = `Invalid input: must include "${n.validation.includes}"`,
        typeof n.validation.position == "number" && (s = `${s} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith"in n.validation ? s = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith"in n.validation ? s = `Invalid input: must end with "${n.validation.endsWith}"` : Me.assertNever(n.validation) : n.validation !== "regex" ? s = `Invalid ${n.validation}` : s = "Invalid";
        break;
    case P.too_small:
        n.type === "array" ? s = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? s = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? s = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "bigint" ? s = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? s = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : s = "Invalid input";
        break;
    case P.too_big:
        n.type === "array" ? s = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? s = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? s = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? s = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? s = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : s = "Invalid input";
        break;
    case P.custom:
        s = "Invalid input";
        break;
    case P.invalid_intersection_types:
        s = "Intersection results could not be merged";
        break;
    case P.not_multiple_of:
        s = `Number must be a multiple of ${n.multipleOf}`;
        break;
    case P.not_finite:
        s = "Number must be finite";
        break;
    default:
        s = a.defaultError,
        Me.assertNever(n)
    }
    return {
        message: s
    }
}
;
let FE = xf;
function IE() {
    return FE
}
const JE = n => {
    const {data: a, path: s, errorMaps: l, issueData: u} = n
      , f = [...s, ...u.path || []]
      , d = {
        ...u,
        path: f
    };
    if (u.message !== void 0)
        return {
            ...u,
            path: f,
            message: u.message
        };
    let h = "";
    const y = l.filter(p => !!p).slice().reverse();
    for (const p of y)
        h = p(d, {
            data: a,
            defaultError: h
        }).message;
    return {
        ...u,
        path: f,
        message: h
    }
}
;
function te(n, a) {
    const s = IE()
      , l = JE({
        issueData: a,
        data: n.data,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, s, s === xf ? void 0 : xf].filter(u => !!u)
    });
    n.common.issues.push(l)
}
class Qt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(a, s) {
        const l = [];
        for (const u of s) {
            if (u.status === "aborted")
                return he;
            u.status === "dirty" && a.dirty(),
            l.push(u.value)
        }
        return {
            status: a.value,
            value: l
        }
    }
    static async mergeObjectAsync(a, s) {
        const l = [];
        for (const u of s) {
            const f = await u.key
              , d = await u.value;
            l.push({
                key: f,
                value: d
            })
        }
        return Qt.mergeObjectSync(a, l)
    }
    static mergeObjectSync(a, s) {
        const l = {};
        for (const u of s) {
            const {key: f, value: d} = u;
            if (f.status === "aborted" || d.status === "aborted")
                return he;
            f.status === "dirty" && a.dirty(),
            d.status === "dirty" && a.dirty(),
            f.value !== "__proto__" && (typeof d.value < "u" || u.alwaysSet) && (l[f.value] = d.value)
        }
        return {
            status: a.value,
            value: l
        }
    }
}
const he = Object.freeze({
    status: "aborted"
})
  , vr = n => ({
    status: "dirty",
    value: n
})
  , nn = n => ({
    status: "valid",
    value: n
})
  , $y = n => n.status === "aborted"
  , Wy = n => n.status === "dirty"
  , us = n => n.status === "valid"
  , hu = n => typeof Promise < "u" && n instanceof Promise;
var se;
(function(n) {
    n.errToObj = a => typeof a == "string" ? {
        message: a
    } : a || {},
    n.toString = a => typeof a == "string" ? a : a?.message
}
)(se || (se = {}));
class Ta {
    constructor(a, s, l, u) {
        this._cachedPath = [],
        this.parent = a,
        this.data = s,
        this._path = l,
        this._key = u
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const eg = (n, a) => {
    if (us(a))
        return {
            success: !0,
            data: a.value
        };
    if (!n.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const s = new Gn(n.common.issues);
            return this._error = s,
            this._error
        }
    }
}
;
function ve(n) {
    if (!n)
        return {};
    const {errorMap: a, invalid_type_error: s, required_error: l, description: u} = n;
    if (a && (s || l))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return a ? {
        errorMap: a,
        description: u
    } : {
        errorMap: (d, h) => {
            const {message: y} = n;
            return d.code === "invalid_enum_value" ? {
                message: y ?? h.defaultError
            } : typeof h.data > "u" ? {
                message: y ?? l ?? h.defaultError
            } : d.code !== "invalid_type" ? {
                message: h.defaultError
            } : {
                message: y ?? s ?? h.defaultError
            }
        }
        ,
        description: u
    }
}
class Te {
    get description() {
        return this._def.description
    }
    _getType(a) {
        return ba(a.data)
    }
    _getOrReturnCtx(a, s) {
        return s || {
            common: a.parent.common,
            data: a.data,
            parsedType: ba(a.data),
            schemaErrorMap: this._def.errorMap,
            path: a.path,
            parent: a.parent
        }
    }
    _processInputParams(a) {
        return {
            status: new Qt,
            ctx: {
                common: a.parent.common,
                data: a.data,
                parsedType: ba(a.data),
                schemaErrorMap: this._def.errorMap,
                path: a.path,
                parent: a.parent
            }
        }
    }
    _parseSync(a) {
        const s = this._parse(a);
        if (hu(s))
            throw new Error("Synchronous parse encountered promise.");
        return s
    }
    _parseAsync(a) {
        const s = this._parse(a);
        return Promise.resolve(s)
    }
    parse(a, s) {
        const l = this.safeParse(a, s);
        if (l.success)
            return l.data;
        throw l.error
    }
    safeParse(a, s) {
        const l = {
            common: {
                issues: [],
                async: s?.async ?? !1,
                contextualErrorMap: s?.errorMap
            },
            path: s?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: a,
            parsedType: ba(a)
        }
          , u = this._parseSync({
            data: a,
            path: l.path,
            parent: l
        });
        return eg(l, u)
    }
    "~validate"(a) {
        const s = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: a,
            parsedType: ba(a)
        };
        if (!this["~standard"].async)
            try {
                const l = this._parseSync({
                    data: a,
                    path: [],
                    parent: s
                });
                return us(l) ? {
                    value: l.value
                } : {
                    issues: s.common.issues
                }
            } catch (l) {
                l?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0),
                s.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: a,
            path: [],
            parent: s
        }).then(l => us(l) ? {
            value: l.value
        } : {
            issues: s.common.issues
        })
    }
    async parseAsync(a, s) {
        const l = await this.safeParseAsync(a, s);
        if (l.success)
            return l.data;
        throw l.error
    }
    async safeParseAsync(a, s) {
        const l = {
            common: {
                issues: [],
                contextualErrorMap: s?.errorMap,
                async: !0
            },
            path: s?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: a,
            parsedType: ba(a)
        }
          , u = this._parse({
            data: a,
            path: l.path,
            parent: l
        })
          , f = await (hu(u) ? u : Promise.resolve(u));
        return eg(l, f)
    }
    refine(a, s) {
        const l = u => typeof s == "string" || typeof s > "u" ? {
            message: s
        } : typeof s == "function" ? s(u) : s;
        return this._refinement( (u, f) => {
            const d = a(u)
              , h = () => f.addIssue({
                code: P.custom,
                ...l(u)
            });
            return typeof Promise < "u" && d instanceof Promise ? d.then(y => y ? !0 : (h(),
            !1)) : d ? !0 : (h(),
            !1)
        }
        )
    }
    refinement(a, s) {
        return this._refinement( (l, u) => a(l) ? !0 : (u.addIssue(typeof s == "function" ? s(l, u) : s),
        !1))
    }
    _refinement(a) {
        return new fs({
            schema: this,
            typeName: me.ZodEffects,
            effect: {
                type: "refinement",
                refinement: a
            }
        })
    }
    superRefine(a) {
        return this._refinement(a)
    }
    constructor(a) {
        this.spa = this.safeParseAsync,
        this._def = a,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: s => this["~validate"](s)
        }
    }
    optional() {
        return Aa.create(this, this._def)
    }
    nullable() {
        return ds.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return vn.create(this)
    }
    promise() {
        return gu.create(this, this._def)
    }
    or(a) {
        return pu.create([this, a], this._def)
    }
    and(a) {
        return yu.create(this, a, this._def)
    }
    transform(a) {
        return new fs({
            ...ve(this._def),
            schema: this,
            typeName: me.ZodEffects,
            effect: {
                type: "transform",
                transform: a
            }
        })
    }
    default(a) {
        const s = typeof a == "function" ? a : () => a;
        return new Ef({
            ...ve(this._def),
            innerType: this,
            defaultValue: s,
            typeName: me.ZodDefault
        })
    }
    brand() {
        return new SR({
            typeName: me.ZodBranded,
            type: this,
            ...ve(this._def)
        })
    }
    catch(a) {
        const s = typeof a == "function" ? a : () => a;
        return new Rf({
            ...ve(this._def),
            innerType: this,
            catchValue: s,
            typeName: me.ZodCatch
        })
    }
    describe(a) {
        const s = this.constructor;
        return new s({
            ...this._def,
            description: a
        })
    }
    pipe(a) {
        return Zf.create(this, a)
    }
    readonly() {
        return Af.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const $E = /^c[^\s-]{8,}$/i
  , WE = /^[0-9a-z]+$/
  , eR = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , tR = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , nR = /^[a-z0-9_-]{21}$/i
  , aR = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , iR = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , sR = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , rR = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let lf;
const lR = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , uR = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , oR = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , cR = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , fR = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , dR = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , Lv = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , hR = new RegExp(`^${Lv}$`);
function Uv(n) {
    let a = "[0-5]\\d";
    n.precision ? a = `${a}\\.\\d{${n.precision}}` : n.precision == null && (a = `${a}(\\.\\d+)?`);
    const s = n.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${a})${s}`
}
function mR(n) {
    return new RegExp(`^${Uv(n)}$`)
}
function pR(n) {
    let a = `${Lv}T${Uv(n)}`;
    const s = [];
    return s.push(n.local ? "Z?" : "Z"),
    n.offset && s.push("([+-]\\d{2}:?\\d{2})"),
    a = `${a}(${s.join("|")})`,
    new RegExp(`^${a}$`)
}
function yR(n, a) {
    return !!((a === "v4" || !a) && lR.test(n) || (a === "v6" || !a) && oR.test(n))
}
function gR(n, a) {
    if (!aR.test(n))
        return !1;
    try {
        const [s] = n.split(".");
        if (!s)
            return !1;
        const l = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(s.length + (4 - s.length % 4) % 4, "=")
          , u = JSON.parse(atob(l));
        return !(typeof u != "object" || u === null || "typ"in u && u?.typ !== "JWT" || !u.alg || a && u.alg !== a)
    } catch {
        return !1
    }
}
function vR(n, a) {
    return !!((a === "v4" || !a) && uR.test(n) || (a === "v6" || !a) && cR.test(n))
}
class Zn extends Te {
    _parse(a) {
        if (this._def.coerce && (a.data = String(a.data)),
        this._getType(a) !== ae.string) {
            const f = this._getOrReturnCtx(a);
            return te(f, {
                code: P.invalid_type,
                expected: ae.string,
                received: f.parsedType
            }),
            he
        }
        const l = new Qt;
        let u;
        for (const f of this._def.checks)
            if (f.kind === "min")
                a.data.length < f.value && (u = this._getOrReturnCtx(a, u),
                te(u, {
                    code: P.too_small,
                    minimum: f.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "max")
                a.data.length > f.value && (u = this._getOrReturnCtx(a, u),
                te(u, {
                    code: P.too_big,
                    maximum: f.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "length") {
                const d = a.data.length > f.value
                  , h = a.data.length < f.value;
                (d || h) && (u = this._getOrReturnCtx(a, u),
                d ? te(u, {
                    code: P.too_big,
                    maximum: f.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: f.message
                }) : h && te(u, {
                    code: P.too_small,
                    minimum: f.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: f.message
                }),
                l.dirty())
            } else if (f.kind === "email")
                sR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "email",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "emoji")
                lf || (lf = new RegExp(rR,"u")),
                lf.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "emoji",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "uuid")
                tR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "uuid",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "nanoid")
                nR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "nanoid",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "cuid")
                $E.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "cuid",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "cuid2")
                WE.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "cuid2",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "ulid")
                eR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "ulid",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty());
            else if (f.kind === "url")
                try {
                    new URL(a.data)
                } catch {
                    u = this._getOrReturnCtx(a, u),
                    te(u, {
                        validation: "url",
                        code: P.invalid_string,
                        message: f.message
                    }),
                    l.dirty()
                }
            else
                f.kind === "regex" ? (f.regex.lastIndex = 0,
                f.regex.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "regex",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty())) : f.kind === "trim" ? a.data = a.data.trim() : f.kind === "includes" ? a.data.includes(f.value, f.position) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    code: P.invalid_string,
                    validation: {
                        includes: f.value,
                        position: f.position
                    },
                    message: f.message
                }),
                l.dirty()) : f.kind === "toLowerCase" ? a.data = a.data.toLowerCase() : f.kind === "toUpperCase" ? a.data = a.data.toUpperCase() : f.kind === "startsWith" ? a.data.startsWith(f.value) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    code: P.invalid_string,
                    validation: {
                        startsWith: f.value
                    },
                    message: f.message
                }),
                l.dirty()) : f.kind === "endsWith" ? a.data.endsWith(f.value) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    code: P.invalid_string,
                    validation: {
                        endsWith: f.value
                    },
                    message: f.message
                }),
                l.dirty()) : f.kind === "datetime" ? pR(f).test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    code: P.invalid_string,
                    validation: "datetime",
                    message: f.message
                }),
                l.dirty()) : f.kind === "date" ? hR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    code: P.invalid_string,
                    validation: "date",
                    message: f.message
                }),
                l.dirty()) : f.kind === "time" ? mR(f).test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    code: P.invalid_string,
                    validation: "time",
                    message: f.message
                }),
                l.dirty()) : f.kind === "duration" ? iR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "duration",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "ip" ? yR(a.data, f.version) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "ip",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "jwt" ? gR(a.data, f.alg) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "jwt",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "cidr" ? vR(a.data, f.version) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "cidr",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "base64" ? fR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "base64",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty()) : f.kind === "base64url" ? dR.test(a.data) || (u = this._getOrReturnCtx(a, u),
                te(u, {
                    validation: "base64url",
                    code: P.invalid_string,
                    message: f.message
                }),
                l.dirty()) : Me.assertNever(f);
        return {
            status: l.value,
            value: a.data
        }
    }
    _regex(a, s, l) {
        return this.refinement(u => a.test(u), {
            validation: s,
            code: P.invalid_string,
            ...se.errToObj(l)
        })
    }
    _addCheck(a) {
        return new Zn({
            ...this._def,
            checks: [...this._def.checks, a]
        })
    }
    email(a) {
        return this._addCheck({
            kind: "email",
            ...se.errToObj(a)
        })
    }
    url(a) {
        return this._addCheck({
            kind: "url",
            ...se.errToObj(a)
        })
    }
    emoji(a) {
        return this._addCheck({
            kind: "emoji",
            ...se.errToObj(a)
        })
    }
    uuid(a) {
        return this._addCheck({
            kind: "uuid",
            ...se.errToObj(a)
        })
    }
    nanoid(a) {
        return this._addCheck({
            kind: "nanoid",
            ...se.errToObj(a)
        })
    }
    cuid(a) {
        return this._addCheck({
            kind: "cuid",
            ...se.errToObj(a)
        })
    }
    cuid2(a) {
        return this._addCheck({
            kind: "cuid2",
            ...se.errToObj(a)
        })
    }
    ulid(a) {
        return this._addCheck({
            kind: "ulid",
            ...se.errToObj(a)
        })
    }
    base64(a) {
        return this._addCheck({
            kind: "base64",
            ...se.errToObj(a)
        })
    }
    base64url(a) {
        return this._addCheck({
            kind: "base64url",
            ...se.errToObj(a)
        })
    }
    jwt(a) {
        return this._addCheck({
            kind: "jwt",
            ...se.errToObj(a)
        })
    }
    ip(a) {
        return this._addCheck({
            kind: "ip",
            ...se.errToObj(a)
        })
    }
    cidr(a) {
        return this._addCheck({
            kind: "cidr",
            ...se.errToObj(a)
        })
    }
    datetime(a) {
        return typeof a == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: a
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof a?.precision > "u" ? null : a?.precision,
            offset: a?.offset ?? !1,
            local: a?.local ?? !1,
            ...se.errToObj(a?.message)
        })
    }
    date(a) {
        return this._addCheck({
            kind: "date",
            message: a
        })
    }
    time(a) {
        return typeof a == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: a
        }) : this._addCheck({
            kind: "time",
            precision: typeof a?.precision > "u" ? null : a?.precision,
            ...se.errToObj(a?.message)
        })
    }
    duration(a) {
        return this._addCheck({
            kind: "duration",
            ...se.errToObj(a)
        })
    }
    regex(a, s) {
        return this._addCheck({
            kind: "regex",
            regex: a,
            ...se.errToObj(s)
        })
    }
    includes(a, s) {
        return this._addCheck({
            kind: "includes",
            value: a,
            position: s?.position,
            ...se.errToObj(s?.message)
        })
    }
    startsWith(a, s) {
        return this._addCheck({
            kind: "startsWith",
            value: a,
            ...se.errToObj(s)
        })
    }
    endsWith(a, s) {
        return this._addCheck({
            kind: "endsWith",
            value: a,
            ...se.errToObj(s)
        })
    }
    min(a, s) {
        return this._addCheck({
            kind: "min",
            value: a,
            ...se.errToObj(s)
        })
    }
    max(a, s) {
        return this._addCheck({
            kind: "max",
            value: a,
            ...se.errToObj(s)
        })
    }
    length(a, s) {
        return this._addCheck({
            kind: "length",
            value: a,
            ...se.errToObj(s)
        })
    }
    nonempty(a) {
        return this.min(1, se.errToObj(a))
    }
    trim() {
        return new Zn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new Zn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new Zn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(a => a.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(a => a.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(a => a.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(a => a.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(a => a.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(a => a.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(a => a.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(a => a.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(a => a.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(a => a.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(a => a.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(a => a.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(a => a.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(a => a.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(a => a.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(a => a.kind === "base64url")
    }
    get minLength() {
        let a = null;
        for (const s of this._def.checks)
            s.kind === "min" && (a === null || s.value > a) && (a = s.value);
        return a
    }
    get maxLength() {
        let a = null;
        for (const s of this._def.checks)
            s.kind === "max" && (a === null || s.value < a) && (a = s.value);
        return a
    }
}
Zn.create = n => new Zn({
    checks: [],
    typeName: me.ZodString,
    coerce: n?.coerce ?? !1,
    ...ve(n)
});
function bR(n, a) {
    const s = (n.toString().split(".")[1] || "").length
      , l = (a.toString().split(".")[1] || "").length
      , u = s > l ? s : l
      , f = Number.parseInt(n.toFixed(u).replace(".", ""))
      , d = Number.parseInt(a.toFixed(u).replace(".", ""));
    return f % d / 10 ** u
}
class li extends Te {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(a) {
        if (this._def.coerce && (a.data = Number(a.data)),
        this._getType(a) !== ae.number) {
            const f = this._getOrReturnCtx(a);
            return te(f, {
                code: P.invalid_type,
                expected: ae.number,
                received: f.parsedType
            }),
            he
        }
        let l;
        const u = new Qt;
        for (const f of this._def.checks)
            f.kind === "int" ? Me.isInteger(a.data) || (l = this._getOrReturnCtx(a, l),
            te(l, {
                code: P.invalid_type,
                expected: "integer",
                received: "float",
                message: f.message
            }),
            u.dirty()) : f.kind === "min" ? (f.inclusive ? a.data < f.value : a.data <= f.value) && (l = this._getOrReturnCtx(a, l),
            te(l, {
                code: P.too_small,
                minimum: f.value,
                type: "number",
                inclusive: f.inclusive,
                exact: !1,
                message: f.message
            }),
            u.dirty()) : f.kind === "max" ? (f.inclusive ? a.data > f.value : a.data >= f.value) && (l = this._getOrReturnCtx(a, l),
            te(l, {
                code: P.too_big,
                maximum: f.value,
                type: "number",
                inclusive: f.inclusive,
                exact: !1,
                message: f.message
            }),
            u.dirty()) : f.kind === "multipleOf" ? bR(a.data, f.value) !== 0 && (l = this._getOrReturnCtx(a, l),
            te(l, {
                code: P.not_multiple_of,
                multipleOf: f.value,
                message: f.message
            }),
            u.dirty()) : f.kind === "finite" ? Number.isFinite(a.data) || (l = this._getOrReturnCtx(a, l),
            te(l, {
                code: P.not_finite,
                message: f.message
            }),
            u.dirty()) : Me.assertNever(f);
        return {
            status: u.value,
            value: a.data
        }
    }
    gte(a, s) {
        return this.setLimit("min", a, !0, se.toString(s))
    }
    gt(a, s) {
        return this.setLimit("min", a, !1, se.toString(s))
    }
    lte(a, s) {
        return this.setLimit("max", a, !0, se.toString(s))
    }
    lt(a, s) {
        return this.setLimit("max", a, !1, se.toString(s))
    }
    setLimit(a, s, l, u) {
        return new li({
            ...this._def,
            checks: [...this._def.checks, {
                kind: a,
                value: s,
                inclusive: l,
                message: se.toString(u)
            }]
        })
    }
    _addCheck(a) {
        return new li({
            ...this._def,
            checks: [...this._def.checks, a]
        })
    }
    int(a) {
        return this._addCheck({
            kind: "int",
            message: se.toString(a)
        })
    }
    positive(a) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: se.toString(a)
        })
    }
    negative(a) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: se.toString(a)
        })
    }
    nonpositive(a) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: se.toString(a)
        })
    }
    nonnegative(a) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: se.toString(a)
        })
    }
    multipleOf(a, s) {
        return this._addCheck({
            kind: "multipleOf",
            value: a,
            message: se.toString(s)
        })
    }
    finite(a) {
        return this._addCheck({
            kind: "finite",
            message: se.toString(a)
        })
    }
    safe(a) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: se.toString(a)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: se.toString(a)
        })
    }
    get minValue() {
        let a = null;
        for (const s of this._def.checks)
            s.kind === "min" && (a === null || s.value > a) && (a = s.value);
        return a
    }
    get maxValue() {
        let a = null;
        for (const s of this._def.checks)
            s.kind === "max" && (a === null || s.value < a) && (a = s.value);
        return a
    }
    get isInt() {
        return !!this._def.checks.find(a => a.kind === "int" || a.kind === "multipleOf" && Me.isInteger(a.value))
    }
    get isFinite() {
        let a = null
          , s = null;
        for (const l of this._def.checks) {
            if (l.kind === "finite" || l.kind === "int" || l.kind === "multipleOf")
                return !0;
            l.kind === "min" ? (s === null || l.value > s) && (s = l.value) : l.kind === "max" && (a === null || l.value < a) && (a = l.value)
        }
        return Number.isFinite(s) && Number.isFinite(a)
    }
}
li.create = n => new li({
    checks: [],
    typeName: me.ZodNumber,
    coerce: n?.coerce || !1,
    ...ve(n)
});
class ui extends Te {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(a) {
        if (this._def.coerce)
            try {
                a.data = BigInt(a.data)
            } catch {
                return this._getInvalidInput(a)
            }
        if (this._getType(a) !== ae.bigint)
            return this._getInvalidInput(a);
        let l;
        const u = new Qt;
        for (const f of this._def.checks)
            f.kind === "min" ? (f.inclusive ? a.data < f.value : a.data <= f.value) && (l = this._getOrReturnCtx(a, l),
            te(l, {
                code: P.too_small,
                type: "bigint",
                minimum: f.value,
                inclusive: f.inclusive,
                message: f.message
            }),
            u.dirty()) : f.kind === "max" ? (f.inclusive ? a.data > f.value : a.data >= f.value) && (l = this._getOrReturnCtx(a, l),
            te(l, {
                code: P.too_big,
                type: "bigint",
                maximum: f.value,
                inclusive: f.inclusive,
                message: f.message
            }),
            u.dirty()) : f.kind === "multipleOf" ? a.data % f.value !== BigInt(0) && (l = this._getOrReturnCtx(a, l),
            te(l, {
                code: P.not_multiple_of,
                multipleOf: f.value,
                message: f.message
            }),
            u.dirty()) : Me.assertNever(f);
        return {
            status: u.value,
            value: a.data
        }
    }
    _getInvalidInput(a) {
        const s = this._getOrReturnCtx(a);
        return te(s, {
            code: P.invalid_type,
            expected: ae.bigint,
            received: s.parsedType
        }),
        he
    }
    gte(a, s) {
        return this.setLimit("min", a, !0, se.toString(s))
    }
    gt(a, s) {
        return this.setLimit("min", a, !1, se.toString(s))
    }
    lte(a, s) {
        return this.setLimit("max", a, !0, se.toString(s))
    }
    lt(a, s) {
        return this.setLimit("max", a, !1, se.toString(s))
    }
    setLimit(a, s, l, u) {
        return new ui({
            ...this._def,
            checks: [...this._def.checks, {
                kind: a,
                value: s,
                inclusive: l,
                message: se.toString(u)
            }]
        })
    }
    _addCheck(a) {
        return new ui({
            ...this._def,
            checks: [...this._def.checks, a]
        })
    }
    positive(a) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: se.toString(a)
        })
    }
    negative(a) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: se.toString(a)
        })
    }
    nonpositive(a) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: se.toString(a)
        })
    }
    nonnegative(a) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: se.toString(a)
        })
    }
    multipleOf(a, s) {
        return this._addCheck({
            kind: "multipleOf",
            value: a,
            message: se.toString(s)
        })
    }
    get minValue() {
        let a = null;
        for (const s of this._def.checks)
            s.kind === "min" && (a === null || s.value > a) && (a = s.value);
        return a
    }
    get maxValue() {
        let a = null;
        for (const s of this._def.checks)
            s.kind === "max" && (a === null || s.value < a) && (a = s.value);
        return a
    }
}
ui.create = n => new ui({
    checks: [],
    typeName: me.ZodBigInt,
    coerce: n?.coerce ?? !1,
    ...ve(n)
});
class mu extends Te {
    _parse(a) {
        if (this._def.coerce && (a.data = !!a.data),
        this._getType(a) !== ae.boolean) {
            const l = this._getOrReturnCtx(a);
            return te(l, {
                code: P.invalid_type,
                expected: ae.boolean,
                received: l.parsedType
            }),
            he
        }
        return nn(a.data)
    }
}
mu.create = n => new mu({
    typeName: me.ZodBoolean,
    coerce: n?.coerce || !1,
    ...ve(n)
});
class os extends Te {
    _parse(a) {
        if (this._def.coerce && (a.data = new Date(a.data)),
        this._getType(a) !== ae.date) {
            const f = this._getOrReturnCtx(a);
            return te(f, {
                code: P.invalid_type,
                expected: ae.date,
                received: f.parsedType
            }),
            he
        }
        if (Number.isNaN(a.data.getTime())) {
            const f = this._getOrReturnCtx(a);
            return te(f, {
                code: P.invalid_date
            }),
            he
        }
        const l = new Qt;
        let u;
        for (const f of this._def.checks)
            f.kind === "min" ? a.data.getTime() < f.value && (u = this._getOrReturnCtx(a, u),
            te(u, {
                code: P.too_small,
                message: f.message,
                inclusive: !0,
                exact: !1,
                minimum: f.value,
                type: "date"
            }),
            l.dirty()) : f.kind === "max" ? a.data.getTime() > f.value && (u = this._getOrReturnCtx(a, u),
            te(u, {
                code: P.too_big,
                message: f.message,
                inclusive: !0,
                exact: !1,
                maximum: f.value,
                type: "date"
            }),
            l.dirty()) : Me.assertNever(f);
        return {
            status: l.value,
            value: new Date(a.data.getTime())
        }
    }
    _addCheck(a) {
        return new os({
            ...this._def,
            checks: [...this._def.checks, a]
        })
    }
    min(a, s) {
        return this._addCheck({
            kind: "min",
            value: a.getTime(),
            message: se.toString(s)
        })
    }
    max(a, s) {
        return this._addCheck({
            kind: "max",
            value: a.getTime(),
            message: se.toString(s)
        })
    }
    get minDate() {
        let a = null;
        for (const s of this._def.checks)
            s.kind === "min" && (a === null || s.value > a) && (a = s.value);
        return a != null ? new Date(a) : null
    }
    get maxDate() {
        let a = null;
        for (const s of this._def.checks)
            s.kind === "max" && (a === null || s.value < a) && (a = s.value);
        return a != null ? new Date(a) : null
    }
}
os.create = n => new os({
    checks: [],
    coerce: n?.coerce || !1,
    typeName: me.ZodDate,
    ...ve(n)
});
class tg extends Te {
    _parse(a) {
        if (this._getType(a) !== ae.symbol) {
            const l = this._getOrReturnCtx(a);
            return te(l, {
                code: P.invalid_type,
                expected: ae.symbol,
                received: l.parsedType
            }),
            he
        }
        return nn(a.data)
    }
}
tg.create = n => new tg({
    typeName: me.ZodSymbol,
    ...ve(n)
});
class ng extends Te {
    _parse(a) {
        if (this._getType(a) !== ae.undefined) {
            const l = this._getOrReturnCtx(a);
            return te(l, {
                code: P.invalid_type,
                expected: ae.undefined,
                received: l.parsedType
            }),
            he
        }
        return nn(a.data)
    }
}
ng.create = n => new ng({
    typeName: me.ZodUndefined,
    ...ve(n)
});
class ag extends Te {
    _parse(a) {
        if (this._getType(a) !== ae.null) {
            const l = this._getOrReturnCtx(a);
            return te(l, {
                code: P.invalid_type,
                expected: ae.null,
                received: l.parsedType
            }),
            he
        }
        return nn(a.data)
    }
}
ag.create = n => new ag({
    typeName: me.ZodNull,
    ...ve(n)
});
class ig extends Te {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(a) {
        return nn(a.data)
    }
}
ig.create = n => new ig({
    typeName: me.ZodAny,
    ...ve(n)
});
class sg extends Te {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(a) {
        return nn(a.data)
    }
}
sg.create = n => new sg({
    typeName: me.ZodUnknown,
    ...ve(n)
});
class Ca extends Te {
    _parse(a) {
        const s = this._getOrReturnCtx(a);
        return te(s, {
            code: P.invalid_type,
            expected: ae.never,
            received: s.parsedType
        }),
        he
    }
}
Ca.create = n => new Ca({
    typeName: me.ZodNever,
    ...ve(n)
});
class rg extends Te {
    _parse(a) {
        if (this._getType(a) !== ae.undefined) {
            const l = this._getOrReturnCtx(a);
            return te(l, {
                code: P.invalid_type,
                expected: ae.void,
                received: l.parsedType
            }),
            he
        }
        return nn(a.data)
    }
}
rg.create = n => new rg({
    typeName: me.ZodVoid,
    ...ve(n)
});
class vn extends Te {
    _parse(a) {
        const {ctx: s, status: l} = this._processInputParams(a)
          , u = this._def;
        if (s.parsedType !== ae.array)
            return te(s, {
                code: P.invalid_type,
                expected: ae.array,
                received: s.parsedType
            }),
            he;
        if (u.exactLength !== null) {
            const d = s.data.length > u.exactLength.value
              , h = s.data.length < u.exactLength.value;
            (d || h) && (te(s, {
                code: d ? P.too_big : P.too_small,
                minimum: h ? u.exactLength.value : void 0,
                maximum: d ? u.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: u.exactLength.message
            }),
            l.dirty())
        }
        if (u.minLength !== null && s.data.length < u.minLength.value && (te(s, {
            code: P.too_small,
            minimum: u.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: u.minLength.message
        }),
        l.dirty()),
        u.maxLength !== null && s.data.length > u.maxLength.value && (te(s, {
            code: P.too_big,
            maximum: u.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: u.maxLength.message
        }),
        l.dirty()),
        s.common.async)
            return Promise.all([...s.data].map( (d, h) => u.type._parseAsync(new Ta(s,d,s.path,h)))).then(d => Qt.mergeArray(l, d));
        const f = [...s.data].map( (d, h) => u.type._parseSync(new Ta(s,d,s.path,h)));
        return Qt.mergeArray(l, f)
    }
    get element() {
        return this._def.type
    }
    min(a, s) {
        return new vn({
            ...this._def,
            minLength: {
                value: a,
                message: se.toString(s)
            }
        })
    }
    max(a, s) {
        return new vn({
            ...this._def,
            maxLength: {
                value: a,
                message: se.toString(s)
            }
        })
    }
    length(a, s) {
        return new vn({
            ...this._def,
            exactLength: {
                value: a,
                message: se.toString(s)
            }
        })
    }
    nonempty(a) {
        return this.min(1, a)
    }
}
vn.create = (n, a) => new vn({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: me.ZodArray,
    ...ve(a)
});
function ts(n) {
    if (n instanceof rt) {
        const a = {};
        for (const s in n.shape) {
            const l = n.shape[s];
            a[s] = Aa.create(ts(l))
        }
        return new rt({
            ...n._def,
            shape: () => a
        })
    } else
        return n instanceof vn ? new vn({
            ...n._def,
            type: ts(n.element)
        }) : n instanceof Aa ? Aa.create(ts(n.unwrap())) : n instanceof ds ? ds.create(ts(n.unwrap())) : n instanceof oi ? oi.create(n.items.map(a => ts(a))) : n
}
class rt extends Te {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const a = this._def.shape()
          , s = Me.objectKeys(a);
        return this._cached = {
            shape: a,
            keys: s
        },
        this._cached
    }
    _parse(a) {
        if (this._getType(a) !== ae.object) {
            const p = this._getOrReturnCtx(a);
            return te(p, {
                code: P.invalid_type,
                expected: ae.object,
                received: p.parsedType
            }),
            he
        }
        const {status: l, ctx: u} = this._processInputParams(a)
          , {shape: f, keys: d} = this._getCached()
          , h = [];
        if (!(this._def.catchall instanceof Ca && this._def.unknownKeys === "strip"))
            for (const p in u.data)
                d.includes(p) || h.push(p);
        const y = [];
        for (const p of d) {
            const v = f[p]
              , g = u.data[p];
            y.push({
                key: {
                    status: "valid",
                    value: p
                },
                value: v._parse(new Ta(u,g,u.path,p)),
                alwaysSet: p in u.data
            })
        }
        if (this._def.catchall instanceof Ca) {
            const p = this._def.unknownKeys;
            if (p === "passthrough")
                for (const v of h)
                    y.push({
                        key: {
                            status: "valid",
                            value: v
                        },
                        value: {
                            status: "valid",
                            value: u.data[v]
                        }
                    });
            else if (p === "strict")
                h.length > 0 && (te(u, {
                    code: P.unrecognized_keys,
                    keys: h
                }),
                l.dirty());
            else if (p !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const p = this._def.catchall;
            for (const v of h) {
                const g = u.data[v];
                y.push({
                    key: {
                        status: "valid",
                        value: v
                    },
                    value: p._parse(new Ta(u,g,u.path,v)),
                    alwaysSet: v in u.data
                })
            }
        }
        return u.common.async ? Promise.resolve().then(async () => {
            const p = [];
            for (const v of y) {
                const g = await v.key
                  , _ = await v.value;
                p.push({
                    key: g,
                    value: _,
                    alwaysSet: v.alwaysSet
                })
            }
            return p
        }
        ).then(p => Qt.mergeObjectSync(l, p)) : Qt.mergeObjectSync(l, y)
    }
    get shape() {
        return this._def.shape()
    }
    strict(a) {
        return se.errToObj,
        new rt({
            ...this._def,
            unknownKeys: "strict",
            ...a !== void 0 ? {
                errorMap: (s, l) => {
                    const u = this._def.errorMap?.(s, l).message ?? l.defaultError;
                    return s.code === "unrecognized_keys" ? {
                        message: se.errToObj(a).message ?? u
                    } : {
                        message: u
                    }
                }
            } : {}
        })
    }
    strip() {
        return new rt({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new rt({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(a) {
        return new rt({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...a
            })
        })
    }
    merge(a) {
        return new rt({
            unknownKeys: a._def.unknownKeys,
            catchall: a._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...a._def.shape()
            }),
            typeName: me.ZodObject
        })
    }
    setKey(a, s) {
        return this.augment({
            [a]: s
        })
    }
    catchall(a) {
        return new rt({
            ...this._def,
            catchall: a
        })
    }
    pick(a) {
        const s = {};
        for (const l of Me.objectKeys(a))
            a[l] && this.shape[l] && (s[l] = this.shape[l]);
        return new rt({
            ...this._def,
            shape: () => s
        })
    }
    omit(a) {
        const s = {};
        for (const l of Me.objectKeys(this.shape))
            a[l] || (s[l] = this.shape[l]);
        return new rt({
            ...this._def,
            shape: () => s
        })
    }
    deepPartial() {
        return ts(this)
    }
    partial(a) {
        const s = {};
        for (const l of Me.objectKeys(this.shape)) {
            const u = this.shape[l];
            a && !a[l] ? s[l] = u : s[l] = u.optional()
        }
        return new rt({
            ...this._def,
            shape: () => s
        })
    }
    required(a) {
        const s = {};
        for (const l of Me.objectKeys(this.shape))
            if (a && !a[l])
                s[l] = this.shape[l];
            else {
                let f = this.shape[l];
                for (; f instanceof Aa; )
                    f = f._def.innerType;
                s[l] = f
            }
        return new rt({
            ...this._def,
            shape: () => s
        })
    }
    keyof() {
        return kv(Me.objectKeys(this.shape))
    }
}
rt.create = (n, a) => new rt({
    shape: () => n,
    unknownKeys: "strip",
    catchall: Ca.create(),
    typeName: me.ZodObject,
    ...ve(a)
});
rt.strictCreate = (n, a) => new rt({
    shape: () => n,
    unknownKeys: "strict",
    catchall: Ca.create(),
    typeName: me.ZodObject,
    ...ve(a)
});
rt.lazycreate = (n, a) => new rt({
    shape: n,
    unknownKeys: "strip",
    catchall: Ca.create(),
    typeName: me.ZodObject,
    ...ve(a)
});
class pu extends Te {
    _parse(a) {
        const {ctx: s} = this._processInputParams(a)
          , l = this._def.options;
        function u(f) {
            for (const h of f)
                if (h.result.status === "valid")
                    return h.result;
            for (const h of f)
                if (h.result.status === "dirty")
                    return s.common.issues.push(...h.ctx.common.issues),
                    h.result;
            const d = f.map(h => new Gn(h.ctx.common.issues));
            return te(s, {
                code: P.invalid_union,
                unionErrors: d
            }),
            he
        }
        if (s.common.async)
            return Promise.all(l.map(async f => {
                const d = {
                    ...s,
                    common: {
                        ...s.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await f._parseAsync({
                        data: s.data,
                        path: s.path,
                        parent: d
                    }),
                    ctx: d
                }
            }
            )).then(u);
        {
            let f;
            const d = [];
            for (const y of l) {
                const p = {
                    ...s,
                    common: {
                        ...s.common,
                        issues: []
                    },
                    parent: null
                }
                  , v = y._parseSync({
                    data: s.data,
                    path: s.path,
                    parent: p
                });
                if (v.status === "valid")
                    return v;
                v.status === "dirty" && !f && (f = {
                    result: v,
                    ctx: p
                }),
                p.common.issues.length && d.push(p.common.issues)
            }
            if (f)
                return s.common.issues.push(...f.ctx.common.issues),
                f.result;
            const h = d.map(y => new Gn(y));
            return te(s, {
                code: P.invalid_union,
                unionErrors: h
            }),
            he
        }
    }
    get options() {
        return this._def.options
    }
}
pu.create = (n, a) => new pu({
    options: n,
    typeName: me.ZodUnion,
    ...ve(a)
});
function wf(n, a) {
    const s = ba(n)
      , l = ba(a);
    if (n === a)
        return {
            valid: !0,
            data: n
        };
    if (s === ae.object && l === ae.object) {
        const u = Me.objectKeys(a)
          , f = Me.objectKeys(n).filter(h => u.indexOf(h) !== -1)
          , d = {
            ...n,
            ...a
        };
        for (const h of f) {
            const y = wf(n[h], a[h]);
            if (!y.valid)
                return {
                    valid: !1
                };
            d[h] = y.data
        }
        return {
            valid: !0,
            data: d
        }
    } else if (s === ae.array && l === ae.array) {
        if (n.length !== a.length)
            return {
                valid: !1
            };
        const u = [];
        for (let f = 0; f < n.length; f++) {
            const d = n[f]
              , h = a[f]
              , y = wf(d, h);
            if (!y.valid)
                return {
                    valid: !1
                };
            u.push(y.data)
        }
        return {
            valid: !0,
            data: u
        }
    } else
        return s === ae.date && l === ae.date && +n == +a ? {
            valid: !0,
            data: n
        } : {
            valid: !1
        }
}
class yu extends Te {
    _parse(a) {
        const {status: s, ctx: l} = this._processInputParams(a)
          , u = (f, d) => {
            if ($y(f) || $y(d))
                return he;
            const h = wf(f.value, d.value);
            return h.valid ? ((Wy(f) || Wy(d)) && s.dirty(),
            {
                status: s.value,
                value: h.data
            }) : (te(l, {
                code: P.invalid_intersection_types
            }),
            he)
        }
        ;
        return l.common.async ? Promise.all([this._def.left._parseAsync({
            data: l.data,
            path: l.path,
            parent: l
        }), this._def.right._parseAsync({
            data: l.data,
            path: l.path,
            parent: l
        })]).then( ([f,d]) => u(f, d)) : u(this._def.left._parseSync({
            data: l.data,
            path: l.path,
            parent: l
        }), this._def.right._parseSync({
            data: l.data,
            path: l.path,
            parent: l
        }))
    }
}
yu.create = (n, a, s) => new yu({
    left: n,
    right: a,
    typeName: me.ZodIntersection,
    ...ve(s)
});
class oi extends Te {
    _parse(a) {
        const {status: s, ctx: l} = this._processInputParams(a);
        if (l.parsedType !== ae.array)
            return te(l, {
                code: P.invalid_type,
                expected: ae.array,
                received: l.parsedType
            }),
            he;
        if (l.data.length < this._def.items.length)
            return te(l, {
                code: P.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            he;
        !this._def.rest && l.data.length > this._def.items.length && (te(l, {
            code: P.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        s.dirty());
        const f = [...l.data].map( (d, h) => {
            const y = this._def.items[h] || this._def.rest;
            return y ? y._parse(new Ta(l,d,l.path,h)) : null
        }
        ).filter(d => !!d);
        return l.common.async ? Promise.all(f).then(d => Qt.mergeArray(s, d)) : Qt.mergeArray(s, f)
    }
    get items() {
        return this._def.items
    }
    rest(a) {
        return new oi({
            ...this._def,
            rest: a
        })
    }
}
oi.create = (n, a) => {
    if (!Array.isArray(n))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new oi({
        items: n,
        typeName: me.ZodTuple,
        rest: null,
        ...ve(a)
    })
}
;
class lg extends Te {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(a) {
        const {status: s, ctx: l} = this._processInputParams(a);
        if (l.parsedType !== ae.map)
            return te(l, {
                code: P.invalid_type,
                expected: ae.map,
                received: l.parsedType
            }),
            he;
        const u = this._def.keyType
          , f = this._def.valueType
          , d = [...l.data.entries()].map( ([h,y], p) => ({
            key: u._parse(new Ta(l,h,l.path,[p, "key"])),
            value: f._parse(new Ta(l,y,l.path,[p, "value"]))
        }));
        if (l.common.async) {
            const h = new Map;
            return Promise.resolve().then(async () => {
                for (const y of d) {
                    const p = await y.key
                      , v = await y.value;
                    if (p.status === "aborted" || v.status === "aborted")
                        return he;
                    (p.status === "dirty" || v.status === "dirty") && s.dirty(),
                    h.set(p.value, v.value)
                }
                return {
                    status: s.value,
                    value: h
                }
            }
            )
        } else {
            const h = new Map;
            for (const y of d) {
                const p = y.key
                  , v = y.value;
                if (p.status === "aborted" || v.status === "aborted")
                    return he;
                (p.status === "dirty" || v.status === "dirty") && s.dirty(),
                h.set(p.value, v.value)
            }
            return {
                status: s.value,
                value: h
            }
        }
    }
}
lg.create = (n, a, s) => new lg({
    valueType: a,
    keyType: n,
    typeName: me.ZodMap,
    ...ve(s)
});
class Tr extends Te {
    _parse(a) {
        const {status: s, ctx: l} = this._processInputParams(a);
        if (l.parsedType !== ae.set)
            return te(l, {
                code: P.invalid_type,
                expected: ae.set,
                received: l.parsedType
            }),
            he;
        const u = this._def;
        u.minSize !== null && l.data.size < u.minSize.value && (te(l, {
            code: P.too_small,
            minimum: u.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: u.minSize.message
        }),
        s.dirty()),
        u.maxSize !== null && l.data.size > u.maxSize.value && (te(l, {
            code: P.too_big,
            maximum: u.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: u.maxSize.message
        }),
        s.dirty());
        const f = this._def.valueType;
        function d(y) {
            const p = new Set;
            for (const v of y) {
                if (v.status === "aborted")
                    return he;
                v.status === "dirty" && s.dirty(),
                p.add(v.value)
            }
            return {
                status: s.value,
                value: p
            }
        }
        const h = [...l.data.values()].map( (y, p) => f._parse(new Ta(l,y,l.path,p)));
        return l.common.async ? Promise.all(h).then(y => d(y)) : d(h)
    }
    min(a, s) {
        return new Tr({
            ...this._def,
            minSize: {
                value: a,
                message: se.toString(s)
            }
        })
    }
    max(a, s) {
        return new Tr({
            ...this._def,
            maxSize: {
                value: a,
                message: se.toString(s)
            }
        })
    }
    size(a, s) {
        return this.min(a, s).max(a, s)
    }
    nonempty(a) {
        return this.min(1, a)
    }
}
Tr.create = (n, a) => new Tr({
    valueType: n,
    minSize: null,
    maxSize: null,
    typeName: me.ZodSet,
    ...ve(a)
});
class ug extends Te {
    get schema() {
        return this._def.getter()
    }
    _parse(a) {
        const {ctx: s} = this._processInputParams(a);
        return this._def.getter()._parse({
            data: s.data,
            path: s.path,
            parent: s
        })
    }
}
ug.create = (n, a) => new ug({
    getter: n,
    typeName: me.ZodLazy,
    ...ve(a)
});
class og extends Te {
    _parse(a) {
        if (a.data !== this._def.value) {
            const s = this._getOrReturnCtx(a);
            return te(s, {
                received: s.data,
                code: P.invalid_literal,
                expected: this._def.value
            }),
            he
        }
        return {
            status: "valid",
            value: a.data
        }
    }
    get value() {
        return this._def.value
    }
}
og.create = (n, a) => new og({
    value: n,
    typeName: me.ZodLiteral,
    ...ve(a)
});
function kv(n, a) {
    return new cs({
        values: n,
        typeName: me.ZodEnum,
        ...ve(a)
    })
}
class cs extends Te {
    _parse(a) {
        if (typeof a.data != "string") {
            const s = this._getOrReturnCtx(a)
              , l = this._def.values;
            return te(s, {
                expected: Me.joinValues(l),
                received: s.parsedType,
                code: P.invalid_type
            }),
            he
        }
        if (this._cache || (this._cache = new Set(this._def.values)),
        !this._cache.has(a.data)) {
            const s = this._getOrReturnCtx(a)
              , l = this._def.values;
            return te(s, {
                received: s.data,
                code: P.invalid_enum_value,
                options: l
            }),
            he
        }
        return nn(a.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const a = {};
        for (const s of this._def.values)
            a[s] = s;
        return a
    }
    get Values() {
        const a = {};
        for (const s of this._def.values)
            a[s] = s;
        return a
    }
    get Enum() {
        const a = {};
        for (const s of this._def.values)
            a[s] = s;
        return a
    }
    extract(a, s=this._def) {
        return cs.create(a, {
            ...this._def,
            ...s
        })
    }
    exclude(a, s=this._def) {
        return cs.create(this.options.filter(l => !a.includes(l)), {
            ...this._def,
            ...s
        })
    }
}
cs.create = kv;
class cg extends Te {
    _parse(a) {
        const s = Me.getValidEnumValues(this._def.values)
          , l = this._getOrReturnCtx(a);
        if (l.parsedType !== ae.string && l.parsedType !== ae.number) {
            const u = Me.objectValues(s);
            return te(l, {
                expected: Me.joinValues(u),
                received: l.parsedType,
                code: P.invalid_type
            }),
            he
        }
        if (this._cache || (this._cache = new Set(Me.getValidEnumValues(this._def.values))),
        !this._cache.has(a.data)) {
            const u = Me.objectValues(s);
            return te(l, {
                received: l.data,
                code: P.invalid_enum_value,
                options: u
            }),
            he
        }
        return nn(a.data)
    }
    get enum() {
        return this._def.values
    }
}
cg.create = (n, a) => new cg({
    values: n,
    typeName: me.ZodNativeEnum,
    ...ve(a)
});
class gu extends Te {
    unwrap() {
        return this._def.type
    }
    _parse(a) {
        const {ctx: s} = this._processInputParams(a);
        if (s.parsedType !== ae.promise && s.common.async === !1)
            return te(s, {
                code: P.invalid_type,
                expected: ae.promise,
                received: s.parsedType
            }),
            he;
        const l = s.parsedType === ae.promise ? s.data : Promise.resolve(s.data);
        return nn(l.then(u => this._def.type.parseAsync(u, {
            path: s.path,
            errorMap: s.common.contextualErrorMap
        })))
    }
}
gu.create = (n, a) => new gu({
    type: n,
    typeName: me.ZodPromise,
    ...ve(a)
});
class fs extends Te {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === me.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(a) {
        const {status: s, ctx: l} = this._processInputParams(a)
          , u = this._def.effect || null
          , f = {
            addIssue: d => {
                te(l, d),
                d.fatal ? s.abort() : s.dirty()
            }
            ,
            get path() {
                return l.path
            }
        };
        if (f.addIssue = f.addIssue.bind(f),
        u.type === "preprocess") {
            const d = u.transform(l.data, f);
            if (l.common.async)
                return Promise.resolve(d).then(async h => {
                    if (s.value === "aborted")
                        return he;
                    const y = await this._def.schema._parseAsync({
                        data: h,
                        path: l.path,
                        parent: l
                    });
                    return y.status === "aborted" ? he : y.status === "dirty" || s.value === "dirty" ? vr(y.value) : y
                }
                );
            {
                if (s.value === "aborted")
                    return he;
                const h = this._def.schema._parseSync({
                    data: d,
                    path: l.path,
                    parent: l
                });
                return h.status === "aborted" ? he : h.status === "dirty" || s.value === "dirty" ? vr(h.value) : h
            }
        }
        if (u.type === "refinement") {
            const d = h => {
                const y = u.refinement(h, f);
                if (l.common.async)
                    return Promise.resolve(y);
                if (y instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return h
            }
            ;
            if (l.common.async === !1) {
                const h = this._def.schema._parseSync({
                    data: l.data,
                    path: l.path,
                    parent: l
                });
                return h.status === "aborted" ? he : (h.status === "dirty" && s.dirty(),
                d(h.value),
                {
                    status: s.value,
                    value: h.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: l.data,
                    path: l.path,
                    parent: l
                }).then(h => h.status === "aborted" ? he : (h.status === "dirty" && s.dirty(),
                d(h.value).then( () => ({
                    status: s.value,
                    value: h.value
                }))))
        }
        if (u.type === "transform")
            if (l.common.async === !1) {
                const d = this._def.schema._parseSync({
                    data: l.data,
                    path: l.path,
                    parent: l
                });
                if (!us(d))
                    return he;
                const h = u.transform(d.value, f);
                if (h instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: s.value,
                    value: h
                }
            } else
                return this._def.schema._parseAsync({
                    data: l.data,
                    path: l.path,
                    parent: l
                }).then(d => us(d) ? Promise.resolve(u.transform(d.value, f)).then(h => ({
                    status: s.value,
                    value: h
                })) : he);
        Me.assertNever(u)
    }
}
fs.create = (n, a, s) => new fs({
    schema: n,
    typeName: me.ZodEffects,
    effect: a,
    ...ve(s)
});
fs.createWithPreprocess = (n, a, s) => new fs({
    schema: a,
    effect: {
        type: "preprocess",
        transform: n
    },
    typeName: me.ZodEffects,
    ...ve(s)
});
class Aa extends Te {
    _parse(a) {
        return this._getType(a) === ae.undefined ? nn(void 0) : this._def.innerType._parse(a)
    }
    unwrap() {
        return this._def.innerType
    }
}
Aa.create = (n, a) => new Aa({
    innerType: n,
    typeName: me.ZodOptional,
    ...ve(a)
});
class ds extends Te {
    _parse(a) {
        return this._getType(a) === ae.null ? nn(null) : this._def.innerType._parse(a)
    }
    unwrap() {
        return this._def.innerType
    }
}
ds.create = (n, a) => new ds({
    innerType: n,
    typeName: me.ZodNullable,
    ...ve(a)
});
class Ef extends Te {
    _parse(a) {
        const {ctx: s} = this._processInputParams(a);
        let l = s.data;
        return s.parsedType === ae.undefined && (l = this._def.defaultValue()),
        this._def.innerType._parse({
            data: l,
            path: s.path,
            parent: s
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Ef.create = (n, a) => new Ef({
    innerType: n,
    typeName: me.ZodDefault,
    defaultValue: typeof a.default == "function" ? a.default : () => a.default,
    ...ve(a)
});
class Rf extends Te {
    _parse(a) {
        const {ctx: s} = this._processInputParams(a)
          , l = {
            ...s,
            common: {
                ...s.common,
                issues: []
            }
        }
          , u = this._def.innerType._parse({
            data: l.data,
            path: l.path,
            parent: {
                ...l
            }
        });
        return hu(u) ? u.then(f => ({
            status: "valid",
            value: f.status === "valid" ? f.value : this._def.catchValue({
                get error() {
                    return new Gn(l.common.issues)
                },
                input: l.data
            })
        })) : {
            status: "valid",
            value: u.status === "valid" ? u.value : this._def.catchValue({
                get error() {
                    return new Gn(l.common.issues)
                },
                input: l.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Rf.create = (n, a) => new Rf({
    innerType: n,
    typeName: me.ZodCatch,
    catchValue: typeof a.catch == "function" ? a.catch : () => a.catch,
    ...ve(a)
});
class fg extends Te {
    _parse(a) {
        if (this._getType(a) !== ae.nan) {
            const l = this._getOrReturnCtx(a);
            return te(l, {
                code: P.invalid_type,
                expected: ae.nan,
                received: l.parsedType
            }),
            he
        }
        return {
            status: "valid",
            value: a.data
        }
    }
}
fg.create = n => new fg({
    typeName: me.ZodNaN,
    ...ve(n)
});
class SR extends Te {
    _parse(a) {
        const {ctx: s} = this._processInputParams(a)
          , l = s.data;
        return this._def.type._parse({
            data: l,
            path: s.path,
            parent: s
        })
    }
    unwrap() {
        return this._def.type
    }
}
class Zf extends Te {
    _parse(a) {
        const {status: s, ctx: l} = this._processInputParams(a);
        if (l.common.async)
            return (async () => {
                const f = await this._def.in._parseAsync({
                    data: l.data,
                    path: l.path,
                    parent: l
                });
                return f.status === "aborted" ? he : f.status === "dirty" ? (s.dirty(),
                vr(f.value)) : this._def.out._parseAsync({
                    data: f.value,
                    path: l.path,
                    parent: l
                })
            }
            )();
        {
            const u = this._def.in._parseSync({
                data: l.data,
                path: l.path,
                parent: l
            });
            return u.status === "aborted" ? he : u.status === "dirty" ? (s.dirty(),
            {
                status: "dirty",
                value: u.value
            }) : this._def.out._parseSync({
                data: u.value,
                path: l.path,
                parent: l
            })
        }
    }
    static create(a, s) {
        return new Zf({
            in: a,
            out: s,
            typeName: me.ZodPipeline
        })
    }
}
class Af extends Te {
    _parse(a) {
        const s = this._def.innerType._parse(a)
          , l = u => (us(u) && (u.value = Object.freeze(u.value)),
        u);
        return hu(s) ? s.then(u => l(u)) : l(s)
    }
    unwrap() {
        return this._def.innerType
    }
}
Af.create = (n, a) => new Af({
    innerType: n,
    typeName: me.ZodReadonly,
    ...ve(a)
});
var me;
(function(n) {
    n.ZodString = "ZodString",
    n.ZodNumber = "ZodNumber",
    n.ZodNaN = "ZodNaN",
    n.ZodBigInt = "ZodBigInt",
    n.ZodBoolean = "ZodBoolean",
    n.ZodDate = "ZodDate",
    n.ZodSymbol = "ZodSymbol",
    n.ZodUndefined = "ZodUndefined",
    n.ZodNull = "ZodNull",
    n.ZodAny = "ZodAny",
    n.ZodUnknown = "ZodUnknown",
    n.ZodNever = "ZodNever",
    n.ZodVoid = "ZodVoid",
    n.ZodArray = "ZodArray",
    n.ZodObject = "ZodObject",
    n.ZodUnion = "ZodUnion",
    n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    n.ZodIntersection = "ZodIntersection",
    n.ZodTuple = "ZodTuple",
    n.ZodRecord = "ZodRecord",
    n.ZodMap = "ZodMap",
    n.ZodSet = "ZodSet",
    n.ZodFunction = "ZodFunction",
    n.ZodLazy = "ZodLazy",
    n.ZodLiteral = "ZodLiteral",
    n.ZodEnum = "ZodEnum",
    n.ZodEffects = "ZodEffects",
    n.ZodNativeEnum = "ZodNativeEnum",
    n.ZodOptional = "ZodOptional",
    n.ZodNullable = "ZodNullable",
    n.ZodDefault = "ZodDefault",
    n.ZodCatch = "ZodCatch",
    n.ZodPromise = "ZodPromise",
    n.ZodBranded = "ZodBranded",
    n.ZodPipeline = "ZodPipeline",
    n.ZodReadonly = "ZodReadonly"
}
)(me || (me = {}));
const Bv = Zn.create;
li.create;
ui.create;
mu.create;
os.create;
Ca.create;
vn.create;
const Hv = rt.create;
pu.create;
yu.create;
oi.create;
const _R = cs.create;
gu.create;
Aa.create;
ds.create;
const xR = {
    string: (n => Zn.create({
        ...n,
        coerce: !0
    })),
    number: (n => li.create({
        ...n,
        coerce: !0
    })),
    boolean: (n => mu.create({
        ...n,
        coerce: !0
    })),
    bigint: (n => ui.create({
        ...n,
        coerce: !0
    })),
    date: (n => os.create({
        ...n,
        coerce: !0
    }))
}
  , wR = () => di( () => import("./success-DzrlrZbf.js"), __vite__mapDeps([0, 1, 2]))
  , ER = hs("/success")({
    validateSearch: Hv({
        id: Bv().optional(),
        total: xR.number().optional()
    }),
    head: () => ({
        meta: [{
            title: "Order Confirmed — Olympus Labs"
        }]
    }),
    component: ri(wR, "component")
})
  , RR = () => di( () => import("./shop-e3qP5erI.js"), __vite__mapDeps([3, 4]))
  , AR = Hv({
    cat: _R(["Space", "Nature", "Cyberpunk", "Abstract", "Myth", "Post-Modern", "Renaissance"]).optional(),
    q: Bv().optional()
})
  , TR = hs("/shop")({
    validateSearch: AR,
    head: () => ({
        meta: [{
            title: "Gallery — Olympus Labs"
        }, {
            name: "description",
            content: "Browse 35 curated AI masterpieces across 7 pantheons."
        }]
    }),
    component: ri(RR, "component")
})
  , CR = () => di( () => import("./contact-C6Magqy9.js"), __vite__mapDeps([5, 6]))
  , OR = hs("/contact")({
    head: () => ({
        meta: [{
            title: "Contact — Olympus Labs"
        }, {
            name: "description",
            content: "Reach the Olympus Labs founder Prajan Radhakrishnan."
        }]
    }),
    component: ri(CR, "component")
})
  , MR = () => di( () => import("./checkout-BZ591d4z.js"), __vite__mapDeps([7, 1, 6, 8]))
  , NR = hs("/checkout")({
    head: () => ({
        meta: [{
            title: "Checkout — Olympus Labs"
        }]
    }),
    component: ri(MR, "component")
})
  , zR = () => di( () => import("./index-DNanFZAH.js"), __vite__mapDeps([9, 8, 4]))
  , jR = hs("/")({
    head: () => ({
        meta: [{
            title: "Olympus Labs — AI Art Atelier"
        }, {
            name: "description",
            content: "Forge limited-edition AI artwork across Space, Myth, Cyberpunk, Renaissance and more."
        }]
    }),
    component: ri(zR, "component")
})
  , DR = () => di( () => import("./product._id-DMAwdS-k.js"), [])
  , LR = () => di( () => import("./product._id-CXMKZCiW.js"), __vite__mapDeps([10, 4, 1, 2]))
  , UR = hs("/product/$id")({
    loader: ({params: n}) => {
        const a = qf(n.id);
        if (!a)
            throw QS();
        return {
            product: a
        }
    }
    ,
    head: ({loaderData: n}) => ({
        meta: n ? [{
            title: `${n.product.name} — Olympus Labs`
        }, {
            name: "description",
            content: n.product.description
        }] : []
    }),
    component: ri(LR, "component"),
    notFoundComponent: ri(DR, "notFoundComponent")
})
  , kR = ER.update({
    id: "/success",
    path: "/success",
    getParentRoute: () => ja
})
  , BR = TR.update({
    id: "/shop",
    path: "/shop",
    getParentRoute: () => ja
})
  , HR = OR.update({
    id: "/contact",
    path: "/contact",
    getParentRoute: () => ja
})
  , qR = NR.update({
    id: "/checkout",
    path: "/checkout",
    getParentRoute: () => ja
})
  , ZR = jR.update({
    id: "/",
    path: "/",
    getParentRoute: () => ja
})
  , VR = UR.update({
    id: "/product/$id",
    path: "/product/$id",
    getParentRoute: () => ja
})
  , YR = {
    IndexRoute: ZR,
    CheckoutRoute: qR,
    ContactRoute: HR,
    ShopRoute: BR,
    SuccessRoute: kR,
    ProductIdRoute: VR
}
  , GR = ja._addFileChildren(YR)
  , QR = () => {
    const n = new uE;
    return ww({
        routeTree: GR,
        context: {
            queryClient: n
        },
        scrollRestoration: !0,
        defaultPreloadStaleTime: 0
    })
}
;
async function XR() {
    const n = await QR();
    let a;
    if (Uy) {
        const s = await Uy.getOptions();
        s.serializationAdapters = s.serializationAdapters ?? [],
        window.__TSS_START_OPTIONS__ = s,
        a = s.serializationAdapters,
        n.options.defaultSsr = s.defaultSsr
    } else
        a = [],
        window.__TSS_START_OPTIONS__ = {
            serializationAdapters: a
        };
    return a.push(T2),
    n.options.serializationAdapters && a.push(...n.options.serializationAdapters),
    n.update({
        basepath: "",
        serializationAdapters: a
    }),
    n.stores.matchesId.get().length || await O2(n),
    n
}
async function PR() {
    const n = await XR();
    return window.$_TSR?.h(),
    n
}
var uf;
function KR() {
    return uf || (uf = PR()),
    M.jsx(j2, {
        promise: uf,
        children: n => M.jsx(Aw, {
            router: n
        })
    })
}
J.startTransition( () => {
    mS.hydrateRoot(document, M.jsx(J.StrictMode, {
        children: M.jsx(KR, {})
    }))
}
);
export {Qy as C, Et as L, RE as M, pE as P, ER as R, jv as S, TR as a, Fy as b, on as c, NE as d, kf as e, Xy as f, _f as g, qf as h, mE as i, M as j, jE as k, UR as l, WR as m, Ov as p, J as r, Nv as u};
