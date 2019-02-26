# Rookout Orb

The rookout circle-ci orb allows you debug your own nodeJS scripts running in your circle-ci jobs.

## How to use rookout-node circle-ci orb:

1. Specify your ROOKOUT_TOKEN in your circle-ci project Environment Variables

2. Import rookout-node orb:
    ```
    orbs:
      rookout-node: circleci/rookout-node@0.0.7
    ```

3. Call the run_script command:

    ```
    jobs:
    main_flow:
        docker:
        - image: circleci/node:10
        working_directory: ~/circleci-rookout
        steps:
        - checkout:
            path: ~/circleci-rookout
        - run: "npm install"
        - rookout-node/run_script:
            users_script: "node_modules/jest/bin/jest.js ."
            rookout_tags: "${CIRCLE_BRANCH}"
    
    ```

    **Optional Tags**:

    you can specify rook tags in the following way:

    ```
    - rookout-node/run_script:
              users_script: %YOUR_NODE_COMMAND%
              rookout_tags: "yourTag1;YourTag2"
    ```
    
    The default tags value is: '$CIRCLE_PROJECT_REPONAME;$CIRCLE_JOB;circle-ci'


## Further information :

   1. Official docs at https://circleci.com/blog/debug-your-circleci-environments-using-the-rookout-orb/
   2. Orb source code at https://github.com/Rookout/circle-ci-orbs
   3. Rookout docs: https://docs.rookout.com
