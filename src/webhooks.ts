import { Webhook, WebhookVerificationError as _WebhookVerificationError } from "standardwebhooks"

import {
    WebhookBenefitCreatedPayload$inboundSchema
} from './models/components/webhookbenefitcreatedpayload.js'
import { WebhookBenefitGrantCreatedPayload$inboundSchema } from "./models/components/webhookbenefitgrantcreatedpayload.js";
import { WebhookBenefitGrantRevokedPayload$inboundSchema } from "./models/components/webhookbenefitgrantrevokedpayload.js";
import { WebhookBenefitGrantUpdatedPayload$inboundSchema } from "./models/components/webhookbenefitgrantupdatedpayload.js";
import { WebhookBenefitUpdatedPayload$inboundSchema } from "./models/components/webhookbenefitupdatedpayload.js";
import { WebhookCheckoutCreatedPayload$inboundSchema } from "./models/components/webhookcheckoutcreatedpayload.js";
import { WebhookCheckoutUpdatedPayload$inboundSchema } from "./models/components/webhookcheckoutupdatedpayload.js";
import { WebhookOrderCreatedPayload$inboundSchema } from "./models/components/webhookordercreatedpayload.js";
import { WebhookOrderRefundedPayload$inboundSchema } from "./models/components/webhookorderrefundedpayload.js";
import { WebhookOrganizationUpdatedPayload$inboundSchema } from "./models/components/webhookorganizationupdatedpayload.js";
import { WebhookPledgeCreatedPayload$inboundSchema } from "./models/components/webhookpledgecreatedpayload.js";
import { WebhookPledgeUpdatedPayload$inboundSchema } from "./models/components/webhookpledgeupdatedpayload.js";
import { WebhookProductCreatedPayload$inboundSchema } from "./models/components/webhookproductcreatedpayload.js";
import { WebhookProductUpdatedPayload$inboundSchema } from "./models/components/webhookproductupdatedpayload.js";
import { WebhookRefundCreatedPayload$inboundSchema } from "./models/components/webhookrefundcreatedpayload.js";
import { WebhookRefundUpdatedPayload$inboundSchema } from "./models/components/webhookrefundupdatedpayload.js";
import { WebhookSubscriptionActivePayload$inboundSchema } from "./models/components/webhooksubscriptionactivepayload.js";
import { WebhookSubscriptionCanceledPayload$inboundSchema } from "./models/components/webhooksubscriptioncanceledpayload.js";
import { WebhookSubscriptionCreatedPayload$inboundSchema } from "./models/components/webhooksubscriptioncreatedpayload.js";
import { WebhookSubscriptionRevokedPayload$inboundSchema } from "./models/components/webhooksubscriptionrevokedpayload.js";
import { WebhookSubscriptionUncanceledPayload$inboundSchema} from "./models/components/webhooksubscriptionuncanceledpayload.js";
import { WebhookSubscriptionUpdatedPayload$inboundSchema } from "./models/components/webhooksubscriptionupdatedpayload.js";
import { SDKValidationError } from "./models/errors/sdkvalidationerror.js";


class WebhookVerificationError extends Error {
    constructor(message: string) {
        super(message);
        this.message = message;
    }
}

const parseEvent = (parsed: any) => {
    try {
        switch (parsed.type) {
            case 'benefit.created':
                return WebhookBenefitCreatedPayload$inboundSchema.parse(parsed);
            case 'benefit_grant.created':
                return WebhookBenefitGrantCreatedPayload$inboundSchema.parse(parsed);
            case 'benefit_grant.revoked':
                return WebhookBenefitGrantRevokedPayload$inboundSchema.parse(parsed);
            case 'benefit_grant.updated':
                return WebhookBenefitGrantUpdatedPayload$inboundSchema.parse(parsed);
            case 'benefit.updated':
                return WebhookBenefitUpdatedPayload$inboundSchema.parse(parsed);
            case 'checkout.created':
                return WebhookCheckoutCreatedPayload$inboundSchema.parse(parsed);
            case 'checkout.updated':
                return WebhookCheckoutUpdatedPayload$inboundSchema.parse(parsed);
            case 'order.created':
                return WebhookOrderCreatedPayload$inboundSchema.parse(parsed);
            case 'order.refunded':
                return WebhookOrderRefundedPayload$inboundSchema.parse(parsed);
            case 'organization.updated':
                return WebhookOrganizationUpdatedPayload$inboundSchema.parse(parsed);
            case 'pledge.created':
                return WebhookPledgeCreatedPayload$inboundSchema.parse(parsed);
            case 'pledge.updated':
                return WebhookPledgeUpdatedPayload$inboundSchema.parse(parsed);
            case 'product.created':
                return WebhookProductCreatedPayload$inboundSchema.parse(parsed);
            case 'product.updated':
                return WebhookProductUpdatedPayload$inboundSchema.parse(parsed);
            case 'refund.created':
                return WebhookRefundCreatedPayload$inboundSchema.parse(parsed);
            case 'refund.updated':
                return WebhookRefundUpdatedPayload$inboundSchema.parse(parsed);
            case 'subscription.active':
                return WebhookSubscriptionActivePayload$inboundSchema.parse(parsed);
            case 'subscription.canceled':
                return WebhookSubscriptionCanceledPayload$inboundSchema.parse(parsed);
            case 'subscription.created':
                return WebhookSubscriptionCreatedPayload$inboundSchema.parse(parsed);
            case 'subscription.revoked':
                return WebhookSubscriptionRevokedPayload$inboundSchema.parse(parsed);
            case 'subscription.uncanceled':
                return WebhookSubscriptionUncanceledPayload$inboundSchema.parse(parsed);
            case 'subscription.updated':
                return WebhookSubscriptionUpdatedPayload$inboundSchema.parse(parsed);
            default:
                throw new SDKValidationError(`Unknown event type: ${parsed.type}`, parsed.type, parsed);
        }
    } catch (error) {
        throw new SDKValidationError('Failed to parse event', error, parsed)
    }
}

const validateEvent = (body: string | Buffer, headers: Record<string, string>, secret: string) => {
    const base64Secret = Buffer.from(secret, 'utf-8').toString('base64');
    const webhook = new Webhook(base64Secret);
    try {
        const parsed = webhook.verify(body, headers);
        return parseEvent(parsed);
    } catch (error) {
        if (error instanceof _WebhookVerificationError) {
            throw new WebhookVerificationError(error.message);
        }
        throw error;
    }
}

export {
    validateEvent,
    WebhookVerificationError,
}
