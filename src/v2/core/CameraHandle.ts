import { Camera } from "three";

import { Handle } from "./Handle";

export class CameraHandle extends Handle {
  private _camera?: Camera;

  public set(camera?: Camera) {
    this._camera = camera;
  }
  public get() {
    return this._camera;
  }

  protected load() {
    console.log("load camera");
    return super.load();
  }

  protected deactivate() {
    return super.deactivate().then(() => {
      console.log("deactivate camera");
    });
  }
}
