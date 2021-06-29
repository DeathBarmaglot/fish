/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='https://raw.githubusercontent.com/DeathBarmaglot/fish/main/images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'f',
                type: 'image',
                rect: ['-11px', '-6px','323px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.png",'0px','0px']
            },
            {
                id: 'hook',
                type: 'image',
                rect: ['155px', '-18px','146px','178px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hook.png",'0px','0px']
            },
            {
                id: 'ref',
                type: 'image',
                rect: ['325px', '-11px','106px','201px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ref.png",'0px','0px']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['82px', '73px','97px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['14px', '-47px','430px','310px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['31px', '-55px','390px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            },
            {
                id: 'a0',
                type: 'image',
                rect: ['-61px', '-2px','410px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a0.svg",'0px','0px'],
                transform: [[],['6'],[],['0.27','0.27']]
            },
            {
                id: 'list',
                type: 'image',
                rect: ['-61px', '-26px','410px','270px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"list.svg",'0px','0px'],
                transform: [[],['7'],[],['0.27','0.27']]
            },
            {
                id: 'loz',
                type: 'image',
                rect: ['-156px', '-33px','620px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"loz.svg",'0px','0px'],
                transform: [[],[],[],['0.35','0.35']]
            },
            {
                id: 'shop',
                type: 'image',
                rect: ['-354px', '-56px','1020px','170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shop.svg",'0px','0px'],
                transform: [[],[],[],['0.25','0.25']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '-55px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["style", "left", '31px']
            ],
            "${_shop}": [
                ["style", "top", '-56px'],
                ["style", "clip", [0,1020,170,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '0.25'],
                ["style", "background-position", [0,192], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '1'],
                ["style", "left", '-354px']
            ],
            "${_f}": [
                ["style", "top", '-6px'],
                ["style", "height", '190px'],
                ["style", "opacity", '0'],
                ["style", "left", '-11px'],
                ["style", "width", '323px']
            ],
            "${_loz}": [
                ["style", "top", '-33px'],
                ["transform", "scaleY", '0.35'],
                ["transform", "scaleX", '0.35'],
                ["style", "opacity", '1'],
                ["style", "left", '-156px'],
                ["style", "background-position", [0,131.42857142857], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_a0}": [
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0.27'],
                ["transform", "rotateZ", '6deg'],
                ["transform", "scaleX", '0.27'],
                ["style", "opacity", '0'],
                ["style", "left", '-61px']
            ],
            "${_a1}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '0.25'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["style", "left", '14px']
            ],
            "${_list}": [
                ["style", "top", '-26px'],
                ["transform", "scaleY", '0.27'],
                ["transform", "rotateZ", '7deg'],
                ["transform", "scaleX", '0.27'],
                ["style", "opacity", '0'],
                ["style", "left", '-61px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_hook}": [
                ["style", "top", '-191px'],
                ["style", "height", '178px'],
                ["style", "opacity", '1'],
                ["style", "left", '155px'],
                ["style", "width", '146px']
            ],
            "${_logo}": [
                ["style", "top", '73px'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '82px']
            ],
            "${_ref}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.3'],
                ["style", "opacity", '1'],
                ["style", "left", '325px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17009,
            autoPlay: true,
            timeline: [
                { id: "eid70", tween: [ "transform", "${_logo}", "rotateZ", '420deg', { fromValue: '0deg'}], position: 905, duration: 864, easing: "easeInOutCubic" },
                { id: "eid98", tween: [ "transform", "${_logo}", "rotateZ", '0deg', { fromValue: '420deg'}], position: 9841, duration: 864, easing: "easeInOutCubic" },
                { id: "eid81", tween: [ "transform", "${_ref}", "scaleY", '0.8', { fromValue: '0.3'}], position: 8526, duration: 449, easing: "easeInOutQuad" },
                { id: "eid8", tween: [ "style", "${_hook}", "left", '163px', { fromValue: '155px'}], position: 2354, duration: 884, easing: "easeInOutElastic" },
                { id: "eid154", tween: [ "style", "${_hook}", "left", '63px', { fromValue: '71px'}], position: 9440, duration: 310, easing: "easeOutQuad" },
                { id: "eid155", tween: [ "style", "${_hook}", "left", '78px', { fromValue: '63px'}], position: 10073, duration: 310, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_loz}", "opacity", '0', { fromValue: '1'}], position: 8267, duration: 259, easing: "swing" },
                { id: "eid72", tween: [ "transform", "${_logo}", "scaleX", '1', { fromValue: '0'}], position: 905, duration: 864, easing: "easeInOutCubic" },
                { id: "eid95", tween: [ "transform", "${_logo}", "scaleX", '0', { fromValue: '1'}], position: 9841, duration: 864, easing: "easeInOutCubic" },
                { id: "eid69", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 1150, duration: 415, easing: "swing" },
                { id: "eid96", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 10045, duration: 415, easing: "swing" },
                { id: "eid172", tween: [ "style", "${_a0}", "opacity", '1', { fromValue: '0'}], position: 13705, duration: 460, easing: "easeInOutCubic" },
                { id: "eid173", tween: [ "style", "${_a0}", "opacity", '0', { fromValue: '1'}], position: 16000, duration: 259, easing: "swing" },
                { id: "eid17", tween: [ "style", "${_a1}", "opacity", '1', { fromValue: '0'}], position: 5321, duration: 415, easing: "swing" },
                { id: "eid18", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 8206, duration: 415, easing: "swing" },
                { id: "eid31", tween: [ "style", "${_shop}", "opacity", '0', { fromValue: '1'}], position: 5063, duration: 259, easing: "swing" },
                { id: "eid161", tween: [ "style", "${_shop}", "opacity", '1', { fromValue: '0'}], position: 8526, duration: 259, easing: "swing" },
                { id: "eid175", tween: [ "style", "${_shop}", "opacity", '0', { fromValue: '1'}], position: 16616, duration: 259, easing: "swing" },
                { id: "eid3", tween: [ "style", "${_hook}", "height", '166px', { fromValue: '178px'}], position: 2354, duration: 884, easing: "easeInOutElastic" },
                { id: "eid37", tween: [ "style", "${_loz}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,131.42857142857]}], position: 5226, duration: 510, easing: "swing" },
                { id: "eid174", tween: [ "style", "${_ref}", "opacity", '0', { fromValue: '1'}], position: 16258, duration: 259, easing: "swing" },
                { id: "eid157", tween: [ "style", "${_list}", "opacity", '1', { fromValue: '0'}], position: 11290, duration: 460, easing: "easeInOutCubic" },
                { id: "eid171", tween: [ "style", "${_list}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 259, easing: "swing" },
                { id: "eid167", tween: [ "style", "${_hook}", "opacity", '0', { fromValue: '1'}], position: 8621, duration: 259, easing: "swing" },
                { id: "eid169", tween: [ "style", "${_hook}", "opacity", '1', { fromValue: '0'}], position: 10293, duration: 259, easing: "swing" },
                { id: "eid176", tween: [ "style", "${_hook}", "opacity", '0', { fromValue: '1'}], position: 16417, duration: 259, easing: "swing" },
                { id: "eid164", tween: [ "style", "${_shop}", "clip", [0,1020,118,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1020,170,0]}], position: 8844, duration: 209, easing: "swing" },
                { id: "eid14", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0'}], position: 2354, duration: 415, easing: "swing" },
                { id: "eid16", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 4811, duration: 415, easing: "swing" },
                { id: "eid4", tween: [ "style", "${_hook}", "width", '136px', { fromValue: '146px'}], position: 2354, duration: 884, easing: "easeInOutElastic" },
                { id: "eid30", tween: [ "style", "${_shop}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,192]}], position: 1565, duration: 680, easing: "easeInOutQuad" },
                { id: "eid159", tween: [ "style", "${_shop}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,192]}], position: 8526, duration: 680, easing: "easeInOutQuad" },
                { id: "eid74", tween: [ "transform", "${_logo}", "scaleY", '1', { fromValue: '0'}], position: 905, duration: 864, easing: "easeInOutCubic" },
                { id: "eid97", tween: [ "transform", "${_logo}", "scaleY", '0', { fromValue: '1'}], position: 9841, duration: 864, easing: "easeInOutCubic" },
                { id: "eid79", tween: [ "transform", "${_ref}", "scaleX", '0.8', { fromValue: '0.3'}], position: 8526, duration: 449, easing: "easeInOutQuad" },
                { id: "eid77", tween: [ "style", "${_ref}", "left", '193px', { fromValue: '325px'}], position: 8389, duration: 680, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 415, easing: "swing" },
                { id: "eid177", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 16750, duration: 259, easing: "swing" },
                { id: "eid12", tween: [ "style", "${_hook}", "top", '-6px', { fromValue: '-191px'}], position: 2354, duration: 884, easing: "easeOutElastic" },
                { id: "eid9", tween: [ "style", "${_hook}", "top", '-178px', { fromValue: '-6px'}], position: 8702, duration: 1048, easing: "easeOutElastic" },
                { id: "eid102", tween: [ "style", "${_hook}", "top", '-6px', { fromValue: '-178px'}], position: 10364, duration: 1048, easing: "easeOutElastic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-15074700");
