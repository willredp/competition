! function() {
    var t = {
            228: function(t) {
                t.exports = function(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            858: function(t) {
                t.exports = function(t) {
                    if (Array.isArray(t)) return t
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            506: function(t) {
                t.exports = function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            575: function(t) {
                t.exports = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            913: function(t) {
                function e(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                t.exports = function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            713: function(t) {
                t.exports = function(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            754: function(t) {
                function e(n) {
                    return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n)
                }
                t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            205: function(t, e, n) {
                var r = n(489);
                t.exports = function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && r(t, e)
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            860: function(t) {
                t.exports = function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            521: function(t) {
                t.exports = function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            585: function(t, e, n) {
                var r = n(8).default,
                    o = n(506);
                t.exports = function(t, e) {
                    if (e && ("object" === r(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return o(t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            489: function(t) {
                function e(n, r) {
                    return t.exports = e = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n, r)
                }
                t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            551: function(t, e, n) {
                var r = n(858),
                    o = n(860),
                    i = n(379),
                    a = n(521);
                t.exports = function(t) {
                    return r(t) || o(t) || i(t) || a()
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            8: function(t) {
                function e(n) {
                    return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n)
                }
                t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            379: function(t, e, n) {
                var r = n(228);
                t.exports = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return r(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
                    }
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            335: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.setupConnection = e.getFinalConnection = e.getBracketConnection = e.addParticipantImage = e.addParticipantOrigin = e.setupLoss = e.setupWin = e.setupBye = e.setupHint = e.createRankingHeaders = e.createCell = e.createRow = e.createTable = e.createResultContainer = e.createNameContainer = e.createParticipantContainer = e.createOpponentsContainer = e.createChildCountLabel = e.createMatchLabel = e.createMatchContainer = e.createRoundContainer = e.createRoundsContainer = e.createGroupContainer = e.createBracketContainer = e.createEliminationContainer = e.createRoundRobinContainer = e.createTitle = void 0;
                const r = n(886),
                    o = n(491);
                e.createTitle = function(t) {
                    const e = document.createElement("h1");
                    return e.innerText = t, e
                }, e.createRoundRobinContainer = function(t) {
                    const e = document.createElement("div");
                    return e.classList.add("round-robin"), e.setAttribute("data-stage-id", t.toString()), e
                }, e.createEliminationContainer = function(t) {
                    const e = document.createElement("div");
                    return e.classList.add("elimination"), e.setAttribute("data-stage-id", t.toString()), e
                }, e.createBracketContainer = function(t, e) {
                    const n = document.createElement("section");
                    if (n.classList.add("bracket"), n.setAttribute("data-group-id", t.toString()), e) {
                        const t = document.createElement("h2");
                        t.innerText = e, n.append(t)
                    }
                    return n
                }, e.createGroupContainer = function(t, e) {
                    const n = document.createElement("h2");
                    n.innerText = e;
                    const r = document.createElement("section");
                    return r.classList.add("group"), r.setAttribute("data-group-id", t.toString()), r.append(n), r
                }, e.createRoundsContainer = function() {
                    const t = document.createElement("div");
                    return t.classList.add("rounds"), t
                }, e.createRoundContainer = function(t, e) {
                    const n = document.createElement("h3");
                    n.innerText = e;
                    const r = document.createElement("article");
                    return r.classList.add("round"), r.setAttribute("data-round-id", t.toString()), r.append(n), r
                }, e.createMatchContainer = function(t, e) {
                    const n = document.createElement("div");
                    return n.classList.add("match"), void 0 !== t && n.setAttribute("data-match-id", t.toString()), void 0 !== e && n.setAttribute("data-match-status", e.toString()), n
                }, e.createMatchLabel = function(t, e) {
                    const n = document.createElement("span");
                    return n.innerText = t, n.title = e, n
                }, e.createChildCountLabel = function(t) {
                    const e = document.createElement("span");
                    return e.innerText = t, e
                }, e.createOpponentsContainer = function(t) {
                    const e = document.createElement("div");
                    return e.classList.add("opponents"), t && e.addEventListener("click", t), e
                }, e.createParticipantContainer = function(t) {
                    const e = document.createElement("div");
                    return e.classList.add("participant"), null != t && e.setAttribute("data-participant-id", t.toString()), e
                }, e.createNameContainer = function() {
                    const t = document.createElement("div");
                    return t.classList.add("name"), t
                }, e.createResultContainer = function() {
                    const t = document.createElement("div");
                    return t.classList.add("result"), t
                }, e.createTable = function() {
                    return document.createElement("table")
                }, e.createRow = function() {
                    return document.createElement("tr")
                }, e.createCell = function(t) {
                    const e = document.createElement("td");
                    return e.innerText = String(t), e
                }, e.createRankingHeaders = function(t) {
                    const e = document.createElement("tr"),
                        n = t[0];
                    for (const t in n) {
                        const n = t,
                            o = (0, r.rankingHeader)(n),
                            i = document.createElement("th");
                        i.innerText = o.text, i.setAttribute("title", o.tooltip), e.append(i)
                    }
                    return e
                }, e.setupHint = function(t, e) {
                    t.classList.add("hint"), t.innerText = e
                }, e.setupBye = function(t) {
                    t.innerText = (0, o.t)("common.bye"), t.classList.add("bye")
                }, e.setupWin = function(t, e, n) {
                    n.result && "win" === n.result && (t.classList.add("win"), void 0 === n.score && (e.innerText = (0, o.t)("abbreviations.win")))
                }, e.setupLoss = function(t, e, n) {
                    (n.result && "loss" === n.result || n.forfeit) && (t.classList.add("loss"), n.forfeit ? e.innerText = (0, o.t)("abbreviations.forfeit") : void 0 === n.score && (e.innerText = (0, o.t)("abbreviations.loss")))
                }, e.addParticipantOrigin = function(t, e, n) {
                    const r = document.createElement("span");
                    "before" === n ? (r.innerText = `${e} `, t.prepend(r)) : "after" === n && (r.innerText = ` (${e})`, t.append(r))
                }, e.addParticipantImage = function(t, e) {
                    const n = document.createElement("img");
                    n.src = e, t.prepend(n)
                }, e.getBracketConnection = function(t, e, n, r, o, i) {
                    var a, s, u;
                    const c = {
                        connectPrevious: !1,
                        connectNext: !1
                    };
                    return "loser-bracket" === o ? (c.connectPrevious = e > 1 && (e % 2 == 1 ? "square" : "straight"), c.connectNext = e < n && (e % 2 == 0 ? "square" : "straight")) : (c.connectPrevious = e > 1 && "square", c.connectNext = e < n ? "square" : !!i && "straight"), t || 2 !== e || (("single-bracket" === o || "winner-bracket" === o) && void 0 === (null === (a = r.opponent1) || void 0 === a ? void 0 : a.position) && void 0 === (null === (s = r.opponent2) || void 0 === s ? void 0 : s.position) && (c.connectPrevious = !1), "loser-bracket" === o && void 0 === (null === (u = r.opponent2) || void 0 === u ? void 0 : u.position) && (c.connectPrevious = !1)), c
                }, e.getFinalConnection = function(t, e, n) {
                    return {
                        connectPrevious: "grand_final" === t && 1 === e && "straight",
                        connectNext: 2 === n && 1 === e && "straight"
                    }
                }, e.setupConnection = function(t, e, n) {
                    n.connectPrevious && t.classList.add("connect-previous"), n.connectNext && e.classList.add("connect-next"), "straight" === n.connectPrevious && t.classList.add("straight"), "straight" === n.connectNext && e.classList.add("straight")
                }
            },
            886: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.getRanking = e.rankingHeader = e.isMajorRound = e.getOriginAbbreviation = e.completeWithBlankMatches = e.findRoot = e.splitBy = void 0;
                const r = n(491);

                function o(t, e, n, r) {
                    if (!n || null === n.id) return;
                    const o = t[n.id] || {
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
                    o.id = n.id, (n.forfeit || n.result) && o.played++, "win" === n.result && o.wins++, "draw" === n.result && o.draws++, "loss" === n.result && o.losses++, n.forfeit && o.forfeits++, o.scoreFor += n.score || 0, o.scoreAgainst += r && r.score || 0, o.scoreDifference = o.scoreFor - o.scoreAgainst, o.points = e(o), t[n.id] = o
                }
                e.splitBy = function(t, e) {
                    const n = Object();
                    for (const r of t) n[r[e]] || (n[r[e]] = []), n[r[e]].push(r);
                    return Object.values(n)
                }, e.findRoot = function(t) {
                    const e = document.querySelectorAll(t || ".brackets-viewer");
                    if (0 === e.length) throw Error("Root not found. You must have at least one root element.");
                    if (e.length > 1) throw Error("Multiple possible roots were found. Please use `config.selector` to choose a specific root.");
                    const n = e[0];
                    if (!n.classList.contains("brackets-viewer")) throw Error("The selected root must have a `.brackets-viewer` class.");
                    return n
                }, e.completeWithBlankMatches = function(t, e, n) {
                    if (!n) return {
                        matches: e,
                        fromToornament: !1
                    };
                    let r = [];
                    return "single-bracket" !== t && "winner-bracket" !== t || (r = n.map((t => {
                        var e, n;
                        return [(null === (e = t.opponent1) || void 0 === e ? void 0 : e.position) || null, (null === (n = t.opponent2) || void 0 === n ? void 0 : n.position) || null]
                    })).flat()), "loser-bracket" === t && (r = n.map((t => {
                        var e;
                        return (null === (e = t.opponent2) || void 0 === e ? void 0 : e.position) || null
                    }))), 0 === r.filter((t => null !== t)).length ? {
                        matches: e,
                        fromToornament: !1
                    } : {
                        matches: r.map((t => t && e.find((e => e.number === t)) || null)),
                        fromToornament: !0
                    }
                }, e.getOriginAbbreviation = function(t, e, n, o) {
                    return n = n || -1, e && "loser-bracket" === t && 1 === n || "single-bracket" === t || "winner-bracket" === t && 1 === n ? (0, r.t)("abbreviations.seed") : "loser-bracket" === t && n % 2 == 0 && "opponent1" === o ? (0, r.t)("abbreviations.position") : null
                }, e.isMajorRound = function(t) {
                    return 1 === t || t % 2 == 0
                }, e.rankingHeader = function(t) {
                    return (0, r.t)(`ranking.${t}`, {
                        returnObjects: !0
                    })
                }, e.getRanking = function(t, e) {
                    e = e || (t => 3 * t.wins + 1 * t.draws + 0 * t.losses);
                    const n = {};
                    for (const r of t) o(n, e, r.opponent1, r.opponent2), o(n, e, r.opponent2, r.opponent1);
                    return function(t) {
                        const e = Object.values(t).sort(((t, e) => t.points !== e.points ? e.points - t.points : e.played - t.played)),
                            n = {
                                value: 0,
                                lastPoints: -1
                            };
                        for (const t of e) t.rank = n.lastPoints !== t.points ? ++n.value : n.value, n.lastPoints = t.points;
                        return e
                    }(n)
                }
            },
            491: function(t, e, n) {
                "use strict";
                var r = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.getLoserBracketRoundName = e.getWinnerBracketRoundName = e.getRoundName = e.getBracketName = e.getGroupName = e.getMatchStatus = e.getFinalMatchLabel = e.getMatchLabel = e.getFinalOriginHint = e.getOriginHint = e.t = e.addLocale = e.locales = void 0;
                const o = r(n(73)),
                    i = r(n(578)),
                    a = n(21),
                    s = n(886),
                    u = r(n(583)),
                    c = r(n(159));

                function l(t, e) {
                    return o.default.t(t, e)
                }
                e.locales = {
                    en: u.default,
                    fr: c.default
                }, o.default.use(i.default).init({
                    fallbackLng: "en",
                    debug: !1,
                    resources: {
                        en: {
                            translation: e.locales.en
                        },
                        fr: {
                            translation: e.locales.fr
                        }
                    }
                }), e.addLocale = function(t, e) {
                    o.default.addResourceBundle(t, "translation", e, !0, !0), o.default.changeLanguage()
                }, e.t = l, e.getOriginHint = function(t, e, n, r) {
                    if (1 === t) {
                        if ("single-bracket" === r) return t => l("origin-hint.seed", {
                            position: t
                        });
                        if ("winner-bracket" === r) return t => l("origin-hint.seed", {
                            position: t
                        });
                        if ("loser-bracket" === r && n) return t => l("origin-hint.seed", {
                            position: t
                        })
                    }
                    if ((0, s.isMajorRound)(t) && "loser-bracket" === r) {
                        if (t === e - 2) return t => l("origin-hint.winner-bracket-semi-final", {
                            position: t
                        });
                        if (t === e) return () => l("origin-hint.winner-bracket-final");
                        const r = Math.ceil((t + 1) / 2);
                        return n ? t => l("origin-hint.winner-bracket", {
                            round: r - 1,
                            position: t
                        }) : t => l("origin-hint.winner-bracket", {
                            round: r,
                            position: t
                        })
                    }
                }, e.getFinalOriginHint = function(t, e) {
                    return "consolation_final" === t ? t => l("origin-hint.consolation-final", {
                        position: t
                    }) : 1 === e ? () => l("origin-hint.grand-final") : void 0
                }, e.getMatchLabel = function(t, e, n, r) {
                    const o = l("winner-bracket" === r ? "match-label.winner-bracket" : "loser-bracket" === r ? "match-label.loser-bracket" : "match-label.standard-bracket"),
                        i = e === n - 1,
                        a = e === n;
                    if ("single-bracket" === r) {
                        if (i) return l("match-label.standard-bracket-semi-final", {
                            matchNumber: t
                        });
                        if (a) return l("match-label.standard-bracket-final")
                    }
                    return i ? l("match-label.double-elimination-semi-final", {
                        matchPrefix: o,
                        matchNumber: t
                    }) : a ? l("match-label.double-elimination-final", {
                        matchPrefix: o
                    }) : l("match-label.double-elimination", {
                        matchPrefix: o,
                        roundNumber: e,
                        matchNumber: t
                    })
                }, e.getFinalMatchLabel = function(t, e, n) {
                    return "consolation_final" === t ? l("match-label.consolation-final") : 1 === n ? l("match-label.grand-final-single") : l("match-label.grand-final", {
                        roundNumber: e
                    })
                }, e.getMatchStatus = function(t) {
                    switch (t) {
                        case a.Status.Locked:
                            return l("match-status.locked");
                        case a.Status.Waiting:
                            return l("match-status.waiting");
                        case a.Status.Ready:
                            return l("match-status.ready");
                        case a.Status.Running:
                            return l("match-status.running");
                        case a.Status.Completed:
                            return l("match-status.completed");
                        case a.Status.Archived:
                            return l("match-status.archived");
                        default:
                            return "Unknown status"
                    }
                }, e.getGroupName = function(t) {
                    return l("common.group-name", {
                        groupNumber: t
                    })
                }, e.getBracketName = function(t, e) {
                    switch (e) {
                        case "winner-bracket":
                        case "loser-bracket":
                            return l(`common.group-name-${e}`, {
                                stage: t
                            });
                        default:
                            return
                    }
                }, e.getRoundName = function(t, e) {
                    return t === e ? l("common.round-name-final") : l("common.round-name", {
                        roundNumber: t
                    })
                }, e.getWinnerBracketRoundName = function(t, e) {
                    return t === e ? l("common.round-name-winner-bracket-final") : l("common.round-name-winner-bracket", {
                        roundNumber: t
                    })
                }, e.getLoserBracketRoundName = function(t, e) {
                    return t === e ? l("common.round-name-loser-bracket-final") : l("common.round-name-loser-bracket", {
                        roundNumber: t
                    })
                }
            },
            825: function(t, e, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(e, n);
                        o && !("get" in o ? !e.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return e[n]
                            }
                        }), Object.defineProperty(t, r, o)
                    } : function(t, e, n, r) {
                        void 0 === r && (r = n), t[r] = e[n]
                    }),
                    o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                        Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        })
                    } : function(t, e) {
                        t.default = e
                    }),
                    i = this && this.__importStar || function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
                        return o(e, t), e
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BracketsViewer = void 0, n(16);
                const a = n(21),
                    s = n(886),
                    u = i(n(335)),
                    c = i(n(491));
                e.BracketsViewer = class {
                    constructor() {
                        this.participantRefs = {}, this.participants = [], this.participantImages = [], this.skipFirstRound = !1, this.alwaysConnectFirstRound = !1, this._onMatchClick = t => {}
                    }
                    set onMatchClicked(t) {
                        this._onMatchClick = t
                    }
                    async render(t, e) {
                        const n = document.createDocumentFragment();
                        this.config = {
                            participantOriginPlacement: (null == e ? void 0 : e.participantOriginPlacement) || "before",
                            separatedChildCountLabel: void 0 !== (null == e ? void 0 : e.separatedChildCountLabel) && e.separatedChildCountLabel,
                            showSlotsOrigin: void 0 === (null == e ? void 0 : e.showSlotsOrigin) || e.showSlotsOrigin,
                            showLowerBracketSlotsOrigin: void 0 === (null == e ? void 0 : e.showLowerBracketSlotsOrigin) || e.showLowerBracketSlotsOrigin,
                            highlightParticipantOnHover: void 0 === (null == e ? void 0 : e.highlightParticipantOnHover) || e.highlightParticipantOnHover
                        }, this.config.onMatchClick && (this._onMatchClick = this.config.onMatchClick), this.participants = t.participants, t.participants.forEach((t => this.participantRefs[t.id] = [])), t.stages.forEach((e => this.renderStage(n, {
                            ...t,
                            stages: [e],
                            matches: t.matches.filter((t => t.stage_id === e.id))
                        }))), (0, s.findRoot)(null == e ? void 0 : e.selector).append(n)
                    }
                    updateMatch(t) {
                        var e, n, r, o, i, a;
                        const s = document.querySelector(`[data-match-id='${t.id}']`);
                        if (!s) throw Error("Match not found.");
                        s.setAttribute("data-match-status", t.status.toString());
                        const u = s.querySelector(".participant:nth-of-type(1) .result");
                        u && (null === (e = t.opponent1) || void 0 === e ? void 0 : e.score) && (u.innerHTML = null === (r = null === (n = t.opponent1) || void 0 === n ? void 0 : n.score) || void 0 === r ? void 0 : r.toString());
                        const c = s.querySelector(".participant:nth-of-type(2) .result");
                        c && (null === (o = t.opponent2) || void 0 === o ? void 0 : o.score) && (c.innerHTML = null === (a = null === (i = t.opponent2) || void 0 === i ? void 0 : i.score) || void 0 === a ? void 0 : a.toString())
                    }
                    setParticipantImages(t) {
                        this.participantImages = t
                    }
                    addLocale(t, e) {
                        c.addLocale(t, e)
                    }
                    renderStage(t, e) {
                        const n = e.stages[0],
                            r = (0, s.splitBy)(e.matches, "group_id");
                        switch (this.stage = n, this.skipFirstRound = n.settings.skipFirstRound || !1, n.type) {
                            case "round_robin":
                                this.renderRoundRobin(t, n, r);
                                break;
                            case "single_elimination":
                            case "double_elimination":
                                this.renderElimination(t, n, r);
                                break;
                            default:
                                throw Error(`Unknown bracket type: ${n.type}`)
                        }
                    }
                    renderRoundRobin(t, e, n) {
                        const r = u.createRoundRobinContainer(e.id);
                        r.append(u.createTitle(e.name));
                        let o = 1;
                        for (const t of n) {
                            const e = t[0].group_id,
                                n = u.createGroupContainer(e, c.getGroupName(o++)),
                                i = (0, s.splitBy)(t, "round_id");
                            let a = 1;
                            for (const t of i) {
                                const e = t[0].round_id,
                                    r = u.createRoundContainer(e, c.getRoundName(a++, 0));
                                for (const e of t) r.append(this.createMatch(e));
                                n.append(r)
                            }
                            n.append(this.createRanking(t)), r.append(n)
                        }
                        t.append(r)
                    }
                    renderElimination(t, e, n) {
                        const r = u.createEliminationContainer(e.id);
                        r.append(u.createTitle(e.name)), "single_elimination" === e.type ? this.renderSingleElimination(r, n) : this.renderDoubleElimination(r, n), t.append(r)
                    }
                    renderSingleElimination(t, e) {
                        const n = void 0 !== e[1];
                        this.renderBracket(t, (0, s.splitBy)(e[0], "round_id"), c.getRoundName, "single-bracket"), n && this.renderFinal(t, "consolation_final", e[1])
                    }
                    renderDoubleElimination(t, e) {
                        const n = void 0 !== e[1],
                            r = void 0 !== e[2];
                        this.renderBracket(t, (0, s.splitBy)(e[0], "round_id"), c.getWinnerBracketRoundName, "winner-bracket", r), n && this.renderBracket(t, (0, s.splitBy)(e[1], "round_id"), c.getLoserBracketRoundName, "loser-bracket"), r && this.renderFinal(t, "grand_final", e[2])
                    }
                    renderBracket(t, e, n, r, o) {
                        const i = e[0][0].group_id,
                            a = e.length,
                            l = u.createBracketContainer(i, c.getBracketName(this.stage, r)),
                            d = u.createRoundsContainer(),
                            {
                                matches: p,
                                fromToornament: h
                            } = (0, s.completeWithBlankMatches)(r, e[0], e[1]);
                        this.alwaysConnectFirstRound = !h;
                        for (let t = 0; t < e.length; t++) {
                            const i = e[t][0].round_id,
                                s = t + 1,
                                c = u.createRoundContainer(i, n(s, a)),
                                l = h && 1 === s ? p : e[t];
                            for (const t of l) c.append(t && this.createBracketMatch(s, a, t, r, o) || this.skipBracketMatch());
                            d.append(c)
                        }
                        l.append(d), t.append(l)
                    }
                    renderFinal(t, e, n) {
                        const r = t.querySelector(".bracket .rounds");
                        if (!r) throw Error("Upper bracket not found.");
                        const o = n[0].opponent1,
                            i = null === (null == o ? void 0 : o.id) || "win" === (null == o ? void 0 : o.result) ? 1 : 2,
                            a = n.slice(0, i),
                            s = n.length;
                        for (let t = 0; t < a.length; t++) {
                            const n = t + 1,
                                o = u.createRoundContainer(a[t].round_id, c.getFinalMatchLabel(e, n, s));
                            o.append(this.createFinalMatch(e, a, n, s)), r.append(o)
                        }
                    }
                    createRanking(t) {
                        const e = u.createTable(),
                            n = (0, s.getRanking)(t);
                        e.append(u.createRankingHeaders(n));
                        for (const t of n) e.append(this.createRankingRow(t));
                        return e
                    }
                    createRankingRow(t) {
                        const e = u.createRow(),
                            n = 0 === t.played;
                        for (const r in t) {
                            const o = r,
                                i = t[o];
                            if ("id" === o) {
                                const t = this.participants.find((t => t.id === i));
                                if (void 0 !== t) {
                                    const n = u.createCell(t.name);
                                    this.setupMouseHover(t.id, n), e.append(n);
                                    continue
                                }
                            }!n || "rank" !== o && "points" !== o ? e.append(u.createCell(i)) : e.append(u.createCell("-"))
                        }
                        return e
                    }
                    createBracketMatch(t, e, n, r, o) {
                        const i = u.getBracketConnection(this.alwaysConnectFirstRound, t, e, n, r, o),
                            a = c.getMatchLabel(n.number, t, e, r),
                            s = c.getOriginHint(t, e, this.skipFirstRound, r);
                        return this.createMatch(n, r, i, a, s, t)
                    }
                    createFinalMatch(t, e, n, r) {
                        const o = n - 1,
                            i = u.getFinalConnection(t, n, e.length),
                            a = c.getFinalMatchLabel(t, n, r),
                            s = c.getFinalOriginHint(t, n);
                        return this.createMatch(e[o], "final-group", i, a, s)
                    }
                    skipBracketMatch() {
                        const t = u.createMatchContainer(),
                            e = u.createOpponentsContainer(),
                            n = this.createParticipant(null),
                            r = this.createParticipant(null);
                        return e.append(n, r), t.append(e), t.style.visibility = "hidden", t
                    }
                    createMatch(t, e, n, r, o, i) {
                        const s = u.createMatchContainer(t.id, t.status),
                            c = u.createOpponentsContainer((() => this._onMatchClick(t)));
                        t.status >= a.Status.Completed && (o = void 0);
                        const l = this.createParticipant(t.opponent1, "opponent1", o, e, i),
                            d = this.createParticipant(t.opponent2, "opponent2", o, e, i);
                        return this.renderMatchLabel(c, t, r), c.append(l, d), s.append(c), n ? (u.setupConnection(c, s, n), s) : s
                    }
                    createParticipant(t, e, n, r, o) {
                        const i = {
                            participant: u.createParticipantContainer(t && t.id),
                            name: u.createNameContainer(),
                            result: u.createResultContainer()
                        };
                        return null == t ? u.setupBye(i.name) : this.renderParticipant(i, t, e, n, r, o), i.participant.append(i.name, i.result), t && null !== t.id && this.setupMouseHover(t.id, i.participant), i.participant
                    }
                    renderParticipant(t, e, n, r, o, i) {
                        const a = this.participants.find((t => t.id === e.id));
                        a ? (t.name.innerText = a.name, t.participant.setAttribute("title", a.name), this.renderParticipantImage(t.name, a.id), this.renderParticipantOrigin(t.name, e, n, o, i)) : this.renderHint(t.name, e, r, o), t.result.innerText = `${void 0===e.score?"-":e.score}`, u.setupWin(t.participant, t.result, e), u.setupLoss(t.participant, t.result, e)
                    }
                    renderParticipantImage(t, e) {
                        const n = this.participantImages.find((t => t.participantId === e));
                        n && u.addParticipantImage(t, n.imageUrl)
                    }
                    renderMatchLabel(t, e, n) {
                        const r = `Bo${e.child_count}`;
                        if (n = n || "", this.config.separatedChildCountLabel) return t.append(u.createMatchLabel(n, c.getMatchStatus(e.status))), void(e.child_count > 0 && t.append(u.createChildCountLabel(c.t("common.best-of-x", {
                            x: e.child_count
                        }))));
                        if (e.child_count > 0) {
                            const o = n ? `${n}, ${r}` : r;
                            t.append(u.createMatchLabel(o, c.getMatchStatus(e.status)))
                        }
                    }
                    renderHint(t, e, n, r) {
                        void 0 !== n && void 0 !== e.position && this.config.showSlotsOrigin && (this.config.showLowerBracketSlotsOrigin || "loser-bracket" !== r) && u.setupHint(t, n(e.position))
                    }
                    renderParticipantOrigin(t, e, n, r, o) {
                        if (void 0 === e.position || void 0 === r) return;
                        if (!this.config.participantOriginPlacement || "none" === this.config.participantOriginPlacement) return;
                        if (!this.config.showSlotsOrigin) return;
                        if (!this.config.showLowerBracketSlotsOrigin && "loser-bracket" === r) return;
                        const i = (0, s.getOriginAbbreviation)(r, this.skipFirstRound, o, n);
                        if (!i) return;
                        const a = i + e.position;
                        u.addParticipantOrigin(t, a, this.config.participantOriginPlacement)
                    }
                    setupMouseHover(t, e) {
                        if (!this.config.highlightParticipantOnHover) return;
                        const n = this.participantRefs[t];
                        if (!n) throw Error(`The participant (id: ${t}) does not exist in the participants table.`);
                        n.push(e), e.addEventListener("mouseover", (() => {
                            n.forEach((t => t.classList.add("hover")))
                        })), e.addEventListener("mouseleave", (() => {
                            n.forEach((t => t.classList.remove("hover")))
                        }))
                    }
                }
            },
            945: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BaseGetter = void 0;
                const r = n(487);
                e.BaseGetter = class {
                    constructor(t) {
                        this.storage = t
                    }
                    async getOrderedRounds(t) {
                        if (!(null == t ? void 0 : t.settings.size)) throw Error("The stage has no size.");
                        return "single_elimination" === t.type ? this.getOrderedRoundsSingleElimination(t.id) : this.getOrderedRoundsDoubleElimination(t.id)
                    }
                    async getOrderedRoundsSingleElimination(t) {
                        return [await this.getUpperBracketFirstRound(t)]
                    }
                    async getOrderedRoundsDoubleElimination(t) {
                        const e = await this.storage.select("round", {
                            stage_id: t
                        });
                        if (!e) throw Error("Error getting rounds.");
                        const n = await this.getLoserBracket(t);
                        if (!n) throw Error("Loser bracket not found.");
                        const o = e[0],
                            i = e.filter((t => t.group_id === n.id));
                        return [o, ...i.filter((t => r.isOrderingSupportedLoserBracket(t.number, i.length)))]
                    }
                    async getRoundPositionalInfo(t) {
                        const e = await this.storage.select("round", t);
                        if (!e) throw Error("Round not found.");
                        const n = await this.storage.select("round", {
                            group_id: e.group_id
                        });
                        if (!n) throw Error("Error getting rounds.");
                        return {
                            roundNumber: e.number,
                            roundCount: n.length
                        }
                    }
                    async getPreviousMatches(t, e, n, r) {
                        return "loser_bracket" === e ? this.getPreviousMatchesLB(t, n, r) : "final_group" === e ? this.getPreviousMatchesFinal(t, r) : 1 === r ? [] : this.getMatchesBeforeMajorRound(t, r)
                    }
                    async getPreviousMatchesFinal(t, e) {
                        if (e > 1) return [await this.findMatch(t.group_id, e - 1, 1)];
                        const n = await this.getUpperBracket(t.stage_id),
                            r = await this.getLastRound(n.id),
                            o = await this.storage.selectFirst("match", {
                                round_id: r.id,
                                number: 1
                            });
                        if (null === o) throw Error("Match not found.");
                        return [o]
                    }
                    async getPreviousMatchesLB(t, e, n) {
                        if (e.settings.skipFirstRound && 1 === n) return [];
                        if (r.hasBye(t)) return [];
                        const o = await this.getUpperBracket(t.stage_id),
                            i = Math.ceil((n + 1) / 2),
                            a = e.settings.skipFirstRound ? i - 1 : i;
                        return 1 === n ? this.getMatchesBeforeFirstRoundLB(t, o.id, a) : n % 2 == 0 ? this.getMatchesBeforeMinorRoundLB(t, o.id, n, a) : this.getMatchesBeforeMajorRound(t, n)
                    }
                    async getMatchesBeforeMajorRound(t, e) {
                        return [await this.findMatch(t.group_id, e - 1, 2 * t.number - 1), await this.findMatch(t.group_id, e - 1, 2 * t.number)]
                    }
                    async getMatchesBeforeFirstRoundLB(t, e, n) {
                        return [await this.findMatch(e, n, r.getOriginPosition(t, "opponent1")), await this.findMatch(e, n, r.getOriginPosition(t, "opponent2"))]
                    }
                    async getMatchesBeforeMinorRoundLB(t, e, n, o) {
                        const i = r.getOriginPosition(t, "opponent1");
                        return [await this.findMatch(e, o, i), await this.findMatch(t.group_id, n - 1, t.number)]
                    }
                    async getNextMatches(t, e, n, r, o) {
                        switch (e) {
                            case "single_bracket":
                                return this.getNextMatchesUpperBracket(t, n.type, r, o);
                            case "winner_bracket":
                                return this.getNextMatchesWB(t, n, r, o);
                            case "loser_bracket":
                                return this.getNextMatchesLB(t, n.type, r, o);
                            case "final_group":
                                return this.getNextMatchesFinal(t, r, o);
                            default:
                                throw Error("Unknown bracket kind.")
                        }
                    }
                    async getNextMatchesWB(t, e, n, o) {
                        const i = await this.getLoserBracket(t.stage_id);
                        if (null === i) return [];
                        const a = e.settings.skipFirstRound ? n + 1 : n,
                            s = a > 1 ? 2 * (a - 1) : 1,
                            u = a > 1 ? t.number : r.getDiagonalMatchNumber(t.number),
                            c = e.settings.size,
                            l = r.getLoserOrdering(e.settings.seedOrdering, s),
                            d = r.findLoserMatchNumber(c, s, u, l);
                        return [...await this.getNextMatchesUpperBracket(t, e.type, n, o), await this.findMatch(i.id, s, d)]
                    }
                    async getNextMatchesUpperBracket(t, e, n, r) {
                        return "single_elimination" === e ? this.getNextMatchesUpperBracketSingleElimination(t, e, n, r) : "double_elimination" === e && n === r ? [await this.getFirstMatchFinal(t, e)] : [await this.getDiagonalMatch(t.group_id, n, t.number)]
                    }
                    async getNextMatchesUpperBracketSingleElimination(t, e, n, r) {
                        if (n === r - 1) {
                            const r = await this.getFirstMatchFinal(t, e);
                            return [await this.getDiagonalMatch(t.group_id, n, t.number), ...r ? [r] : []]
                        }
                        return n === r ? [] : [await this.getDiagonalMatch(t.group_id, n, t.number)]
                    }
                    async getNextMatchesLB(t, e, n, r) {
                        if (n === r) {
                            const n = await this.getFirstMatchFinal(t, e);
                            return n ? [n] : []
                        }
                        return n % 2 == 1 ? this.getMatchAfterMajorRoundLB(t, n) : this.getMatchAfterMinorRoundLB(t, n)
                    }
                    async getFirstMatchFinal(t, e) {
                        const n = await this.getFinalGroupId(t.stage_id, e);
                        return null === n ? null : this.findMatch(n, 1, 1)
                    }
                    async getNextMatchesFinal(t, e, n) {
                        return e === n ? [] : [await this.findMatch(t.group_id, e + 1, 1)]
                    }
                    async getMatchAfterMajorRoundLB(t, e) {
                        return [await this.getParallelMatch(t.group_id, e, t.number)]
                    }
                    async getMatchAfterMinorRoundLB(t, e) {
                        return [await this.getDiagonalMatch(t.group_id, e, t.number)]
                    }
                    static getSeedingOrdering(t, e) {
                        return "round_robin" === t ? e.getRoundRobinOrdering() : e.getStandardBracketFirstRoundOrdering()
                    }
                    async getSeedingMatches(t, e) {
                        if ("round_robin" === e) return this.storage.select("match", {
                            stage_id: t
                        });
                        const n = await this.getUpperBracketFirstRound(t);
                        return this.storage.select("match", {
                            round_id: n.id
                        })
                    }
                    async getUpperBracketFirstRound(t) {
                        const e = await this.storage.selectFirst("round", {
                            stage_id: t,
                            number: 1
                        });
                        if (!e) throw Error("Round not found.");
                        return e
                    }
                    async getLastRound(t) {
                        const e = await this.storage.selectLast("round", {
                            group_id: t
                        });
                        if (!e) throw Error("Error getting rounds.");
                        return e
                    }
                    async getFinalGroupId(t, e) {
                        const n = "single_elimination" === e ? 2 : 3,
                            r = await this.storage.selectFirst("group", {
                                stage_id: t,
                                number: n
                            });
                        return r ? r.id : null
                    }
                    async getUpperBracket(t) {
                        const e = await this.storage.selectFirst("group", {
                            stage_id: t,
                            number: 1
                        });
                        if (!e) throw Error("Winner bracket not found.");
                        return e
                    }
                    async getLoserBracket(t) {
                        return this.storage.selectFirst("group", {
                            stage_id: t,
                            number: 2
                        })
                    }
                    async getDiagonalMatch(t, e, n) {
                        return this.findMatch(t, e + 1, r.getDiagonalMatchNumber(n))
                    }
                    async getParallelMatch(t, e, n) {
                        return this.findMatch(t, e + 1, n)
                    }
                    async findMatch(t, e, n) {
                        const r = await this.storage.selectFirst("round", {
                            group_id: t,
                            number: e
                        });
                        if (!r) throw Error("Round not found.");
                        const o = await this.storage.selectFirst("match", {
                            round_id: r.id,
                            number: n
                        });
                        if (!o) throw Error("Match not found.");
                        return o
                    }
                    async findMatchGame(t) {
                        if (void 0 !== t.id) {
                            const e = await this.storage.select("match_game", t.id);
                            if (!e) throw Error("Match game not found.");
                            return e
                        }
                        if (void 0 !== t.parent_id && t.number) {
                            const e = await this.storage.selectFirst("match_game", {
                                parent_id: t.parent_id,
                                number: t.number
                            });
                            if (!e) throw Error("Match game not found.");
                            return e
                        }
                        throw Error("No match game id nor parent id and number given.")
                    }
                }
            },
            517: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BaseUpdater = void 0;
                const r = n(21),
                    o = n(644),
                    i = n(765),
                    a = n(945),
                    s = n(576),
                    u = n(487);
                class c extends a.BaseGetter {
                    async updateSeeding(t, e) {
                        const n = await this.storage.select("stage", t);
                        if (!n) throw Error("Stage not found.");
                        const r = new i.Create(this.storage, {
                            name: n.name,
                            tournamentId: n.tournament_id,
                            type: n.type,
                            settings: n.settings,
                            seeding: e || void 0
                        });
                        r.setExisting(t, !1);
                        const s = a.BaseGetter.getSeedingOrdering(n.type, r),
                            u = await r.getSlots(),
                            l = await this.getSeedingMatches(n.id, n.type);
                        if (!l) throw Error("Error getting matches associated to the seeding.");
                        const d = o.ordering[s](u);
                        await c.assertCanUpdateSeeding(l, d), await r.run()
                    }
                    async confirmCurrentSeeding(t) {
                        const e = await this.storage.select("stage", t);
                        if (!e) throw Error("Stage not found.");
                        const n = new s.Get(this.storage),
                            r = await n.seeding(t),
                            o = u.convertSlotsToSeeding(r.map(u.convertTBDtoBYE)),
                            a = new i.Create(this.storage, {
                                name: e.name,
                                tournamentId: e.tournament_id,
                                type: e.type,
                                settings: e.settings,
                                seeding: o
                            });
                        a.setExisting(t, !0), await a.run()
                    }
                    async updateParentMatch(t, e) {
                        const n = await this.storage.select("match", t);
                        if (!n) throw Error("Parent not found.");
                        const r = await this.storage.select("match_game", {
                            parent_id: t
                        });
                        if (!r) throw Error("No match games.");
                        const o = u.getChildGamesResults(r),
                            i = u.getParentMatchResults(n, o);
                        u.setParentMatchCompleted(i, n.child_count, e), await this.updateMatch(n, i, !0)
                    }
                    static async assertCanUpdateSeeding(t, e) {
                        var n, r;
                        let o = 0;
                        for (const i of t) {
                            const t = e[o++],
                                a = e[o++];
                            if (u.isMatchParticipantLocked(i) && ((null === (n = i.opponent1) || void 0 === n ? void 0 : n.id) !== (null == t ? void 0 : t.id) || (null === (r = i.opponent2) || void 0 === r ? void 0 : r.id) !== (null == a ? void 0 : a.id))) throw Error("A match is locked.")
                        }
                    }
                    async updateRelatedMatches(t, e, n) {
                        const {
                            roundNumber: r,
                            roundCount: o
                        } = await this.getRoundPositionalInfo(t.round_id), i = await this.storage.select("stage", t.stage_id);
                        if (!i) throw Error("Stage not found.");
                        const a = await this.storage.select("group", t.group_id);
                        if (!a) throw Error("Group not found.");
                        const s = u.getMatchLocation(i.type, a.number);
                        e && await this.updatePrevious(t, s, i, r), n && await this.updateNext(t, s, i, r, o)
                    }
                    async updateMatch(t, e, n) {
                        if (!n && u.isMatchUpdateLocked(t)) throw Error("The match is locked.");
                        const r = await this.storage.select("stage", t.stage_id);
                        if (!r) throw Error("Stage not found.");
                        const o = u.isRoundRobin(r),
                            {
                                statusChanged: i,
                                resultChanged: a
                            } = u.setMatchResults(t, e, o);
                        await this.applyMatchUpdate(t), (i || a) && (u.isRoundRobin(r) || await this.updateRelatedMatches(t, i, a))
                    }
                    async updateMatchGame(t, e) {
                        if (u.isMatchUpdateLocked(t)) throw Error("The match game is locked.");
                        const n = await this.storage.select("stage", t.stage_id);
                        if (!n) throw Error("Stage not found.");
                        const r = u.isRoundRobin(n);
                        if (u.setMatchResults(t, e, r), !await this.storage.update("match_game", t.id, t)) throw Error("Could not update the match game.");
                        await this.updateParentMatch(t.parent_id, r)
                    }
                    async applyMatchUpdate(t) {
                        if (!await this.storage.update("match", t.id, t)) throw Error("Could not update the match.");
                        if (0 === t.child_count) return;
                        const e = {
                            opponent1: u.toResult(t.opponent1),
                            opponent2: u.toResult(t.opponent2)
                        };
                        if ((t.status <= r.Status.Ready || t.status === r.Status.Archived) && (e.status = t.status), !await this.storage.update("match_game", {
                                parent_id: t.id
                            }, e)) throw Error("Could not update the match game.")
                    }
                    async updatePrevious(t, e, n, o) {
                        const i = await this.getPreviousMatches(t, e, n, o);
                        0 !== i.length && (t.status >= r.Status.Running ? await this.archiveMatches(i) : await this.resetMatchesStatus(i))
                    }
                    async archiveMatches(t) {
                        for (const e of t) e.status = r.Status.Archived, await this.applyMatchUpdate(e)
                    }
                    async resetMatchesStatus(t) {
                        for (const e of t) e.status = u.getMatchStatus(e), await this.applyMatchUpdate(e)
                    }
                    async updateNext(t, e, n, r, o) {
                        const i = await this.getNextMatches(t, e, n, r, o);
                        if (0 === i.length) return;
                        const a = u.getMatchResult(t),
                            s = n.settings.skipFirstRound && "winner_bracket" === e ? r + 1 : r;
                        a ? await this.applyToNextMatches(u.setNextOpponent, t, e, s, o, i, a) : await this.applyToNextMatches(u.resetNextOpponent, t, e, s, o, i)
                    }
                    async applyToNextMatches(t, e, n, r, o, i, a) {
                        if ("final_group" === n) {
                            if (!i[0]) throw Error("First next match is null.");
                            return t(i[0], "opponent1", e, "opponent1"), t(i[0], "opponent2", e, "opponent2"), void await this.applyMatchUpdate(i[0])
                        }
                        const s = u.getNextSide(e.number, r, o, n);
                        if (i[0] && (t(i[0], s, e, a), await this.propagateByeWinners(i[0])), 2 === i.length) {
                            if (!i[1]) throw Error("Second next match is null.");
                            if ("single_bracket" === n) t(i[1], s, e, a && u.getOtherSide(a)), await this.applyMatchUpdate(i[1]);
                            else {
                                const n = u.getNextSideLoserBracket(e.number, i[1], r);
                                t(i[1], n, e, a && u.getOtherSide(a)), await this.propagateByeWinners(i[1])
                            }
                        }
                    }
                    async propagateByeWinners(t) {
                        u.setMatchResults(t, t, !1), await this.applyMatchUpdate(t), u.hasBye(t) && await this.updateRelatedMatches(t, !0, !0)
                    }
                }
                e.BaseUpdater = c
            },
            765: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Create = e.create = void 0;
                const r = n(644),
                    o = n(487);
                e.create = async function(t) {
                    const e = new i(this.storage, t);
                    await e.run()
                };
                class i {
                    constructor(t, e) {
                        if (this.storage = t, this.stage = e, this.stage.settings = this.stage.settings || {}, this.seedOrdering = this.stage.settings.seedOrdering || [], this.updateMode = !1, this.enableByesInUpdate = !1, !this.stage.name) throw Error("You must provide a name for the stage.");
                        if (!Number.isInteger(this.stage.tournamentId)) throw Error("You must provide a tournament id for the stage.");
                        "round_robin" === e.type && (this.stage.settings.roundRobinMode = this.stage.settings.roundRobinMode || "simple"), "single_elimination" === e.type && (this.stage.settings.consolationFinal = this.stage.settings.consolationFinal || !1), "double_elimination" === e.type && (this.stage.settings.grandFinal = this.stage.settings.grandFinal || "none"), this.stage.settings.matchesChildCount = this.stage.settings.matchesChildCount || 0
                    }
                    async run() {
                        let t = -1;
                        switch (this.stage.type) {
                            case "round_robin":
                                t = await this.roundRobin();
                                break;
                            case "single_elimination":
                                t = await this.singleElimination();
                                break;
                            case "double_elimination":
                                t = await this.doubleElimination();
                                break;
                            default:
                                throw Error("Unknown stage type.")
                        }
                        if (-1 === t) throw Error("Something went wrong when creating the stage.");
                        await this.ensureSeedOrdering(t)
                    }
                    setExisting(t, e) {
                        this.updateMode = !0, this.currentStageId = t, this.enableByesInUpdate = e
                    }
                    async roundRobin() {
                        const t = await this.getRoundRobinGroups(),
                            e = await this.createStage();
                        for (let n = 0; n < t.length; n++) await this.createRoundRobinGroup(e, n + 1, t[n]);
                        return e
                    }
                    async singleElimination() {
                        var t, e;
                        if (Array.isArray(null === (t = this.stage.settings) || void 0 === t ? void 0 : t.seedOrdering) && 1 !== (null === (e = this.stage.settings) || void 0 === e ? void 0 : e.seedOrdering.length)) throw Error("You must specify one seed ordering method.");
                        const n = await this.getSlots(),
                            o = await this.createStage(),
                            i = this.getStandardBracketFirstRoundOrdering(),
                            a = r.ordering[i](n),
                            {
                                losers: s
                            } = await this.createStandardBracket(o, 1, a);
                        return await this.createConsolationFinal(o, s), o
                    }
                    async doubleElimination() {
                        var t;
                        if (this.stage.settings && Array.isArray(this.stage.settings.seedOrdering) && this.stage.settings.seedOrdering.length < 1) throw Error("You must specify at least one seed ordering method.");
                        const e = await this.getSlots(),
                            n = await this.createStage(),
                            o = this.getStandardBracketFirstRoundOrdering(),
                            i = r.ordering[o](e);
                        return (null === (t = this.stage.settings) || void 0 === t ? void 0 : t.skipFirstRound) ? this.createDoubleEliminationSkipFirstRound(n, i) : this.createDoubleElimination(n, i)
                    }
                    async createDoubleEliminationSkipFirstRound(t, e) {
                        var n;
                        const {
                            even: r,
                            odd: i
                        } = o.splitByParity(e), {
                            losers: a,
                            winner: s
                        } = await this.createStandardBracket(t, 1, r);
                        if (o.isDoubleEliminationNecessary(null === (n = this.stage.settings) || void 0 === n ? void 0 : n.size)) {
                            const e = await this.createLowerBracket(t, 2, [i, ...a]);
                            await this.createGrandFinal(t, s, e)
                        }
                        return t
                    }
                    async createDoubleElimination(t, e) {
                        var n;
                        const {
                            losers: r,
                            winner: i
                        } = await this.createStandardBracket(t, 1, e);
                        if (o.isDoubleEliminationNecessary(null === (n = this.stage.settings) || void 0 === n ? void 0 : n.size)) {
                            const e = await this.createLowerBracket(t, 2, r);
                            await this.createGrandFinal(t, i, e)
                        }
                        return t
                    }
                    async createRoundRobinGroup(t, e, n) {
                        var r;
                        const i = await this.insertGroup({
                            stage_id: t,
                            number: e
                        });
                        if (-1 === i) throw Error("Could not insert the group.");
                        const a = o.makeRoundRobinMatches(n, null === (r = this.stage.settings) || void 0 === r ? void 0 : r.roundRobinMode);
                        for (let e = 0; e < a.length; e++) await this.createRound(t, i, e + 1, a[0].length, a[e])
                    }
                    async createStandardBracket(t, e, n) {
                        const r = o.getUpperBracketRoundCount(n.length),
                            i = await this.insertGroup({
                                stage_id: t,
                                number: e
                            });
                        if (-1 === i) throw Error("Could not insert the group.");
                        let a = o.makePairs(n),
                            s = 1;
                        const u = [];
                        for (let e = r - 1; e >= 0; e--) {
                            const n = Math.pow(2, e);
                            a = this.getCurrentDuels(a, n), u.push(a.map(o.byeLoser)), await this.createRound(t, i, s++, n, a)
                        }
                        return {
                            losers: u,
                            winner: o.byeWinner(a[0])
                        }
                    }
                    async createLowerBracket(t, e, n) {
                        var i;
                        const a = null === (i = this.stage.settings) || void 0 === i ? void 0 : i.size,
                            s = o.getRoundPairCount(a);
                        let u = 0;
                        const c = this.getMajorOrdering(a),
                            l = r.ordering[c](n[u++]),
                            d = await this.insertGroup({
                                stage_id: t,
                                number: e
                            });
                        if (-1 === d) throw Error("Could not insert the group.");
                        let p = o.makePairs(l),
                            h = 1;
                        for (let e = 0; e < s; e++) {
                            const r = Math.pow(2, s - e - 1);
                            p = this.getCurrentDuels(p, r, !0), await this.createRound(t, d, h++, r, p);
                            const o = this.getMinorOrdering(a, e, s);
                            p = this.getCurrentDuels(p, r, !1, n[u++], o), await this.createRound(t, d, h++, r, p)
                        }
                        return o.byeWinnerToGrandFinal(p[0])
                    }
                    async createUniqueMatchBracket(t, e, n) {
                        const r = await this.insertGroup({
                            stage_id: t,
                            number: e
                        });
                        if (-1 === r) throw Error("Could not insert the group.");
                        for (let e = 0; e < n.length; e++) await this.createRound(t, r, e + 1, 1, [n[e]])
                    }
                    async createRound(t, e, n, r, o) {
                        const i = this.getMatchesChildCount(),
                            a = await this.insertRound({
                                number: n,
                                stage_id: t,
                                group_id: e
                            });
                        if (-1 === a) throw Error("Could not insert the round.");
                        for (let n = 0; n < r; n++) await this.createMatch(t, e, a, n + 1, o[n], i)
                    }
                    async createMatch(t, e, n, r, i, a) {
                        const s = o.toResultWithPosition(i[0]),
                            u = o.toResultWithPosition(i[1]);
                        if ("round_robin" === this.stage.type && null === s && null === u) return;
                        let c = null,
                            l = o.getMatchStatus(i);
                        if (this.updateMode) {
                            c = await this.storage.selectFirst("match", {
                                round_id: n,
                                number: r
                            });
                            const t = null == c ? void 0 : c.child_count;
                            if (a = void 0 === t ? a : t, c) {
                                const t = o.getMatchStatus(c);
                                t > l && (l = t)
                            }
                        }
                        const d = await this.insertMatch({
                            number: r,
                            stage_id: t,
                            group_id: e,
                            round_id: n,
                            child_count: a,
                            status: l,
                            opponent1: s,
                            opponent2: u
                        }, c);
                        if (-1 === d) throw Error("Could not insert the match.");
                        for (let e = 0; e < a; e++)
                            if (-1 === await this.insertMatchGame({
                                    number: e + 1,
                                    stage_id: t,
                                    parent_id: d,
                                    status: l,
                                    opponent1: o.toResult(i[0]),
                                    opponent2: o.toResult(i[1])
                                })) throw Error("Could not insert the match game.")
                    }
                    getCurrentDuels(t, e, n, r, i) {
                        return void 0 !== n && !n || t.length !== e ? void 0 === n || n ? o.transitionToMajor(t) : o.transitionToMinor(t, r, i) : t
                    }
                    async getSlots(t) {
                        var e, n;
                        const r = (null === (e = this.stage.settings) || void 0 === e ? void 0 : e.size) || (null === (n = this.stage.seeding) || void 0 === n ? void 0 : n.length) || 0;
                        if (o.ensureValidSize(r), r && !this.stage.seeding) return Array.from(Array(r), ((t, e) => ({
                            id: null,
                            position: e + 1
                        })));
                        if (!this.stage.seeding) throw Error("Either size or seeding must be given.");
                        return this.stage.settings = {
                            ...this.stage.settings,
                            size: r
                        }, o.ensureNoDuplicates(this.stage.seeding), this.stage.seeding = o.fixSeeding(this.stage.seeding, r), "round_robin" !== this.stage.type && this.stage.settings.balanceByes && (this.stage.seeding = o.balanceByes(this.stage.seeding, this.stage.settings.size)), o.isSeedingWithIds(this.stage.seeding) ? this.getSlotsUsingIds(this.stage.seeding, t) : this.getSlotsUsingNames(this.stage.seeding, t)
                    }
                    async getSlotsUsingNames(t, e) {
                        const n = o.extractParticipantsFromSeeding(this.stage.tournamentId, t);
                        if (!await this.registerParticipants(n)) throw Error("Error registering the participants.");
                        const r = await this.storage.select("participant", {
                            tournament_id: this.stage.tournamentId
                        });
                        if (!r) throw Error("Error getting registered participant.");
                        return o.mapParticipantsNamesToDatabase(t, r, e)
                    }
                    async getSlotsUsingIds(t, e) {
                        const n = await this.storage.select("participant", {
                            tournament_id: this.stage.tournamentId
                        });
                        if (!n) throw Error("No available participants.");
                        return o.mapParticipantsIdsToDatabase(t, n, e)
                    }
                    async getStageNumber() {
                        const t = await this.storage.select("stage", {
                                tournament_id: this.stage.tournamentId
                            }),
                            e = null == t ? void 0 : t.map((t => t.number));
                        if (void 0 !== this.stage.number) {
                            if (null == e ? void 0 : e.includes(this.stage.number)) throw Error("The given stage number already exists.");
                            return this.stage.number
                        }
                        return (null == e ? void 0 : e.length) ? Math.max(...e) + 1 : 1
                    }
                    getMatchesChildCount() {
                        var t;
                        return (null === (t = this.stage.settings) || void 0 === t ? void 0 : t.matchesChildCount) ? this.stage.settings.matchesChildCount : 0
                    }
                    getOrdering(t, e, n) {
                        var r;
                        if (!(null === (r = this.stage.settings) || void 0 === r ? void 0 : r.seedOrdering)) return this.seedOrdering.push(n), n;
                        const o = this.stage.settings.seedOrdering[t];
                        if (!o) return this.seedOrdering.push(n), n;
                        if ("elimination" === e && o.match(/^groups\./)) throw Error("You must specify a seed ordering method without a 'groups' prefix");
                        if ("groups" === e && "natural" !== o && !o.match(/^groups\./)) throw Error("You must specify a seed ordering method with a 'groups' prefix");
                        return o
                    }
                    async getRoundRobinGroups() {
                        var t, e, n, i, a;
                        if (void 0 === (null === (t = this.stage.settings) || void 0 === t ? void 0 : t.groupCount) || !Number.isInteger(this.stage.settings.groupCount)) throw Error("You must specify a group count for round-robin stages.");
                        if (this.stage.settings.groupCount <= 0) throw Error("You must provide a strictly positive group count.");
                        if (null === (e = this.stage.settings) || void 0 === e ? void 0 : e.manualOrdering) {
                            if ((null === (n = this.stage.settings) || void 0 === n ? void 0 : n.manualOrdering.length) !== (null === (i = this.stage.settings) || void 0 === i ? void 0 : i.groupCount)) throw Error("Group count in the manual ordering does not correspond to the given group count.");
                            const t = null === (a = this.stage.settings) || void 0 === a ? void 0 : a.manualOrdering.flat(),
                                e = await this.getSlots(t);
                            return o.makeGroups(e, this.stage.settings.groupCount)
                        }
                        if (Array.isArray(this.stage.settings.seedOrdering) && 1 !== this.stage.settings.seedOrdering.length) throw Error("You must specify one seed ordering method.");
                        const s = this.getRoundRobinOrdering(),
                            u = await this.getSlots(),
                            c = r.ordering[s](u, this.stage.settings.groupCount);
                        return o.makeGroups(c, this.stage.settings.groupCount)
                    }
                    getRoundRobinOrdering() {
                        return this.getOrdering(0, "groups", "groups.effort_balanced")
                    }
                    getStandardBracketFirstRoundOrdering() {
                        return this.getOrdering(0, "elimination", "inner_outer")
                    }
                    getMajorOrdering(t) {
                        return this.getOrdering(1, "elimination", r.defaultMinorOrdering[t][0])
                    }
                    getMinorOrdering(t, e, n) {
                        if (e !== n - 1) return this.getOrdering(2 + e, "elimination", r.defaultMinorOrdering[t][1 + e])
                    }
                    async insertStage(t) {
                        let e = null;
                        return this.updateMode && (e = await this.storage.select("stage", this.currentStageId)), e ? e.id : this.storage.insert("stage", t)
                    }
                    async insertGroup(t) {
                        let e = null;
                        return this.updateMode && (e = await this.storage.selectFirst("group", {
                            stage_id: t.stage_id,
                            number: t.number
                        })), e ? e.id : this.storage.insert("group", t)
                    }
                    async insertRound(t) {
                        let e = null;
                        return this.updateMode && (e = await this.storage.selectFirst("round", {
                            group_id: t.group_id,
                            number: t.number
                        })), e ? e.id : this.storage.insert("round", t)
                    }
                    async insertMatch(t, e) {
                        if (!e) return this.storage.insert("match", t);
                        const n = o.getUpdatedMatchResults(t, e, this.enableByesInUpdate);
                        if (!await this.storage.update("match", e.id, n)) throw Error("Could not update the match.");
                        return e.id
                    }
                    async insertMatchGame(t) {
                        let e = null;
                        if (this.updateMode && (e = await this.storage.selectFirst("match_game", {
                                parent_id: t.parent_id,
                                number: t.number
                            })), !e) return this.storage.insert("match_game", t);
                        const n = o.getUpdatedMatchResults(t, e, this.enableByesInUpdate);
                        if (!await this.storage.update("match_game", e.id, n)) throw Error("Could not update the match game.");
                        return e.id
                    }
                    async registerParticipants(t) {
                        const e = await this.storage.select("participant", {
                            tournament_id: this.stage.tournamentId
                        });
                        if (!e || 0 === e.length) return this.storage.insert("participant", t);
                        for (const n of t)
                            if (!e.some((t => t.name === n.name)) && -1 === await this.storage.insert("participant", n)) return !1;
                        return !0
                    }
                    async createStage() {
                        const t = await this.getStageNumber(),
                            e = await this.insertStage({
                                tournament_id: this.stage.tournamentId,
                                name: this.stage.name,
                                type: this.stage.type,
                                number: t,
                                settings: this.stage.settings || {}
                            });
                        if (-1 === e) throw Error("Could not insert the stage.");
                        return e
                    }
                    async createConsolationFinal(t, e) {
                        var n;
                        if (!(null === (n = this.stage.settings) || void 0 === n ? void 0 : n.consolationFinal)) return;
                        const r = e[e.length - 2];
                        await this.createUniqueMatchBracket(t, 2, [r])
                    }
                    async createGrandFinal(t, e, n) {
                        var r;
                        const o = null === (r = this.stage.settings) || void 0 === r ? void 0 : r.grandFinal;
                        if ("none" === o) return;
                        const i = [
                            [e, n]
                        ];
                        "double" === o && i.push([{
                            id: null
                        }, {
                            id: null
                        }]), await this.createUniqueMatchBracket(t, 3, i)
                    }
                    async ensureSeedOrdering(t) {
                        var e, n;
                        if ((null === (n = null === (e = this.stage.settings) || void 0 === e ? void 0 : e.seedOrdering) || void 0 === n ? void 0 : n.length) === this.seedOrdering.length) return;
                        const r = await this.storage.select("stage", t);
                        if (!r) throw Error("Stage not found.");
                        if (r.settings = {
                                ...r.settings,
                                seedOrdering: this.seedOrdering
                            }, !await this.storage.update("stage", t, r)) throw Error("Could not update the stage.")
                    }
                }
                e.Create = i
            },
            378: function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Delete = void 0, e.Delete = class {
                    constructor(t) {
                        this.storage = t
                    }
                    async stage(t) {
                        if (!await this.storage.delete("match_game", {
                                stage_id: t
                            })) throw Error("Could not delete match games.");
                        if (!await this.storage.delete("match", {
                                stage_id: t
                            })) throw Error("Could not delete matches.");
                        if (!await this.storage.delete("round", {
                                stage_id: t
                            })) throw Error("Could not delete rounds.");
                        if (!await this.storage.delete("group", {
                                stage_id: t
                            })) throw Error("Could not delete groups.");
                        if (!await this.storage.delete("stage", {
                                id: t
                            })) throw Error("Could not delete stages.")
                    }
                }
            },
            63: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Find = void 0;
                const r = n(945),
                    o = n(487);
                class i extends r.BaseGetter {
                    async upperBracket(t) {
                        const e = await this.storage.select("stage", t);
                        if (!e) throw Error("Stage not found.");
                        switch (e.type) {
                            case "round_robin":
                                throw Error("Round-robin stages do not have an upper bracket.");
                            case "single_elimination":
                            case "double_elimination":
                                return this.getUpperBracket(t);
                            default:
                                throw Error("Unknown stage type.")
                        }
                    }
                    async loserBracket(t) {
                        const e = await this.storage.select("stage", t);
                        if (!e) throw Error("Stage not found.");
                        switch (e.type) {
                            case "round_robin":
                                throw Error("Round-robin stages do not have a loser bracket.");
                            case "single_elimination":
                                throw Error("Single elimination stages do not have a loser bracket.");
                            case "double_elimination":
                                const e = await this.getLoserBracket(t);
                                if (!e) throw Error("Loser bracket not found.");
                                return e;
                            default:
                                throw Error("Unknown stage type.")
                        }
                    }
                    async previousMatches(t) {
                        const e = await this.storage.select("match", t);
                        if (!e) throw Error("Match not found.");
                        const n = await this.storage.select("stage", e.stage_id);
                        if (!n) throw Error("Stage not found.");
                        const r = await this.storage.select("group", e.group_id);
                        if (!r) throw Error("Group not found.");
                        const i = await this.storage.select("round", e.round_id);
                        if (!i) throw Error("Round not found.");
                        const a = o.getMatchLocation(n.type, r.number);
                        return this.getPreviousMatches(e, a, n, i.number)
                    }
                    async nextMatches(t) {
                        const e = await this.storage.select("match", t);
                        if (!e) throw Error("Match not found.");
                        const n = await this.storage.select("stage", e.stage_id);
                        if (!n) throw Error("Stage not found.");
                        const r = await this.storage.select("group", e.group_id);
                        if (!r) throw Error("Group not found.");
                        const {
                            roundNumber: i,
                            roundCount: a
                        } = await this.getRoundPositionalInfo(e.round_id), s = o.getMatchLocation(n.type, r.number), u = await this.getNextMatches(e, s, n, i, a);
                        return o.getNonNull(u)
                    }
                    async match(t, e, n) {
                        return this.findMatch(t, e, n)
                    }
                    async matchGame(t) {
                        return this.findMatchGame(t)
                    }
                }
                e.Find = i
            },
            576: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Get = void 0;
                const r = n(945),
                    o = n(487);
                class i extends r.BaseGetter {
                    async stageData(t) {
                        const e = await this.getStageSpecificData(t),
                            n = await this.storage.select("participant", {
                                tournament_id: e.stage.tournament_id
                            });
                        if (!n) throw Error("Error getting participants.");
                        return {
                            stage: [e.stage],
                            group: e.groups,
                            round: e.rounds,
                            match: e.matches,
                            match_game: e.matchGames,
                            participant: n
                        }
                    }
                    async tournamentData(t) {
                        const e = await this.storage.select("stage", {
                            tournament_id: t
                        });
                        if (!e) throw Error("Error getting stages.");
                        const n = await Promise.all(e.map((t => this.getStageSpecificData(t.id)))),
                            r = await this.storage.select("participant", {
                                tournament_id: t
                            });
                        if (!r) throw Error("Error getting participants.");
                        return {
                            stage: e,
                            group: n.reduce(((t, e) => [...t, ...e.groups]), []),
                            round: n.reduce(((t, e) => [...t, ...e.rounds]), []),
                            match: n.reduce(((t, e) => [...t, ...e.matches]), []),
                            match_game: n.reduce(((t, e) => [...t, ...e.matchGames]), []),
                            participant: r
                        }
                    }
                    async matchGames(t) {
                        const e = t.filter((t => t.child_count > 0)),
                            n = await Promise.all(e.map((t => this.storage.select("match_game", {
                                parent_id: t.id
                            }))));
                        if (n.some((t => null === t))) throw Error("Error getting match games.");
                        return o.getNonNull(n).flat()
                    }
                    async seeding(t) {
                        const e = await this.storage.select("stage", t);
                        if (!e) throw Error("Stage not found.");
                        return "round_robin" === e.type ? this.roundRobinSeeding(e) : this.eliminationSeeding(e)
                    }
                    async finalStandings(t) {
                        const e = await this.storage.select("stage", t);
                        if (!e) throw Error("Stage not found.");
                        switch (e.type) {
                            case "round_robin":
                                throw Error("A round-robin stage does not have standings.");
                            case "single_elimination":
                                return this.singleEliminationStandings(t);
                            case "double_elimination":
                                return this.doubleEliminationStandings(t);
                            default:
                                throw Error("Unknown stage type.")
                        }
                    }
                    async roundRobinSeeding(t) {
                        if (void 0 === t.settings.size) throw Error("The size of the seeding is undefined.");
                        const e = await this.storage.select("match", {
                            stage_id: t.id
                        });
                        if (!e) throw Error("Error getting matches.");
                        const n = o.convertMatchesToSeeding(e);
                        if (n.length < t.settings.size) {
                            const e = t.settings.size - n.length;
                            for (let t = 0; t < e; t++) n.push(null)
                        }
                        const r = o.uniqueBy(n, (t => t && t.position));
                        return o.setArraySize(r, t.settings.size, null)
                    }
                    async eliminationSeeding(t) {
                        const e = await this.storage.selectFirst("round", {
                            stage_id: t.id,
                            number: 1
                        });
                        if (!e) throw Error("Error getting the first round.");
                        const n = await this.storage.select("match", {
                            round_id: e.id
                        });
                        if (!n) throw Error("Error getting matches.");
                        return o.convertMatchesToSeeding(n)
                    }
                    async singleEliminationStandings(t) {
                        var e;
                        const n = [],
                            {
                                stage: r,
                                group: i,
                                match: a,
                                participant: s
                            } = await this.stageData(t),
                            [u] = r,
                            [c, l] = i,
                            d = a.filter((t => t.group_id === c.id)).pop();
                        if (!d) throw Error("Final not found.");
                        n[0] = [o.findParticipant(s, o.getWinner(d))];
                        const p = o.getLosers(s, a.filter((t => t.group_id === c.id)));
                        if (n.push(...p.reverse()), null === (e = u.settings) || void 0 === e ? void 0 : e.consolationFinal) {
                            const t = a.filter((t => t.group_id === l.id)).pop();
                            if (!t) throw Error("Consolation final not found.");
                            n[2][0] = o.findParticipant(s, o.getWinner(t)), n[2][1] = o.findParticipant(s, o.getLoser(t))
                        }
                        return o.makeFinalStandings(n)
                    }
                    async doubleEliminationStandings(t) {
                        var e, n;
                        const r = [],
                            {
                                stage: i,
                                group: a,
                                match: s,
                                participant: u
                            } = await this.stageData(t),
                            [c] = i,
                            [l, d, p] = a;
                        if ("none" === (null === (e = c.settings) || void 0 === e ? void 0 : e.grandFinal)) {
                            const t = s.filter((t => t.group_id === l.id)).pop();
                            if (!t) throw Error("WB final not found.");
                            const e = s.filter((t => t.group_id === d.id)).pop();
                            if (!e) throw Error("LB final not found.");
                            r[0] = [o.findParticipant(u, o.getWinner(t))], r[1] = [o.findParticipant(u, o.getWinner(e))]
                        } else {
                            const t = s.filter((t => t.group_id === p.id)),
                                e = o.getGrandFinalDecisiveMatch((null === (n = c.settings) || void 0 === n ? void 0 : n.grandFinal) || "none", t);
                            r[0] = [o.findParticipant(u, o.getWinner(e))], r[1] = [o.findParticipant(u, o.getLoser(e))]
                        }
                        const h = o.getLosers(u, s.filter((t => t.group_id === d.id)));
                        return r.push(...h.reverse()), o.makeFinalStandings(r)
                    }
                    async getStageSpecificData(t) {
                        const e = await this.storage.select("stage", t);
                        if (!e) throw Error("Stage not found.");
                        const n = await this.storage.select("group", {
                            stage_id: t
                        });
                        if (!n) throw Error("Error getting groups.");
                        const r = await this.storage.select("round", {
                            stage_id: t
                        });
                        if (!r) throw Error("Error getting rounds.");
                        const o = await this.storage.select("match", {
                            stage_id: t
                        });
                        if (!o) throw Error("Error getting matches.");
                        return {
                            stage: e,
                            groups: n,
                            rounds: r,
                            matches: o,
                            matchGames: await this.matchGames(o)
                        }
                    }
                }
                e.Get = i
            },
            487: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.getNextSideLoserBracket = e.getNextSide = e.findParticipant = e.getGrandFinalDecisiveMatch = e.makeFinalStandings = e.getLosers = e.getOriginPosition = e.getOpponentId = e.resetMatchResults = e.setMatchResults = e.getMatchStatus = e.hasBye = e.isMatchParticipantLocked = e.isMatchUpdateLocked = e.isMatchByeCompleted = e.isMatchWinCompleted = e.isMatchDrawCompleted = e.isMatchResultCompleted = e.isMatchForfeitCompleted = e.isMatchCompleted = e.isMatchStarted = e.getOtherSide = e.getSide = e.findPosition = e.getMatchResult = e.byeLoser = e.byeWinnerToGrandFinal = e.byeWinner = e.getLoser = e.getWinner = e.toResultWithPosition = e.toResult = e.convertTBDtoBYE = e.ensureNotTied = e.ensureValidSize = e.fixSeeding = e.ensureEquallySized = e.ensureNoDuplicates = e.ensureEvenSized = e.makePairs = e.setArraySize = e.normalizeParticipant = e.makeNormalizedIdMapping = e.normalizeIds = e.balanceByes = e.makeGroups = e.assertRoundRobin = e.makeRoundRobinDistribution = e.makeRoundRobinMatches = e.splitByParity = void 0, e.getMatchLocation = e.isFinalGroup = e.isLoserBracket = e.isWinnerBracket = e.ensureNotRoundRobin = e.isRoundRobin = e.minScoreToWinBestOfX = e.getNearestPowerOfTwo = e.getDiagonalMatchNumber = e.getLowerBracketRoundCount = e.getLoserOrdering = e.getLoserRoundMatchCount = e.findLoserMatchNumber = e.isDoubleEliminationNecessary = e.getRoundPairCount = e.getUpperBracketRoundCount = e.isOrderingSupportedLoserBracket = e.isOrderingSupportedUpperBracket = e.ensureOrderingSupported = e.getSeedCount = e.getSeeds = e.getChildGamesResults = e.getUpdatedMatchResults = e.getParentMatchResults = e.setParentMatchCompleted = e.transitionToMinor = e.transitionToMajor = e.uniqueBy = e.getNonNull = e.sortSeeding = e.convertSlotsToSeeding = e.convertMatchesToSeeding = e.mapParticipantsToDatabase = e.mapParticipantsIdsToDatabase = e.mapParticipantsNamesToDatabase = e.extractParticipantsFromSeeding = e.isSeedingWithIds = e.setForfeits = e.setResults = e.setCompleted = e.setScores = e.invertOpponents = e.handleOpponentsInversion = e.resetNextOpponent = e.setNextOpponent = void 0;
                const r = n(21),
                    o = n(644);

                function i(t) {
                    const e = t.length,
                        n = e % 2 == 0 ? e : e + 1,
                        r = n - 1,
                        o = n / 2,
                        i = [];
                    for (let a = 0; a < r; a++) {
                        const r = [];
                        for (let i = 0; i < o; i++) {
                            if (0 === i && e % 2 == 1) continue;
                            const o = [(a - i - 1 + n) % (n - 1), 0 === i ? n - 1 : (a + i) % (n - 1)];
                            r.push([t[o[0]], t[o[1]]])
                        }
                        i.push(r)
                    }
                    return i
                }

                function a(t) {
                    let e = 0;
                    return t.reduce(((t, n) => ({
                        ...t,
                        [n.id]: e++
                    })), {})
                }

                function s(t, e) {
                    return null === t ? null : {
                        ...t,
                        id: null !== t.id ? e[t.id] : null
                    }
                }

                function u(t, e, n) {
                    return Array.from(Array(e), ((e, r) => t[r] || n))
                }

                function c(t) {
                    const e = d(t);
                    return e ? t[h(e)] : null
                }

                function l(t) {
                    return null === t[0] && null === t[1] ? null : null === t[0] && null !== t[1] ? {
                        id: t[1].id
                    } : null !== t[0] && null === t[1] ? {
                        id: t[0].id
                    } : {
                        id: null
                    }
                }

                function d(t) {
                    var e, n;
                    if (!f(t)) return null;
                    if (y(t)) return null;
                    if (null === t.opponent1 && null === t.opponent2) return null;
                    let r = null;
                    if (("win" === (null === (e = t.opponent1) || void 0 === e ? void 0 : e.result) || null === t.opponent2 || t.opponent2.forfeit) && (r = "opponent1"), "win" === (null === (n = t.opponent2) || void 0 === n ? void 0 : n.result) || null === t.opponent1 || t.opponent1.forfeit) {
                        if (null !== r) throw Error("There are two winners.");
                        r = "opponent2"
                    }
                    return r
                }

                function p(t) {
                    return t % 2 == 1 ? "opponent1" : "opponent2"
                }

                function h(t) {
                    return "opponent1" === t ? "opponent2" : "opponent1"
                }

                function g(t) {
                    var e, n;
                    return void 0 !== (null === (e = t.opponent1) || void 0 === e ? void 0 : e.score) || void 0 !== (null === (n = t.opponent2) || void 0 === n ? void 0 : n.score)
                }

                function f(t) {
                    return w(t) || m(t) || v(t)
                }

                function m(t) {
                    var e, n;
                    return void 0 !== (null === (e = t.opponent1) || void 0 === e ? void 0 : e.forfeit) || void 0 !== (null === (n = t.opponent2) || void 0 === n ? void 0 : n.forfeit)
                }

                function v(t) {
                    return y(t) || b(t)
                }

                function y(t) {
                    var e, n;
                    return "draw" === (null === (e = t.opponent1) || void 0 === e ? void 0 : e.result) && "draw" === (null === (n = t.opponent2) || void 0 === n ? void 0 : n.result)
                }

                function b(t) {
                    var e, n, r, o;
                    return "win" === (null === (e = t.opponent1) || void 0 === e ? void 0 : e.result) || "win" === (null === (n = t.opponent2) || void 0 === n ? void 0 : n.result) || "loss" === (null === (r = t.opponent1) || void 0 === r ? void 0 : r.result) || "loss" === (null === (o = t.opponent2) || void 0 === o ? void 0 : o.result)
                }

                function w(t) {
                    var e, n;
                    return null === t.opponent1 && null !== (null === (e = t.opponent2) || void 0 === e ? void 0 : e.id) || null === t.opponent2 && null !== (null === (n = t.opponent1) || void 0 === n ? void 0 : n.id) || null === t.opponent1 && null === t.opponent2
                }

                function k(t) {
                    return null === t.opponent1 || null === t.opponent2
                }

                function S(t) {
                    var e, n, o, i;
                    const a = Array.isArray(t) ? {
                        opponent1: t[0],
                        opponent2: t[1]
                    } : t;
                    return k(a) || null === (null === (e = a.opponent1) || void 0 === e ? void 0 : e.id) && null === (null === (n = a.opponent2) || void 0 === n ? void 0 : n.id) ? r.Status.Locked : null === (null === (o = a.opponent1) || void 0 === o ? void 0 : o.id) || null === (null === (i = a.opponent2) || void 0 === i ? void 0 : i.id) ? r.Status.Waiting : f(a) ? r.Status.Completed : g(a) ? r.Status.Running : r.Status.Ready
                }

                function O(t) {
                    t.opponent1 && (t.opponent1.forfeit = void 0, t.opponent1.result = void 0), t.opponent2 && (t.opponent2.forfeit = void 0, t.opponent2.result = void 0), t.status = S(t)
                }

                function M(t, e) {
                    const n = t[e];
                    return n && n.id
                }

                function x(t, e) {
                    const n = t.find((t => t.id === (null == e ? void 0 : e.id)));
                    if (!n) throw Error("Participant not found.");
                    return n
                }

                function R(t, e) {
                    var n, r, o, i;
                    const a = null === (n = e.opponent1) || void 0 === n ? void 0 : n.id,
                        s = null === (r = e.opponent2) || void 0 === r ? void 0 : r.id,
                        u = null === (o = t.opponent1) || void 0 === o ? void 0 : o.id,
                        c = null === (i = t.opponent2) || void 0 === i ? void 0 : i.id;
                    if (Number.isInteger(a) && a !== u && a !== c) throw Error("The given opponent1 ID does not exist in this match.");
                    if (Number.isInteger(s) && s !== u && s !== c) throw Error("The given opponent2 ID does not exist in this match.");
                    (Number.isInteger(a) && a === c || Number.isInteger(s) && s === u) && E(e)
                }

                function E(t) {
                    [t.opponent1, t.opponent2] = [t.opponent2, t.opponent1]
                }

                function _(t, e) {
                    var n, o, i, a;
                    if ((null === (n = e.opponent1) || void 0 === n ? void 0 : n.score) === (null === (o = t.opponent1) || void 0 === o ? void 0 : o.score) && (null === (i = e.opponent2) || void 0 === i ? void 0 : i.score) === (null === (a = t.opponent2) || void 0 === a ? void 0 : a.score)) return !1;
                    const s = t.status;
                    return t.status = r.Status.Running, e.opponent1 && t.opponent1 && (t.opponent1.score = e.opponent1.score), e.opponent2 && t.opponent2 && (t.opponent2.score = e.opponent2.score), t.status !== s
                }

                function C(t, e, n) {
                    t.status = r.Status.Completed, P(t, e, "win", "loss", n), P(t, e, "loss", "win", n), P(t, e, "draw", "draw", n), t.opponent1 && !t.opponent2 && (t.opponent1.result = "win"), !t.opponent1 && t.opponent2 && (t.opponent2.result = "win"), L(t, e)
                }

                function P(t, e, n, r, o) {
                    var i, a;
                    if (e.opponent1 && e.opponent2) {
                        if ("win" === e.opponent1.result && "win" === e.opponent2.result) throw Error("There are two winners.");
                        if ("loss" === e.opponent1.result && "loss" === e.opponent2.result) throw Error("There are two losers.");
                        if (!o && !0 === e.opponent1.forfeit && !0 === e.opponent2.forfeit) throw Error("There are two forfeits.")
                    }(null === (i = e.opponent1) || void 0 === i ? void 0 : i.result) === n && (t.opponent1 ? t.opponent1.result = n : t.opponent1 = {
                        id: null,
                        result: n
                    }, t.opponent2 ? t.opponent2.result = r : t.opponent2 = {
                        id: null,
                        result: r
                    }), (null === (a = e.opponent2) || void 0 === a ? void 0 : a.result) === n && (t.opponent2 ? t.opponent2.result = n : t.opponent2 = {
                        id: null,
                        result: n
                    }, t.opponent1 ? t.opponent1.result = r : t.opponent1 = {
                        id: null,
                        result: r
                    })
                }

                function L(t, e) {
                    var n, r, o, i;
                    if (!0 === (null === (n = e.opponent1) || void 0 === n ? void 0 : n.forfeit) && !0 === (null === (r = e.opponent2) || void 0 === r ? void 0 : r.forfeit)) return t.opponent1 && (t.opponent1.forfeit = !0), void(t.opponent2 && (t.opponent2.forfeit = !0));
                    !0 === (null === (o = e.opponent1) || void 0 === o ? void 0 : o.forfeit) && (t.opponent1 && (t.opponent1.forfeit = !0), t.opponent2 ? t.opponent2.result = "win" : t.opponent2 = {
                        id: null,
                        result: "win"
                    }), !0 === (null === (i = e.opponent2) || void 0 === i ? void 0 : i.forfeit) && (t.opponent2 && (t.opponent2.forfeit = !0), t.opponent1 ? t.opponent1.result = "win" : t.opponent1 = {
                        id: null,
                        result: "win"
                    })
                }

                function N(t, e, n, r) {
                    const o = e.map(((e, r) => {
                        if (null === e) return null;
                        const o = n.find((n => n[t] === e));
                        if (!o) throw Error(`Participant ${t} not found in database.`);
                        return {
                            id: o.id,
                            position: r + 1
                        }
                    }));
                    if (!r) return o;
                    if (r.length !== o.length) throw Error("Not enough seeds in at least one group of the manual ordering.");
                    return r.map((t => o[t - 1]))
                }

                function B(t) {
                    const e = t.filter((t => null !== t));
                    if (e.sort(((t, e) => t.position - e.position)), e.length === t.length) return e;
                    const n = Object.fromEntries(e.map((t => [t.position - 1, t])));
                    return Array.from({
                        length: t.length
                    }, ((t, e) => n[e] || null))
                }

                function j(t) {
                    return t.filter((t => null !== t))
                }

                function F(t, e, n, r) {
                    return D(t, e, n), 1 === e ? 2 * r : r
                }

                function D(t, e, n) {
                    if (t && !A(e, n)) throw Error("This round does not support ordering.");
                    if (!t && !T(e)) throw Error("This round does not support ordering.")
                }

                function T(t) {
                    return 1 === t
                }

                function A(t, e) {
                    return 1 === t || t % 2 == 0 && t < e
                }

                function I(t) {
                    return Math.log2(t)
                }

                function U(t) {
                    return I(t) - 1
                }

                function G(t, e) {
                    const n = Math.ceil(e / 2) - 1,
                        r = U(t);
                    return Math.pow(2, r - n - 1)
                }

                function W(t) {
                    return Math.pow(2, Math.ceil(Math.log2(t)))
                }

                function z(t) {
                    return (t + 1) / 2
                }

                function H(t) {
                    return "round_robin" === t.type
                }

                function V(t, e) {
                    return "double_elimination" === t && 1 === e
                }

                function q(t, e) {
                    return "double_elimination" === t && 2 === e
                }

                function $(t, e) {
                    return "single_elimination" === t && 2 === e || "double_elimination" === t && 3 === e
                }
                e.splitByParity = function(t) {
                    return {
                        even: t.filter(((t, e) => e % 2 == 0)),
                        odd: t.filter(((t, e) => e % 2 == 1))
                    }
                }, e.makeRoundRobinMatches = function(t, e = "simple") {
                    const n = i(t);
                    if ("simple" === e) return n;
                    const r = n.map((t => [...t].reverse())).reverse();
                    return [...n, ...r]
                }, e.makeRoundRobinDistribution = i, e.assertRoundRobin = function(t, e) {
                    const n = t.length,
                        r = Math.floor(n / 2),
                        o = n % 2 == 0 ? n - 1 : n;
                    if (e.length !== o) throw Error("Round count is wrong");
                    if (!e.every((t => t.length === r))) throw Error("Not every round has the good number of matches");
                    const i = Object.fromEntries(t.map((t => [t, new Set])));
                    for (const t of e) {
                        const e = new Set;
                        for (const n of t) {
                            if (2 !== n.length) throw Error("One match is not a pair");
                            if (e.has(n[0])) throw Error("This team is already playing");
                            if (e.add(n[0]), e.has(n[1])) throw Error("This team is already playing");
                            if (e.add(n[1]), i[n[0]].has(n[1])) throw Error("The team has already matched this team");
                            if (i[n[0]].add(n[1]), i[n[1]].has(n[0])) throw Error("The team has already matched this team");
                            i[n[1]].add(n[0])
                        }
                    }
                }, e.makeGroups = function(t, e) {
                    const n = Math.ceil(t.length / e),
                        r = [];
                    for (let e = 0; e < t.length; e++) e % n == 0 && r.push([]), r[r.length - 1].push(t[e]);
                    return r
                }, e.balanceByes = function(t, e) {
                    if (t = t.filter((t => null !== t)), e = e || W(t.length), t.length < e / 2) return u(t.map((t => [t, null])).flat(), e, null);
                    const n = t.length,
                        r = e - n,
                        o = t.slice(0, n - r).filter(((t, e) => e % 2 == 0)).map(((e, n) => [t[2 * n], t[2 * n + 1]])),
                        i = t.slice(n - r, n).map((t => [t, null]));
                    return u([...o.flat(), ...i.flat()], e, null)
                }, e.normalizeIds = function(t) {
                    const e = {
                        participant: a(t.participant),
                        stage: a(t.stage),
                        group: a(t.group),
                        round: a(t.round),
                        match: a(t.match),
                        match_game: a(t.match_game)
                    };
                    return {
                        participant: t.participant.map((t => ({
                            ...t,
                            id: e.participant[t.id]
                        }))),
                        stage: t.stage.map((t => ({
                            ...t,
                            id: e.stage[t.id]
                        }))),
                        group: t.group.map((t => ({
                            ...t,
                            id: e.group[t.id],
                            stage_id: e.stage[t.stage_id]
                        }))),
                        round: t.round.map((t => ({
                            ...t,
                            id: e.round[t.id],
                            stage_id: e.stage[t.stage_id],
                            group_id: e.group[t.group_id]
                        }))),
                        match: t.match.map((t => ({
                            ...t,
                            id: e.match[t.id],
                            stage_id: e.stage[t.stage_id],
                            group_id: e.group[t.group_id],
                            round_id: e.round[t.round_id],
                            opponent1: s(t.opponent1, e.participant),
                            opponent2: s(t.opponent2, e.participant)
                        }))),
                        match_game: t.match_game.map((t => ({
                            ...t,
                            id: e.match_game[t.id],
                            stage_id: e.stage[t.stage_id],
                            parent_id: e.match[t.parent_id],
                            opponent1: s(t.opponent1, e.participant),
                            opponent2: s(t.opponent2, e.participant)
                        })))
                    }
                }, e.makeNormalizedIdMapping = a, e.normalizeParticipant = s, e.setArraySize = u, e.makePairs = function(t) {
                    return t.map(((e, n) => n % 2 == 0 ? [t[n], t[n + 1]] : [])).filter((t => 2 === t.length))
                }, e.ensureEvenSized = function(t) {
                    if (t.length % 2 == 1) throw Error("Array size must be even.")
                }, e.ensureNoDuplicates = function(t) {
                    const e = j(t);
                    if ([...new Set(e)].length < e.length) throw new Error("The seeding has a duplicate participant.")
                }, e.ensureEquallySized = function(t, e) {
                    if (t.length !== e.length) throw Error("Arrays' size must be equal.")
                }, e.fixSeeding = function(t, e) {
                    if (t.length > e) throw Error("The seeding has more participants than the size of the stage.");
                    return t.length < e ? u(t, e, null) : t
                }, e.ensureValidSize = function(t) {
                    if (0 === t) throw Error("Impossible to create an empty stage. If you want an empty seeding, just set the size of the stage.");
                    if (t < 2) throw Error("Impossible to create a stage with less than 2 participants.");
                    if (!Number.isInteger(Math.log2(t))) throw Error("The library only supports a participant count which is a power of two.")
                }, e.ensureNotTied = function(t) {
                    if (t[0] === t[1]) throw Error(`${t[0]} and ${t[1]} are tied. It cannot be.`)
                }, e.convertTBDtoBYE = function(t) {
                    return null === t || null === (null == t ? void 0 : t.id) ? null : t
                }, e.toResult = function(t) {
                    return t && {
                        id: t.id
                    }
                }, e.toResultWithPosition = function(t) {
                    return t && {
                        id: t.id,
                        position: t.position
                    }
                }, e.getWinner = function(t) {
                    const e = d(t);
                    return e ? t[e] : null
                }, e.getLoser = c, e.byeWinner = l, e.byeWinnerToGrandFinal = function(t) {
                    const e = l(t);
                    return e && (e.position = 1), e
                }, e.byeLoser = function(t, e) {
                    return null === t[0] || null === t[1] ? null : {
                        id: null,
                        position: e + 1
                    }
                }, e.getMatchResult = d, e.findPosition = function(t, e) {
                    var n, r;
                    for (const o of t) {
                        if ((null === (n = o.opponent1) || void 0 === n ? void 0 : n.position) === e) return o.opponent1;
                        if ((null === (r = o.opponent2) || void 0 === r ? void 0 : r.position) === e) return o.opponent2
                    }
                    return null
                }, e.getSide = p, e.getOtherSide = h, e.isMatchStarted = g, e.isMatchCompleted = f, e.isMatchForfeitCompleted = m, e.isMatchResultCompleted = v, e.isMatchDrawCompleted = y, e.isMatchWinCompleted = b, e.isMatchByeCompleted = w, e.isMatchUpdateLocked = function(t) {
                    return t.status === r.Status.Locked || t.status === r.Status.Waiting || t.status === r.Status.Archived
                }, e.isMatchParticipantLocked = function(t) {
                    return t.status >= r.Status.Running
                }, e.hasBye = k, e.getMatchStatus = S, e.setMatchResults = function(t, e, n) {
                    const r = f(e),
                        o = f(t);
                    R(t, e);
                    const i = _(t, e);
                    return r && o ? (C(t, e, n), {
                        statusChanged: !1,
                        resultChanged: !0
                    }) : r && !o ? (C(t, e, n), {
                        statusChanged: !0,
                        resultChanged: !0
                    }) : !r && o ? (O(t), {
                        statusChanged: !0,
                        resultChanged: !0
                    }) : {
                        statusChanged: i,
                        resultChanged: !1
                    }
                }, e.resetMatchResults = O, e.getOpponentId = M, e.getOriginPosition = function(t, e) {
                    var n;
                    const r = null === (n = t[e]) || void 0 === n ? void 0 : n.position;
                    if (void 0 === r) throw Error("Position is undefined.");
                    return r
                }, e.getLosers = function(t, e) {
                    const n = [];
                    let r = null,
                        o = -1;
                    for (const i of e) {
                        i.round_id !== r && (r = i.round_id, o++, n[o] = []);
                        const e = c(i);
                        null !== e && n[o].push(x(t, e))
                    }
                    return n
                }, e.makeFinalStandings = function(t) {
                    const e = [];
                    let n = 1;
                    for (const r of t) {
                        for (const t of r) e.push({
                            id: t.id,
                            name: t.name,
                            rank: n
                        });
                        n++
                    }
                    return e
                }, e.getGrandFinalDecisiveMatch = function(t, e) {
                    if ("simple" === t) return e[0];
                    if ("double" === t) return "opponent2" === d(e[0]) ? e[1] : e[0];
                    throw Error("The Grand Final is disabled.")
                }, e.findParticipant = x, e.getNextSide = function(t, e, n, r) {
                    return "loser_bracket" === r && e % 2 == 1 || "loser_bracket" === r && e === n ? "opponent2" : p(t)
                }, e.getNextSideLoserBracket = function(t, e, n) {
                    var r;
                    return n > 1 || (null === (r = e.opponent1) || void 0 === r ? void 0 : r.position) === t ? "opponent1" : "opponent2"
                }, e.setNextOpponent = function(t, e, n, r) {
                    var o;
                    t[e] = n[r] && {
                        id: M(n, r),
                        position: null === (o = t[e]) || void 0 === o ? void 0 : o.position
                    }, t.status = S(t)
                }, e.resetNextOpponent = function(t, e) {
                    var n;
                    t[e] = t[e] && {
                        id: null,
                        position: null === (n = t[e]) || void 0 === n ? void 0 : n.position
                    }, t.status = r.Status.Locked
                }, e.handleOpponentsInversion = R, e.invertOpponents = E, e.setScores = _, e.setCompleted = C, e.setResults = P, e.setForfeits = L, e.isSeedingWithIds = function(t) {
                    return t.some((t => "number" == typeof t))
                }, e.extractParticipantsFromSeeding = function(t, e) {
                    return e.filter((t => null !== t)).map((e => ({
                        tournament_id: t,
                        name: e
                    })))
                }, e.mapParticipantsNamesToDatabase = function(t, e, n) {
                    return N("name", t, e, n)
                }, e.mapParticipantsIdsToDatabase = function(t, e, n) {
                    return N("id", t, e, n)
                }, e.mapParticipantsToDatabase = N, e.convertMatchesToSeeding = function(t) {
                    return B([].concat(...t.map((t => [t.opponent1, t.opponent2]))))
                }, e.convertSlotsToSeeding = function(t) {
                    return t.map((t => null === t || null === t.id ? null : t.id))
                }, e.sortSeeding = B, e.getNonNull = j, e.uniqueBy = function(t, e) {
                    const n = new Set;
                    return t.filter((t => {
                        const r = e(t);
                        return !r || !n.has(r) && (n.add(r), !0)
                    }))
                }, e.transitionToMajor = function(t) {
                    const e = t.length / 2,
                        n = [];
                    for (let r = 0; r < e; r++) {
                        const e = 2 * r;
                        n.push([l(t[e]), l(t[e + 1])])
                    }
                    return n
                }, e.transitionToMinor = function(t, e, n) {
                    const r = n ? o.ordering[n](e) : e,
                        i = t.length,
                        a = [];
                    for (let e = 0; e < i; e++) {
                        const n = e;
                        a.push([r[n], l(t[n])])
                    }
                    return a
                }, e.setParentMatchCompleted = function(t, e, n) {
                    var r, o;
                    if (void 0 === (null === (r = t.opponent1) || void 0 === r ? void 0 : r.score) || void 0 === (null === (o = t.opponent2) || void 0 === o ? void 0 : o.score)) throw Error("Either opponent1, opponent2 or their scores are falsy.");
                    const i = z(e);
                    if (t.opponent1.score >= i) t.opponent1.result = "win";
                    else if (t.opponent2.score >= i) t.opponent2.result = "win";
                    else if (t.opponent1.score === t.opponent2.score && t.opponent1.score + t.opponent2.score > e - 1) {
                        if (n) return t.opponent1.result = "draw", void(t.opponent2.result = "draw");
                        throw Error("Match games result in a tie for the parent match.")
                    }
                }, e.getParentMatchResults = function(t, e) {
                    return {
                        opponent1: {
                            id: t.opponent1 && t.opponent1.id,
                            score: e.opponent1
                        },
                        opponent2: {
                            id: t.opponent2 && t.opponent2.id,
                            score: e.opponent2
                        }
                    }
                }, e.getUpdatedMatchResults = function(t, e, n) {
                    return {
                        ...e,
                        ...t,
                        ...n ? {
                            opponent1: null === t.opponent1 ? null : {
                                ...e.opponent1,
                                ...t.opponent1
                            },
                            opponent2: null === t.opponent2 ? null : {
                                ...e.opponent2,
                                ...t.opponent2
                            }
                        } : {
                            opponent1: null === t.opponent1 ? {
                                id: null
                            } : {
                                ...e.opponent1,
                                ...t.opponent1
                            },
                            opponent2: null === t.opponent2 ? {
                                id: null
                            } : {
                                ...e.opponent2,
                                ...t.opponent2
                            }
                        }
                    }
                }, e.getChildGamesResults = function(t) {
                    const e = {
                        opponent1: 0,
                        opponent2: 0
                    };
                    for (const n of t) {
                        const t = d(n);
                        "opponent1" === t ? e.opponent1++ : "opponent2" === t && e.opponent2++
                    }
                    return e
                }, e.getSeeds = function(t, e, n, r) {
                    const o = F(t, e, n, r);
                    return Array.from(Array(o), ((t, e) => e + 1))
                }, e.getSeedCount = F, e.ensureOrderingSupported = D, e.isOrderingSupportedUpperBracket = T, e.isOrderingSupportedLoserBracket = A, e.getUpperBracketRoundCount = I, e.getRoundPairCount = U, e.isDoubleEliminationNecessary = function(t) {
                    return t > 2
                }, e.findLoserMatchNumber = function(t, e, n, r) {
                    const i = G(t, e),
                        a = Array.from(Array(i), ((t, e) => e + 1));
                    return (r ? o.ordering[r](a) : a).indexOf(n) + 1
                }, e.getLoserRoundMatchCount = G, e.getLoserOrdering = function(t, e) {
                    return t[1 + Math.floor(e / 2)]
                }, e.getLowerBracketRoundCount = function(t) {
                    return 2 * U(t)
                }, e.getDiagonalMatchNumber = function(t) {
                    return Math.ceil(t / 2)
                }, e.getNearestPowerOfTwo = W, e.minScoreToWinBestOfX = z, e.isRoundRobin = H, e.ensureNotRoundRobin = function(t) {
                    if (H(t)) throw Error("Impossible to update ordering in a round-robin stage.")
                }, e.isWinnerBracket = V, e.isLoserBracket = q, e.isFinalGroup = $, e.getMatchLocation = function(t, e) {
                    return V(t, e) ? "winner_bracket" : q(t, e) ? "loser_bracket" : $(t, e) ? "final_group" : "single_bracket"
                }
            },
            37: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.helpers = e.BracketsManager = void 0;
                const r = n(76);
                Object.defineProperty(e, "BracketsManager", {
                    enumerable: !0,
                    get: function() {
                        return r.BracketsManager
                    }
                });
                const o = n(487);
                e.helpers = {
                    getWinner: o.getWinner,
                    getLoser: o.getLoser,
                    getMatchResult: o.getMatchResult,
                    isMatchStarted: o.isMatchStarted,
                    isMatchCompleted: o.isMatchCompleted,
                    isMatchForfeitCompleted: o.isMatchForfeitCompleted,
                    isMatchResultCompleted: o.isMatchResultCompleted,
                    isMatchDrawCompleted: o.isMatchDrawCompleted,
                    isMatchWinCompleted: o.isMatchWinCompleted,
                    isMatchByeCompleted: o.isMatchByeCompleted,
                    isMatchUpdateLocked: o.isMatchUpdateLocked,
                    isMatchParticipantLocked: o.isMatchParticipantLocked,
                    hasBye: o.hasBye,
                    getUpperBracketRoundCount: o.getUpperBracketRoundCount,
                    getRoundPairCount: o.getRoundPairCount,
                    getLoserRoundMatchCount: o.getLoserRoundMatchCount,
                    getLowerBracketRoundCount: o.getLowerBracketRoundCount,
                    getNearestPowerOfTwo: o.getNearestPowerOfTwo,
                    minScoreToWinBestOfX: o.minScoreToWinBestOfX,
                    isRoundRobin: o.isRoundRobin,
                    isWinnerBracket: o.isWinnerBracket,
                    isLoserBracket: o.isLoserBracket,
                    isFinalGroup: o.isFinalGroup,
                    getMatchLocation: o.getMatchLocation
                }
            },
            76: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BracketsManager = void 0;
                const r = n(765),
                    o = n(576),
                    i = n(11),
                    a = n(378),
                    s = n(63),
                    u = n(369),
                    c = n(487);
                e.BracketsManager = class {
                    constructor(t) {
                        const e = t;
                        e.selectFirst = async (t, e) => {
                            const n = await this.storage.select(t, e);
                            return n && 0 !== n.length ? n[0] : null
                        }, e.selectLast = async (t, e) => {
                            const n = await this.storage.select(t, e);
                            return n && 0 !== n.length ? n[n.length - 1] : null
                        }, this.storage = e, this.get = new o.Get(this.storage), this.update = new i.Update(this.storage), this.delete = new a.Delete(this.storage), this.find = new s.Find(this.storage), this.reset = new u.Reset(this.storage)
                    }
                    async create(t) {
                        await r.create.call(this, t)
                    }
                    async import(t, e = !1) {
                        if (e && (t = c.normalizeIds(t)), !await this.storage.delete("participant")) throw Error("Could not empty the participant table.");
                        if (!await this.storage.insert("participant", t.participant)) throw Error("Could not import participants.");
                        if (!await this.storage.delete("stage")) throw Error("Could not empty the stage table.");
                        if (!await this.storage.insert("stage", t.stage)) throw Error("Could not import stages.");
                        if (!await this.storage.delete("group")) throw Error("Could not empty the group table.");
                        if (!await this.storage.insert("group", t.group)) throw Error("Could not import groups.");
                        if (!await this.storage.delete("round")) throw Error("Could not empty the round table.");
                        if (!await this.storage.insert("round", t.round)) throw Error("Could not import rounds.");
                        if (!await this.storage.delete("match")) throw Error("Could not empty the match table.");
                        if (!await this.storage.insert("match", t.match)) throw Error("Could not import matches.");
                        if (!await this.storage.delete("match_game")) throw Error("Could not empty the match_game table.");
                        if (!await this.storage.insert("match_game", t.match_game)) throw Error("Could not import match games.")
                    }
                    async export () {
                        const t = await this.storage.select("participant");
                        if (!t) throw Error("Error getting participants.");
                        const e = await this.storage.select("stage");
                        if (!e) throw Error("Error getting stages.");
                        const n = await this.storage.select("group");
                        if (!n) throw Error("Error getting groups.");
                        const r = await this.storage.select("round");
                        if (!r) throw Error("Error getting rounds.");
                        const o = await this.storage.select("match");
                        if (!o) throw Error("Error getting matches.");
                        return {
                            participant: t,
                            stage: e,
                            group: n,
                            round: r,
                            match: o,
                            match_game: await this.get.matchGames(o)
                        }
                    }
                }
            },
            644: function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.defaultMinorOrdering = e.ordering = void 0, e.ordering = {
                    natural: t => [...t],
                    reverse: t => [...t].reverse(),
                    half_shift: t => [...t.slice(t.length / 2), ...t.slice(0, t.length / 2)],
                    reverse_half_shift: t => [...t.slice(0, t.length / 2).reverse(), ...t.slice(t.length / 2).reverse()],
                    pair_flip: t => {
                        const e = [];
                        for (let n = 0; n < t.length; n += 2) e.push(t[n + 1], t[n]);
                        return e
                    },
                    inner_outer: t => {
                        if (2 === t.length) return t;
                        const e = t.length / 4,
                            n = [t.slice(e, 2 * e), t.slice(2 * e, 3 * e)],
                            r = [t.slice(0, e), t.slice(3 * e, 4 * e)],
                            o = {
                                inner: t => [t[0].pop(), t[1].shift()],
                                outer: t => [t[0].shift(), t[1].pop()]
                            },
                            i = [];

                        function a(t, e) {
                            t[0].length > 0 && t[1].length > 0 && i.push(...o[e](t))
                        }
                        for (let t = 0; t < e / 2; t++) a(r, "outer"), a(n, "inner"), a(r, "inner"), a(n, "outer");
                        return i
                    },
                    "groups.effort_balanced": (t, e) => {
                        const n = [];
                        let r = 0,
                            o = 0;
                        for (; n.length < t.length;) n.push(t[r]), r += e, r >= t.length && (r = ++o);
                        return n
                    },
                    "groups.seed_optimized": (t, e) => {
                        const n = Array.from(Array(e), (t => []));
                        for (let r = 0; r < t.length / e; r++)
                            if (r % 2 == 0)
                                for (let o = 0; o < e; o++) n[o].push(t[r * e + o]);
                            else
                                for (let o = 0; o < e; o++) n[e - o - 1].push(t[r * e + o]);
                        return n.flat()
                    },
                    "groups.bracket_optimized": () => {
                        throw Error("Not implemented.")
                    }
                }, e.defaultMinorOrdering = {
                    4: ["natural", "reverse"],
                    8: ["natural", "reverse", "natural"],
                    16: ["natural", "reverse_half_shift", "reverse", "natural"],
                    32: ["natural", "reverse", "half_shift", "natural", "natural"],
                    64: ["natural", "reverse", "half_shift", "reverse", "natural", "natural"],
                    128: ["natural", "reverse", "half_shift", "pair_flip", "pair_flip", "pair_flip", "natural"]
                }
            },
            369: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Reset = void 0;
                const r = n(21),
                    o = n(517),
                    i = n(487);
                class a extends o.BaseUpdater {
                    async matchResults(t) {
                        const e = await this.storage.select("match", t);
                        if (!e) throw Error("Match not found.");
                        if (!i.isMatchForfeitCompleted(e) && e.child_count > 0) throw Error("The parent match is controlled by its child games and its result cannot be reset.");
                        const n = await this.storage.select("stage", e.stage_id);
                        if (!n) throw Error("Stage not found.");
                        const o = await this.storage.select("group", e.group_id);
                        if (!o) throw Error("Group not found.");
                        const {
                            roundNumber: a,
                            roundCount: s
                        } = await this.getRoundPositionalInfo(e.round_id), u = i.getMatchLocation(n.type, o.number);
                        if ((await this.getNextMatches(e, u, n, a, s)).some((t => t && t.status >= r.Status.Running && !i.isMatchByeCompleted(t)))) throw Error("The match is locked.");
                        i.resetMatchResults(e), await this.applyMatchUpdate(e), i.isRoundRobin(n) || await this.updateRelatedMatches(e, !0, !0)
                    }
                    async matchGameResults(t) {
                        const e = await this.storage.select("match_game", t);
                        if (!e) throw Error("Match game not found.");
                        const n = await this.storage.select("stage", e.stage_id);
                        if (!n) throw Error("Stage not found.");
                        const r = i.isRoundRobin(n);
                        if (i.resetMatchResults(e), !await this.storage.update("match_game", e.id, e)) throw Error("Could not update the match game.");
                        await this.updateParentMatch(e.parent_id, r)
                    }
                    async seeding(t) {
                        await this.updateSeeding(t, null)
                    }
                }
                e.Reset = a
            },
            11: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Update = void 0;
                const r = n(21),
                    o = n(644),
                    i = n(517),
                    a = n(487);
                class s extends i.BaseUpdater {
                    async match(t) {
                        if (void 0 === t.id) throw Error("No match id given.");
                        const e = await this.storage.select("match", t.id);
                        if (!e) throw Error("Match not found.");
                        await this.updateMatch(e, t)
                    }
                    async matchGame(t) {
                        const e = await this.findMatchGame(t);
                        await this.updateMatchGame(e, t)
                    }
                    async ordering(t, e) {
                        const n = await this.storage.select("stage", t);
                        if (!n) throw Error("Stage not found.");
                        a.ensureNotRoundRobin(n);
                        const r = await this.getOrderedRounds(n);
                        if (e.length !== r.length) throw Error("The count of seed orderings is incorrect.");
                        for (let t = 0; t < r.length; t++) await this.updateRoundOrdering(r[t], e[t])
                    }
                    async roundOrdering(t, e) {
                        const n = await this.storage.select("round", t);
                        if (!n) throw Error("This round does not exist.");
                        const r = await this.storage.select("stage", n.stage_id);
                        if (!r) throw Error("Stage not found.");
                        a.ensureNotRoundRobin(r), await this.updateRoundOrdering(n, e)
                    }
                    async matchChildCount(t, e, n) {
                        switch (t) {
                            case "stage":
                                await this.updateStageMatchChildCount(e, n);
                                break;
                            case "group":
                                await this.updateGroupMatchChildCount(e, n);
                                break;
                            case "round":
                                await this.updateRoundMatchChildCount(e, n);
                                break;
                            case "match":
                                const t = await this.storage.select("match", e);
                                if (!t) throw Error("Match not found.");
                                await this.adjustMatchChildGames(t, n);
                                break;
                            default:
                                throw Error("Unknown child count level.")
                        }
                    }
                    async seeding(t, e) {
                        await this.updateSeeding(t, e)
                    }
                    async confirmSeeding(t) {
                        await this.confirmCurrentSeeding(t)
                    }
                    async updateRoundOrdering(t, e) {
                        const n = await this.storage.select("match", {
                            round_id: t.id
                        });
                        if (!n) throw Error("This round has no match.");
                        if (n.some((t => t.status > r.Status.Ready))) throw Error("At least one match has started or is completed.");
                        const i = await this.storage.select("stage", t.stage_id);
                        if (!i) throw Error("Stage not found.");
                        if (void 0 === i.settings.size) throw Error("Undefined stage size.");
                        const s = await this.storage.select("group", t.group_id);
                        if (!s) throw Error("Group not found.");
                        const u = a.isLoserBracket(i.type, s.number),
                            c = a.getLowerBracketRoundCount(i.settings.size),
                            l = a.getSeeds(u, t.number, c, n.length),
                            d = o.ordering[e](l);
                        await this.applyRoundOrdering(t.number, n, d)
                    }
                    async updateStageMatchChildCount(t, e) {
                        if (!await this.storage.update("match", {
                                stage_id: t
                            }, {
                                child_count: e
                            })) throw Error("Could not update the match.");
                        const n = await this.storage.select("match", {
                            stage_id: t
                        });
                        if (!n) throw Error("This stage has no match.");
                        for (const t of n) await this.adjustMatchChildGames(t, e)
                    }
                    async updateGroupMatchChildCount(t, e) {
                        if (!await this.storage.update("match", {
                                group_id: t
                            }, {
                                child_count: e
                            })) throw Error("Could not update the match.");
                        const n = await this.storage.select("match", {
                            group_id: t
                        });
                        if (!n) throw Error("This group has no match.");
                        for (const t of n) await this.adjustMatchChildGames(t, e)
                    }
                    async updateRoundMatchChildCount(t, e) {
                        if (!await this.storage.update("match", {
                                round_id: t
                            }, {
                                child_count: e
                            })) throw Error("Could not update the match.");
                        const n = await this.storage.select("match", {
                            round_id: t
                        });
                        if (!n) throw Error("This round has no match.");
                        for (const t of n) await this.adjustMatchChildGames(t, e)
                    }
                    async applyRoundOrdering(t, e, n) {
                        for (const r of e) {
                            const o = {
                                ...r
                            };
                            if (o.opponent1 = a.findPosition(e, n.shift()), 1 === t && (o.opponent2 = a.findPosition(e, n.shift())), !await this.storage.update("match", o.id, o)) throw Error("Could not update the match.")
                        }
                    }
                    async adjustMatchChildGames(t, e) {
                        const n = await this.storage.select("match_game", {
                            parent_id: t.id
                        });
                        let r = n ? n.length : 0;
                        for (; r < e;) {
                            if (-1 === await this.storage.insert("match_game", {
                                    number: r + 1,
                                    stage_id: t.stage_id,
                                    parent_id: t.id,
                                    status: t.status,
                                    opponent1: {
                                        id: null
                                    },
                                    opponent2: {
                                        id: null
                                    }
                                })) throw Error("Could not adjust the match games when inserting.");
                            r++
                        }
                        for (; r > e;) {
                            if (!await this.storage.delete("match_game", {
                                    parent_id: t.id,
                                    number: r
                                })) throw Error("Could not adjust the match games when deleting.");
                            r--
                        }
                        if (!await this.storage.update("match", t.id, {
                                ...t,
                                child_count: e
                            })) throw Error("Could not update the match.")
                    }
                }
                e.Update = s
            },
            38: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.InMemoryDatabase = void 0;
                const r = n(188)();
                e.InMemoryDatabase = class {
                    data = {
                        participant: [],
                        stage: [],
                        group: [],
                        round: [],
                        match: [],
                        match_game: []
                    };
                    setData(t) {
                        this.data = t
                    }
                    makeFilter(t) {
                        return e => {
                            let n = !0;
                            for (const r of Object.keys(t)) n = n && e[r] === t[r];
                            return n
                        }
                    }
                    reset() {
                        this.data = {
                            participant: [],
                            stage: [],
                            group: [],
                            round: [],
                            match: [],
                            match_game: []
                        }
                    }
                    insert(t, e) {
                        let n = this.data[t].length > 0 ? Math.max(...this.data[t].map((t => t.id))) + 1 : 0;
                        if (!Array.isArray(e)) {
                            try {
                                this.data[t].push({
                                    id: n,
                                    ...e
                                })
                            } catch (t) {
                                return new Promise((t => {
                                    t(-1)
                                }))
                            }
                            return new Promise((t => {
                                t(n)
                            }))
                        }
                        try {
                            e.map((e => {
                                this.data[t].push({
                                    id: n++,
                                    ...e
                                })
                            }))
                        } catch (t) {
                            return new Promise((t => {
                                t(!1)
                            }))
                        }
                        return new Promise((t => {
                            t(!0)
                        }))
                    }
                    select(t, e) {
                        try {
                            return new Promise(void 0 === e ? e => {
                                e(this.data[t].map(r))
                            } : "number" == typeof e ? n => {
                                n(r(this.data[t].find((t => t.id === e))))
                            } : n => {
                                n(this.data[t].filter(this.makeFilter(e)).map(r))
                            })
                        } catch (t) {
                            return new Promise((t => {
                                t(null)
                            }))
                        }
                    }
                    update(t, e, n) {
                        if ("number" == typeof e) try {
                            return this.data[t][e] = n, new Promise((t => {
                                t(!0)
                            }))
                        } catch (t) {
                            return new Promise((t => {
                                t(!1)
                            }))
                        }
                        const r = this.data[t].filter(this.makeFilter(e));
                        return r ? (r.forEach((e => {
                            const r = this.data[t][e.id];
                            for (const t in n) r[t] && "object" == typeof r[t] && "object" == typeof n[t] ? Object.assign(r[t], n[t]) : r[t] = n[t];
                            this.data[t][e.id] = r
                        })), new Promise((t => {
                            t(!0)
                        }))) : new Promise((t => {
                            t(!1)
                        }))
                    }
                    delete(t, e) {
                        const n = this.data[t];
                        if (!n) return new Promise((t => {
                            t(!1)
                        }));
                        if (!e) return this.data[t] = [], new Promise((t => {
                            t(!0)
                        }));
                        const r = this.makeFilter(e);
                        return this.data[t] = n.filter((t => !r(t))), new Promise((t => {
                            t(!0)
                        }))
                    }
                }
            },
            21: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Status = void 0;
                const r = n(854);
                Object.defineProperty(e, "Status", {
                    enumerable: !0,
                    get: function() {
                        return r.Status
                    }
                })
            },
            854: function(t, e) {
                "use strict";
                var n;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Status = void 0, (n = e.Status || (e.Status = {}))[n.Locked = 0] = "Locked", n[n.Waiting = 1] = "Waiting", n[n.Ready = 2] = "Ready", n[n.Running = 3] = "Running", n[n.Completed = 4] = "Completed", n[n.Archived = 5] = "Archived"
            },
            578: function(t, e, n) {
                "use strict";

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                n.r(e), n.d(e, {
                    default: function() {
                        return O
                    }
                });
                var i = [],
                    a = i.forEach,
                    s = i.slice;

                function u(t) {
                    return a.call(s.call(arguments, 1), (function(e) {
                        if (e)
                            for (var n in e) void 0 === t[n] && (t[n] = e[n])
                    })), t
                }
                var c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                    l = function(t, e, n) {
                        var r = n || {};
                        r.path = r.path || "/";
                        var o = t + "=" + encodeURIComponent(e);
                        if (r.maxAge > 0) {
                            var i = r.maxAge - 0;
                            if (isNaN(i)) throw new Error("maxAge should be a Number");
                            o += "; Max-Age=" + Math.floor(i)
                        }
                        if (r.domain) {
                            if (!c.test(r.domain)) throw new TypeError("option domain is invalid");
                            o += "; Domain=" + r.domain
                        }
                        if (r.path) {
                            if (!c.test(r.path)) throw new TypeError("option path is invalid");
                            o += "; Path=" + r.path
                        }
                        if (r.expires) {
                            if ("function" != typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
                            o += "; Expires=" + r.expires.toUTCString()
                        }
                        if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite) switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                            case !0:
                                o += "; SameSite=Strict";
                                break;
                            case "lax":
                                o += "; SameSite=Lax";
                                break;
                            case "strict":
                                o += "; SameSite=Strict";
                                break;
                            case "none":
                                o += "; SameSite=None";
                                break;
                            default:
                                throw new TypeError("option sameSite is invalid")
                        }
                        return o
                    },
                    d = {
                        name: "cookie",
                        lookup: function(t) {
                            var e;
                            if (t.lookupCookie && "undefined" != typeof document) {
                                var n = function(t) {
                                    for (var e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                                        for (var o = n[r];
                                            " " === o.charAt(0);) o = o.substring(1, o.length);
                                        if (0 === o.indexOf(e)) return o.substring(e.length, o.length)
                                    }
                                    return null
                                }(t.lookupCookie);
                                n && (e = n)
                            }
                            return e
                        },
                        cacheUserLanguage: function(t, e) {
                            e.lookupCookie && "undefined" != typeof document && function(t, e, n, r) {
                                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                    path: "/",
                                    sameSite: "strict"
                                };
                                n && (o.expires = new Date, o.expires.setTime(o.expires.getTime() + 60 * n * 1e3)), r && (o.domain = r), document.cookie = l(t, encodeURIComponent(e), o)
                            }(e.lookupCookie, t, e.cookieMinutes, e.cookieDomain, e.cookieOptions)
                        }
                    },
                    p = {
                        name: "querystring",
                        lookup: function(t) {
                            var e;
                            if ("undefined" != typeof window) {
                                var n = window.location.search;
                                !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
                                for (var r = n.substring(1).split("&"), o = 0; o < r.length; o++) {
                                    var i = r[o].indexOf("=");
                                    i > 0 && r[o].substring(0, i) === t.lookupQuerystring && (e = r[o].substring(i + 1))
                                }
                            }
                            return e
                        }
                    },
                    h = null,
                    g = function() {
                        if (null !== h) return h;
                        try {
                            h = "undefined" !== window && null !== window.localStorage;
                            var t = "i18next.translate.boo";
                            window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t)
                        } catch (t) {
                            h = !1
                        }
                        return h
                    },
                    f = {
                        name: "localStorage",
                        lookup: function(t) {
                            var e;
                            if (t.lookupLocalStorage && g()) {
                                var n = window.localStorage.getItem(t.lookupLocalStorage);
                                n && (e = n)
                            }
                            return e
                        },
                        cacheUserLanguage: function(t, e) {
                            e.lookupLocalStorage && g() && window.localStorage.setItem(e.lookupLocalStorage, t)
                        }
                    },
                    m = null,
                    v = function() {
                        if (null !== m) return m;
                        try {
                            m = "undefined" !== window && null !== window.sessionStorage;
                            var t = "i18next.translate.boo";
                            window.sessionStorage.setItem(t, "foo"), window.sessionStorage.removeItem(t)
                        } catch (t) {
                            m = !1
                        }
                        return m
                    },
                    y = {
                        name: "sessionStorage",
                        lookup: function(t) {
                            var e;
                            if (t.lookupSessionStorage && v()) {
                                var n = window.sessionStorage.getItem(t.lookupSessionStorage);
                                n && (e = n)
                            }
                            return e
                        },
                        cacheUserLanguage: function(t, e) {
                            e.lookupSessionStorage && v() && window.sessionStorage.setItem(e.lookupSessionStorage, t)
                        }
                    },
                    b = {
                        name: "navigator",
                        lookup: function(t) {
                            var e = [];
                            if ("undefined" != typeof navigator) {
                                if (navigator.languages)
                                    for (var n = 0; n < navigator.languages.length; n++) e.push(navigator.languages[n]);
                                navigator.userLanguage && e.push(navigator.userLanguage), navigator.language && e.push(navigator.language)
                            }
                            return e.length > 0 ? e : void 0
                        }
                    },
                    w = {
                        name: "htmlTag",
                        lookup: function(t) {
                            var e, n = t.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                            return n && "function" == typeof n.getAttribute && (e = n.getAttribute("lang")), e
                        }
                    },
                    k = {
                        name: "path",
                        lookup: function(t) {
                            var e;
                            if ("undefined" != typeof window) {
                                var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                                if (n instanceof Array)
                                    if ("number" == typeof t.lookupFromPathIndex) {
                                        if ("string" != typeof n[t.lookupFromPathIndex]) return;
                                        e = n[t.lookupFromPathIndex].replace("/", "")
                                    } else e = n[0].replace("/", "")
                            }
                            return e
                        }
                    },
                    S = {
                        name: "subdomain",
                        lookup: function(t) {
                            var e;
                            if ("undefined" != typeof window) {
                                var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                                n instanceof Array && (e = "number" == typeof t.lookupFromSubdomainIndex ? n[t.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
                            }
                            return e
                        }
                    },
                    O = function() {
                        function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            r(this, t), this.type = "languageDetector", this.detectors = {}, this.init(e, n)
                        }
                        var e, n;
                        return e = t, n = [{
                            key: "init",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                this.services = t, this.options = u(e, this.options || {}, {
                                    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                                    lookupQuerystring: "lng",
                                    lookupCookie: "i18next",
                                    lookupLocalStorage: "i18nextLng",
                                    lookupSessionStorage: "i18nextLng",
                                    caches: ["localStorage"],
                                    excludeCacheFor: ["cimode"]
                                }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(d), this.addDetector(p), this.addDetector(f), this.addDetector(y), this.addDetector(b), this.addDetector(w), this.addDetector(k), this.addDetector(S)
                            }
                        }, {
                            key: "addDetector",
                            value: function(t) {
                                this.detectors[t.name] = t
                            }
                        }, {
                            key: "detect",
                            value: function(t) {
                                var e = this;
                                t || (t = this.options.order);
                                var n = [];
                                return t.forEach((function(t) {
                                    if (e.detectors[t]) {
                                        var r = e.detectors[t].lookup(e.options);
                                        r && "string" == typeof r && (r = [r]), r && (n = n.concat(r))
                                    }
                                })), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                            }
                        }, {
                            key: "cacheUserLanguage",
                            value: function(t, e) {
                                var n = this;
                                e || (e = this.options.caches), e && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || e.forEach((function(e) {
                                    n.detectors[e] && n.detectors[e].cacheUserLanguage(t, n.options)
                                })))
                            }
                        }], n && o(e.prototype, n), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t
                    }();
                O.type = "languageDetector"
            },
            73: function(t, e, n) {
                "use strict";
                var r = n(8),
                    o = n(575),
                    i = n(913),
                    a = n(506),
                    s = n(205),
                    u = n(585),
                    c = n(754),
                    l = n(713),
                    d = n(551);

                function p(t) {
                    return t && "object" == typeof t && "default" in t ? t : {
                        default: t
                    }
                }
                var h = p(r),
                    g = p(o),
                    f = p(i),
                    m = p(a),
                    v = p(s),
                    y = p(u),
                    b = p(c),
                    w = p(l),
                    k = p(d);

                function S(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function O(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? S(Object(n), !0).forEach((function(e) {
                            w.default(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }
                var M = {
                        type: "logger",
                        log: function(t) {
                            this.output("log", t)
                        },
                        warn: function(t) {
                            this.output("warn", t)
                        },
                        error: function(t) {
                            this.output("error", t)
                        },
                        output: function(t, e) {
                            console && console[t] && console[t].apply(console, e)
                        }
                    },
                    x = function() {
                        function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            g.default(this, t), this.init(e, n)
                        }
                        return f.default(t, [{
                            key: "init",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                this.prefix = e.prefix || "i18next:", this.logger = t || M, this.options = e, this.debug = e.debug
                            }
                        }, {
                            key: "setDebug",
                            value: function(t) {
                                this.debug = t
                            }
                        }, {
                            key: "log",
                            value: function() {
                                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                return this.forward(e, "log", "", !0)
                            }
                        }, {
                            key: "warn",
                            value: function() {
                                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                return this.forward(e, "warn", "", !0)
                            }
                        }, {
                            key: "error",
                            value: function() {
                                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                return this.forward(e, "error", "")
                            }
                        }, {
                            key: "deprecate",
                            value: function() {
                                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
                            }
                        }, {
                            key: "forward",
                            value: function(t, e, n, r) {
                                return r && !this.debug ? null : ("string" == typeof t[0] && (t[0] = "".concat(n).concat(this.prefix, " ").concat(t[0])), this.logger[e](t))
                            }
                        }, {
                            key: "create",
                            value: function(e) {
                                return new t(this.logger, O(O({}, {
                                    prefix: "".concat(this.prefix, ":").concat(e, ":")
                                }), this.options))
                            }
                        }]), t
                    }(),
                    R = new x,
                    E = function() {
                        function t() {
                            g.default(this, t), this.observers = {}
                        }
                        return f.default(t, [{
                            key: "on",
                            value: function(t, e) {
                                var n = this;
                                return t.split(" ").forEach((function(t) {
                                    n.observers[t] = n.observers[t] || [], n.observers[t].push(e)
                                })), this
                            }
                        }, {
                            key: "off",
                            value: function(t, e) {
                                this.observers[t] && (e ? this.observers[t] = this.observers[t].filter((function(t) {
                                    return t !== e
                                })) : delete this.observers[t])
                            }
                        }, {
                            key: "emit",
                            value: function(t) {
                                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                                if (this.observers[t]) {
                                    var o = [].concat(this.observers[t]);
                                    o.forEach((function(t) {
                                        t.apply(void 0, n)
                                    }))
                                }
                                if (this.observers["*"]) {
                                    var i = [].concat(this.observers["*"]);
                                    i.forEach((function(e) {
                                        e.apply(e, [t].concat(n))
                                    }))
                                }
                            }
                        }]), t
                    }();

                function _() {
                    var t, e, n = new Promise((function(n, r) {
                        t = n, e = r
                    }));
                    return n.resolve = t, n.reject = e, n
                }

                function C(t) {
                    return null == t ? "" : "" + t
                }

                function P(t, e, n) {
                    t.forEach((function(t) {
                        e[t] && (n[t] = e[t])
                    }))
                }

                function L(t, e, n) {
                    function r(t) {
                        return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
                    }

                    function o() {
                        return !t || "string" == typeof t
                    }
                    for (var i = "string" != typeof e ? [].concat(e) : e.split("."); i.length > 1;) {
                        if (o()) return {};
                        var a = r(i.shift());
                        !t[a] && n && (t[a] = new n), t = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : {}
                    }
                    return o() ? {} : {
                        obj: t,
                        k: r(i.shift())
                    }
                }

                function N(t, e, n) {
                    var r = L(t, e, Object);
                    r.obj[r.k] = n
                }

                function B(t, e) {
                    var n = L(t, e),
                        r = n.obj,
                        o = n.k;
                    if (r) return r[o]
                }

                function j(t, e, n) {
                    var r = B(t, n);
                    return void 0 !== r ? r : B(e, n)
                }

                function F(t, e, n) {
                    for (var r in e) "__proto__" !== r && "constructor" !== r && (r in t ? "string" == typeof t[r] || t[r] instanceof String || "string" == typeof e[r] || e[r] instanceof String ? n && (t[r] = e[r]) : F(t[r], e[r], n) : t[r] = e[r]);
                    return t
                }

                function D(t) {
                    return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                }
                var T = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                };

                function A(t) {
                    return "string" == typeof t ? t.replace(/[&<>"'\/]/g, (function(t) {
                        return T[t]
                    })) : t
                }
                var I = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
                    U = [" ", ",", "?", "!", ";"];

                function G(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function W(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? G(Object(n), !0).forEach((function(e) {
                            w.default(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function z(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                    if (t) {
                        if (t[e]) return t[e];
                        for (var r = e.split(n), o = t, i = 0; i < r.length; ++i) {
                            if (!o) return;
                            if ("string" == typeof o[r[i]] && i + 1 < r.length) return;
                            if (void 0 === o[r[i]]) {
                                for (var a = 2, s = r.slice(i, i + a).join(n), u = o[s]; void 0 === u && r.length > i + a;) a++, u = o[s = r.slice(i, i + a).join(n)];
                                if (void 0 === u) return;
                                if (e.endsWith(s)) {
                                    if ("string" == typeof u) return u;
                                    if (s && "string" == typeof u[s]) return u[s]
                                }
                                var c = r.slice(i + a).join(n);
                                return c ? z(u, c, n) : void 0
                            }
                            o = o[r[i]]
                        }
                        return o
                    }
                }
                var H = function(t) {
                        v.default(o, t);
                        var e, n, r = (e = o, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, r = b.default(e);
                            if (n) {
                                var o = b.default(this).constructor;
                                t = Reflect.construct(r, arguments, o)
                            } else t = r.apply(this, arguments);
                            return y.default(this, t)
                        });

                        function o(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                ns: ["translation"],
                                defaultNS: "translation"
                            };
                            return g.default(this, o), e = r.call(this), I && E.call(m.default(e)), e.data = t || {}, e.options = n, void 0 === e.options.keySeparator && (e.options.keySeparator = "."), void 0 === e.options.ignoreJSONStructure && (e.options.ignoreJSONStructure = !0), e
                        }
                        return f.default(o, [{
                            key: "addNamespaces",
                            value: function(t) {
                                this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
                            }
                        }, {
                            key: "removeNamespaces",
                            value: function(t) {
                                var e = this.options.ns.indexOf(t);
                                e > -1 && this.options.ns.splice(e, 1)
                            }
                        }, {
                            key: "getResource",
                            value: function(t, e, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                    o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                                    i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure,
                                    a = [t, e];
                                n && "string" != typeof n && (a = a.concat(n)), n && "string" == typeof n && (a = a.concat(o ? n.split(o) : n)), t.indexOf(".") > -1 && (a = t.split("."));
                                var s = B(this.data, a);
                                return s || !i || "string" != typeof n ? s : z(this.data && this.data[t] && this.data[t][e], n, o)
                            }
                        }, {
                            key: "addResource",
                            value: function(t, e, n, r) {
                                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                        silent: !1
                                    },
                                    i = this.options.keySeparator;
                                void 0 === i && (i = ".");
                                var a = [t, e];
                                n && (a = a.concat(i ? n.split(i) : n)), t.indexOf(".") > -1 && (r = e, e = (a = t.split("."))[1]), this.addNamespaces(e), N(this.data, a, r), o.silent || this.emit("added", t, e, n, r)
                            }
                        }, {
                            key: "addResources",
                            value: function(t, e, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                    silent: !1
                                };
                                for (var o in n) "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(t, e, o, n[o], {
                                    silent: !0
                                });
                                r.silent || this.emit("added", t, e, n)
                            }
                        }, {
                            key: "addResourceBundle",
                            value: function(t, e, n, r, o) {
                                var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                        silent: !1
                                    },
                                    a = [t, e];
                                t.indexOf(".") > -1 && (r = n, n = e, e = (a = t.split("."))[1]), this.addNamespaces(e);
                                var s = B(this.data, a) || {};
                                r ? F(s, n, o) : s = W(W({}, s), n), N(this.data, a, s), i.silent || this.emit("added", t, e, n)
                            }
                        }, {
                            key: "removeResourceBundle",
                            value: function(t, e) {
                                this.hasResourceBundle(t, e) && delete this.data[t][e], this.removeNamespaces(e), this.emit("removed", t, e)
                            }
                        }, {
                            key: "hasResourceBundle",
                            value: function(t, e) {
                                return void 0 !== this.getResource(t, e)
                            }
                        }, {
                            key: "getResourceBundle",
                            value: function(t, e) {
                                return e || (e = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? W(W({}, {}), this.getResource(t, e)) : this.getResource(t, e)
                            }
                        }, {
                            key: "getDataByLanguage",
                            value: function(t) {
                                return this.data[t]
                            }
                        }, {
                            key: "hasLanguageSomeTranslations",
                            value: function(t) {
                                var e = this.getDataByLanguage(t);
                                return !!(e && Object.keys(e) || []).find((function(t) {
                                    return e[t] && Object.keys(e[t]).length > 0
                                }))
                            }
                        }, {
                            key: "toJSON",
                            value: function() {
                                return this.data
                            }
                        }]), o
                    }(E),
                    V = {
                        processors: {},
                        addPostProcessor: function(t) {
                            this.processors[t.name] = t
                        },
                        handle: function(t, e, n, r, o) {
                            var i = this;
                            return t.forEach((function(t) {
                                i.processors[t] && (e = i.processors[t].process(e, n, r, o))
                            })), e
                        }
                    };

                function q(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function $(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? q(Object(n), !0).forEach((function(e) {
                            w.default(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }
                var K = {},
                    J = function(t) {
                        v.default(o, t);
                        var e, n, r = (e = o, n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, r = b.default(e);
                            if (n) {
                                var o = b.default(this).constructor;
                                t = Reflect.construct(r, arguments, o)
                            } else t = r.apply(this, arguments);
                            return y.default(this, t)
                        });

                        function o(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return g.default(this, o), e = r.call(this), I && E.call(m.default(e)), P(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, m.default(e)), e.options = n, void 0 === e.options.keySeparator && (e.options.keySeparator = "."), e.logger = R.create("translator"), e
                        }
                        return f.default(o, [{
                            key: "changeLanguage",
                            value: function(t) {
                                t && (this.language = t)
                            }
                        }, {
                            key: "exists",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    interpolation: {}
                                };
                                if (null == t) return !1;
                                var n = this.resolve(t, e);
                                return n && void 0 !== n.res
                            }
                        }, {
                            key: "extractFromKey",
                            value: function(t, e) {
                                var n = void 0 !== e.nsSeparator ? e.nsSeparator : this.options.nsSeparator;
                                void 0 === n && (n = ":");
                                var r = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                                    o = e.ns || this.options.defaultNS || [],
                                    i = n && t.indexOf(n) > -1,
                                    a = !(this.options.userDefinedKeySeparator || e.keySeparator || this.options.userDefinedNsSeparator || e.nsSeparator || function(t, e, n) {
                                        e = e || "", n = n || "";
                                        var r = U.filter((function(t) {
                                            return e.indexOf(t) < 0 && n.indexOf(t) < 0
                                        }));
                                        if (0 === r.length) return !0;
                                        var o = new RegExp("(".concat(r.map((function(t) {
                                                return "?" === t ? "\\?" : t
                                            })).join("|"), ")")),
                                            i = !o.test(t);
                                        if (!i) {
                                            var a = t.indexOf(n);
                                            a > 0 && !o.test(t.substring(0, a)) && (i = !0)
                                        }
                                        return i
                                    }(t, n, r));
                                if (i && !a) {
                                    var s = t.match(this.interpolator.nestingRegexp);
                                    if (s && s.length > 0) return {
                                        key: t,
                                        namespaces: o
                                    };
                                    var u = t.split(n);
                                    (n !== r || n === r && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), t = u.join(r)
                                }
                                return "string" == typeof o && (o = [o]), {
                                    key: t,
                                    namespaces: o
                                }
                            }
                        }, {
                            key: "translate",
                            value: function(t, e, n) {
                                var r = this;
                                if ("object" !== h.default(e) && this.options.overloadTranslationOptionHandler && (e = this.options.overloadTranslationOptionHandler(arguments)), e || (e = {}), null == t) return "";
                                Array.isArray(t) || (t = [String(t)]);
                                var i = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                                    a = this.extractFromKey(t[t.length - 1], e),
                                    s = a.key,
                                    u = a.namespaces,
                                    c = u[u.length - 1],
                                    l = e.lng || this.language,
                                    d = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                if (l && "cimode" === l.toLowerCase()) {
                                    if (d) {
                                        var p = e.nsSeparator || this.options.nsSeparator;
                                        return c + p + s
                                    }
                                    return s
                                }
                                var g = this.resolve(t, e),
                                    f = g && g.res,
                                    m = g && g.usedKey || s,
                                    v = g && g.exactUsedKey || s,
                                    y = Object.prototype.toString.apply(f),
                                    b = ["[object Number]", "[object Function]", "[object RegExp]"],
                                    w = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays,
                                    k = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                    S = "string" != typeof f && "boolean" != typeof f && "number" != typeof f;
                                if (k && f && S && b.indexOf(y) < 0 && ("string" != typeof w || "[object Array]" !== y)) {
                                    if (!e.returnObjects && !this.options.returnObjects) return this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, f, $($({}, e), {}, {
                                        ns: u
                                    })) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.");
                                    if (i) {
                                        var O = "[object Array]" === y,
                                            M = O ? [] : {},
                                            x = O ? v : m;
                                        for (var R in f)
                                            if (Object.prototype.hasOwnProperty.call(f, R)) {
                                                var E = "".concat(x).concat(i).concat(R);
                                                M[R] = this.translate(E, $($({}, e), {
                                                    joinArrays: !1,
                                                    ns: u
                                                })), M[R] === E && (M[R] = f[R])
                                            } f = M
                                    }
                                } else if (k && "string" == typeof w && "[object Array]" === y)(f = f.join(w)) && (f = this.extendTranslation(f, t, e, n));
                                else {
                                    var _ = !1,
                                        C = !1,
                                        P = void 0 !== e.count && "string" != typeof e.count,
                                        L = o.hasDefaultValue(e),
                                        N = P ? this.pluralResolver.getSuffix(l, e.count, e) : "",
                                        B = e["defaultValue".concat(N)] || e.defaultValue;
                                    !this.isValidLookup(f) && L && (_ = !0, f = B), this.isValidLookup(f) || (C = !0, f = s);
                                    var j = e.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                                        F = j && C ? void 0 : f,
                                        D = L && B !== f && this.options.updateMissing;
                                    if (C || _ || D) {
                                        if (this.logger.log(D ? "updateKey" : "missingKey", l, c, s, D ? B : f), i) {
                                            var T = this.resolve(s, $($({}, e), {}, {
                                                keySeparator: !1
                                            }));
                                            T && T.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                        }
                                        var A = [],
                                            I = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                                        if ("fallback" === this.options.saveMissingTo && I && I[0])
                                            for (var U = 0; U < I.length; U++) A.push(I[U]);
                                        else "all" === this.options.saveMissingTo ? A = this.languageUtils.toResolveHierarchy(e.lng || this.language) : A.push(e.lng || this.language);
                                        var G = function(t, n, o) {
                                            var i = L && o !== f ? o : F;
                                            r.options.missingKeyHandler ? r.options.missingKeyHandler(t, c, n, i, D, e) : r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(t, c, n, i, D, e), r.emit("missingKey", t, c, n, f)
                                        };
                                        this.options.saveMissing && (this.options.saveMissingPlurals && P ? A.forEach((function(t) {
                                            r.pluralResolver.getSuffixes(t, e).forEach((function(n) {
                                                G([t], s + n, e["defaultValue".concat(n)] || B)
                                            }))
                                        })) : G(A, s, B))
                                    }
                                    f = this.extendTranslation(f, t, e, g, n), C && f === s && this.options.appendNamespaceToMissingKey && (f = "".concat(c, ":").concat(s)), (C || _) && this.options.parseMissingKeyHandler && (f = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(s, _ ? f : void 0) : this.options.parseMissingKeyHandler(f))
                                }
                                return f
                            }
                        }, {
                            key: "extendTranslation",
                            value: function(t, e, n, r, o) {
                                var i = this;
                                if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, n, r.usedLng, r.usedNS, r.usedKey, {
                                    resolved: r
                                });
                                else if (!n.skipInterpolation) {
                                    n.interpolation && this.interpolator.init($($({}, n), {
                                        interpolation: $($({}, this.options.interpolation), n.interpolation)
                                    }));
                                    var a, s = "string" == typeof t && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                                    if (s) {
                                        var u = t.match(this.interpolator.nestingRegexp);
                                        a = u && u.length
                                    }
                                    var c = n.replace && "string" != typeof n.replace ? n.replace : n;
                                    if (this.options.interpolation.defaultVariables && (c = $($({}, this.options.interpolation.defaultVariables), c)), t = this.interpolator.interpolate(t, c, n.lng || this.language, n), s) {
                                        var l = t.match(this.interpolator.nestingRegexp);
                                        a < (l && l.length) && (n.nest = !1)
                                    }!1 !== n.nest && (t = this.interpolator.nest(t, (function() {
                                        for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                                        return o && o[0] === r[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(e[0])), null) : i.translate.apply(i, r.concat([e]))
                                    }), n)), n.interpolation && this.interpolator.reset()
                                }
                                var d = n.postProcess || this.options.postProcess,
                                    p = "string" == typeof d ? [d] : d;
                                return null != t && p && p.length && !1 !== n.applyPostProcessor && (t = V.handle(p, t, e, this.options && this.options.postProcessPassResolved ? $({
                                    i18nResolved: r
                                }, n) : n, this)), t
                            }
                        }, {
                            key: "resolve",
                            value: function(t) {
                                var e, n, r, o, i, a = this,
                                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return "string" == typeof t && (t = [t]), t.forEach((function(t) {
                                    if (!a.isValidLookup(e)) {
                                        var u = a.extractFromKey(t, s),
                                            c = u.key;
                                        n = c;
                                        var l = u.namespaces;
                                        a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                                        var d = void 0 !== s.count && "string" != typeof s.count,
                                            p = d && !s.ordinal && 0 === s.count && a.pluralResolver.shouldUseIntlApi(),
                                            h = void 0 !== s.context && ("string" == typeof s.context || "number" == typeof s.context) && "" !== s.context,
                                            g = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                        l.forEach((function(t) {
                                            a.isValidLookup(e) || (i = t, !K["".concat(g[0], "-").concat(t)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (K["".concat(g[0], "-").concat(t)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(g.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((function(n) {
                                                if (!a.isValidLookup(e)) {
                                                    o = n;
                                                    var i, u = [c];
                                                    if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(u, c, n, t, s);
                                                    else {
                                                        var l;
                                                        d && (l = a.pluralResolver.getSuffix(n, s.count, s));
                                                        var g = "_zero";
                                                        if (d && (u.push(c + l), p && u.push(c + g)), h) {
                                                            var f = "".concat(c).concat(a.options.contextSeparator).concat(s.context);
                                                            u.push(f), d && (u.push(f + l), p && u.push(f + g))
                                                        }
                                                    }
                                                    for (; i = u.pop();) a.isValidLookup(e) || (r = i, e = a.getResource(n, t, i, s))
                                                }
                                            })))
                                        }))
                                    }
                                })), {
                                    res: e,
                                    usedKey: n,
                                    exactUsedKey: r,
                                    usedLng: o,
                                    usedNS: i
                                }
                            }
                        }, {
                            key: "isValidLookup",
                            value: function(t) {
                                return !(void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t)
                            }
                        }, {
                            key: "getResource",
                            value: function(t, e, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, e, n, r) : this.resourceStore.getResource(t, e, n, r)
                            }
                        }], [{
                            key: "hasDefaultValue",
                            value: function(t) {
                                var e = "defaultValue";
                                for (var n in t)
                                    if (Object.prototype.hasOwnProperty.call(t, n) && e === n.substring(0, e.length) && void 0 !== t[n]) return !0;
                                return !1
                            }
                        }]), o
                    }(E);

                function Y(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }
                var X = function() {
                        function t(e) {
                            g.default(this, t), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = R.create("languageUtils")
                        }
                        return f.default(t, [{
                            key: "getScriptPartFromCode",
                            value: function(t) {
                                if (!t || t.indexOf("-") < 0) return null;
                                var e = t.split("-");
                                return 2 === e.length ? null : (e.pop(), "x" === e[e.length - 1].toLowerCase() ? null : this.formatLanguageCode(e.join("-")))
                            }
                        }, {
                            key: "getLanguagePartFromCode",
                            value: function(t) {
                                if (!t || t.indexOf("-") < 0) return t;
                                var e = t.split("-");
                                return this.formatLanguageCode(e[0])
                            }
                        }, {
                            key: "formatLanguageCode",
                            value: function(t) {
                                if ("string" == typeof t && t.indexOf("-") > -1) {
                                    var e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                        n = t.split("-");
                                    return this.options.lowerCaseLng ? n = n.map((function(t) {
                                        return t.toLowerCase()
                                    })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Y(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Y(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Y(n[2].toLowerCase()))), n.join("-")
                                }
                                return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
                            }
                        }, {
                            key: "isSupportedCode",
                            value: function(t) {
                                return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
                            }
                        }, {
                            key: "getBestMatchFromCodes",
                            value: function(t) {
                                var e, n = this;
                                return t ? (t.forEach((function(t) {
                                    if (!e) {
                                        var r = n.formatLanguageCode(t);
                                        n.options.supportedLngs && !n.isSupportedCode(r) || (e = r)
                                    }
                                })), !e && this.options.supportedLngs && t.forEach((function(t) {
                                    if (!e) {
                                        var r = n.getLanguagePartFromCode(t);
                                        if (n.isSupportedCode(r)) return e = r;
                                        e = n.options.supportedLngs.find((function(t) {
                                            if (0 === t.indexOf(r)) return t
                                        }))
                                    }
                                })), e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]), e) : null
                            }
                        }, {
                            key: "getFallbackCodes",
                            value: function(t, e) {
                                if (!t) return [];
                                if ("function" == typeof t && (t = t(e)), "string" == typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.apply(t)) return t;
                                if (!e) return t.default || [];
                                var n = t[e];
                                return n || (n = t[this.getScriptPartFromCode(e)]), n || (n = t[this.formatLanguageCode(e)]), n || (n = t[this.getLanguagePartFromCode(e)]), n || (n = t.default), n || []
                            }
                        }, {
                            key: "toResolveHierarchy",
                            value: function(t, e) {
                                var n = this,
                                    r = this.getFallbackCodes(e || this.options.fallbackLng || [], t),
                                    o = [],
                                    i = function(t) {
                                        t && (n.isSupportedCode(t) ? o.push(t) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(t)))
                                    };
                                return "string" == typeof t && t.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(t)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(t)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(t))) : "string" == typeof t && i(this.formatLanguageCode(t)), r.forEach((function(t) {
                                    o.indexOf(t) < 0 && i(n.formatLanguageCode(t))
                                })), o
                            }
                        }]), t
                    }(),
                    Q = [{
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
                    Z = {
                        1: function(t) {
                            return Number(t > 1)
                        },
                        2: function(t) {
                            return Number(1 != t)
                        },
                        3: function(t) {
                            return 0
                        },
                        4: function(t) {
                            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                        },
                        5: function(t) {
                            return Number(0 == t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
                        },
                        6: function(t) {
                            return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
                        },
                        7: function(t) {
                            return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                        },
                        8: function(t) {
                            return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
                        },
                        9: function(t) {
                            return Number(t >= 2)
                        },
                        10: function(t) {
                            return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
                        },
                        11: function(t) {
                            return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
                        },
                        12: function(t) {
                            return Number(t % 10 != 1 || t % 100 == 11)
                        },
                        13: function(t) {
                            return Number(0 !== t)
                        },
                        14: function(t) {
                            return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
                        },
                        15: function(t) {
                            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                        },
                        16: function(t) {
                            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
                        },
                        17: function(t) {
                            return Number(1 == t || t % 10 == 1 && t % 100 != 11 ? 0 : 1)
                        },
                        18: function(t) {
                            return Number(0 == t ? 0 : 1 == t ? 1 : 2)
                        },
                        19: function(t) {
                            return Number(1 == t ? 0 : 0 == t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
                        },
                        20: function(t) {
                            return Number(1 == t ? 0 : 0 == t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
                        },
                        21: function(t) {
                            return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
                        },
                        22: function(t) {
                            return Number(1 == t ? 0 : 2 == t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3)
                        }
                    },
                    tt = ["v1", "v2", "v3"],
                    et = {
                        zero: 0,
                        one: 1,
                        two: 2,
                        few: 3,
                        many: 4,
                        other: 5
                    };

                function nt() {
                    var t = {};
                    return Q.forEach((function(e) {
                        e.lngs.forEach((function(n) {
                            t[n] = {
                                numbers: e.nr,
                                plurals: Z[e.fc]
                            }
                        }))
                    })), t
                }
                var rt = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        g.default(this, t), this.languageUtils = e, this.options = n, this.logger = R.create("pluralResolver"), this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = nt()
                    }
                    return f.default(t, [{
                        key: "addRule",
                        value: function(t, e) {
                            this.rules[t] = e
                        }
                    }, {
                        key: "getRule",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this.shouldUseIntlApi()) try {
                                return new Intl.PluralRules(t, {
                                    type: e.ordinal ? "ordinal" : "cardinal"
                                })
                            } catch (t) {
                                return
                            }
                            return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
                        }
                    }, {
                        key: "needsPlural",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this.getRule(t, e);
                            return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                        }
                    }, {
                        key: "getPluralFormsOfKey",
                        value: function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.getSuffixes(t, n).map((function(t) {
                                return "".concat(e).concat(t)
                            }))
                        }
                    }, {
                        key: "getSuffixes",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = this.getRule(t, n);
                            return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((function(t, e) {
                                return et[t] - et[e]
                            })).map((function(t) {
                                return "".concat(e.options.prepend).concat(t)
                            })) : r.numbers.map((function(r) {
                                return e.getSuffix(t, r, n)
                            })) : []
                        }
                    }, {
                        key: "getSuffix",
                        value: function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                r = this.getRule(t, n);
                            return r ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(r.select(e)) : this.getSuffixRetroCompatible(r, e) : (this.logger.warn("no plural rule found for: ".concat(t)), "")
                        }
                    }, {
                        key: "getSuffixRetroCompatible",
                        value: function(t, e) {
                            var n = this,
                                r = t.noAbs ? t.plurals(e) : t.plurals(Math.abs(e)),
                                o = t.numbers[r];
                            this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                            var i = function() {
                                return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                            };
                            return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? "_plural_".concat(o.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                        }
                    }, {
                        key: "shouldUseIntlApi",
                        value: function() {
                            return !tt.includes(this.options.compatibilityJSON)
                        }
                    }]), t
                }();

                function ot(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function it(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ot(Object(n), !0).forEach((function(e) {
                            w.default(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }
                var at = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        g.default(this, t), this.logger = R.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(t) {
                            return t
                        }, this.init(e)
                    }
                    return f.default(t, [{
                        key: "init",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            t.interpolation || (t.interpolation = {
                                escapeValue: !0
                            });
                            var e = t.interpolation;
                            this.escape = void 0 !== e.escape ? e.escape : A, this.escapeValue = void 0 === e.escapeValue || e.escapeValue, this.useRawValueToEscape = void 0 !== e.useRawValueToEscape && e.useRawValueToEscape, this.prefix = e.prefix ? D(e.prefix) : e.prefixEscaped || "{{", this.suffix = e.suffix ? D(e.suffix) : e.suffixEscaped || "}}", this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ",", this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : e.unescapeSuffix || "", this.nestingPrefix = e.nestingPrefix ? D(e.nestingPrefix) : e.nestingPrefixEscaped || D("$t("), this.nestingSuffix = e.nestingSuffix ? D(e.nestingSuffix) : e.nestingSuffixEscaped || D(")"), this.nestingOptionsSeparator = e.nestingOptionsSeparator ? e.nestingOptionsSeparator : e.nestingOptionsSeparator || ",", this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3, this.alwaysFormat = void 0 !== e.alwaysFormat && e.alwaysFormat, this.resetRegExp()
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.options && this.init(this.options)
                        }
                    }, {
                        key: "resetRegExp",
                        value: function() {
                            var t = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                            this.regexp = new RegExp(t, "g");
                            var e = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                            this.regexpUnescape = new RegExp(e, "g");
                            var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                            this.nestingRegexp = new RegExp(n, "g")
                        }
                    }, {
                        key: "interpolate",
                        value: function(t, e, n, r) {
                            var o, i, a, s = this,
                                u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                            function c(t) {
                                return t.replace(/\$/g, "$$$$")
                            }
                            var l = function(t) {
                                if (t.indexOf(s.formatSeparator) < 0) {
                                    var o = j(e, u, t);
                                    return s.alwaysFormat ? s.format(o, void 0, n, it(it(it({}, r), e), {}, {
                                        interpolationkey: t
                                    })) : o
                                }
                                var i = t.split(s.formatSeparator),
                                    a = i.shift().trim(),
                                    c = i.join(s.formatSeparator).trim();
                                return s.format(j(e, u, a), c, n, it(it(it({}, r), e), {}, {
                                    interpolationkey: a
                                }))
                            };
                            this.resetRegExp();
                            var d = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler,
                                p = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                            return [{
                                regex: this.regexpUnescape,
                                safeValue: function(t) {
                                    return c(t)
                                }
                            }, {
                                regex: this.regexp,
                                safeValue: function(t) {
                                    return s.escapeValue ? c(s.escape(t)) : c(t)
                                }
                            }].forEach((function(e) {
                                for (a = 0; o = e.regex.exec(t);) {
                                    var n = o[1].trim();
                                    if (void 0 === (i = l(n)))
                                        if ("function" == typeof d) {
                                            var u = d(t, o, r);
                                            i = "string" == typeof u ? u : ""
                                        } else if (r && r.hasOwnProperty(n)) i = "";
                                    else {
                                        if (p) {
                                            i = o[0];
                                            continue
                                        }
                                        s.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(t)), i = ""
                                    } else "string" == typeof i || s.useRawValueToEscape || (i = C(i));
                                    var c = e.safeValue(i);
                                    if (t = t.replace(o[0], c), p ? (e.regex.lastIndex += c.length, e.regex.lastIndex -= o[0].length) : e.regex.lastIndex = 0, ++a >= s.maxReplaces) break
                                }
                            })), t
                        }
                    }, {
                        key: "nest",
                        value: function(t, e) {
                            var n, r, o = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                a = it({}, i);

                            function s(t, e) {
                                var n = this.nestingOptionsSeparator;
                                if (t.indexOf(n) < 0) return t;
                                var r = t.split(new RegExp("".concat(n, "[ ]*{"))),
                                    o = "{".concat(r[1]);
                                t = r[0], o = (o = this.interpolate(o, a)).replace(/'/g, '"');
                                try {
                                    a = JSON.parse(o), e && (a = it(it({}, e), a))
                                } catch (e) {
                                    return this.logger.warn("failed parsing options string in nesting for key ".concat(t), e), "".concat(t).concat(n).concat(o)
                                }
                                return delete a.defaultValue, t
                            }
                            for (a.applyPostProcessor = !1, delete a.defaultValue; n = this.nestingRegexp.exec(t);) {
                                var u = [],
                                    c = !1;
                                if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                    var l = n[1].split(this.formatSeparator).map((function(t) {
                                        return t.trim()
                                    }));
                                    n[1] = l.shift(), u = l, c = !0
                                }
                                if ((r = e(s.call(this, n[1].trim(), a), a)) && n[0] === t && "string" != typeof r) return r;
                                "string" != typeof r && (r = C(r)), r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(t)), r = ""), c && (r = u.reduce((function(t, e) {
                                    return o.format(t, e, i.lng, it(it({}, i), {}, {
                                        interpolationkey: n[1].trim()
                                    }))
                                }), r.trim())), t = t.replace(n[0], r), this.regexp.lastIndex = 0
                            }
                            return t
                        }
                    }]), t
                }();

                function st(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function ut(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? st(Object(n), !0).forEach((function(e) {
                            w.default(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }
                var ct = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        g.default(this, t), this.logger = R.create("formatter"), this.options = e, this.formats = {
                            number: function(t, e, n) {
                                return new Intl.NumberFormat(e, n).format(t)
                            },
                            currency: function(t, e, n) {
                                return new Intl.NumberFormat(e, ut(ut({}, n), {}, {
                                    style: "currency"
                                })).format(t)
                            },
                            datetime: function(t, e, n) {
                                return new Intl.DateTimeFormat(e, ut({}, n)).format(t)
                            },
                            relativetime: function(t, e, n) {
                                return new Intl.RelativeTimeFormat(e, ut({}, n)).format(t, n.range || "day")
                            },
                            list: function(t, e, n) {
                                return new Intl.ListFormat(e, ut({}, n)).format(t)
                            }
                        }, this.init(e)
                    }
                    return f.default(t, [{
                        key: "init",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    interpolation: {}
                                },
                                n = e.interpolation;
                            this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
                        }
                    }, {
                        key: "add",
                        value: function(t, e) {
                            this.formats[t.toLowerCase().trim()] = e
                        }
                    }, {
                        key: "format",
                        value: function(t, e, n, r) {
                            var o = this;
                            return e.split(this.formatSeparator).reduce((function(t, e) {
                                var i = function(t) {
                                        var e = t.toLowerCase().trim(),
                                            n = {};
                                        if (t.indexOf("(") > -1) {
                                            var r = t.split("(");
                                            e = r[0].toLowerCase().trim();
                                            var o = r[1].substring(0, r[1].length - 1);
                                            "currency" === e && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : "relativetime" === e && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((function(t) {
                                                if (t) {
                                                    var e = t.split(":"),
                                                        r = k.default(e),
                                                        o = r[0],
                                                        i = r.slice(1).join(":");
                                                    n[o.trim()] || (n[o.trim()] = i.trim()), "false" === i.trim() && (n[o.trim()] = !1), "true" === i.trim() && (n[o.trim()] = !0), isNaN(i.trim()) || (n[o.trim()] = parseInt(i.trim(), 10))
                                                }
                                            }))
                                        }
                                        return {
                                            formatName: e,
                                            formatOptions: n
                                        }
                                    }(e),
                                    a = i.formatName,
                                    s = i.formatOptions;
                                if (o.formats[a]) {
                                    var u = t;
                                    try {
                                        var c = r && r.formatParams && r.formatParams[r.interpolationkey] || {},
                                            l = c.locale || c.lng || r.locale || r.lng || n;
                                        u = o.formats[a](t, l, ut(ut(ut({}, s), r), c))
                                    } catch (t) {
                                        o.logger.warn(t)
                                    }
                                    return u
                                }
                                return o.logger.warn("there was no format function for ".concat(a)), t
                            }), t)
                        }
                    }]), t
                }();

                function lt(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function dt(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? lt(Object(n), !0).forEach((function(e) {
                            w.default(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }
                var pt = function(t) {
                    v.default(o, t);
                    var e, n, r = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = b.default(e);
                        if (n) {
                            var o = b.default(this).constructor;
                            t = Reflect.construct(r, arguments, o)
                        } else t = r.apply(this, arguments);
                        return y.default(this, t)
                    });

                    function o(t, e, n) {
                        var i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return g.default(this, o), i = r.call(this), I && E.call(m.default(i)), i.backend = t, i.store = e, i.services = n, i.languageUtils = n.languageUtils, i.options = a, i.logger = R.create("backendConnector"), i.state = {}, i.queue = [], i.backend && i.backend.init && i.backend.init(n, a.backend, a), i
                    }
                    return f.default(o, [{
                        key: "queueLoad",
                        value: function(t, e, n, r) {
                            var o = this,
                                i = [],
                                a = [],
                                s = [],
                                u = [];
                            return t.forEach((function(t) {
                                var r = !0;
                                e.forEach((function(e) {
                                    var s = "".concat(t, "|").concat(e);
                                    !n.reload && o.store.hasResourceBundle(t, e) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1, r = !1, a.indexOf(s) < 0 && a.push(s), i.indexOf(s) < 0 && i.push(s), u.indexOf(e) < 0 && u.push(e)))
                                })), r || s.push(t)
                            })), (i.length || a.length) && this.queue.push({
                                pending: a,
                                loaded: {},
                                errors: [],
                                callback: r
                            }), {
                                toLoad: i,
                                pending: a,
                                toLoadLanguages: s,
                                toLoadNamespaces: u
                            }
                        }
                    }, {
                        key: "loaded",
                        value: function(t, e, n) {
                            var r = t.split("|"),
                                o = r[0],
                                i = r[1];
                            e && this.emit("failedLoading", o, i, e), n && this.store.addResourceBundle(o, i, n), this.state[t] = e ? -1 : 2;
                            var a = {};
                            this.queue.forEach((function(n) {
                                var r, s, u, c, l;
                                r = n.loaded, s = i, (c = (u = L(r, [o], Object)).obj)[l = u.k] = c[l] || [], c[l].push(s),
                                    function(t, e) {
                                        for (var n = t.indexOf(e); - 1 !== n;) t.splice(n, 1), n = t.indexOf(e)
                                    }(n.pending, t), e && n.errors.push(e), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(t) {
                                        a[t] || (a[t] = []), n.loaded[t].length && n.loaded[t].forEach((function(e) {
                                            a[t].indexOf(e) < 0 && a[t].push(e)
                                        }))
                                    })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                            })), this.emit("loaded", a), this.queue = this.queue.filter((function(t) {
                                return !t.done
                            }))
                        }
                    }, {
                        key: "read",
                        value: function(t, e, n) {
                            var r = this,
                                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                                a = arguments.length > 5 ? arguments[5] : void 0;
                            return t.length ? this.backend[n](t, e, (function(s, u) {
                                s && u && o < 5 ? setTimeout((function() {
                                    r.read.call(r, t, e, n, o + 1, 2 * i, a)
                                }), i) : a(s, u)
                            })) : a(null, {})
                        }
                    }, {
                        key: "prepareLoading",
                        value: function(t, e) {
                            var n = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                o = arguments.length > 3 ? arguments[3] : void 0;
                            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                            "string" == typeof t && (t = this.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]);
                            var i = this.queueLoad(t, e, r, o);
                            if (!i.toLoad.length) return i.pending.length || o(), null;
                            i.toLoad.forEach((function(t) {
                                n.loadOne(t)
                            }))
                        }
                    }, {
                        key: "load",
                        value: function(t, e, n) {
                            this.prepareLoading(t, e, {}, n)
                        }
                    }, {
                        key: "reload",
                        value: function(t, e, n) {
                            this.prepareLoading(t, e, {
                                reload: !0
                            }, n)
                        }
                    }, {
                        key: "loadOne",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                r = t.split("|"),
                                o = r[0],
                                i = r[1];
                            this.read(o, i, "read", void 0, void 0, (function(r, a) {
                                r && e.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r), !r && a && e.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a), e.loaded(t, r, a)
                            }))
                        }
                    }, {
                        key: "saveMissing",
                        value: function(t, e, n, r, o) {
                            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                            this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(e) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(e, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(t, e, n, r, null, dt(dt({}, i), {}, {
                                isUpdate: o
                            })), t && t[0] && this.store.addResource(t[0], e, n, r))
                        }
                    }]), o
                }(E);

                function ht() {
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
                        overloadTranslationOptionHandler: function(t) {
                            var e = {};
                            if ("object" === h.default(t[1]) && (e = t[1]), "string" == typeof t[1] && (e.defaultValue = t[1]), "string" == typeof t[2] && (e.tDescription = t[2]), "object" === h.default(t[2]) || "object" === h.default(t[3])) {
                                var n = t[3] || t[2];
                                Object.keys(n).forEach((function(t) {
                                    e[t] = n[t]
                                }))
                            }
                            return e
                        },
                        interpolation: {
                            escapeValue: !0,
                            format: function(t, e, n, r) {
                                return t
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

                function gt(t) {
                    return "string" == typeof t.ns && (t.ns = [t.ns]), "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]), "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t
                }

                function ft(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function mt(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ft(Object(n), !0).forEach((function(e) {
                            w.default(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function vt() {}

                function yt(t) {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((function(e) {
                        "function" == typeof t[e] && (t[e] = t[e].bind(t))
                    }))
                }
                var bt = function(t) {
                    v.default(o, t);
                    var e, n, r = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = b.default(e);
                        if (n) {
                            var o = b.default(this).constructor;
                            t = Reflect.construct(r, arguments, o)
                        } else t = r.apply(this, arguments);
                        return y.default(this, t)
                    });

                    function o() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        if (g.default(this, o), t = r.call(this), I && E.call(m.default(t)), t.options = gt(e), t.services = {}, t.logger = R, t.modules = {
                                external: []
                            }, yt(m.default(t)), n && !t.isInitialized && !e.isClone) {
                            if (!t.options.initImmediate) return t.init(e, n), y.default(t, m.default(t));
                            setTimeout((function() {
                                t.init(e, n)
                            }), 0)
                        }
                        return t
                    }
                    return f.default(o, [{
                        key: "init",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            "function" == typeof e && (n = e, e = {}), !e.defaultNS && e.ns && ("string" == typeof e.ns ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
                            var r = ht();

                            function o(t) {
                                return t ? "function" == typeof t ? new t : t : null
                            }
                            if (this.options = mt(mt(mt({}, r), this.options), gt(e)), "v1" !== this.options.compatibilityAPI && (this.options.interpolation = mt(mt({}, r.interpolation), this.options.interpolation)), void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator), void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator), !this.options.isClone) {
                                var i;
                                this.modules.logger ? R.init(o(this.modules.logger), this.options) : R.init(null, this.options), this.modules.formatter ? i = this.modules.formatter : "undefined" != typeof Intl && (i = ct);
                                var a = new X(this.options);
                                this.store = new H(this.options.resources, this.options);
                                var s = this.services;
                                s.logger = R, s.resourceStore = this.store, s.languageUtils = a, s.pluralResolver = new rt(a, {
                                    prepend: this.options.pluralSeparator,
                                    compatibilityJSON: this.options.compatibilityJSON,
                                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                                }), !i || this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format || (s.formatter = o(i), s.formatter.init(s, this.options), this.options.interpolation.format = s.formatter.format.bind(s.formatter)), s.interpolator = new at(this.options), s.utils = {
                                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                                }, s.backendConnector = new pt(o(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", (function(e) {
                                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                    t.emit.apply(t, [e].concat(r))
                                })), this.modules.languageDetector && (s.languageDetector = o(this.modules.languageDetector), s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = o(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new J(this.services, this.options), this.translator.on("*", (function(e) {
                                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                    t.emit.apply(t, [e].concat(r))
                                })), this.modules.external.forEach((function(e) {
                                    e.init && e.init(t)
                                }))
                            }
                            if (this.format = this.options.interpolation.format, n || (n = vt), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                                var u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                u.length > 0 && "dev" !== u[0] && (this.options.lng = u[0])
                            }
                            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                            var c = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                            c.forEach((function(e) {
                                t[e] = function() {
                                    var n;
                                    return (n = t.store)[e].apply(n, arguments)
                                }
                            }));
                            var l = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                            l.forEach((function(e) {
                                t[e] = function() {
                                    var n;
                                    return (n = t.store)[e].apply(n, arguments), t
                                }
                            }));
                            var d = _(),
                                p = function() {
                                    var e = function(e, r) {
                                        t.isInitialized && !t.initializedStoreOnce && t.logger.warn("init: i18next is already initialized. You should call init just once!"), t.isInitialized = !0, t.options.isClone || t.logger.log("initialized", t.options), t.emit("initialized", t.options), d.resolve(r), n(e, r)
                                    };
                                    if (t.languages && "v1" !== t.options.compatibilityAPI && !t.isInitialized) return e(null, t.t.bind(t));
                                    t.changeLanguage(t.options.lng, e)
                                };
                            return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), d
                        }
                    }, {
                        key: "loadResources",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vt,
                                r = n,
                                o = "string" == typeof t ? t : this.language;
                            if ("function" == typeof t && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
                                if (o && "cimode" === o.toLowerCase()) return r();
                                var i = [],
                                    a = function(t) {
                                        t && e.services.languageUtils.toResolveHierarchy(t).forEach((function(t) {
                                            i.indexOf(t) < 0 && i.push(t)
                                        }))
                                    };
                                if (o) a(o);
                                else {
                                    var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                    s.forEach((function(t) {
                                        return a(t)
                                    }))
                                }
                                this.options.preload && this.options.preload.forEach((function(t) {
                                    return a(t)
                                })), this.services.backendConnector.load(i, this.options.ns, (function(t) {
                                    t || e.resolvedLanguage || !e.language || e.setResolvedLanguage(e.language), r(t)
                                }))
                            } else r(null)
                        }
                    }, {
                        key: "reloadResources",
                        value: function(t, e, n) {
                            var r = _();
                            return t || (t = this.languages), e || (e = this.options.ns), n || (n = vt), this.services.backendConnector.reload(t, e, (function(t) {
                                r.resolve(), n(t)
                            })), r
                        }
                    }, {
                        key: "use",
                        value: function(t) {
                            if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                            if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                            return "backend" === t.type && (this.modules.backend = t), ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t), "languageDetector" === t.type && (this.modules.languageDetector = t), "i18nFormat" === t.type && (this.modules.i18nFormat = t), "postProcessor" === t.type && V.addPostProcessor(t), "formatter" === t.type && (this.modules.formatter = t), "3rdParty" === t.type && this.modules.external.push(t), this
                        }
                    }, {
                        key: "setResolvedLanguage",
                        value: function(t) {
                            if (t && this.languages && !(["cimode", "dev"].indexOf(t) > -1))
                                for (var e = 0; e < this.languages.length; e++) {
                                    var n = this.languages[e];
                                    if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                                        this.resolvedLanguage = n;
                                        break
                                    }
                                }
                        }
                    }, {
                        key: "changeLanguage",
                        value: function(t, e) {
                            var n = this;
                            this.isLanguageChangingTo = t;
                            var r = _();
                            this.emit("languageChanging", t);
                            var o = function(t) {
                                    n.language = t, n.languages = n.services.languageUtils.toResolveHierarchy(t), n.resolvedLanguage = void 0, n.setResolvedLanguage(t)
                                },
                                i = function(i) {
                                    t || i || !n.services.languageDetector || (i = []);
                                    var a = "string" == typeof i ? i : n.services.languageUtils.getBestMatchFromCodes(i);
                                    a && (n.language || o(a), n.translator.language || n.translator.changeLanguage(a), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(a)), n.loadResources(a, (function(t) {
                                        ! function(t, i) {
                                            i ? (o(i), n.translator.changeLanguage(i), n.isLanguageChangingTo = void 0, n.emit("languageChanged", i), n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0, r.resolve((function() {
                                                return n.t.apply(n, arguments)
                                            })), e && e(t, (function() {
                                                return n.t.apply(n, arguments)
                                            }))
                                        }(t, a)
                                    }))
                                };
                            return t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(t) : i(this.services.languageDetector.detect()), r
                        }
                    }, {
                        key: "getFixedT",
                        value: function(t, e, n) {
                            var r = this,
                                o = function t(e, o) {
                                    var i;
                                    if ("object" !== h.default(o)) {
                                        for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++) s[u - 2] = arguments[u];
                                        i = r.options.overloadTranslationOptionHandler([e, o].concat(s))
                                    } else i = mt({}, o);
                                    i.lng = i.lng || t.lng, i.lngs = i.lngs || t.lngs, i.ns = i.ns || t.ns;
                                    var c = r.options.keySeparator || ".",
                                        l = n ? "".concat(n).concat(c).concat(e) : e;
                                    return r.t(l, i)
                                };
                            return "string" == typeof t ? o.lng = t : o.lngs = t, o.ns = e, o.keyPrefix = n, o
                        }
                    }, {
                        key: "t",
                        value: function() {
                            var t;
                            return this.translator && (t = this.translator).translate.apply(t, arguments)
                        }
                    }, {
                        key: "exists",
                        value: function() {
                            var t;
                            return this.translator && (t = this.translator).exists.apply(t, arguments)
                        }
                    }, {
                        key: "setDefaultNamespace",
                        value: function(t) {
                            this.options.defaultNS = t
                        }
                    }, {
                        key: "hasLoadedNamespace",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                            var r = this.resolvedLanguage || this.languages[0],
                                o = !!this.options && this.options.fallbackLng,
                                i = this.languages[this.languages.length - 1];
                            if ("cimode" === r.toLowerCase()) return !0;
                            var a = function(t, n) {
                                var r = e.services.backendConnector.state["".concat(t, "|").concat(n)];
                                return -1 === r || 2 === r
                            };
                            if (n.precheck) {
                                var s = n.precheck(this, a);
                                if (void 0 !== s) return s
                            }
                            return !!this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || !(!a(r, t) || o && !a(i, t))
                        }
                    }, {
                        key: "loadNamespaces",
                        value: function(t, e) {
                            var n = this,
                                r = _();
                            return this.options.ns ? ("string" == typeof t && (t = [t]), t.forEach((function(t) {
                                n.options.ns.indexOf(t) < 0 && n.options.ns.push(t)
                            })), this.loadResources((function(t) {
                                r.resolve(), e && e(t)
                            })), r) : (e && e(), Promise.resolve())
                        }
                    }, {
                        key: "loadLanguages",
                        value: function(t, e) {
                            var n = _();
                            "string" == typeof t && (t = [t]);
                            var r = this.options.preload || [],
                                o = t.filter((function(t) {
                                    return r.indexOf(t) < 0
                                }));
                            return o.length ? (this.options.preload = r.concat(o), this.loadResources((function(t) {
                                n.resolve(), e && e(t)
                            })), n) : (e && e(), Promise.resolve())
                        }
                    }, {
                        key: "dir",
                        value: function(t) {
                            return t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), t ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr" : "rtl"
                        }
                    }, {
                        key: "cloneInstance",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vt,
                                r = mt(mt(mt({}, this.options), e), {
                                    isClone: !0
                                }),
                                i = new o(r),
                                a = ["store", "services", "language"];
                            return a.forEach((function(e) {
                                i[e] = t[e]
                            })), i.services = mt({}, this.services), i.services.utils = {
                                hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                            }, i.translator = new J(i.services, i.options), i.translator.on("*", (function(t) {
                                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                                i.emit.apply(i, [t].concat(n))
                            })), i.init(r, n), i.translator.options = i.options, i.translator.backendConnector.services.utils = {
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
                    }]), o
                }(E);
                w.default(bt, "createInstance", (function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    return new bt(t, e)
                }));
                var wt = bt.createInstance();
                wt.createInstance = bt.createInstance, t.exports = wt
            },
            16: function(t, e, n) {
                "use strict";
                n.r(e)
            },
            188: function(t) {
                "use strict";

                function e(t) {
                    return t instanceof Buffer ? Buffer.from(t) : new t.constructor(t.buffer.slice(), t.byteOffset, t.length)
                }
                t.exports = function(t) {
                    return (t = t || {}).circles ? function(t) {
                        var n = [],
                            r = [];
                        return t.proto ? function t(i) {
                            if ("object" != typeof i || null === i) return i;
                            if (i instanceof Date) return new Date(i);
                            if (Array.isArray(i)) return o(i, t);
                            if (i instanceof Map) return new Map(o(Array.from(i), t));
                            if (i instanceof Set) return new Set(o(Array.from(i), t));
                            var a = {};
                            for (var s in n.push(i), r.push(a), i) {
                                var u = i[s];
                                if ("object" != typeof u || null === u) a[s] = u;
                                else if (u instanceof Date) a[s] = new Date(u);
                                else if (u instanceof Map) a[s] = new Map(o(Array.from(u), t));
                                else if (u instanceof Set) a[s] = new Set(o(Array.from(u), t));
                                else if (ArrayBuffer.isView(u)) a[s] = e(u);
                                else {
                                    var c = n.indexOf(u);
                                    a[s] = -1 !== c ? r[c] : t(u)
                                }
                            }
                            return n.pop(), r.pop(), a
                        } : function t(i) {
                            if ("object" != typeof i || null === i) return i;
                            if (i instanceof Date) return new Date(i);
                            if (Array.isArray(i)) return o(i, t);
                            if (i instanceof Map) return new Map(o(Array.from(i), t));
                            if (i instanceof Set) return new Set(o(Array.from(i), t));
                            var a = {};
                            for (var s in n.push(i), r.push(a), i)
                                if (!1 !== Object.hasOwnProperty.call(i, s)) {
                                    var u = i[s];
                                    if ("object" != typeof u || null === u) a[s] = u;
                                    else if (u instanceof Date) a[s] = new Date(u);
                                    else if (u instanceof Map) a[s] = new Map(o(Array.from(u), t));
                                    else if (u instanceof Set) a[s] = new Set(o(Array.from(u), t));
                                    else if (ArrayBuffer.isView(u)) a[s] = e(u);
                                    else {
                                        var c = n.indexOf(u);
                                        a[s] = -1 !== c ? r[c] : t(u)
                                    }
                                } return n.pop(), r.pop(), a
                        };

                        function o(t, o) {
                            for (var i = Object.keys(t), a = new Array(i.length), s = 0; s < i.length; s++) {
                                var u = i[s],
                                    c = t[u];
                                if ("object" != typeof c || null === c) a[u] = c;
                                else if (c instanceof Date) a[u] = new Date(c);
                                else if (ArrayBuffer.isView(c)) a[u] = e(c);
                                else {
                                    var l = n.indexOf(c);
                                    a[u] = -1 !== l ? r[l] : o(c)
                                }
                            }
                            return a
                        }
                    }(t) : t.proto ? function t(r) {
                        if ("object" != typeof r || null === r) return r;
                        if (r instanceof Date) return new Date(r);
                        if (Array.isArray(r)) return n(r, t);
                        if (r instanceof Map) return new Map(n(Array.from(r), t));
                        if (r instanceof Set) return new Set(n(Array.from(r), t));
                        var o = {};
                        for (var i in r) {
                            var a = r[i];
                            "object" != typeof a || null === a ? o[i] = a : a instanceof Date ? o[i] = new Date(a) : a instanceof Map ? o[i] = new Map(n(Array.from(a), t)) : a instanceof Set ? o[i] = new Set(n(Array.from(a), t)) : ArrayBuffer.isView(a) ? o[i] = e(a) : o[i] = t(a)
                        }
                        return o
                    } : function t(r) {
                        if ("object" != typeof r || null === r) return r;
                        if (r instanceof Date) return new Date(r);
                        if (Array.isArray(r)) return n(r, t);
                        if (r instanceof Map) return new Map(n(Array.from(r), t));
                        if (r instanceof Set) return new Set(n(Array.from(r), t));
                        var o = {};
                        for (var i in r)
                            if (!1 !== Object.hasOwnProperty.call(r, i)) {
                                var a = r[i];
                                "object" != typeof a || null === a ? o[i] = a : a instanceof Date ? o[i] = new Date(a) : a instanceof Map ? o[i] = new Map(n(Array.from(a), t)) : a instanceof Set ? o[i] = new Set(n(Array.from(a), t)) : ArrayBuffer.isView(a) ? o[i] = e(a) : o[i] = t(a)
                            } return o
                    };

                    function n(t, n) {
                        for (var r = Object.keys(t), o = new Array(r.length), i = 0; i < r.length; i++) {
                            var a = r[i],
                                s = t[a];
                            "object" != typeof s || null === s ? o[a] = s : s instanceof Date ? o[a] = new Date(s) : ArrayBuffer.isView(s) ? o[a] = e(s) : o[a] = n(s)
                        }
                        return o
                    }
                }
            },
            583: function(t) {
                "use strict";
                t.exports = JSON.parse('{"origin-hint":{"seed":"Seed {{position}}","winner-bracket":"Loser of WB {{round}}.{{position}}","winner-bracket-semi-final":"Loser of WB Semi {{position}}","winner-bracket-final":"Loser of WB Final","consolation-final":"Loser of Semi {{position}}","grand-final":"Winner of LB Final"},"match-label":{"winner-bracket":"WB","loser-bracket":"LB","standard-bracket":"M","standard-bracket-semi-final":"Semi {{matchNumber}}","standard-bracket-final":"Final","double-elimination":"{{matchPrefix}} {{roundNumber}}.{{matchNumber}}","double-elimination-semi-final":"{{matchPrefix}} Semi {{matchNumber}}","double-elimination-final":"{{matchPrefix}} Final","consolation-final":"Consolation Final","grand-final-single":"Grand Final","grand-final":"GF Round {{roundNumber}}"},"match-status":{"locked":"Locked","waiting":"Waiting","ready":"Ready","running":"Running","completed":"Completed","archived":"Archived"},"abbreviations":{"win":"W","loss":"L","forfeit":"F","position":"P","seed":"#"},"ranking":{"rank":{"text":"#","tooltip":"Rank"},"id":{"text":"Name","tooltip":"Name"},"played":{"text":"P","tooltip":"Played"},"wins":{"text":"$t(abbreviations.win)","tooltip":"Wins"},"draws":{"text":"D","tooltip":"Draws"},"losses":{"text":"$t(abbreviations.loss)","tooltip":"Losses"},"forfeits":{"text":"$t(abbreviations.forfeit)","tooltip":"Forfeits"},"scoreFor":{"text":"SF","tooltip":"Score For"},"scoreAgainst":{"text":"SA","tooltip":"Score Against"},"scoreDifference":{"text":"+/-","tooltip":"Score Difference"},"points":{"text":"Pts","tooltip":"Points"}},"common":{"bye":"BYE","best-of-x":"Bo{{x}}","group-name":"Group {{groupNumber}}","group-name-winner-bracket":"Winner Bracket","group-name-loser-bracket":"Loser Bracket","round-name":"Round {{roundNumber}}","round-name-final":"Final Round","round-name-winner-bracket":"WB Round {{roundNumber}}","round-name-winner-bracket-final":"WB Final Round","round-name-loser-bracket":"LB Round {{roundNumber}}","round-name-loser-bracket-final":"LB Final Round"},"form-creator":{"stage-name-label":"Name your stage","stage-name-placeholder":"Give a name for your stage","stage-selector-label":"Select a stage","team-label":"Name your teams","team-placeholder":"Comma separated List of Team Names (must be 2^n)","group-label":"How many groups?","group-placeholder":"How many groups do you want?","seed-order-label":"How would you like to order your seeds?","double-elimination-seed-order-placeholder":"Seed order for double elimination comma separated","round-robin-mode-label":"Which round robin mode do you like?","consolation-final-label":"Consolation Final","skip-first-round-label":"Skip first round","grand-final-type-label":"Grand final type","submit":"Create"}}')
            },
            159: function(t) {
                "use strict";
                t.exports = JSON.parse('{"origin-hint":{"seed":"Seed {{position}}","winner-bracket":"Perdant WB {{round}}.{{position}}","winner-bracket-semi-final":"Perdant WB Semi {{position}}","winner-bracket-final":"Perdant Finale WB","consolation-final":"Perdant Semi {{position}}","grand-final":"Gagnant Finale LB"},"match-label":{"winner-bracket":"WB","loser-bracket":"LB","standard-bracket":"M","standard-bracket-semi-final":"Semi {{matchNumber}}","standard-bracket-final":"Finale","double-elimination":"{{matchPrefix}} {{roundNumber}}.{{matchNumber}}","double-elimination-semi-final":"{{matchPrefix}} Semi {{matchNumber}}","double-elimination-final":"Finale {{matchPrefix}}","consolation-final":"Petite finale","grand-final-single":"Grande finale","grand-final":"GF Round {{roundNumber}}"},"match-status":{"locked":"Verrouillé","waiting":"En attente","ready":"Prêt","running":"En cours","completed":"Terminé","archived":"Archivé"},"abbreviations":{"win":"V","loss":"D","forfeit":"F","position":"P","seed":"#"},"ranking":{"rank":{"text":"#","tooltip":"Rang"},"id":{"text":"Name","tooltip":"Nom"},"played":{"text":"J","tooltip":"Joué"},"wins":{"text":"$t(abbreviations.win)","tooltip":"Victoires"},"draws":{"text":"N","tooltip":"Match nul"},"losses":{"text":"$t(abbreviations.loss)","tooltip":"Défaites"},"forfeits":{"text":"$t(abbreviations.forfeit)","tooltip":"Forfaits"},"scoreFor":{"text":"SF","tooltip":"Score pour"},"scoreAgainst":{"text":"SA","tooltip":"Score contre"},"scoreDifference":{"text":"+/-","tooltip":"Différence de score"},"points":{"text":"Pts","tooltip":"Points"}},"common":{"bye":"BYE","best-of-x":"Bo{{x}}","group-name":"Groupe {{groupNumber}}","round-name":"Round {{roundNumber}}","round-name-final":"Round final","round-name-winner-bracket":"WB Round {{roundNumber}}","round-name-winner-bracket-final":"WB Round final","round-name-loser-bracket":"LB Round {{roundNumber}}","round-name-loser-bracket-final":"LB Round final"},"form-creator":{"stage-name-label":"Name your stage","stage-name-placeholder":"Give a name for your stage","stage-selector-label":"Select a stage","team-label":"Name your teams","team-placeholder":"Comma separated List of Team Names (must be 2^n)","group-label":"How many groups?","group-placeholder":"How many groups do you want?","seed-order-label":"How would you like to order your seeds?","double-elimination-seed-order-placeholder":"Seed order for double elimination comma separated","round-robin-mode-label":"Which round robin mode do you like?","consolation-final-label":"Consolation Final","skip-first-round-label":"Skip first round","grand-final-type-label":"Grand final type","submit":"Create"}}')
            }
        },
        e = {};

    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.d = function(t, e) {
            for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            const t = n(38),
                e = n(37),
                r = n(825);
            window.bracketsViewer = new r.BracketsViewer, window.inMemoryDatabase = new t.InMemoryDatabase, window.bracketsManager = new e.BracketsManager(window.inMemoryDatabase)
        }()
}();