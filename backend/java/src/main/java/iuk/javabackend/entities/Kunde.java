package iuk.javabackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Kunde {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    private String vorname;
    private String nachname;
    private Date geburtsdatum;
    private int telefonnummer;

    @ManyToOne()
    @JoinColumn(name = "") // TODO
    private Zahlungsart zahlungsart;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "kunde")
    private List<Bestellung> bestellungen;

}
