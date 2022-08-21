import { MatSelectOption } from "./models";

 
  // Method to use RegEx to replace contents in the string
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  // Custom method to repalce replaceAll of ES2021 for backward compatibility reason
  const replaceAll = (str:string, find: string, replace:string) => {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }

 const generateLabel = (value: string = ''): string => {
    const transformedLabel = replaceAll(value,'_', ' ')
    const final = transformedLabel.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }).join(' ')
    return final
  }

  const generateMatOptions = (values: string[]): MatSelectOption[] => {
    return values.map(value => {
        return {label: generateLabel(value), value: value}
    })
  }

export const attributeTypes = ['attribute','value']
export const operatorTypes = ['arithmetic', 'comparative', 'logical']
export const attributes = ["fraud", "trx_datetime", "trx_unique_id", "type_call", "transaction_type", "trx_amount_total", "md_payer_document_type", "md_payer_phone_number", "md_payer_document_number", "md_payer_email", "pay_card_iin", "pay_card_md_bank", "pay_card_md_brand", "pay_card_md_on_us", "pay_card_md_channel", "md_trx_channel", "md_trx_pos_condition", "md_trx_operation_code", "md_pay_bank_account_owner_document_type", "md_pay_bank_account_finantial_inst_id", "md_pay_bank_account_compensation_inst_id", "md_support_trace_id", "md_trx_reconciliation_id", "md_payer_country", "response_trx_acquirer", "merchant_on_us", "md_merchant_store_id", "md_merchant_terminal_id", "md_merchant_category_code", "md_merchant_submerchant_city", "md_merchant_submerchant_name", "md_merchant_acquirer_submerchant_id", "md_merchant_tributary_document_type", "md_pay_method", "trx_installments_number"]
export const arithmeticOperators = ['+','-','*','/','%','^']
export const comparativeOperators = ['<','>','<=','>=','==']
export const logicalOperators = ['AND','OR','NOT']

export const attributeTypeOptions: MatSelectOption[] = generateMatOptions(attributeTypes)
export const operatorTypeOptions: MatSelectOption[] = generateMatOptions(operatorTypes)
export const attributeOptions: MatSelectOption[] = generateMatOptions(attributes)
export const arithmeticOperatorOptions: MatSelectOption[] = generateMatOptions(arithmeticOperators)
export const comparativeOperatorOptions: MatSelectOption[] = generateMatOptions(comparativeOperators)
export const logicalOperatorOptions: MatSelectOption[] = generateMatOptions(logicalOperators)