$mapcontainer = $(".container");
$mapcontainer.mapael({
    map: {
        name: "arabworld2",
        defaultArea: {
            attrs: {
                // fill: "#343434"
                fill: "#f0f0f0"
                , stroke: "#e0e0e0"
                , "stroke-width": 0.2
                , "stroke-linejoin": "round"
            }
            , attrsHover: {
                fill: '#f0f0f0',
                stroke: "#e0e0e0",
                animDuration: 400
            },
            tooltip: {
                content: function () {
                    return '<strong>' + state + '</strong>';
                }
            },
            eventHandlers: {
                mouseover: function (e, id) {
                    state = id;
                }
            }
        }


        // defaultPlot: {
        //     size: 17,
        //     attrs: {
        //         //fill: Sing.colors['brand-warning'],
        //         stroke: "#fff",
        //         "stroke-width": 0.2,
        //         "stroke-linejoin": "round"
        //     },
        //     attrsHover: {
        //         "stroke-width": 0.1,
        //         animDuration: 100
        //     }
        // },
        // zoom: {
        //     enabled: false,
        //     step: 0.75
        // }
    },
    // Customize some areas of the map
    areas: {
        // "eg": {
        //     text: {content: "Morbihan", attrs: {"font-size": 10}},
        //     tooltip: {content: "<b>Morbihan</b> <br /> Bretagne"}
        // },
        "eg": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "ly": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "dz": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "ma": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "sd-": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "ps": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "lb-": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "tn": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "eh": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "jo": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "sy": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "iq": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "sa": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "qa": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "bh": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "kw": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "ae": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "om": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "ye": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}},
        "hm": {attrs: {fill: "#646464"}, attrsHover: {fill: "#4d9c58"}}
    }
});