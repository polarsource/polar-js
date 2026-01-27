# TaxIDFormat

List of supported tax ID formats.

Ref: https://docs.stripe.com/billing/customer/tax-ids#supported-tax-id

## Example Usage

```typescript
import { TaxIDFormat } from "@polar-sh/sdk/models/components/taxidformat.js";

let value: TaxIDFormat = "eu_vat";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ad_nrt" | "ae_trn" | "ar_cuit" | "au_abn" | "au_arn" | "bg_uic" | "bh_vat" | "bo_tin" | "br_cnpj" | "br_cpf" | "ca_bn" | "ca_gst_hst" | "ca_pst_bc" | "ca_pst_mb" | "ca_pst_sk" | "ca_qst" | "ch_uid" | "ch_vat" | "cl_tin" | "cn_tin" | "co_nit" | "cr_tin" | "de_stn" | "do_rcn" | "ec_ruc" | "eg_tin" | "es_cif" | "eu_oss_vat" | "eu_vat" | "gb_vat" | "ge_vat" | "hk_br" | "hr_oib" | "hu_tin" | "id_npwp" | "il_vat" | "in_gst" | "is_vat" | "jp_cn" | "jp_rn" | "jp_trn" | "ke_pin" | "kr_brn" | "kz_bin" | "li_uid" | "mx_rfc" | "my_frp" | "my_itn" | "my_sst" | "ng_tin" | "no_vat" | "no_voec" | "nz_gst" | "om_vat" | "pe_ruc" | "ph_tin" | "ro_tin" | "rs_pib" | "ru_inn" | "ru_kpp" | "sa_vat" | "sg_gst" | "sg_uen" | "si_tin" | "sv_nit" | "th_vat" | "tr_tin" | "tw_vat" | "ua_vat" | "us_ein" | "uy_ruc" | "ve_rif" | "vn_tin" | "za_vat" | Unrecognized<string>
```