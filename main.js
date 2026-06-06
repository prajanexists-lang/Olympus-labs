import {c as l, r as m, u as N, j as e, S as u, i as v, f as k, p as w, k as M, L as i, P as o, C} from "./index-BE4L-nJR.js";
import {L as S} from "./loader-circle-Ce_6ZRMx.js";
import {P} from "./ProductCard-Bnk08uHS.js";
const A = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , L = l("arrow-right", A);
const _ = [["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M17 20v2",
    key: "1rnc9c"
}], ["path", {
    d: "M17 2v2",
    key: "11trls"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M2 17h2",
    key: "7oei6x"
}], ["path", {
    d: "M2 7h2",
    key: "asdhe0"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "M20 17h2",
    key: "1fpfkl"
}], ["path", {
    d: "M20 7h2",
    key: "1o8tra"
}], ["path", {
    d: "M7 20v2",
    key: "4gnj0m"
}], ["path", {
    d: "M7 2v2",
    key: "1i4yhu"
}], ["rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    key: "1vbyd7"
}], ["rect", {
    x: "8",
    y: "8",
    width: "8",
    height: "8",
    rx: "1",
    key: "z9xiuo"
}]]
  , F = l("cpu", _);
const O = [["path", {
    d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
    key: "e79jfc"
}], ["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
}], ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
}], ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
}], ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
}]]
  , $ = l("palette", O);
const E = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , R = l("shield", E);
const T = [["path", {
    d: "m18 14 4 4-4 4",
    key: "10pe0f"
}], ["path", {
    d: "m18 2 4 4-4 4",
    key: "pucp1d"
}], ["path", {
    d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
    key: "1ailkh"
}], ["path", {
    d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
    key: "km57vx"
}], ["path", {
    d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
    key: "os18l9"
}]]
  , q = l("shuffle", T);
const z = [["path", {
    d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
    key: "ul74o6"
}], ["path", {
    d: "m14 7 3 3",
    key: "1r5n42"
}], ["path", {
    d: "M5 6v4",
    key: "ilb8ba"
}], ["path", {
    d: "M19 14v4",
    key: "blhpug"
}], ["path", {
    d: "M10 2v2",
    key: "7u0qdc"
}], ["path", {
    d: "M7 8H3",
    key: "zfb6yr"
}], ["path", {
    d: "M21 16h-4",
    key: "1cnmox"
}], ["path", {
    d: "M11 3H9",
    key: "1obp7u"
}]]
  , G = l("wand-sparkles", z)
  , d = ["Neon Zeus controlling lightning in Tokyo", "A cybernetic Athena meditating on Mars", "Renaissance angels in a glitching dataverse", "Bioluminescent forest temple at dusk", "Vaporwave Olympus rising from the sea"];
function I() {
    const [n,s] = m.useState("")
      , [a,x] = m.useState(!1)
      , [r,p] = m.useState(null)
      , {add: g} = N()
      , h = t => {
        x(!0),
        p(null);
        const f = t.toLowerCase();
        let j = o.find(c => [c.category, ...c.tags, c.name].some(b => f.includes(b.toLowerCase()))) || o[Math.floor(Math.random() * o.length)];
        setTimeout( () => {
            p(j),
            x(!1)
        }
        , 2e3)
    }
      , y = () => {
        const t = d[Math.floor(Math.random() * d.length)];
        s(t),
        h(t)
    }
    ;
    return e.jsxs("div", {
        className: "glass rounded-3xl p-6 md:p-8 max-w-3xl mx-auto",
        children: [e.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [e.jsx("div", {
                className: "h-7 w-7 rounded-lg bg-primary/20 grid place-items-center",
                children: e.jsx(G, {
                    className: "h-4 w-4 text-primary"
                })
            }), e.jsx("span", {
                className: "text-xs uppercase tracking-[0.25em] text-muted-foreground",
                children: "Olympus Forge · Live AI Simulator"
            })]
        }), e.jsx("textarea", {
            value: n,
            onChange: t => s(t.target.value),
            rows: 2,
            placeholder: 'Describe your masterpiece — e.g. "Neon Zeus controlling lightning in Tokyo"',
            className: "w-full bg-input/60 border border-border focus:border-primary outline-none rounded-2xl px-4 py-3 text-sm resize-none transition focus:glow-primary"
        }), e.jsxs("div", {
            className: "mt-3 flex flex-wrap items-center gap-2",
            children: [e.jsxs("button", {
                onClick: () => h(n || d[0]),
                disabled: a,
                className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 disabled:opacity-60 glow-primary",
                children: [a ? e.jsx(S, {
                    className: "h-4 w-4 animate-spin"
                }) : e.jsx(u, {
                    className: "h-4 w-4"
                }), a ? "Forging…" : "Generate"]
            }), e.jsxs("button", {
                onClick: y,
                disabled: a,
                className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary/70 text-sm font-medium",
                children: [e.jsx(q, {
                    className: "h-4 w-4"
                }), " Surprise Me"]
            }), e.jsx("div", {
                className: "hidden sm:flex flex-wrap gap-1.5 ml-1",
                children: d.slice(0, 2).map(t => e.jsx("button", {
                    onClick: () => {
                        s(t)
                    }
                    ,
                    className: "text-[11px] px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
                    children: t
                }, t))
            })]
        }), a && e.jsxs("div", {
            className: "mt-6 aspect-[16/9] rounded-2xl bg-secondary/40 grid place-items-center overflow-hidden relative",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-aurora opacity-60"
            }), e.jsxs("div", {
                className: "relative flex flex-col items-center gap-3",
                children: [e.jsx("div", {
                    className: "h-12 w-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin"
                }), e.jsx("p", {
                    className: "text-sm text-muted-foreground font-mono",
                    children: "Channeling the Muses…"
                })]
            })]
        }), r && !a && e.jsxs("div", {
            className: "mt-6 grid sm:grid-cols-[1fr_1fr] gap-4 animate-fade-up",
            children: [e.jsxs("div", {
                className: "relative rounded-2xl overflow-hidden aspect-[4/5] glow-primary",
                children: [e.jsx("img", {
                    src: v(r.seed, 800, 1e3),
                    alt: r.name,
                    className: "h-full w-full object-cover"
                }), e.jsxs("span", {
                    className: "absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-background/70 backdrop-blur",
                    children: ["Forged · ", r.category]
                })]
            }), e.jsxs("div", {
                className: "flex flex-col justify-between",
                children: [e.jsxs("div", {
                    children: [e.jsx("div", {
                        className: "text-xs text-muted-foreground uppercase tracking-wider",
                        children: "The Forge revealed"
                    }), e.jsx("h3", {
                        className: "font-display text-2xl font-bold mt-1",
                        children: r.name
                    }), e.jsx("p", {
                        className: "text-sm text-muted-foreground mt-2 line-clamp-4",
                        children: r.description
                    })]
                }), e.jsxs("div", {
                    className: "mt-4 flex flex-wrap items-center gap-3",
                    children: [e.jsxs("div", {
                        children: [e.jsx("div", {
                            className: "text-[10px] uppercase text-muted-foreground tracking-wider",
                            children: "From"
                        }), e.jsx("div", {
                            className: "font-display text-2xl font-bold text-gold",
                            children: k(w(r, "Medium"))
                        })]
                    }), e.jsxs("button", {
                        onClick: () => g(r.id, "Medium", "Portrait"),
                        className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90",
                        children: [e.jsx(M, {
                            className: "h-4 w-4"
                        }), " Add to Cart"]
                    }), e.jsx(i, {
                        to: "/product/$id",
                        params: {
                            id: r.id
                        },
                        className: "px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary/70 text-sm font-medium",
                        children: "View Details"
                    })]
                })]
            })]
        })]
    })
}
function W() {
    const n = o.slice(0, 8);
    return e.jsxs("div", {
        children: [e.jsxs("section", {
            className: "relative overflow-hidden",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-aurora opacity-90 pointer-events-none"
            }), e.jsx("div", {
                className: "absolute inset-0 bg-grid opacity-40 pointer-events-none"
            }), e.jsxs("div", {
                className: "relative max-w-7xl mx-auto px-6 pt-12 pb-20 md:pt-20 md:pb-28",
                children: [e.jsxs("div", {
                    className: "text-center max-w-3xl mx-auto",
                    children: [e.jsxs("span", {
                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.25em]",
                        children: [e.jsx(u, {
                            className: "h-3 w-3 text-gold"
                        }), " Silicon Valley meets Mount Olympus"]
                    }), e.jsxs("h1", {
                        className: "font-display text-5xl md:text-7xl font-bold mt-6 leading-[1.05]",
                        children: ["Where the ", e.jsx("span", {
                            className: "text-gradient",
                            children: "Pantheon"
                        }), e.jsx("br", {}), " meets the ", e.jsx("span", {
                            className: "text-gradient",
                            children: "Algorithm"
                        })]
                    }), e.jsx("p", {
                        className: "mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto",
                        children: "A curated atelier of high-fidelity AI masterpieces — sculpted by neural muses, framed for your walls."
                    }), e.jsxs("div", {
                        className: "mt-7 flex flex-wrap justify-center gap-3",
                        children: [e.jsxs(i, {
                            to: "/shop",
                            className: "px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 glow-primary flex items-center gap-2",
                            children: ["Enter the Gallery ", e.jsx(L, {
                                className: "h-4 w-4"
                            })]
                        }), e.jsx("a", {
                            href: "#forge",
                            className: "px-6 py-3 rounded-xl glass hover:bg-secondary/40 font-medium",
                            children: "Try the Forge"
                        })]
                    })]
                }), e.jsx("div", {
                    id: "forge",
                    className: "mt-16 scroll-mt-24",
                    children: e.jsx(I, {})
                })]
            })]
        }), e.jsxs("section", {
            className: "max-w-7xl mx-auto px-6 py-16",
            children: [e.jsxs("div", {
                className: "flex items-end justify-between mb-8",
                children: [e.jsxs("div", {
                    children: [e.jsx("span", {
                        className: "text-xs uppercase tracking-[0.25em] text-muted-foreground",
                        children: "Pantheons"
                    }), e.jsx("h2", {
                        className: "font-display text-3xl md:text-4xl font-bold mt-2",
                        children: "Seven Worlds, One Atelier"
                    })]
                }), e.jsx(i, {
                    to: "/shop",
                    className: "hidden md:inline text-sm text-primary hover:underline",
                    children: "View all artworks →"
                })]
            }), e.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3",
                children: C.map( (s, a) => e.jsxs(i, {
                    to: "/shop",
                    search: {
                        cat: s
                    },
                    className: "group relative aspect-square rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/60 transition animate-fade-up",
                    style: {
                        animationDelay: `${a * 50}ms`
                    },
                    children: [e.jsx("img", {
                        src: `https://picsum.photos/seed/cat-${s}/400/400`,
                        alt: s,
                        className: "absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                    }), e.jsx("div", {
                        className: "absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent"
                    }), e.jsx("div", {
                        className: "absolute inset-0 grid place-items-center",
                        children: e.jsx("span", {
                            className: "font-display font-bold text-lg md:text-xl text-center px-2",
                            children: s
                        })
                    })]
                }, s))
            })]
        }), e.jsxs("section", {
            className: "max-w-7xl mx-auto px-6 py-12",
            children: [e.jsx("div", {
                className: "flex items-end justify-between mb-8",
                children: e.jsxs("div", {
                    children: [e.jsx("span", {
                        className: "text-xs uppercase tracking-[0.25em] text-muted-foreground",
                        children: "Currently in the Atelier"
                    }), e.jsx("h2", {
                        className: "font-display text-3xl md:text-4xl font-bold mt-2",
                        children: "Featured Masterpieces"
                    })]
                })
            }), e.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
                children: n.map( (s, a) => e.jsx(P, {
                    product: s,
                    index: a
                }, s.id))
            })]
        }), e.jsx("section", {
            className: "max-w-7xl mx-auto px-6 py-16",
            children: e.jsx("div", {
                className: "grid md:grid-cols-3 gap-5",
                children: [{
                    icon: F,
                    t: "Neural Provenance",
                    d: "Every piece signed and traceable to its generative model and prompt lineage."
                }, {
                    icon: $,
                    t: "Museum-grade Print",
                    d: "Giclée on archival cotton rag with century-grade pigment inks."
                }, {
                    icon: R,
                    t: "Olympus Guarantee",
                    d: "Lifetime resurfacing, free reframing, no-questions returns within 30 days."
                }].map(s => e.jsxs("div", {
                    className: "glass rounded-2xl p-6",
                    children: [e.jsx("div", {
                        className: "h-10 w-10 rounded-xl bg-primary/15 text-primary grid place-items-center mb-3",
                        children: e.jsx(s.icon, {
                            className: "h-5 w-5"
                        })
                    }), e.jsx("h3", {
                        className: "font-display text-lg font-semibold",
                        children: s.t
                    }), e.jsx("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: s.d
                    })]
                }, s.t))
            })
        }), e.jsxs("section", {
            className: "max-w-5xl mx-auto px-6 py-16 text-center",
            children: [e.jsx("span", {
                className: "text-xs uppercase tracking-[0.25em] text-muted-foreground",
                children: "About Olympus"
            }), e.jsxs("h2", {
                className: "font-display text-3xl md:text-5xl font-bold mt-3",
                children: ["Bridging ", e.jsx("span", {
                    className: "text-gradient",
                    children: "classical imagination"
                }), " with modern intelligence."]
            }), e.jsxs("p", {
                className: "mt-5 text-muted-foreground md:text-lg max-w-3xl mx-auto",
                children: ["Olympus Labs was founded by ", e.jsx("span", {
                    className: "text-foreground font-medium",
                    children: "Prajan Radhakrishnan"
                }), " to bridge the gap between classical human imagination and modern artificial intelligence, creating a curated gallery of high-fidelity digital masterpieces across human history and futuristic visions."]
            }), e.jsx(i, {
                to: "/contact",
                className: "inline-block mt-7 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/70 font-medium",
                children: "Meet the Founder"
            })]
        })]
    })
}
export {W as component};
