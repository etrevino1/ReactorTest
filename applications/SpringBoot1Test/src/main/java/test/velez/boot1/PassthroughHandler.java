package test.velez.boot1;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class PassthroughHandler {

  private final RestTemplate restTemplate;

  private final String target;

  public PassthroughHandler(RestTemplateBuilder restTemplateBuilder,
      @Value("${loadtarget.host}") String target) {
    this.restTemplate = restTemplateBuilder.build();
    this.target = target;
  }


  public MessageAck handlePassthrough(Message message) {
    ResponseEntity<MessageAck> responseEntity =
        this.restTemplate.postForEntity(target + "/messages", message, MessageAck.class);
    return responseEntity.getBody();
  }
}
