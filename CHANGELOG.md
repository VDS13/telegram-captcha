
# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.2.0](https://github.com/VDS13/telegram-captcha/compare/1.1.0...1.2.0) - 2023-07-11

### Added:

* Vietnamese language support.

## [1.1.0](https://github.com/VDS13/telegram-captcha/compare/1.0.0...1.1.0) - 2023-04-12

### Fixed:

* An error when, after entering the captcha correctly, the user was still banned.
* [CVE-2021-32796](https://github.com/advisories/GHSA-5fg8-2547-mr8q)
* [CVE-2022-39353](https://github.com/advisories/GHSA-crh6-fp67-6883)

## [1.0.0](https://github.com/VDS13/telegram-captcha/compare/0.1.0...1.0.0) - 2023-04-11

### Changed:

* The `node-telegram-bot-api` package has been added to the library.

## [0.2.0](https://github.com/VDS13/telegram-captcha/compare/0.1.0...0.2.0) - 2023-04-08

### Added:

* Option `"time for enter captcha"`. The option sets the required time to enter the captcha. The parameter is specified in minutes. The default value is `5`.
