package test.velez.boot2;

import static org.springframework.web.reactive.function.BodyInserters.fromObject;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

public class PassThroughHandler {
  
  private WebClient webClient;

  public PassThroughHandler(WebClient webClient) {
    this.webClient = webClient;
  }

  public Mono<ServerResponse> handle(ServerRequest serverRequest){
    Mono<Message> messageMono=serverRequest.bodyToMono(Message.class);
    return messageMono.flatMap(message->{
      return passThrough(message).flatMap(messageAck ->{
       return ServerResponse.ok().body(fromObject(messageAck));
      });
    });
  }

  public Mono<MessageAck> passThrough(Message message) {
    return webClient.post().uri("/messages")
        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
        .header(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE).body(fromObject(message))
        .exchange().flatMap(response -> {
          return response.bodyToMono(MessageAck.class);
        });
  }

}
