# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.2.0] - 2019-08-27

### Added
- `ssoLogin` function added to login with identity provider

## [3.1.0] - 2019-08-14

### Added
- `onFailure` callback for when authentication fails, or an error occurs

## [3.0.1] - 2019-07-15

### Security
- Bump `mixin-deep` for https://www.npmjs.com/advisories/1013 - only `package-lock.json`
- Bump `set-value` for https://www.npmjs.com/advisories/1012 - only `package-lock.json`

## [3.0.0] - 2019-07-09

### Added
- New `BoclipsSecurity` export for singleton management
- Internal `BoclipsKeycloakSecurity` module for managing authentication 
- Changelog

### Removed
- *BREAKING* [`authenticate`, `isAuthenticated`, `logout` functions removed from export](./CHANGELOG.md#simplified-boclipssecurity-exports)