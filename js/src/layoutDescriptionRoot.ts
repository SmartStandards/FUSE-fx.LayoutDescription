import { ControlPreference } from "./controlPreference";
import {EntityLayout} from "./entityLayout"

export class LayoutDescriptionRoot {

  public timestampUtc: string = '';
  public semanticVersion: string = '';

  public entityLayouts: EntityLayout[] = [];

  public controlPreference?: ControlPreference;

}
