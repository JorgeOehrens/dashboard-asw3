// types.ts
export type BigNumberObject = {
    type: string;
    hex: string;
  };
  
  export type Transaction = [string, string, BigNumberObject, BigNumberObject, BigNumberObject, BigNumberObject, BigNumberObject];
  