# BenefitsUpdateBenefitUpdate


## Supported Types

### `components.BenefitCustomUpdate`

```typescript
const value: components.BenefitCustomUpdate = {
  type: "custom",
};
```

### `components.BenefitDiscordUpdate`

```typescript
const value: components.BenefitDiscordUpdate = {
  type: "discord",
};
```

### `components.BenefitGitHubRepositoryUpdate`

```typescript
const value: components.BenefitGitHubRepositoryUpdate = {
  type: "github_repository",
  properties: {
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
    permission: "admin",
  },
};
```

### `components.BenefitDownloadablesUpdate`

```typescript
const value: components.BenefitDownloadablesUpdate = {
  type: "downloadables",
};
```

### `components.BenefitLicenseKeysUpdate`

```typescript
const value: components.BenefitLicenseKeysUpdate = {
  type: "license_keys",
};
```

### `components.BenefitMeterCreditUpdate`

```typescript
const value: components.BenefitMeterCreditUpdate = {
  type: "meter_credit",
};
```

