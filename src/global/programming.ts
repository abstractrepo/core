import {
  GlobalJavascriptRuntimePackageManagerType,
  GlobalPHPRuntimePackageManagerType,
} from "./runtime";

export default interface GlobalProgrammingType {
  javascript: GlobalJavascriptRuntimePackageManagerType;
  php: GlobalPHPRuntimePackageManagerType;
}
