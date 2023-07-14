package iuk.javabackend.services;

import iuk.javabackend.entities.Bestellung;
import iuk.javabackend.repositories.BestellungRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BestellungService {

    private final BestellungRepository bestellungRepository;

    @Autowired
    public BestellungService(BestellungRepository bestellungRepository){this.bestellungRepository = bestellungRepository;}

    public List<Bestellung> getAllBestellung(){return bestellungRepository.findAll();}
}
