/**
 * 系统级配置
 */
import { mergeMock } from "../../public/utils/confUtils";
/**
 * 页面级MOCK开关
 */
const PAGEMOCK = true;

const MODULECONF = {
    index: {
        NAME: '首页',
        MOCK: true,
        API: {
            GET: '/api/home',
            GETBOTTOM: './api/home',
        }
    }
};
export default mergeMock(PAGEMOCK, MODULECONF)
