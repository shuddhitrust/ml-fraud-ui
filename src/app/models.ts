export type Transaction = {
    id?: number | null,
    name?: string | null,
    amount?: number | null,
    datetime?: string | null
};


export const emptyTransactionRecord: Transaction = {
    id: null,
    name: null,
    amount: null,
    datetime: null
}