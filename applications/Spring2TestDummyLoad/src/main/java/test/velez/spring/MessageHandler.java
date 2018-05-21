package test.velez.spring;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import java.time.Duration;
import reactor.core.publisher.Mono;

@Service
public class MessageHandler {

  public Mono<ServerResponse> handleMessages(ServerRequest req){
    
    return req.bodyToMono(Message.class).flatMap(m->{
     return Mono.fromCallable(()->{
        return new MessageAck(m.getId(),m.getPayload(),"ack");
      }).delayElement(Duration.ofMillis(m.getDelay())).flatMap(messageAck-> {
        return ServerResponse.status(HttpStatus.OK).body(org.springframework.web.reactive.function.BodyInserters.fromObject(messageAck)); 
      });
    });
  }
}
