# RESTful-BTC
A RESTful API for Bitcoin prices


## Geting Started

Clone this repository: https://github.com/wchinny/RESTful-BTC to get started.

### Prerequisites

Express, Mongoose, and body-parser are required. Install them by running the following in the terminal:

```
npm install express
npm install mongoose
npm install body-parser
```

## How stuff works

The program pulls data from the CoinMarketcap API BTC ticker in 120-second (2 minutes) intervals, and adds the value with a timestamp to a MongoDB database on MLab.

Change the interval by editing the line below in server.js, with 120000ms being the default value:

```
setTimeout(refresh, 120000);
```

## UNIX Time

The timestamp is represented as the UNIX Epoch time by default. To convert to a human-readable format, here are a few routines to use

JavaScript:

```
var myDate = new Date( your epoch date *1000);
document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());

``

Ruby:

```
Time.at(epoch)
```

Python:

```
import time
time.strftime("%a, %d %b %Y %H:%M:%S +0000", time.gmtime(epoch))

```








