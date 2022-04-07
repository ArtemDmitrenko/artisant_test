export type ProductsAPI = {
  status: string,
  data: {
    creators: any,
    products: Array<Product>
  }
}

export type Product = {
  product_id: number,
  name: string,
  description: string,
  quantity: number,
  initial_price: number,
  type: string,
  avatar: OriginalCompressed,
  other_file: Original,
  additional_photos: Array<OriginalCompressed>,
  created_by: CreatedBy,
  json_nft_data: JsonNftData,
  json_nft_link: string,
  tx_status: string,
  created_at: string,
  updated_at: string,
  quantity_nfts_created: number,
  on_main_page: boolean,
  is_wearable: boolean,
  latest_price: string,
  quantity_available: number,
}

type OriginalCompressed = {
  original: string,
  compressed: string,
}
type Original = {
  original: string,
}
type CreatedBy = {
  user_id: number,
  display_name: string,
  public_address: string,
  custom_url: string,
  image: OriginalCompressed,
}

type JsonNftData = {
  name: number,
  image: string,
  attributes: [{ value: string, trait_type: string}],
  description: string,
  external_url: string,
}
