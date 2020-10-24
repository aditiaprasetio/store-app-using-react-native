export interface IStore {
  id: number;
  store_name: string;
  store_image: string;
  store_logo: string;
  store_business: string;
  isFav: boolean;
  delivery_price: number;
  num_offers: number;
  num_reviews: number;
  store_type: string;
  total_branch?: number;
}
