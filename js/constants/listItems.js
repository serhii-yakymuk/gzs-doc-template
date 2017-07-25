import {
  LIST_SEXES,
  LIST_PURPOSES,
  LIST_LOCATIONS,
  LIST_SETTLEMENTS,
  LIST_LOCATION_PARTS
} from 'constants/listItemsNames';
import sexes from 'constants/lists/sexes';
import purposes from 'constants/lists/purposes';
import locations from 'constants/lists/locations';
import settlements from 'constants/lists/settlements';
import locationParts from 'constants/lists/locationParts';

export const LIST_ITEMS = {
  [LIST_SEXES]: sexes,
  [LIST_PURPOSES]: purposes,
  [LIST_LOCATIONS]: locations,
  [LIST_SETTLEMENTS]: settlements,
  [LIST_LOCATION_PARTS]: locationParts
};
