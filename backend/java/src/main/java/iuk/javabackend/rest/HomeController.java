package iuk.javabackend.rest;

import jdk.jfr.ContentType;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping(value = "/api/test")
public class HomeController {

    @GetMapping
    public List<String> test() {
        return List.of("Hello World", "Mothafuckaaaa!");
    }

}
