import { createRouter, createWebHistory } from "vue-router";

import BaseHome from "../pages/BaseHome.vue";
import ClickInstall from "../pages/ClickInstall.vue";
import WelcomePage from "../pages/WelcomePage.vue";
import TheNode from "../pages/TheNode.vue";
import ControlPanel from "../pages/TheControl.vue";
import NodeManage from "../pages/NodeManage.vue";
import TheStaking from "../pages/TheStaking.vue";

const routes = [
  {
    path: "/",
    name: "BaseHome",
    component: BaseHome,
  },
  {
    path: "/welcome",
    name: "WelcomePage",
    component: WelcomePage,
  },
  {
    path: "/clickinstall",
    name: "ClickInstall",
    component: ClickInstall,
  },
  {
    path: "/node",
    name: "TheNode",
    component: TheNode,
  },
  {
    path: "/control",
    name: "ControlPanel",
    component: ControlPanel,
  },
  {
    path: "/manage",
    name: "NodeManage",
    component: NodeManage,
  },
  {
    path: "/staking",
    name: "TheStaking",
    component: TheStaking,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
