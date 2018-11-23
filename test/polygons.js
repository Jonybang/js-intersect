const solution = require('../src');
const assert = require('assert');

describe("intersect case 1", function () {
    it("returns polygons intersection", function () {
        const fig1 = [
            [1.230889102444052694, 104.508869033306837081],
            [1.201198389753699301, 104.507961440831422805],
            [1.200340250506997107, 104.532680679112672805],
            [1.209607785567641256, 104.532165359705686569],//---
            [1.2108092475682497, 104.518947433680295944],
            [1.221278244629502294, 104.517917465418577194],//---
            [1.221964722499251363, 104.533367324620485305],
            [1.2300309631973505, 104.534265864640474318]
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const fig2 = [
            [1.194818755611777304, 104.524910990148782728],
            [1.195333572104573248, 104.542420450598001478],
            [1.23137441463768482, 104.540703836828470228],
            [1.232232553884387014, 104.523194376379251478]// |
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const intersectResult = solution.intersect(fig1, fig2);
        assert.deepEqual(intersectResult, [
            [
                {x: 1.200619218, y: 104.5246449},
                {x: 1.200340250506997, y: 104.53268067911267},
                {x: 1.2096077855676413, y: 104.53216535970569},
                {x: 1.210331879, y: 104.5241992}
            ],
            [
                {x: 1.221534521, y: 104.5236852},
                {x: 1.2219647224992514, y: 104.53336732462049},
                {x: 1.2300309631973505, y: 104.53426586464047},
                {x: 1.230402223, y: 104.5232784}
            ]
        ]);
    });
});

describe("intersect case 2", function () {
    it("returns polygons intersection", function () {
        const fig1 = [
            [1.2154430989176035, 104.49491517618299],
            [1.2149281147867441, 104.51156632974744],
            [1.2056605797261, 104.51156632974744],
            [1.2044591177254915, 104.51946275308728],
            [1.1963928770273924, 104.51946275308728],
            [1.1957063991576433, 104.49680345132947]
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const fig2 = [
            [1.2065324652940035, 104.5116032101214],
            [1.1951483320444822, 104.51125787571073],
            [1.1958123464137316, 104.52563183382154],
            [1.206624498590827, 104.52494518831372]
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const intersectResult = solution.intersect(fig1, fig2);
        assert.deepEqual(intersectResult, [
            [
                {x: 1.205659, y: 104.5115767},
                {x: 1.2044591177254915, y: 104.51946275308728},
                {x: 1.1963928770273924, y: 104.51946275308728},
                {x: 1.196145221, y: 104.5112881}
            ]
        ]);
    });
});

describe("intersect case 3", function () {
    it("returns polygons intersection", function () {
        const fig1 = [
            [1.2303741183131933, 104.50938368216157],
            [1.2290011625736952, 104.53134862706065],
            [1.2077200133353472, 104.53096406534314],
            [1.2051455955952406, 104.50950605794787]
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const fig2 = [
            [1.2221363838762045, 104.51723115518689],
            [1.2334633525460958, 104.51808946207166],
            [1.2392984982579947, 104.53714387491345],
            [1.2224795389920473, 104.54624192789197],
            [1.218360671773553, 104.520492721349]
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const intersectResult = solution.intersect(fig1, fig2);
        assert.deepEqual(intersectResult, [
            [
                {x: 1.229847077, y: 104.5178154},
                {x: 1.2290011625736952, y: 104.53134862706065},
                {x: 1.22007138, y: 104.5311873},
                {x: 1.218360671773553, y: 104.520492721349},
                {x: 1.2221363838762045, y: 104.51723115518689}
            ]
        ]);
    });
});

describe("intersect case 4", function () {
    it("returns polygons intersection", function () {
        const fig1 = [
            [1.2291728239506483, 104.51007032766938],
            [1.2037726398557425, 104.50989866629243],
            [1.2036009784787893, 104.53199403360486],
            [1.227113390341401, 104.53336732462049]
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const fig2 = [
            [1.2314039189368486, 104.52323930338025],
            [1.2152714375406504, 104.52255265787244],
            [1.2126970198005438, 104.54298002645373],
            [1.2344931531697512, 104.54898850992322]
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const intersectResult = solution.intersect(fig1, fig2);
        assert.deepEqual(intersectResult, [
            [
                {x: 1.214004978, y: 104.5326017},
                {x: 1.227113390341401, y: 104.53336732462049},
                {x: 1.228021425, y: 104.5230953},
                {x: 1.2152714375406504, y: 104.52255265787244}
            ]
        ]);
    });
});


describe("intersect case 5", function () {
    it("returns polygons intersection", function () {
        const fig1 = [
            [1.2310605961829424, 104.49840137735009],
            [1.2307174410670996, 104.53272124752402],
            [1.2161295767873526, 104.53319566324353],
            [1.2163010705262423, 104.49714677408338]
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const fig2 = [
            [1.239641821011901, 104.50881941244006],
            [1.239641821011901, 104.51980607584119],
            [1.2046307791024446, 104.52135069295764],
            [1.2053172569721937, 104.50744612142444]
        ].map(point => {
            return {x: point[0], y: point[1]}
        });

        const intersectResult = solution.intersect(fig1, fig2);
        console.log(intersectResult)
        assert.deepEqual(intersectResult, [
            [
                {x: 1.230959902, y: 104.5084721},
                {x: 1.230842695, y: 104.5201943},
                {x: 1.216188352, y: 104.5208408},
                {x: 1.216249993, y: 104.5078835}
            ]
        ]);
    });
});


//
// describe("edgify", function() {
//   it("returns edges and points from polygons", function() {
//     assert.deepEqual(edgify(fig1, fig2), mesh);
//   });
// });
//
// describe("polygonate", function() {
//   it("returns nonintersecting polygons from edges", function() {
//     assert.deepEqual(polygonate(mesh), polygons);
//   });
// });
//
// describe("filterPolygons", function() {
//   it("returns polygons that satisfy condition: intersect", function() {
//     assert.deepEqual(filterPolygons(polygons, fig1, fig2, "intersect"), [polygons[1]]);
//   });
//   it("returns polygons that satisfy condition: cut1", function() {
//     assert.deepEqual(filterPolygons(polygons, fig1, fig2, "cut1"), [polygons[0]]);
//   });
//   it("returns polygons that satisfy condition: cut2", function() {
//     assert.deepEqual(filterPolygons(polygons, fig1, fig2, "cut2"), [polygons[2]]);
//   });
//   it("returns polygons that satisfy condition: sum", function() {
//     assert.deepEqual(filterPolygons(polygons, fig1, fig2, "sum"), polygons);
//   });
// });
//
// describe("polygonArea", function() {
//   it("returnes polygon area", function() {
//     assert.deepEqual(polygonArea(small), 0.5);
//   });
// });
//
// describe("removeSmallPolygons", function() {
//   it("returnes array without small polygons", function() {
//     assert.deepEqual(removeSmallPolygons(polygons.concat(small), 0.00000001), polygons);
//   });
// });
//
// describe("sortPoints", function() {
//   it("returns array of points sorted by t value", function() {
//     assert.deepEqual(sortPoints([{x: 1, y: 2, t: 3}, {x: 4, y: 5, t: 1}, {x: 6, y: 7, t: -1}]),
//      [{x: 6, y: 7, t: -1}, {x: 4, y: 5, t: 1}, {x: 1, y: 2, t: 3}]);
//   });
// });
//
// describe("findPointInsidePolygon", function() {
//   it("returns true if point is inside polygon", function() {
//     assert.deepEqual(findPointInsidePolygon({x: 200, y: 200}, fig1), true);
//   });
//   it("returns false if point is outside polygon", function() {
//     assert.deepEqual(findPointInsidePolygon({x: 50, y: 200}, fig1), false);
//   });
// });
//
// describe("getSize", function() {
//   it("returns size of polygon", function() {
//     assert.deepEqual(getSize(fig1), {x: {min: 100, max: 300}, y: {min: 150, max: 250}});
//   });
// });
//
// // describe("getPointInsidePolygon", function() {
//
// //   it("returns point located inside polygon 1", function() {
// //     assert.deepEqual(getPointInsidePolygon(fig1), {x: 200, y: 200});
// //   });
// //   it("returns point located inside polygon 2", function() {
// //     assert.deepEqual(getPointInsidePolygon(fig2), {x: 275, y: 200});
// //   });
// // });
//
// describe("checkPolygons", function() {
//   it("returns true if polygons are valid", function() {
//     assert.equal(checkPolygons(fig1, fig2), true);
//   });
//   it("returns false if first polygon is invalid", function() {
//     assert.equal(checkPolygons(fig1.slice(0, 2), fig2), false);
//   });
//   it("returns false if second polygon is invalid", function() {
//     assert.equal(checkPolygons(fig1, fig2.slice(0, 2)), false);
//   });
// });
//
// describe("getEdges", function() {
//   it("returns edges from polygon specified with points", function() {
//     assert.deepEqual(getEdges(fig1), [
//       [fig1[0], fig1[1]],
//       [fig1[1], fig1[2]],
//       [fig1[2], fig1[0]]
//     ]);
//   });
// });
//
// describe("pointExists", function() {
//   it("returns true if point exists in array", function() {
//     assert.deepEqual(pointExists(fig1[0], fig1), true);
//   });
//   it("returns false if point doesn't exist in array", function() {
//     assert.deepEqual(pointExists(fig2[0], fig1), false);
//   });
// });
//
// describe("edgeExists", function() {
//   it("returns true if edge exists in array", function() {
//     assert.deepEqual(edgeExists(edges[0], edges), true);
//   });
//   it("returns false if edge doesn't exist in array", function() {
//     assert.deepEqual(edgeExists([{x: 110, y: 220}, {x: 280, y: 180}], edges), false);
//   });
// });
//
// describe("equalEdges", function() {
//   it("returns true if edges have same points", function() {
//     assert.deepEqual(equalEdges(edges[0], edges[0]), true);
//   });
//   it("returns false if edges don't have same points", function() {
//     assert.deepEqual(equalEdges(edges[0], edges[1]), false);
//   });
// });
//
// describe("findEdgeIntersection", function() {
//   it("returns false if edges are parallel", function() {
//     assert.equal(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 3, y: 4}, {x: 5, y: 6}]), false);
//   });
//   it("returns false if edges don't intersect", function() {
//     assert.equal(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 1, y: 7}, {x: 3, y: 5}]), false);
//   });  
//   it("returns false if edges are collinear and don't intersect", function() {
//     assert.equal(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 6, y: 6}, {x: 8, y: 8}]), false);
//   });
//   it("returns point if edges are collinear and intersect at one endpoint", function() {
//     assert.deepEqual(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 4, y: 4}, {x: 6, y: 6}]),
//      [{x: 4, y: 4, t: 0.5}]);
//   });
//   it("returns two points if edges are collinear and intersect at two endpoints", function() {
//     assert.deepEqual(findEdgeIntersection([{x: 3, y: 3}, {x: 7, y: 7}], [{x: 4, y: 4}, {x: 6, y: 6}]),
//      [{x: 4, y: 4, t: 0.25}, {x: 6, y: 6, t: 0.75}]);
//   });
//   it("returns point if edges intersect", function() {
//     assert.deepEqual(findEdgeIntersection([{x: 3, y: 3}, {x: 5, y: 5}], [{x: 3, y: 5}, {x: 5, y: 3}]),
//      [{x: 4, y: 4, t: 0.5}]);
//   });  
// });
//
// describe("classifyPoint", function() {
//   it("point is at right", function() {
//     assert.deepEqual(classifyPoint({x: 5, y: 3}, [{x: 3, y: 3}, {x: 5, y: 5}]), {loc: "LEFT", theta: 315});
//   });
//   it("point is at left", function() {
//     assert.deepEqual(classifyPoint({x: 3, y: 5}, [{x: 3, y: 3}, {x: 5, y: 5}]), {loc: "RIGHT", theta: 45});
//   });
//   it("point is beyond", function() {
//     assert.deepEqual(classifyPoint({x: 6, y: 6}, [{x: 3, y: 3}, {x: 5, y: 5}]), {loc: "BEYOND", theta: 180});
//   });
//   it("point is between", function() {
//     assert.deepEqual(classifyPoint({x: 4, y: 4}, [{x: 3, y: 3}, {x: 5, y: 5}]), {loc: "BETWEEN", t: 0.5});
//   });
// });
//
// describe("getMidpoints", function() {
//   it("returns midpoints of edges", function() {
//     assert.deepEqual(getMidpoints([[{x: 3, y: 3}, {x: 5, y: 5}], [{x: -1, y: 2}, {x: 0, y: 4}]]),
//      [{x: 4, y: 4}, {x: -0.5, y: 3}]);
//   });
// });
//
// describe("polarAngle", function() {
//
//   it("returns false if edge has zero length", function() {
//     assert.equal(polarAngle([{x: 3, y: 3}, {x: 3, y: 3}]), false);
//   });
//
//   it("returns 45 if angle is 45", function() {
//     assert.equal(polarAngle([{x: 3, y: 3}, {x: 5, y: 5}]), 45);
//   });
//
//   it("returns 315 if angle is 315", function() {
//     assert.equal(polarAngle([{x: 0, y: 0}, {x: 5, y: -5}]), 315);
//   });
//
// });
//
// describe("polygonExists", function() {
//   it("returns false if polygons array is empty", function() {
//     assert.equal(polygonExists([fig2[0], fig1[1], fig1[2]], []), false);
//   });
//   it("returns false if polygon doesn't exist in array", function() {
//     assert.equal(polygonExists([fig2[0], fig1[1], fig1[2]], [fig1, fig2]), false);
//   });
//   it("returns true if polygon existsin array", function() {
//     assert.equal(polygonExists([fig1[0], fig1[1], fig1[2]], [fig1, fig2]), true);
//   });
// });
