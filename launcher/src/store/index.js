import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";
import flagDialModule from "./flagDialog/index.js";
import clickInstallModule from "./clickInstall/index.js";
import controlPanelModule from "./controlPanel/index.js";
import nodeManageModule from "./nodeManage/index.js";
import setupServerModule from "./setupServer/index.js";
import theNodeModule from "./theNode/index.js";
import theStakingModule from "./theStaking/index.js";
import welcomePageModule from "./welcomePage/index.js";

//state vuex
const store = createStore({
  modules: {
    languages: flagDialModule,
    installationPage: clickInstallModule,
    controlpanel: controlPanelModule,
    managing: nodeManageModule,
    setupServer: setupServerModule,
    node: theNodeModule,
    staking: theStakingModule,
    welcome: welcomePageModule,
  },
  state() {
    return {
      installation: [
        {
          title: "1CLICK INSTALLATION",
          img: "/img/icon/one click installer.png",
          path: "/clickinstall",
        },
        {
          title: "CUSTOM INSTALLATION",
          img: "/img/icon/custom installer.png",
          path: "/manage",
        },
        {
          title: "IMPORT CONFIGURATION",
          img: "/img/icon/IMPORT CONFIGURATIONS.png",
          path: "/",
        },
      ],
      configData_nodeSidebarVideo: [
        {
          id: 1,
          name: "First Steps!",
        },
        {
          id: 2,
          name: "Stake with 32 ETH",
        },
        {
          id: 3,
          name: "Use SSV network",
        },
        {
          id: 4,
          name: "Alerts on Mobile App",
        },
        {
          id: 5,
          name: "Switch Clients",
        },
        {
          id: 6,
          name: "Switch Machine",
        },
      ],
      configData_nodeSidebarActive: [
        {
          id: 1,
          name: "NONE FUNCTIONAL",
          status: "deactive",
        },
        {
          id: 2,
          name: "ACTIVE",
          status: "active",
        },
        {
          id: 3,
          name: "SYNC/PROBLEM REC.",
          status: "notOk",
        },
        {
          id: 4,
          name: "INACTIVE",
          status: "off",
        },
        {
          id: 5,
          name: "ACTIVE",
          status: "active",
        },
        {
          id: 6,
          name: "INACTIVE",
          status: "off",
        },
        {
          id: 7,
          name: "SYNC/PROBLEM REC.",
          status: "notOk",
        },
        {
          id: 8,
          name: "NONE FUNCTIONAL",
          status: "deactive",
        },
        {
          id: 9,
          name: "ACTIVE",
          status: "active",
        },
        {
          id: 10,
          name: "SYNC/PROBLEM REC.",
          status: "notOk",
        },
        {
          id: 9,
          name: "ACTIVE",
          status: "active",
        },
        {
          id: 10,
          name: "SYNC/PROBLEM REC.",
          status: "notOk",
        },
        {
          id: 10,
          name: "SYNC/PROBLEM REC.",
          status: "notOk",
        },
        {
          id: 10,
          name: "SYNC/PROBLEM REC.",
          status: "notOk",
        },
        {
          id: 9,
          name: "ACTIVE",
          status: "active",
        },
        {
          id: 10,
          name: "SYNC/PROBLEM REC.",
          status: "notOk",
        },
        {
          id: 10,
          name: "SYNC/PROBLEM REC.",
          status: "notOk",
        },
      ],
      R1clkInstls: [
        { clkId: "staking", img: "/img/icon/STAKING.png" },
        { clkId: "testnet", img: "/img/icon/TESTNET.png" },
        { clkId: "blox", img: "/img/icon/BLOX_SSV.png" },
        { clkId: "obol", img: "/img/icon/OBOL_SSV.png" },
        { clkId: "rocket", img: "/img/icon/ROCKETPOOL_1.png" },
      ],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
//end of state
export default store;
