/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

/**
 * Filter by organization ID.
 */
export type OrdersListQueryParamOrganizationIDFilter = string | Array<string>;

/**
 * Filter by product ID.
 */
export type OrdersListQueryParamProductIDFilter = string | Array<string>;

/**
 * Filter by product price type. `recurring` will return orders corresponding to subscriptions creations or renewals. `one_time` will return orders corresponding to one-time purchases.
 */
export type QueryParamProductPriceTypeFilter =
  | components.ProductPriceType
  | Array<components.ProductPriceType>;

/**
 * Filter by customer's user ID.
 */
export type UserIDFilter = string | Array<string>;

export type OrdersListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by product ID.
   */
  productId?: string | Array<string> | null | undefined;
  /**
   * Filter by product price type. `recurring` will return orders corresponding to subscriptions creations or renewals. `one_time` will return orders corresponding to one-time purchases.
   */
  productPriceType?:
    | components.ProductPriceType
    | Array<components.ProductPriceType>
    | null
    | undefined;
  /**
   * Filter by customer's user ID.
   */
  userId?: string | Array<string> | null | undefined;
  /**
   * Page number, defaults to 1.
   */
  page?: number | undefined;
  /**
   * Size of a page, defaults to 10. Maximum is 100.
   */
  limit?: number | undefined;
  /**
   * Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
   */
  sorting?: Array<components.OrderSortProperty> | null | undefined;
};

export type OrdersListResponse = {
  result: components.ListResourceOrder;
};

/** @internal */
export const OrdersListQueryParamOrganizationIDFilter$inboundSchema: z.ZodType<
  OrdersListQueryParamOrganizationIDFilter,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type OrdersListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const OrdersListQueryParamOrganizationIDFilter$outboundSchema: z.ZodType<
  OrdersListQueryParamOrganizationIDFilter$Outbound,
  z.ZodTypeDef,
  OrdersListQueryParamOrganizationIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdersListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `OrdersListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    OrdersListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `OrdersListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    OrdersListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `OrdersListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound = OrdersListQueryParamOrganizationIDFilter$Outbound;
}

/** @internal */
export const OrdersListQueryParamProductIDFilter$inboundSchema: z.ZodType<
  OrdersListQueryParamProductIDFilter,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type OrdersListQueryParamProductIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const OrdersListQueryParamProductIDFilter$outboundSchema: z.ZodType<
  OrdersListQueryParamProductIDFilter$Outbound,
  z.ZodTypeDef,
  OrdersListQueryParamProductIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdersListQueryParamProductIDFilter$ {
  /** @deprecated use `OrdersListQueryParamProductIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    OrdersListQueryParamProductIDFilter$inboundSchema;
  /** @deprecated use `OrdersListQueryParamProductIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    OrdersListQueryParamProductIDFilter$outboundSchema;
  /** @deprecated use `OrdersListQueryParamProductIDFilter$Outbound` instead. */
  export type Outbound = OrdersListQueryParamProductIDFilter$Outbound;
}

/** @internal */
export const QueryParamProductPriceTypeFilter$inboundSchema: z.ZodType<
  QueryParamProductPriceTypeFilter,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ProductPriceType$inboundSchema,
  z.array(components.ProductPriceType$inboundSchema),
]);

/** @internal */
export type QueryParamProductPriceTypeFilter$Outbound = string | Array<string>;

/** @internal */
export const QueryParamProductPriceTypeFilter$outboundSchema: z.ZodType<
  QueryParamProductPriceTypeFilter$Outbound,
  z.ZodTypeDef,
  QueryParamProductPriceTypeFilter
> = z.union([
  components.ProductPriceType$outboundSchema,
  z.array(components.ProductPriceType$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamProductPriceTypeFilter$ {
  /** @deprecated use `QueryParamProductPriceTypeFilter$inboundSchema` instead. */
  export const inboundSchema = QueryParamProductPriceTypeFilter$inboundSchema;
  /** @deprecated use `QueryParamProductPriceTypeFilter$outboundSchema` instead. */
  export const outboundSchema = QueryParamProductPriceTypeFilter$outboundSchema;
  /** @deprecated use `QueryParamProductPriceTypeFilter$Outbound` instead. */
  export type Outbound = QueryParamProductPriceTypeFilter$Outbound;
}

/** @internal */
export const UserIDFilter$inboundSchema: z.ZodType<
  UserIDFilter,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UserIDFilter$Outbound = string | Array<string>;

/** @internal */
export const UserIDFilter$outboundSchema: z.ZodType<
  UserIDFilter$Outbound,
  z.ZodTypeDef,
  UserIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserIDFilter$ {
  /** @deprecated use `UserIDFilter$inboundSchema` instead. */
  export const inboundSchema = UserIDFilter$inboundSchema;
  /** @deprecated use `UserIDFilter$outboundSchema` instead. */
  export const outboundSchema = UserIDFilter$outboundSchema;
  /** @deprecated use `UserIDFilter$Outbound` instead. */
  export type Outbound = UserIDFilter$Outbound;
}

/** @internal */
export const OrdersListRequest$inboundSchema: z.ZodType<
  OrdersListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  product_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  product_price_type: z.nullable(
    z.union([
      components.ProductPriceType$inboundSchema,
      z.array(components.ProductPriceType$inboundSchema),
    ]),
  ).optional(),
  user_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(components.OrderSortProperty$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "product_id": "productId",
    "product_price_type": "productPriceType",
    "user_id": "userId",
  });
});

/** @internal */
export type OrdersListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  product_id?: string | Array<string> | null | undefined;
  product_price_type?: string | Array<string> | null | undefined;
  user_id?: string | Array<string> | null | undefined;
  page: number;
  limit: number;
  sorting?: Array<string> | null | undefined;
};

/** @internal */
export const OrdersListRequest$outboundSchema: z.ZodType<
  OrdersListRequest$Outbound,
  z.ZodTypeDef,
  OrdersListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  productId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  productPriceType: z.nullable(
    z.union([
      components.ProductPriceType$outboundSchema,
      z.array(components.ProductPriceType$outboundSchema),
    ]),
  ).optional(),
  userId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(components.OrderSortProperty$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    productId: "product_id",
    productPriceType: "product_price_type",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdersListRequest$ {
  /** @deprecated use `OrdersListRequest$inboundSchema` instead. */
  export const inboundSchema = OrdersListRequest$inboundSchema;
  /** @deprecated use `OrdersListRequest$outboundSchema` instead. */
  export const outboundSchema = OrdersListRequest$outboundSchema;
  /** @deprecated use `OrdersListRequest$Outbound` instead. */
  export type Outbound = OrdersListRequest$Outbound;
}

/** @internal */
export const OrdersListResponse$inboundSchema: z.ZodType<
  OrdersListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceOrder$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type OrdersListResponse$Outbound = {
  Result: components.ListResourceOrder$Outbound;
};

/** @internal */
export const OrdersListResponse$outboundSchema: z.ZodType<
  OrdersListResponse$Outbound,
  z.ZodTypeDef,
  OrdersListResponse
> = z.object({
  result: components.ListResourceOrder$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdersListResponse$ {
  /** @deprecated use `OrdersListResponse$inboundSchema` instead. */
  export const inboundSchema = OrdersListResponse$inboundSchema;
  /** @deprecated use `OrdersListResponse$outboundSchema` instead. */
  export const outboundSchema = OrdersListResponse$outboundSchema;
  /** @deprecated use `OrdersListResponse$Outbound` instead. */
  export type Outbound = OrdersListResponse$Outbound;
}
