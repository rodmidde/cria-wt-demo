Best way to kick start your project is to clone/checkout this repository and start working on the (test)code.

To create this project yourself from scratch (thanks to http://blog.akquinet.de/2011/02/11/mavenizing-javascript-projects/):
- Download and install Maven 3.0.4
- Add the bin-path of the Maven-install location to your PATH by adding/changing the PATH Environment Variable (http://java.com/en/download/help/path.xml)
- Open a MSDOS/CMD (Windows) or Terminal Window (Mac, Linux)
- Run: mvn archetype:generate -DarchetypeArtifactId=javascript-quickstart -DarchetypeGroupId=de.akquinet.javascript.archetypes -DarchetypeVersion=1.0.0 -DgroupId=nl.ica.cria.demo -DartifactId=DemoApp (it may take a while because lots of dependencies get loaded when you use Maven for the first time)
- Open the project in PHPStorm/IntelliJ/etc.
- Open pom.xml
- Add <junitXmlReportFileName>../surefire-reports/TEST-jasmine.xml</junitXmlReportFileName> to the configuration section of the jasmine-maven-plugin
- Add site.xml to the src/site folder
- Modify the code, add code, add test cases etc.
- Run: mvn clean site. It will run testcases, minify source code, generate JSDoc documentation, JSLint parsing results etc
- Open target/site/project-reports.html to see how you're doing