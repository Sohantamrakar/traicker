!(function () {
    var e = {
            864: function () {
                !(function () {
                    const e = {
                        init() {
                            new ApexCharts(document.querySelector("#bsb-chart-9"), {
                                series: [
                                    {
                                        name: "Projects",
                                        data: [
                                            { x: "Jul", y: 2489 },
                                            { x: "Aug", y: 3168 },
                                            { x: "Sep", y: 3587 },
                                            { x: "Oct", y: 3154 },
                                            { x: "Nov", y: 3565 },
                                            { x: "Dec", y: 4221 },
                                        ],
                                    },
                                ],
                                chart: { type: "area", sparkline: { enabled: !0 } },
                                xaxis: { type: "category" },
                                stroke: { curve: "smooth" },
                                fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.12, opacityTo: 0, stops: [0, 90, 100] } },
                                colors: ["var(--bs-primary)"],
                                markers: { size: 0 },
                                tooltip: { theme: "dark" },
                            }).render();

                            new ApexCharts(document.querySelector("#bsb-chart-n"), {
                                series: [
                                    {
                                        name: "Projects",
                                        data: [
                                            { x: "Jul", y: 2489 },
                                            { x: "Aug", y: 3168 },
                                            { x: "Sep", y: 3587 },
                                            { x: "Oct", y: 3154 },
                                            { x: "Nov", y: 3565 },
                                            { x: "Dec", y: 4221 },
                                        ],
                                    },
                                ],
                                chart: { type: "area", sparkline: { enabled: !0 } },
                                xaxis: { type: "category" },
                                stroke: { curve: "smooth" },
                                fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.12, opacityTo: 0, stops: [0, 90, 100] } },
                                colors: ["var(--bs-info)"],
                                markers: { size: 0 },
                                tooltip: { theme: "dark" },
                            }).render();

                            new ApexCharts(document.querySelector("#bsb-chart-m"), {
                                series: [
                                    {
                                        name: "Projects",
                                        data: [
                                            { x: "Jul", y: 2489 },
                                            { x: "Aug", y: 3168 },
                                            { x: "Sep", y: 3587 },
                                            { x: "Oct", y: 3154 },
                                            { x: "Nov", y: 3565 },
                                            { x: "Dec", y: 4221 },
                                        ],
                                    },
                                ],
                                chart: { type: "area", sparkline: { enabled: !0 } },
                                xaxis: { type: "category" },
                                stroke: { curve: "smooth" },
                                fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.12, opacityTo: 0, stops: [0, 90, 100] } },
                                colors: ["var(--bs-warning)"],
                                markers: { size: 0 },
                                tooltip: { theme: "dark" },
                            }).render();
                        },
                    };
                    function t() {
                        e.init();
                    }
                    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t(), window.addEventListener("load", function () {}, !1);
                })();
            },
        },
        t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var a = (t[r] = { exports: {} });
        return e[r](a, a.exports, n), a.exports;
    }
    (n.n = function (e) {
        var t =
            e && e.__esModule
                ? function () {
                      return e.default;
                  }
                : function () {
                      return e;
                  };
        return n.d(t, { a: t }), t;
    }),
        (n.d = function (e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (function () {
            "use strict";
            n(864);
        })();
})();
