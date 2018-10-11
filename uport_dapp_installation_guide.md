# uPort DApp Installation Guide
## Requirements
- node  
https://nodejs.org/en/download/
- yarn  
https://yarnpkg.com/zh-Hans/docs/install
- ganache-cli  
```
$ npm install -g ganache-cli
```
- truffle  
```
$ npm install -g truffle
```

## Run ganache-cli
```
$ ganache-cli
```

## uport-contracts
- Download uport-contracts
```
$ git clone https://github.com/litianc/uport-contracts.git
$ cd uport-contracts
```
- Migrate
```
$ truffle migrate --network localhost
```

## uport-dapp
- Download uport-dapp
```
$ git clone https://github.com/litianc/uport-dapp.git
$ cd uport-dapp
```
- Modify **config.json**  
*with your deployed IdentityFactory and UportRegistry address.*
```js
"contract": {
    "IdentityFactory": "0x6ef4aa4af375efb4e076f0a79698ed771a8f11b3",
    "UportRegistry": "0xa464ecde6f6835d1f649da8b8b9848e77a14912e"
},
"ethereum": {
    "host": "http://127.0.0.1:8545"
},
"ipfs": {
    "host": "ipfs.infura.io",
    "port": 5001,
    "protocol": "https"
}    
```

- Generate JWT RS256 public/private RSA key pair
```
$ mkdir keystore
$ ./jwt_rs256.sh
```

- Install
```
$ yarn install
$ # npm would lead to a problem
```

- Build
```
$ yarn buildp
```

- Start
```
$ yarn start
```

- Open  
http://127.0.0.1:3000

## issue for uport-contracts
- Fix: “Error: UportRegistry contract constructor expected 1 arguments, received 0”
> reference：https://github.com/trufflesuite/truffle/issues/811
