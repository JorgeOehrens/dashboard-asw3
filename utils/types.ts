// types.ts
export type Transaction = {
  from: string; // Dirección de Ethereum desde la cual se origina la transacción
  to: string; // Dirección de Ethereum hacia la cual se dirige la transacción
  tokens:string; // Cantidad de tokens transferidos en la transacción. Podría ser manejado como string para evitar problemas de precisión con números grandes
  eth_price_usd: string; // El precio del ETH en USD en el momento de la transacción. Podría ser manejado como string para evitar problemas de precisión
  token_price:  string; // El precio del token en la transacción. Podría ser manejado como string para evitar problemas de precisión
  amount: string; // La cantidad de ETH (o la moneda que estés utilizando) transferida en la transacción. Podría ser manejado como string
  timestamp: number; // Marca de tiempo Unix de la transacción
  type: string; // La cantidad de ETH (o la moneda que estés utilizando) transferida en la transacción. Podría ser manejado como string

// Tipo de transacción, asumiendo que solo puede ser 'compra' o 'venta', pero dejamos string para flexibilidad
};
  
  