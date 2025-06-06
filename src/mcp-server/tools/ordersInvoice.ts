/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ordersInvoice } from "../../funcs/ordersInvoice.js";
import { OrdersInvoiceRequest$inboundSchema } from "../../models/operations/ordersinvoice.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: OrdersInvoiceRequest$inboundSchema,
};

export const tool$ordersInvoice: ToolDefinition<typeof args> = {
  name: "orders-invoice",
  description: `Get Order Invoice

Get an order's invoice data.

**Scopes**: \`orders:read\``,
  scopes: ["read", "orders"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await ordersInvoice(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
