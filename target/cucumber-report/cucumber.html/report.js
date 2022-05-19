$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": : Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-:-search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;:-:-search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;:-:-search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Jeep",
        "Cherokee",
        "ACT-All",
        "$20,000"
      ],
      "line": 17,
      "id": "search-functionality;:-:-search-the-buy-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4798872500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": ": : Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-:-search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Cherokee\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"ACT-All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 80158000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 415076900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 154215500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1498178600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "HomePageStep.iSelectMake(String)"
});
formatter.result({
  "duration": 100900700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cherokee",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectModel(String)"
});
formatter.result({
  "duration": 84905700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT-All",
      "offset": 19
    }
  ],
  "location": "HomePageStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 48187700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 147462400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 69002900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "HomePageStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2782328400,
  "status": "passed"
});
formatter.after({
  "duration": 698187700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 31,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Jeep",
        "Cherokee",
        "ACT-All",
        "$20,000"
      ],
      "line": 32,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4877913500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select model \"Cherokee\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select location \"ACT-All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 34500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 173945200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickUsedLink()"
});
formatter.result({
  "duration": 102310200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "HomePageStep.iSelectMake(String)"
});
formatter.result({
  "duration": 2275894600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cherokee",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectModel(String)"
});
formatter.result({
  "duration": 144501300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT-All",
      "offset": 19
    }
  ],
  "location": "HomePageStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 62004100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "HomePageStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 78177900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 72869700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "HomePageStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 874935700,
  "status": "passed"
});
formatter.after({
  "duration": 722012000,
  "status": "passed"
});
});