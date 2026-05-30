import { bouquets as c } from "../../controllers/index.js";
import { getBouquetQuerySchema } from "../../schemas/index.js";
import { createRouter } from "../../helpers/createRouter.js";
import { validateQuery } from "../../helpers/validateQuery.js";

const bouquetRouterOptions = [
    {
        method: "get",
        route: "/",
        middlewares: [validateQuery(getBouquetQuerySchema)],
        controller: c.getBouquetList,
    },
];

const bouquetRouter = createRouter({ options: bouquetRouterOptions });
bouquetRouter.setRouter();

export default bouquetRouter.router;