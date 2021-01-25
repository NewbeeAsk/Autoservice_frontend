import Category from './category.model';
import Check from './check.model';

export default interface ChecksByCategory {
  check: Check;
  costByCategoryList: Category[];
}
