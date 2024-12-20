# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2022-02-07T17:42:25.899Z"),
    modifiedAt: new Date("2023-06-16T23:24:38.141Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://prickly-yak.com",
    logoUri: "https://gleaming-account.name/",
    tosUri: "https://infinite-heating.org",
    policyUri: "https://fatherly-fat.biz",
  },
  sub: {
    id: "<value>",
    email: "Marcia_Gibson86@gmail.com",
    avatarUrl: "https://flawed-tusk.com/",
  },
  scopes: [
    "admin",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2022-07-10T09:38:33.519Z"),
    modifiedAt: new Date("2024-02-14T02:44:27.976Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://oval-bonfire.info",
    logoUri: "https://delectable-encouragement.net",
    tosUri: "https://shadowy-season.net/",
    policyUri: "https://humiliating-octave.biz",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://suburban-skeleton.info/",
  },
  scopes: [
    "benefits:read",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://kooky-deduction.biz/",
    },
  ],
};
```

