import { homePage } from './pages/home.js';
import { profilePage } from "./pages/profile.js"
import { highlightPage} from "./pages/highlight.js";
import { walletPage } from "./pages/wallet.js";
import Router from "./router.js";
import {addAmountPage} from "./pages/addAmount.js";
import {categoryPage} from "./pages/category.js";


const routes = {
    '/': homePage,
    '/profile': profilePage,
    '/highlight': highlightPage,
    '/wallet': walletPage,
    '/add-amount': addAmountPage,
    '/category': categoryPage,
}
const router = new Router(routes);
router.init()
