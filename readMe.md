Password API that returns a password

Setup:

Step 1:
Ensure that you have Deno installed locally. If not, download here: https://deno.com/manual@v1.28.2/getting_started/installation

Step 2:
If Visual Studio Code, install the official extension called 'Deno'.
If other editor see https://deno.com/manual@v1.28.2/getting_started/setup_your_environment

Step 3:
Open up the project and cache its dependencies, not sure if you have to though, but it removes the error warnings.

Step 4: Go to passwordApi.ts to start server by giving acces to network in the terminal. Run command,
deno run --allow-net passwordApi.ts

Step 5: Open browser and go to localhost:8800/password/yourNameHere

Step 6: A random password is compiled by the generator.

Step 7: You're done. Easy peasy lemon sqeezy.



Side note: main.ts is just a file to check if the generator is working and is not necessary for the API.