# Build Container
FROM maven:3-amazoncorretto-15

WORKDIR /home/maven/backend

# Copy Files
COPY backend/pom.xml backend/formatter.xml ./
COPY backend/business-partner-agent ./business-partner-agent
COPY backend/business-partner-agent-core ./business-partner-agent-core
COPY frontend ../frontend

# Cache Maven Artefacts
RUN mvn dependency:go-offline || true

# Generate License Info
RUN mvn clean install -N
RUN mvn -f business-partner-agent-core/pom.xml clean install -Dspotbugs.skip=true -Dpmd.skip=true
RUN mvn -f business-partner-agent/pom.xml license:third-party-report xml:transform -Pgenerate-license-info
RUN cp ./business-partner-agent/target/generated-resources/xml/xslt/third-party-report.xml ../frontend/licenses/attribution.xml

# Build .jar
RUN mvn clean install -P build-frontend -DskipTests=true -Dspotbugs.skip=true -Dpmd.skip=true

# Runtime Container
FROM amazoncorretto:15-alpine
COPY --from=0 /home/maven/backend/business-partner-agent/target/business-partner-agent*SNAPSHOT.jar business-partner-agent.jar

EXPOSE 8080
CMD java -XX:+UnlockExperimentalVMOptions -Dcom.sun.management.jmxremote -noverify ${JAVA_OPTS} -jar business-partner-agent.jar