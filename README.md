# Rookout + Circleci Webinar 

## Rookout:

[Rookout][rookout-getting-started]
 gives full visibility into your app without the need to restart, redeploy or write code.
Rookout makes it easy debug any app deployment - cloud or local, dev or production, monolithic or microservices. Even serverless!

## Rookout using circleci-orb:
The rookout circle-ci orb allows you debug your own nodeJS scripts running in your circle-ci jobs.


### Install guides:

   1. Offical docs at [Circleci][circleci-rookout-orb]
   2. The [math server example with orb][math-server-example-orb] (as shown on the webinar) 
   3. Orb source code at [Github][official-rookout-orb]

## Rookout without orb:
  1. Rookout docs - https://docs.rookout.com
  2. The [math server example using sdk][math-server-example-no-orb] (as shown on the webinar) 




[rookout-getting-started]: https://docs.rookout.com
[official-rookout-orb]: https://github.com/Rookout/circle-ci-orbs
[circleci-rookout-orb]: https://circleci.com/blog/debug-your-circleci-environments-using-the-rookout-orb/
[math-server-example-orb]: https://github.com/Rookout/circleci-rookout-orb-webinar/tree/adding-minus-endpoint
[math-server-example-no-orb]: https://github.com/Rookout/circleci-rookout-orb-webinar/tree/adding-rookout-to-server