var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18000",
        "ok": "14291",
        "ko": "3709"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "303",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "60006",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "9382",
        "ok": "11817",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11115",
        "ok": "11262",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5422",
        "ok": "7831",
        "ko": "0"
    },
    "percentiles2": {
        "total": "13162",
        "ok": "16218",
        "ko": "0"
    },
    "percentiles3": {
        "total": "33752",
        "ok": "36363",
        "ko": "0"
    },
    "percentiles4": {
        "total": "49149",
        "ok": "50689",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 362,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 328,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13601,
        "percentage": 76
    },
    "group4": {
        "name": "failed",
        "count": 3709,
        "percentage": 21
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "19.846",
        "ok": "15.756",
        "ko": "4.089"
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
        "ok": "14291",
        "ko": "3709"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "303",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "60006",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "9382",
        "ok": "11817",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11115",
        "ok": "11262",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5422",
        "ok": "7831",
        "ko": "0"
    },
    "percentiles2": {
        "total": "13162",
        "ok": "16218",
        "ko": "0"
    },
    "percentiles3": {
        "total": "33752",
        "ok": "36363",
        "ko": "0"
    },
    "percentiles4": {
        "total": "49149",
        "ok": "50689",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 362,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 328,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13601,
        "percentage": 76
    },
    "group4": {
        "name": "failed",
        "count": 3709,
        "percentage": 21
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "19.846",
        "ok": "15.756",
        "ko": "4.089"
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
