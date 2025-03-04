/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersDelete } from "../../funcs/customersDelete.js";
import { CustomersDeleteRequest$inboundSchema } from "../../models/operations/customersdelete.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CustomersDeleteRequest$inboundSchema,
};

export const tool$customersDelete: ToolDefinition<typeof args> = {
  name: "customers_delete",
  description: `Delete Customer

Delete a customer.

Immediately cancels any active subscriptions and revokes any active benefits.

**Scopes**: \`customers:write\``,
  scopes: ["write", "customers"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await customersDelete(
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

    return formatResult(void 0, apiCall);
  },
};
