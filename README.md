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

Read the docs at https://docs.polar.sh/api
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Pagination](#pagination)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
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

const polar = new Polar({
    accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
    const result = await polar.users.benefits.list({});

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [users.benefits](docs/sdks/polarbenefits/README.md)

* [list](docs/sdks/polarbenefits/README.md#list) - List Benefits
* [retrieve](docs/sdks/polarbenefits/README.md#retrieve) - Get Benefit

### [users.orders](docs/sdks/polarorders/README.md)

* [list](docs/sdks/polarorders/README.md#list) - List Orders
* [retrieve](docs/sdks/polarorders/README.md#retrieve) - Get Order
* [invoice](docs/sdks/polarorders/README.md#invoice) - Get Order Invoice

### [users.subscriptions](docs/sdks/polarsubscriptions/README.md)

* [list](docs/sdks/polarsubscriptions/README.md#list) - List Subscriptions
* [create](docs/sdks/polarsubscriptions/README.md#create) - Create Free Subscription
* [retrieve](docs/sdks/polarsubscriptions/README.md#retrieve) - Get Subscription
* [update](docs/sdks/polarsubscriptions/README.md#update) - Update Subscription
* [cancel](docs/sdks/polarsubscriptions/README.md#cancel) - Cancel Subscription

### [users.advertisements](docs/sdks/polaradvertisements/README.md)

* [list](docs/sdks/polaradvertisements/README.md#list) - List Advertisements
* [create](docs/sdks/polaradvertisements/README.md#create) - Create Advertisement
* [retrieve](docs/sdks/polaradvertisements/README.md#retrieve) - Get Advertisement
* [update](docs/sdks/polaradvertisements/README.md#update) - Update Advertisement
* [delete](docs/sdks/polaradvertisements/README.md#delete) - Delete Advertisement
* [enable](docs/sdks/polaradvertisements/README.md#enable) - Enable Advertisement

### [users.downloadables](docs/sdks/downloadables/README.md)

* [list](docs/sdks/downloadables/README.md#list) - List Downloadables
* [retrieve](docs/sdks/downloadables/README.md#retrieve) - Get Downloadable

### [users.licenseKeys](docs/sdks/polarlicensekeys/README.md)

* [list](docs/sdks/polarlicensekeys/README.md#list) - List License Keys
* [retrieve](docs/sdks/polarlicensekeys/README.md#retrieve) - Get License Key
* [validate](docs/sdks/polarlicensekeys/README.md#validate) - Validate License Key
* [activate](docs/sdks/polarlicensekeys/README.md#activate) - Activate License Key
* [deactivate](docs/sdks/polarlicensekeys/README.md#deactivate) - Deactivate License Key

### [externalOrganizations](docs/sdks/externalorganizations/README.md)

* [list](docs/sdks/externalorganizations/README.md#list) - List External Organizations

### [repositories](docs/sdks/repositories/README.md)

* [list](docs/sdks/repositories/README.md#list) - List Repositories
* [retrieve](docs/sdks/repositories/README.md#retrieve) - Get Repository
* [update](docs/sdks/repositories/README.md#update) - Update Repository

### [organizations](docs/sdks/organizations/README.md)

* [list](docs/sdks/organizations/README.md#list) - List Organizations
* [create](docs/sdks/organizations/README.md#create) - Create Organization
* [retrieve](docs/sdks/organizations/README.md#retrieve) - Get Organization
* [update](docs/sdks/organizations/README.md#update) - Update Organization

### [subscriptions](docs/sdks/subscriptions/README.md)

* [list](docs/sdks/subscriptions/README.md#list) - List Subscriptions
* [create](docs/sdks/subscriptions/README.md#create) - Create Free Subscription
* [importSubscriptions](docs/sdks/subscriptions/README.md#importsubscriptions) - Import Subscriptions
* [export](docs/sdks/subscriptions/README.md#export) - Export Subscriptions

### [articles](docs/sdks/articles/README.md)

* [list](docs/sdks/articles/README.md#list) - List Articles
* [create](docs/sdks/articles/README.md#create) - Create Article
* [retrieve](docs/sdks/articles/README.md#retrieve) - Get Article
* [update](docs/sdks/articles/README.md#update) - Update Article
* [delete](docs/sdks/articles/README.md#delete) - Delete Article
* [receivers](docs/sdks/articles/README.md#receivers) - Get Article Receivers Count
* [preview](docs/sdks/articles/README.md#preview) - Send Article Preview
* [send](docs/sdks/articles/README.md#send) - Send Article

### [advertisements](docs/sdks/advertisements/README.md)

* [list](docs/sdks/advertisements/README.md#list) - List Campaigns
* [retrieve](docs/sdks/advertisements/README.md#retrieve) - Get Campaign

### [oauth2](docs/sdks/oauth2/README.md)

* [token](docs/sdks/oauth2/README.md#token) - Request Token
* [revoke](docs/sdks/oauth2/README.md#revoke) - Revoke Token
* [introspect](docs/sdks/oauth2/README.md#introspect) - Introspect Token
* [userinfo](docs/sdks/oauth2/README.md#userinfo) - Get User Info

### [oauth2.clients](docs/sdks/clients/README.md)

* [list](docs/sdks/clients/README.md#list) - List Clients
* [create](docs/sdks/clients/README.md#create) - Create Client
* [retrieve](docs/sdks/clients/README.md#retrieve) - Get Client
* [update](docs/sdks/clients/README.md#update) - Update Client
* [delete](docs/sdks/clients/README.md#delete) - Delete Client

### [benefits](docs/sdks/benefits/README.md)

* [list](docs/sdks/benefits/README.md#list) - List Benefits
* [create](docs/sdks/benefits/README.md#create) - Create Benefit
* [retrieve](docs/sdks/benefits/README.md#retrieve) - Get Benefit
* [update](docs/sdks/benefits/README.md#update) - Update Benefit
* [delete](docs/sdks/benefits/README.md#delete) - Delete Benefit
* [grants](docs/sdks/benefits/README.md#grants) - List Benefit Grants

### [products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List Products
* [create](docs/sdks/products/README.md#create) - Create Product
* [retrieve](docs/sdks/products/README.md#retrieve) - Get Product
* [update](docs/sdks/products/README.md#update) - Update Product
* [updateBenefits](docs/sdks/products/README.md#updatebenefits) - Update Product Benefits

### [orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List Orders
* [retrieve](docs/sdks/orders/README.md#retrieve) - Get Order
* [invoice](docs/sdks/orders/README.md#invoice) - Get Order Invoice

### [checkouts](docs/sdks/checkouts/README.md)

* [create](docs/sdks/checkouts/README.md#create) - Create Checkout
* [retrieve](docs/sdks/checkouts/README.md#retrieve) - Get Checkout

### [files](docs/sdks/files/README.md)

* [list](docs/sdks/files/README.md#list) - List Files
* [create](docs/sdks/files/README.md#create) - Create File
* [uploaded](docs/sdks/files/README.md#uploaded) - Complete File Upload
* [update](docs/sdks/files/README.md#update) - Update File
* [delete](docs/sdks/files/README.md#delete) - Delete File

### [metrics](docs/sdks/metrics/README.md)

* [retrieve](docs/sdks/metrics/README.md#retrieve) - Get Metrics
* [limits](docs/sdks/metrics/README.md#limits) - Get Metrics Limits

### [licenseKeys](docs/sdks/licensekeys/README.md)

* [list](docs/sdks/licensekeys/README.md#list) - List License Keys
* [retrieve](docs/sdks/licensekeys/README.md#retrieve) - Get License Key
* [update](docs/sdks/licensekeys/README.md#update) - Update License Key
* [getActivation](docs/sdks/licensekeys/README.md#getactivation) - Get Activation
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

- [advertisementsList](docs/sdks/advertisements/README.md#list)
- [advertisementsRetrieve](docs/sdks/advertisements/README.md#retrieve)
- [articlesCreate](docs/sdks/articles/README.md#create)
- [articlesDelete](docs/sdks/articles/README.md#delete)
- [articlesList](docs/sdks/articles/README.md#list)
- [articlesPreview](docs/sdks/articles/README.md#preview)
- [articlesReceivers](docs/sdks/articles/README.md#receivers)
- [articlesRetrieve](docs/sdks/articles/README.md#retrieve)
- [articlesSend](docs/sdks/articles/README.md#send)
- [articlesUpdate](docs/sdks/articles/README.md#update)
- [benefitsCreate](docs/sdks/benefits/README.md#create)
- [benefitsDelete](docs/sdks/benefits/README.md#delete)
- [benefitsGrants](docs/sdks/benefits/README.md#grants)
- [benefitsList](docs/sdks/benefits/README.md#list)
- [benefitsRetrieve](docs/sdks/benefits/README.md#retrieve)
- [benefitsUpdate](docs/sdks/benefits/README.md#update)
- [checkoutsCreate](docs/sdks/checkouts/README.md#create)
- [checkoutsRetrieve](docs/sdks/checkouts/README.md#retrieve)
- [externalOrganizationsList](docs/sdks/externalorganizations/README.md#list)
- [filesCreate](docs/sdks/files/README.md#create)
- [filesDelete](docs/sdks/files/README.md#delete)
- [filesList](docs/sdks/files/README.md#list)
- [filesUpdate](docs/sdks/files/README.md#update)
- [filesUploaded](docs/sdks/files/README.md#uploaded)
- [licenseKeysGetActivation](docs/sdks/licensekeys/README.md#getactivation)
- [licenseKeysList](docs/sdks/licensekeys/README.md#list)
- [licenseKeysRetrieve](docs/sdks/licensekeys/README.md#retrieve)
- [licenseKeysUpdate](docs/sdks/licensekeys/README.md#update)
- [metricsLimits](docs/sdks/metrics/README.md#limits)
- [metricsRetrieve](docs/sdks/metrics/README.md#retrieve)
- [oauth2ClientsCreate](docs/sdks/clients/README.md#create)
- [oauth2ClientsDelete](docs/sdks/clients/README.md#delete)
- [oauth2ClientsList](docs/sdks/clients/README.md#list)
- [oauth2ClientsRetrieve](docs/sdks/clients/README.md#retrieve)
- [oauth2ClientsUpdate](docs/sdks/clients/README.md#update)
- [oauth2Introspect](docs/sdks/oauth2/README.md#introspect)
- [oauth2Revoke](docs/sdks/oauth2/README.md#revoke)
- [oauth2Token](docs/sdks/oauth2/README.md#token)
- [oauth2Userinfo](docs/sdks/oauth2/README.md#userinfo)
- [ordersInvoice](docs/sdks/orders/README.md#invoice)
- [ordersList](docs/sdks/orders/README.md#list)
- [ordersRetrieve](docs/sdks/orders/README.md#retrieve)
- [organizationsCreate](docs/sdks/organizations/README.md#create)
- [organizationsList](docs/sdks/organizations/README.md#list)
- [organizationsRetrieve](docs/sdks/organizations/README.md#retrieve)
- [organizationsUpdate](docs/sdks/organizations/README.md#update)
- [productsCreate](docs/sdks/products/README.md#create)
- [productsList](docs/sdks/products/README.md#list)
- [productsRetrieve](docs/sdks/products/README.md#retrieve)
- [productsUpdateBenefits](docs/sdks/products/README.md#updatebenefits)
- [productsUpdate](docs/sdks/products/README.md#update)
- [repositoriesList](docs/sdks/repositories/README.md#list)
- [repositoriesRetrieve](docs/sdks/repositories/README.md#retrieve)
- [repositoriesUpdate](docs/sdks/repositories/README.md#update)
- [subscriptionsCreate](docs/sdks/subscriptions/README.md#create)
- [subscriptionsExport](docs/sdks/subscriptions/README.md#export)
- [subscriptionsImportSubscriptions](docs/sdks/subscriptions/README.md#importsubscriptions)
- [subscriptionsList](docs/sdks/subscriptions/README.md#list)
- [usersAdvertisementsCreate](docs/sdks/polaradvertisements/README.md#create)
- [usersAdvertisementsDelete](docs/sdks/polaradvertisements/README.md#delete)
- [usersAdvertisementsEnable](docs/sdks/polaradvertisements/README.md#enable)
- [usersAdvertisementsList](docs/sdks/polaradvertisements/README.md#list)
- [usersAdvertisementsRetrieve](docs/sdks/polaradvertisements/README.md#retrieve)
- [usersAdvertisementsUpdate](docs/sdks/polaradvertisements/README.md#update)
- [usersBenefitsList](docs/sdks/polarbenefits/README.md#list)
- [usersBenefitsRetrieve](docs/sdks/polarbenefits/README.md#retrieve)
- [usersDownloadablesList](docs/sdks/downloadables/README.md#list)
- [usersDownloadablesRetrieve](docs/sdks/downloadables/README.md#retrieve)
- [usersLicenseKeysActivate](docs/sdks/polarlicensekeys/README.md#activate)
- [usersLicenseKeysDeactivate](docs/sdks/polarlicensekeys/README.md#deactivate)
- [usersLicenseKeysList](docs/sdks/polarlicensekeys/README.md#list)
- [usersLicenseKeysRetrieve](docs/sdks/polarlicensekeys/README.md#retrieve)
- [usersLicenseKeysValidate](docs/sdks/polarlicensekeys/README.md#validate)
- [usersOrdersInvoice](docs/sdks/polarorders/README.md#invoice)
- [usersOrdersList](docs/sdks/polarorders/README.md#list)
- [usersOrdersRetrieve](docs/sdks/polarorders/README.md#retrieve)
- [usersSubscriptionsCancel](docs/sdks/polarsubscriptions/README.md#cancel)
- [usersSubscriptionsCreate](docs/sdks/polarsubscriptions/README.md#create)
- [usersSubscriptionsList](docs/sdks/polarsubscriptions/README.md#list)
- [usersSubscriptionsRetrieve](docs/sdks/polarsubscriptions/README.md#retrieve)
- [usersSubscriptionsUpdate](docs/sdks/polarsubscriptions/README.md#update)


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
    const result = await polar.users.benefits.list({});

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Polar } from "@polar-sh/sdk";
import { openAsBlob } from "node:fs";

const polar = new Polar({
    accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
    const result = await polar.subscriptions.importSubscriptions({
        file: await openAsBlob("./sample-file"),
        organizationId: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

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
    const result = await polar.users.benefits.list(
        {},
        {
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
        }
    );

    for await (const page of result) {
        // Handle the page
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
    const result = await polar.users.benefits.list({});

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Polar } from "@polar-sh/sdk";
import { HTTPValidationError, SDKValidationError } from "@polar-sh/sdk/models/errors";

const polar = new Polar({
    accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
    let result;
    try {
        result = await polar.users.benefits.list({});
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof HTTPValidationError: {
                // Handle err.data$: HTTPValidationErrorData
                console.error(err);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.polar.sh` | None |

```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
    serverIdx: 0,
    accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
    const result = await polar.users.benefits.list({});

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
    serverURL: "https://api.polar.sh",
    accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
    const result = await polar.users.benefits.list({});

    for await (const page of result) {
        // Handle the page
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

| Name                 | Type                 | Scheme               | Environment Variable |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `accessToken`        | http                 | HTTP Bearer          | `POLAR_ACCESS_TOKEN` |

To authenticate with the API the `accessToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
    accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
    const result = await polar.users.benefits.list({});

    for await (const page of result) {
        // Handle the page
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
