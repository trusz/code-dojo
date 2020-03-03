
import * as invoices from "./invoices.json";
import * as plays from "./plays.json";
import { statement } from "./statement";

main();

function main() {
    invoices.forEach((invoice) => {
        statement(invoice, plays);
    });
}

console.log(statement(invoices[0], plays));
