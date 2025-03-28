/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { productsCreate } from "../../funcs/productsCreate.js";
import { ProductCreate$inboundSchema } from "../../models/components/productcreate.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: ProductCreate$inboundSchema,
};

export const tool$productsCreate: ToolDefinition<typeof args> = {
  name: "products-create",
  description: `Create Product

Create a product.

**Scopes**: \`products:write\``,
  scopes: ["write", "products"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await productsCreate(
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
