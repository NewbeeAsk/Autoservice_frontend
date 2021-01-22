import Check from './check.model';

export default interface OrderedService {
  service_id: number;
  cost: number;
  name: string;
  category: string;
  done: boolean;
  description: string;
  chek: Check;
}
