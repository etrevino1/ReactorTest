var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "33384",
        "ok": "33384",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3723",
        "ok": "3723",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3188",
        "ok": "3188",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2810",
        "ok": "2810",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4921",
        "ok": "4921",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9622",
        "ok": "9622",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14948",
        "ok": "14948",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 265,
        "percentage": 9
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 211,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2524,
        "percentage": 84
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15.152",
        "ok": "15.152",
        "ko": "-"
    }
},
contents: {
"req_passthrough-mes-7f865": {
        type: "REQUEST",
        name: "passthrough-messages",
path: "passthrough-messages",
pathFormatted: "req_passthrough-mes-7f865",
stats: {
    "name": "passthrough-messages",
    "numberOfRequests": {
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "33384",
        "ok": "33384",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3723",
        "ok": "3723",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3188",
        "ok": "3188",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2810",
        "ok": "2810",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4921",
        "ok": "4921",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9622",
        "ok": "9622",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14948",
        "ok": "14948",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 265,
        "percentage": 9
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 211,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2524,
        "percentage": 84
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15.152",
        "ok": "15.152",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
