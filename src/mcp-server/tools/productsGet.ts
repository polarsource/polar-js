/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { productsGet } from "../../funcs/productsGet.js";
import { ProductsGetRequest$inboundSchema } from "../../models/operations/productsget.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: ProductsGetRequest$inboundSchema,
};

export const tool$productsGet: ToolDefinition<typeof args> = {
  name: "products-get",
  description: `Get Product

Get a product by ID.

**Scopes**: \`products:read\` \`products:write\``,
  scopes: ["read", "products"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await productsGet(
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
