import { ControlPreference } from "./controlPreference";
import {FieldLayout} from "./fieldLayout"

export class EntityLayout {
  
  /** a non-technical NAME which only represents the entity class (no identity): for expample 'Person' */
  public displayLabel: string = '';

  public displayLabelPlural: string = '';

  /** a placeholder-pattern, representing the identity of one concrete record: for expample '{firstname} {lastname}' */
  public identityLabelPattern: string = '';

  public isBlEntrypoint: boolean = false;

  public fieldLayouts: FieldLayout[] = [];

  public controlPreference?: ControlPreference;

}
