# bfx-report

## Setup

### Install

- Clone Github repository and install projects dependencies :

```console
git clone https://github.com/bitfinexcom/bfx-report.git
cd bfx-report
npm install
```

### Configure service

- As to configure the service copy the json.example files from config folder into new ones. Open a console on projects folder a copy the following codes :

```console
cp config/default.json.example config/default.json
cp config/common.json.example config/common.json
cp config/service.report.json.example config/service.report.json
cp config/schedule.json.example config/schedule.json
cp config/facs/grc.config.json.example config/facs/grc.config.json
```

- To set grenache client for express, edit common.json. If running locally, leave actual values skipping this step.

```console
vim config/common.json
## set grenacheClient value
```

- To change the bitfinex api to connect to, edit `resUrl` in common.json. If you want to conect to main bitfinex api, skip this step, as this value is set by default.
```console
vim config/service.report.json
## set restUrl value
## set company value, example: ( bitfinex / ethfinex / eosfinex ) or leave it blank for general information
```

## Other Requirements

### Grenache network

- Install `Grenache Grape`: <https://github.com/bitfinexcom/grenache-grape>:

```console
npm i -g grenache-grape
```

- Run two Grapes

```console
grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002'
grape --dp 20002 --aph 40001 --bn '127.0.0.1:20001'
```

## Run

### Production environment

- For production environment run in two different consoles :

```console
## Console 1: runs worker
npm run startWorker
## Console 2: runs express server
npm run start
```
### Development environment

- For development environment run in two different consoles :

```console
## Console 1: runs worker
npm run startWorkerDev
## Console 2: runs express server
npm run startDev
```


## Testing

### Run tests

```console
npm test
```
