package iuk.javabackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "zahlungsart")
public class Zahlungsart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    private String name;

    @OneToMany(mappedBy = "zahlungsart")
    private List<Kunde> kunde;

    @OneToMany(mappedBy = "zahlungsart")
    private List<Bestellung> bestellung;
}
