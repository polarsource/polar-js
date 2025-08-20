# @polar-sh/sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage [Polar](https://polar.sh) API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@polar-sh/sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

> [!WARNING]
> Starting version `>v0.6.0`, we changed our SDK generator. It's not backward compatible with previous versions.

<!-- Start Summary [summary] -->
## Summary

Polar API: Polar HTTP and Webhooks API

Read the docs at https://docs.polar.sh/api-reference
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@polar-sh/sdk](#polar-shsdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @polar-sh/sdk
```

### PNPM

```bash
pnpm add @polar-sh/sdk
```

### Bun

```bash
bun add @polar-sh/sdk
```

### Yarn

```bash
yarn add @polar-sh/sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Polar": {
      "command": "npx",
      "args": [
        "-y", "--package", "@polar-sh/sdk",
        "--",
        "mcp", "start",
        "--access-token", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Polar": {
      "command": "npx",
      "args": [
        "-y", "--package", "@polar-sh/sdk",
        "--",
        "mcp", "start",
        "--access-token", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @polar-sh/sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.endpointcheckoutCreatedPost({
    type: "checkout.created",
    data: {
      createdAt: new Date("2023-02-15T15:44:21.478Z"),
      modifiedAt: new Date("2025-09-12T19:48:15.814Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "expired",
      clientSecret: "<value>",
      url: "https://fair-veto.com/",
      expiresAt: new Date("2025-03-15T14:26:53.109Z"),
      successUrl: "https://junior-linseed.net/",
      embedOrigin: "<value>",
      amount: 631188,
      discountAmount: 968968,
      netAmount: 929514,
      taxAmount: 323773,
      totalAmount: 115799,
      currency: "Som",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      allowDiscountCodes: true,
      requireBillingAddress: false,
      isDiscountApplicable: true,
      isFreeProductPrice: true,
      isPaymentRequired: true,
      isPaymentSetupRequired: true,
      isPaymentFormRequired: true,
      customerId: "<value>",
      isBusinessCustomer: true,
      customerName: "<value>",
      customerEmail: "<value>",
      customerIpAddress: "<value>",
      customerBillingName: "<value>",
      customerBillingAddress: {
        country: "US",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      billingAddressFields: {
        country: "required",
        state: "disabled",
        city: "required",
        postalCode: "required",
        line1: "required",
        line2: "disabled",
      },
      metadata: {
        "key": "<value>",
      },
      externalCustomerId: null,
      customerExternalId: "<id>",
      products: [],
      product: {
        createdAt: new Date("2025-03-29T00:34:40.708Z"),
        modifiedAt: new Date("2024-04-06T18:48:21.449Z"),
        id: "<value>",
        name: "<value>",
        description: "stall for mousse",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-09-13T08:36:46.434Z"),
            modifiedAt: new Date("2023-10-05T12:55:46.428Z"),
            id: "<value>",
            amountType: "free",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            legacy: true,
          },
          {
            createdAt: new Date("2024-05-02T18:25:33.974Z"),
            modifiedAt: new Date("2025-02-06T12:55:07.640Z"),
            id: "<value>",
            amountType: "fixed",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 115799,
            legacy: true,
          },
        ],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/private/tmp",
            mimeType: "<value>",
            size: 225502,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-06T07:35:44.280Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2024-10-08T20:45:26.653Z"),
            sizeReadable: "<value>",
            publicUrl: "https://graceful-battle.info",
          },
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/private/tmp",
            mimeType: "<value>",
            size: 225502,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-06T07:35:44.280Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2024-10-08T20:45:26.653Z"),
            sizeReadable: "<value>",
            publicUrl: "https://graceful-battle.info",
          },
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/private/tmp",
            mimeType: "<value>",
            size: 225502,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-06T07:35:44.280Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2024-10-08T20:45:26.653Z"),
            sizeReadable: "<value>",
            publicUrl: "https://graceful-battle.info",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-09-16T11:22:24.287Z"),
        modifiedAt: new Date("2025-11-04T08:41:40.941Z"),
        id: "<value>",
        amountType: "free",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        legacy: true,
      },
      discount: {
        duration: "once",
        type: "fixed",
        amount: 405691,
        currency: "Dobra",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-06-07T12:37:50.969Z"),
            modifiedAt: new Date("2023-11-20T09:37:39.033Z"),
            id: "<value>",
            metadata: {
              "key": true,
              "key1": "<value>",
              "key2": "<value>",
            },
            type: "text",
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 168537,
          required: false,
        },
      ],
      customerMetadata: {
        "key": true,
        "key1": false,
        "key2": 851435,
      },
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

### Webhook support

The SDK has built-in support to validate webhook events. Here is an example with Express.js:

```ts
import express, { Request, Response } from "express";
import { validateEvent, WebhookVerificationError } from "@polar-sh/sdk/webhooks";

const app = express();

app.post("/webhook", express.raw({ type: "application/json" }), (req: Request, res: Response) => {
  try {
    const event = validateEvent(req.body, req.headers, process.env["POLAR_WEBHOOK_SECRET"] ?? "");

    // Process the event

    res.status(202).send('')
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      res.status(403).send('')
    }
    throw error
  }
});
```

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [benefits](docs/sdks/benefits/README.md)

* [list](docs/sdks/benefits/README.md#list) - List Benefits
* [create](docs/sdks/benefits/README.md#create) - Create Benefit
* [get](docs/sdks/benefits/README.md#get) - Get Benefit
* [update](docs/sdks/benefits/README.md#update) - Update Benefit
* [delete](docs/sdks/benefits/README.md#delete) - Delete Benefit
* [grants](docs/sdks/benefits/README.md#grants) - List Benefit Grants

### [checkoutLinks](docs/sdks/checkoutlinks/README.md)

* [list](docs/sdks/checkoutlinks/README.md#list) - List Checkout Links
* [create](docs/sdks/checkoutlinks/README.md#create) - Create Checkout Link
* [get](docs/sdks/checkoutlinks/README.md#get) - Get Checkout Link
* [update](docs/sdks/checkoutlinks/README.md#update) - Update Checkout Link
* [delete](docs/sdks/checkoutlinks/README.md#delete) - Delete Checkout Link

### [checkouts](docs/sdks/checkouts/README.md)

* [list](docs/sdks/checkouts/README.md#list) - List Checkout Sessions
* [create](docs/sdks/checkouts/README.md#create) - Create Checkout Session
* [get](docs/sdks/checkouts/README.md#get) - Get Checkout Session
* [update](docs/sdks/checkouts/README.md#update) - Update Checkout Session
* [clientGet](docs/sdks/checkouts/README.md#clientget) - Get Checkout Session from Client
* [clientUpdate](docs/sdks/checkouts/README.md#clientupdate) - Update Checkout Session from Client
* [clientConfirm](docs/sdks/checkouts/README.md#clientconfirm) - Confirm Checkout Session from Client

### [customerMeters](docs/sdks/customermeters/README.md)

* [list](docs/sdks/customermeters/README.md#list) - List Customer Meters
* [get](docs/sdks/customermeters/README.md#get) - Get Customer Meter

### [customerPortal](docs/sdks/customerportal/README.md)


#### [customerPortal.benefitGrants](docs/sdks/benefitgrants/README.md)

* [list](docs/sdks/benefitgrants/README.md#list) - List Benefit Grants
* [get](docs/sdks/benefitgrants/README.md#get) - Get Benefit Grant
* [update](docs/sdks/benefitgrants/README.md#update) - Update Benefit Grant

#### [customerPortal.customerMeters](docs/sdks/polarcustomermeters/README.md)

* [list](docs/sdks/polarcustomermeters/README.md#list) - List Meters
* [get](docs/sdks/polarcustomermeters/README.md#get) - Get Customer Meter

#### [customerPortal.customers](docs/sdks/polarcustomers/README.md)

* [get](docs/sdks/polarcustomers/README.md#get) - Get Customer
* [update](docs/sdks/polarcustomers/README.md#update) - Update Customer
* [listPaymentMethods](docs/sdks/polarcustomers/README.md#listpaymentmethods) - List Customer Payment Methods
* [addPaymentMethod](docs/sdks/polarcustomers/README.md#addpaymentmethod) - Add Customer Payment Method
* [deletePaymentMethod](docs/sdks/polarcustomers/README.md#deletepaymentmethod) - Delete Customer Payment Method

#### [customerPortal.downloadables](docs/sdks/downloadables/README.md)

* [list](docs/sdks/downloadables/README.md#list) - List Downloadables

#### [customerPortal.licenseKeys](docs/sdks/polarlicensekeys/README.md)

* [list](docs/sdks/polarlicensekeys/README.md#list) - List License Keys
* [get](docs/sdks/polarlicensekeys/README.md#get) - Get License Key
* [validate](docs/sdks/polarlicensekeys/README.md#validate) - Validate License Key
* [activate](docs/sdks/polarlicensekeys/README.md#activate) - Activate License Key
* [deactivate](docs/sdks/polarlicensekeys/README.md#deactivate) - Deactivate License Key

#### [customerPortal.orders](docs/sdks/polarorders/README.md)

* [list](docs/sdks/polarorders/README.md#list) - List Orders
* [get](docs/sdks/polarorders/README.md#get) - Get Order
* [update](docs/sdks/polarorders/README.md#update) - Update Order
* [generateInvoice](docs/sdks/polarorders/README.md#generateinvoice) - Generate Order Invoice
* [invoice](docs/sdks/polarorders/README.md#invoice) - Get Order Invoice
* [getPaymentStatus](docs/sdks/polarorders/README.md#getpaymentstatus) - Get Order Payment Status
* [confirmRetryPayment](docs/sdks/polarorders/README.md#confirmretrypayment) - Confirm Retry Payment

#### [customerPortal.organizations](docs/sdks/polarorganizations/README.md)

* [get](docs/sdks/polarorganizations/README.md#get) - Get Organization

#### [customerPortal.subscriptions](docs/sdks/polarsubscriptions/README.md)

* [list](docs/sdks/polarsubscriptions/README.md#list) - List Subscriptions
* [get](docs/sdks/polarsubscriptions/README.md#get) - Get Subscription
* [update](docs/sdks/polarsubscriptions/README.md#update) - Update Subscription
* [cancel](docs/sdks/polarsubscriptions/README.md#cancel) - Cancel Subscription

### [customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List Customers
* [create](docs/sdks/customers/README.md#create) - Create Customer
* [get](docs/sdks/customers/README.md#get) - Get Customer
* [update](docs/sdks/customers/README.md#update) - Update Customer
* [delete](docs/sdks/customers/README.md#delete) - Delete Customer
* [getExternal](docs/sdks/customers/README.md#getexternal) - Get Customer by External ID
* [updateExternal](docs/sdks/customers/README.md#updateexternal) - Update Customer by External ID
* [deleteExternal](docs/sdks/customers/README.md#deleteexternal) - Delete Customer by External ID
* [getState](docs/sdks/customers/README.md#getstate) - Get Customer State
* [getStateExternal](docs/sdks/customers/README.md#getstateexternal) - Get Customer State by External ID

### [customerSessions](docs/sdks/customersessions/README.md)

* [create](docs/sdks/customersessions/README.md#create) - Create Customer Session

### [customFields](docs/sdks/customfields/README.md)

* [list](docs/sdks/customfields/README.md#list) - List Custom Fields
* [create](docs/sdks/customfields/README.md#create) - Create Custom Field
* [get](docs/sdks/customfields/README.md#get) - Get Custom Field
* [update](docs/sdks/customfields/README.md#update) - Update Custom Field
* [delete](docs/sdks/customfields/README.md#delete) - Delete Custom Field

### [discounts](docs/sdks/discounts/README.md)

* [list](docs/sdks/discounts/README.md#list) - List Discounts
* [create](docs/sdks/discounts/README.md#create) - Create Discount
* [get](docs/sdks/discounts/README.md#get) - Get Discount
* [update](docs/sdks/discounts/README.md#update) - Update Discount
* [delete](docs/sdks/discounts/README.md#delete) - Delete Discount

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - List Events
* [listNames](docs/sdks/events/README.md#listnames) - List Event Names
* [get](docs/sdks/events/README.md#get) - Get Event
* [ingest](docs/sdks/events/README.md#ingest) - Ingest Events

### [files](docs/sdks/files/README.md)

* [list](docs/sdks/files/README.md#list) - List Files
* [create](docs/sdks/files/README.md#create) - Create File
* [uploaded](docs/sdks/files/README.md#uploaded) - Complete File Upload
* [update](docs/sdks/files/README.md#update) - Update File
* [delete](docs/sdks/files/README.md#delete) - Delete File

### [licenseKeys](docs/sdks/licensekeys/README.md)

* [list](docs/sdks/licensekeys/README.md#list) - List License Keys
* [get](docs/sdks/licensekeys/README.md#get) - Get License Key
* [update](docs/sdks/licensekeys/README.md#update) - Update License Key
* [getActivation](docs/sdks/licensekeys/README.md#getactivation) - Get Activation
* [validate](docs/sdks/licensekeys/README.md#validate) - Validate License Key
* [activate](docs/sdks/licensekeys/README.md#activate) - Activate License Key
* [deactivate](docs/sdks/licensekeys/README.md#deactivate) - Deactivate License Key

### [meters](docs/sdks/meters/README.md)

* [list](docs/sdks/meters/README.md#list) - List Meters
* [create](docs/sdks/meters/README.md#create) - Create Meter
* [get](docs/sdks/meters/README.md#get) - Get Meter
* [update](docs/sdks/meters/README.md#update) - Update Meter
* [quantities](docs/sdks/meters/README.md#quantities) - Get Meter Quantities

### [metrics](docs/sdks/metrics/README.md)

* [get](docs/sdks/metrics/README.md#get) - Get Metrics
* [limits](docs/sdks/metrics/README.md#limits) - Get Metrics Limits

### [oauth2](docs/sdks/oauth2/README.md)

* [authorize](docs/sdks/oauth2/README.md#authorize) - Authorize
* [token](docs/sdks/oauth2/README.md#token) - Request Token
* [revoke](docs/sdks/oauth2/README.md#revoke) - Revoke Token
* [introspect](docs/sdks/oauth2/README.md#introspect) - Introspect Token
* [userinfo](docs/sdks/oauth2/README.md#userinfo) - Get User Info

### [orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List Orders
* [get](docs/sdks/orders/README.md#get) - Get Order
* [update](docs/sdks/orders/README.md#update) - Update Order
* [generateInvoice](docs/sdks/orders/README.md#generateinvoice) - Generate Order Invoice
* [invoice](docs/sdks/orders/README.md#invoice) - Get Order Invoice

### [organizations](docs/sdks/organizations/README.md)

* [list](docs/sdks/organizations/README.md#list) - List Organizations
* [create](docs/sdks/organizations/README.md#create) - Create Organization
* [get](docs/sdks/organizations/README.md#get) - Get Organization
* [update](docs/sdks/organizations/README.md#update) - Update Organization

### [payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List Payments
* [get](docs/sdks/payments/README.md#get) - Get Payment


### [products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List Products
* [create](docs/sdks/products/README.md#create) - Create Product
* [get](docs/sdks/products/README.md#get) - Get Product
* [update](docs/sdks/products/README.md#update) - Update Product
* [updateBenefits](docs/sdks/products/README.md#updatebenefits) - Update Product Benefits

### [refunds](docs/sdks/refunds/README.md)

* [list](docs/sdks/refunds/README.md#list) - List Refunds
* [create](docs/sdks/refunds/README.md#create) - Create Refund

### [subscriptions](docs/sdks/subscriptions/README.md)

* [list](docs/sdks/subscriptions/README.md#list) - List Subscriptions
* [export](docs/sdks/subscriptions/README.md#export) - Export Subscriptions
* [get](docs/sdks/subscriptions/README.md#get) - Get Subscription
* [update](docs/sdks/subscriptions/README.md#update) - Update Subscription
* [revoke](docs/sdks/subscriptions/README.md#revoke) - Revoke Subscription

### [webhooks](docs/sdks/webhooks/README.md)

* [listWebhookEndpoints](docs/sdks/webhooks/README.md#listwebhookendpoints) - List Webhook Endpoints
* [createWebhookEndpoint](docs/sdks/webhooks/README.md#createwebhookendpoint) - Create Webhook Endpoint
* [getWebhookEndpoint](docs/sdks/webhooks/README.md#getwebhookendpoint) - Get Webhook Endpoint
* [updateWebhookEndpoint](docs/sdks/webhooks/README.md#updatewebhookendpoint) - Update Webhook Endpoint
* [deleteWebhookEndpoint](docs/sdks/webhooks/README.md#deletewebhookendpoint) - Delete Webhook Endpoint
* [resetWebhookEndpointSecret](docs/sdks/webhooks/README.md#resetwebhookendpointsecret) - Reset Webhook Endpoint Secret
* [listWebhookDeliveries](docs/sdks/webhooks/README.md#listwebhookdeliveries) - List Webhook Deliveries
* [redeliverWebhookEvent](docs/sdks/webhooks/README.md#redeliverwebhookevent) - Redeliver Webhook Event

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`benefitsCreate`](docs/sdks/benefits/README.md#create) - Create Benefit
- [`benefitsDelete`](docs/sdks/benefits/README.md#delete) - Delete Benefit
- [`benefitsGet`](docs/sdks/benefits/README.md#get) - Get Benefit
- [`benefitsGrants`](docs/sdks/benefits/README.md#grants) - List Benefit Grants
- [`benefitsList`](docs/sdks/benefits/README.md#list) - List Benefits
- [`benefitsUpdate`](docs/sdks/benefits/README.md#update) - Update Benefit
- [`checkoutLinksCreate`](docs/sdks/checkoutlinks/README.md#create) - Create Checkout Link
- [`checkoutLinksDelete`](docs/sdks/checkoutlinks/README.md#delete) - Delete Checkout Link
- [`checkoutLinksGet`](docs/sdks/checkoutlinks/README.md#get) - Get Checkout Link
- [`checkoutLinksList`](docs/sdks/checkoutlinks/README.md#list) - List Checkout Links
- [`checkoutLinksUpdate`](docs/sdks/checkoutlinks/README.md#update) - Update Checkout Link
- [`checkoutsClientConfirm`](docs/sdks/checkouts/README.md#clientconfirm) - Confirm Checkout Session from Client
- [`checkoutsClientGet`](docs/sdks/checkouts/README.md#clientget) - Get Checkout Session from Client
- [`checkoutsClientUpdate`](docs/sdks/checkouts/README.md#clientupdate) - Update Checkout Session from Client
- [`checkoutsCreate`](docs/sdks/checkouts/README.md#create) - Create Checkout Session
- [`checkoutsGet`](docs/sdks/checkouts/README.md#get) - Get Checkout Session
- [`checkoutsList`](docs/sdks/checkouts/README.md#list) - List Checkout Sessions
- [`checkoutsUpdate`](docs/sdks/checkouts/README.md#update) - Update Checkout Session
- [`customerMetersGet`](docs/sdks/customermeters/README.md#get) - Get Customer Meter
- [`customerMetersList`](docs/sdks/customermeters/README.md#list) - List Customer Meters
- [`customerPortalBenefitGrantsGet`](docs/sdks/benefitgrants/README.md#get) - Get Benefit Grant
- [`customerPortalBenefitGrantsList`](docs/sdks/benefitgrants/README.md#list) - List Benefit Grants
- [`customerPortalBenefitGrantsUpdate`](docs/sdks/benefitgrants/README.md#update) - Update Benefit Grant
- [`customerPortalCustomerMetersGet`](docs/sdks/polarcustomermeters/README.md#get) - Get Customer Meter
- [`customerPortalCustomerMetersList`](docs/sdks/polarcustomermeters/README.md#list) - List Meters
- [`customerPortalCustomersAddPaymentMethod`](docs/sdks/polarcustomers/README.md#addpaymentmethod) - Add Customer Payment Method
- [`customerPortalCustomersDeletePaymentMethod`](docs/sdks/polarcustomers/README.md#deletepaymentmethod) - Delete Customer Payment Method
- [`customerPortalCustomersGet`](docs/sdks/polarcustomers/README.md#get) - Get Customer
- [`customerPortalCustomersListPaymentMethods`](docs/sdks/polarcustomers/README.md#listpaymentmethods) - List Customer Payment Methods
- [`customerPortalCustomersUpdate`](docs/sdks/polarcustomers/README.md#update) - Update Customer
- [`customerPortalDownloadablesList`](docs/sdks/downloadables/README.md#list) - List Downloadables
- [`customerPortalLicenseKeysActivate`](docs/sdks/polarlicensekeys/README.md#activate) - Activate License Key
- [`customerPortalLicenseKeysDeactivate`](docs/sdks/polarlicensekeys/README.md#deactivate) - Deactivate License Key
- [`customerPortalLicenseKeysGet`](docs/sdks/polarlicensekeys/README.md#get) - Get License Key
- [`customerPortalLicenseKeysList`](docs/sdks/polarlicensekeys/README.md#list) - List License Keys
- [`customerPortalLicenseKeysValidate`](docs/sdks/polarlicensekeys/README.md#validate) - Validate License Key
- [`customerPortalOrdersConfirmRetryPayment`](docs/sdks/polarorders/README.md#confirmretrypayment) - Confirm Retry Payment
- [`customerPortalOrdersGenerateInvoice`](docs/sdks/polarorders/README.md#generateinvoice) - Generate Order Invoice
- [`customerPortalOrdersGet`](docs/sdks/polarorders/README.md#get) - Get Order
- [`customerPortalOrdersGetPaymentStatus`](docs/sdks/polarorders/README.md#getpaymentstatus) - Get Order Payment Status
- [`customerPortalOrdersInvoice`](docs/sdks/polarorders/README.md#invoice) - Get Order Invoice
- [`customerPortalOrdersList`](docs/sdks/polarorders/README.md#list) - List Orders
- [`customerPortalOrdersUpdate`](docs/sdks/polarorders/README.md#update) - Update Order
- [`customerPortalOrganizationsGet`](docs/sdks/polarorganizations/README.md#get) - Get Organization
- [`customerPortalSubscriptionsCancel`](docs/sdks/polarsubscriptions/README.md#cancel) - Cancel Subscription
- [`customerPortalSubscriptionsGet`](docs/sdks/polarsubscriptions/README.md#get) - Get Subscription
- [`customerPortalSubscriptionsList`](docs/sdks/polarsubscriptions/README.md#list) - List Subscriptions
- [`customerPortalSubscriptionsUpdate`](docs/sdks/polarsubscriptions/README.md#update) - Update Subscription
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create Customer
- [`customersDelete`](docs/sdks/customers/README.md#delete) - Delete Customer
- [`customersDeleteExternal`](docs/sdks/customers/README.md#deleteexternal) - Delete Customer by External ID
- [`customerSessionsCreate`](docs/sdks/customersessions/README.md#create) - Create Customer Session
- [`customersGet`](docs/sdks/customers/README.md#get) - Get Customer
- [`customersGetExternal`](docs/sdks/customers/README.md#getexternal) - Get Customer by External ID
- [`customersGetState`](docs/sdks/customers/README.md#getstate) - Get Customer State
- [`customersGetStateExternal`](docs/sdks/customers/README.md#getstateexternal) - Get Customer State by External ID
- [`customersList`](docs/sdks/customers/README.md#list) - List Customers
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update Customer
- [`customersUpdateExternal`](docs/sdks/customers/README.md#updateexternal) - Update Customer by External ID
- [`customFieldsCreate`](docs/sdks/customfields/README.md#create) - Create Custom Field
- [`customFieldsDelete`](docs/sdks/customfields/README.md#delete) - Delete Custom Field
- [`customFieldsGet`](docs/sdks/customfields/README.md#get) - Get Custom Field
- [`customFieldsList`](docs/sdks/customfields/README.md#list) - List Custom Fields
- [`customFieldsUpdate`](docs/sdks/customfields/README.md#update) - Update Custom Field
- [`discountsCreate`](docs/sdks/discounts/README.md#create) - Create Discount
- [`discountsDelete`](docs/sdks/discounts/README.md#delete) - Delete Discount
- [`discountsGet`](docs/sdks/discounts/README.md#get) - Get Discount
- [`discountsList`](docs/sdks/discounts/README.md#list) - List Discounts
- [`discountsUpdate`](docs/sdks/discounts/README.md#update) - Update Discount
- [`eventsGet`](docs/sdks/events/README.md#get) - Get Event
- [`eventsIngest`](docs/sdks/events/README.md#ingest) - Ingest Events
- [`eventsList`](docs/sdks/events/README.md#list) - List Events
- [`eventsListNames`](docs/sdks/events/README.md#listnames) - List Event Names
- [`filesCreate`](docs/sdks/files/README.md#create) - Create File
- [`filesDelete`](docs/sdks/files/README.md#delete) - Delete File
- [`filesList`](docs/sdks/files/README.md#list) - List Files
- [`filesUpdate`](docs/sdks/files/README.md#update) - Update File
- [`filesUploaded`](docs/sdks/files/README.md#uploaded) - Complete File Upload
- [`licenseKeysActivate`](docs/sdks/licensekeys/README.md#activate) - Activate License Key
- [`licenseKeysDeactivate`](docs/sdks/licensekeys/README.md#deactivate) - Deactivate License Key
- [`licenseKeysGet`](docs/sdks/licensekeys/README.md#get) - Get License Key
- [`licenseKeysGetActivation`](docs/sdks/licensekeys/README.md#getactivation) - Get Activation
- [`licenseKeysList`](docs/sdks/licensekeys/README.md#list) - List License Keys
- [`licenseKeysUpdate`](docs/sdks/licensekeys/README.md#update) - Update License Key
- [`licenseKeysValidate`](docs/sdks/licensekeys/README.md#validate) - Validate License Key
- [`metersCreate`](docs/sdks/meters/README.md#create) - Create Meter
- [`metersGet`](docs/sdks/meters/README.md#get) - Get Meter
- [`metersList`](docs/sdks/meters/README.md#list) - List Meters
- [`metersQuantities`](docs/sdks/meters/README.md#quantities) - Get Meter Quantities
- [`metersUpdate`](docs/sdks/meters/README.md#update) - Update Meter
- [`metricsGet`](docs/sdks/metrics/README.md#get) - Get Metrics
- [`metricsLimits`](docs/sdks/metrics/README.md#limits) - Get Metrics Limits
- [`oauth2Authorize`](docs/sdks/oauth2/README.md#authorize) - Authorize
- [`oauth2Introspect`](docs/sdks/oauth2/README.md#introspect) - Introspect Token
- [`oauth2Revoke`](docs/sdks/oauth2/README.md#revoke) - Revoke Token
- [`oauth2Token`](docs/sdks/oauth2/README.md#token) - Request Token
- [`oauth2Userinfo`](docs/sdks/oauth2/README.md#userinfo) - Get User Info
- [`ordersGenerateInvoice`](docs/sdks/orders/README.md#generateinvoice) - Generate Order Invoice
- [`ordersGet`](docs/sdks/orders/README.md#get) - Get Order
- [`ordersInvoice`](docs/sdks/orders/README.md#invoice) - Get Order Invoice
- [`ordersList`](docs/sdks/orders/README.md#list) - List Orders
- [`ordersUpdate`](docs/sdks/orders/README.md#update) - Update Order
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create Organization
- [`organizationsGet`](docs/sdks/organizations/README.md#get) - Get Organization
- [`organizationsList`](docs/sdks/organizations/README.md#list) - List Organizations
- [`organizationsUpdate`](docs/sdks/organizations/README.md#update) - Update Organization
- [`paymentsGet`](docs/sdks/payments/README.md#get) - Get Payment
- [`paymentsList`](docs/sdks/payments/README.md#list) - List Payments
- [`productsCreate`](docs/sdks/products/README.md#create) - Create Product
- [`productsGet`](docs/sdks/products/README.md#get) - Get Product
- [`productsList`](docs/sdks/products/README.md#list) - List Products
- [`productsUpdate`](docs/sdks/products/README.md#update) - Update Product
- [`productsUpdateBenefits`](docs/sdks/products/README.md#updatebenefits) - Update Product Benefits
- [`refundsCreate`](docs/sdks/refunds/README.md#create) - Create Refund
- [`refundsList`](docs/sdks/refunds/README.md#list) - List Refunds
- [`subscriptionsExport`](docs/sdks/subscriptions/README.md#export) - Export Subscriptions
- [`subscriptionsGet`](docs/sdks/subscriptions/README.md#get) - Get Subscription
- [`subscriptionsList`](docs/sdks/subscriptions/README.md#list) - List Subscriptions
- [`subscriptionsRevoke`](docs/sdks/subscriptions/README.md#revoke) - Revoke Subscription
- [`subscriptionsUpdate`](docs/sdks/subscriptions/README.md#update) - Update Subscription
- [`webhooksCreateWebhookEndpoint`](docs/sdks/webhooks/README.md#createwebhookendpoint) - Create Webhook Endpoint
- [`webhooksDeleteWebhookEndpoint`](docs/sdks/webhooks/README.md#deletewebhookendpoint) - Delete Webhook Endpoint
- [`webhooksGetWebhookEndpoint`](docs/sdks/webhooks/README.md#getwebhookendpoint) - Get Webhook Endpoint
- [`webhooksListWebhookDeliveries`](docs/sdks/webhooks/README.md#listwebhookdeliveries) - List Webhook Deliveries
- [`webhooksListWebhookEndpoints`](docs/sdks/webhooks/README.md#listwebhookendpoints) - List Webhook Endpoints
- [`webhooksRedeliverWebhookEvent`](docs/sdks/webhooks/README.md#redeliverwebhookevent) - Redeliver Webhook Event
- [`webhooksResetWebhookEndpointSecret`](docs/sdks/webhooks/README.md#resetwebhookendpointsecret) - Reset Webhook Endpoint Secret
- [`webhooksUpdateWebhookEndpoint`](docs/sdks/webhooks/README.md#updatewebhookendpoint) - Update Webhook Endpoint

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.organizations.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.organizations.list({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.organizations.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`PolarError`](./src/models/errors/polarerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Polar } from "@polar-sh/sdk";
import { HTTPValidationError } from "@polar-sh/sdk/models/errors/httpvalidationerror.js";
import { PolarError } from "@polar-sh/sdk/models/errors/polarerror.js.js";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  try {
    const result = await polar.organizations.list({});

    for await (const page of result) {
      console.log(page);
    }
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof PolarError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof HTTPValidationError) {
        console.log(error.data$.detail); // ValidationError[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`PolarError`](./src/models/errors/polarerror.ts): The base class for HTTP error responses.
  * [`HTTPValidationError`](./src/models/errors/httpvalidationerror.ts): Validation Error. Status code `422`. *

<details><summary>Less common errors (22)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`PolarError`](./src/models/errors/polarerror.ts)**:
* [`ResourceNotFound`](./src/models/errors/resourcenotfound.ts): Status code `404`. Applicable to 76 of 128 methods.*
* [`NotPermitted`](./src/models/errors/notpermitted.ts): Status code `403`. Applicable to 10 of 128 methods.*
* [`Unauthorized`](./src/models/errors/unauthorized.ts): Not authorized to manage license key. Status code `401`. Applicable to 5 of 128 methods.*
* [`AlreadyCanceledSubscription`](./src/models/errors/alreadycanceledsubscription.ts): Status code `403`. Applicable to 4 of 128 methods.*
* [`AlreadyActiveSubscriptionError`](./src/models/errors/alreadyactivesubscriptionerror.ts): The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments. Status code `403`. Applicable to 3 of 128 methods.*
* [`NotOpenCheckout`](./src/models/errors/notopencheckout.ts): The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments. Status code `403`. Applicable to 3 of 128 methods.*
* [`PaymentNotReady`](./src/models/errors/paymentnotready.ts): The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments. Status code `403`. Applicable to 3 of 128 methods.*
* [`ExpiredCheckoutError`](./src/models/errors/expiredcheckouterror.ts): The checkout session is expired. Status code `410`. Applicable to 3 of 128 methods.*
* [`InvoiceAlreadyExists`](./src/models/errors/invoicealreadyexists.ts): Order already has an invoice. Status code `409`. Applicable to 2 of 128 methods.*
* [`MissingInvoiceBillingDetails`](./src/models/errors/missinginvoicebillingdetails.ts): Order is not paid or is missing billing name or address. Status code `422`. Applicable to 2 of 128 methods.*
* [`NotPaidOrder`](./src/models/errors/notpaidorder.ts): Order is not paid or is missing billing name or address. Status code `422`. Applicable to 2 of 128 methods.*
* [`RefundAmountTooHigh`](./src/models/errors/refundamounttoohigh.ts): Refund amount exceeds remaining order balance. Status code `400`. Applicable to 1 of 128 methods.*
* [`PaymentError`](./src/models/errors/paymenterror.ts): The payment failed. Status code `400`. Applicable to 1 of 128 methods.*
* [`RefundedAlready`](./src/models/errors/refundedalready.ts): Order is already fully refunded. Status code `403`. Applicable to 1 of 128 methods.*
* [`PaymentAlreadyInProgress`](./src/models/errors/paymentalreadyinprogress.ts): Payment already in progress. Status code `409`. Applicable to 1 of 128 methods.*
* [`OrderNotEligibleForRetry`](./src/models/errors/ordernoteligibleforretry.ts): Order not eligible for retry or payment confirmation failed. Status code `422`. Applicable to 1 of 128 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name         | Server                         | Description            |
| ------------ | ------------------------------ | ---------------------- |
| `production` | `https://api.polar.sh`         | Production environment |
| `sandbox`    | `https://sandbox-api.polar.sh` | Sandbox environment    |

#### Example

```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  server: "sandbox",
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.organizations.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  serverURL: "https://api.polar.sh",
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.organizations.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Polar } from "@polar-sh/sdk";
import { HTTPClient } from "@polar-sh/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Polar({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name          | Type | Scheme      | Environment Variable |
| ------------- | ---- | ----------- | -------------------- |
| `accessToken` | http | HTTP Bearer | `POLAR_ACCESS_TOKEN` |

To authenticate with the API the `accessToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.organizations.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.benefitGrants.list({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Polar } from "@polar-sh/sdk";

const sdk = new Polar({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `POLAR_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@polar-sh/sdk&utm_campaign=typescript)
