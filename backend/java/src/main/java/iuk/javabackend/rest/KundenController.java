package iuk.javabackend.rest;

import iuk.javabackend.entities.Kunde;
import iuk.javabackend.services.KundenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/kunde")
public class KundenController {

    private final KundenService kundenService;

    @Autowired
    public KundenController(KundenService kundenService) {
        this.kundenService = kundenService;
    }

    @GetMapping("/getAllKunden")
    public List<Kunde> listAllKunden() {
        return kundenService.getAllKunden();
    }
}
