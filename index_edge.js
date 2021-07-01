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
                id: 'fCopy',
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
                rect: ['80px', '66px','97px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
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
                transform: [[],[],[],['0.25','0.24706']]
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
                rect: ['49px', '61px','187px','99px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li1.png",'0px','0px'],
                transform: [[],['7'],[],['0.6','0.6']]
            },
            {
                id: 'li2',
                type: 'image',
                rect: ['61px', '64px','163px','95px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li2.png",'0px','0px'],
                transform: [[],['7'],[],['0.7','0.7']]
            },
            {
                id: 'li3',
                type: 'image',
                rect: ['75px', '72px','135px','79px','auto', 'auto'],
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
                id: 'fish',
                type: 'image',
                rect: ['287px', '-16px','14px','185px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fish.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_fish}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "left", '287px'],
                ["style", "background-position", [19.000244140625,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_shop}": [
                ["style", "top", '-56px'],
                ["transform", "scaleY", '0.24706'],
                ["style", "left", '-354px'],
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,1020,170,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,192], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_ref}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.3'],
                ["style", "opacity", '1'],
                ["style", "left", '325px']
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
            "${_hook}": [
                ["style", "top", '-191px'],
                ["style", "height", '178px'],
                ["style", "opacity", '1'],
                ["style", "left", '155px'],
                ["style", "width", '146px']
            ],
            "${_t}": [
                ["style", "top", '148px'],
                ["transform", "scaleY", '0.65'],
                ["transform", "scaleX", '0.65'],
                ["style", "opacity", '0'],
                ["style", "left", '-65px'],
                ["style", "background-position", [443.07692307692,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_ak}": [
                ["style", "top", '149px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "background-position", [380,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-58px']
            ],
            "${_li2}": [
                ["style", "top", '64px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '7deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '61px']
            ],
            "${_li3}": [
                ["style", "top", '72px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "rotateZ", '7deg'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '75px']
            ],
            "${_fCopy}": [
                ["style", "top", '-6px'],
                ["style", "height", '190px'],
                ["style", "opacity", '0'],
                ["style", "left", '-11px'],
                ["style", "width", '323px']
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
            "${_logo}": [
                ["style", "top", '66px'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '80px']
            ],
            "${_li1}": [
                ["style", "top", '61px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "rotateZ", '7deg'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0'],
                ["style", "left", '49px']
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
                { id: "eid74", tween: [ "transform", "${_logo}", "scaleY", '1', { fromValue: '0'}], position: 415, duration: 864, easing: "easeInOutCubic" },
                { id: "eid97", tween: [ "transform", "${_logo}", "scaleY", '0', { fromValue: '1'}], position: 8554, duration: 596, easing: "easeInOutCubic" },
                { id: "eid81", tween: [ "transform", "${_ref}", "scaleY", '0.8', { fromValue: '0.3'}], position: 8804, duration: 359, easing: "easeInOutQuad" },
                { id: "eid8", tween: [ "style", "${_hook}", "left", '163px', { fromValue: '155px'}], position: 1864, duration: 884, easing: "easeInOutElastic" },
                { id: "eid154", tween: [ "style", "${_hook}", "left", '63px', { fromValue: '71px'}], position: 8941, duration: 310, easing: "easeOutQuad" },
                { id: "eid155", tween: [ "style", "${_hook}", "left", '78px', { fromValue: '63px'}], position: 10064, duration: 310, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_loz}", "opacity", '0', { fromValue: '1'}], position: 7768, duration: 259, easing: "swing" },
                { id: "eid72", tween: [ "transform", "${_logo}", "scaleX", '1', { fromValue: '0'}], position: 415, duration: 864, easing: "easeInOutCubic" },
                { id: "eid95", tween: [ "transform", "${_logo}", "scaleX", '0', { fromValue: '1'}], position: 8554, duration: 596, easing: "easeInOutCubic" },
                { id: "eid178", tween: [ "style", "${_fCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 415, easing: "swing" },
                { id: "eid179", tween: [ "style", "${_fCopy}", "opacity", '0', { fromValue: '1'}], position: 20492, duration: 259, easing: "swing" },
                { id: "eid226", tween: [ "style", "${_fish}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [19.000244140625,0]}], position: 9294, duration: 956 },
                { id: "eid180", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 864, duration: 415, easing: "swing" },
                { id: "eid194", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 8286, duration: 415, easing: "swing" },
                { id: "eid186", tween: [ "style", "${_t}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [443.07692307692,0]}], position: 834, duration: 519, easing: "swing" },
                { id: "eid3", tween: [ "style", "${_hook}", "height", '166px', { fromValue: '178px'}], position: 1864, duration: 884, easing: "easeInOutElastic" },
                { id: "eid37", tween: [ "style", "${_loz}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,131.42857142857]}], position: 4925, duration: 510, easing: "swing" },
                { id: "eid69", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 660, duration: 415, easing: "swing" },
                { id: "eid96", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 8695, duration: 286, easing: "swing" },
                { id: "eid31", tween: [ "style", "${_shop}", "opacity", '0', { fromValue: '1'}], position: 4762, duration: 259, easing: "swing" },
                { id: "eid161", tween: [ "style", "${_shop}", "opacity", '1', { fromValue: '0'}], position: 8027, duration: 259, easing: "swing" },
                { id: "eid175", tween: [ "style", "${_shop}", "opacity", '0', { fromValue: '1'}], position: 20358, duration: 259, easing: "swing" },
                { id: "eid221", tween: [ "style", "${_li2}", "opacity", '1', { fromValue: '0'}], position: 13750, duration: 460, easing: "easeInOutCubic" },
                { id: "eid222", tween: [ "style", "${_li2}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 259, easing: "swing" },
                { id: "eid199", tween: [ "style", "${_ak}", "background-position", [-716.66625976563,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [380,0]}], position: 9150, duration: 10663 },
                { id: "eid183", tween: [ "style", "${_a12}", "opacity", '1', { fromValue: '0'}], position: 2208, duration: 415, easing: "swing" },
                { id: "eid184", tween: [ "style", "${_a12}", "opacity", '0', { fromValue: '1'}], position: 4510, duration: 415, easing: "swing" },
                { id: "eid174", tween: [ "style", "${_ref}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 259, easing: "swing" },
                { id: "eid4", tween: [ "style", "${_hook}", "width", '136px', { fromValue: '146px'}], position: 1864, duration: 884, easing: "easeInOutElastic" },
                { id: "eid79", tween: [ "transform", "${_ref}", "scaleX", '0.8', { fromValue: '0.3'}], position: 8804, duration: 359, easing: "easeInOutQuad" },
                { id: "eid30", tween: [ "style", "${_shop}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,192]}], position: 1075, duration: 680, easing: "easeInOutQuad" },
                { id: "eid159", tween: [ "style", "${_shop}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,192]}], position: 8027, duration: 680, easing: "easeInOutQuad" },
                { id: "eid70", tween: [ "transform", "${_logo}", "rotateZ", '420deg', { fromValue: '0deg'}], position: 415, duration: 864, easing: "easeInOutCubic" },
                { id: "eid98", tween: [ "transform", "${_logo}", "rotateZ", '0deg', { fromValue: '420deg'}], position: 8554, duration: 596, easing: "easeInOutCubic" },
                { id: "eid216", tween: [ "style", "${_li1}", "opacity", '1', { fromValue: '0'}], position: 11281, duration: 460, easing: "easeInOutCubic" },
                { id: "eid217", tween: [ "style", "${_li1}", "opacity", '0', { fromValue: '1'}], position: 13491, duration: 259, easing: "swing" },
                { id: "eid167", tween: [ "style", "${_hook}", "opacity", '0', { fromValue: '1'}], position: 8122, duration: 259, easing: "swing" },
                { id: "eid169", tween: [ "style", "${_hook}", "opacity", '1', { fromValue: '0'}], position: 10284, duration: 259, easing: "swing" },
                { id: "eid176", tween: [ "style", "${_hook}", "opacity", '0', { fromValue: '1'}], position: 20159, duration: 259, easing: "swing" },
                { id: "eid77", tween: [ "style", "${_ref}", "left", '193px', { fromValue: '325px'}], position: 8695, duration: 543, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 415, easing: "swing" },
                { id: "eid177", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 20492, duration: 259, easing: "swing" },
                { id: "eid187", tween: [ "style", "${_a22}", "opacity", '1', { fromValue: '0'}], position: 5020, duration: 415, easing: "swing" },
                { id: "eid188", tween: [ "style", "${_a22}", "opacity", '0', { fromValue: '1'}], position: 7707, duration: 415, easing: "swing" },
                { id: "eid12", tween: [ "style", "${_hook}", "top", '-6px', { fromValue: '-191px'}], position: 1864, duration: 884, easing: "easeOutElastic" },
                { id: "eid9", tween: [ "style", "${_hook}", "top", '-178px', { fromValue: '-6px'}], position: 8203, duration: 1048, easing: "easeOutElastic" },
                { id: "eid102", tween: [ "style", "${_hook}", "top", '-6px', { fromValue: '-178px'}], position: 10355, duration: 1048, easing: "easeOutElastic" },
                { id: "eid164", tween: [ "style", "${_shop}", "clip", [0,1020,109.90480041503906,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1020,170,0]}], position: 8345, duration: 209, easing: "swing" },
                { id: "eid223", tween: [ "style", "${_li3}", "opacity", '1', { fromValue: '0'}], position: 17259, duration: 460, easing: "easeInOutCubic" },
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
