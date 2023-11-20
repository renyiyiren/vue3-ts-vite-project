import { defineComponent } from "vue";
import { RouteMeta, RouteRecordRaw } from "vue-router";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  // import 引入的 component
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export type AppRouteModule = AppRouteRecordRaw;
