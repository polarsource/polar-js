/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscriptionsRevoke } from "../../funcs/subscriptionsRevoke.js";
import { SubscriptionsRevokeRequest$inboundSchema } from "../../models/operations/subscriptionsrevoke.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: SubscriptionsRevokeRequest$inboundSchema,
};

export const tool$subscriptionsRevoke: ToolDefinition<typeof args> = {
  name: "subscriptions-revoke",
  description: `Revoke Subscription

Revoke a subscription, i.e cancel immediately.

**Scopes**: \`subscriptions:write\``,
  scopes: ["write", "subscriptions"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscriptionsRevoke(
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
