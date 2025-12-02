import { createBrowserRouter } from "react-router-dom";
import { generalRouter } from "./general.router";

const router = createBrowserRouter([
	...generalRouter,
]);

export default router;