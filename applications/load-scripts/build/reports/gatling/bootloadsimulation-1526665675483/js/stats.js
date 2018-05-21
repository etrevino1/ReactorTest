var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18000",
        "ok": "14398",
        "ko": "3602"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "302",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59946",
        "ok": "59946",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "9436",
        "ok": "11796",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11085",
        "ok": "11215",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5477",
        "ok": "8029",
        "ko": "0"
    },
    "percentiles2": {
        "total": "13738",
        "ok": "16229",
        "ko": "0"
    },
    "percentiles3": {
        "total": "33529",
        "ok": "36108",
        "ko": "0"
    },
    "percentiles4": {
        "total": "48077",
        "ok": "49431",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 418,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 525,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13455,
        "percentage": 75
    },
    "group4": {
        "name": "failed",
        "count": 3602,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20.202",
        "ok": "16.159",
        "ko": "4.043"
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
        "total": "18000",
        "ok": "14398",
        "ko": "3602"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "302",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59946",
        "ok": "59946",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "9436",
        "ok": "11796",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11085",
        "ok": "11215",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5477",
        "ok": "8029",
        "ko": "0"
    },
    "percentiles2": {
        "total": "13738",
        "ok": "16229",
        "ko": "0"
    },
    "percentiles3": {
        "total": "33529",
        "ok": "36108",
        "ko": "0"
    },
    "percentiles4": {
        "total": "48077",
        "ok": "49431",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 418,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 525,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13455,
        "percentage": 75
    },
    "group4": {
        "name": "failed",
        "count": 3602,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20.202",
        "ok": "16.159",
        "ko": "4.043"
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
