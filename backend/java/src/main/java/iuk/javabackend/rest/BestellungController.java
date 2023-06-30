package iuk.javabackend.rest;

import iuk.javabackend.entities.Bestellung;
import iuk.javabackend.services.BestellungService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/bestellung")
public class BestellungController {

    private final BestellungService bestellungService;

    @Autowired
    public BestellungController(BestellungService bestellungService){this.bestellungService = bestellungService;}

    @GetMapping("/getAllBestellung")
    public List<Bestellung> listAllBestellung(){return bestellungService.getAllBestellung();}

}
