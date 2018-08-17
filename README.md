# shardus-crypto-benchmark

This project aims to research what are the fast crypto library by 
benchmarking different uc2-crypto-utils and sphincs.

## UC2-Crypto-Utils
| Subject                    | Result             |
|----------------------------|--------------------|
| generate keypair           | 16666.67 keypair/s |
| sign object                | 15873.02 obj/s     |
| verify object              | 5747.13  obj/s     |

## Sphincs
| Subject                    | Result             |
|----------------------------|--------------------|
| generate keypair           | 72.06   keypair/s  |
| sign object                | 4.90    obj/s      |
| verify object              | 362.32  obj/s      |


## Use

```JavaScript
mocha
```
