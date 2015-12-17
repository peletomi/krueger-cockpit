# Krueger cockpit

This application displays metrics exposed by standard REST endpoints in other applications. The endpoints are similar
to the ones used in the [Spring Boot Actuator](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#production-ready-endpoints) project.

# Development

For building just do

    ./gradlew

This will compile the frontend, copy over the resources and compile the backend as well.

Starting the application is as easy as:

    java -jar build/libs/krueger-cockpit-fat.jar

To start frontend development do

    sudo npm install -g elm
    cd frontend
    elm package install

To build just the frontend do:

    cd frontend
    elm make src/Main.elm --output=elm.js

# Useful elm links

* http://engineering.truqu.com/2015/08/19/real-world-elm-part-1.html
* https://bendyworks.com/elm-frontend-right-now/
* http://boonofcode.svbtle.com/setting-up-an-atom-elm-dev-environment
* https://github.com/basti1302/elm-reactor-custom-html/tree/1.1.0
* https://github.com/JustusAdam/schedule-planner-web/tree/gh-pages/src

# Contributors

* Tamas Eppel <tamas.ferenc.eppel@zalando.de>

# License

Copyright 2015 Zalando SE

http://opensource.org/licenses/MIT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.