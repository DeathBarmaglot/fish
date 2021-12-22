/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

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
                rect: ['-4px', '-2px','313px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.png",'0px','0px']
            },
            {
                id: 'hook',
                type: 'image',
                rect: ['155px', '-18px','146px','178px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hook.png",'0px','0px']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['162px', '66px','97px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'loz',
                type: 'image',
                rect: ['-122px', '-32px','620px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"loz.svg",'0px','0px'],
                transform: [[],[],[],['0.35','0.35']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-65px', '148px','437px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.png",'0px','0px'],
                transform: [[],[],[],['0.65','0.65']]
            },
            {
                id: 'a12',
                type: 'image',
                rect: ['154px', '48px','159px','118px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.png",'0px','0px'],
                transform: [[],[],[],['0.7','0.7']]
            },
            {
                id: 'a22',
                type: 'image',
                rect: ['139px', '54px','172px','115px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.png",'0px','0px'],
                transform: [[],[],[],['0.7','0.7']]
            },
            {
                id: 'li1',
                type: 'image',
                rect: ['128px', '63px','187px','99px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li1.png",'0px','0px'],
                transform: [[],['7'],[],['0.6','0.6']]
            },
            {
                id: 'li2',
                type: 'image',
                rect: ['140px', '66px','163px','95px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li2.png",'0px','0px'],
                transform: [[],['7'],[],['0.7','0.7']]
            },
            {
                id: 'li3',
                type: 'image',
                rect: ['154px', '74px','135px','79px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li3.png",'0px','0px'],
                transform: [[],['7'],[],['0.7','0.7']]
            },
            {
                id: 'ak',
                type: 'image',
                rect: ['-58px', '149px','716px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ak.png",'380px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'shop2',
                type: 'image',
                rect: ['6px', '7px','286px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shop.png",'0px','0px'],
                transform: [[],[],[],['1.03','1.03']]
            },
            {
                id: 'akk',
                type: 'image',
                rect: ['302px', '67px','5px','81px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"akk.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '66px'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '162px']
            ],
            "${_akk}": [
                ["style", "top", '67px'],
                ["style", "height", '81px'],
                ["style", "left", '302px'],
                ["style", "width", '5px']
            ],
            "${_f}": [
                ["style", "top", '-2px'],
                ["style", "height", '184px'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px'],
                ["style", "width", '313px']
            ],
            "${_loz}": [
                ["style", "top", '-32px'],
                ["transform", "scaleY", '0.35'],
                ["transform", "scaleX", '0.35'],
                ["style", "opacity", '1'],
                ["style", "left", '-122px'],
                ["style", "background-position", [0,131.42857142857], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_shop2}": [
                ["style", "top", '7px'],
                ["transform", "scaleY", '1.03'],
                ["style", "background-position", [0,192], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1.03'],
                ["style", "opacity", '1'],
                ["style", "left", '6px'],
                ["style", "clip", [0,1020,170,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hook}": [
                ["style", "top", '-191px'],
                ["style", "height", '178px'],
                ["style", "opacity", '1'],
                ["style", "left", '155px'],
                ["style", "width", '146px']
            ],
            "${_ak}": [
                ["style", "top", '149px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "background-position", [380,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-58px']
            ],
            "${_li2}": [
                ["style", "top", '66px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '7deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '140px']
            ],
            "${_li3}": [
                ["style", "top", '74px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '7deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '154px']
            ],
            "${_t}": [
                ["style", "top", '148px'],
                ["transform", "scaleY", '0.65'],
                ["transform", "scaleX", '0.65'],
                ["style", "opacity", '0'],
                ["style", "left", '-65px'],
                ["style", "background-position", [443.07692307692,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_a12}": [
                ["style", "top", '48px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '154px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_a22}": [
                ["style", "top", '54px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '139px']
            ],
            "${_li1}": [
                ["style", "top", '63px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "rotateZ", '7deg'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0'],
                ["style", "left", '128px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            timeline: [
                { id: "eid70", tween: [ "transform", "${_logo}", "rotateZ", '420deg', { fromValue: '0deg'}], position: 8456, duration: 864, easing: "easeInOutCubic" },
                { id: "eid98", tween: [ "transform", "${_logo}", "rotateZ", '0deg', { fromValue: '420deg'}], position: 14500, duration: 596, easing: "easeInOutCubic" },
                { id: "eid8", tween: [ "style", "${_hook}", "left", '163px', { fromValue: '155px'}], position: 2354, duration: 884, easing: "easeInOutElastic" },
                { id: "eid154", tween: [ "style", "${_hook}", "left", '63px', { fromValue: '71px'}], position: 9275, duration: 310, easing: "easeOutQuad" },
                { id: "eid155", tween: [ "style", "${_hook}", "left", '157px', { fromValue: '63px'}], position: 14750, duration: 310, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_loz}", "opacity", '0', { fromValue: '1'}], position: 8258, duration: 259, easing: "swing" },
                { id: "eid72", tween: [ "transform", "${_logo}", "scaleX", '1', { fromValue: '0'}], position: 8456, duration: 864, easing: "easeInOutCubic" },
                { id: "eid95", tween: [ "transform", "${_logo}", "scaleX", '0', { fromValue: '1'}], position: 14500, duration: 596, easing: "easeInOutCubic" },
                { id: "eid69", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 8701, duration: 415, easing: "swing" },
                { id: "eid96", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 14641, duration: 286, easing: "swing" },
                { id: "eid180", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 1354, duration: 415, easing: "swing" },
                { id: "eid194", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 8776, duration: 415, easing: "swing" },
                { id: "eid186", tween: [ "style", "${_t}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [443.07692307692,0]}], position: 1324, duration: 519, easing: "swing" },
                { id: "eid3", tween: [ "style", "${_hook}", "height", '166px', { fromValue: '178px'}], position: 2354, duration: 884, easing: "easeInOutElastic" },
                { id: "eid37", tween: [ "style", "${_loz}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,131.42857142857]}], position: 5415, duration: 510, easing: "swing" },
                { id: "eid225", tween: [ "style", "${_shop2}", "opacity", '0', { fromValue: '1'}], position: 5156, duration: 259, easing: "swing" },
                { id: "eid226", tween: [ "style", "${_shop2}", "opacity", '1', { fromValue: '0'}], position: 8197, duration: 259, easing: "swing" },
                { id: "eid227", tween: [ "style", "${_shop2}", "opacity", '0', { fromValue: '1'}], position: 18793, duration: 259, easing: "swing" },
                { id: "eid167", tween: [ "style", "${_hook}", "opacity", '0', { fromValue: '1'}], position: 8456, duration: 259, easing: "swing" },
                { id: "eid169", tween: [ "style", "${_hook}", "opacity", '1', { fromValue: '0'}], position: 14970, duration: 259, easing: "swing" },
                { id: "eid176", tween: [ "style", "${_hook}", "opacity", '0', { fromValue: '1'}], position: 20159, duration: 259, easing: "swing" },
                { id: "eid199", tween: [ "style", "${_ak}", "background-position", [-716.66625976563,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [380,0]}], position: 8776, duration: 11940 },
                { id: "eid183", tween: [ "style", "${_a12}", "opacity", '1', { fromValue: '0'}], position: 2698, duration: 415, easing: "swing" },
                { id: "eid184", tween: [ "style", "${_a12}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 415, easing: "swing" },
                { id: "eid231", tween: [ "style", "${_akk}", "left", '292px', { fromValue: '302px'}], position: 9640, duration: 424, easing: "swing" },
                { id: "eid230", tween: [ "style", "${_shop2}", "clip", [0,1020,109.90480041503906,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1020,170,0]}], position: 8515, duration: 209, easing: "swing" },
                { id: "eid4", tween: [ "style", "${_hook}", "width", '136px', { fromValue: '146px'}], position: 2354, duration: 884, easing: "easeInOutElastic" },
                { id: "eid228", tween: [ "style", "${_shop2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,192]}], position: 0, duration: 680, easing: "easeInOutQuad" },
                { id: "eid229", tween: [ "style", "${_shop2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,192]}], position: 8197, duration: 680, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 415, easing: "swing" },
                { id: "eid177", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 20492, duration: 259, easing: "swing" },
                { id: "eid187", tween: [ "style", "${_a22}", "opacity", '1', { fromValue: '0'}], position: 5510, duration: 415, easing: "swing" },
                { id: "eid188", tween: [ "style", "${_a22}", "opacity", '0', { fromValue: '1'}], position: 8197, duration: 415, easing: "swing" },
                { id: "eid12", tween: [ "style", "${_hook}", "top", '-6px', { fromValue: '-191px'}], position: 2354, duration: 884, easing: "easeOutElastic" },
                { id: "eid9", tween: [ "style", "${_hook}", "top", '-178px', { fromValue: '-6px'}], position: 8537, duration: 1048, easing: "easeOutElastic" },
                { id: "eid102", tween: [ "style", "${_hook}", "top", '-6px', { fromValue: '-178px'}], position: 15041, duration: 1048, easing: "easeOutElastic" },
                { id: "eid74", tween: [ "transform", "${_logo}", "scaleY", '1', { fromValue: '0'}], position: 8456, duration: 864, easing: "easeInOutCubic" },
                { id: "eid97", tween: [ "transform", "${_logo}", "scaleY", '0', { fromValue: '1'}], position: 14500, duration: 596, easing: "easeInOutCubic" },
                { id: "eid223", tween: [ "style", "${_li3}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 460, easing: "easeInOutCubic" },
                { id: "eid224", tween: [ "style", "${_li3}", "opacity", '0', { fromValue: '1'}], position: 19554, duration: 259, easing: "swing" }            ]
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
