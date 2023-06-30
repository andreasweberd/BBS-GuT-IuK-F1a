package iuk.javabackend.services;

import iuk.javabackend.entities.Kunde;
import iuk.javabackend.repositories.KundenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KundenService {

    private final KundenRepository kundenRepository;

    @Autowired
    public KundenService(KundenRepository kundenRepository) {
        this.kundenRepository = kundenRepository;
    }

    public List<Kunde> getAllKunden() {
        return kundenRepository.findAll();
    }
}
