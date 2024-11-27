import { Webhook, WebhookVerificationError as _WebhookVerificationError } from "standardwebhooks"
import {
    WebhookBenefitCreatedPayload$inboundSchema,
    WebhookBenefitGrantCreatedPayload$inboundSchema,
    WebhookBenefitGrantRevokedPayload$inboundSchema,
    WebhookBenefitGrantUpdatedPayload$inboundSchema,
    WebhookBenefitUpdatedPayload$inboundSchema,
    WebhookCheckoutCreatedPayload$inboundSchema,
    WebhookCheckoutUpdatedPayload$inboundSchema,
    WebhookOrderCreatedPayload$inboundSchema,
    WebhookOrganizationUpdatedPayload$inboundSchema,
    WebhookPledgeCreatedPayload$inboundSchema,
    WebhookPledgeUpdatedPayload$inboundSchema,
    WebhookProductCreatedPayload$inboundSchema,
    WebhookProductUpdatedPayload$inboundSchema,
    WebhookSubscriptionActivePayload$inboundSchema,
    WebhookSubscriptionCanceledPayload$inboundSchema,
    WebhookSubscriptionCreatedPayload$inboundSchema,
    WebhookSubscriptionRevokedPayload$inboundSchema,
    WebhookSubscriptionUpdatedPayload$inboundSchema,
} from '../models/components'
import { SDKValidationError } from "../models/errors";


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
            case 'subscription.active':
                return WebhookSubscriptionActivePayload$inboundSchema.parse(parsed);
            case 'subscription.canceled':
                return WebhookSubscriptionCanceledPayload$inboundSchema.parse(parsed);
            case 'subscription.created':
                return WebhookSubscriptionCreatedPayload$inboundSchema.parse(parsed);
            case 'subscription.revoked':
                return WebhookSubscriptionRevokedPayload$inboundSchema.parse(parsed);
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
