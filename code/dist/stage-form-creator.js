! function() {
    var e = {
            228: function(e) {
                e.exports = function(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            858: function(e) {
                e.exports = function(e) {
                    if (Array.isArray(e)) return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            506: function(e) {
                e.exports = function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            575: function(e) {
                e.exports = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            913: function(e) {
                function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                e.exports = function(e, n, o) {
                    return n && t(e.prototype, n), o && t(e, o), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            713: function(e) {
                e.exports = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            754: function(e) {
                function t(n) {
                    return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            205: function(e, t, n) {
                var o = n(489);
                e.exports = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && o(e, t)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            860: function(e) {
                e.exports = function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            521: function(e) {
                e.exports = function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            585: function(e, t, n) {
                var o = n(8).default,
                    r = n(506);
                e.exports = function(e, t) {
                    if (t && ("object" === o(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return r(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            489: function(e) {
                function t(n, o) {
                    return e.exports = t = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n, o)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            551: function(e, t, n) {
                var o = n(858),
                    r = n(860),
                    i = n(379),
                    a = n(521);
                e.exports = function(e) {
                    return o(e) || r(e) || i(e) || a()
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            8: function(e) {
                function t(n) {
                    return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            379: function(e, t, n) {
                var o = n(228);
                e.exports = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            886: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getRanking = t.rankingHeader = t.isMajorRound = t.getOriginAbbreviation = t.completeWithBlankMatches = t.findRoot = t.splitBy = void 0;
                const o = n(491);

                function r(e, t, n, o) {
                    if (!n || null === n.id) return;
                    const r = e[n.id] || {
                        rank: 0,
                        id: 0,
                        played: 0,
                        wins: 0,
                        draws: 0,
                        losses: 0,
                        forfeits: 0,
                        scoreFor: 0,
                        scoreAgainst: 0,
                        scoreDifference: 0,
                        points: 0
                    };
                    r.id = n.id, (n.forfeit || n.result) && r.played++, "win" === n.result && r.wins++, "draw" === n.result && r.draws++, "loss" === n.result && r.losses++, n.forfeit && r.forfeits++, r.scoreFor += n.score || 0, r.scoreAgainst += o && o.score || 0, r.scoreDifference = r.scoreFor - r.scoreAgainst, r.points = t(r), e[n.id] = r
                }
                t.splitBy = function(e, t) {
                    const n = Object();
                    for (const o of e) n[o[t]] || (n[o[t]] = []), n[o[t]].push(o);
                    return Object.values(n)
                }, t.findRoot = function(e) {
                    const t = document.querySelectorAll(e || ".brackets-viewer");
                    if (0 === t.length) throw Error("Root not found. You must have at least one root element.");
                    if (t.length > 1) throw Error("Multiple possible roots were found. Please use `config.selector` to choose a specific root.");
                    const n = t[0];
                    if (!n.classList.contains("brackets-viewer")) throw Error("The selected root must have a `.brackets-viewer` class.");
                    return n
                }, t.completeWithBlankMatches = function(e, t, n) {
                    if (!n) return {
                        matches: t,
                        fromToornament: !1
                    };
                    let o = [];
                    return "single-bracket" !== e && "winner-bracket" !== e || (o = n.map((e => {
                        var t, n;
                        return [(null === (t = e.opponent1) || void 0 === t ? void 0 : t.position) || null, (null === (n = e.opponent2) || void 0 === n ? void 0 : n.position) || null]
                    })).flat()), "loser-bracket" === e && (o = n.map((e => {
                        var t;
                        return (null === (t = e.opponent2) || void 0 === t ? void 0 : t.position) || null
                    }))), 0 === o.filter((e => null !== e)).length ? {
                        matches: t,
                        fromToornament: !1
                    } : {
                        matches: o.map((e => e && t.find((t => t.number === e)) || null)),
                        fromToornament: !0
                    }
                }, t.getOriginAbbreviation = function(e, t, n, r) {
                    return n = n || -1, t && "loser-bracket" === e && 1 === n || "single-bracket" === e || "winner-bracket" === e && 1 === n ? (0, o.t)("abbreviations.seed") : "loser-bracket" === e && n % 2 == 0 && "opponent1" === r ? (0, o.t)("abbreviations.position") : null
                }, t.isMajorRound = function(e) {
                    return 1 === e || e % 2 == 0
                }, t.rankingHeader = function(e) {
                    return (0, o.t)(`ranking.${e}`, {
                        returnObjects: !0
                    })
                }, t.getRanking = function(e, t) {
                    t = t || (e => 3 * e.wins + 1 * e.draws + 0 * e.losses);
                    const n = {};
                    for (const o of e) r(n, t, o.opponent1, o.opponent2), r(n, t, o.opponent2, o.opponent1);
                    return function(e) {
                        const t = Object.values(e).sort(((e, t) => e.points !== t.points ? t.points - e.points : t.played - e.played)),
                            n = {
                                value: 0,
                                lastPoints: -1
                            };
                        for (const e of t) e.rank = n.lastPoints !== e.points ? ++n.value : n.value, n.lastPoints = e.points;
                        return t
                    }(n)
                }
            },
            491: function(e, t, n) {
                "use strict";
                var o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getLoserBracketRoundName = t.getWinnerBracketRoundName = t.getRoundName = t.getBracketName = t.getGroupName = t.getMatchStatus = t.getFinalMatchLabel = t.getMatchLabel = t.getFinalOriginHint = t.getOriginHint = t.t = t.addLocale = t.locales = void 0;
                const r = o(n(73)),
                    i = o(n(578)),
                    a = n(21),
                    s = n(886),
                    l = o(n(583)),
                    u = o(n(159));

                function c(e, t) {
                    return r.default.t(e, t)
                }
                t.locales = {
                    en: l.default,
                    fr: u.default
                }, r.default.use(i.default).init({
                    fallbackLng: "en",
                    debug: !1,
                    resources: {
                        en: {
                            translation: t.locales.en
                        },
                        fr: {
                            translation: t.locales.fr
                        }
                    }
                }), t.addLocale = function(e, t) {
                    r.default.addResourceBundle(e, "translation", t, !0, !0), r.default.changeLanguage()
                }, t.t = c, t.getOriginHint = function(e, t, n, o) {
                    if (1 === e) {
                        if ("single-bracket" === o) return e => c("origin-hint.seed", {
                            position: e
                        });
                        if ("winner-bracket" === o) return e => c("origin-hint.seed", {
                            position: e
                        });
                        if ("loser-bracket" === o && n) return e => c("origin-hint.seed", {
                            position: e
                        })
                    }
                    if ((0, s.isMajorRound)(e) && "loser-bracket" === o) {
                        if (e === t - 2) return e => c("origin-hint.winner-bracket-semi-final", {
                            position: e
                        });
                        if (e === t) return () => c("origin-hint.winner-bracket-final");
                        const o = Math.ceil((e + 1) / 2);
                        return n ? e => c("origin-hint.winner-bracket", {
                            round: o - 1,
                            position: e
                        }) : e => c("origin-hint.winner-bracket", {
                            round: o,
                            position: e
                        })
                    }
                }, t.getFinalOriginHint = function(e, t) {
                    return "consolation_final" === e ? e => c("origin-hint.consolation-final", {
                        position: e
                    }) : 1 === t ? () => c("origin-hint.grand-final") : void 0
                }, t.getMatchLabel = function(e, t, n, o) {
                    const r = c("winner-bracket" === o ? "match-label.winner-bracket" : "loser-bracket" === o ? "match-label.loser-bracket" : "match-label.standard-bracket"),
                        i = t === n - 1,
                        a = t === n;
                    if ("single-bracket" === o) {
                        if (i) return c("match-label.standard-bracket-semi-final", {
                            matchNumber: e
                        });
                        if (a) return c("match-label.standard-bracket-final")
                    }
                    return i ? c("match-label.double-elimination-semi-final", {
                        matchPrefix: r,
                        matchNumber: e
                    }) : a ? c("match-label.double-elimination-final", {
                        matchPrefix: r
                    }) : c("match-label.double-elimination", {
                        matchPrefix: r,
                        roundNumber: t,
                        matchNumber: e
                    })
                }, t.getFinalMatchLabel = function(e, t, n) {
                    return "consolation_final" === e ? c("match-label.consolation-final") : 1 === n ? c("match-label.grand-final-single") : c("match-label.grand-final", {
                        roundNumber: t
                    })
                }, t.getMatchStatus = function(e) {
                    switch (e) {
                        case a.Status.Locked:
                            return c("match-status.locked");
                        case a.Status.Waiting:
                            return c("match-status.waiting");
                        case a.Status.Ready:
                            return c("match-status.ready");
                        case a.Status.Running:
                            return c("match-status.running");
                        case a.Status.Completed:
                            return c("match-status.completed");
                        case a.Status.Archived:
                            return c("match-status.archived");
                        default:
                            return "Unknown status"
                    }
                }, t.getGroupName = function(e) {
                    return c("common.group-name", {
                        groupNumber: e
                    })
                }, t.getBracketName = function(e, t) {
                    switch (t) {
                        case "winner-bracket":
                        case "loser-bracket":
                            return c(`common.group-name-${t}`, {
                                stage: e
                            });
                        default:
                            return
                    }
                }, t.getRoundName = function(e, t) {
                    return e === t ? c("common.round-name-final") : c("common.round-name", {
                        roundNumber: e
                    })
                }, t.getWinnerBracketRoundName = function(e, t) {
                    return e === t ? c("common.round-name-winner-bracket-final") : c("common.round-name-winner-bracket", {
                        roundNumber: e
                    })
                }, t.getLoserBracketRoundName = function(e, t) {
                    return e === t ? c("common.round-name-loser-bracket-final") : c("common.round-name-loser-bracket", {
                        roundNumber: e
                    })
                }
            },
            21: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Status = void 0;
                const o = n(854);
                Object.defineProperty(t, "Status", {
                    enumerable: !0,
                    get: function() {
                        return o.Status
                    }
                })
            },
            854: function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Status = void 0, (n = t.Status || (t.Status = {}))[n.Locked = 0] = "Locked", n[n.Waiting = 1] = "Waiting", n[n.Ready = 2] = "Ready", n[n.Running = 3] = "Running", n[n.Completed = 4] = "Completed", n[n.Archived = 5] = "Archived"
            },
            578: function(e, t, n) {
                "use strict";

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                n.r(t), n.d(t, {
                    default: function() {
                        return O
                    }
                });
                var i = [],
                    a = i.forEach,
                    s = i.slice;

                function l(e) {
                    return a.call(s.call(arguments, 1), (function(t) {
                        if (t)
                            for (var n in t) void 0 === e[n] && (e[n] = t[n])
                    })), e
                }
                var u = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                    c = function(e, t, n) {
                        var o = n || {};
                        o.path = o.path || "/";
                        var r = e + "=" + encodeURIComponent(t);
                        if (o.maxAge > 0) {
                            var i = o.maxAge - 0;
                            if (isNaN(i)) throw new Error("maxAge should be a Number");
                            r += "; Max-Age=" + Math.floor(i)
                        }
                        if (o.domain) {
                            if (!u.test(o.domain)) throw new TypeError("option domain is invalid");
                            r += "; Domain=" + o.domain
                        }
                        if (o.path) {
                            if (!u.test(o.path)) throw new TypeError("option path is invalid");
                            r += "; Path=" + o.path
                        }
                        if (o.expires) {
                            if ("function" != typeof o.expires.toUTCString) throw new TypeError("option expires is invalid");
                            r += "; Expires=" + o.expires.toUTCString()
                        }
                        if (o.httpOnly && (r += "; HttpOnly"), o.secure && (r += "; Secure"), o.sameSite) switch ("string" == typeof o.sameSite ? o.sameSite.toLowerCase() : o.sameSite) {
                            case !0:
                                r += "; SameSite=Strict";
                                break;
                            case "lax":
                                r += "; SameSite=Lax";
                                break;
                            case "strict":
                                r += "; SameSite=Strict";
                                break;
                            case "none":
                                r += "; SameSite=None";
                                break;
                            default:
                                throw new TypeError("option sameSite is invalid")
                        }
                        return r
                    },
                    f = {
                        name: "cookie",
                        lookup: function(e) {
                            var t;
                            if (e.lookupCookie && "undefined" != typeof document) {
                                var n = function(e) {
                                    for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                                        for (var r = n[o];
                                            " " === r.charAt(0);) r = r.substring(1, r.length);
                                        if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                                    }
                                    return null
                                }(e.lookupCookie);
                                n && (t = n)
                            }
                            return t
                        },
                        cacheUserLanguage: function(e, t) {
                            t.lookupCookie && "undefined" != typeof document && function(e, t, n, o) {
                                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                    path: "/",
                                    sameSite: "strict"
                                };
                                n && (r.expires = new Date, r.expires.setTime(r.expires.getTime() + 60 * n * 1e3)), o && (r.domain = o), document.cookie = c(e, encodeURIComponent(t), r)
                            }(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
                        }
                    },
                    d = {
                        name: "querystring",
                        lookup: function(e) {
                            var t;
                            if ("undefined" != typeof window) {
                                var n = window.location.search;
                                !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
                                for (var o = n.substring(1).split("&"), r = 0; r < o.length; r++) {
                                    var i = o[r].indexOf("=");
                                    i > 0 && o[r].substring(0, i) === e.lookupQuerystring && (t = o[r].substring(i + 1))
                                }
                            }
                            return t
                        }
                    },
                    p = null,
                    g = function() {
                        if (null !== p) return p;
                        try {
                            p = "undefined" !== window && null !== window.localStorage;
                            var e = "i18next.translate.boo";
                            window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e)
                        } catch (e) {
                            p = !1
                        }
                        return p
                    },
                    h = {
                        name: "localStorage",
                        lookup: function(e) {
                            var t;
                            if (e.lookupLocalStorage && g()) {
                                var n = window.localStorage.getItem(e.lookupLocalStorage);
                                n && (t = n)
                            }
                            return t
                        },
                        cacheUserLanguage: function(e, t) {
                            t.lookupLocalStorage && g() && window.localStorage.setItem(t.lookupLocalStorage, e)
                        }
                    },
                    m = null,
                    v = function() {
                        if (null !== m) return m;
                        try {
                            m = "undefined" !== window && null !== window.sessionStorage;
                            var e = "i18next.translate.boo";
                            window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e)
                        } catch (e) {
                            m = !1
                        }
                        return m
                    },
                    b = {
                        name: "sessionStorage",
                        lookup: function(e) {
                            var t;
                            if (e.lookupSessionStorage && v()) {
                                var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                                n && (t = n)
                            }
                            return t
                        },
                        cacheUserLanguage: function(e, t) {
                            t.lookupSessionStorage && v() && window.sessionStorage.setItem(t.lookupSessionStorage, e)
                        }
                    },
                    y = {
                        name: "navigator",
                        lookup: function(e) {
                            var t = [];
                            if ("undefined" != typeof navigator) {
                                if (navigator.languages)
                                    for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                                navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language)
                            }
                            return t.length > 0 ? t : void 0
                        }
                    },
                    k = {
                        name: "htmlTag",
                        lookup: function(e) {
                            var t, n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                            return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")), t
                        }
                    },
                    x = {
                        name: "path",
                        lookup: function(e) {
                            var t;
                            if ("undefined" != typeof window) {
                                var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                                if (n instanceof Array)
                                    if ("number" == typeof e.lookupFromPathIndex) {
                                        if ("string" != typeof n[e.lookupFromPathIndex]) return;
                                        t = n[e.lookupFromPathIndex].replace("/", "")
                                    } else t = n[0].replace("/", "")
                            }
                            return t
                        }
                    },
                    w = {
                        name: "subdomain",
                        lookup: function(e) {
                            var t;
                            if ("undefined" != typeof window) {
                                var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                                n instanceof Array && (t = "number" == typeof e.lookupFromSubdomainIndex ? n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
                            }
                            return t
                        }
                    },
                    O = function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            o(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n)
                        }
                        var t, n;
                        return t = e, n = [{
                            key: "init",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                this.services = e, this.options = l(t, this.options || {}, {
                                    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                                    lookupQuerystring: "lng",
                                    lookupCookie: "i18next",
                                    lookupLocalStorage: "i18nextLng",
                                    lookupSessionStorage: "i18nextLng",
                                    caches: ["localStorage"],
                                    excludeCacheFor: ["cimode"]
                                }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(f), this.addDetector(d), this.addDetector(h), this.addDetector(b), this.addDetector(y), this.addDetector(k), this.addDetector(x), this.addDetector(w)
                            }
                        }, {
                            key: "addDetector",
                            value: function(e) {
                                this.detectors[e.name] = e
                            }
                        }, {
                            key: "detect",
                            value: function(e) {
                                var t = this;
                                e || (e = this.options.order);
                                var n = [];
                                return e.forEach((function(e) {
                                    if (t.detectors[e]) {
                                        var o = t.detectors[e].lookup(t.options);
                                        o && "string" == typeof o && (o = [o]), o && (n = n.concat(o))
                                    }
                                })), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                            }
                        }, {
                            key: "cacheUserLanguage",
                            value: function(e, t) {
                                var n = this;
                                t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((function(t) {
                                    n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options)
                                })))
                            }
                        }], n && r(t.prototype, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e
                    }();
                O.type = "languageDetector"
            },
            73: function(e, t, n) {
                "use strict";
                var o = n(8),
                    r = n(575),
                    i = n(913),
                    a = n(506),
                    s = n(205),
                    l = n(585),
                    u = n(754),
                    c = n(713),
                    f = n(551);

                function d(e) {
                    return e && "object" == typeof e && "default" in e ? e : {
                        default: e
                    }
                }
                var p = d(o),
                    g = d(r),
                    h = d(i),
                    m = d(a),
                    v = d(s),
                    b = d(l),
                    y = d(u),
                    k = d(c),
                    x = d(f);

                function w(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function O(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? w(Object(n), !0).forEach((function(t) {
                            k.default(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var S = {
                        type: "logger",
                        log: function(e) {
                            this.output("log", e)
                        },
                        warn: function(e) {
                            this.output("warn", e)
                        },
                        error: function(e) {
                            this.output("error", e)
                        },
                        output: function(e, t) {
                            console && console[e] && console[e].apply(console, t)
                        }
                    },
                    _ = function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            g.default(this, e), this.init(t, n)
                        }
                        return h.default(e, [{
                            key: "init",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                this.prefix = t.prefix || "i18next:", this.logger = e || S, this.options = t, this.debug = t.debug
                            }
                        }, {
                            key: "setDebug",
                            value: function(e) {
                                this.debug = e
                            }
                        }, {
                            key: "log",
                            value: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "log", "", !0)
                            }
                        }, {
                            key: "warn",
                            value: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "warn", "", !0)
                            }
                        }, {
                            key: "error",
                            value: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "error", "")
                            }
                        }, {
                            key: "deprecate",
                            value: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                            }
                        }, {
                            key: "forward",
                            value: function(e, t, n, o) {
                                return o && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
                            }
                        }, {
                            key: "create",
                            value: function(t) {
                                return new e(this.logger, O(O({}, {
                                    prefix: "".concat(this.prefix, ":").concat(t, ":")
                                }), this.options))
                            }
                        }]), e
                    }(),
                    P = new _,
                    j = function() {
                        function e() {
                            g.default(this, e), this.observers = {}
                        }
                        return h.default(e, [{
                            key: "on",
                            value: function(e, t) {
                                var n = this;
                                return e.split(" ").forEach((function(e) {
                                    n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                                })), this
                            }
                        }, {
                            key: "off",
                            value: function(e, t) {
                                this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                                    return e !== t
                                })) : delete this.observers[e])
                            }
                        }, {
                            key: "emit",
                            value: function(e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                                if (this.observers[e]) {
                                    var r = [].concat(this.observers[e]);
                                    r.forEach((function(e) {
                                        e.apply(void 0, n)
                                    }))
                                }
                                if (this.observers["*"]) {
                                    var i = [].concat(this.observers["*"]);
                                    i.forEach((function(t) {
                                        t.apply(t, [e].concat(n))
                                    }))
                                }
                            }
                        }]), e
                    }();

                function L() {
                    var e, t, n = new Promise((function(n, o) {
                        e = n, t = o
                    }));
                    return n.resolve = e, n.reject = t, n
                }

                function N(e) {
                    return null == e ? "" : "" + e
                }

                function R(e, t, n) {
                    e.forEach((function(e) {
                        t[e] && (n[e] = t[e])
                    }))
                }

                function E(e, t, n) {
                    function o(e) {
                        return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                    }

                    function r() {
                        return !e || "string" == typeof e
                    }
                    for (var i = "string" != typeof t ? [].concat(t) : t.split("."); i.length > 1;) {
                        if (r()) return {};
                        var a = o(i.shift());
                        !e[a] && n && (e[a] = new n), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {}
                    }
                    return r() ? {} : {
                        obj: e,
                        k: o(i.shift())
                    }
                }

                function C(e, t, n) {
                    var o = E(e, t, Object);
                    o.obj[o.k] = n
                }

                function I(e, t) {
                    var n = E(e, t),
                        o = n.obj,
                        r = n.k;
                    if (o) return o[r]
                }

                function F(e, t, n) {
                    var o = I(e, n);
                    return void 0 !== o ? o : I(t, n)
                }

                function D(e, t, n) {
                    for (var o in t) "__proto__" !== o && "constructor" !== o && (o in e ? "string" == typeof e[o] || e[o] instanceof String || "string" == typeof t[o] || t[o] instanceof String ? n && (e[o] = t[o]) : D(e[o], t[o], n) : e[o] = t[o]);
                    return e
                }

                function B(e) {
                    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                }
                var M = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                };

                function A(e) {
                    return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                        return M[e]
                    })) : e
                }
                var T = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
                    U = [" ", ",", "?", "!", ";"];

                function V(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function H(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? V(Object(n), !0).forEach((function(t) {
                            k.default(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function W(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                    if (e) {
                        if (e[t]) return e[t];
                        for (var o = t.split(n), r = e, i = 0; i < o.length; ++i) {
                            if (!r) return;
                            if ("string" == typeof r[o[i]] && i + 1 < o.length) return;
                            if (void 0 === r[o[i]]) {
                                for (var a = 2, s = o.slice(i, i + a).join(n), l = r[s]; void 0 === l && o.length > i + a;) a++, l = r[s = o.slice(i, i + a).join(n)];
                                if (void 0 === l) return;
                                if (t.endsWith(s)) {
                                    if ("string" == typeof l) return l;
                                    if (s && "string" == typeof l[s]) return l[s]
                                }
                                var u = o.slice(i + a).join(n);
                                return u ? W(l, u, n) : void 0
                            }
                            r = r[o[i]]
                        }
                        return r
                    }
                }
                var K = function(e) {
                        v.default(r, e);
                        var t, n, o = (t = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }(), function() {
                            var e, o = y.default(t);
                            if (n) {
                                var r = y.default(this).constructor;
                                e = Reflect.construct(o, arguments, r)
                            } else e = o.apply(this, arguments);
                            return b.default(this, e)
                        });

                        function r(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                ns: ["translation"],
                                defaultNS: "translation"
                            };
                            return g.default(this, r), t = o.call(this), T && j.call(m.default(t)), t.data = e || {}, t.options = n, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), void 0 === t.options.ignoreJSONStructure && (t.options.ignoreJSONStructure = !0), t
                        }
                        return h.default(r, [{
                            key: "addNamespaces",
                            value: function(e) {
                                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                            }
                        }, {
                            key: "removeNamespaces",
                            value: function(e) {
                                var t = this.options.ns.indexOf(e);
                                t > -1 && this.options.ns.splice(t, 1)
                            }
                        }, {
                            key: "getResource",
                            value: function(e, t, n) {
                                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                    r = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
                                    i = void 0 !== o.ignoreJSONStructure ? o.ignoreJSONStructure : this.options.ignoreJSONStructure,
                                    a = [e, t];
                                n && "string" != typeof n && (a = a.concat(n)), n && "string" == typeof n && (a = a.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (a = e.split("."));
                                var s = I(this.data, a);
                                return s || !i || "string" != typeof n ? s : W(this.data && this.data[e] && this.data[e][t], n, r)
                            }
                        }, {
                            key: "addResource",
                            value: function(e, t, n, o) {
                                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                        silent: !1
                                    },
                                    i = this.options.keySeparator;
                                void 0 === i && (i = ".");
                                var a = [e, t];
                                n && (a = a.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (o = t, t = (a = e.split("."))[1]), this.addNamespaces(t), C(this.data, a, o), r.silent || this.emit("added", e, t, n, o)
                            }
                        }, {
                            key: "addResources",
                            value: function(e, t, n) {
                                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                    silent: !1
                                };
                                for (var r in n) "string" != typeof n[r] && "[object Array]" !== Object.prototype.toString.apply(n[r]) || this.addResource(e, t, r, n[r], {
                                    silent: !0
                                });
                                o.silent || this.emit("added", e, t, n)
                            }
                        }, {
                            key: "addResourceBundle",
                            value: function(e, t, n, o, r) {
                                var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                        silent: !1
                                    },
                                    a = [e, t];
                                e.indexOf(".") > -1 && (o = n, n = t, t = (a = e.split("."))[1]), this.addNamespaces(t);
                                var s = I(this.data, a) || {};
                                o ? D(s, n, r) : s = H(H({}, s), n), C(this.data, a, s), i.silent || this.emit("added", e, t, n)
                            }
                        }, {
                            key: "removeResourceBundle",
                            value: function(e, t) {
                                this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                            }
                        }, {
                            key: "hasResourceBundle",
                            value: function(e, t) {
                                return void 0 !== this.getResource(e, t)
                            }
                        }, {
                            key: "getResourceBundle",
                            value: function(e, t) {
                                return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? H(H({}, {}), this.getResource(e, t)) : this.getResource(e, t)
                            }
                        }, {
                            key: "getDataByLanguage",
                            value: function(e) {
                                return this.data[e]
                            }
                        }, {
                            key: "hasLanguageSomeTranslations",
                            value: function(e) {
                                var t = this.getDataByLanguage(e);
                                return !!(t && Object.keys(t) || []).find((function(e) {
                                    return t[e] && Object.keys(t[e]).length > 0
                                }))
                            }
                        }, {
                            key: "toJSON",
                            value: function() {
                                return this.data
                            }
                        }]), r
                    }(j),
                    z = {
                        processors: {},
                        addPostProcessor: function(e) {
                            this.processors[e.name] = e
                        },
                        handle: function(e, t, n, o, r) {
                            var i = this;
                            return e.forEach((function(e) {
                                i.processors[e] && (t = i.processors[e].process(t, n, o, r))
                            })), t
                        }
                    };

                function J(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function $(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? J(Object(n), !0).forEach((function(t) {
                            k.default(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var q = {},
                    G = function(e) {
                        v.default(r, e);
                        var t, n, o = (t = r, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }(), function() {
                            var e, o = y.default(t);
                            if (n) {
                                var r = y.default(this).constructor;
                                e = Reflect.construct(o, arguments, r)
                            } else e = o.apply(this, arguments);
                            return b.default(this, e)
                        });

                        function r(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return g.default(this, r), t = o.call(this), T && j.call(m.default(t)), R(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, m.default(t)), t.options = n, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t.logger = P.create("translator"), t
                        }
                        return h.default(r, [{
                            key: "changeLanguage",
                            value: function(e) {
                                e && (this.language = e)
                            }
                        }, {
                            key: "exists",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    interpolation: {}
                                };
                                if (null == e) return !1;
                                var n = this.resolve(e, t);
                                return n && void 0 !== n.res
                            }
                        }, {
                            key: "extractFromKey",
                            value: function(e, t) {
                                var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                                void 0 === n && (n = ":");
                                var o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                    r = t.ns || this.options.defaultNS || [],
                                    i = n && e.indexOf(n) > -1,
                                    a = !(this.options.userDefinedKeySeparator || t.keySeparator || this.options.userDefinedNsSeparator || t.nsSeparator || function(e, t, n) {
                                        t = t || "", n = n || "";
                                        var o = U.filter((function(e) {
                                            return t.indexOf(e) < 0 && n.indexOf(e) < 0
                                        }));
                                        if (0 === o.length) return !0;
                                        var r = new RegExp("(".concat(o.map((function(e) {
                                                return "?" === e ? "\\?" : e
                                            })).join("|"), ")")),
                                            i = !r.test(e);
                                        if (!i) {
                                            var a = e.indexOf(n);
                                            a > 0 && !r.test(e.substring(0, a)) && (i = !0)
                                        }
                                        return i
                                    }(e, n, o));
                                if (i && !a) {
                                    var s = e.match(this.interpolator.nestingRegexp);
                                    if (s && s.length > 0) return {
                                        key: e,
                                        namespaces: r
                                    };
                                    var l = e.split(n);
                                    (n !== o || n === o && this.options.ns.indexOf(l[0]) > -1) && (r = l.shift()), e = l.join(o)
                                }
                                return "string" == typeof r && (r = [r]), {
                                    key: e,
                                    namespaces: r
                                }
                            }
                        }, {
                            key: "translate",
                            value: function(e, t, n) {
                                var o = this;
                                if ("object" !== p.default(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), t || (t = {}), null == e) return "";
                                Array.isArray(e) || (e = [String(e)]);
                                var i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                    a = this.extractFromKey(e[e.length - 1], t),
                                    s = a.key,
                                    l = a.namespaces,
                                    u = l[l.length - 1],
                                    c = t.lng || this.language,
                                    f = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                if (c && "cimode" === c.toLowerCase()) {
                                    if (f) {
                                        var d = t.nsSeparator || this.options.nsSeparator;
                                        return u + d + s
                                    }
                                    return s
                                }
                                var g = this.resolve(e, t),
                                    h = g && g.res,
                                    m = g && g.usedKey || s,
                                    v = g && g.exactUsedKey || s,
                                    b = Object.prototype.toString.apply(h),
                                    y = ["[object Number]", "[object Function]", "[object RegExp]"],
                                    k = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                                    x = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                    w = "string" != typeof h && "boolean" != typeof h && "number" != typeof h;
                                if (x && h && w && y.indexOf(b) < 0 && ("string" != typeof k || "[object Array]" !== b)) {
                                    if (!t.returnObjects && !this.options.returnObjects) return this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, h, $($({}, t), {}, {
                                        ns: l
                                    })) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.");
                                    if (i) {
                                        var O = "[object Array]" === b,
                                            S = O ? [] : {},
                                            _ = O ? v : m;
                                        for (var P in h)
                                            if (Object.prototype.hasOwnProperty.call(h, P)) {
                                                var j = "".concat(_).concat(i).concat(P);
                                                S[P] = this.translate(j, $($({}, t), {
                                                    joinArrays: !1,
                                                    ns: l
                                                })), S[P] === j && (S[P] = h[P])
                                            } h = S
                                    }
                                } else if (x && "string" == typeof k && "[object Array]" === b)(h = h.join(k)) && (h = this.extendTranslation(h, e, t, n));
                                else {
                                    var L = !1,
                                        N = !1,
                                        R = void 0 !== t.count && "string" != typeof t.count,
                                        E = r.hasDefaultValue(t),
                                        C = R ? this.pluralResolver.getSuffix(c, t.count, t) : "",
                                        I = t["defaultValue".concat(C)] || t.defaultValue;
                                    !this.isValidLookup(h) && E && (L = !0, h = I), this.isValidLookup(h) || (N = !0, h = s);
                                    var F = t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                                        D = F && N ? void 0 : h,
                                        B = E && I !== h && this.options.updateMissing;
                                    if (N || L || B) {
                                        if (this.logger.log(B ? "updateKey" : "missingKey", c, u, s, B ? I : h), i) {
                                            var M = this.resolve(s, $($({}, t), {}, {
                                                keySeparator: !1
                                            }));
                                            M && M.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                        }
                                        var A = [],
                                            T = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                                        if ("fallback" === this.options.saveMissingTo && T && T[0])
                                            for (var U = 0; U < T.length; U++) A.push(T[U]);
                                        else "all" === this.options.saveMissingTo ? A = this.languageUtils.toResolveHierarchy(t.lng || this.language) : A.push(t.lng || this.language);
                                        var V = function(e, n, r) {
                                            var i = E && r !== h ? r : D;
                                            o.options.missingKeyHandler ? o.options.missingKeyHandler(e, u, n, i, B, t) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, u, n, i, B, t), o.emit("missingKey", e, u, n, h)
                                        };
                                        this.options.saveMissing && (this.options.saveMissingPlurals && R ? A.forEach((function(e) {
                                            o.pluralResolver.getSuffixes(e, t).forEach((function(n) {
                                                V([e], s + n, t["defaultValue".concat(n)] || I)
                                            }))
                                        })) : V(A, s, I))
                                    }
                                    h = this.extendTranslation(h, e, t, g, n), N && h === s && this.options.appendNamespaceToMissingKey && (h = "".concat(u, ":").concat(s)), (N || L) && this.options.parseMissingKeyHandler && (h = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(s, L ? h : void 0) : this.options.parseMissingKeyHandler(h))
                                }
                                return h
                            }
                        }, {
                            key: "extendTranslation",
                            value: function(e, t, n, o, r) {
                                var i = this;
                                if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, o.usedLng, o.usedNS, o.usedKey, {
                                    resolved: o
                                });
                                else if (!n.skipInterpolation) {
                                    n.interpolation && this.interpolator.init($($({}, n), {
                                        interpolation: $($({}, this.options.interpolation), n.interpolation)
                                    }));
                                    var a, s = "string" == typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                                    if (s) {
                                        var l = e.match(this.interpolator.nestingRegexp);
                                        a = l && l.length
                                    }
                                    var u = n.replace && "string" != typeof n.replace ? n.replace : n;
                                    if (this.options.interpolation.defaultVariables && (u = $($({}, this.options.interpolation.defaultVariables), u)), e = this.interpolator.interpolate(e, u, n.lng || this.language, n), s) {
                                        var c = e.match(this.interpolator.nestingRegexp);
                                        a < (c && c.length) && (n.nest = !1)
                                    }!1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                                        for (var e = arguments.length, o = new Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                                        return r && r[0] === o[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(o[0], " in key: ").concat(t[0])), null) : i.translate.apply(i, o.concat([t]))
                                    }), n)), n.interpolation && this.interpolator.reset()
                                }
                                var f = n.postProcess || this.options.postProcess,
                                    d = "string" == typeof f ? [f] : f;
                                return null != e && d && d.length && !1 !== n.applyPostProcessor && (e = z.handle(d, e, t, this.options && this.options.postProcessPassResolved ? $({
                                    i18nResolved: o
                                }, n) : n, this)), e
                            }
                        }, {
                            key: "resolve",
                            value: function(e) {
                                var t, n, o, r, i, a = this,
                                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return "string" == typeof e && (e = [e]), e.forEach((function(e) {
                                    if (!a.isValidLookup(t)) {
                                        var l = a.extractFromKey(e, s),
                                            u = l.key;
                                        n = u;
                                        var c = l.namespaces;
                                        a.options.fallbackNS && (c = c.concat(a.options.fallbackNS));
                                        var f = void 0 !== s.count && "string" != typeof s.count,
                                            d = f && !s.ordinal && 0 === s.count && a.pluralResolver.shouldUseIntlApi(),
                                            p = void 0 !== s.context && ("string" == typeof s.context || "number" == typeof s.context) && "" !== s.context,
                                            g = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                        c.forEach((function(e) {
                                            a.isValidLookup(t) || (i = e, !q["".concat(g[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (q["".concat(g[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(g.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((function(n) {
                                                if (!a.isValidLookup(t)) {
                                                    r = n;
                                                    var i, l = [u];
                                                    if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(l, u, n, e, s);
                                                    else {
                                                        var c;
                                                        f && (c = a.pluralResolver.getSuffix(n, s.count, s));
                                                        var g = "_zero";
                                                        if (f && (l.push(u + c), d && l.push(u + g)), p) {
                                                            var h = "".concat(u).concat(a.options.contextSeparator).concat(s.context);
                                                            l.push(h), f && (l.push(h + c), d && l.push(h + g))
                                                        }
                                                    }
                                                    for (; i = l.pop();) a.isValidLookup(t) || (o = i, t = a.getResource(n, e, i, s))
                                                }
                                            })))
                                        }))
                                    }
                                })), {
                                    res: t,
                                    usedKey: n,
                                    exactUsedKey: o,
                                    usedLng: r,
                                    usedNS: i
                                }
                            }
                        }, {
                            key: "isValidLookup",
                            value: function(e) {
                                return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                            }
                        }, {
                            key: "getResource",
                            value: function(e, t, n) {
                                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, o) : this.resourceStore.getResource(e, t, n, o)
                            }
                        }], [{
                            key: "hasDefaultValue",
                            value: function(e) {
                                var t = "defaultValue";
                                for (var n in e)
                                    if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
                                return !1
                            }
                        }]), r
                    }(j);

                function Y(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }
                var Q = function() {
                        function e(t) {
                            g.default(this, e), this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = P.create("languageUtils")
                        }
                        return h.default(e, [{
                            key: "getScriptPartFromCode",
                            value: function(e) {
                                if (!e || e.indexOf("-") < 0) return null;
                                var t = e.split("-");
                                return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                            }
                        }, {
                            key: "getLanguagePartFromCode",
                            value: function(e) {
                                if (!e || e.indexOf("-") < 0) return e;
                                var t = e.split("-");
                                return this.formatLanguageCode(t[0])
                            }
                        }, {
                            key: "formatLanguageCode",
                            value: function(e) {
                                if ("string" == typeof e && e.indexOf("-") > -1) {
                                    var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                        n = e.split("-");
                                    return this.options.lowerCaseLng ? n = n.map((function(e) {
                                        return e.toLowerCase()
                                    })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Y(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Y(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Y(n[2].toLowerCase()))), n.join("-")
                                }
                                return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                            }
                        }, {
                            key: "isSupportedCode",
                            value: function(e) {
                                return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                            }
                        }, {
                            key: "getBestMatchFromCodes",
                            value: function(e) {
                                var t, n = this;
                                return e ? (e.forEach((function(e) {
                                    if (!t) {
                                        var o = n.formatLanguageCode(e);
                                        n.options.supportedLngs && !n.isSupportedCode(o) || (t = o)
                                    }
                                })), !t && this.options.supportedLngs && e.forEach((function(e) {
                                    if (!t) {
                                        var o = n.getLanguagePartFromCode(e);
                                        if (n.isSupportedCode(o)) return t = o;
                                        t = n.options.supportedLngs.find((function(e) {
                                            if (0 === e.indexOf(o)) return e
                                        }))
                                    }
                                })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                            }
                        }, {
                            key: "getFallbackCodes",
                            value: function(e, t) {
                                if (!e) return [];
                                if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                                if (!t) return e.default || [];
                                var n = e[t];
                                return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                            }
                        }, {
                            key: "toResolveHierarchy",
                            value: function(e, t) {
                                var n = this,
                                    o = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                    r = [],
                                    i = function(e) {
                                        e && (n.isSupportedCode(e) ? r.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                                    };
                                return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)), o.forEach((function(e) {
                                    r.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                                })), r
                            }
                        }]), e
                    }(),
                    Z = [{
                        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                        nr: [1, 2],
                        fc: 1
                    }, {
                        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                        nr: [1, 2],
                        fc: 2
                    }, {
                        lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                        nr: [1],
                        fc: 3
                    }, {
                        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                        nr: [1, 2, 5],
                        fc: 4
                    }, {
                        lngs: ["ar"],
                        nr: [0, 1, 2, 3, 11, 100],
                        fc: 5
                    }, {
                        lngs: ["cs", "sk"],
                        nr: [1, 2, 5],
                        fc: 6
                    }, {
                        lngs: ["csb", "pl"],
                        nr: [1, 2, 5],
                        fc: 7
                    }, {
                        lngs: ["cy"],
                        nr: [1, 2, 3, 8],
                        fc: 8
                    }, {
                        lngs: ["fr"],
                        nr: [1, 2],
                        fc: 9
                    }, {
                        lngs: ["ga"],
                        nr: [1, 2, 3, 7, 11],
                        fc: 10
                    }, {
                        lngs: ["gd"],
                        nr: [1, 2, 3, 20],
                        fc: 11
                    }, {
                        lngs: ["is"],
                        nr: [1, 2],
                        fc: 12
                    }, {
                        lngs: ["jv"],
                        nr: [0, 1],
                        fc: 13
                    }, {
                        lngs: ["kw"],
                        nr: [1, 2, 3, 4],
                        fc: 14
                    }, {
                        lngs: ["lt"],
                        nr: [1, 2, 10],
                        fc: 15
                    }, {
                        lngs: ["lv"],
                        nr: [1, 2, 0],
                        fc: 16
                    }, {
                        lngs: ["mk"],
                        nr: [1, 2],
                        fc: 17
                    }, {
                        lngs: ["mnk"],
                        nr: [0, 1, 2],
                        fc: 18
                    }, {
                        lngs: ["mt"],
                        nr: [1, 2, 11, 20],
                        fc: 19
                    }, {
                        lngs: ["or"],
                        nr: [2, 1],
                        fc: 2
                    }, {
                        lngs: ["ro"],
                        nr: [1, 2, 20],
                        fc: 20
                    }, {
                        lngs: ["sl"],
                        nr: [5, 1, 2, 3],
                        fc: 21
                    }, {
                        lngs: ["he", "iw"],
                        nr: [1, 2, 20, 21],
                        fc: 22
                    }],
                    X = {
                        1: function(e) {
                            return Number(e > 1)
                        },
                        2: function(e) {
                            return Number(1 != e)
                        },
                        3: function(e) {
                            return 0
                        },
                        4: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        },
                        5: function(e) {
                            return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                        },
                        6: function(e) {
                            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                        },
                        7: function(e) {
                            return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        },
                        8: function(e) {
                            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                        },
                        9: function(e) {
                            return Number(e >= 2)
                        },
                        10: function(e) {
                            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                        },
                        11: function(e) {
                            return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                        },
                        12: function(e) {
                            return Number(e % 10 != 1 || e % 100 == 11)
                        },
                        13: function(e) {
                            return Number(0 !== e)
                        },
                        14: function(e) {
                            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                        },
                        15: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        },
                        16: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                        },
                        17: function(e) {
                            return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                        },
                        18: function(e) {
                            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                        },
                        19: function(e) {
                            return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                        },
                        20: function(e) {
                            return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                        },
                        21: function(e) {
                            return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                        },
                        22: function(e) {
                            return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                        }
                    },
                    ee = ["v1", "v2", "v3"],
                    te = {
                        zero: 0,
                        one: 1,
                        two: 2,
                        few: 3,
                        many: 4,
                        other: 5
                    };

                function ne() {
                    var e = {};
                    return Z.forEach((function(t) {
                        t.lngs.forEach((function(n) {
                            e[n] = {
                                numbers: t.nr,
                                plurals: X[t.fc]
                            }
                        }))
                    })), e
                }
                var oe = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        g.default(this, e), this.languageUtils = t, this.options = n, this.logger = P.create("pluralResolver"), this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = ne()
                    }
                    return h.default(e, [{
                        key: "addRule",
                        value: function(e, t) {
                            this.rules[e] = t
                        }
                    }, {
                        key: "getRule",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this.shouldUseIntlApi()) try {
                                return new Intl.PluralRules(e, {
                                    type: t.ordinal ? "ordinal" : "cardinal"
                                })
                            } catch (e) {
                                return
                            }
                            return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                        }
                    }, {
                        key: "needsPlural",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this.getRule(e, t);
                            return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                        }
                    }, {
                        key: "getPluralFormsOfKey",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.getSuffixes(e, n).map((function(e) {
                                return "".concat(t).concat(e)
                            }))
                        }
                    }, {
                        key: "getSuffixes",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = this.getRule(e, n);
                            return o ? this.shouldUseIntlApi() ? o.resolvedOptions().pluralCategories.sort((function(e, t) {
                                return te[e] - te[t]
                            })).map((function(e) {
                                return "".concat(t.options.prepend).concat(e)
                            })) : o.numbers.map((function(o) {
                                return t.getSuffix(e, o, n)
                            })) : []
                        }
                    }, {
                        key: "getSuffix",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                o = this.getRule(e, n);
                            return o ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(o.select(t)) : this.getSuffixRetroCompatible(o, t) : (this.logger.warn("no plural rule found for: ".concat(e)), "")
                        }
                    }, {
                        key: "getSuffixRetroCompatible",
                        value: function(e, t) {
                            var n = this,
                                o = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                                r = e.numbers[o];
                            this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                            var i = function() {
                                return n.options.prepend && r.toString() ? n.options.prepend + r.toString() : r.toString()
                            };
                            return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? "_plural_".concat(r.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? i() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                        }
                    }, {
                        key: "shouldUseIntlApi",
                        value: function() {
                            return !ee.includes(this.options.compatibilityJSON)
                        }
                    }]), e
                }();

                function re(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function ie(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? re(Object(n), !0).forEach((function(t) {
                            k.default(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var ae = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        g.default(this, e), this.logger = P.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) {
                            return e
                        }, this.init(t)
                    }
                    return h.default(e, [{
                        key: "init",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.interpolation || (e.interpolation = {
                                escapeValue: !0
                            });
                            var t = e.interpolation;
                            this.escape = void 0 !== t.escape ? t.escape : A, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? B(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? B(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? B(t.nestingPrefix) : t.nestingPrefixEscaped || B("$t("), this.nestingSuffix = t.nestingSuffix ? B(t.nestingSuffix) : t.nestingSuffixEscaped || B(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.options && this.init(this.options)
                        }
                    }, {
                        key: "resetRegExp",
                        value: function() {
                            var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                            this.regexp = new RegExp(e, "g");
                            var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                            this.regexpUnescape = new RegExp(t, "g");
                            var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                            this.nestingRegexp = new RegExp(n, "g")
                        }
                    }, {
                        key: "interpolate",
                        value: function(e, t, n, o) {
                            var r, i, a, s = this,
                                l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                            function u(e) {
                                return e.replace(/\$/g, "$$$$")
                            }
                            var c = function(e) {
                                if (e.indexOf(s.formatSeparator) < 0) {
                                    var r = F(t, l, e);
                                    return s.alwaysFormat ? s.format(r, void 0, n, ie(ie(ie({}, o), t), {}, {
                                        interpolationkey: e
                                    })) : r
                                }
                                var i = e.split(s.formatSeparator),
                                    a = i.shift().trim(),
                                    u = i.join(s.formatSeparator).trim();
                                return s.format(F(t, l, a), u, n, ie(ie(ie({}, o), t), {}, {
                                    interpolationkey: a
                                }))
                            };
                            this.resetRegExp();
                            var f = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler,
                                d = o && o.interpolation && void 0 !== o.interpolation.skipOnVariables ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                            return [{
                                regex: this.regexpUnescape,
                                safeValue: function(e) {
                                    return u(e)
                                }
                            }, {
                                regex: this.regexp,
                                safeValue: function(e) {
                                    return s.escapeValue ? u(s.escape(e)) : u(e)
                                }
                            }].forEach((function(t) {
                                for (a = 0; r = t.regex.exec(e);) {
                                    var n = r[1].trim();
                                    if (void 0 === (i = c(n)))
                                        if ("function" == typeof f) {
                                            var l = f(e, r, o);
                                            i = "string" == typeof l ? l : ""
                                        } else if (o && o.hasOwnProperty(n)) i = "";
                                    else {
                                        if (d) {
                                            i = r[0];
                                            continue
                                        }
                                        s.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(e)), i = ""
                                    } else "string" == typeof i || s.useRawValueToEscape || (i = N(i));
                                    var u = t.safeValue(i);
                                    if (e = e.replace(r[0], u), d ? (t.regex.lastIndex += u.length, t.regex.lastIndex -= r[0].length) : t.regex.lastIndex = 0, ++a >= s.maxReplaces) break
                                }
                            })), e
                        }
                    }, {
                        key: "nest",
                        value: function(e, t) {
                            var n, o, r = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                a = ie({}, i);

                            function s(e, t) {
                                var n = this.nestingOptionsSeparator;
                                if (e.indexOf(n) < 0) return e;
                                var o = e.split(new RegExp("".concat(n, "[ ]*{"))),
                                    r = "{".concat(o[1]);
                                e = o[0], r = (r = this.interpolate(r, a)).replace(/'/g, '"');
                                try {
                                    a = JSON.parse(r), t && (a = ie(ie({}, t), a))
                                } catch (t) {
                                    return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(n).concat(r)
                                }
                                return delete a.defaultValue, e
                            }
                            for (a.applyPostProcessor = !1, delete a.defaultValue; n = this.nestingRegexp.exec(e);) {
                                var l = [],
                                    u = !1;
                                if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                    var c = n[1].split(this.formatSeparator).map((function(e) {
                                        return e.trim()
                                    }));
                                    n[1] = c.shift(), l = c, u = !0
                                }
                                if ((o = t(s.call(this, n[1].trim(), a), a)) && n[0] === e && "string" != typeof o) return o;
                                "string" != typeof o && (o = N(o)), o || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), o = ""), u && (o = l.reduce((function(e, t) {
                                    return r.format(e, t, i.lng, ie(ie({}, i), {}, {
                                        interpolationkey: n[1].trim()
                                    }))
                                }), o.trim())), e = e.replace(n[0], o), this.regexp.lastIndex = 0
                            }
                            return e
                        }
                    }]), e
                }();

                function se(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function le(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? se(Object(n), !0).forEach((function(t) {
                            k.default(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var ue = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        g.default(this, e), this.logger = P.create("formatter"), this.options = t, this.formats = {
                            number: function(e, t, n) {
                                return new Intl.NumberFormat(t, n).format(e)
                            },
                            currency: function(e, t, n) {
                                return new Intl.NumberFormat(t, le(le({}, n), {}, {
                                    style: "currency"
                                })).format(e)
                            },
                            datetime: function(e, t, n) {
                                return new Intl.DateTimeFormat(t, le({}, n)).format(e)
                            },
                            relativetime: function(e, t, n) {
                                return new Intl.RelativeTimeFormat(t, le({}, n)).format(e, n.range || "day")
                            },
                            list: function(e, t, n) {
                                return new Intl.ListFormat(t, le({}, n)).format(e)
                            }
                        }, this.init(t)
                    }
                    return h.default(e, [{
                        key: "init",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    interpolation: {}
                                },
                                n = t.interpolation;
                            this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
                        }
                    }, {
                        key: "add",
                        value: function(e, t) {
                            this.formats[e.toLowerCase().trim()] = t
                        }
                    }, {
                        key: "format",
                        value: function(e, t, n, o) {
                            var r = this;
                            return t.split(this.formatSeparator).reduce((function(e, t) {
                                var i = function(e) {
                                        var t = e.toLowerCase().trim(),
                                            n = {};
                                        if (e.indexOf("(") > -1) {
                                            var o = e.split("(");
                                            t = o[0].toLowerCase().trim();
                                            var r = o[1].substring(0, o[1].length - 1);
                                            "currency" === t && r.indexOf(":") < 0 ? n.currency || (n.currency = r.trim()) : "relativetime" === t && r.indexOf(":") < 0 ? n.range || (n.range = r.trim()) : r.split(";").forEach((function(e) {
                                                if (e) {
                                                    var t = e.split(":"),
                                                        o = x.default(t),
                                                        r = o[0],
                                                        i = o.slice(1).join(":");
                                                    n[r.trim()] || (n[r.trim()] = i.trim()), "false" === i.trim() && (n[r.trim()] = !1), "true" === i.trim() && (n[r.trim()] = !0), isNaN(i.trim()) || (n[r.trim()] = parseInt(i.trim(), 10))
                                                }
                                            }))
                                        }
                                        return {
                                            formatName: t,
                                            formatOptions: n
                                        }
                                    }(t),
                                    a = i.formatName,
                                    s = i.formatOptions;
                                if (r.formats[a]) {
                                    var l = e;
                                    try {
                                        var u = o && o.formatParams && o.formatParams[o.interpolationkey] || {},
                                            c = u.locale || u.lng || o.locale || o.lng || n;
                                        l = r.formats[a](e, c, le(le(le({}, s), o), u))
                                    } catch (e) {
                                        r.logger.warn(e)
                                    }
                                    return l
                                }
                                return r.logger.warn("there was no format function for ".concat(a)), e
                            }), e)
                        }
                    }]), e
                }();

                function ce(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function fe(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ce(Object(n), !0).forEach((function(t) {
                            k.default(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var de = function(e) {
                    v.default(r, e);
                    var t, n, o = (t = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = y.default(t);
                        if (n) {
                            var r = y.default(this).constructor;
                            e = Reflect.construct(o, arguments, r)
                        } else e = o.apply(this, arguments);
                        return b.default(this, e)
                    });

                    function r(e, t, n) {
                        var i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return g.default(this, r), i = o.call(this), T && j.call(m.default(i)), i.backend = e, i.store = t, i.services = n, i.languageUtils = n.languageUtils, i.options = a, i.logger = P.create("backendConnector"), i.state = {}, i.queue = [], i.backend && i.backend.init && i.backend.init(n, a.backend, a), i
                    }
                    return h.default(r, [{
                        key: "queueLoad",
                        value: function(e, t, n, o) {
                            var r = this,
                                i = [],
                                a = [],
                                s = [],
                                l = [];
                            return e.forEach((function(e) {
                                var o = !0;
                                t.forEach((function(t) {
                                    var s = "".concat(e, "|").concat(t);
                                    !n.reload && r.store.hasResourceBundle(e, t) ? r.state[s] = 2 : r.state[s] < 0 || (1 === r.state[s] ? a.indexOf(s) < 0 && a.push(s) : (r.state[s] = 1, o = !1, a.indexOf(s) < 0 && a.push(s), i.indexOf(s) < 0 && i.push(s), l.indexOf(t) < 0 && l.push(t)))
                                })), o || s.push(e)
                            })), (i.length || a.length) && this.queue.push({
                                pending: a,
                                loaded: {},
                                errors: [],
                                callback: o
                            }), {
                                toLoad: i,
                                pending: a,
                                toLoadLanguages: s,
                                toLoadNamespaces: l
                            }
                        }
                    }, {
                        key: "loaded",
                        value: function(e, t, n) {
                            var o = e.split("|"),
                                r = o[0],
                                i = o[1];
                            t && this.emit("failedLoading", r, i, t), n && this.store.addResourceBundle(r, i, n), this.state[e] = t ? -1 : 2;
                            var a = {};
                            this.queue.forEach((function(n) {
                                var o, s, l, u, c;
                                o = n.loaded, s = i, (u = (l = E(o, [r], Object)).obj)[c = l.k] = u[c] || [], u[c].push(s),
                                    function(e, t) {
                                        for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
                                    }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) {
                                        a[e] || (a[e] = []), n.loaded[e].length && n.loaded[e].forEach((function(t) {
                                            a[e].indexOf(t) < 0 && a[e].push(t)
                                        }))
                                    })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                            })), this.emit("loaded", a), this.queue = this.queue.filter((function(e) {
                                return !e.done
                            }))
                        }
                    }, {
                        key: "read",
                        value: function(e, t, n) {
                            var o = this,
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                                a = arguments.length > 5 ? arguments[5] : void 0;
                            return e.length ? this.backend[n](e, t, (function(s, l) {
                                s && l && r < 5 ? setTimeout((function() {
                                    o.read.call(o, e, t, n, r + 1, 2 * i, a)
                                }), i) : a(s, l)
                            })) : a(null, {})
                        }
                    }, {
                        key: "prepareLoading",
                        value: function(e, t) {
                            var n = this,
                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                r = arguments.length > 3 ? arguments[3] : void 0;
                            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
                            "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                            var i = this.queueLoad(e, t, o, r);
                            if (!i.toLoad.length) return i.pending.length || r(), null;
                            i.toLoad.forEach((function(e) {
                                n.loadOne(e)
                            }))
                        }
                    }, {
                        key: "load",
                        value: function(e, t, n) {
                            this.prepareLoading(e, t, {}, n)
                        }
                    }, {
                        key: "reload",
                        value: function(e, t, n) {
                            this.prepareLoading(e, t, {
                                reload: !0
                            }, n)
                        }
                    }, {
                        key: "loadOne",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                o = e.split("|"),
                                r = o[0],
                                i = o[1];
                            this.read(r, i, "read", void 0, void 0, (function(o, a) {
                                o && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(r, " failed"), o), !o && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(r), a), t.loaded(e, o, a)
                            }))
                        }
                    }, {
                        key: "saveMissing",
                        value: function(e, t, n, o, r) {
                            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                            this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, o, null, fe(fe({}, i), {}, {
                                isUpdate: r
                            })), e && e[0] && this.store.addResource(e[0], t, n, o))
                        }
                    }]), r
                }(j);

                function pe() {
                    return {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        supportedLngs: !1,
                        nonExplicitSupportedLngs: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        partialBundledLanguages: !1,
                        saveMissing: !1,
                        updateMissing: !1,
                        saveMissingTo: "fallback",
                        saveMissingPlurals: !0,
                        missingKeyHandler: !1,
                        missingInterpolationHandler: !1,
                        postProcess: !1,
                        postProcessPassResolved: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: !1,
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function(e) {
                            var t = {};
                            if ("object" === p.default(e[1]) && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" === p.default(e[2]) || "object" === p.default(e[3])) {
                                var n = e[3] || e[2];
                                Object.keys(n).forEach((function(e) {
                                    t[e] = n[e]
                                }))
                            }
                            return t
                        },
                        interpolation: {
                            escapeValue: !0,
                            format: function(e, t, n, o) {
                                return e
                            },
                            prefix: "{{",
                            suffix: "}}",
                            formatSeparator: ",",
                            unescapePrefix: "-",
                            nestingPrefix: "$t(",
                            nestingSuffix: ")",
                            nestingOptionsSeparator: ",",
                            maxReplaces: 1e3,
                            skipOnVariables: !0
                        }
                    }
                }

                function ge(e) {
                    return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
                }

                function he(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function me(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? he(Object(n), !0).forEach((function(t) {
                            k.default(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function ve() {}

                function be(e) {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(t) {
                        "function" == typeof e[t] && (e[t] = e[t].bind(e))
                    }))
                }
                var ye = function(e) {
                    v.default(r, e);
                    var t, n, o = (t = r, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = y.default(t);
                        if (n) {
                            var r = y.default(this).constructor;
                            e = Reflect.construct(o, arguments, r)
                        } else e = o.apply(this, arguments);
                        return b.default(this, e)
                    });

                    function r() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        if (g.default(this, r), e = o.call(this), T && j.call(m.default(e)), e.options = ge(t), e.services = {}, e.logger = P, e.modules = {
                                external: []
                            }, be(m.default(e)), n && !e.isInitialized && !t.isClone) {
                            if (!e.options.initImmediate) return e.init(t, n), b.default(e, m.default(e));
                            setTimeout((function() {
                                e.init(t, n)
                            }), 0)
                        }
                        return e
                    }
                    return h.default(r, [{
                        key: "init",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            "function" == typeof t && (n = t, t = {}), !t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
                            var o = pe();

                            function r(e) {
                                return e ? "function" == typeof e ? new e : e : null
                            }
                            if (this.options = me(me(me({}, o), this.options), ge(t)), "v1" !== this.options.compatibilityAPI && (this.options.interpolation = me(me({}, o.interpolation), this.options.interpolation)), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator), !this.options.isClone) {
                                var i;
                                this.modules.logger ? P.init(r(this.modules.logger), this.options) : P.init(null, this.options), this.modules.formatter ? i = this.modules.formatter : "undefined" != typeof Intl && (i = ue);
                                var a = new Q(this.options);
                                this.store = new K(this.options.resources, this.options);
                                var s = this.services;
                                s.logger = P, s.resourceStore = this.store, s.languageUtils = a, s.pluralResolver = new oe(a, {
                                    prepend: this.options.pluralSeparator,
                                    compatibilityJSON: this.options.compatibilityJSON,
                                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                                }), !i || this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format || (s.formatter = r(i), s.formatter.init(s, this.options), this.options.interpolation.format = s.formatter.format.bind(s.formatter)), s.interpolator = new ae(this.options), s.utils = {
                                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                                }, s.backendConnector = new de(r(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", (function(t) {
                                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                                    e.emit.apply(e, [t].concat(o))
                                })), this.modules.languageDetector && (s.languageDetector = r(this.modules.languageDetector), s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = r(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new G(this.services, this.options), this.translator.on("*", (function(t) {
                                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                                    e.emit.apply(e, [t].concat(o))
                                })), this.modules.external.forEach((function(t) {
                                    t.init && t.init(e)
                                }))
                            }
                            if (this.format = this.options.interpolation.format, n || (n = ve), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                                var l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                l.length > 0 && "dev" !== l[0] && (this.options.lng = l[0])
                            }
                            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                            var u = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                            u.forEach((function(t) {
                                e[t] = function() {
                                    var n;
                                    return (n = e.store)[t].apply(n, arguments)
                                }
                            }));
                            var c = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                            c.forEach((function(t) {
                                e[t] = function() {
                                    var n;
                                    return (n = e.store)[t].apply(n, arguments), e
                                }
                            }));
                            var f = L(),
                                d = function() {
                                    var t = function(t, o) {
                                        e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), f.resolve(o), n(t, o)
                                    };
                                    if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
                                    e.changeLanguage(e.options.lng, t)
                                };
                            return this.options.resources || !this.options.initImmediate ? d() : setTimeout(d, 0), f
                        }
                    }, {
                        key: "loadResources",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ve,
                                o = n,
                                r = "string" == typeof e ? e : this.language;
                            if ("function" == typeof e && (o = e), !this.options.resources || this.options.partialBundledLanguages) {
                                if (r && "cimode" === r.toLowerCase()) return o();
                                var i = [],
                                    a = function(e) {
                                        e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                            i.indexOf(e) < 0 && i.push(e)
                                        }))
                                    };
                                if (r) a(r);
                                else {
                                    var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                    s.forEach((function(e) {
                                        return a(e)
                                    }))
                                }
                                this.options.preload && this.options.preload.forEach((function(e) {
                                    return a(e)
                                })), this.services.backendConnector.load(i, this.options.ns, (function(e) {
                                    e || t.resolvedLanguage || !t.language || t.setResolvedLanguage(t.language), o(e)
                                }))
                            } else o(null)
                        }
                    }, {
                        key: "reloadResources",
                        value: function(e, t, n) {
                            var o = L();
                            return e || (e = this.languages), t || (t = this.options.ns), n || (n = ve), this.services.backendConnector.reload(e, t, (function(e) {
                                o.resolve(), n(e)
                            })), o
                        }
                    }, {
                        key: "use",
                        value: function(e) {
                            if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                            if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                            return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && z.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
                        }
                    }, {
                        key: "setResolvedLanguage",
                        value: function(e) {
                            if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                                for (var t = 0; t < this.languages.length; t++) {
                                    var n = this.languages[t];
                                    if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                                        this.resolvedLanguage = n;
                                        break
                                    }
                                }
                        }
                    }, {
                        key: "changeLanguage",
                        value: function(e, t) {
                            var n = this;
                            this.isLanguageChangingTo = e;
                            var o = L();
                            this.emit("languageChanging", e);
                            var r = function(e) {
                                    n.language = e, n.languages = n.services.languageUtils.toResolveHierarchy(e), n.resolvedLanguage = void 0, n.setResolvedLanguage(e)
                                },
                                i = function(i) {
                                    e || i || !n.services.languageDetector || (i = []);
                                    var a = "string" == typeof i ? i : n.services.languageUtils.getBestMatchFromCodes(i);
                                    a && (n.language || r(a), n.translator.language || n.translator.changeLanguage(a), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(a)), n.loadResources(a, (function(e) {
                                        ! function(e, i) {
                                            i ? (r(i), n.translator.changeLanguage(i), n.isLanguageChangingTo = void 0, n.emit("languageChanged", i), n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0, o.resolve((function() {
                                                return n.t.apply(n, arguments)
                                            })), t && t(e, (function() {
                                                return n.t.apply(n, arguments)
                                            }))
                                        }(e, a)
                                    }))
                                };
                            return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()), o
                        }
                    }, {
                        key: "getFixedT",
                        value: function(e, t, n) {
                            var o = this,
                                r = function e(t, r) {
                                    var i;
                                    if ("object" !== p.default(r)) {
                                        for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), l = 2; l < a; l++) s[l - 2] = arguments[l];
                                        i = o.options.overloadTranslationOptionHandler([t, r].concat(s))
                                    } else i = me({}, r);
                                    i.lng = i.lng || e.lng, i.lngs = i.lngs || e.lngs, i.ns = i.ns || e.ns;
                                    var u = o.options.keySeparator || ".",
                                        c = n ? "".concat(n).concat(u).concat(t) : t;
                                    return o.t(c, i)
                                };
                            return "string" == typeof e ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r
                        }
                    }, {
                        key: "t",
                        value: function() {
                            var e;
                            return this.translator && (e = this.translator).translate.apply(e, arguments)
                        }
                    }, {
                        key: "exists",
                        value: function() {
                            var e;
                            return this.translator && (e = this.translator).exists.apply(e, arguments)
                        }
                    }, {
                        key: "setDefaultNamespace",
                        value: function(e) {
                            this.options.defaultNS = e
                        }
                    }, {
                        key: "hasLoadedNamespace",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                            var o = this.resolvedLanguage || this.languages[0],
                                r = !!this.options && this.options.fallbackLng,
                                i = this.languages[this.languages.length - 1];
                            if ("cimode" === o.toLowerCase()) return !0;
                            var a = function(e, n) {
                                var o = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                                return -1 === o || 2 === o
                            };
                            if (n.precheck) {
                                var s = n.precheck(this, a);
                                if (void 0 !== s) return s
                            }
                            return !!this.hasResourceBundle(o, e) || !this.services.backendConnector.backend || !(!a(o, e) || r && !a(i, e))
                        }
                    }, {
                        key: "loadNamespaces",
                        value: function(e, t) {
                            var n = this,
                                o = L();
                            return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach((function(e) {
                                n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                            })), this.loadResources((function(e) {
                                o.resolve(), t && t(e)
                            })), o) : (t && t(), Promise.resolve())
                        }
                    }, {
                        key: "loadLanguages",
                        value: function(e, t) {
                            var n = L();
                            "string" == typeof e && (e = [e]);
                            var o = this.options.preload || [],
                                r = e.filter((function(e) {
                                    return o.indexOf(e) < 0
                                }));
                            return r.length ? (this.options.preload = o.concat(r), this.loadResources((function(e) {
                                n.resolve(), t && t(e)
                            })), n) : (t && t(), Promise.resolve())
                        }
                    }, {
                        key: "dir",
                        value: function(e) {
                            return e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr" : "rtl"
                        }
                    }, {
                        key: "cloneInstance",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ve,
                                o = me(me(me({}, this.options), t), {
                                    isClone: !0
                                }),
                                i = new r(o),
                                a = ["store", "services", "language"];
                            return a.forEach((function(t) {
                                i[t] = e[t]
                            })), i.services = me({}, this.services), i.services.utils = {
                                hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                            }, i.translator = new G(i.services, i.options), i.translator.on("*", (function(e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                                i.emit.apply(i, [e].concat(n))
                            })), i.init(o, n), i.translator.options = i.options, i.translator.backendConnector.services.utils = {
                                hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                            }, i
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return {
                                options: this.options,
                                store: this.store,
                                language: this.language,
                                languages: this.languages,
                                resolvedLanguage: this.resolvedLanguage
                            }
                        }
                    }]), r
                }(j);
                k.default(ye, "createInstance", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return new ye(e, t)
                }));
                var ke = ye.createInstance();
                ke.createInstance = ye.createInstance, e.exports = ke
            },
            583: function(e) {
                "use strict";
                e.exports = JSON.parse('{"origin-hint":{"seed":"Seed {{position}}","winner-bracket":"Loser of WB {{round}}.{{position}}","winner-bracket-semi-final":"Loser of WB Semi {{position}}","winner-bracket-final":"Loser of WB Final","consolation-final":"Loser of Semi {{position}}","grand-final":"Winner of LB Final"},"match-label":{"winner-bracket":"WB","loser-bracket":"LB","standard-bracket":"M","standard-bracket-semi-final":"Semi {{matchNumber}}","standard-bracket-final":"Final","double-elimination":"{{matchPrefix}} {{roundNumber}}.{{matchNumber}}","double-elimination-semi-final":"{{matchPrefix}} Semi {{matchNumber}}","double-elimination-final":"{{matchPrefix}} Final","consolation-final":"Consolation Final","grand-final-single":"Grand Final","grand-final":"GF Round {{roundNumber}}"},"match-status":{"locked":"Locked","waiting":"Waiting","ready":"Ready","running":"Running","completed":"Completed","archived":"Archived"},"abbreviations":{"win":"W","loss":"L","forfeit":"F","position":"P","seed":"#"},"ranking":{"rank":{"text":"#","tooltip":"Rank"},"id":{"text":"Name","tooltip":"Name"},"played":{"text":"P","tooltip":"Played"},"wins":{"text":"$t(abbreviations.win)","tooltip":"Wins"},"draws":{"text":"D","tooltip":"Draws"},"losses":{"text":"$t(abbreviations.loss)","tooltip":"Losses"},"forfeits":{"text":"$t(abbreviations.forfeit)","tooltip":"Forfeits"},"scoreFor":{"text":"SF","tooltip":"Score For"},"scoreAgainst":{"text":"SA","tooltip":"Score Against"},"scoreDifference":{"text":"+/-","tooltip":"Score Difference"},"points":{"text":"Pts","tooltip":"Points"}},"common":{"bye":"BYE","best-of-x":"Bo{{x}}","group-name":"Group {{groupNumber}}","group-name-winner-bracket":"Winner Bracket","group-name-loser-bracket":"Loser Bracket","round-name":"Round {{roundNumber}}","round-name-final":"Final Round","round-name-winner-bracket":"WB Round {{roundNumber}}","round-name-winner-bracket-final":"WB Final Round","round-name-loser-bracket":"LB Round {{roundNumber}}","round-name-loser-bracket-final":"LB Final Round"},"form-creator":{"stage-name-label":"Name your stage","stage-name-placeholder":"Give a name for your stage","stage-selector-label":"Select a stage","team-label":"Name your teams","team-placeholder":"Comma separated List of Team Names (must be 2^n)","group-label":"How many groups?","group-placeholder":"How many groups do you want?","seed-order-label":"How would you like to order your seeds?","double-elimination-seed-order-placeholder":"Seed order for double elimination comma separated","round-robin-mode-label":"Which round robin mode do you like?","consolation-final-label":"Consolation Final","skip-first-round-label":"Skip first round","grand-final-type-label":"Grand final type","submit":"Create"}}')
            },
            159: function(e) {
                "use strict";
                e.exports = JSON.parse('{"origin-hint":{"seed":"Seed {{position}}","winner-bracket":"Perdant WB {{round}}.{{position}}","winner-bracket-semi-final":"Perdant WB Semi {{position}}","winner-bracket-final":"Perdant Finale WB","consolation-final":"Perdant Semi {{position}}","grand-final":"Gagnant Finale LB"},"match-label":{"winner-bracket":"WB","loser-bracket":"LB","standard-bracket":"M","standard-bracket-semi-final":"Semi {{matchNumber}}","standard-bracket-final":"Finale","double-elimination":"{{matchPrefix}} {{roundNumber}}.{{matchNumber}}","double-elimination-semi-final":"{{matchPrefix}} Semi {{matchNumber}}","double-elimination-final":"Finale {{matchPrefix}}","consolation-final":"Petite finale","grand-final-single":"Grande finale","grand-final":"GF Round {{roundNumber}}"},"match-status":{"locked":"Verrouillé","waiting":"En attente","ready":"Prêt","running":"En cours","completed":"Terminé","archived":"Archivé"},"abbreviations":{"win":"V","loss":"D","forfeit":"F","position":"P","seed":"#"},"ranking":{"rank":{"text":"#","tooltip":"Rang"},"id":{"text":"Name","tooltip":"Nom"},"played":{"text":"J","tooltip":"Joué"},"wins":{"text":"$t(abbreviations.win)","tooltip":"Victoires"},"draws":{"text":"N","tooltip":"Match nul"},"losses":{"text":"$t(abbreviations.loss)","tooltip":"Défaites"},"forfeits":{"text":"$t(abbreviations.forfeit)","tooltip":"Forfaits"},"scoreFor":{"text":"SF","tooltip":"Score pour"},"scoreAgainst":{"text":"SA","tooltip":"Score contre"},"scoreDifference":{"text":"+/-","tooltip":"Différence de score"},"points":{"text":"Pts","tooltip":"Points"}},"common":{"bye":"BYE","best-of-x":"Bo{{x}}","group-name":"Groupe {{groupNumber}}","round-name":"Round {{roundNumber}}","round-name-final":"Round final","round-name-winner-bracket":"WB Round {{roundNumber}}","round-name-winner-bracket-final":"WB Round final","round-name-loser-bracket":"LB Round {{roundNumber}}","round-name-loser-bracket-final":"LB Round final"},"form-creator":{"stage-name-label":"Name your stage","stage-name-placeholder":"Give a name for your stage","stage-selector-label":"Select a stage","team-label":"Name your teams","team-placeholder":"Comma separated List of Team Names (must be 2^n)","group-label":"How many groups?","group-placeholder":"How many groups do you want?","seed-order-label":"How would you like to order your seeds?","double-elimination-seed-order-placeholder":"Seed order for double elimination comma separated","round-robin-mode-label":"Which round robin mode do you like?","consolation-final-label":"Consolation Final","skip-first-round-label":"Skip first round","grand-final-type-label":"Grand final type","submit":"Create"}}')
            }
        },
        t = {};

    function n(o) {
        var r = t[o];
        if (void 0 !== r) return r.exports;
        var i = t[o] = {
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.exports
    }
    n.d = function(e, t) {
            for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            const e = n(491),
                t = ["round_robin", "single_elimination", "double_elimination"],
                o = ["simple", "double"],
                r = ["groups.effort_balanced", "groups.seed_optimized", "groups.bracket_optimized"],
                i = ["natural", "reverse", "half_shift", "reverse_half_shift", "pair_flip", "inner_outer"],
                a = ["none", "simple", "double"];

            function s(t, n, s, d) {
                switch (n) {
                    case "round_robin":
                        c(s, "number", t.html_group_id, (0, e.t)("form-creator.group-label"), (0, e.t)("form-creator.group-placeholder"), t.group_default_size.toString(), "1"), f(s, t.html_seed_order_id, (0, e.t)("form-creator.seed-order-label"), r), f(s, t.html_round_robin_mode_id, (0, e.t)("form-creator.round-robin-mode-label"), o);
                        break;
                    case "double_elimination":
                        c(s, "checkbox", t.html_consolation_final_checkbox_id, (0, e.t)("form-creator.consolation-final-label")), c(s, "checkbox", t.html_skip_first_round_checkbox_id, (0, e.t)("form-creator.skip-first-round-label")), f(s, t.html_grand_final_type_id, (0, e.t)("form-creator.grand-final-type-label"), a), u(s, t.html_double_elimination_seed_textarea_id, (0, e.t)("form-creator.seed-order-label"), (0, e.t)("form-creator.double-elimination-seed-order-placeholder"));
                        break;
                    case "single_elimination":
                        f(s, t.html_seed_order_id, (0, e.t)("form-creator.seed-order-label"), i), c(s, "checkbox", t.html_consolation_final_checkbox_id, (0, e.t)("form-creator.consolation-final-label"));
                        break;
                    default:
                        throw new DOMException("stage " + n + " seems to be not implemented yet.")
                }
                const p = document.createElement("div"),
                    g = document.createElement("button");
                g.innerText = (0, e.t)("form-creator.submit"), g.type = "submit", p.appendChild(g), g.onclick = () => {
                    var e, o, s, u, c, f, p;
                    let g;
                    switch (n) {
                        case "round_robin":
                            try {
                                ! function(e) {
                                    if (l(e), parseInt(document.getElementById(e.html_group_id).value) <= 0) throw new DOMException("group_amount must be equal or bigger than 1");
                                    const t = document.getElementById(e.html_seed_order_id).value;
                                    if (!r.includes(t)) throw new DOMException("seed_ordering must be one of " + r.toString());
                                    const n = document.getElementById(e.html_round_robin_mode_id).value;
                                    if (!n.includes(n)) throw new DOMException("round_robin_mode must be one of " + n.toString())
                                }(t)
                            } catch (e) {
                                return void alert(e.message)
                            }
                            const d = {
                                seedOrdering: [null !== (e = document.getElementById(t.html_seed_order_id).value) && void 0 !== e ? e : "groups.effort_balanced"],
                                roundRobinMode: null !== (o = document.getElementById(t.html_round_robin_mode_id).value) && void 0 !== o ? o : "simple",
                                groupCount: parseInt(null !== (s = document.getElementById(t.html_group_id).value) && void 0 !== s ? s : "0")
                            };
                            g = {
                                name: null !== (u = document.getElementById(t.html_name_id).value) && void 0 !== u ? u : "",
                                seeding: document.getElementById(t.html_team_input_id).value.split(","),
                                settings: d,
                                tournamentId: 0,
                                type: n
                            };
                            break;
                        case "double_elimination":
                            ! function(e) {
                                l(e);
                                const t = document.getElementById(e.html_grand_final_type_id).value;
                                if (!t || !a.includes(t)) throw new DOMException("grand_final_type must be one of: " + a.toString());
                                const n = document.getElementById(e.html_double_elimination_seed_textarea_id).value.split(",");
                                for (const e in n) {
                                    if ("" === n[e]) {
                                        delete n[e];
                                        continue
                                    }
                                    const t = n[e].trim();
                                    if (!i.includes(t)) throw new DOMException("elimination seed_ordering wrong found: " + t + "must be one of: " + i.toString())
                                }
                            }(t);
                            const h = document.getElementById(t.html_double_elimination_seed_textarea_id).value.split(","),
                                m = [];
                            for (const e in h) m.push(h[e].trim());
                            const v = {
                                seedOrdering: m,
                                consolationFinal: document.getElementById(t.html_consolation_final_checkbox_id).checked,
                                skipFirstRound: document.getElementById(t.html_skip_first_round_checkbox_id).checked,
                                grandFinal: document.getElementById(t.html_grand_final_type_id).value
                            };
                            g = {
                                name: null !== (c = document.getElementById(t.html_name_id).value) && void 0 !== c ? c : "",
                                seeding: document.getElementById(t.html_team_input_id).value.split(","),
                                settings: v,
                                tournamentId: 0,
                                type: n
                            };
                            break;
                        case "single_elimination":
                            ! function(e) {
                                l(e);
                                const t = document.getElementById(e.html_seed_order_id).value;
                                if (!t || !i.includes(t)) throw new DOMException("seed_ordering must be one of: " + i.toString())
                            }(t);
                            const b = {
                                seedOrdering: [null !== (f = document.getElementById(t.html_seed_order_id).value) && void 0 !== f ? f : "natural"],
                                consolationFinal: document.getElementById(t.html_consolation_final_checkbox_id).checked
                            };
                            g = {
                                name: null !== (p = document.getElementById(t.html_name_id).value) && void 0 !== p ? p : "",
                                seeding: document.getElementById(t.html_team_input_id).value.split(","),
                                settings: b,
                                tournamentId: 0,
                                type: n
                            };
                            break;
                        default:
                            throw new DOMException("stage " + n + " seems to be not implemented yet.")
                    }
                    d(g)
                }, s.appendChild(p)
            }

            function l(e) {
                const n = document.getElementById(e.html_name_id).value;
                if (!n || "" === n) throw new DOMException("No name provided.");
                const o = document.getElementById(e.html_team_input_id).value.split(",");
                if (o.length < 2 || !Number.isInteger(Math.log2(o.length))) throw new DOMException("Invalid team amount provided.");
                const r = document.getElementById(e.html_stage_type_selector_id).value;
                if (!r && t.includes(r)) throw new DOMException("Invalid stage.")
            }

            function u(e, t, n, o, r) {
                const i = document.createElement("div"),
                    a = document.createElement("label");
                a.setAttribute("for", t), a.innerText = n;
                const s = document.createElement("textarea");
                s.placeholder = o, s.id = t, null != r && (s.value = r), i.appendChild(a), i.appendChild(s), e.appendChild(i)
            }

            function c(e, t, n, o, r, i, a, s) {
                const l = document.createElement("div"),
                    u = document.createElement("label");
                u.setAttribute("for", n), u.innerText = o;
                const c = document.createElement("input");
                c.type = t, c.id = n, null != r && (c.placeholder = r), null != i && (c.value = i), null != a && (c.min = a), null != s && (c.minLength = s), l.appendChild(u), l.appendChild(c), e.appendChild(l)
            }

            function f(e, t, n, o) {
                const r = document.createElement("div"),
                    i = document.createElement("label");
                i.setAttribute("for", t), i.innerText = n;
                const a = document.createElement("select");
                a.id = t,
                    function(e, t) {
                        for (const n in t) {
                            const o = document.createElement("option");
                            o.innerText = t[n], e.appendChild(o)
                        }
                    }(a, o), r.appendChild(i), r.appendChild(a), e.appendChild(r)
            }
            window.stageFormCreator = function(n, o) {
                const r = document.getElementById(n.parent_id);
                if (null === r) throw new DOMException("parent with ID: " + n.parent_id + " was not found!");
                ! function(n, o) {
                    c(n, "text", o.html_name_id, (0, e.t)("form-creator.stage-name-label"), (0, e.t)("form-creator.stage-name-placeholder"), void 0, void 0, 1), u(n, o.html_team_input_id, (0, e.t)("form-creator.team-label"), (0, e.t)("form-creator.team-placeholder")), f(n, o.html_stage_type_selector_id, (0, e.t)("form-creator.stage-selector-label"), t)
                }(r, n);
                const i = document.getElementById(n.html_stage_type_selector_id);
                if (null === i) throw new DOMException("somehow we could not create a select!");
                i.onchange = () => {
                    let e;
                    switch (function(e) {
                            if (!(e.children.length <= 3))
                                for (let t = 3; t < e.children.length; t++) e.children[t].remove(), t--
                        }(r), i.value) {
                        case "single_elimination":
                            e = "single_elimination";
                            break;
                        case "double_elimination":
                            e = "double_elimination";
                            break;
                        case "round_robin":
                            e = "round_robin";
                            break;
                        default:
                            throw new DOMException("stage " + i.value + " seems to be not implemented yet.")
                    }
                    s(n, e, r, o)
                }, s(n, "round_robin", r, o)
            }
        }()
}();