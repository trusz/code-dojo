import { expect } from "chai";
import { describe, it } from "mocha";
import * as invoices from "../invoices.json";
import * as plays from "../plays.json";
import { statement } from "../statement";
import { generateText } from "./text-spec";

describe("Statement", () => {

    let actualText: string;

    const expected = generateText({
        customerName: "BigCo",

        hamletPrice: "$650.00",
        hamletSeats: "55",

        asYouLikePrice: "$580.00",
        asYouLikeSeats: "35",

        othelloPrice: "$500.00",
        othelloSeats: "40",

        amountOwed: "$1,730.00",
        earnedCredits: "47",
    });

    beforeEach("Action", () => {
        actualText = statement(invoices[0], plays);
    });

    it("matches the spec", () => {
        expect(actualText).to.equal(expected);
    });

});
