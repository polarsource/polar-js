/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ordersGet } from "../../funcs/ordersGet.js";
import { OrdersGetRequest$inboundSchema } from "../../models/operations/ordersget.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: OrdersGetRequest$inboundSchema,
};

export const tool$ordersGet: ToolDefinition<typeof args> = {
  name: "orders-get",
  description: `Get Order

Get an order by ID.

**Scopes**: \`orders:read\``,
  scopes: ["read", "orders"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await ordersGet(
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
