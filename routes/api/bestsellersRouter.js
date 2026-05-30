import { bestsellers as c } from "../../controllers/index.js";
import { createRouter } from "../../helpers/createRouter.js";

const bestsellersRouterOptions = [
    {
        method: "get",
        route: "/",
        middlewares: [],
        controller: c.getBestsellerList,
    },
];

const bestsellersRouter = createRouter({ options: bestsellersRouterOptions });
bestsellersRouter.setRouter();

export default bestsellersRouter.router;