package iuk.javabackend.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/test")
public class HomeController {

    @GetMapping
    public List<String> test() {
        return List.of("Hello World", "Mothafuckaaaa!");
    }

    @GetMapping("/abc")
    public Map<String, Integer> test2() {
        Map<String, Integer> test = new HashMap<>();
        test.put("Test", 1);
        test.put("Bsp", 2);
        return test;
    }

}
