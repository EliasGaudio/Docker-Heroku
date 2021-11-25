FROM takacsmark/swarm-example:1.0

RUN sed -i "s/8080/\${PORT}/g"
