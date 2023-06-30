package iuk.javabackend.repositories;

import iuk.javabackend.entities.Bestellung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BestellungRepository extends JpaRepository<Bestellung, Integer> {
}
