export type cartDataType = {
    userId: number,
    products : cartItem[] 
}
export type cartItem = {
    productId: number,
    quantity: number
}