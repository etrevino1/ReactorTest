package test.velez.boot2;

import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;


@Configuration
public class RoutesConfig {

    @Bean
    RouterFunction<ServerResponse> routes(PassThroughHandler passThroughHandler) {
        return route(POST("/passthrough/messages"),passThroughHandler::handle);
          
     }
}