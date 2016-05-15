# Docker GELF Logging Example

This is a really simple application that outputs random fake names using
the `console` different methods: `warn`,`error` and `log`.

The output is then redirected to an ELK instance, where we can
filter it by log level.

# How to run it?
Install `docker` and `docker-compose`, configure the IP for
your Logstash instance, then run

`docker-compose up`

## Any ways to run an ELK instance using Docker?
Sure! I recommend you to use:

https://github.com/deviantony/docker-elk

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

Related blog post: http://francolaiuppa.com/2016/05/15/routing-docker-container-logs-to-elk-using-compose/
