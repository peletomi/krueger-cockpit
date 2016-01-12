# Krueger cockpit

This application displays metrics exposed by standard REST endpoints in other applications. The endpoints are similar
to the ones used in the [Spring Boot Actuator][springboot] project.

# Development

For building just do

    ./gradlew

This will compile the frontend, copy over the resources and compile the backend as well.

Starting the application is as easy as:

    APPLICATION_GROUP=krueger:localhost:8080 java -jar build/libs/krueger-cockpit-fat.jar

To start the application with [Taupage (etcd)] [id] discovery use

    ETCD_DISCOVERY_DOMAIN=etcd.cluster.url java -jar build/libs/krueger-cockpit-fat.jar

[springboot]: http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#production-ready-endpoints "Spring Boot Actuator"
[taupage]: https://github.com/zalando-stups/taupage "Taupage"

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
