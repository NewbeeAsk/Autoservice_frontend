import Check from './check.model';
import OrderedService from './orderedService.model';

export default interface CurrentCheck {
  orderedServices: OrderedService[];
  check: Check;
}
