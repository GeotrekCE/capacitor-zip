import { WebPlugin } from "@capacitor/core";
import {
  IZip,
  ZipOptions,
  UnZipOptions,
  ZipResult,
  UnzipResult,
} from "./definitions";

export class ZipPluginWeb extends WebPlugin implements IZip {
  constructor() {
    super();
  }

  zip(options: ZipOptions): Promise<ZipResult> {
    return Promise.resolve({ path: options.destination });
  }
  unZip(options: UnZipOptions): Promise<UnzipResult> {
    return Promise.resolve({ path: options.destination });
  }
}
