# Docker GELF Logging Example

This is a really simple application that outputs random fake names using
the `console` different methods: `warn`,`error` and `log`.

The output is then redirected to an ELK instance, where we can
filter it by log level.

# How to run it?
Install `docker` and `docker-compose`, configure the IP for
your Logstash instance, then run

`docker-compose up`

The config I'm using for `Logstash` is the following:

```
input {
        gelf {
                type => docker
                port => 5000
        }
}

output {
        elasticsearch {
                hosts => "elasticsearch:9200"
        }
}
```

Related blog post: [LINK]
