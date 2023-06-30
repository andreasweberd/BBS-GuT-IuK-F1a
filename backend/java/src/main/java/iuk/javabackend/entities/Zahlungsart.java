package iuk.javabackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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
    private Kunde kunde;

    @OneToMany(mappedBy = "zahlungsart")
    private Bestellung bestellung;
}
